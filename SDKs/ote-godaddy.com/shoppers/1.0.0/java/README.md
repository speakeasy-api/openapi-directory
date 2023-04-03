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

            ChangePasswordRequest req = new ChangePasswordRequest() {{
                secret = new Secret() {{
                    secret = "P@55w0rd+";
                }};
                shopperId = "corrupti";
            }}            

            ChangePasswordResponse res = sdk.v1.changePassword(req);

            if (res.shopperId.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `changePassword` - Set subaccount's password
* `createSubaccountJson` - Create a Subaccount owned by the authenticated Reseller
* `createSubaccountRaw` - Create a Subaccount owned by the authenticated Reseller
* `delete` - Request the deletion of a shopper profile
* `get` - Get details for the specified Shopper
* `getStatus` - Get details for the specified Shopper
* `updateJson` - Update details for the specified Shopper
* `updateRaw` - Update details for the specified Shopper
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
