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

import org.openapis.openapi.models.operations.VerifyCheckPathParams;
import org.openapis.openapi.models.operations.VerifyCheckRequest;
import org.openapis.openapi.models.operations.VerifyCheckResponse;
import org.openapis.openapi.models.shared.CheckRequest;
import org.openapis.openapi.models.shared.FormatEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            VerifyCheckRequest req = new VerifyCheckRequest() {{
                pathParams = new VerifyCheckPathParams() {{
                    format = "xml";
                }};
                request = new CheckRequest() {{
                    apiKey = "abcd1234";
                    apiSecret = "Sup3rS3cr3t!!";
                    code = "1234";
                    ipAddress = "123.0.0.255";
                    requestId = "abcdef0123456789abcdef0123456789";
                }};
            }};            

            VerifyCheckResponse res = sdk.verifyCheck(req);

            if (res.verifyCheck200ApplicationJSONOneOf.isPresent()) {
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

* `verifyCheck` - Verify Check
* `verifyControl` - Verify Control
* `verifyRequestWithPsd2` - PSD2 (Payment Services Directive 2) Request
* `verifySearch` - Verify Search

### fraudManagement

* `networkUnblock` - Request a network unblock

### requests

* `verifyRequest` - Request a Verification
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
