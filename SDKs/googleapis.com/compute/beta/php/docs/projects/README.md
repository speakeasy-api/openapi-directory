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
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sit';
    $request->fields = 'magni';
    $request->key = 'aspernatur';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'id';
    $request->requestId = 'exercitationem';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'nostrum';
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
    $request->projectsDisableXpnResourceRequest->xpnResource->id = '8f652ebb-9d38-4383-8790-243b293dab30';
    $request->projectsDisableXpnResourceRequest->xpnResource->type = XpnResourceIdTypeEnum::XPN_RESOURCE_TYPE_UNSPECIFIED;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iure';
    $request->fields = 'doloribus';
    $request->key = 'corporis';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'quibusdam';
    $request->requestId = 'animi';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'non';
    $request->userIp = 'porro';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quidem';
    $request->fields = 'soluta';
    $request->key = 'exercitationem';
    $request->oauthToken = 'exercitationem';
    $request->prettyPrint = false;
    $request->project = 'similique';
    $request->quotaUser = 'magni';
    $request->requestId = 'unde';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'cum';
    $request->userIp = 'aut';

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
    $request->projectsEnableXpnResourceRequest->xpnResource->id = 'c3bb7446-64eb-41d0-b388-b0d1bb17afee';
    $request->projectsEnableXpnResourceRequest->xpnResource->type = XpnResourceIdTypeEnum::PROJECT;
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptas';
    $request->fields = 'delectus';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'labore';
    $request->requestId = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'nihil';

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
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'reiciendis';
    $request->fields = 'consectetur';
    $request->key = 'provident';
    $request->oauthToken = 'possimus';
    $request->prettyPrint = false;
    $request->project = 'illo';
    $request->quotaUser = 'autem';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'rerum';
    $request->userIp = 'asperiores';

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
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'assumenda';
    $request->fields = 'ab';
    $request->key = 'eum';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'sequi';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'debitis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'quidem';
    $request->filter = 'excepturi';
    $request->key = 'ipsum';
    $request->maxResults = 882646;
    $request->oauthToken = 'consectetur';
    $request->orderBy = 'tempora';
    $request->pageToken = 'sequi';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'aliquid';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'sapiente';
    $request->userIp = 'corporis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->projectsListXpnHostsRequest = new ProjectsListXpnHostsRequest();
    $request->projectsListXpnHostsRequest->organization = 'soluta';
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ab';
    $request->fields = 'consectetur';
    $request->filter = 'ullam';
    $request->key = 'ullam';
    $request->maxResults = 232196;
    $request->oauthToken = 'porro';
    $request->orderBy = 'optio';
    $request->pageToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'quisquam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'incidunt';

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
    $request->diskMoveRequest->destinationZone = 'labore';
    $request->diskMoveRequest->targetDisk = 'culpa';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'minus';
    $request->fields = 'sint';
    $request->key = 'occaecati';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'maxime';
    $request->requestId = 'ad';
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'provident';
    $request->userIp = 'exercitationem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->instanceMoveRequest = new InstanceMoveRequest();
    $request->instanceMoveRequest->destinationZone = 'atque';
    $request->instanceMoveRequest->targetInstance = 'suscipit';
    $request->accessToken = 'labore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'optio';
    $request->fields = 'officiis';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'deleniti';
    $request->requestId = 'a';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'eos';

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
    $request->metadata->fingerprint = 'nesciunt';
    $request->metadata->items = [
        new MetadataItems(),
        new MetadataItems(),
        new MetadataItems(),
    ];
    $request->metadata->kind = 'error';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'saepe';
    $request->fields = 'voluptatem';
    $request->key = 'sint';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'distinctio';
    $request->requestId = 'harum';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'minus';

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
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'odio';
    $request->key = 'ab';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'excepturi';
    $request->requestId = 'enim';
    $request->uploadType = 'culpa';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'sunt';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->usageExportLocation = new UsageExportLocation();
    $request->usageExportLocation->bucketName = 'molestias';
    $request->usageExportLocation->reportNamePrefix = 'impedit';
    $request->accessToken = 'quasi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'corrupti';
    $request->fields = 'in';
    $request->key = 'quia';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'dicta';
    $request->quotaUser = 'eveniet';
    $request->requestId = 'vitae';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'eveniet';
    $request->userIp = 'officia';

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
