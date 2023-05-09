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
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetResponse;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerAccountsGetRequest req = new AdexchangebuyerAccountsGetRequest(548814L) {{
                alt = AltEnum.JSON;
                fields = "provident";
                key = "distinctio";
                oauthToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "unde";
                userIp = "nulla";
            }};            

            AdexchangebuyerAccountsGetResponse res = sdk.accounts.adexchangebuyerAccountsGet(req, new AdexchangebuyerAccountsGetSecurity("corrupti", "illum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.account != null) {
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


### [accounts](docs/accounts/README.md)

* [adexchangebuyerAccountsGet](docs/accounts/README.md#adexchangebuyeraccountsget) - Gets one account by ID.
* [adexchangebuyerAccountsList](docs/accounts/README.md#adexchangebuyeraccountslist) - Retrieves the authenticated user's list of accounts.
* [adexchangebuyerAccountsPatch](docs/accounts/README.md#adexchangebuyeraccountspatch) - Updates an existing account. This method supports patch semantics.
* [adexchangebuyerAccountsUpdate](docs/accounts/README.md#adexchangebuyeraccountsupdate) - Updates an existing account.

### [billingInfo](docs/billinginfo/README.md)

* [adexchangebuyerBillingInfoGet](docs/billinginfo/README.md#adexchangebuyerbillinginfoget) - Returns the billing information for one account specified by account ID.
* [adexchangebuyerBillingInfoList](docs/billinginfo/README.md#adexchangebuyerbillinginfolist) - Retrieves a list of billing information for all accounts of the authenticated user.

### [budget](docs/budget/README.md)

* [adexchangebuyerBudgetGet](docs/budget/README.md#adexchangebuyerbudgetget) - Returns the budget information for the adgroup specified by the accountId and billingId.
* [adexchangebuyerBudgetPatch](docs/budget/README.md#adexchangebuyerbudgetpatch) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* [adexchangebuyerBudgetUpdate](docs/budget/README.md#adexchangebuyerbudgetupdate) - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### [creatives](docs/creatives/README.md)

* [adexchangebuyerCreativesGet](docs/creatives/README.md#adexchangebuyercreativesget) - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* [adexchangebuyerCreativesInsert](docs/creatives/README.md#adexchangebuyercreativesinsert) - Submit a new creative.
* [adexchangebuyerCreativesList](docs/creatives/README.md#adexchangebuyercreativeslist) - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.

### [directDeals](docs/directdeals/README.md)

* [adexchangebuyerDirectDealsGet](docs/directdeals/README.md#adexchangebuyerdirectdealsget) - Gets one direct deal by ID.
* [adexchangebuyerDirectDealsList](docs/directdeals/README.md#adexchangebuyerdirectdealslist) - Retrieves the authenticated user's list of direct deals.

### [performanceReport](docs/performancereport/README.md)

* [adexchangebuyerPerformanceReportList](docs/performancereport/README.md#adexchangebuyerperformancereportlist) - Retrieves the authenticated user's list of performance metrics.

### [pretargetingConfig](docs/pretargetingconfig/README.md)

* [adexchangebuyerPretargetingConfigDelete](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigdelete) - Deletes an existing pretargeting config.
* [adexchangebuyerPretargetingConfigGet](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigget) - Gets a specific pretargeting configuration
* [adexchangebuyerPretargetingConfigInsert](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfiginsert) - Inserts a new pretargeting configuration.
* [adexchangebuyerPretargetingConfigList](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfiglist) - Retrieves a list of the authenticated user's pretargeting configurations.
* [adexchangebuyerPretargetingConfigPatch](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigpatch) - Updates an existing pretargeting config. This method supports patch semantics.
* [adexchangebuyerPretargetingConfigUpdate](docs/pretargetingconfig/README.md#adexchangebuyerpretargetingconfigupdate) - Updates an existing pretargeting config.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
