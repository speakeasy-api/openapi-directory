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
    $request->accessToken = 'possimus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->clientOperationId = 'error';
    $request->digestType = 'temporibus';
    $request->dnsKeyId = 'laborum';
    $request->fields = 'quasi';
    $request->key = 'reiciendis';
    $request->location = 'voluptatibus';
    $request->managedZone = 'vero';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'voluptatibus';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'omnis';

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
    $request->accessToken = 'cum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->digestType = 'reprehenderit';
    $request->fields = 'ut';
    $request->key = 'maiores';
    $request->location = 'dicta';
    $request->managedZone = 'corporis';
    $request->maxResults = 296140;
    $request->oauthToken = 'iusto';
    $request->pageToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'commodi';

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
