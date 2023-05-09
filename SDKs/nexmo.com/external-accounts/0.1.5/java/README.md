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
import org.openapis.openapi.models.operations.GetAllAccountsProviderEnum;
import org.openapis.openapi.models.operations.GetAllAccountsRequest;
import org.openapis.openapi.models.operations.GetAllAccountsResponse;
import org.openapis.openapi.models.operations.GetAllAccountsSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllAccountsRequest req = new GetAllAccountsRequest() {{
                pageNumber = 1L;
                pageSize = 1L;
                provider = GetAllAccountsProviderEnum.VIBER_SERVICE_MSG;
            }};            

            GetAllAccountsResponse res = sdk.account.getAllAccounts(req, new GetAllAccountsSecurity() {{
                basicAuth = new SchemeBasicAuth("provident", "distinctio") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }};
            }});

            if (res.getAllAccounts200ApplicationJSONObject != null) {
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


### [account](docs/account/README.md)

* [getAllAccounts](docs/account/README.md#getallaccounts) - Retrieve all accounts you own

### [application](docs/application/README.md)

* [linkApplication](docs/application/README.md#linkapplication) - Link application to an account
* [unliWithoutApplicationnkApplication](docs/application/README.md#unliwithoutapplicationnkapplication) - Unlink application from an account

### [facebookMessenger](docs/facebookmessenger/README.md)

* [createMessengerAccount](docs/facebookmessenger/README.md#createmessengeraccount) - Create a Messenger account
* [deleteMessengerAccount](docs/facebookmessenger/README.md#deletemessengeraccount) - Delete a Messenger account
* [getMessengerAccount](docs/facebookmessenger/README.md#getmessengeraccount) - Retrieve a Messenger account
* [updateMessengerAccount](docs/facebookmessenger/README.md#updatemessengeraccount) - Update a Messenger account

### [viberServiceMessage](docs/viberservicemessage/README.md)

* [getVSMAccount](docs/viberservicemessage/README.md#getvsmaccount) - Retrieve a Viber Service Message account

### [whatsApp](docs/whatsapp/README.md)

* [getWAAccount](docs/whatsapp/README.md#getwaaccount) - Retrieve a Whatsapp account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
