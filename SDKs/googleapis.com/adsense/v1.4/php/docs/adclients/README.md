# adclients

### Available Operations

* [adsenseAdclientsList](#adsenseadclientslist) - List all ad clients in this AdSense account.

## adsenseAdclientsList

List all ad clients in this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdclientsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdclientsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdclientsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseAdclientsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseAdclientsListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'eum';
    $request->key = 'non';
    $request->maxResults = 756107;
    $request->oauthToken = 'sint';
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->userIp = 'necessitatibus';

    $requestSecurity = new AdsenseAdclientsListSecurity();
    $requestSecurity->option1 = new AdsenseAdclientsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->adclients->adsenseAdclientsList($request, $requestSecurity);

    if ($response->adClients !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
