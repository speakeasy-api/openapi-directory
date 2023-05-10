# infoTypes

### Available Operations

* [dlpInfoTypesList](#dlpinfotypeslist) - Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

## dlpInfoTypesList

Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DlpInfoTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DlpInfoTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DlpInfoTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'suscipit';
    $request->filter = 'molestiae';
    $request->key = 'minus';
    $request->languageCode = 'placeat';
    $request->locationId = 'voluptatum';
    $request->oauthToken = 'iusto';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'nisi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'temporibus';

    $requestSecurity = new DlpInfoTypesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->infoTypes->dlpInfoTypesList($request, $requestSecurity);

    if ($response->googlePrivacyDlpV2ListInfoTypesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
