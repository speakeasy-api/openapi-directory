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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.TravelpartnerAccountsAccountLinksCreateRequest{
        PathParams: operations.TravelpartnerAccountsAccountLinksCreatePathParams{
            Parent: "unde",
        },
        QueryParams: operations.TravelpartnerAccountsAccountLinksCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.AccountLink{
            AccountLinkTarget: &shared.AccountLinkTarget{
                AllHotels: false,
                HotelList: &shared.HotelList{
                    PartnerHotelIds: []string{
                        "iusto",
                        "ullam",
                    },
                },
            },
            GoogleAdsCustomerName: "saepe",
            Name: "inventore",
            Status: "APPROVED",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.TravelpartnerAccountsAccountLinksCreate(ctx, req)
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
## SDK Available Operations


### Accounts

* `TravelpartnerAccountsAccountLinksCreate` - Creates a new account link between a Hotel Center account and a Google Ads account.
* `TravelpartnerAccountsAccountLinksDelete` - Deletes an account link.
* `TravelpartnerAccountsAccountLinksList` - Returns the account links for a Hotel Center account.
* `TravelpartnerAccountsBrandsCreate` - Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.
* `TravelpartnerAccountsBrandsList` - Returns the brands for a partner account.
* `TravelpartnerAccountsBrandsPatch` - Updates a brand.
* `TravelpartnerAccountsFreeBookingLinksReportViewsQuery` - **DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.
* `TravelpartnerAccountsHotelViewsList` - Returns the list of hotel views.
* `TravelpartnerAccountsHotelViewsSummarize` - Returns summarized information about hotels.
* `TravelpartnerAccountsHotelsSetLiveOnGoogle` - Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.
* `TravelpartnerAccountsIconsCreate` - Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1
* `TravelpartnerAccountsIconsList` - Returns the `Icon`s for a partner account.
* `TravelpartnerAccountsListingsVerify` - returns verified listings with data issues and serving eligibilities
* `TravelpartnerAccountsParticipationReportViewsQuery` - Provides the ability to query (get, filter, and segment) a participation report for a particular account.
* `TravelpartnerAccountsPriceAccuracyViewsList` - Lists the available price accuracy views.
* `TravelpartnerAccountsPriceAccuracyViewsSummarize` - Returns the price accuracy summary.
* `TravelpartnerAccountsPriceCoverageViewsGetLatest` - Returns the latest price coverage view in full detail.
* `TravelpartnerAccountsPriceCoverageViewsList` - Returns the entire price coverage history.
* `TravelpartnerAccountsPropertyPerformanceReportViewsQuery` - Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.
* `TravelpartnerAccountsReconciliationReportsCreate` - Creates a reconciliation report and uploads it to Google.
* `TravelpartnerAccountsReconciliationReportsGet` - Returns a reconciliation report.
* `TravelpartnerAccountsReconciliationReportsList` - Returns a list of the names of created reconciliation reports.
* `TravelpartnerAccountsReconciliationReportsValidate` - Validates a reconciliation report.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
