# improvementProgram

### Available Operations

* [postImproveForm](#postimproveform) - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

* [postImproveJson](#postimprovejson) - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.

* [postImproveMultipart](#postimprovemultipart) - Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.


## postImproveForm

Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostImproveFormResponse;
import org.openapis.openapi.models.shared.ImprovementProgramJson;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ImprovementProgramJson req = new ImprovementProgramJson() {{
                imageFileB64 = "commodi";
                imageFilename = "car.jpg";
                imageUrl = "https://www.remove.bg/example-hd.jpg";
                tag = "batch_1_2020";
            }};            

            PostImproveFormResponse res = sdk.improvementProgram.postImproveForm(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postImproveJson

Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostImproveJsonResponse;
import org.openapis.openapi.models.shared.ImprovementProgramJson;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ImprovementProgramJson req = new ImprovementProgramJson() {{
                imageFileB64 = "modi";
                imageFilename = "car.jpg";
                imageUrl = "https://www.remove.bg/example-hd.jpg";
                tag = "batch_1_2020";
            }};            

            PostImproveJsonResponse res = sdk.improvementProgram.postImproveJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postImproveMultipart

Submit an image to the remove.bg Improvement program
* Contribute an image that remove.bg is currently not able to remove the background from properly
* Help us make remove.bg better
* Get better results for similiar images in the future

Notes:
  * By submitting images through the API you agree to the <a target="_blank" rel="noopener" href="/ipc">Improvement Program Conditions</a>
  * File size: up to 12MB
  * up to 100 files per day. <br> Higher Rate Limits are available for Enterprise customers <a href="/support/contact?subject=Improvement+Program+Rate+Limit">upon request</a>.

Requires either an API Key to be provided in the `X-API-Key` request header or an OAuth 2.0 access token to be provided in the `Authorization` request header.

Please note that submissions are used on a best-effort basis and the extent of expected improvement varies depending on many factors, including the number of provided images, their complexity and visual similarity. Improvements usually take several weeks to become effective.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostImproveMultipartResponse;
import org.openapis.openapi.models.shared.ImprovementProgramMultipart;
import org.openapis.openapi.models.shared.ImprovementProgramMultipartImageFile;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    apiKeyHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ImprovementProgramMultipart req = new ImprovementProgramMultipart() {{
                imageFile = new ImprovementProgramMultipartImageFile("impedit".getBytes(), "cum");;
                imageFileB64 = "esse";
                imageFilename = "ipsum";
                imageUrl = "https://www.remove.bg/example-hd.jpg";
                tag = "excepturi";
            }};            

            PostImproveMultipartResponse res = sdk.improvementProgram.postImproveMultipart(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
