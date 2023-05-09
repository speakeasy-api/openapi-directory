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
import org.openapis.openapi.models.operations.GetRenderRequest;
import org.openapis.openapi.models.operations.GetRenderResponse;
import org.openapis.openapi.models.operations.GetRenderSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRenderRequest req = new GetRenderRequest("corrupti");            

            GetRenderResponse res = sdk.edit.getRender(req, new GetRenderSecurity("provident") {{
                developerKey = "YOUR_API_KEY_HERE";
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


### [edit](docs/edit/README.md)

* [getRender](docs/edit/README.md#getrender) - Get Render Status
* [postRender](docs/edit/README.md#postrender) - Render Asset

### [serve](docs/serve/README.md)

* [deleteAsset](docs/serve/README.md#deleteasset) - Delete Asset
* [getAsset](docs/serve/README.md#getasset) - Get Asset
* [getAssetByRenderId](docs/serve/README.md#getassetbyrenderid) - Get Asset by Render ID
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
