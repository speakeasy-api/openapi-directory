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
import org.openapis.openapi.models.operations.GetMappingValuesKeyKeyEnum;
import org.openapis.openapi.models.operations.GetMappingValuesKeyRequest;
import org.openapis.openapi.models.operations.GetMappingValuesKeyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMappingValuesKeyRequest req = new GetMappingValuesKeyRequest(GetMappingValuesKeyKeyEnum.CURRENCY);            

            GetMappingValuesKeyResponse res = sdk.getMappingValuesKey(req);

            if (res.getMappingValuesKey200ApplicationJSONObject != null) {
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

* [getMappingValuesKey](docs/sdk/README.md#getmappingvalueskey) - Get values for enum-like fields.
* [postMapping](docs/sdk/README.md#postmapping) - Allows mapping from third-party identifiers to FIGIs.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
