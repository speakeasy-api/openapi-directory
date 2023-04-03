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

import org.openapis.openapi.models.operations.GetAllAccountsSecurity;
import org.openapis.openapi.models.operations.GetAllAccountsProviderEnum;
import org.openapis.openapi.models.operations.GetAllAccountsRequest;
import org.openapis.openapi.models.operations.GetAllAccountsResponse;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllAccountsRequest req = new GetAllAccountsRequest() {{
                pageNumber = 1;
                pageSize = 1;
                provider = "viber_service_msg";
            }}            

            GetAllAccountsResponse res = sdk.account.getAllAccounts(req, new GetAllAccountsSecurity() {{
                basicAuth = new SchemeBasicAuth() {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.getAllAccounts200ApplicationJSONObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### account

* `getAllAccounts` - Retrieve all accounts you own

### application

* `linkApplication` - Link application to an account
* `unliWithoutApplicationnkApplication` - Unlink application from an account

### facebookMessenger

* `createMessengerAccount` - Create a Messenger account
* `deleteMessengerAccount` - Delete a Messenger account
* `getMessengerAccount` - Retrieve a Messenger account
* `updateMessengerAccount` - Update a Messenger account

### viberServiceMessage

* `getVSMAccount` - Retrieve a Viber Service Message account

### whatsApp

* `getWAAccount` - Retrieve a Whatsapp account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
