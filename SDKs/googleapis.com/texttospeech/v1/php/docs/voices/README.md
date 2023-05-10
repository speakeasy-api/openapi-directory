# voices

### Available Operations

* [texttospeechVoicesList](#texttospeechvoiceslist) - Returns a list of Voice supported for synthesis.

## texttospeechVoicesList

Returns a list of Voice supported for synthesis.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechVoicesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\TexttospeechVoicesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TexttospeechVoicesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->fields = 'ut';
    $request->key = 'maiores';
    $request->languageCode = 'dicta';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->uploadType = 'iusto';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new TexttospeechVoicesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->voices->texttospeechVoicesList($request, $requestSecurity);

    if ($response->listVoicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
