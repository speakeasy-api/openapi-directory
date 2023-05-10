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
    $request->accessToken = 'alias';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'beatae';
    $request->fields = 'distinctio';
    $request->filter = 'deleniti';
    $request->includeAllScopes = false;
    $request->key = 'eligendi';
    $request->maxResults = 601194;
    $request->oauthToken = 'veniam';
    $request->orderBy = 'nam';
    $request->pageToken = 'accusamus';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'explicabo';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'soluta';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'dolore';
    $request->key = 'voluptatibus';
    $request->nodeType = 'eveniet';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'voluptate';
    $request->quotaUser = 'explicabo';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'possimus';
    $request->zone = 'dicta';

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
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quis';
    $request->fields = 'quos';
    $request->filter = 'impedit';
    $request->key = 'cupiditate';
    $request->maxResults = 569763;
    $request->oauthToken = 'quod';
    $request->orderBy = 'iure';
    $request->pageToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'quibusdam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'nam';
    $request->userIp = 'optio';
    $request->zone = 'accusantium';

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
