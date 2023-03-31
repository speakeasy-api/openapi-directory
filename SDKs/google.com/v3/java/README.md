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

import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreatePathParams;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateQueryParams;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateRequest;
import org.openapis.openapi.models.operations.TravelpartnerAccountsAccountLinksCreateResponse;
import org.openapis.openapi.models.shared.AccountLinkStatusEnum;
import org.openapis.openapi.models.shared.AccountLink;
import org.openapis.openapi.models.shared.AccountLinkTarget;
import org.openapis.openapi.models.shared.HotelList;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TravelpartnerAccountsAccountLinksCreateRequest req = new TravelpartnerAccountsAccountLinksCreateRequest() {{
                pathParams = new TravelpartnerAccountsAccountLinksCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new TravelpartnerAccountsAccountLinksCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new AccountLink() {{
                    accountLinkTarget = new AccountLinkTarget() {{
                        allHotels = false;
                        hotelList = new HotelList() {{
                            partnerHotelIds = new String[]{{
                                add("iure"),
                                add("magnam"),
                            }};
                        }};
                    }};
                    googleAdsCustomerName = "debitis";
                    name = "ipsa";
                    status = "APPROVED";
                }};
            }};            

            TravelpartnerAccountsAccountLinksCreateResponse res = sdk.accounts.travelpartnerAccountsAccountLinksCreate(req);

            if (res.accountLink.isPresent()) {
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

* `travelpartnerAccountsAccountLinksCreate` - Creates a new account link between a Hotel Center account and a Google Ads account.
* `travelpartnerAccountsAccountLinksDelete` - Deletes an account link.
* `travelpartnerAccountsAccountLinksList` - Returns the account links for a Hotel Center account.
* `travelpartnerAccountsBrandsCreate` - Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.
* `travelpartnerAccountsBrandsList` - Returns the brands for a partner account.
* `travelpartnerAccountsBrandsPatch` - Updates a brand.
* `travelpartnerAccountsFreeBookingLinksReportViewsQuery` - **DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.
* `travelpartnerAccountsHotelViewsList` - Returns the list of hotel views.
* `travelpartnerAccountsHotelViewsSummarize` - Returns summarized information about hotels.
* `travelpartnerAccountsHotelsSetLiveOnGoogle` - Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.
* `travelpartnerAccountsIconsCreate` - Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1
* `travelpartnerAccountsIconsList` - Returns the `Icon`s for a partner account.
* `travelpartnerAccountsListingsVerify` - returns verified listings with data issues and serving eligibilities
* `travelpartnerAccountsParticipationReportViewsQuery` - Provides the ability to query (get, filter, and segment) a participation report for a particular account.
* `travelpartnerAccountsPriceAccuracyViewsList` - Lists the available price accuracy views.
* `travelpartnerAccountsPriceAccuracyViewsSummarize` - Returns the price accuracy summary.
* `travelpartnerAccountsPriceCoverageViewsGetLatest` - Returns the latest price coverage view in full detail.
* `travelpartnerAccountsPriceCoverageViewsList` - Returns the entire price coverage history.
* `travelpartnerAccountsPropertyPerformanceReportViewsQuery` - Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.
* `travelpartnerAccountsReconciliationReportsCreate` - Creates a reconciliation report and uploads it to Google.
* `travelpartnerAccountsReconciliationReportsGet` - Returns a reconciliation report.
* `travelpartnerAccountsReconciliationReportsList` - Returns a list of the names of created reconciliation reports.
* `travelpartnerAccountsReconciliationReportsValidate` - Validates a reconciliation report.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
