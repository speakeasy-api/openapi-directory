# sites

### Available Operations

* [adexperiencereportSitesGet](#adexperiencereportsitesget) - Gets a site's Ad Experience Report summary.

## adexperiencereportSitesGet

Gets a site's Ad Experience Report summary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdexperiencereportSitesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdexperiencereportSitesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'suscipit';
    $request->fields = 'molestiae';
    $request->key = 'minus';
    $request->name = 'Ken Kshlerin';
    $request->oauthToken = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $response = $sdk->sites->adexperiencereportSitesGet($request);

    if ($response->siteSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
