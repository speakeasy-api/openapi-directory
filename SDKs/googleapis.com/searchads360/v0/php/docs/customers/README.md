# customers

### Available Operations

* [searchads360CustomersCustomColumnsList](#searchads360customerscustomcolumnslist) - Returns all the custom columns associated with the customer in full detail.
* [searchads360CustomersSearchAds360Search](#searchads360customerssearchads360search) - Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

## searchads360CustomersCustomColumnsList

Returns all the custom columns associated with the customer in full detail.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Searchads360CustomersCustomColumnsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Searchads360CustomersCustomColumnsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Searchads360CustomersCustomColumnsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->customerId = 'ipsa';
    $request->fields = 'delectus';
    $request->key = 'tempora';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

    $requestSecurity = new Searchads360CustomersCustomColumnsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->searchads360CustomersCustomColumnsList($request, $requestSecurity);

    if ($response->googleAdsSearchads360V0ServicesListCustomColumnsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchads360CustomersSearchAds360Search

Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Searchads360CustomersSearchAds360SearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAdsSearchads360V0ServicesSearchSearchAds360Request;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAdsSearchads360V0ServicesSearchSearchAds360RequestSummaryRowSettingEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Searchads360CustomersSearchAds360SearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Searchads360CustomersSearchAds360SearchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360Request = new GoogleAdsSearchads360V0ServicesSearchSearchAds360Request();
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360Request->pageSize = 479977;
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360Request->pageToken = 'excepturi';
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360Request->query = 'nisi';
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360Request->returnTotalResultsCount = false;
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360Request->summaryRowSetting = GoogleAdsSearchads360V0ServicesSearchSearchAds360RequestSummaryRowSettingEnum::SUMMARY_ROW_ONLY;
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360Request->validateOnly = false;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->customerId = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->quotaUser = 'repellendus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'quo';

    $requestSecurity = new Searchads360CustomersSearchAds360SearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->customers->searchads360CustomersSearchAds360Search($request, $requestSecurity);

    if ($response->googleAdsSearchads360V0ServicesSearchSearchAds360Response !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
