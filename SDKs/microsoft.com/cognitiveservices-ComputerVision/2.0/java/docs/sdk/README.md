# SDK

## Overview

The Computer Vision API provides state-of-the-art algorithms to process images and return information. For example, it can be used to determine if an image contains mature content, or it can be used to find all the faces in an image.  It also has other features like estimating dominant and accent colors, categorizing the content of images, and describing an image with complete English sentences.  Additionally, it can also intelligently generate images thumbnails for displaying large images effectively.

### Available Operations

* [analyzeImage](#analyzeimage) - This operation extracts a rich set of visual features based on the image content.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [analyzeImageByDomain](#analyzeimagebydomain) - This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON.
If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [describeImage](#describeimage) - This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. All descriptions are in English.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [detectObjects](#detectobjects) - Performs object detection on the specified image.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [generateThumbnail](#generatethumbnail) - This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image.
A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.
* [getAreaOfInterest](#getareaofinterest) - This operation returns a bounding box around the most important area of the image.
A successful response will be returned in JSON. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.
* [listModels](#listmodels) - This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.
* [recognizePrintedText](#recognizeprintedtext) - Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
Upon success, the OCR results will be returned.
Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.
* [tagImage](#tagimage) - This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag "cello" may be accompanied by the hint "musical instrument". All tags are in English.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

## analyzeImage

This operation extracts a rich set of visual features based on the image content.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL. Within your request, there is an optional parameter to allow you to choose which features to return. By default, image categories are returned in the response.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyzeImageDetailsEnum;
import org.openapis.openapi.models.operations.AnalyzeImageRequest;
import org.openapis.openapi.models.operations.AnalyzeImageResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceLanguageEnum;
import org.openapis.openapi.models.shared.VisualFeaturesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnalyzeImageRequest req = new AnalyzeImageRequest(                new ImageUrl("magnam");) {{
                details = new org.openapis.openapi.models.operations.AnalyzeImageDetailsEnum[]{{
                    add(AnalyzeImageDetailsEnum.CELEBRITIES),
                    add(AnalyzeImageDetailsEnum.LANDMARKS),
                    add(AnalyzeImageDetailsEnum.CELEBRITIES),
                    add(AnalyzeImageDetailsEnum.CELEBRITIES),
                }};
                language = ServiceLanguageEnum.JA;
                visualFeatures = new org.openapis.openapi.models.shared.VisualFeaturesEnum[]{{
                    add(VisualFeaturesEnum.OBJECTS),
                    add(VisualFeaturesEnum.COLOR),
                    add(VisualFeaturesEnum.COLOR),
                    add(VisualFeaturesEnum.TAGS),
                }};
            }};            

            AnalyzeImageResponse res = sdk.sdk.analyzeImage(req);

            if (res.imageAnalysis != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## analyzeImageByDomain

This operation recognizes content within an image by applying a domain-specific model. The list of domain-specific models that are supported by the Computer Vision API can be retrieved using the /models GET request. Currently, the API provides following domain-specific models: celebrities, landmarks.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON.
If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AnalyzeImageByDomainRequest;
import org.openapis.openapi.models.operations.AnalyzeImageByDomainResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceLanguageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            AnalyzeImageByDomainRequest req = new AnalyzeImageByDomainRequest(                new ImageUrl("recusandae");, "temporibus") {{
                language = ServiceLanguageEnum.EN;
            }};            

            AnalyzeImageByDomainResponse res = sdk.sdk.analyzeImageByDomain(req);

            if (res.domainModelResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeImage

This operation generates a description of an image in human readable language with complete sentences. The description is based on a collection of content tags, which are also returned by the operation. More than one description can be generated for each image. Descriptions are ordered by their confidence score. All descriptions are in English.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeImageRequest;
import org.openapis.openapi.models.operations.DescribeImageResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceLanguageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeImageRequest req = new DescribeImageRequest(                new ImageUrl("veritatis");) {{
                language = ServiceLanguageEnum.PT;
                maxCandidates = 20218;
            }};            

            DescribeImageResponse res = sdk.sdk.describeImage(req);

            if (res.imageDescription != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detectObjects

Performs object detection on the specified image.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectObjectsResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsam") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ImageUrl req = new ImageUrl("repellendus");            

            DetectObjectsResponse res = sdk.sdk.detectObjects(req);

            if (res.detectResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateThumbnail

This operation generates a thumbnail image with the user-specified width and height. By default, the service analyzes the image, identifies the region of interest (ROI), and generates smart cropping coordinates based on the ROI. Smart cropping helps when you specify an aspect ratio that differs from that of the input image.
A successful response contains the thumbnail image binary. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, InvalidThumbnailSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateThumbnailRequest;
import org.openapis.openapi.models.operations.GenerateThumbnailResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateThumbnailRequest req = new GenerateThumbnailRequest(                new ImageUrl("quo");, 140350, 870013) {{
                smartCropping = false;
            }};            

            GenerateThumbnailResponse res = sdk.sdk.generateThumbnail(req);

            if (res.generateThumbnail200ApplicationOctetStreamBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAreaOfInterest

This operation returns a bounding box around the most important area of the image.
A successful response will be returned in JSON. If the request failed, the response contains an error code and a message to help determine what went wrong.
Upon failure, the error code and an error message are returned. The error code could be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, FailedToProcess, Timeout, or InternalServerError.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAreaOfInterestResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ImageUrl req = new ImageUrl("maiores");            

            GetAreaOfInterestResponse res = sdk.sdk.getAreaOfInterest(req);

            if (res.areaOfInterestResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listModels

This operation returns the list of domain-specific models that are supported by the Computer Vision API. Currently, the API supports following domain-specific models: celebrity recognizer, landmark recognizer.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListModelsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListModelsResponse res = sdk.sdk.listModels();

            if (res.listModelsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## recognizePrintedText

Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
Upon success, the OCR results will be returned.
Upon failure, the error code together with an error message will be returned. The error code can be one of InvalidImageUrl, InvalidImageFormat, InvalidImageSize, NotSupportedImage, NotSupportedLanguage, or InternalServerError.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RecognizePrintedTextRequest;
import org.openapis.openapi.models.operations.RecognizePrintedTextResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.OcrLanguageEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RecognizePrintedTextRequest req = new RecognizePrintedTextRequest(                new ImageUrl("quod");, false) {{
                language = OcrLanguageEnum.IT;
            }};            

            RecognizePrintedTextResponse res = sdk.sdk.recognizePrintedText(req);

            if (res.ocrResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagImage

This operation generates a list of words, or tags, that are relevant to the content of the supplied image. The Computer Vision API can return tags based on objects, living beings, scenery or actions found in images. Unlike categories, tags are not organized according to a hierarchical classification system, but correspond to image content. Tags may contain hints to avoid ambiguity or provide context, for example the tag "cello" may be accompanied by the hint "musical instrument". All tags are in English.
Two input methods are supported -- (1) Uploading an image or (2) specifying an image URL.
A successful response will be returned in JSON. If the request failed, the response will contain an error code and a message to help understand what went wrong.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagImageRequest;
import org.openapis.openapi.models.operations.TagImageResponse;
import org.openapis.openapi.models.shared.ImageUrl;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServiceLanguageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    apimKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagImageRequest req = new TagImageRequest(                new ImageUrl("porro");) {{
                language = ServiceLanguageEnum.PT;
            }};            

            TagImageResponse res = sdk.sdk.tagImage(req);

            if (res.tagResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
