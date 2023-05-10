# sites

### Available Operations

* [listSites](#listsites) - ListSites

## listSites

Lists the Square Online sites that belong to a seller.


__Note:__ Square Online APIs are publicly available as part of an early access program. For more information, see [Early access program for Square Online APIs](https://developer.squareup.com/docs/online-api#early-access-program-for-square-online-apis).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSitesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new ListSitesSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sites->listSites($requestSecurity);

    if ($response->listSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
