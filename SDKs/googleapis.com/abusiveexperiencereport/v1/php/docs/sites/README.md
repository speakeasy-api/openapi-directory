# sites

### Available Operations

* [abusiveexperiencereportSitesGet](#abusiveexperiencereportsitesget) - Gets a site's Abusive Experience Report summary.

## abusiveexperiencereportSitesGet

Gets a site's Abusive Experience Report summary.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AbusiveexperiencereportSitesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AbusiveexperiencereportSitesGetRequest();
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

    $response = $sdk->sites->abusiveexperiencereportSitesGet($request);

    if ($response->siteSummaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
