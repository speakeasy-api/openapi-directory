# products

### Available Operations

* [cloudchannelProductsList](#cloudchannelproductslist) - Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
* [cloudchannelProductsSkusList](#cloudchannelproductsskuslist) - Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

## cloudchannelProductsList

Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelProductsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelProductsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelProductsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'et';
    $request->account = 'voluptate';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minima';
    $request->fields = 'veritatis';
    $request->key = 'consectetur';
    $request->languageCode = 'adipisci';
    $request->oauthToken = 'iste';
    $request->pageSize = 839513;
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'rem';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new CloudchannelProductsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->cloudchannelProductsList($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListProductsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudchannelProductsSkusList

Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelProductsSkusListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudchannelProductsSkusListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudchannelProductsSkusListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'mollitia';
    $request->account = 'ab';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'voluptatem';
    $request->key = 'dolor';
    $request->languageCode = 'occaecati';
    $request->oauthToken = 'numquam';
    $request->pageSize = 771089;
    $request->pageToken = 'explicabo';
    $request->parent = 'voluptas';
    $request->prettyPrint = false;
    $request->quotaUser = 'aut';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new CloudchannelProductsSkusListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->products->cloudchannelProductsSkusList($request, $requestSecurity);

    if ($response->googleCloudChannelV1ListSkusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
