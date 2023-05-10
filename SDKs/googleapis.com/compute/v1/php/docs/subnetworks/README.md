# subnetworks

### Available Operations

* [computeSubnetworksAggregatedList](#computesubnetworksaggregatedlist) - Retrieves an aggregated list of subnetworks.
* [computeSubnetworksDelete](#computesubnetworksdelete) - Deletes the specified subnetwork.
* [computeSubnetworksExpandIpCidrRange](#computesubnetworksexpandipcidrrange) - Expands the IP CIDR range of the subnetwork to a specified value.
* [computeSubnetworksGet](#computesubnetworksget) - Returns the specified subnetwork.
* [computeSubnetworksGetIamPolicy](#computesubnetworksgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeSubnetworksInsert](#computesubnetworksinsert) - Creates a subnetwork in the specified project using the data included in the request.
* [computeSubnetworksList](#computesubnetworkslist) - Retrieves a list of subnetworks available to the specified project.
* [computeSubnetworksListUsable](#computesubnetworkslistusable) - Retrieves an aggregated list of all usable subnetworks in the project.
* [computeSubnetworksPatch](#computesubnetworkspatch) - Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.
* [computeSubnetworksSetIamPolicy](#computesubnetworkssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeSubnetworksSetPrivateIpGoogleAccess](#computesubnetworkssetprivateipgoogleaccess) - Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.
* [computeSubnetworksTestIamPermissions](#computesubnetworkstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeSubnetworksAggregatedList

Retrieves an aggregated list of subnetworks.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'omnis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'incidunt';
    $request->fields = 'vitae';
    $request->filter = 'incidunt';
    $request->includeAllScopes = false;
    $request->key = 'nostrum';
    $request->maxResults = 127533;
    $request->oauthToken = 'culpa';
    $request->orderBy = 'sint';
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'ipsa';
    $request->quotaUser = 'quasi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'sapiente';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'quaerat';

    $requestSecurity = new ComputeSubnetworksAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksAggregatedList($request, $requestSecurity);

    if ($response->subnetworkAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksDelete

Deletes the specified subnetwork.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vel';
    $request->fields = 'inventore';
    $request->key = 'quidem';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'ipsum';
    $request->region = 'nesciunt';
    $request->requestId = 'distinctio';
    $request->subnetwork = 'dolorum';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'nulla';
    $request->userIp = 'debitis';

    $requestSecurity = new ComputeSubnetworksDeleteSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksExpandIpCidrRange

Expands the IP CIDR range of the subnetwork to a specified value.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksExpandIpCidrRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworksExpandIpCidrRangeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksExpandIpCidrRangeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksExpandIpCidrRangeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksExpandIpCidrRangeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksExpandIpCidrRangeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subnetworksExpandIpCidrRangeRequest = new SubnetworksExpandIpCidrRangeRequest();
    $request->subnetworksExpandIpCidrRangeRequest->ipCidrRange = 'neque';
    $request->accessToken = 'eos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'ullam';
    $request->key = 'eos';
    $request->oauthToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'praesentium';
    $request->region = 'suscipit';
    $request->requestId = 'explicabo';
    $request->subnetwork = 'quos';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'dolorem';
    $request->userIp = 'hic';

    $requestSecurity = new ComputeSubnetworksExpandIpCidrRangeSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksExpandIpCidrRangeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksExpandIpCidrRange($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksGet

Returns the specified subnetwork.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'enim';
    $request->fields = 'provident';
    $request->key = 'maxime';
    $request->oauthToken = 'officiis';
    $request->prettyPrint = false;
    $request->project = 'non';
    $request->quotaUser = 'magni';
    $request->region = 'consequuntur';
    $request->subnetwork = 'quia';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'doloribus';

    $requestSecurity = new ComputeSubnetworksGetSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksGet($request, $requestSecurity);

    if ($response->subnetwork !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'dolore';
    $request->key = 'eligendi';
    $request->oauthToken = 'numquam';
    $request->optionsRequestedPolicyVersion = 62739;
    $request->prettyPrint = false;
    $request->project = 'pariatur';
    $request->quotaUser = 'magni';
    $request->region = 'maiores';
    $request->resource = 'nam';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'ad';
    $request->userIp = 'quod';

    $requestSecurity = new ComputeSubnetworksGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeSubnetworksGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksInsert

Creates a subnetwork in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subnetwork;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkIpv6AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfigAggregationIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfigMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkSecondaryRange;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subnetwork = new Subnetwork();
    $request->subnetwork->creationTimestamp = 'culpa';
    $request->subnetwork->description = 'sit';
    $request->subnetwork->enableFlowLogs = false;
    $request->subnetwork->externalIpv6Prefix = 'eum';
    $request->subnetwork->fingerprint = 'provident';
    $request->subnetwork->gatewayAddress = 'tempore';
    $request->subnetwork->id = 'corrupti';
    $request->subnetwork->internalIpv6Prefix = 'at';
    $request->subnetwork->ipCidrRange = 'fugit';
    $request->subnetwork->ipv6AccessType = SubnetworkIpv6AccessTypeEnum::INTERNAL;
    $request->subnetwork->ipv6CidrRange = 'dicta';
    $request->subnetwork->kind = 'libero';
    $request->subnetwork->logConfig = new SubnetworkLogConfig();
    $request->subnetwork->logConfig->aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum::INTERVAL5_SEC;
    $request->subnetwork->logConfig->enable = false;
    $request->subnetwork->logConfig->filterExpr = 'libero';
    $request->subnetwork->logConfig->flowSampling = 5050.17;
    $request->subnetwork->logConfig->metadata = SubnetworkLogConfigMetadataEnum::CUSTOM_METADATA;
    $request->subnetwork->logConfig->metadataFields = [
        'est',
    ];
    $request->subnetwork->name = 'Jan Pacocha';
    $request->subnetwork->network = 'aliquam';
    $request->subnetwork->privateIpGoogleAccess = false;
    $request->subnetwork->privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->subnetwork->purpose = SubnetworkPurposeEnum::PRIVATE;
    $request->subnetwork->region = 'esse';
    $request->subnetwork->role = SubnetworkRoleEnum::BACKUP;
    $request->subnetwork->secondaryIpRanges = [
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
    ];
    $request->subnetwork->selfLink = 'quibusdam';
    $request->subnetwork->stackType = SubnetworkStackTypeEnum::IPV4_ONLY;
    $request->subnetwork->state = SubnetworkStateEnum::DRAINING;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'ducimus';
    $request->key = 'libero';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'eaque';
    $request->quotaUser = 'optio';
    $request->region = 'repellat';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'a';
    $request->userIp = 'quae';

    $requestSecurity = new ComputeSubnetworksInsertSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksList

Retrieves a list of subnetworks available to the specified project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'fugit';
    $request->filter = 'esse';
    $request->key = 'illo';
    $request->maxResults = 19789;
    $request->oauthToken = 'reprehenderit';
    $request->orderBy = 'vel';
    $request->pageToken = 'culpa';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'dolore';
    $request->region = 'distinctio';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'incidunt';
    $request->uploadProtocol = 'consequatur';
    $request->userIp = 'porro';

    $requestSecurity = new ComputeSubnetworksListSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksList($request, $requestSecurity);

    if ($response->subnetworkList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksListUsable

Retrieves an aggregated list of all usable subnetworks in the project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListUsableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListUsableSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListUsableSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListUsableSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksListUsableSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksListUsableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'maiores';
    $request->alt = AltEnum::JSON;
    $request->callback = 'praesentium';
    $request->fields = 'distinctio';
    $request->filter = 'sapiente';
    $request->key = 'a';
    $request->maxResults = 64581;
    $request->oauthToken = 'doloremque';
    $request->orderBy = 'molestias';
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'laudantium';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'maiores';
    $request->userIp = 'blanditiis';

    $requestSecurity = new ComputeSubnetworksListUsableSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksListUsableSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksListUsable($request, $requestSecurity);

    if ($response->usableSubnetworksAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksPatch

Patches the specified subnetwork with the data included in the request. Only certain fields can be updated with a patch request as indicated in the field descriptions. You must specify the current fingerprint of the subnetwork resource being patched.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Subnetwork;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkIpv6AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfigAggregationIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfigMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkPrivateIpv6GoogleAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkRoleEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkSecondaryRange;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subnetwork1 = new Subnetwork();
    $request->subnetwork1->creationTimestamp = 'occaecati';
    $request->subnetwork1->description = 'natus';
    $request->subnetwork1->enableFlowLogs = false;
    $request->subnetwork1->externalIpv6Prefix = 'voluptas';
    $request->subnetwork1->fingerprint = 'optio';
    $request->subnetwork1->gatewayAddress = 'totam';
    $request->subnetwork1->id = 'recusandae';
    $request->subnetwork1->internalIpv6Prefix = 'odit';
    $request->subnetwork1->ipCidrRange = 'eos';
    $request->subnetwork1->ipv6AccessType = SubnetworkIpv6AccessTypeEnum::INTERNAL;
    $request->subnetwork1->ipv6CidrRange = 'eveniet';
    $request->subnetwork1->kind = 'aut';
    $request->subnetwork1->logConfig = new SubnetworkLogConfig();
    $request->subnetwork1->logConfig->aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum::INTERVAL30_SEC;
    $request->subnetwork1->logConfig->enable = false;
    $request->subnetwork1->logConfig->filterExpr = 'ipsum';
    $request->subnetwork1->logConfig->flowSampling = 8056.07;
    $request->subnetwork1->logConfig->metadata = SubnetworkLogConfigMetadataEnum::INCLUDE_ALL_METADATA;
    $request->subnetwork1->logConfig->metadataFields = [
        'voluptate',
        'blanditiis',
    ];
    $request->subnetwork1->name = 'Mike Rodriguez';
    $request->subnetwork1->network = 'neque';
    $request->subnetwork1->privateIpGoogleAccess = false;
    $request->subnetwork1->privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum::ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
    $request->subnetwork1->purpose = SubnetworkPurposeEnum::PRIVATE_RFC1918;
    $request->subnetwork1->region = 'autem';
    $request->subnetwork1->role = SubnetworkRoleEnum::ACTIVE;
    $request->subnetwork1->secondaryIpRanges = [
        new SubnetworkSecondaryRange(),
    ];
    $request->subnetwork1->selfLink = 'eaque';
    $request->subnetwork1->stackType = SubnetworkStackTypeEnum::IPV4_ONLY;
    $request->subnetwork1->state = SubnetworkStateEnum::DRAINING;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->drainTimeoutSeconds = 528933;
    $request->fields = 'consectetur';
    $request->key = 'aliquam';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'in';
    $request->quotaUser = 'ipsum';
    $request->region = 'impedit';
    $request->requestId = 'est';
    $request->subnetworkPathParameter = 'est';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'quae';

    $requestSecurity = new ComputeSubnetworksPatchSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'nesciunt';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'veritatis';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 410547;
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'non';
    $request->fields = 'ratione';
    $request->key = 'inventore';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'modi';
    $request->region = 'possimus';
    $request->resource = 'cumque';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'voluptatem';
    $request->userIp = 'magni';

    $requestSecurity = new ComputeSubnetworksSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeSubnetworksSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksSetPrivateIpGoogleAccess

Set whether VMs in this subnet can access Google services without assigning external IP addresses through Private Google Access.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksSetPrivateIpGoogleAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworksSetPrivateIpGoogleAccessRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksSetPrivateIpGoogleAccessSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksSetPrivateIpGoogleAccessSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksSetPrivateIpGoogleAccessSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksSetPrivateIpGoogleAccessRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subnetworksSetPrivateIpGoogleAccessRequest = new SubnetworksSetPrivateIpGoogleAccessRequest();
    $request->subnetworksSetPrivateIpGoogleAccessRequest->privateIpGoogleAccess = false;
    $request->accessToken = 'modi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'error';
    $request->fields = 'eos';
    $request->key = 'voluptatibus';
    $request->oauthToken = 'debitis';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'omnis';
    $request->region = 'nesciunt';
    $request->requestId = 'perspiciatis';
    $request->subnetwork = 'expedita';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'asperiores';

    $requestSecurity = new ComputeSubnetworksSetPrivateIpGoogleAccessSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksSetPrivateIpGoogleAccessSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksSetPrivateIpGoogleAccess($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeSubnetworksTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeSubnetworksTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeSubnetworksTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'eveniet',
    ];
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iste';
    $request->fields = 'aspernatur';
    $request->key = 'placeat';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->project = 'doloremque';
    $request->quotaUser = 'repudiandae';
    $request->region = 'officiis';
    $request->resource = 'inventore';
    $request->uploadType = 'quia';
    $request->uploadProtocol = 'odit';
    $request->userIp = 'quas';

    $requestSecurity = new ComputeSubnetworksTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeSubnetworksTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->subnetworks->computeSubnetworksTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
