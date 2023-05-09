# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RenderSyncRequestBody1;
import org.openapis.openapi.models.operations.RenderSyncRequestBody1FormatEnum;
import org.openapis.openapi.models.operations.RenderSyncRequestBody1WaitUntilEnum;
import org.openapis.openapi.models.operations.RenderSyncRequestBody2;
import org.openapis.openapi.models.operations.RenderSyncRequestBody2FormatEnum;
import org.openapis.openapi.models.operations.RenderSyncRequestBody2WaitUntilEnum;
import org.openapis.openapi.models.operations.RenderSyncResponse;
import org.openapis.openapi.models.operations.RenderSyncSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new RenderSyncRequestBody2("magnam") {{
                blockAds = false;
                clickAccept = false;
                delay = "provident";
                format = RenderSyncRequestBody2FormatEnum.WEBP;
                fullPage = false;
                gpu = false;
                height = 844266L;
                hideCookieBanners = false;
                html = "unde";
                metadata = false;
                retina = false;
                selector = "nulla";
                thumbHeight = 544883L;
                thumbWidth = 847252L;
                url = "vel";
                waitFor = "error";
                waitToLeave = "deserunt";
                waitUntil = RenderSyncRequestBody2WaitUntilEnum.MOSTREQUESTSFINISHED;
                width = 437587L;
            }}            

            RenderSyncResponse res = sdk.renderSync(req, new RenderSyncSecurity("debitis") {{
                secretKey = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.renderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [renderSync](docs/sdk/README.md#rendersync) - Render a URL as an image or video
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
