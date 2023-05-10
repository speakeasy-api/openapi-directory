# locations

### Available Operations

* [dlpLocationsInfoTypesList](#dlplocationsinfotypeslist) - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

## dlpLocationsInfoTypesList

Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpLocationsInfoTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpLocationsInfoTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpLocationsInfoTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'perferendis';
    $request->filter = 'ipsam';
    $request->key = 'repellendus';
    $request->languageCode = 'sapiente';
    $request->locationId = 'quo';
    $request->oauthToken = 'odit';
    $request->parent = 'at';
    $request->prettyPrint = false;
    $request->quotaUser = 'at';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new DlpLocationsInfoTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->locations->dlpLocationsInfoTypesList($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2ListInfoTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
