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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'architecto';
    $request->fields = 'fuga';
    $request->filter = 'pariatur';
    $request->includeAllScopes = false;
    $request->key = 'debitis';
    $request->maxResults = 29190;
    $request->oauthToken = 'alias';
    $request->orderBy = 'deleniti';
    $request->pageToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'sapiente';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'nemo';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->diskType = 'illum';
    $request->fields = 'totam';
    $request->key = 'impedit';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'aliquam';
    $request->zone = 'inventore';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'consequatur';
    $request->filter = 'architecto';
    $request->key = 'sit';
    $request->maxResults = 265039;
    $request->oauthToken = 'fugit';
    $request->orderBy = 'ab';
    $request->pageToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'dolor';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'consequuntur';
    $request->zone = 'ipsa';

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
