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
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'unde';
    $request->fields = 'voluptates';
    $request->id = '729c9d4f-2d8a-4446-80ca-60db73a2f93f';
    $request->key = 'labore';
    $request->oauthToken = 'autem';
    $request->prettyPrint = false;
    $request->profileId = 'in';
    $request->quotaUser = 'at';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'quae';

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
    $request->size->height = 508668;
    $request->size->iab = false;
    $request->size->id = 'facere';
    $request->size->kind = 'fuga';
    $request->size->width = 327811;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->fields = 'sed';
    $request->key = 'aut';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->profileId = 'laboriosam';
    $request->quotaUser = 'laborum';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'quas';

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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptate';
    $request->fields = 'dolore';
    $request->height = 508424;
    $request->iabStandard = false;
    $request->ids = [
        'quo',
        'et',
    ];
    $request->key = 'cupiditate';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->profileId = 'voluptas';
    $request->quotaUser = 'similique';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'error';
    $request->width = 502580;

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
