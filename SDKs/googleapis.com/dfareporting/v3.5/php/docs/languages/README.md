# languages

### Available Operations

* [dfareportingLanguagesList](#dfareportinglanguageslist) - Retrieves a list of languages.

## dfareportingLanguagesList

Retrieves a list of languages.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingLanguagesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingLanguagesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingLanguagesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'totam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eius';
    $request->fields = 'doloremque';
    $request->key = 'vero';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->profileId = 'sequi';
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'assumenda';

    $requestSecurity = new DfareportingLanguagesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->languages->dfareportingLanguagesList($request, $requestSecurity);

    if ($response->languagesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
