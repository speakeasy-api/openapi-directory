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
import org.openapis.openapi.models.operations.CreateAccountConfigCreateAccountConfigRequest;
import org.openapis.openapi.models.operations.CreateAccountConfigResponse;
import org.openapis.openapi.models.operations.CreateAccountConfigSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateAccountConfigCreateAccountConfigRequest req = new CreateAccountConfigCreateAccountConfigRequest("corrupti", "provident");            

            CreateAccountConfigResponse res = sdk.createAccountConfig(req, new CreateAccountConfigSecurity("distinctio", "quibusdam") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.microvisorV1AccountConfig != null) {
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

* [createAccountConfig](docs/sdk/README.md#createaccountconfig) - Create a config for an Account.
* [createAccountSecret](docs/sdk/README.md#createaccountsecret) - Create a secret for an Account.
* [createDeviceConfig](docs/sdk/README.md#createdeviceconfig) - Create a config for a Microvisor Device.
* [createDeviceSecret](docs/sdk/README.md#createdevicesecret) - Create a secret for a Microvisor Device.
* [deleteAccountConfig](docs/sdk/README.md#deleteaccountconfig) - Delete a config for an Account.
* [deleteAccountSecret](docs/sdk/README.md#deleteaccountsecret) - Delete a secret for an Account.
* [deleteApp](docs/sdk/README.md#deleteapp) - Delete a specific App.
* [deleteDeviceConfig](docs/sdk/README.md#deletedeviceconfig) - Delete a config for a Microvisor Device.
* [deleteDeviceSecret](docs/sdk/README.md#deletedevicesecret) - Delete a secret for a Microvisor Device.
* [fetchAccountConfig](docs/sdk/README.md#fetchaccountconfig) - Retrieve a Config for an Account.
* [fetchAccountSecret](docs/sdk/README.md#fetchaccountsecret) - Retrieve a Secret for an Account.
* [fetchApp](docs/sdk/README.md#fetchapp) - Fetch a specific App.
* [fetchAppManifest](docs/sdk/README.md#fetchappmanifest) - Retrieve the Manifest for an App.
* [fetchDevice](docs/sdk/README.md#fetchdevice) - Fetch a specific Device.
* [fetchDeviceConfig](docs/sdk/README.md#fetchdeviceconfig) - Retrieve a Config for a Device.
* [fetchDeviceSecret](docs/sdk/README.md#fetchdevicesecret) - Retrieve a Secret for a Device.
* [listAccountConfig](docs/sdk/README.md#listaccountconfig) - Retrieve a list of all Configs for an Account.
* [listAccountSecret](docs/sdk/README.md#listaccountsecret) - Retrieve a list of all Secrets for an Account.
* [listApp](docs/sdk/README.md#listapp) - Retrieve a list of all Apps for an Account.
* [listDevice](docs/sdk/README.md#listdevice) - Retrieve a list of all Devices registered with the Account.
* [listDeviceConfig](docs/sdk/README.md#listdeviceconfig) - Retrieve a list of all Configs for a Device.
* [listDeviceSecret](docs/sdk/README.md#listdevicesecret) - Retrieve a list of all Secrets for a Device.
* [updateAccountConfig](docs/sdk/README.md#updateaccountconfig) - Update a config for an Account.
* [updateAccountSecret](docs/sdk/README.md#updateaccountsecret) - Update a secret for an Account.
* [updateDevice](docs/sdk/README.md#updatedevice) - Update a specific Device.
* [updateDeviceConfig](docs/sdk/README.md#updatedeviceconfig) - Update a config for a Microvisor Device.
* [updateDeviceSecret](docs/sdk/README.md#updatedevicesecret) - Update a secret for a Microvisor Device.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
