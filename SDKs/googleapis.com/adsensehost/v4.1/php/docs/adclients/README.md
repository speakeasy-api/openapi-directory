# adclients

### Available Operations

* [adsensehostAdclientsGet](#adsensehostadclientsget) - Get information about one of the ad clients in the Host AdSense account.
* [adsensehostAdclientsList](#adsensehostadclientslist) - List all host ad clients in this AdSense account.

## adsensehostAdclientsGet

Get information about one of the ad clients in the Host AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAdclientsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAdclientsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAdclientsGetRequest();
    $request->adClientId = 'saepe';
    $request->alt = AltEnum::JSON;
    $request->fields = 'accusantium';
    $request->key = 'consequuntur';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->userIp = 'magni';

    $requestSecurity = new AdsensehostAdclientsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->adclients->adsensehostAdclientsGet($request, $requestSecurity);

    if ($response->adClient !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsensehostAdclientsList

List all host ad clients in this AdSense account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAdclientsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsensehostAdclientsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsensehostAdclientsListRequest();
    $request->alt = AltEnum::CSV;
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->maxResults = 864934;
    $request->oauthToken = 'maxime';
    $request->pageToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->userIp = 'odit';

    $requestSecurity = new AdsensehostAdclientsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->adclients->adsensehostAdclientsList($request, $requestSecurity);

    if ($response->adClients !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
