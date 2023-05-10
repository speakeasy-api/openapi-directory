# dynamicTargetingKeys

### Available Operations

* [dfareportingDynamicTargetingKeysDelete](#dfareportingdynamictargetingkeysdelete) - Deletes an existing dynamic targeting key.
* [dfareportingDynamicTargetingKeysInsert](#dfareportingdynamictargetingkeysinsert) - Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.
* [dfareportingDynamicTargetingKeysList](#dfareportingdynamictargetingkeyslist) - Retrieves a list of dynamic targeting keys.

## dfareportingDynamicTargetingKeysDelete

Deletes an existing dynamic targeting key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDynamicTargetingKeysDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDynamicTargetingKeysDeleteObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDynamicTargetingKeysDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingDynamicTargetingKeysDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'laboriosam';
    $request->key = 'laboriosam';
    $request->name = 'Fannie Nitzsche';
    $request->oauthToken = 'soluta';
    $request->objectId = 'tempore';
    $request->objectType = DfareportingDynamicTargetingKeysDeleteObjectTypeEnum::OBJECT_CREATIVE;
    $request->prettyPrint = false;
    $request->profileId = 'fugiat';
    $request->quotaUser = 'inventore';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new DfareportingDynamicTargetingKeysDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->dynamicTargetingKeys->dfareportingDynamicTargetingKeysDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingDynamicTargetingKeysInsert

Inserts a new dynamic targeting key. Keys must be created at the advertiser level before being assigned to the advertiser's ads, creatives, or placements. There is a maximum of 1000 keys per advertiser, out of which a maximum of 20 keys can be assigned per ad, creative, or placement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDynamicTargetingKeysInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DynamicTargetingKey;
use \OpenAPI\OpenAPI\Models\Shared\DynamicTargetingKeyObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDynamicTargetingKeysInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingDynamicTargetingKeysInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->dynamicTargetingKey = new DynamicTargetingKey();
    $request->dynamicTargetingKey->kind = 'voluptates';
    $request->dynamicTargetingKey->name = 'Peggy Bergstrom';
    $request->dynamicTargetingKey->objectId = 'quidem';
    $request->dynamicTargetingKey->objectType = DynamicTargetingKeyObjectTypeEnum::OBJECT_PLACEMENT;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatum';
    $request->fields = 'sequi';
    $request->key = 'atque';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->profileId = 'expedita';
    $request->quotaUser = 'rerum';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'quod';

    $requestSecurity = new DfareportingDynamicTargetingKeysInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->dynamicTargetingKeys->dfareportingDynamicTargetingKeysInsert($request, $requestSecurity);

    if ($response->dynamicTargetingKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingDynamicTargetingKeysList

Retrieves a list of dynamic targeting keys.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDynamicTargetingKeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDynamicTargetingKeysListObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingDynamicTargetingKeysListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingDynamicTargetingKeysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eaque';
    $request->advertiserId = 'impedit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ex';
    $request->fields = 'odio';
    $request->key = 'delectus';
    $request->names = [
        'ut',
        'distinctio',
        'eius',
        'eos',
    ];
    $request->oauthToken = 'veniam';
    $request->objectId = 'repudiandae';
    $request->objectType = DfareportingDynamicTargetingKeysListObjectTypeEnum::OBJECT_CREATIVE;
    $request->prettyPrint = false;
    $request->profileId = 'occaecati';
    $request->quotaUser = 'debitis';
    $request->uploadType = 'laboriosam';
    $request->uploadProtocol = 'eos';

    $requestSecurity = new DfareportingDynamicTargetingKeysListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->dynamicTargetingKeys->dfareportingDynamicTargetingKeysList($request, $requestSecurity);

    if ($response->dynamicTargetingKeysListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
