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
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestAggregationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestDataStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilterGroup;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilter;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilterDimensionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilterOperatorEnum;
use \OpenAPI\OpenAPI\Models\Shared\ApiDimensionFilterGroupGroupTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestDimensionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestSearchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SearchAnalyticsQueryRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\WebmastersSearchanalyticsQuerySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new WebmastersSearchanalyticsQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->searchAnalyticsQueryRequest = new SearchAnalyticsQueryRequest();
    $request->searchAnalyticsQueryRequest->aggregationType = SearchAnalyticsQueryRequestAggregationTypeEnum::BY_PROPERTY;
    $request->searchAnalyticsQueryRequest->dataState = SearchAnalyticsQueryRequestDataStateEnum::ALL;
    $request->searchAnalyticsQueryRequest->dimensionFilterGroups = [
        new ApiDimensionFilterGroup(),
        new ApiDimensionFilterGroup(),
        new ApiDimensionFilterGroup(),
        new ApiDimensionFilterGroup(),
    ];
    $request->searchAnalyticsQueryRequest->dimensions = [
        SearchAnalyticsQueryRequestDimensionsEnum::SEARCH_APPEARANCE,
        SearchAnalyticsQueryRequestDimensionsEnum::COUNTRY,
        SearchAnalyticsQueryRequestDimensionsEnum::SEARCH_APPEARANCE,
    ];
    $request->searchAnalyticsQueryRequest->endDate = 'vel';
    $request->searchAnalyticsQueryRequest->rowLimit = 623564;
    $request->searchAnalyticsQueryRequest->searchType = SearchAnalyticsQueryRequestSearchTypeEnum::NEWS;
    $request->searchAnalyticsQueryRequest->startDate = 'suscipit';
    $request->searchAnalyticsQueryRequest->startRow = 437587;
    $request->searchAnalyticsQueryRequest->type = SearchAnalyticsQueryRequestTypeEnum::IMAGE;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'tempora';
    $request->key = 'suscipit';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'minus';
    $request->siteUrl = 'placeat';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new WebmastersSearchanalyticsQuerySecurity();
    $requestSecurity->option1 = new WebmastersSearchanalyticsQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->searchanalytics->webmastersSearchanalyticsQuery($request, $requestSecurity);

    if ($response->searchAnalyticsQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [searchanalytics](docs/searchanalytics/README.md)

* [webmastersSearchanalyticsQuery](docs/searchanalytics/README.md#webmasterssearchanalyticsquery) - Query your data with filters and parameters that you define. Returns zero or more rows grouped by the row keys that you define. You must define a date range of one or more days. When date is one of the group by values, any days without data are omitted from the result list. If you need to know which days have data, issue a broad date range query grouped by date for any metric, and see which day rows are returned.

### [sitemaps](docs/sitemaps/README.md)

* [webmastersSitemapsDelete](docs/sitemaps/README.md#webmasterssitemapsdelete) - Deletes a sitemap from the Sitemaps report. Does not stop Google from crawling this sitemap or the URLs that were previously crawled in the deleted sitemap.
* [webmastersSitemapsGet](docs/sitemaps/README.md#webmasterssitemapsget) - Retrieves information about a specific sitemap.
* [webmastersSitemapsList](docs/sitemaps/README.md#webmasterssitemapslist) -  Lists the [sitemaps-entries](/webmaster-tools/v3/sitemaps) submitted for this site, or included in the sitemap index file (if `sitemapIndex` is specified in the request).
* [webmastersSitemapsSubmit](docs/sitemaps/README.md#webmasterssitemapssubmit) - Submits a sitemap for a site.

### [sites](docs/sites/README.md)

* [webmastersSitesAdd](docs/sites/README.md#webmasterssitesadd) -  Adds a site to the set of the user's sites in Search Console.
* [webmastersSitesDelete](docs/sites/README.md#webmasterssitesdelete) -  Removes a site from the set of the user's Search Console sites.
* [webmastersSitesGet](docs/sites/README.md#webmasterssitesget) -  Retrieves information about specific site.
* [webmastersSitesList](docs/sites/README.md#webmasterssiteslist) -  Lists the user's Search Console sites.

### [urlInspection](docs/urlinspection/README.md)

* [searchconsoleUrlInspectionIndexInspect](docs/urlinspection/README.md#searchconsoleurlinspectionindexinspect) - Index inspection.

### [urlTestingTools](docs/urltestingtools/README.md)

* [searchconsoleUrlTestingToolsMobileFriendlyTestRun](docs/urltestingtools/README.md#searchconsoleurltestingtoolsmobilefriendlytestrun) - Runs Mobile-Friendly Test for a given URL.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
