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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'labore';
    $request->fields = 'adipisci';
    $request->filter = 'ratione';
    $request->includeAllScopes = false;
    $request->key = 'cum';
    $request->maxResults = 300732;
    $request->oauthToken = 'nihil';
    $request->orderBy = 'officiis';
    $request->pageToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'ex';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'ad';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'alias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'qui';
    $request->key = 'amet';
    $request->machineType = 'recusandae';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->project = 'corrupti';
    $request->quotaUser = 'sit';
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'quas';
    $request->zone = 'ratione';

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
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->fields = 'quis';
    $request->filter = 'repudiandae';
    $request->key = 'soluta';
    $request->maxResults = 262614;
    $request->oauthToken = 'fuga';
    $request->orderBy = 'blanditiis';
    $request->pageToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'iusto';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'recusandae';
    $request->zone = 'ipsam';

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
