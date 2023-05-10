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
    $request->accessToken = 'repudiandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'reprehenderit';
    $request->id = 'b67feef5-e142-4d95-b1db-eceff7c4b156';
    $request->key = 'itaque';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->profileId = 'odit';
    $request->quotaUser = 'ducimus';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'consequuntur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->size = new Size();
    $request->size->height = 371545;
    $request->size->iab = false;
    $request->size->id = 'debitis';
    $request->size->kind = 'repudiandae';
    $request->size->width = 642425;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laudantium';
    $request->fields = 'quasi';
    $request->key = 'nihil';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->profileId = 'laboriosam';
    $request->quotaUser = 'praesentium';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'nisi';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'tenetur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perspiciatis';
    $request->fields = 'cupiditate';
    $request->height = 706996;
    $request->iabStandard = false;
    $request->ids = [
        'perspiciatis',
        'nemo',
    ];
    $request->key = 'ex';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->profileId = 'quae';
    $request->quotaUser = 'quidem';
    $request->uploadType = 'voluptatem';
    $request->uploadProtocol = 'tenetur';
    $request->width = 653744;

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
