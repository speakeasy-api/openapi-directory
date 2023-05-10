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
* [computeNodeGroupsPerformMaintenance](#computenodegroupsperformmaintenance) - Perform maintenance on a subset of nodes in the node group.
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
    $request->nodeGroupsAddNodesRequest->additionalNodeCount = 598914;
    $request->accessToken = 'beatae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->fields = 'maiores';
    $request->key = 'voluptate';
    $request->nodeGroup = 'libero';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->project = 'ea';
    $request->quotaUser = 'error';
    $request->requestId = 'at';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'autem';
    $request->userIp = 'alias';
    $request->zone = 'est';

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
    $request->accessToken = 'dignissimos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quo';
    $request->fields = 'saepe';
    $request->filter = 'tempore';
    $request->includeAllScopes = false;
    $request->key = 'sunt';
    $request->maxResults = 390694;
    $request->oauthToken = 'nulla';
    $request->orderBy = 'architecto';
    $request->pageToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'et';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'qui';

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
    $request->accessToken = 'neque';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'nihil';
    $request->key = 'quisquam';
    $request->nodeGroup = 'aperiam';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'repellat';
    $request->requestId = 'molestias';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'sapiente';
    $request->zone = 'error';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->nodeGroupsDeleteNodesRequest = new NodeGroupsDeleteNodesRequest();
    $request->nodeGroupsDeleteNodesRequest->nodes = [
        'eligendi',
        'aspernatur',
    ];
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'non';
    $request->key = 'repudiandae';
    $request->nodeGroup = 'quae';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'deserunt';
    $request->requestId = 'non';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'magnam';
    $request->userIp = 'quia';
    $request->zone = 'ullam';

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
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsa';
    $request->fields = 'consequuntur';
    $request->key = 'ullam';
    $request->nodeGroup = 'molestiae';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'maiores';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'fugit';
    $request->userIp = 'maxime';
    $request->zone = 'iusto';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'porro';
    $request->fields = 'enim';
    $request->key = 'tempora';
    $request->oauthToken = 'voluptatum';
    $request->optionsRequestedPolicyVersion = 737774;
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'sit';
    $request->resource = 'excepturi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'numquam';
    $request->userIp = 'architecto';
    $request->zone = 'fuga';

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
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenancePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsFolderConfig;
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
    $request->nodeGroup->autoscalingPolicy->maxNodes = 633056;
    $request->nodeGroup->autoscalingPolicy->minNodes = 173429;
    $request->nodeGroup->autoscalingPolicy->mode = NodeGroupAutoscalingPolicyModeEnum::MODE_UNSPECIFIED;
    $request->nodeGroup->creationTimestamp = 'ipsam';
    $request->nodeGroup->description = 'impedit';
    $request->nodeGroup->fingerprint = 'officia';
    $request->nodeGroup->id = 'et';
    $request->nodeGroup->kind = 'odit';
    $request->nodeGroup->locationHint = 'similique';
    $request->nodeGroup->maintenanceInterval = NodeGroupMaintenanceIntervalEnum::AS_NEEDED;
    $request->nodeGroup->maintenancePolicy = NodeGroupMaintenancePolicyEnum::MIGRATE_WITHIN_NODE_GROUP;
    $request->nodeGroup->maintenanceWindow = new NodeGroupMaintenanceWindow();
    $request->nodeGroup->maintenanceWindow->duration = 'dolorum';
    $request->nodeGroup->maintenanceWindow->maintenanceDuration = new Duration();
    $request->nodeGroup->maintenanceWindow->maintenanceDuration->nanos = 593205;
    $request->nodeGroup->maintenanceWindow->maintenanceDuration->seconds = 'quibusdam';
    $request->nodeGroup->maintenanceWindow->startTime = 'ipsam';
    $request->nodeGroup->name = 'Fredrick Ledner V';
    $request->nodeGroup->nodeTemplate = 'fugit';
    $request->nodeGroup->selfLink = 'placeat';
    $request->nodeGroup->selfLinkWithId = 'sapiente';
    $request->nodeGroup->shareSettings = new ShareSettings();
    $request->nodeGroup->shareSettings->folderMap = [
        'alias' => new ShareSettingsFolderConfig(),
        'eligendi' => new ShareSettingsFolderConfig(),
        'odio' => new ShareSettingsFolderConfig(),
        'iusto' => new ShareSettingsFolderConfig(),
    ];
    $request->nodeGroup->shareSettings->projectMap = [
        'ullam' => new ShareSettingsProjectConfig(),
        'dolorem' => new ShareSettingsProjectConfig(),
        'vero' => new ShareSettingsProjectConfig(),
        'esse' => new ShareSettingsProjectConfig(),
    ];
    $request->nodeGroup->shareSettings->projects = [
        'dignissimos',
        'facere',
        'eius',
        'accusamus',
    ];
    $request->nodeGroup->shareSettings->shareType = ShareSettingsShareTypeEnum::SPECIFIC_PROJECTS;
    $request->nodeGroup->size = 395260;
    $request->nodeGroup->status = NodeGroupStatusEnum::READY;
    $request->nodeGroup->zone = 'deleniti';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'consequatur';
    $request->fields = 'distinctio';
    $request->initialNodeCount = 628926;
    $request->key = 'porro';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->project = 'molestias';
    $request->quotaUser = 'modi';
    $request->requestId = 'saepe';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'sint';
    $request->zone = 'ea';

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
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'itaque';
    $request->filter = 'quod';
    $request->key = 'adipisci';
    $request->maxResults = 123529;
    $request->oauthToken = 'quo';
    $request->orderBy = 'veniam';
    $request->pageToken = 'sit';
    $request->prettyPrint = false;
    $request->project = 'deleniti';
    $request->quotaUser = 'qui';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'possimus';
    $request->userIp = 'dicta';
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
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eum';
    $request->fields = 'culpa';
    $request->filter = 'iure';
    $request->key = 'harum';
    $request->maxResults = 125404;
    $request->nodeGroup = 'facere';
    $request->oauthToken = 'dolores';
    $request->orderBy = 'in';
    $request->pageToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'rerum';
    $request->quotaUser = 'esse';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'similique';
    $request->zone = 'est';

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
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenanceIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenancePolicyEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupMaintenanceWindow;
use \OpenAPI\OpenAPI\Models\Shared\Duration;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettings;
use \OpenAPI\OpenAPI\Models\Shared\ShareSettingsFolderConfig;
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
    $request->nodeGroup1->autoscalingPolicy->maxNodes = 14126;
    $request->nodeGroup1->autoscalingPolicy->minNodes = 809072;
    $request->nodeGroup1->autoscalingPolicy->mode = NodeGroupAutoscalingPolicyModeEnum::ON;
    $request->nodeGroup1->creationTimestamp = 'doloribus';
    $request->nodeGroup1->description = 'officiis';
    $request->nodeGroup1->fingerprint = 'dolore';
    $request->nodeGroup1->id = 'commodi';
    $request->nodeGroup1->kind = 'debitis';
    $request->nodeGroup1->locationHint = 'commodi';
    $request->nodeGroup1->maintenanceInterval = NodeGroupMaintenanceIntervalEnum::AS_NEEDED;
    $request->nodeGroup1->maintenancePolicy = NodeGroupMaintenancePolicyEnum::MAINTENANCE_POLICY_UNSPECIFIED;
    $request->nodeGroup1->maintenanceWindow = new NodeGroupMaintenanceWindow();
    $request->nodeGroup1->maintenanceWindow->duration = 'voluptate';
    $request->nodeGroup1->maintenanceWindow->maintenanceDuration = new Duration();
    $request->nodeGroup1->maintenanceWindow->maintenanceDuration->nanos = 855102;
    $request->nodeGroup1->maintenanceWindow->maintenanceDuration->seconds = 'quidem';
    $request->nodeGroup1->maintenanceWindow->startTime = 'iste';
    $request->nodeGroup1->name = 'Dominic Ernser';
    $request->nodeGroup1->nodeTemplate = 'eaque';
    $request->nodeGroup1->selfLink = 'voluptatibus';
    $request->nodeGroup1->selfLinkWithId = 'voluptatibus';
    $request->nodeGroup1->shareSettings = new ShareSettings();
    $request->nodeGroup1->shareSettings->folderMap = [
        'facilis' => new ShareSettingsFolderConfig(),
        'nisi' => new ShareSettingsFolderConfig(),
        'occaecati' => new ShareSettingsFolderConfig(),
    ];
    $request->nodeGroup1->shareSettings->projectMap = [
        'aperiam' => new ShareSettingsProjectConfig(),
        'repudiandae' => new ShareSettingsProjectConfig(),
    ];
    $request->nodeGroup1->shareSettings->projects = [
        'odio',
        'nihil',
        'ipsa',
        'eveniet',
    ];
    $request->nodeGroup1->shareSettings->shareType = ShareSettingsShareTypeEnum::LOCAL;
    $request->nodeGroup1->size = 418407;
    $request->nodeGroup1->status = NodeGroupStatusEnum::CREATING;
    $request->nodeGroup1->zone = 'occaecati';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatibus';
    $request->fields = 'esse';
    $request->key = 'maxime';
    $request->nodeGroupPathParameter = 'eos';
    $request->oauthToken = 'doloremque';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'itaque';
    $request->requestId = 'suscipit';
    $request->uploadType = 'vitae';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'sit';
    $request->zone = 'quibusdam';

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

## computeNodeGroupsPerformMaintenance

Perform maintenance on a subset of nodes in the node group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsPerformMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NodeGroupsPerformMaintenanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsPerformMaintenanceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsPerformMaintenanceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeNodeGroupsPerformMaintenanceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeNodeGroupsPerformMaintenanceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->nodeGroupsPerformMaintenanceRequest = new NodeGroupsPerformMaintenanceRequest();
    $request->nodeGroupsPerformMaintenanceRequest->nodes = [
        'blanditiis',
    ];
    $request->nodeGroupsPerformMaintenanceRequest->startTime = 'ducimus';
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'consequuntur';
    $request->key = 'perferendis';
    $request->nodeGroup = 'est';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'perspiciatis';
    $request->requestId = 'corrupti';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'sequi';
    $request->userIp = 'esse';
    $request->zone = 'nobis';

    $requestSecurity = new ComputeNodeGroupsPerformMaintenanceSecurity();
    $requestSecurity->option1 = new ComputeNodeGroupsPerformMaintenanceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->nodeGroups->computeNodeGroupsPerformMaintenance($request, $requestSecurity);

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
    ];
    $request->zoneSetPolicyRequest->etag = 'corporis';
    $request->zoneSetPolicyRequest->policy = new Policy();
    $request->zoneSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->zoneSetPolicyRequest->policy->bindings = [
        new Binding(),
    ];
    $request->zoneSetPolicyRequest->policy->etag = 'delectus';
    $request->zoneSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->zoneSetPolicyRequest->policy->version = 419351;
    $request->accessToken = 'nostrum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestiae';
    $request->fields = 'ut';
    $request->key = 'possimus';
    $request->oauthToken = 'harum';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'reiciendis';
    $request->resource = 'natus';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'quam';
    $request->zone = 'placeat';

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
    $request->nodeGroupsSetNodeTemplateRequest->nodeTemplate = 'rem';
    $request->accessToken = 'a';
    $request->alt = AltEnum::JSON;
    $request->callback = 'velit';
    $request->fields = 'est';
    $request->key = 'delectus';
    $request->nodeGroup = 'magni';
    $request->oauthToken = 'rem';
    $request->prettyPrint = false;
    $request->project = 'assumenda';
    $request->quotaUser = 'libero';
    $request->requestId = 'quia';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'sapiente';
    $request->userIp = 'consequuntur';
    $request->zone = 'expedita';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->nodeGroupsSimulateMaintenanceEventRequest = new NodeGroupsSimulateMaintenanceEventRequest();
    $request->nodeGroupsSimulateMaintenanceEventRequest->nodes = [
        'voluptatibus',
        'neque',
    ];
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'amet';
    $request->key = 'minima';
    $request->nodeGroup = 'ea';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'esse';
    $request->quotaUser = 'officiis';
    $request->requestId = 'sunt';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'dolores';
    $request->zone = 'beatae';

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
        'occaecati',
        'voluptatum',
        'beatae',
        'natus',
    ];
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veniam';
    $request->fields = 'quis';
    $request->key = 'id';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'autem';
    $request->quotaUser = 'iste';
    $request->resource = 'mollitia';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'labore';
    $request->zone = 'facilis';

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
