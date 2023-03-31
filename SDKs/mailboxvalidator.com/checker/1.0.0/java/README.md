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

import org.openapis.openapi.models.operations.GetV1EmailFreeFormatEnum;
import org.openapis.openapi.models.operations.GetV1EmailFreeQueryParams;
import org.openapis.openapi.models.operations.GetV1EmailFreeRequest;
import org.openapis.openapi.models.operations.GetV1EmailFreeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV1EmailFreeRequest req = new GetV1EmailFreeRequest() {{
                queryParams = new GetV1EmailFreeQueryParams() {{
                    email = "Larue_Rau85@yahoo.com";
                    format = "xml";
                    key = "illum";
                }};
            }};            

            GetV1EmailFreeResponse res = sdk.getV1EmailFree(req);

            if (res.getV1EmailFree200ApplicationJSONString.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `getV1EmailFree` - The Free Email Checker API does validation on a single email address and returns if it is from a free email provider in either JSON or XML format.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
