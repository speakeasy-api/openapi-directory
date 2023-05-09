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
import org.openapis.openapi.models.operations.ChangePasswordRequest;
import org.openapis.openapi.models.operations.ChangePasswordResponse;
import org.openapis.openapi.models.shared.Secret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ChangePasswordRequest req = new ChangePasswordRequest(                new Secret() {{
                                secret = "P@55w0rd+";
                            }};, "corrupti");            

            ChangePasswordResponse res = sdk.v1.changePassword(req);

            if (res.shopperId != null) {
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


### [v1](docs/v1/README.md)

* [changePassword](docs/v1/README.md#changepassword) - Set subaccount's password
* [createSubaccountJson](docs/v1/README.md#createsubaccountjson) - Create a Subaccount owned by the authenticated Reseller
* [createSubaccountRaw](docs/v1/README.md#createsubaccountraw) - Create a Subaccount owned by the authenticated Reseller
* [delete](docs/v1/README.md#delete) - Request the deletion of a shopper profile
* [get](docs/v1/README.md#get) - Get details for the specified Shopper
* [getStatus](docs/v1/README.md#getstatus) - Get details for the specified Shopper
* [updateJson](docs/v1/README.md#updatejson) - Update details for the specified Shopper
* [updateRaw](docs/v1/README.md#updateraw) - Update details for the specified Shopper
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
