# savedColumns

### Available Operations

* [doubleclicksearchSavedColumnsList](#doubleclicksearchsavedcolumnslist) - Retrieve the list of saved columns for a specified advertiser.

## doubleclicksearchSavedColumnsList

Retrieve the list of saved columns for a specified advertiser.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchSavedColumnsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DoubleclicksearchSavedColumnsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DoubleclicksearchSavedColumnsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->advertiserId = 'alias';
    $request->agencyId = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'tempora';
    $request->key = 'facilis';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'eum';

    $requestSecurity = new DoubleclicksearchSavedColumnsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->savedColumns->doubleclicksearchSavedColumnsList($request, $requestSecurity);

    if ($response->savedColumnList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
