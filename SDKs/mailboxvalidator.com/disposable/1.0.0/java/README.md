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
import org.openapis.openapi.models.operations.GetV1EmailDisposableFormatEnum;
import org.openapis.openapi.models.operations.GetV1EmailDisposableRequest;
import org.openapis.openapi.models.operations.GetV1EmailDisposableResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1EmailDisposableRequest req = new GetV1EmailDisposableRequest("corrupti", "provident") {{
                format = GetV1EmailDisposableFormatEnum.XML;
            }};            

            GetV1EmailDisposableResponse res = sdk.getV1EmailDisposable(req);

            if (res.getV1EmailDisposable200ApplicationJSONString != null) {
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

* [getV1EmailDisposable](docs/sdk/README.md#getv1emaildisposable) - The Disposable Email Checker API does checking on a single email address and returns if it is from a disposable email provider in either JSON or XML format.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
