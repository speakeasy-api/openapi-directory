# regionInstanceGroups

### Available Operations

* [computeRegionInstanceGroupsGet](#computeregioninstancegroupsget) - Returns the specified instance group resource.
* [computeRegionInstanceGroupsList](#computeregioninstancegroupslist) - Retrieves the list of instance group resources contained within the specified region.
* [computeRegionInstanceGroupsListInstances](#computeregioninstancegroupslistinstances) - Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.
* [computeRegionInstanceGroupsSetNamedPorts](#computeregioninstancegroupssetnamedports) - Sets the named ports for the specified regional instance group.

## computeRegionInstanceGroupsGet

Returns the specified instance group resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'magni';
    $request->fields = 'quo';
    $request->instanceGroup = 'at';
    $request->key = 'nulla';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'doloribus';
    $request->region = 'porro';
    $request->uploadType = 'eius';
    $request->uploadProtocol = 'nesciunt';
    $request->userIp = 'cum';

    $requestSecurity = new ComputeRegionInstanceGroupsGetSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroups->computeRegionInstanceGroupsGet($request, $requestSecurity);

    if ($response->instanceGroup !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupsList

Retrieves the list of instance group resources contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'fuga';
    $request->filter = 'laudantium';
    $request->key = 'blanditiis';
    $request->maxResults = 967524;
    $request->oauthToken = 'est';
    $request->orderBy = 'dignissimos';
    $request->pageToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'quo';
    $request->quotaUser = 'labore';
    $request->region = 'consectetur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'inventore';

    $requestSecurity = new ComputeRegionInstanceGroupsListSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroups->computeRegionInstanceGroupsList($request, $requestSecurity);

    if ($response->regionInstanceGroupList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupsListInstances

Lists the instances in the specified instance group and displays information about the named ports. Depending on the specified options, this method can list all instances or only the instances that are running. The orderBy query parameter is not supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupsListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupsListInstancesRequestInstanceStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsListInstancesSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupsListInstancesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupsListInstancesRequest = new RegionInstanceGroupsListInstancesRequest();
    $request->regionInstanceGroupsListInstancesRequest->instanceState = RegionInstanceGroupsListInstancesRequestInstanceStateEnum::ALL;
    $request->regionInstanceGroupsListInstancesRequest->portName = 'at';
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::JSON;
    $request->callback = 'necessitatibus';
    $request->fields = 'harum';
    $request->filter = 'deleniti';
    $request->instanceGroup = 'maiores';
    $request->key = 'odio';
    $request->maxResults = 946866;
    $request->oauthToken = 'quam';
    $request->orderBy = 'nemo';
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'magnam';
    $request->quotaUser = 'hic';
    $request->region = 'aspernatur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'quasi';

    $requestSecurity = new ComputeRegionInstanceGroupsListInstancesSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupsListInstancesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroups->computeRegionInstanceGroupsListInstances($request, $requestSecurity);

    if ($response->regionInstanceGroupsListInstances !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeRegionInstanceGroupsSetNamedPorts

Sets the named ports for the specified regional instance group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsSetNamedPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionInstanceGroupsSetNamedPortsRequest;
use \OpenAPI\OpenAPI\Models\Shared\NamedPort;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsSetNamedPortsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsSetNamedPortsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeRegionInstanceGroupsSetNamedPortsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeRegionInstanceGroupsSetNamedPortsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionInstanceGroupsSetNamedPortsRequest = new RegionInstanceGroupsSetNamedPortsRequest();
    $request->regionInstanceGroupsSetNamedPortsRequest->fingerprint = 'eaque';
    $request->regionInstanceGroupsSetNamedPortsRequest->namedPorts = [
        new NamedPort(),
        new NamedPort(),
        new NamedPort(),
    ];
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'commodi';
    $request->fields = 'maxime';
    $request->instanceGroup = 'non';
    $request->key = 'mollitia';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'temporibus';
    $request->region = 'reprehenderit';
    $request->requestId = 'soluta';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'odio';
    $request->userIp = 'reiciendis';

    $requestSecurity = new ComputeRegionInstanceGroupsSetNamedPortsSecurity();
    $requestSecurity->option1 = new ComputeRegionInstanceGroupsSetNamedPortsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->regionInstanceGroups->computeRegionInstanceGroupsSetNamedPorts($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
