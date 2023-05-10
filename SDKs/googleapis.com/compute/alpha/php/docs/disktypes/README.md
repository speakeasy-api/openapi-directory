# diskTypes

### Available Operations

* [computeDiskTypesAggregatedList](#computedisktypesaggregatedlist) - Retrieves an aggregated list of disk types.
* [computeDiskTypesGet](#computedisktypesget) - Returns the specified disk type.
* [computeDiskTypesList](#computedisktypeslist) - Retrieves a list of disk types available to the specified project.

## computeDiskTypesAggregatedList

Retrieves an aggregated list of disk types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDiskTypesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'est';
    $request->fields = 'error';
    $request->filter = 'esse';
    $request->includeAllScopes = false;
    $request->key = 'labore';
    $request->maxResults = 85066;
    $request->oauthToken = 'vero';
    $request->orderBy = 'consectetur';
    $request->pageToken = 'vitae';
    $request->prettyPrint = false;
    $request->project = 'inventore';
    $request->quotaUser = 'dolorem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ad';
    $request->uploadProtocol = 'qui';
    $request->userIp = 'iste';

    $requestSecurity = new ComputeDiskTypesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeDiskTypesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->diskTypes->computeDiskTypesAggregatedList($request, $requestSecurity);

    if ($response->diskTypeAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDiskTypesGet

Returns the specified disk type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDiskTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'libero';
    $request->diskType = 'rem';
    $request->fields = 'dolorum';
    $request->key = 'odio';
    $request->oauthToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'alias';
    $request->quotaUser = 'magni';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'quae';
    $request->userIp = 'quae';
    $request->zone = 'modi';

    $requestSecurity = new ComputeDiskTypesGetSecurity();
    $requestSecurity->option1 = new ComputeDiskTypesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->diskTypes->computeDiskTypesGet($request, $requestSecurity);

    if ($response->diskType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeDiskTypesList

Retrieves a list of disk types available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeDiskTypesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeDiskTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'et';
    $request->fields = 'ipsum';
    $request->filter = 'unde';
    $request->key = 'nulla';
    $request->maxResults = 714376;
    $request->oauthToken = 'maxime';
    $request->orderBy = 'quia';
    $request->pageToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'nostrum';
    $request->quotaUser = 'omnis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'id';
    $request->zone = 'libero';

    $requestSecurity = new ComputeDiskTypesListSecurity();
    $requestSecurity->option1 = new ComputeDiskTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->diskTypes->computeDiskTypesList($request, $requestSecurity);

    if ($response->diskTypeList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
