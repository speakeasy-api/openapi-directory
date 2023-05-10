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
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'asperiores';
    $request->fields = 'rem';
    $request->filter = 'quod';
    $request->includeAllScopes = false;
    $request->key = 'commodi';
    $request->maxResults = 617374;
    $request->oauthToken = 'beatae';
    $request->orderBy = 'placeat';
    $request->pageToken = 'molestiae';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'quia';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nulla';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'doloribus';

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
    $request->accessToken = 'culpa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'magnam';
    $request->key = 'voluptate';
    $request->machineType = 'aliquid';
    $request->oauthToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'animi';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'possimus';
    $request->zone = 'optio';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'placeat';
    $request->fields = 'quas';
    $request->filter = 'culpa';
    $request->key = 'consectetur';
    $request->maxResults = 345588;
    $request->oauthToken = 'dicta';
    $request->orderBy = 'eos';
    $request->pageToken = 'porro';
    $request->prettyPrint = false;
    $request->project = 'iusto';
    $request->quotaUser = 'dolorem';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'dolore';
    $request->zone = 'rem';

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
