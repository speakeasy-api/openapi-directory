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
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequest;
import org.openapis.openapi.models.operations.CreateCommandCreateCommandRequestCallbackMethodEnum;
import org.openapis.openapi.models.operations.CreateCommandResponse;
import org.openapis.openapi.models.operations.CreateCommandSecurity;
import org.openapis.openapi.models.shared.CommandEnumCommandModeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCommandCreateCommandRequest req = new CreateCommandCreateCommandRequest("corrupti") {{
                callbackMethod = CreateCommandCreateCommandRequestCallbackMethodEnum.PATCH;
                callbackUrl = "https://terrible-nutrient.org";
                commandMode = CommandEnumCommandModeEnum.BINARY;
                deliveryReceiptRequested = false;
                includeSid = "illum";
                sim = "vel";
            }};            

            CreateCommandResponse res = sdk.createCommand(req, new CreateCommandSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.wirelessV1Command != null) {
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

* [createCommand](docs/sdk/README.md#createcommand) - Send a Command to a Sim.
* [createRatePlan](docs/sdk/README.md#createrateplan)
* [deleteCommand](docs/sdk/README.md#deletecommand) - Delete a Command instance from your account.
* [deleteRatePlan](docs/sdk/README.md#deleterateplan)
* [deleteSim](docs/sdk/README.md#deletesim) - Delete a Sim resource on your Account.
* [fetchCommand](docs/sdk/README.md#fetchcommand) - Fetch a Command instance from your account.
* [fetchRatePlan](docs/sdk/README.md#fetchrateplan)
* [fetchSim](docs/sdk/README.md#fetchsim) - Fetch a Sim resource on your Account.
* [listAccountUsageRecord](docs/sdk/README.md#listaccountusagerecord)
* [listCommand](docs/sdk/README.md#listcommand) - Retrieve a list of Commands from your account.
* [listDataSession](docs/sdk/README.md#listdatasession)
* [listRatePlan](docs/sdk/README.md#listrateplan)
* [listSim](docs/sdk/README.md#listsim) - Retrieve a list of Sim resources on your Account.
* [listUsageRecord](docs/sdk/README.md#listusagerecord)
* [updateRatePlan](docs/sdk/README.md#updaterateplan)
* [updateSim](docs/sdk/README.md#updatesim) - Updates the given properties of a Sim resource on your Account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
