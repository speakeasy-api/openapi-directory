# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TravelpartnerAccountsAccountLinksCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AccountLink;
use \OpenAPI\OpenAPI\Models\Shared\AccountLinkTarget;
use \OpenAPI\OpenAPI\Models\Shared\HotelList;
use \OpenAPI\OpenAPI\Models\Shared\AccountLinkStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TravelpartnerAccountsAccountLinksCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accountLink = new AccountLink();
    $request->accountLink->accountLinkTarget = new AccountLinkTarget();
    $request->accountLink->accountLinkTarget->allHotels = false;
    $request->accountLink->accountLinkTarget->hotelList = new HotelList();
    $request->accountLink->accountLinkTarget->hotelList->partnerHotelIds = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->accountLink->googleAdsCustomerName = 'nulla';
    $request->accountLink->name = 'Dallas Kassulke';
    $request->accountLink->status = AccountLinkStatusEnum::ACCOUNT_LINK_STATUS_UNKNOWN;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->fields = 'ipsa';
    $request->key = 'delectus';
    $request->oauthToken = 'tempora';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $response = $sdk->accounts->travelpartnerAccountsAccountLinksCreate($request);

    if ($response->accountLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [travelpartnerAccountsAccountLinksCreate](docs/accounts/README.md#travelpartneraccountsaccountlinkscreate) - Creates a new account link between a Hotel Center account and a Google Ads account.
* [travelpartnerAccountsAccountLinksDelete](docs/accounts/README.md#travelpartneraccountsaccountlinksdelete) - Deletes an account link.
* [travelpartnerAccountsAccountLinksList](docs/accounts/README.md#travelpartneraccountsaccountlinkslist) - Returns the account links for a Hotel Center account.
* [travelpartnerAccountsBrandsCreate](docs/accounts/README.md#travelpartneraccountsbrandscreate) - Creates a new brand. Because Google detects brands from your existing properties, you only need this operation when you want to configure a brand before you send its properties to Google. Note that it might take a couple of days after your listing feed first provides a brand for the brand to appear.
* [travelpartnerAccountsBrandsList](docs/accounts/README.md#travelpartneraccountsbrandslist) - Returns the brands for a partner account.
* [travelpartnerAccountsBrandsPatch](docs/accounts/README.md#travelpartneraccountsbrandspatch) - Updates a brand.
* [travelpartnerAccountsFreeBookingLinksReportViewsQuery](docs/accounts/README.md#travelpartneraccountsfreebookinglinksreportviewsquery) - **DEPRECATED:** Use PropertyPerformanceReportService.QueryPropertyPerformanceReport, which also has impression reporting, instead. Provides the ability to query (get, filter, and segment) a free booking links report for a specific account.
* [travelpartnerAccountsHotelViewsList](docs/accounts/README.md#travelpartneraccountshotelviewslist) - Returns the list of hotel views.
* [travelpartnerAccountsHotelViewsSummarize](docs/accounts/README.md#travelpartneraccountshotelviewssummarize) - Returns summarized information about hotels.
* [travelpartnerAccountsHotelsSetLiveOnGoogle](docs/accounts/README.md#travelpartneraccountshotelssetliveongoogle) - Collection-level custom method to update the Live on Google status for multiple properties. Each call can turn on or off multiple hotels. To turn some hotels on and turn some hotels off, you will have to make multiple calls.
* [travelpartnerAccountsIconsCreate](docs/accounts/README.md#travelpartneraccountsiconscreate) - Uploads a new icon and starts its review process. Generates an `icon_id` and includes it in the icon's resource name, which is the format `accounts/{account_id}/icons/{icon_id}` Returns HTTP status 400 and doesn't trigger the review process if the icon has any of these conditions: * Image is not in PNG format, or not convertible to PNG format. * Size less than 72 pixels * Size greater than 1200 pixels * Aspect ratio other than 1:1
* [travelpartnerAccountsIconsList](docs/accounts/README.md#travelpartneraccountsiconslist) - Returns the `Icon`s for a partner account.
* [travelpartnerAccountsListingsVerify](docs/accounts/README.md#travelpartneraccountslistingsverify) - returns verified listings with data issues and serving eligibilities
* [travelpartnerAccountsParticipationReportViewsQuery](docs/accounts/README.md#travelpartneraccountsparticipationreportviewsquery) - Provides the ability to query (get, filter, and segment) a participation report for a particular account.
* [travelpartnerAccountsPriceAccuracyViewsList](docs/accounts/README.md#travelpartneraccountspriceaccuracyviewslist) - Lists the available price accuracy views.
* [travelpartnerAccountsPriceAccuracyViewsSummarize](docs/accounts/README.md#travelpartneraccountspriceaccuracyviewssummarize) - Returns the price accuracy summary.
* [travelpartnerAccountsPriceCoverageViewsGetLatest](docs/accounts/README.md#travelpartneraccountspricecoverageviewsgetlatest) - Returns the latest price coverage view in full detail.
* [travelpartnerAccountsPriceCoverageViewsList](docs/accounts/README.md#travelpartneraccountspricecoverageviewslist) - Returns the entire price coverage history.
* [travelpartnerAccountsPropertyPerformanceReportViewsQuery](docs/accounts/README.md#travelpartneraccountspropertyperformancereportviewsquery) - Provides the ability to query (get, filter, and segment) a property performance links report for a specific account.
* [travelpartnerAccountsReconciliationReportsCreate](docs/accounts/README.md#travelpartneraccountsreconciliationreportscreate) - Creates a reconciliation report and uploads it to Google.
* [travelpartnerAccountsReconciliationReportsGet](docs/accounts/README.md#travelpartneraccountsreconciliationreportsget) - Returns a reconciliation report.
* [travelpartnerAccountsReconciliationReportsList](docs/accounts/README.md#travelpartneraccountsreconciliationreportslist) - Returns a list of the names of created reconciliation reports.
* [travelpartnerAccountsReconciliationReportsValidate](docs/accounts/README.md#travelpartneraccountsreconciliationreportsvalidate) - Validates a reconciliation report.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
