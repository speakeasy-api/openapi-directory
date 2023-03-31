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

import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetSecurity;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetPathParams;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetQueryParams;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetRequest;
import org.openapis.openapi.models.operations.AdexchangebuyerAccountsGetResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AdexchangebuyerAccountsGetRequest req = new AdexchangebuyerAccountsGetRequest() {{
                security = new AdexchangebuyerAccountsGetSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new AdexchangebuyerAccountsGetPathParams() {{
                    id = 548814;
                }};
                queryParams = new AdexchangebuyerAccountsGetQueryParams() {{
                    alt = "json";
                    fields = "provident";
                    key = "distinctio";
                    oauthToken = "quibusdam";
                    prettyPrint = false;
                    quotaUser = "unde";
                    userIp = "nulla";
                }};
            }};            

            AdexchangebuyerAccountsGetResponse res = sdk.accounts.adexchangebuyerAccountsGet(req);

            if (res.account.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `adexchangebuyerAccountsGet` - Gets one account by ID.
* `adexchangebuyerAccountsList` - Retrieves the authenticated user's list of accounts.
* `adexchangebuyerAccountsPatch` - Updates an existing account. This method supports patch semantics.
* `adexchangebuyerAccountsUpdate` - Updates an existing account.

### billingInfo

* `adexchangebuyerBillingInfoGet` - Returns the billing information for one account specified by account ID.
* `adexchangebuyerBillingInfoList` - Retrieves a list of billing information for all accounts of the authenticated user.

### budget

* `adexchangebuyerBudgetGet` - Returns the budget information for the adgroup specified by the accountId and billingId.
* `adexchangebuyerBudgetPatch` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request. This method supports patch semantics.
* `adexchangebuyerBudgetUpdate` - Updates the budget amount for the budget of the adgroup specified by the accountId and billingId, with the budget amount in the request.

### creatives

* `adexchangebuyerCreativesAddDeal` - Add a deal id association for the creative.
* `adexchangebuyerCreativesGet` - Gets the status for a single creative. A creative will be available 30-40 minutes after submission.
* `adexchangebuyerCreativesInsert` - Submit a new creative.
* `adexchangebuyerCreativesList` - Retrieves a list of the authenticated user's active creatives. A creative will be available 30-40 minutes after submission.
* `adexchangebuyerCreativesListDeals` - Lists the external deal ids associated with the creative.
* `adexchangebuyerCreativesRemoveDeal` - Remove a deal id associated with the creative.

### marketplacedeals

* `adexchangebuyerMarketplacedealsDelete` - Delete the specified deals from the proposal
* `adexchangebuyerMarketplacedealsInsert` - Add new deals for the specified proposal
* `adexchangebuyerMarketplacedealsList` - List all the deals for a given proposal
* `adexchangebuyerMarketplacedealsUpdate` - Replaces all the deals in the proposal with the passed in deals

### marketplacenotes

* `adexchangebuyerMarketplacenotesInsert` - Add notes to the proposal
* `adexchangebuyerMarketplacenotesList` - Get all the notes associated with a proposal

### marketplaceprivateauction

* `adexchangebuyerMarketplaceprivateauctionUpdateproposal` - Update a given private auction proposal

### performanceReport

* `adexchangebuyerPerformanceReportList` - Retrieves the authenticated user's list of performance metrics.

### pretargetingConfig

* `adexchangebuyerPretargetingConfigDelete` - Deletes an existing pretargeting config.
* `adexchangebuyerPretargetingConfigGet` - Gets a specific pretargeting configuration
* `adexchangebuyerPretargetingConfigInsert` - Inserts a new pretargeting configuration.
* `adexchangebuyerPretargetingConfigList` - Retrieves a list of the authenticated user's pretargeting configurations.
* `adexchangebuyerPretargetingConfigPatch` - Updates an existing pretargeting config. This method supports patch semantics.
* `adexchangebuyerPretargetingConfigUpdate` - Updates an existing pretargeting config.

### products

* `adexchangebuyerProductsGet` - Gets the requested product by id.
* `adexchangebuyerProductsSearch` - Gets the requested product.

### proposals

* `adexchangebuyerProposalsGet` - Get a proposal given its id
* `adexchangebuyerProposalsInsert` - Create the given list of proposals
* `adexchangebuyerProposalsPatch` - Update the given proposal. This method supports patch semantics.
* `adexchangebuyerProposalsSearch` - Search for proposals using pql query
* `adexchangebuyerProposalsSetupcomplete` - Update the given proposal to indicate that setup has been completed.
* `adexchangebuyerProposalsUpdate` - Update the given proposal

### pubprofiles

* `adexchangebuyerPubprofilesList` - Gets the requested publisher profile(s) by publisher accountId.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
