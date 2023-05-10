# nodeGroups

### Available Operations

* [computeNodeGroupsAddNodes](#computenodegroupsaddnodes) - Adds specified number of nodes to the node group.
* [computeNodeGroupsAggregatedList](#computenodegroupsaggregatedlist) - Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group.
* [computeNodeGroupsDelete](#computenodegroupsdelete) - Deletes the specified NodeGroup resource.
* [computeNodeGroupsDeleteNodes](#computenodegroupsdeletenodes) - Deletes specified nodes from the node group.
* [computeNodeGroupsGet](#computenodegroupsget) - Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.
* [computeNodeGroupsGetIamPolicy](#computenodegroupsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeNodeGroupsInsert](#computenodegroupsinsert) - Creates a NodeGroup resource in the specified project using the data included in the request.
* [computeNodeGroupsList](#computenodegroupslist) - Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.
* [computeNodeGroupsListNodes](#computenodegroupslistnodes) - Lists nodes in the node group.
* [computeNodeGroupsPatch](#computenodegroupspatch) - Updates the specified node group.
* [computeNodeGroupsSetIamPolicy](#computenodegroupssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeNodeGroupsSetNodeTemplate](#computenodegroupssetnodetemplate) - Updates the node template of the node group.
* [computeNodeGroupsSimulateMaintenanceEvent](#computenodegroupssimulatemaintenanceevent) - Simulates maintenance event on specified nodes from the node group.
* [computeNodeGroupsTestIamPermissions](#computenodegroupstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeNodeGroupsAddNodes

Adds specified number of nodes to the node group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsAddNodesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupsAddNodesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsAddNodesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsAddNodesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsAddNodesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsAddNodesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->nodeGroupsAddNodesRequest = new NodeGroupsAddNodesRequest();
    $request->nodeGroupsAddNodesRequest->additionalNodeCount = 379068;
    $request->accessToken = 'aut';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'molestias';
    $request->key = 'cupiditate';
    $request->nodeGroup = 'officia';
    $request->oauthToken = 'minima';
    $request->prettyPrint = false;
    $request->project = 'doloribus';
    $request->quotaUser = 'suscipit';
    $request->requestId = 'sequi';
    $request->uploadType = 'debitis';
    $request->uploadProtocol = 'neque';
    $request->userIp = 'mollitia';
    $request->zone = 'tenetur';

    $requestSecurity = new ComputeNodeGroupsAddNodesSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsAddNodesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsAddNodes($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsAggregatedList

Retrieves an aggregated list of node groups. Note: use nodeGroups.listNodes for more details about each group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'natus';
    $request->fields = 'quibusdam';
    $request->filter = 'quibusdam';
    $request->includeAllScopes = false;
    $request->key = 'officia';
    $request->maxResults = 209692;
    $request->oauthToken = 'velit';
    $request->orderBy = 'vero';
    $request->pageToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'vel';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'non';
    $request->uploadProtocol = 'incidunt';
    $request->userIp = 'praesentium';

    $requestSecurity = new ComputeNodeGroupsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsAggregatedList($request, $requestSecurity);

    if ($response->nodeGroupAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsDelete

Deletes the specified NodeGroup resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'itaque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'esse';
    $request->key = 'id';
    $request->nodeGroup = 'natus';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'modi';
    $request->requestId = 'assumenda';
    $request->uploadType = 'maiores';
    $request->uploadProtocol = 'neque';
    $request->userIp = 'in';
    $request->zone = 'debitis';

    $requestSecurity = new ComputeNodeGroupsDeleteSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsDeleteNodes

Deletes specified nodes from the node group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsDeleteNodesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupsDeleteNodesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsDeleteNodesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsDeleteNodesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsDeleteNodesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsDeleteNodesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeGroupsDeleteNodesRequest = new NodeGroupsDeleteNodesRequest();
    $request->nodeGroupsDeleteNodesRequest->nodes = [
        'libero',
        'totam',
    ];
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nostrum';
    $request->fields = 'facere';
    $request->key = 'aliquam';
    $request->nodeGroup = 'vitae';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'inventore';
    $request->requestId = 'ipsum';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'praesentium';
    $request->zone = 'dolores';

    $requestSecurity = new ComputeNodeGroupsDeleteNodesSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsDeleteNodesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsDeleteNodes($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsGet

Returns the specified NodeGroup. Get a list of available NodeGroups by making a list() request. Note: the "nodes" field should not be used. Use nodeGroups.listNodes instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'perferendis';
    $request->key = 'iure';
    $request->nodeGroup = 'cum';
    $request->oauthToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'ratione';
    $request->quotaUser = 'quis';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'aut';
    $request->zone = 'cupiditate';

    $requestSecurity = new ComputeNodeGroupsGetSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsGet($request, $requestSecurity);

    if ($response->nodeGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'harum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'velit';
    $request->key = 'incidunt';
    $request->oauthToken = 'a';
    $request->optionsRequestedPolicyVersion = 7370;
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'numquam';
    $request->resource = 'numquam';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'voluptatum';
    $request->zone = 'vel';

    $requestSecurity = new ComputeNodeGroupsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsInsert

Creates a NodeGroup resource in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroup;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupAutoscalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupAutoscalingPolicyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenancePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->nodeGroup = new NodeGroup();
    $request->nodeGroup->autoscalingPolicy = new NodeGroupAutoscalingPolicy();
    $request->nodeGroup->autoscalingPolicy->maxNodes = 267829;
    $request->nodeGroup->autoscalingPolicy->minNodes = 711216;
    $request->nodeGroup->autoscalingPolicy->mode = NodeGroupAutoscalingPolicyModeEnum::ON;
    $request->nodeGroup->creationTimestamp = 'consequuntur';
    $request->nodeGroup->description = 'eaque';
    $request->nodeGroup->fingerprint = 'asperiores';
    $request->nodeGroup->id = 'debitis';
    $request->nodeGroup->kind = 'nostrum';
    $request->nodeGroup->locationHint = 'quibusdam';
    $request->nodeGroup->maintenancePolicy = NodeGroupMaintenancePolicyEnum::MIGRATE_WITHIN_NODE_GROUP;
    $request->nodeGroup->maintenanceWindow = new NodeGroupMaintenanceWindow();
    $request->nodeGroup->maintenanceWindow->maintenanceDuration = new Duration();
    $request->nodeGroup->maintenanceWindow->maintenanceDuration->nanos = 85797;
    $request->nodeGroup->maintenanceWindow->maintenanceDuration->seconds = 'sunt';
    $request->nodeGroup->maintenanceWindow->startTime = 'quod';
    $request->nodeGroup->name = 'Winston Waters';
    $request->nodeGroup->nodeTemplate = 'excepturi';
    $request->nodeGroup->selfLink = 'placeat';
    $request->nodeGroup->shareSettings = new ShareSettings();
    $request->nodeGroup->shareSettings->projectMap = [
        'voluptatibus' => new ShareSettingsProjectConfig(),
        'modi' => new ShareSettingsProjectConfig(),
        'enim' => new ShareSettingsProjectConfig(),
    ];
    $request->nodeGroup->shareSettings->shareType = ShareSettingsShareTypeEnum::SHARE_TYPE_UNSPECIFIED;
    $request->nodeGroup->size = 151039;
    $request->nodeGroup->status = NodeGroupStatusEnum::DELETING;
    $request->nodeGroup->zone = 'delectus';
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'saepe';
    $request->fields = 'consequuntur';
    $request->initialNodeCount = 797903;
    $request->key = 'occaecati';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'temporibus';
    $request->requestId = 'quae';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'debitis';
    $request->userIp = 'omnis';
    $request->zone = 'temporibus';

    $requestSecurity = new ComputeNodeGroupsInsertSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsList

Retrieves a list of node groups available to the specified project. Note: use nodeGroups.listNodes for more details about each group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'neque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repellendus';
    $request->fields = 'tempora';
    $request->filter = 'quisquam';
    $request->key = 'vel';
    $request->maxResults = 741473;
    $request->oauthToken = 'doloremque';
    $request->orderBy = 'adipisci';
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'accusantium';
    $request->quotaUser = 'molestias';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'quisquam';
    $request->zone = 'nesciunt';

    $requestSecurity = new ComputeNodeGroupsListSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsList($request, $requestSecurity);

    if ($response->nodeGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsListNodes

Lists nodes in the node group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListNodesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListNodesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListNodesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListNodesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsListNodesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsListNodesRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'velit';
    $request->filter = 'aut';
    $request->key = 'rem';
    $request->maxResults = 142520;
    $request->nodeGroup = 'libero';
    $request->oauthToken = 'error';
    $request->orderBy = 'incidunt';
    $request->pageToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'mollitia';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'earum';
    $request->zone = 'possimus';

    $requestSecurity = new ComputeNodeGroupsListNodesSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsListNodesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsListNodes($request, $requestSecurity);

    if ($response->nodeGroupsListNodes !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsPatch

Updates the specified node group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroup;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupAutoscalingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupAutoscalingPolicyModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenancePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsProjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsShareTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeGroup1 = new NodeGroup();
    $request->nodeGroup1->autoscalingPolicy = new NodeGroupAutoscalingPolicy();
    $request->nodeGroup1->autoscalingPolicy->maxNodes = 431538;
    $request->nodeGroup1->autoscalingPolicy->minNodes = 483290;
    $request->nodeGroup1->autoscalingPolicy->mode = NodeGroupAutoscalingPolicyModeEnum::MODE_UNSPECIFIED;
    $request->nodeGroup1->creationTimestamp = 'voluptates';
    $request->nodeGroup1->description = 'unde';
    $request->nodeGroup1->fingerprint = 'impedit';
    $request->nodeGroup1->id = 'amet';
    $request->nodeGroup1->kind = 'dolores';
    $request->nodeGroup1->locationHint = 'commodi';
    $request->nodeGroup1->maintenancePolicy = NodeGroupMaintenancePolicyEnum::DEFAULT;
    $request->nodeGroup1->maintenanceWindow = new NodeGroupMaintenanceWindow();
    $request->nodeGroup1->maintenanceWindow->maintenanceDuration = new Duration();
    $request->nodeGroup1->maintenanceWindow->maintenanceDuration->nanos = 318294;
    $request->nodeGroup1->maintenanceWindow->maintenanceDuration->seconds = 'eaque';
    $request->nodeGroup1->maintenanceWindow->startTime = 'officia';
    $request->nodeGroup1->name = 'Mrs. Natalie Kozey';
    $request->nodeGroup1->nodeTemplate = 'nihil';
    $request->nodeGroup1->selfLink = 'blanditiis';
    $request->nodeGroup1->shareSettings = new ShareSettings();
    $request->nodeGroup1->shareSettings->projectMap = [
        'quisquam' => new ShareSettingsProjectConfig(),
        'itaque' => new ShareSettingsProjectConfig(),
        'consequatur' => new ShareSettingsProjectConfig(),
    ];
    $request->nodeGroup1->shareSettings->shareType = ShareSettingsShareTypeEnum::SPECIFIC_PROJECTS;
    $request->nodeGroup1->size = 612427;
    $request->nodeGroup1->status = NodeGroupStatusEnum::INVALID;
    $request->nodeGroup1->zone = 'dicta';
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'numquam';
    $request->fields = 'temporibus';
    $request->key = 'omnis';
    $request->nodeGroupPathParameter = 'amet';
    $request->oauthToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'ducimus';
    $request->quotaUser = 'modi';
    $request->requestId = 'impedit';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'dolores';
    $request->userIp = 'ullam';
    $request->zone = 'sed';

    $requestSecurity = new ComputeNodeGroupsPatchSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ZoneSetPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleActionEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\ConditionIamEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionOpEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConditionSysEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptions;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationLoggingOptionsPermissionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCloudAuditOptionsLogNameEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigCounterOptionsCustomField;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptions;
use \OpenAPI\OpenAPI\Models\Shared\LogConfigDataAccessOptionsLogModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->zoneSetPolicyRequest = new ZoneSetPolicyRequest();
    $request->zoneSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->etag = 'dolor';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'cum';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 843969;
    $request->accessToken = 'rerum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'odio';
    $request->key = 'reprehenderit';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'distinctio';
    $request->resource = 'nam';
    $request->uploadType = 'nisi';
    $request->uploadProtocol = 'officiis';
    $request->userIp = 'quasi';
    $request->zone = 'fugiat';

    $requestSecurity = new ComputeNodeGroupsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsSetNodeTemplate

Updates the node template of the node group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSetNodeTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupsSetNodeTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSetNodeTemplateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSetNodeTemplateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSetNodeTemplateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsSetNodeTemplateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeGroupsSetNodeTemplateRequest = new NodeGroupsSetNodeTemplateRequest();
    $request->nodeGroupsSetNodeTemplateRequest->nodeTemplate = 'impedit';
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eaque';
    $request->fields = 'aspernatur';
    $request->key = 'expedita';
    $request->nodeGroup = 'laborum';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'explicabo';
    $request->requestId = 'eligendi';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'placeat';
    $request->userIp = 'aliquam';
    $request->zone = 'aliquid';

    $requestSecurity = new ComputeNodeGroupsSetNodeTemplateSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsSetNodeTemplateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsSetNodeTemplate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsSimulateMaintenanceEvent

Simulates maintenance event on specified nodes from the node group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSimulateMaintenanceEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupsSimulateMaintenanceEventRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSimulateMaintenanceEventSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSimulateMaintenanceEventSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsSimulateMaintenanceEventSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsSimulateMaintenanceEventRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeGroupsSimulateMaintenanceEventRequest = new NodeGroupsSimulateMaintenanceEventRequest();
    $request->nodeGroupsSimulateMaintenanceEventRequest->nodes = [
        'fugiat',
        'enim',
    ];
    $request->accessToken = 'eveniet';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'exercitationem';
    $request->fields = 'at';
    $request->key = 'culpa';
    $request->nodeGroup = 'alias';
    $request->oauthToken = 'eos';
    $request->prettyPrint = false;
    $request->project = 'quos';
    $request->quotaUser = 'quisquam';
    $request->requestId = 'dolor';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'enim';
    $request->zone = 'veritatis';

    $requestSecurity = new ComputeNodeGroupsSimulateMaintenanceEventSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsSimulateMaintenanceEventSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsSimulateMaintenanceEvent($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeNodeGroupsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'vero',
    ];
    $request->accessToken = 'ratione';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloribus';
    $request->fields = 'fugiat';
    $request->key = 'deserunt';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->project = 'eum';
    $request->quotaUser = 'commodi';
    $request->resource = 'magnam';
    $request->uploadType = 'rem';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'possimus';
    $request->zone = 'voluptate';

    $requestSecurity = new ComputeNodeGroupsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
