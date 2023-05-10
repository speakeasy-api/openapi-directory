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
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'provident';
    $request->fields = 'quis';
    $request->filter = 'eum';
    $request->includeAllScopes = false;
    $request->key = 'reiciendis';
    $request->maxResults = 592780;
    $request->oauthToken = 'aspernatur';
    $request->orderBy = 'ullam';
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'animi';
    $request->quotaUser = 'nostrum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'possimus';

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
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->diskType = 'repellat';
    $request->fields = 'doloribus';
    $request->key = 'ullam';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'earum';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'laborum';
    $request->userIp = 'placeat';
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'cumque';
    $request->filter = 'vitae';
    $request->key = 'rerum';
    $request->maxResults = 272229;
    $request->oauthToken = 'quis';
    $request->orderBy = 'inventore';
    $request->pageToken = 'fugit';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'quae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'velit';
    $request->userIp = 'aspernatur';
    $request->zone = 'eum';

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
