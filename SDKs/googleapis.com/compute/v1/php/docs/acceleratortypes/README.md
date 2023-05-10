# acceleratorTypes

### Available Operations

* [computeAcceleratorTypesAggregatedList](#computeacceleratortypesaggregatedlist) - Retrieves an aggregated list of accelerator types.
* [computeAcceleratorTypesGet](#computeacceleratortypesget) - Returns the specified accelerator type.
* [computeAcceleratorTypesList](#computeacceleratortypeslist) - Retrieves a list of accelerator types that are available to the specified project.

## computeAcceleratorTypesAggregatedList

Retrieves an aggregated list of accelerator types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAcceleratorTypesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'minus';
    $request->filter = 'placeat';
    $request->includeAllScopes = false;
    $request->key = 'voluptatum';
    $request->maxResults = 479977;
    $request->oauthToken = 'excepturi';
    $request->orderBy = 'nisi';
    $request->pageToken = 'recusandae';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'ab';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'deserunt';

    $requestSecurity = new ComputeAcceleratorTypesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeAcceleratorTypesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acceleratorTypes->computeAcceleratorTypesAggregatedList($request, $requestSecurity);

    if ($response->acceleratorTypeAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAcceleratorTypesGet

Returns the specified accelerator type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAcceleratorTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->acceleratorType = 'ipsam';
    $request->accessToken = 'repellendus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'esse';
    $request->zone = 'totam';

    $requestSecurity = new ComputeAcceleratorTypesGetSecurity();
    $requestSecurity->option1 = new ComputeAcceleratorTypesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acceleratorTypes->computeAcceleratorTypesGet($request, $requestSecurity);

    if ($response->acceleratorType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAcceleratorTypesList

Retrieves a list of accelerator types that are available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAcceleratorTypesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAcceleratorTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nam';
    $request->fields = 'officia';
    $request->filter = 'occaecati';
    $request->key = 'fugit';
    $request->maxResults = 537373;
    $request->oauthToken = 'hic';
    $request->orderBy = 'optio';
    $request->pageToken = 'totam';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'commodi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'qui';
    $request->zone = 'impedit';

    $requestSecurity = new ComputeAcceleratorTypesListSecurity();
    $requestSecurity->option1 = new ComputeAcceleratorTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->acceleratorTypes->computeAcceleratorTypesList($request, $requestSecurity);

    if ($response->acceleratorTypeList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
