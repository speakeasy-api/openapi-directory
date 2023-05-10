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
    $request->nodeGroupsAddNodesRequest->additionalNodeCount = 107789;
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aperiam';
    $request->fields = 'hic';
    $request->key = 'blanditiis';
    $request->nodeGroup = 'at';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'voluptatem';
    $request->requestId = 'tenetur';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'ex';
    $request->userIp = 'cupiditate';
    $request->zone = 'fugiat';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'architecto';
    $request->filter = 'atque';
    $request->includeAllScopes = false;
    $request->key = 'temporibus';
    $request->maxResults = 600167;
    $request->oauthToken = 'voluptate';
    $request->orderBy = 'debitis';
    $request->pageToken = 'sunt';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'quia';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'iste';
    $request->userIp = 'molestiae';

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
    $request->accessToken = 'et';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quibusdam';
    $request->fields = 'culpa';
    $request->key = 'voluptatum';
    $request->nodeGroup = 'voluptatem';
    $request->oauthToken = 'amet';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'explicabo';
    $request->requestId = 'quia';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'nobis';
    $request->zone = 'optio';

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
        'porro',
    ];
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'eaque';
    $request->key = 'odit';
    $request->nodeGroup = 'distinctio';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'sint';
    $request->quotaUser = 'odio';
    $request->requestId = 'repudiandae';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'accusantium';
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'id';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'recusandae';
    $request->key = 'neque';
    $request->nodeGroup = 'minima';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'officiis';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'quasi';
    $request->userIp = 'libero';
    $request->zone = 'tenetur';

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
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'similique';
    $request->fields = 'id';
    $request->key = 'quidem';
    $request->oauthToken = 'ut';
    $request->optionsRequestedPolicyVersion = 330468;
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'quae';
    $request->resource = 'dolores';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'sunt';
    $request->zone = 'iure';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeGroup = new NodeGroup();
    $request->nodeGroup->autoscalingPolicy = new NodeGroupAutoscalingPolicy();
    $request->nodeGroup->autoscalingPolicy->maxNodes = 276945;
    $request->nodeGroup->autoscalingPolicy->minNodes = 747014;
    $request->nodeGroup->autoscalingPolicy->mode = NodeGroupAutoscalingPolicyModeEnum::ONLY_SCALE_OUT;
    $request->nodeGroup->creationTimestamp = 'vitae';
    $request->nodeGroup->description = 'maxime';
    $request->nodeGroup->fingerprint = 'placeat';
    $request->nodeGroup->id = 'cupiditate';
    $request->nodeGroup->kind = 'asperiores';
    $request->nodeGroup->locationHint = 'maxime';
    $request->nodeGroup->maintenancePolicy = NodeGroupMaintenancePolicyEnum::MAINTENANCE_POLICY_UNSPECIFIED;
    $request->nodeGroup->maintenanceWindow = new NodeGroupMaintenanceWindow();
    $request->nodeGroup->maintenanceWindow->maintenanceDuration = new Duration();
    $request->nodeGroup->maintenanceWindow->maintenanceDuration->nanos = 120126;
    $request->nodeGroup->maintenanceWindow->maintenanceDuration->seconds = 'deserunt';
    $request->nodeGroup->maintenanceWindow->startTime = 'laborum';
    $request->nodeGroup->name = 'Derek Von';
    $request->nodeGroup->nodeTemplate = 'delectus';
    $request->nodeGroup->selfLink = 'sit';
    $request->nodeGroup->shareSettings = new ShareSettings();
    $request->nodeGroup->shareSettings->projectMap = [
        'labore' => new ShareSettingsProjectConfig(),
        'molestias' => new ShareSettingsProjectConfig(),
        'qui' => new ShareSettingsProjectConfig(),
        'soluta' => new ShareSettingsProjectConfig(),
    ];
    $request->nodeGroup->shareSettings->projects = [
        'nihil',
        'ut',
    ];
    $request->nodeGroup->shareSettings->shareType = ShareSettingsShareTypeEnum::ORGANIZATION;
    $request->nodeGroup->size = 843046;
    $request->nodeGroup->status = NodeGroupStatusEnum::CREATING;
    $request->nodeGroup->zone = 'rem';
    $request->accessToken = 'dolorum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odit';
    $request->fields = 'laboriosam';
    $request->initialNodeCount = 459348;
    $request->key = 'est';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'debitis';
    $request->requestId = 'esse';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'repudiandae';
    $request->userIp = 'ipsum';
    $request->zone = 'minus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'sequi';
    $request->filter = 'et';
    $request->key = 'tempore';
    $request->maxResults = 915217;
    $request->oauthToken = 'cumque';
    $request->orderBy = 'distinctio';
    $request->pageToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'nulla';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'magni';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'esse';
    $request->zone = 'deleniti';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'sapiente';
    $request->filter = 'maxime';
    $request->key = 'sed';
    $request->maxResults = 222093;
    $request->nodeGroup = 'nulla';
    $request->oauthToken = 'sint';
    $request->orderBy = 'eius';
    $request->pageToken = 'ad';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'animi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'unde';
    $request->uploadProtocol = 'rem';
    $request->userIp = 'iure';
    $request->zone = 'error';

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
    $request->nodeGroup1->autoscalingPolicy->maxNodes = 617670;
    $request->nodeGroup1->autoscalingPolicy->minNodes = 320259;
    $request->nodeGroup1->autoscalingPolicy->mode = NodeGroupAutoscalingPolicyModeEnum::ON;
    $request->nodeGroup1->creationTimestamp = 'dolorum';
    $request->nodeGroup1->description = 'quod';
    $request->nodeGroup1->fingerprint = 'nihil';
    $request->nodeGroup1->id = 'quae';
    $request->nodeGroup1->kind = 'ducimus';
    $request->nodeGroup1->locationHint = 'tenetur';
    $request->nodeGroup1->maintenancePolicy = NodeGroupMaintenancePolicyEnum::DEFAULT;
    $request->nodeGroup1->maintenanceWindow = new NodeGroupMaintenanceWindow();
    $request->nodeGroup1->maintenanceWindow->maintenanceDuration = new Duration();
    $request->nodeGroup1->maintenanceWindow->maintenanceDuration->nanos = 406445;
    $request->nodeGroup1->maintenanceWindow->maintenanceDuration->seconds = 'rerum';
    $request->nodeGroup1->maintenanceWindow->startTime = 'magni';
    $request->nodeGroup1->name = 'Cornelius Schinner';
    $request->nodeGroup1->nodeTemplate = 'autem';
    $request->nodeGroup1->selfLink = 'eius';
    $request->nodeGroup1->shareSettings = new ShareSettings();
    $request->nodeGroup1->shareSettings->projectMap = [
        'sunt' => new ShareSettingsProjectConfig(),
        'amet' => new ShareSettingsProjectConfig(),
        'laudantium' => new ShareSettingsProjectConfig(),
    ];
    $request->nodeGroup1->shareSettings->projects = [
        'a',
        'aliquid',
    ];
    $request->nodeGroup1->shareSettings->shareType = ShareSettingsShareTypeEnum::LOCAL;
    $request->nodeGroup1->size = 754041;
    $request->nodeGroup1->status = NodeGroupStatusEnum::INVALID;
    $request->nodeGroup1->zone = 'eum';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'incidunt';
    $request->fields = 'quisquam';
    $request->key = 'quod';
    $request->nodeGroupPathParameter = 'laboriosam';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'reprehenderit';
    $request->quotaUser = 'praesentium';
    $request->requestId = 'totam';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'deserunt';
    $request->zone = 'sequi';

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
    $request->zoneSetPolicyRequest->etag = 'nesciunt';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'inventore';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 634898;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'asperiores';
    $request->fields = 'deleniti';
    $request->key = 'optio';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'fugiat';
    $request->resource = 'voluptatibus';
    $request->uploadType = 'iste';
    $request->uploadProtocol = 'amet';
    $request->userIp = 'quae';
    $request->zone = 'pariatur';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->nodeGroupsSetNodeTemplateRequest = new NodeGroupsSetNodeTemplateRequest();
    $request->nodeGroupsSetNodeTemplateRequest->nodeTemplate = 'velit';
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'tempore';
    $request->fields = 'minima';
    $request->key = 'vitae';
    $request->nodeGroup = 'repellat';
    $request->oauthToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'iste';
    $request->requestId = 'numquam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'optio';
    $request->userIp = 'minus';
    $request->zone = 'sint';

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
        'ullam',
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'reprehenderit';
    $request->fields = 'esse';
    $request->key = 'magni';
    $request->nodeGroup = 'ea';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'veritatis';
    $request->quotaUser = 'ad';
    $request->requestId = 'velit';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'nam';
    $request->zone = 'quos';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'fuga',
    ];
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facere';
    $request->fields = 'laboriosam';
    $request->key = 'sint';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'alias';
    $request->resource = 'hic';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'iure';
    $request->userIp = 'consequatur';
    $request->zone = 'accusamus';

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
