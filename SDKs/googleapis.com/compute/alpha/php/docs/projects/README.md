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
* [computeProjectsSetDefaultServiceAccount](#computeprojectssetdefaultserviceaccount) - Sets the default service account of the project. The default service account is used when a VM instance is created with the service account email address set to "default".
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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sequi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reiciendis';
    $request->fields = 'dolorum';
    $request->key = 'aliquam';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'adipisci';
    $request->requestId = 'autem';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'delectus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->projectsDisableXpnResourceRequest = new ProjectsDisableXpnResourceRequest();
    $request->projectsDisableXpnResourceRequest->xpnResource = new XpnResourceId();
    $request->projectsDisableXpnResourceRequest->xpnResource->id = '1011a091-b3ec-48b5-b862-de1a9d14fe72';
    $request->projectsDisableXpnResourceRequest->xpnResource->type = XpnResourceIdTypeEnum::XPN_RESOURCE_TYPE_UNSPECIFIED;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'illo';
    $request->fields = 'asperiores';
    $request->key = 'iste';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'velit';
    $request->quotaUser = 'ipsa';
    $request->requestId = 'consectetur';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'asperiores';
    $request->userIp = 'quo';

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
    $request->accessToken = 'non';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'natus';
    $request->key = 'molestiae';
    $request->oauthToken = 'reiciendis';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'hic';
    $request->requestId = 'error';
    $request->uploadType = 'ea';
    $request->uploadProtocol = 'repellendus';
    $request->userIp = 'vitae';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->projectsEnableXpnResourceRequest = new ProjectsEnableXpnResourceRequest();
    $request->projectsEnableXpnResourceRequest->xpnResource = new XpnResourceId();
    $request->projectsEnableXpnResourceRequest->xpnResource->id = '32090fc1-57ac-49fe-9961-ce9be41c869d';
    $request->projectsEnableXpnResourceRequest->xpnResource->type = XpnResourceIdTypeEnum::XPN_RESOURCE_TYPE_UNSPECIFIED;
    $request->accessToken = 'ducimus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'omnis';
    $request->fields = 'molestiae';
    $request->key = 'illo';
    $request->oauthToken = 'unde';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'consequatur';
    $request->requestId = 'dignissimos';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'aut';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'praesentium';
    $request->fields = 'delectus';
    $request->key = 'a';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->project = 'consequuntur';
    $request->quotaUser = 'iste';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'iusto';
    $request->userIp = 'nulla';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'laudantium';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facere';
    $request->fields = 'laudantium';
    $request->key = 'praesentium';
    $request->oauthToken = 'sed';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'deleniti';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'voluptas';
    $request->userIp = 'eaque';

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
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'perferendis';
    $request->filter = 'eligendi';
    $request->key = 'facere';
    $request->maxResults = 565831;
    $request->oauthToken = 'quisquam';
    $request->orderBy = 'veniam';
    $request->pageToken = 'officia';
    $request->prettyPrint = false;
    $request->project = 'sapiente';
    $request->quotaUser = 'possimus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'doloremque';
    $request->userIp = 'ut';

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
    $request->projectsListXpnHostsRequest->organization = 'nesciunt';
    $request->projectsListXpnHostsRequest->returnPartialPage = false;
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aspernatur';
    $request->fields = 'veniam';
    $request->filter = 'quasi';
    $request->key = 'consequuntur';
    $request->maxResults = 689127;
    $request->oauthToken = 'earum';
    $request->orderBy = 'mollitia';
    $request->pageToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'quasi';
    $request->quotaUser = 'vero';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'voluptate';
    $request->userIp = 'itaque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->diskMoveRequest = new DiskMoveRequest();
    $request->diskMoveRequest->destinationZone = 'minus';
    $request->diskMoveRequest->targetDisk = 'corporis';
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quod';
    $request->fields = 'saepe';
    $request->key = 'animi';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'eveniet';
    $request->quotaUser = 'molestiae';
    $request->requestId = 'laborum';
    $request->uploadType = 'voluptatum';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'adipisci';

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
    $request->instanceMoveRequest->destinationZone = 'et';
    $request->instanceMoveRequest->targetInstance = 'commodi';
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'porro';
    $request->fields = 'at';
    $request->key = 'fuga';
    $request->oauthToken = 'vel';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'iusto';
    $request->requestId = 'voluptate';
    $request->uploadType = 'cumque';
    $request->uploadProtocol = 'sunt';
    $request->userIp = 'fugiat';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->metadata = new Metadata();
    $request->metadata->fingerprint = 'laboriosam';
    $request->metadata->items = [
        new MetadataItems(),
    ];
    $request->metadata->kind = 'nisi';
    $request->accessToken = 'eum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nesciunt';
    $request->fields = 'esse';
    $request->key = 'quibusdam';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'magni';
    $request->requestId = 'molestiae';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'aliquid';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->projectsSetDefaultNetworkTierRequest = new ProjectsSetDefaultNetworkTierRequest();
    $request->projectsSetDefaultNetworkTierRequest->networkTier = ProjectsSetDefaultNetworkTierRequestNetworkTierEnum::STANDARD;
    $request->accessToken = 'molestias';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'labore';
    $request->key = 'perspiciatis';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'consectetur';
    $request->quotaUser = 'provident';
    $request->requestId = 'totam';
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'exercitationem';
    $request->userIp = 'quasi';

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

## computeProjectsSetDefaultServiceAccount

Sets the default service account of the project. The default service account is used when a VM instance is created with the service account email address set to "default".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetDefaultServiceAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectsSetDefaultServiceAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetDefaultServiceAccountSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetDefaultServiceAccountSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeProjectsSetDefaultServiceAccountSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeProjectsSetDefaultServiceAccountRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->projectsSetDefaultServiceAccountRequest = new ProjectsSetDefaultServiceAccountRequest();
    $request->projectsSetDefaultServiceAccountRequest->email = 'Pauline_King@hotmail.com';
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'alias';
    $request->fields = 'eligendi';
    $request->key = 'accusantium';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'soluta';
    $request->requestId = 'minima';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'rerum';
    $request->userIp = 'molestiae';

    $requestSecurity = new ComputeProjectsSetDefaultServiceAccountSecurity();
    $requestSecurity->option1 = new ComputeProjectsSetDefaultServiceAccountSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->computeProjectsSetDefaultServiceAccount($request, $requestSecurity);

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->usageExportLocation = new UsageExportLocation();
    $request->usageExportLocation->bucketName = 'quos';
    $request->usageExportLocation->reportNamePrefix = 'minus';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'exercitationem';
    $request->key = 'voluptas';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'alias';
    $request->requestId = 'consequatur';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'ea';

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
