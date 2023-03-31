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

import org.openapis.openapi.models.operations.CreateCommandSecurity;
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequest;
import org.openapis.openapi.models.operations.CreateCommandRequest;
import org.openapis.openapi.models.operations.CreateCommandResponse;
import org.openapis.openapi.models.shared.CommandEnumCommandModeEnum;
import org.openapis.openapi.models.shared.SchemeAccountSidAuthToken;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCommandRequest req = new CreateCommandRequest() {{
                security = new CreateCommandSecurity() {{
                    accountSidAuthToken = new SchemeAccountSidAuthToken() {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }};
                request = new CreateCommandCreateCommandRequest() {{
                    callbackMethod = "PATCH";
                    callbackUrl = "https://salty-stag.name";
                    command = "nulla";
                    commandMode = "binary";
                    deliveryReceiptRequested = false;
                    includeSid = "illum";
                    sim = "vel";
                }};
            }};            

            CreateCommandResponse res = sdk.createCommand(req);

            if (res.wirelessV1Command.isPresent()) {
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

* `createCommand` - Send a Command to a Sim.
* `createRatePlan`
* `deleteCommand` - Delete a Command instance from your account.
* `deleteRatePlan`
* `deleteSim` - Delete a Sim resource on your Account.
* `fetchCommand` - Fetch a Command instance from your account.
* `fetchRatePlan`
* `fetchSim` - Fetch a Sim resource on your Account.
* `listAccountUsageRecord`
* `listCommand` - Retrieve a list of Commands from your account.
* `listDataSession`
* `listRatePlan`
* `listSim` - Retrieve a list of Sim resources on your Account.
* `listUsageRecord`
* `updateRatePlan`
* `updateSim` - Updates the given properties of a Sim resource on your Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
