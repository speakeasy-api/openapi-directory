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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'velit';
    $request->key = 'error';
    $request->languageCode = 'quia';
    $request->oauthToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'vitae';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'animi';

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
