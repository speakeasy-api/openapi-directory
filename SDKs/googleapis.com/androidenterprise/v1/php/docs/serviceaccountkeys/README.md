# serviceaccountkeys

### Available Operations

* [androidenterpriseServiceaccountkeysDelete](#androidenterpriseserviceaccountkeysdelete) - Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.
* [androidenterpriseServiceaccountkeysInsert](#androidenterpriseserviceaccountkeysinsert) - Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.
* [androidenterpriseServiceaccountkeysList](#androidenterpriseserviceaccountkeyslist) - Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

## androidenterpriseServiceaccountkeysDelete

Removes and invalidates the specified credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseServiceaccountkeysDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseServiceaccountkeysDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseServiceaccountkeysDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequuntur';
    $request->enterpriseId = 'deleniti';
    $request->fields = 'fugit';
    $request->key = 'fuga';
    $request->keyId = 'mollitia';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->uploadType = 'explicabo';
    $request->uploadProtocol = 'minima';

    $requestSecurity = new AndroidenterpriseServiceaccountkeysDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceaccountkeys->androidenterpriseServiceaccountkeysDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseServiceaccountkeysInsert

Generates new credentials for the service account associated with this enterprise. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount. Only the type of the key should be populated in the resource to be inserted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseServiceaccountkeysInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccountKey;
use \OpenAPI\OpenAPI\Models\Shared\ServiceAccountKeyTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseServiceaccountkeysInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseServiceaccountkeysInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->serviceAccountKey = new ServiceAccountKey();
    $request->serviceAccountKey->data = 'fugit';
    $request->serviceAccountKey->id = 'f222e981-7ee1-47cb-a61e-6b7b95bc0ab3';
    $request->serviceAccountKey->publicData = 'cumque';
    $request->serviceAccountKey->type = ServiceAccountKeyTypeEnum::GOOGLE_CREDENTIALS;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quaerat';
    $request->enterpriseId = 'sapiente';
    $request->fields = 'consectetur';
    $request->key = 'esse';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'nulla';

    $requestSecurity = new AndroidenterpriseServiceaccountkeysInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceaccountkeys->androidenterpriseServiceaccountkeysInsert($request, $requestSecurity);

    if ($response->serviceAccountKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androidenterpriseServiceaccountkeysList

Lists all active credentials for the service account associated with this enterprise. Only the ID and key type are returned. The calling service account must have been retrieved by calling Enterprises.GetServiceAccount and must have been set as the enterprise service account by calling Enterprises.SetAccount.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseServiceaccountkeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AndroidenterpriseServiceaccountkeysListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroidenterpriseServiceaccountkeysListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'a';
    $request->enterpriseId = 'error';
    $request->fields = 'sint';
    $request->key = 'pariatur';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quia';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'asperiores';

    $requestSecurity = new AndroidenterpriseServiceaccountkeysListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->serviceaccountkeys->androidenterpriseServiceaccountkeysList($request, $requestSecurity);

    if ($response->serviceAccountKeysListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
