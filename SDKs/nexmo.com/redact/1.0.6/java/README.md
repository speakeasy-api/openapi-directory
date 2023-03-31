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

import org.openapis.openapi.models.operations.RedactMessageSecurity;
import org.openapis.openapi.models.operations.RedactMessageRequest;
import org.openapis.openapi.models.operations.RedactMessageResponse;
import org.openapis.openapi.models.shared.RedactTransactionProductEnum;
import org.openapis.openapi.models.shared.RedactTransactionTypeEnum;
import org.openapis.openapi.models.shared.RedactTransaction;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RedactMessageRequest req = new RedactMessageRequest() {{
                security = new RedactMessageSecurity() {{
                    basicAuth = new SchemeBasicAuth() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new RedactTransaction() {{
                    id = "209ab3c7536542b91e8b5aef032f6861";
                    product = "sms";
                    type = "outbound";
                }};
            }};            

            RedactMessageResponse res = sdk.redactMessage(req);

            if (res.statusCode == 200) {
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

* `redactMessage` - Redact a specific message
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
