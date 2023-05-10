# dictionary

### Available Operations

* [booksDictionaryListOfflineMetadata](#booksdictionarylistofflinemetadata) - Returns a list of offline dictionary metadata available

## booksDictionaryListOfflineMetadata

Returns a list of offline dictionary metadata available

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BooksDictionaryListOfflineMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\BooksDictionaryListOfflineMetadataSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BooksDictionaryListOfflineMetadataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'minima';
    $request->cpksver = 'excepturi';
    $request->fields = 'accusantium';
    $request->key = 'iure';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->quotaUser = 'doloribus';
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new BooksDictionaryListOfflineMetadataSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->dictionary->booksDictionaryListOfflineMetadata($request, $requestSecurity);

    if ($response->metadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
