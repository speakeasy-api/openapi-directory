# searchAds360Fields

### Available Operations

* [searchads360SearchAds360FieldsGet](#searchads360searchads360fieldsget) - Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
* [searchads360SearchAds360FieldsSearch](#searchads360searchads360fieldssearch) - Returns all fields that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

## searchads360SearchAds360FieldsGet

Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Searchads360SearchAds360FieldsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Searchads360SearchAds360FieldsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Searchads360SearchAds360FieldsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'molestiae';
    $request->key = 'quod';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->resourceName = 'totam';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new Searchads360SearchAds360FieldsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->searchAds360Fields->searchads360SearchAds360FieldsGet($request, $requestSecurity);

    if ($response->googleAdsSearchads360V0ResourcesSearchAds360Field !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchads360SearchAds360FieldsSearch

Returns all fields that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Searchads360SearchAds360FieldsSearchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\Searchads360SearchAds360FieldsSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Searchads360SearchAds360FieldsSearchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest = new GoogleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest();
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest->pageSize = 720633;
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest->pageToken = 'officia';
    $request->googleAdsSearchads360V0ServicesSearchSearchAds360FieldsRequest->query = 'occaecati';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'hic';
    $request->fields = 'optio';
    $request->key = 'totam';
    $request->oauthToken = 'beatae';
    $request->prettyPrint = false;
    $request->quotaUser = 'commodi';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new Searchads360SearchAds360FieldsSearchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->searchAds360Fields->searchads360SearchAds360FieldsSearch($request, $requestSecurity);

    if ($response->googleAdsSearchads360V0ServicesSearchSearchAds360FieldsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
