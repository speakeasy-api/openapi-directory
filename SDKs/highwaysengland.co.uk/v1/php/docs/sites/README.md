# sites

### Available Operations

* [sitesIndex](#sitesindex) - Get a list of sites
* [getVVersionSitesSiteIds](#getvversionsitessiteids) - Get selected sites

## sitesIndex

Get a list of sites

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SitesIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SitesIndexRequest();
    $request->version = 'deserunt';

    $response = $sdk->sites->sitesIndex($request);

    if ($response->siteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVVersionSitesSiteIds

Get selected sites

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVVersionSitesSiteIdsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVVersionSitesSiteIdsRequest();
    $request->siteIds = 'perferendis';
    $request->version = 'ipsam';

    $response = $sdk->sites->getVVersionSitesSiteIds($request);

    if ($response->siteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
