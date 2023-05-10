# projects

### Available Operations

* [computeProjectsDisableXpnHost](#computeprojectsdisablexpnhost) - Disable this project as a shared VPC host project.
* [computeProjectsDisableXpnResource](#computeprojectsdisablexpnresource) - Disable a service resource (also known as service project) associated with this host project.
* [computeProjectsEnableXpnHost](#computeprojectsenablexpnhost) - Enable this project as a shared VPC host project.
* [computeProjectsEnableXpnResource](#computeprojectsenablexpnresource) - Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.
* [computeProjectsGet](#computeprojectsget) - Returns the specified Project resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.
* [computeProjectsGetXpnHost](#computeprojectsgetxpnhost) - Gets the shared VPC host project that this project links to. May be empty if no link exists.
* [computeProjectsGetXpnResources](#computeprojectsgetxpnresources) - Gets service resources (a.k.a service project) associated with this host project.
* [computeProjectsListXpnHosts](#computeprojectslistxpnhosts) - Lists all shared VPC host projects visible to the user in an organization.
* [computeProjectsMoveDisk](#computeprojectsmovedisk) - Moves a persistent disk from one zone to another.
* [computeProjectsMoveInstance](#computeprojectsmoveinstance) - Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this method might cause unexpected behavior. For more information, see the [known issue](/compute/docs/troubleshooting/known-issues#moving_vms_or_disks_using_the_moveinstance_api_or_the_causes_unexpected_behavior).
* [computeProjectsSetCommonInstanceMetadata](#computeprojectssetcommoninstancemetadata) - Sets metadata common to all instances within the specified project using the data included in the request.
* [computeProjectsSetDefaultNetworkTier](#computeprojectssetdefaultnetworktier) - Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.
* [computeProjectsSetUsageExportBucket](#computeprojectssetusageexportbucket) - Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.

## computeProjectsDisableXpnHost

Disable this project as a shared VPC host project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsDisableXpnHostRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsDisableXpnHostSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsDisableXpnHostSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsDisableXpnHostSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsDisableXpnHostRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ex';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'mollitia';
    $request->key = 'architecto';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'aut';
    $request->quotaUser = 'commodi';
    $request->requestId = 'delectus';
    $request->uploadType = 'officiis';
    $request->uploadProtocol = 'omnis';
    $request->userIp = 'ea';

    $requestSecurity = new ComputeProjectsDisableXpnHostSecurity();
    $requestSecurity->option1 = new ComputeProjectsDisableXpnHostSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsDisableXpnHost($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsDisableXpnResource

Disable a service resource (also known as service project) associated with this host project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsDisableXpnResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsDisableXpnResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XpnResourceId;
use \OpenAPI\OpenAPI\Models\Shared\XpnResourceIdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsDisableXpnResourceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsDisableXpnResourceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsDisableXpnResourceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsDisableXpnResourceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->projectsDisableXpnResourceRequest = new ProjectsDisableXpnResourceRequest();
    $request->projectsDisableXpnResourceRequest->xpnResource = new XpnResourceId();
    $request->projectsDisableXpnResourceRequest->xpnResource->id = 'b711d08c-f88e-4c9f-bb99-a550a656ed33';
    $request->projectsDisableXpnResourceRequest->xpnResource->type = XpnResourceIdTypeEnum::PROJECT;
    $request->accessToken = 'soluta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'quo';
    $request->key = 'officiis';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'fuga';
    $request->requestId = 'autem';
    $request->uploadType = 'quis';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'consectetur';

    $requestSecurity = new ComputeProjectsDisableXpnResourceSecurity();
    $requestSecurity->option1 = new ComputeProjectsDisableXpnResourceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsDisableXpnResource($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsEnableXpnHost

Enable this project as a shared VPC host project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsEnableXpnHostRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsEnableXpnHostSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsEnableXpnHostSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsEnableXpnHostSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsEnableXpnHostRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'ea';
    $request->key = 'debitis';
    $request->oauthToken = 'soluta';
    $request->prettyPrint = false;
    $request->project = 'odio';
    $request->quotaUser = 'eveniet';
    $request->requestId = 'beatae';
    $request->uploadType = 'dolore';
    $request->uploadProtocol = 'quisquam';
    $request->userIp = 'mollitia';

    $requestSecurity = new ComputeProjectsEnableXpnHostSecurity();
    $requestSecurity->option1 = new ComputeProjectsEnableXpnHostSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsEnableXpnHost($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsEnableXpnResource

Enable service resource (a.k.a service project) for a host project, so that subnets in the host project can be used by instances in the service project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsEnableXpnResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsEnableXpnResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XpnResourceId;
use \OpenAPI\OpenAPI\Models\Shared\XpnResourceIdTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsEnableXpnResourceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsEnableXpnResourceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsEnableXpnResourceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsEnableXpnResourceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->projectsEnableXpnResourceRequest = new ProjectsEnableXpnResourceRequest();
    $request->projectsEnableXpnResourceRequest->xpnResource = new XpnResourceId();
    $request->projectsEnableXpnResourceRequest->xpnResource->id = '64089150-0970-419a-88f8-8ece7bf904e0';
    $request->projectsEnableXpnResourceRequest->xpnResource->type = XpnResourceIdTypeEnum::PROJECT;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ad';
    $request->fields = 'temporibus';
    $request->key = 'sequi';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'alias';
    $request->requestId = 'deleniti';
    $request->uploadType = 'quasi';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'aspernatur';

    $requestSecurity = new ComputeProjectsEnableXpnResourceSecurity();
    $requestSecurity->option1 = new ComputeProjectsEnableXpnResourceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsEnableXpnResource($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsGet

Returns the specified Project resource. To decrease latency for this method, you can optionally omit any unneeded information from the response by using a field mask. This practice is especially recommended for unused quota information (the `quotas` field). To exclude one or more fields, set your request's `fields` query parameter to only include the fields you need. For example, to only include the `id` and `selfLink` fields, add the query parameter `?fields=id,selfLink` to your request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'suscipit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'recusandae';
    $request->fields = 'harum';
    $request->key = 'nisi';
    $request->oauthToken = 'blanditiis';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'doloribus';
    $request->uploadProtocol = 'vel';
    $request->userIp = 'enim';

    $requestSecurity = new ComputeProjectsGetSecurity();
    $requestSecurity->option1 = new ComputeProjectsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsGet($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsGetXpnHost

Gets the shared VPC host project that this project links to. May be empty if no link exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetXpnHostRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetXpnHostSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetXpnHostSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetXpnHostSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsGetXpnHostRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'at';
    $request->fields = 'alias';
    $request->key = 'consectetur';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'numquam';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'aperiam';
    $request->userIp = 'hic';

    $requestSecurity = new ComputeProjectsGetXpnHostSecurity();
    $requestSecurity->option1 = new ComputeProjectsGetXpnHostSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsGetXpnHost($request, $requestSecurity);

    if ($response->project !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsGetXpnResources

Gets service resources (a.k.a service project) associated with this host project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetXpnResourcesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetXpnResourcesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetXpnResourcesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsGetXpnResourcesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsGetXpnResourcesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'voluptatem';
    $request->filter = 'tenetur';
    $request->key = 'aut';
    $request->maxResults = 401150;
    $request->oauthToken = 'cupiditate';
    $request->orderBy = 'fugiat';
    $request->pageToken = 'atque';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'aut';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'architecto';
    $request->userIp = 'atque';

    $requestSecurity = new ComputeProjectsGetXpnResourcesSecurity();
    $requestSecurity->option1 = new ComputeProjectsGetXpnResourcesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsGetXpnResources($request, $requestSecurity);

    if ($response->projectsGetXpnResources !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsListXpnHosts

Lists all shared VPC host projects visible to the user in an organization.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsListXpnHostsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsListXpnHostsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsListXpnHostsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsListXpnHostsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsListXpnHostsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsListXpnHostsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->projectsListXpnHostsRequest = new ProjectsListXpnHostsRequest();
    $request->projectsListXpnHostsRequest->organization = 'unde';
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'ad';
    $request->filter = 'quia';
    $request->key = 'aspernatur';
    $request->maxResults = 611423;
    $request->oauthToken = 'molestiae';
    $request->orderBy = 'minima';
    $request->pageToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'sit';
    $request->quotaUser = 'quibusdam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'voluptatem';

    $requestSecurity = new ComputeProjectsListXpnHostsSecurity();
    $requestSecurity->option1 = new ComputeProjectsListXpnHostsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsListXpnHosts($request, $requestSecurity);

    if ($response->xpnHostList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsMoveDisk

Moves a persistent disk from one zone to another.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsMoveDiskRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DiskMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsMoveDiskSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsMoveDiskSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsMoveDiskSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsMoveDiskRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->diskMoveRequest = new DiskMoveRequest();
    $request->diskMoveRequest->destinationZone = 'vitae';
    $request->diskMoveRequest->targetDisk = 'explicabo';
    $request->accessToken = 'quia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'nobis';
    $request->key = 'optio';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'porro';
    $request->requestId = 'sed';
    $request->uploadType = 'laborum';
    $request->uploadProtocol = 'in';
    $request->userIp = 'eaque';

    $requestSecurity = new ComputeProjectsMoveDiskSecurity();
    $requestSecurity->option1 = new ComputeProjectsMoveDiskSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsMoveDisk($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsMoveInstance

Moves an instance and its attached persistent disks from one zone to another. *Note*: Moving VMs or disks by using this method might cause unexpected behavior. For more information, see the [known issue](/compute/docs/troubleshooting/known-issues#moving_vms_or_disks_using_the_moveinstance_api_or_the_causes_unexpected_behavior).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsMoveInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InstanceMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsMoveInstanceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsMoveInstanceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsMoveInstanceSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsMoveInstanceRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->instanceMoveRequest = new InstanceMoveRequest();
    $request->instanceMoveRequest->destinationZone = 'distinctio';
    $request->instanceMoveRequest->targetInstance = 'soluta';
    $request->accessToken = 'sint';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'repudiandae';
    $request->fields = 'accusamus';
    $request->key = 'quasi';
    $request->oauthToken = 'accusantium';
    $request->prettyPrint = false;
    $request->project = 'dolores';
    $request->quotaUser = 'fugiat';
    $request->requestId = 'id';
    $request->uploadType = 'sed';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'recusandae';

    $requestSecurity = new ComputeProjectsMoveInstanceSecurity();
    $requestSecurity->option1 = new ComputeProjectsMoveInstanceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsMoveInstance($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsSetCommonInstanceMetadata

Sets metadata common to all instances within the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetCommonInstanceMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Metadata;
use \OpenAPI\OpenAPI\Models\Shared\MetadataItems;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetCommonInstanceMetadataSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetCommonInstanceMetadataSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetCommonInstanceMetadataSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsSetCommonInstanceMetadataRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->metadata = new Metadata();
    $request->metadata->fingerprint = 'minima';
    $request->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->metadata->kind = 'praesentium';
    $request->accessToken = 'officiis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quasi';
    $request->fields = 'libero';
    $request->key = 'tenetur';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'voluptates';
    $request->requestId = 'similique';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'ut';

    $requestSecurity = new ComputeProjectsSetCommonInstanceMetadataSecurity();
    $requestSecurity->option1 = new ComputeProjectsSetCommonInstanceMetadataSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsSetCommonInstanceMetadata($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsSetDefaultNetworkTier

Sets the default network tier of the project. The default network tier is used when an address/forwardingRule/instance is created without specifying the network tier field.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetDefaultNetworkTierRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsSetDefaultNetworkTierRequest;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsSetDefaultNetworkTierRequestNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetDefaultNetworkTierSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetDefaultNetworkTierSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetDefaultNetworkTierSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsSetDefaultNetworkTierRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->projectsSetDefaultNetworkTierRequest = new ProjectsSetDefaultNetworkTierRequest();
    $request->projectsSetDefaultNetworkTierRequest->networkTier = ProjectsSetDefaultNetworkTierRequestNetworkTierEnum::PREMIUM;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'quod';
    $request->key = 'sunt';
    $request->oauthToken = 'iure';
    $request->prettyPrint = false;
    $request->project = 'voluptatem';
    $request->quotaUser = 'incidunt';
    $request->requestId = 'soluta';
    $request->uploadType = 'a';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'maxime';

    $requestSecurity = new ComputeProjectsSetDefaultNetworkTierSecurity();
    $requestSecurity->option1 = new ComputeProjectsSetDefaultNetworkTierSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsSetDefaultNetworkTier($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeProjectsSetUsageExportBucket

Enables the usage export feature and sets the usage export bucket where reports are stored. If you provide an empty request body using this method, the usage export feature will be disabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetUsageExportBucketRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UsageExportLocation;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetUsageExportBucketSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetUsageExportBucketSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetUsageExportBucketSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetUsageExportBucketSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetUsageExportBucketSecurityOption4;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetUsageExportBucketSecurityOption5;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsSetUsageExportBucketRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->usageExportLocation = new UsageExportLocation();
    $request->usageExportLocation->bucketName = 'cupiditate';
    $request->usageExportLocation->reportNamePrefix = 'asperiores';
    $request->accessToken = 'maxime';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->fields = 'deserunt';
    $request->key = 'laborum';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'ad';
    $request->quotaUser = 'voluptates';
    $request->requestId = 'harum';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'delectus';
    $request->userIp = 'sit';

    $requestSecurity = new ComputeProjectsSetUsageExportBucketSecurity();
    $requestSecurity->option1 = new ComputeProjectsSetUsageExportBucketSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsSetUsageExportBucket($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
