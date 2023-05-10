# sizes

### Available Operations

* [dfareportingSizesGet](#dfareportingsizesget) - Gets one size by ID.
* [dfareportingSizesInsert](#dfareportingsizesinsert) - Inserts a new size.
* [dfareportingSizesList](#dfareportingsizeslist) - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

## dfareportingSizesGet

Gets one size by ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSizesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSizesGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSizesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vitae';
    $request->fields = 'pariatur';
    $request->id = '32090fc1-57ac-49fe-9961-ce9be41c869d';
    $request->key = 'facere';
    $request->oauthToken = 'ducimus';
    $request->prettyPrint = false;
    $request->profileId = 'quibusdam';
    $request->quotaUser = 'omnis';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'illo';

    $requestSecurity = new DfareportingSizesGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sizes->dfareportingSizesGet($request, $requestSecurity);

    if ($response->size !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSizesInsert

Inserts a new size.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSizesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Size;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSizesInsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSizesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->size = new Size();
    $request->size->height = 833587;
    $request->size->iab = false;
    $request->size->id = 'consequatur';
    $request->size->kind = 'dignissimos';
    $request->size->width = 689029;
    $request->accessToken = 'odit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eaque';
    $request->fields = 'deserunt';
    $request->key = 'corporis';
    $request->oauthToken = 'praesentium';
    $request->prettyPrint = false;
    $request->profileId = 'delectus';
    $request->quotaUser = 'a';
    $request->uploadType = 'temporibus';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new DfareportingSizesInsertSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sizes->dfareportingSizesInsert($request, $requestSecurity);

    if ($response->size !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dfareportingSizesList

Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSizesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DfareportingSizesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DfareportingSizesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'nulla';
    $request->fields = 'delectus';
    $request->height = 514095;
    $request->iabStandard = false;
    $request->ids = [
        'facere',
        'laudantium',
        'praesentium',
        'sed',
    ];
    $request->key = 'fuga';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->profileId = 'accusamus';
    $request->quotaUser = 'voluptas';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'tempore';
    $request->width = 880858;

    $requestSecurity = new DfareportingSizesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->sizes->dfareportingSizesList($request, $requestSecurity);

    if ($response->sizesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
