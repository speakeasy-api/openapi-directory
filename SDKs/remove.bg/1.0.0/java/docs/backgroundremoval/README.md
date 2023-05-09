# backgroundRemoval

### Available Operations

* [postRemovebgForm](#postremovebgform) - Remove the background of an image
* [postRemovebgJson](#postremovebgjson) - Remove the background of an image
* [postRemovebgMultipart](#postremovebgmultipart) - Remove the background of an image

## postRemovebgForm

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRemovebgFormResponse;
import org.openapis.openapi.models.shared.RemoveBgJson;
import org.openapis.openapi.models.shared.RemoveBgJsonChannelsEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonFormatEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonSizeEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonTypeEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonTypeLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RemoveBgJson req = new RemoveBgJson() {{
                addShadow = false;
                bgColor = "debitis";
                bgImageUrl = "ipsa";
                channels = RemoveBgJsonChannelsEnum.ALPHA;
                crop = false;
                cropMargin = "tempora";
                format = RemoveBgJsonFormatEnum.PNG;
                imageFileB64 = "molestiae";
                imageUrl = "https://www.remove.bg/example-hd.jpg";
                position = "minus";
                roi = "placeat";
                scale = "voluptatum";
                semitransparency = false;
                size = RemoveBgJsonSizeEnum.FULL;
                type = RemoveBgJsonTypeEnum.PRODUCT;
                typeLevel = RemoveBgJsonTypeLevelEnum.ONE;
            }};            

            PostRemovebgFormResponse res = sdk.backgroundRemoval.postRemovebgForm(req);

            if (res.removeBgJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemovebgJson

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRemovebgJsonResponse;
import org.openapis.openapi.models.shared.RemoveBgJson;
import org.openapis.openapi.models.shared.RemoveBgJsonChannelsEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonFormatEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonSizeEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonTypeEnum;
import org.openapis.openapi.models.shared.RemoveBgJsonTypeLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RemoveBgJson req = new RemoveBgJson() {{
                addShadow = false;
                bgColor = "temporibus";
                bgImageUrl = "ab";
                channels = RemoveBgJsonChannelsEnum.RGBA;
                crop = false;
                cropMargin = "veritatis";
                format = RemoveBgJsonFormatEnum.JPG;
                imageFileB64 = "perferendis";
                imageUrl = "https://www.remove.bg/example-hd.jpg";
                position = "ipsam";
                roi = "repellendus";
                scale = "sapiente";
                semitransparency = false;
                size = RemoveBgJsonSizeEnum.AUTO;
                type = RemoveBgJsonTypeEnum.AUTO;
                typeLevel = RemoveBgJsonTypeLevelEnum.LATEST;
            }};            

            PostRemovebgJsonResponse res = sdk.backgroundRemoval.postRemovebgJson(req);

            if (res.removeBgJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRemovebgMultipart

Removes the background of a JPG/PNG image.

* File size: up to 12 MB
* Image source: File upload (binary or as base64 encoded string) or download from URL
* Image Content: Any photo with a foreground [(e.g. people, products, animals, cars, etc.)](/supported-images)
* Output resolutions available: Preview (up to 0.25 megapixels), Full (up to 25 megapixels)

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRemovebgMultipartResponse;
import org.openapis.openapi.models.shared.RemoveBgMultipart;
import org.openapis.openapi.models.shared.RemoveBgMultipartBgImageFile;
import org.openapis.openapi.models.shared.RemoveBgMultipartChannelsEnum;
import org.openapis.openapi.models.shared.RemoveBgMultipartFormatEnum;
import org.openapis.openapi.models.shared.RemoveBgMultipartImageFile;
import org.openapis.openapi.models.shared.RemoveBgMultipartSizeEnum;
import org.openapis.openapi.models.shared.RemoveBgMultipartTypeEnum;
import org.openapis.openapi.models.shared.RemoveBgMultipartTypeLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.RemoveBgMultipart req = new RemoveBgMultipart() {{
                addShadow = false;
                bgColor = "maiores";
                bgImageFile = new RemoveBgMultipartBgImageFile("molestiae", "quod".getBytes());;
                bgImageUrl = "quod";
                channels = RemoveBgMultipartChannelsEnum.RGBA;
                crop = false;
                cropMargin = "totam";
                format = RemoveBgMultipartFormatEnum.ZIP;
                imageFile = new RemoveBgMultipartImageFile("dolorum".getBytes(), "dicta");;
                imageFileB64 = "nam";
                imageUrl = "https://www.remove.bg/example-hd.jpg";
                position = "officia";
                roi = "occaecati";
                scale = "fugit";
                semitransparency = false;
                size = RemoveBgMultipartSizeEnum.FULL;
                type = RemoveBgMultipartTypeEnum.CAR;
                typeLevel = RemoveBgMultipartTypeLevelEnum.LATEST;
            }};            

            PostRemovebgMultipartResponse res = sdk.backgroundRemoval.postRemovebgMultipart(req);

            if (res.removeBgJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
