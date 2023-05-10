# settings

### Available Operations

* [mirrorSettingsGet](#mirrorsettingsget) - Gets a single setting by ID.

## mirrorSettingsGet

Gets a single setting by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSettingsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MirrorSettingsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorSettingsGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'pariatur';
    $request->id = '9cbf4863-3323-4f9b-b7f3-a4100674ebf6';
    $request->key = 'natus';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->userIp = 'sit';

    $requestSecurity = new MirrorSettingsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->settings->mirrorSettingsGet($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
