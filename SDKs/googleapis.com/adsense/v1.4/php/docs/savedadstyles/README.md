# savedadstyles

### Available Operations

* [adsenseSavedadstylesGet](#adsensesavedadstylesget) - Get a specific saved ad style from the user's account.
* [adsenseSavedadstylesList](#adsensesavedadstyleslist) - List all saved ad styles in the user's account.

## adsenseSavedadstylesGet

Get a specific saved ad style from the user's account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseSavedadstylesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseSavedadstylesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseSavedadstylesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseSavedadstylesGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseSavedadstylesGetRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'facilis';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->quotaUser = 'porro';
    $request->savedAdStyleId = 'consequuntur';
    $request->userIp = 'blanditiis';

    $requestSecurity = new AdsenseSavedadstylesGetSecurity();
    $requestSecurity->option1 = new AdsenseSavedadstylesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->savedadstyles->adsenseSavedadstylesGet($request, $requestSecurity);

    if ($response->savedAdStyle !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## adsenseSavedadstylesList

List all saved ad styles in the user's account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseSavedadstylesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseSavedadstylesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseSavedadstylesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\AdsenseSavedadstylesListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AdsenseSavedadstylesListRequest();
    $request->alt = AltEnum::JSON;
    $request->fields = 'eaque';
    $request->key = 'occaecati';
    $request->maxResults = 699098;
    $request->oauthToken = 'adipisci';
    $request->pageToken = 'asperiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'earum';
    $request->userIp = 'modi';

    $requestSecurity = new AdsenseSavedadstylesListSecurity();
    $requestSecurity->option1 = new AdsenseSavedadstylesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->savedadstyles->adsenseSavedadstylesList($request, $requestSecurity);

    if ($response->savedAdStyles !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
