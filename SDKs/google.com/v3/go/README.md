# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/google.com/v3/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.TravelpartnerAccountsAccountLinksCreate(ctx, operations.TravelpartnerAccountsAccountLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountLink: &shared.AccountLink{
            AccountLinkTarget: &shared.AccountLinkTarget{
                AllHotels: sdk.Bool(false),
                HotelList: &shared.HotelList{
                    PartnerHotelIds: []string{
                        "distinctio",
                        "quibusdam",
                        "unde",
                    },
                },
            },
            GoogleAdsCustomerName: sdk.String("nulla"),
            Name: sdk.String("Dallas Kassulke"),
            Status: shared.AccountLinkStatusEnumAccountLinkStatusUnknown.ToPointer(),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [TravelpartnerAccountsAccountLinksCreate](docs/accounts/README.md#travelpartneraccountsaccountlinkscreate) - Creates a new account link between a Hotel Center account and a Google Ads account.
* [TravelpartnerAccountsAccountLinksDelete](docs/accounts/README.md#travelpartneraccountsaccountlinksdelete) - Deletes an account link.
* [TravelpartnerAccountsAccountLinksList](docs/accounts/README.md#travelpartneraccountsaccountlinkslist) - Returns the account links for a Hotel Center account.
* [TravelpartnerAccountsBrandsCreate](docs/accounts/README.md#travelpartneraccountsbrandscreate) - Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.
* [TravelpartnerAccountsBrandsList](docs/accounts/README.md#travelpartneraccountsbrandslist) - Returns the brands for a partner account.
* [TravelpartnerAccountsBrandsPatch](docs/accounts/README.md#travelpartneraccountsbrandspatch) - Updates a brand.
* [TravelpartnerAccountsFreeBookingLinksReportViewsQuery](docs/accounts/README.md#travelpartneraccountsfreebookinglinksreportviewsquery) - **DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.
* [TravelpartnerAccountsHotelViewsList](docs/accounts/README.md#travelpartneraccountshotelviewslist) - Returns the list of hotel views.
* [TravelpartnerAccountsHotelViewsSummarize](docs/accounts/README.md#travelpartneraccountshotelviewssummarize) - Returns summarized information about hotels.
* [TravelpartnerAccountsHotelsSetLiveOnGoogle](docs/accounts/README.md#travelpartneraccountshotelssetliveongoogle) - Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.
* [TravelpartnerAccountsIconsCreate](docs/accounts/README.md#travelpartneraccountsiconscreate) - Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1
* [TravelpartnerAccountsIconsList](docs/accounts/README.md#travelpartneraccountsiconslist) - Returns the `Icon`s for a partner account.
* [TravelpartnerAccountsListingsVerify](docs/accounts/README.md#travelpartneraccountslistingsverify) - returns verified listings with data issues and serving eligibilities
* [TravelpartnerAccountsParticipationReportViewsQuery](docs/accounts/README.md#travelpartneraccountsparticipationreportviewsquery) - Provides the ability to query (get, filter, and segment) a participation report for a particular account.
* [TravelpartnerAccountsPriceAccuracyViewsList](docs/accounts/README.md#travelpartneraccountspriceaccuracyviewslist) - Lists the available price accuracy views.
* [TravelpartnerAccountsPriceAccuracyViewsSummarize](docs/accounts/README.md#travelpartneraccountspriceaccuracyviewssummarize) - Returns the price accuracy summary.
* [TravelpartnerAccountsPriceCoverageViewsGetLatest](docs/accounts/README.md#travelpartneraccountspricecoverageviewsgetlatest) - Returns the latest price coverage view in full detail.
* [TravelpartnerAccountsPriceCoverageViewsList](docs/accounts/README.md#travelpartneraccountspricecoverageviewslist) - Returns the entire price coverage history.
* [TravelpartnerAccountsPropertyPerformanceReportViewsQuery](docs/accounts/README.md#travelpartneraccountspropertyperformancereportviewsquery) - Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.
* [TravelpartnerAccountsReconciliationReportsCreate](docs/accounts/README.md#travelpartneraccountsreconciliationreportscreate) - Creates a reconciliation report and uploads it to Google.
* [TravelpartnerAccountsReconciliationReportsGet](docs/accounts/README.md#travelpartneraccountsreconciliationreportsget) - Returns a reconciliation report.
* [TravelpartnerAccountsReconciliationReportsList](docs/accounts/README.md#travelpartneraccountsreconciliationreportslist) - Returns a list of the names of created reconciliation reports.
* [TravelpartnerAccountsReconciliationReportsValidate](docs/accounts/README.md#travelpartneraccountsreconciliationreportsvalidate) - Validates a reconciliation report.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
