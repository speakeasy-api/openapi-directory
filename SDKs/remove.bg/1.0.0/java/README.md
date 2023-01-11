# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKeyHeader = new SchemeApiKeyHeader() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            PostRemovebgRequest req = new PostRemovebgRequest() {{
                request = new PostRemovebgRequests() {{
                    removeBgJson = new RemoveBgJson() {{
                        addShadow = false;
                        bgColor = "voluptas";
                        bgImageUrl = "culpa";
                        channels = "rgba";
                        crop = true;
                        cropMargin = "dolor";
                        format = "zip";
                        imageFileB64 = "voluptas";
                        imageUrl = "fugit";
                        position = "et";
                        roi = "nihil";
                        scale = "rerum";
                        semitransparency = false;
                        size = "preview";
                        type = "auto";
                        typeLevel = "2";
                    }};
                    removeBgJson1 = new RemoveBgJson() {{
                        addShadow = false;
                        bgColor = "dolorem";
                        bgImageUrl = "et";
                        channels = "rgba";
                        crop = true;
                        cropMargin = "vitae";
                        format = "jpg";
                        imageFileB64 = "dolores";
                        imageUrl = "illum";
                        position = "debitis";
                        roi = "vel";
                        scale = "odio";
                        semitransparency = true;
                        size = "full";
                        type = "person";
                        typeLevel = "none";
                    }};
                    removeBgMultipart = new RemoveBgMultipart() {{
                        addShadow = false;
                        bgColor = "commodi";
                        bgImageFile = new RemoveBgMultipartBgImageFile() {{
                            bgImageFile = "quis";
                            content = "est".getBytes();
                        }};
                        bgImageUrl = "aut";
                        channels = "rgba";
                        crop = true;
                        cropMargin = "voluptas";
                        format = "zip";
                        imageFile = new RemoveBgMultipartImageFile() {{
                            content = "aut".getBytes();
                            imageFile = "illo";
                        }};
                        imageFileB64 = "sed";
                        imageUrl = "officiis";
                        position = "autem";
                        roi = "consectetur";
                        scale = "nobis";
                        semitransparency = false;
                        size = "preview";
                        type = "product";
                        typeLevel = "none";
                    }};
                }};
            }};

            PostRemovebgResponse res = sdk.backgroundRemoval.postRemovebg(req);

            if (res.removeBgJsonResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Background Removal

* `postRemovebg` - Remove the background of an image

### Fetch account info

* `getAccount` - Fetch credit balance and free API calls.

### Improvement Program

* `postImprove` - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day (up to 1000 for Enterprise customers). <br> Higher Rate Limits are available <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.


<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
