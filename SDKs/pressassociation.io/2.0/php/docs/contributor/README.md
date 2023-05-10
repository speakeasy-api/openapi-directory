# contributor

### Available Operations

* [getContributor](#getcontributor) - Contributor Detail
* [listContributor](#listcontributor) - Contributor Collection

## getContributor

Return the content of the selected contributor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContributorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContributorRequest();
    $request->aliases = false;
    $request->contributorId = 'placeat';

    $requestSecurity = new GetContributorSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->contributor->getContributor($request, $requestSecurity);

    if ($response->getContributor200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listContributor

Return a collection of Contributors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListContributorRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListContributorSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListContributorRequest();
    $request->aliases = false;
    $request->limit = 528895;
    $request->updatedAfter = 'iusto';

    $requestSecurity = new ListContributorSecurity();
    $requestSecurity->apikey = 'YOUR_API_KEY_HERE';

    $response = $sdk->contributor->listContributor($request, $requestSecurity);

    if ($response->listContributor200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
