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
import org.openapis.openapi.models.operations.CreateSubAccountRequest;
import org.openapis.openapi.models.operations.CreateSubAccountResponse;
import org.openapis.openapi.models.operations.CreateSubAccountSecurity;
import org.openapis.openapi.models.shared.NewSubaccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateSubAccountRequest req = new CreateSubAccountRequest(                new NewSubaccountRequest("Subaccount department A") {{
                                secret = "Password123";
                                usePrimaryAccountBalance = false;
                            }};, "corrupti");            

            CreateSubAccountResponse res = sdk.subaccountManagement.createSubAccount(req, new CreateSubAccountSecurity("provident", "distinctio") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.subaccountCreateResponse != null) {
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


### [subaccountManagement](docs/subaccountmanagement/README.md)

* [createSubAccount](docs/subaccountmanagement/README.md#createsubaccount) - Create subaccount
* [modifySubaccount](docs/subaccountmanagement/README.md#modifysubaccount) - Modify a subaccount
* [retrieveSubaccount](docs/subaccountmanagement/README.md#retrievesubaccount) - Retrieve a subaccount
* [retrieveSubaccountsList](docs/subaccountmanagement/README.md#retrievesubaccountslist) - Retrieve list of subaccounts

### [transfers](docs/transfers/README.md)

* [retrieveBalanceTransfers](docs/transfers/README.md#retrievebalancetransfers) - Retrieve list of balance transfers
* [retrieveCreditTransfers](docs/transfers/README.md#retrievecredittransfers) - Retrieve list of credit transfers
* [transferBalance](docs/transfers/README.md#transferbalance) - Transfer balance
* [transferCredit](docs/transfers/README.md#transfercredit) - Transfer credit
* [transferNumber](docs/transfers/README.md#transfernumber) - Transfer number
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
