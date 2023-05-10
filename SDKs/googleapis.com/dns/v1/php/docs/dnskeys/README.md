# dnsKeys

### Available Operations

* [dnsDnsKeysGet](#dnsdnskeysget) - Fetches the representation of an existing DnsKey.
* [dnsDnsKeysList](#dnsdnskeyslist) - Enumerates DnsKeys to a ResourceRecordSet collection.

## dnsDnsKeysGet

Fetches the representation of an existing DnsKey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsDnsKeysGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->clientOperationId = 'id';
    $request->digestType = 'possimus';
    $request->dnsKeyId = 'aut';
    $request->fields = 'quasi';
    $request->key = 'error';
    $request->managedZone = 'temporibus';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'reiciendis';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'vero';

    $requestSecurity = new DnsDnsKeysGetSecurity();
    $requestSecurity->option1 = new DnsDnsKeysGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->dnsKeys->dnsDnsKeysGet($request, $requestSecurity);

    if ($response->dnsKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsDnsKeysList

Enumerates DnsKeys to a ResourceRecordSet collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsDnsKeysListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsDnsKeysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'praesentium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsa';
    $request->digestType = 'omnis';
    $request->fields = 'voluptate';
    $request->key = 'cum';
    $request->managedZone = 'perferendis';
    $request->maxResults = 39187;
    $request->oauthToken = 'reprehenderit';
    $request->pageToken = 'ut';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'dicta';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolore';

    $requestSecurity = new DnsDnsKeysListSecurity();
    $requestSecurity->option1 = new DnsDnsKeysListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->dnsKeys->dnsDnsKeysList($request, $requestSecurity);

    if ($response->dnsKeysListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
