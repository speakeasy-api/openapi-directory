# violatingSites

### Available Operations

* [adexperiencereportViolatingSitesList](#adexperiencereportviolatingsiteslist) - Lists sites that are failing in the Ad Experience Report on at least one platform.

## adexperiencereportViolatingSitesList

Lists sites that are failing in the Ad Experience Report on at least one platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexperiencereportViolatingSitesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexperiencereportViolatingSitesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->oauthToken = 'quo';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'at';

    $response = $sdk->violatingSites->adexperiencereportViolatingSitesList($request);

    if ($response->violatingSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
