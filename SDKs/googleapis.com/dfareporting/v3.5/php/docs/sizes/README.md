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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'debitis';
    $request->fields = 'repudiandae';
    $request->id = 'a7681746-8063-4f79-9b79-56c0b0fa0bb2';
    $request->key = 'quae';
    $request->oauthToken = 'culpa';
    $request->prettyPrint = false;
    $request->profileId = 'labore';
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'voluptates';
    $request->uploadProtocol = 'reprehenderit';

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
    $request->size->height = 279106;
    $request->size->iab = false;
    $request->size->id = 'id';
    $request->size->kind = 'accusamus';
    $request->size->width = 399696;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nisi';
    $request->fields = 'eius';
    $request->key = 'consequuntur';
    $request->oauthToken = 'iusto';
    $request->prettyPrint = false;
    $request->profileId = 'explicabo';
    $request->quotaUser = 'autem';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'esse';

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
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'culpa';
    $request->fields = 'ipsa';
    $request->height = 450966;
    $request->iabStandard = false;
    $request->ids = [
        'perferendis',
        'rem',
        'earum',
        'nulla',
    ];
    $request->key = 'sequi';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->profileId = 'magni';
    $request->quotaUser = 'inventore';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'dolores';
    $request->width = 348663;

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
