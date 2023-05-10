# catalogue

### Available Operations

* [getCatalogue](#getcatalogue) - Catalogue Detail
* [getCatalogueAsset](#getcatalogueasset) - Catalogue Asset Collection
* [getCatalogueAssetDetail](#getcatalogueassetdetail) - Catalogue Asset Detail
* [listCatalogues](#listcatalogues) - Catalogue Collection

## getCatalogue

Return the content of the selected catalogue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCatalogueRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCatalogueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCatalogueRequest();
    $request->catalogueId = 'nulla';

    $requestSecurity = new GetCatalogueSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->catalogue->getCatalogue($request, $requestSecurity);

    if ($response->getCatalogue200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCatalogueAsset

Return the content of the selected catalogue.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCatalogueAssetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCatalogueAssetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCatalogueAssetRequest();
    $request->aliases = false;
    $request->catalogueId = 'corrupti';
    $request->end = 'illum';
    $request->limit = 4236.55;
    $request->start = 'error';
    $request->title = 'Miss';
    $request->updatedAfter = 'suscipit';

    $requestSecurity = new GetCatalogueAssetSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->catalogue->getCatalogueAsset($request, $requestSecurity);

    if ($response->getCatalogueAsset200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCatalogueAssetDetail

Return the content of the selected catalogue asset.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCatalogueAssetDetailRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCatalogueAssetDetailSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCatalogueAssetDetailRequest();
    $request->assetId = 'iure';
    $request->catalogueId = 'magnam';

    $requestSecurity = new GetCatalogueAssetDetailSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->catalogue->getCatalogueAssetDetail($request, $requestSecurity);

    if ($response->getCatalogueAssetDetail200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCatalogues

Return a collection of Catalogues.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListCataloguesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListCataloguesSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->catalogue->listCatalogues($requestSecurity);

    if ($response->listCatalogues200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
