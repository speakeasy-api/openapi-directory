# computerVision

### Available Operations

* [getKeywords](#getkeywords) - List suggested keywords
* [getSimilarImages](#getsimilarimages) - List similar images
* [getSimilarVideos](#getsimilarvideos) - List similar videos
* [~~uploadEphemeralImage~~](#uploadephemeralimage) - Upload ephemeral images :warning: **Deprecated**
* [uploadImage](#uploadimage) - Upload images

## getKeywords

This endpoint returns a list of suggested keywords for a media item that you specify or upload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetKeywordsRequest;
import org.openapis.openapi.models.operations.GetKeywordsResponse;
import org.openapis.openapi.models.operations.GetKeywordsSecurity;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetKeywordsRequest req = new GetKeywordsRequest("veritatis");            

            GetKeywordsResponse res = sdk.computerVision.getKeywords(req, new GetKeywordsSecurity() {{
                basic = new SchemeBasic("esse", "quod") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.keywordDataList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSimilarImages

This endpoint returns images that are visually similar to an image that you specify or upload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSimilarImagesLicenseEnum;
import org.openapis.openapi.models.operations.GetSimilarImagesRequest;
import org.openapis.openapi.models.operations.GetSimilarImagesResponse;
import org.openapis.openapi.models.operations.GetSimilarImagesSecurity;
import org.openapis.openapi.models.operations.GetSimilarImagesViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSimilarImagesRequest req = new GetSimilarImagesRequest("nam") {{
                language = LanguageEnum.CS;
                license = new org.openapis.openapi.models.operations.GetSimilarImagesLicenseEnum[]{{
                    add(GetSimilarImagesLicenseEnum.COMMERCIAL),
                    add(GetSimilarImagesLicenseEnum.COMMERCIAL),
                    add(GetSimilarImagesLicenseEnum.EDITORIAL),
                    add(GetSimilarImagesLicenseEnum.COMMERCIAL),
                }};
                page = 690025L;
                perPage = 473221L;
                safe = false;
                view = GetSimilarImagesViewEnum.FULL;
            }};            

            GetSimilarImagesResponse res = sdk.computerVision.getSimilarImages(req, new GetSimilarImagesSecurity() {{
                basic = new SchemeBasic("occaecati", "minima") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.imageSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSimilarVideos

This endpoint returns videos that are visually similar to an image that you specify or upload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSimilarVideosLicenseEnum;
import org.openapis.openapi.models.operations.GetSimilarVideosRequest;
import org.openapis.openapi.models.operations.GetSimilarVideosResponse;
import org.openapis.openapi.models.operations.GetSimilarVideosSecurity;
import org.openapis.openapi.models.operations.GetSimilarVideosViewEnum;
import org.openapis.openapi.models.shared.LanguageEnum;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSimilarVideosRequest req = new GetSimilarVideosRequest("distinctio") {{
                language = LanguageEnum.CS;
                license = new org.openapis.openapi.models.operations.GetSimilarVideosLicenseEnum[]{{
                    add(GetSimilarVideosLicenseEnum.COMMERCIAL),
                    add(GetSimilarVideosLicenseEnum.EDITORIAL),
                    add(GetSimilarVideosLicenseEnum.EDITORIAL),
                    add(GetSimilarVideosLicenseEnum.COMMERCIAL),
                }};
                page = 766964L;
                perPage = 160538L;
                safe = false;
                view = GetSimilarVideosViewEnum.MINIMAL;
            }};            

            GetSimilarVideosResponse res = sdk.computerVision.getSimilarVideos(req, new GetSimilarVideosSecurity() {{
                basic = new SchemeBasic("minus", "quaerat") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.videoSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ~~uploadEphemeralImage~~

Deprecated; use `POST /v2/cv/images` instead. This endpoint uploads an image for reverse image search. The image must be in JPEG or PNG format. To get the search results, pass the ID that this endpoint returns to the `GET /v2/images/{id}/similar` endpoint.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadEphemeralImageResponse;
import org.openapis.openapi.models.operations.UploadEphemeralImageSecurity;
import org.openapis.openapi.models.shared.ImageCreateRequest;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ImageCreateRequest req = new ImageCreateRequest("sapiente");            

            UploadEphemeralImageResponse res = sdk.computerVision.uploadEphemeralImage(req, new UploadEphemeralImageSecurity() {{
                basic = new SchemeBasic("consectetur", "esse") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.imageCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## uploadImage

This endpoint uploads an image for reverse image or video search. Images must be in JPEG or PNG format. To get the search results, pass the upload ID that this endpoint returns to the GET /v2/cv/similar/images or GET /v2/cv/similar/videos endpoints. Contact us for access to this endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UploadImageResponse;
import org.openapis.openapi.models.operations.UploadImageSecurity;
import org.openapis.openapi.models.shared.ImageCreateRequest;
import org.openapis.openapi.models.shared.SchemeBasic;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ImageCreateRequest req = new ImageCreateRequest("blanditiis");            

            UploadImageResponse res = sdk.computerVision.uploadImage(req, new UploadImageSecurity() {{
                basic = new SchemeBasic("provident", "a") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.computerVisionImageCreateResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
