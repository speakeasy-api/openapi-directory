# machineTypes

### Available Operations

* [computeMachineTypesAggregatedList](#computemachinetypesaggregatedlist) - Retrieves an aggregated list of machine types.
* [computeMachineTypesGet](#computemachinetypesget) - Returns the specified machine type.
* [computeMachineTypesList](#computemachinetypeslist) - Retrieves a list of machine types available to the specified project.

## computeMachineTypesAggregatedList

Retrieves an aggregated list of machine types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineTypesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sequi';
    $request->fields = 'sapiente';
    $request->filter = 'illum';
    $request->includeAllScopes = false;
    $request->key = 'nesciunt';
    $request->maxResults = 760941;
    $request->oauthToken = 'corrupti';
    $request->orderBy = 'inventore';
    $request->pageToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'dicta';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'deleniti';

    $requestSecurity = new ComputeMachineTypesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeMachineTypesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineTypes->computeMachineTypesAggregatedList($request, $requestSecurity);

    if ($response->machineTypeAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeMachineTypesGet

Returns the specified machine type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'voluptatibus';
    $request->key = 'iste';
    $request->machineType = 'amet';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'officia';
    $request->uploadType = 'velit';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'facere';
    $request->zone = 'tempore';

    $requestSecurity = new ComputeMachineTypesGetSecurity();
    $requestSecurity->option1 = new ComputeMachineTypesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineTypes->computeMachineTypesGet($request, $requestSecurity);

    if ($response->machineType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeMachineTypesList

Retrieves a list of machine types available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeMachineTypesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeMachineTypesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'facere';
    $request->filter = 'iste';
    $request->key = 'numquam';
    $request->maxResults = 631352;
    $request->oauthToken = 'optio';
    $request->orderBy = 'minus';
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'consectetur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'nesciunt';
    $request->zone = 'reprehenderit';

    $requestSecurity = new ComputeMachineTypesListSecurity();
    $requestSecurity->option1 = new ComputeMachineTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->machineTypes->computeMachineTypesList($request, $requestSecurity);

    if ($response->machineTypeList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
