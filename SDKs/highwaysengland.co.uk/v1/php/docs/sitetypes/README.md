# siteTypes

### Available Operations

* [siteTypesGetSitesForPublicFacingAPI](#sitetypesgetsitesforpublicfacingapi) - Returns the layer metadata for the LayerId specified.
* [siteTypesIndex](#sitetypesindex) - Return list of site types

## siteTypesGetSitesForPublicFacingAPI

Returns the layer metadata for the LayerId specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteTypesGetSitesForPublicFacingAPIRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteTypesGetSitesForPublicFacingAPIRequest();
    $request->siteTypeId = 71036;
    $request->version = 'quis';

    $response = $sdk->siteTypes->siteTypesGetSitesForPublicFacingAPI($request);

    if ($response->siteTypeLayer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## siteTypesIndex

Return list of site types

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SiteTypesIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SiteTypesIndexRequest();
    $request->version = 'veritatis';

    $response = $sdk->siteTypes->siteTypesIndex($request);

    if ($response->siteTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
