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
    $request->accessToken = 'error';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempora';
    $request->fields = 'maiores';
    $request->filter = 'eos';
    $request->includeAllScopes = false;
    $request->key = 'pariatur';
    $request->maxResults = 519008;
    $request->oauthToken = 'fuga';
    $request->orderBy = 'aliquam';
    $request->pageToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'quaerat';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'quisquam';
    $request->userIp = 'fuga';

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
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'nihil';
    $request->key = 'neque';
    $request->nodeType = 'est';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'unde';
    $request->uploadType = 'dolorem';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'labore';
    $request->zone = 'autem';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quae';
    $request->fields = 'possimus';
    $request->filter = 'praesentium';
    $request->key = 'facere';
    $request->maxResults = 681766;
    $request->oauthToken = 'minima';
    $request->orderBy = 'voluptas';
    $request->pageToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'sed';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'laboriosam';
    $request->zone = 'laborum';

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
