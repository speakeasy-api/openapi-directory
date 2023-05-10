# nodeTypes

### Available Operations

* [computeNodeTypesAggregatedList](#computenodetypesaggregatedlist) - Retrieves an aggregated list of node types.
* [computeNodeTypesGet](#computenodetypesget) - Returns the specified node type.
* [computeNodeTypesList](#computenodetypeslist) - Retrieves a list of node types available to the specified project.

## computeNodeTypesAggregatedList

Retrieves an aggregated list of node types.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTypesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'perspiciatis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'earum';
    $request->fields = 'velit';
    $request->filter = 'fugiat';
    $request->includeAllScopes = false;
    $request->key = 'pariatur';
    $request->maxResults = 27676;
    $request->oauthToken = 'quod';
    $request->orderBy = 'minus';
    $request->pageToken = 'pariatur';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'amet';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'dicta';

    $requestSecurity = new ComputeNodeTypesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeNodeTypesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTypes->computeNodeTypesAggregatedList($request, $requestSecurity);

    if ($response->nodeTypeAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeTypesGet

Returns the specified node type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTypesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aliquam';
    $request->fields = 'voluptates';
    $request->key = 'alias';
    $request->nodeType = 'voluptatum';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'officia';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'ipsa';
    $request->userIp = 'incidunt';
    $request->zone = 'architecto';

    $requestSecurity = new ComputeNodeTypesGetSecurity();
    $requestSecurity->option1 = new ComputeNodeTypesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTypes->computeNodeTypesGet($request, $requestSecurity);

    if ($response->nodeType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeTypesList

Retrieves a list of node types available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeTypesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeTypesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'optio';
    $request->fields = 'odio';
    $request->filter = 'ullam';
    $request->key = 'provident';
    $request->maxResults = 886418;
    $request->oauthToken = 'ipsa';
    $request->orderBy = 'eos';
    $request->pageToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'dignissimos';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'maxime';
    $request->zone = 'quis';

    $requestSecurity = new ComputeNodeTypesListSecurity();
    $requestSecurity->option1 = new ComputeNodeTypesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeTypes->computeNodeTypesList($request, $requestSecurity);

    if ($response->nodeTypeList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
