# visionPrediction

## Overview

Resources that return predictions for image input.

### Available Operations

* [detectMultipart](#detectmultipart) - Detection with Image File
* [ocrMultipart](#ocrmultipart) - Detect Text
* [predictMultipart](#predictmultipart) - Make Prediction

## detectMultipart

Returns labels, probabilities, and bounding box coordinates for items detected in the specified local image file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetectMultipartResponse;
import org.openapis.openapi.models.operations.DetectMultipartSecurity;
import org.openapis.openapi.models.shared.ObjectDetectionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ObjectDetectionRequest req = new ObjectDetectionRequest("YCQ4ZACEPJFGXZNRA6ERF3GL5E") {{
                sampleBase64Content = "SomeBase64EncodedImage";
                sampleId = "quis";
                sampleLocation = "vitae";
            }};            

            DetectMultipartResponse res = sdk.visionPrediction.detectMultipart(req, new DetectMultipartSecurity("laborum") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.objectDetectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ocrMultipart

Returns a prediction from an OCR model for the specified image URL or local image file.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OcrMultipartRequestBody;
import org.openapis.openapi.models.operations.OcrMultipartRequestBodySampleContent;
import org.openapis.openapi.models.operations.OcrMultipartResponse;
import org.openapis.openapi.models.operations.OcrMultipartSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OcrMultipartRequestBody req = new OcrMultipartRequestBody() {{
                modelId = "WJH4YCA7YX4PCWVNCYNWYHBMY4";
                sampleContent = new OcrMultipartRequestBodySampleContent("animi".getBytes(), "enim");;
                sampleId = "odit";
                sampleLocation = "quo";
                task = "table";
            }};            

            OcrMultipartResponse res = sdk.visionPrediction.ocrMultipart(req, new OcrMultipartSecurity("sequi") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.ocrPredictResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## predictMultipart

Returns a prediction from an image or multi-label model for the specified image.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PredictMultipartResponse;
import org.openapis.openapi.models.operations.PredictMultipartSecurity;
import org.openapis.openapi.models.shared.ImageClassificationRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ImageClassificationRequest req = new ImageClassificationRequest("WJH4YCA7YX4PCWVNCYNWYHBMY4") {{
                numResults = 3;
                sampleBase64Content = "SomeBase64EncodedImage";
                sampleId = "tenetur";
                sampleLocation = "ipsam";
            }};            

            PredictMultipartResponse res = sdk.visionPrediction.predictMultipart(req, new PredictMultipartSecurity("id") {{
                bearerToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.imageClassificationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
