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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'doloremque';
    $request->filter = 'molestiae';
    $request->includeAllScopes = false;
    $request->key = 'aperiam';
    $request->maxResults = 663695;
    $request->oauthToken = 'similique';
    $request->orderBy = 'accusamus';
    $request->pageToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'aliquam';
    $request->quotaUser = 'mollitia';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'voluptatem';

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
    $request->accessToken = 'incidunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'placeat';
    $request->fields = 'ipsum';
    $request->key = 'fugiat';
    $request->oauthToken = 'omnis';
    $request->prettyPrint = false;
    $request->project = 'hic';
    $request->quotaUser = 'quasi';
    $request->region = 'aliquam';
    $request->requestId = 'corrupti';
    $request->subnetwork = 'porro';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'alias';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subnetworksExpandIpCidrRangeRequest = new SubnetworksExpandIpCidrRangeRequest();
    $request->subnetworksExpandIpCidrRangeRequest->ipCidrRange = 'asperiores';
    $request->accessToken = 'non';
    $request->alt = AltEnum::JSON;
    $request->callback = 'doloremque';
    $request->fields = 'in';
    $request->key = 'optio';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'doloremque';
    $request->region = 'laboriosam';
    $request->requestId = 'blanditiis';
    $request->subnetwork = 'quaerat';
    $request->uploadType = 'perspiciatis';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'adipisci';

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
    $request->accessToken = 'est';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eligendi';
    $request->fields = 'voluptates';
    $request->key = 'officiis';
    $request->oauthToken = 'maxime';
    $request->prettyPrint = false;
    $request->project = 'totam';
    $request->quotaUser = 'labore';
    $request->region = 'deleniti';
    $request->subnetwork = 'enim';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'ipsam';
    $request->userIp = 'atque';

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
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'occaecati';
    $request->fields = 'reiciendis';
    $request->key = 'officia';
    $request->oauthToken = 'recusandae';
    $request->optionsRequestedPolicyVersion = 998080;
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'incidunt';
    $request->region = 'aperiam';
    $request->resource = 'itaque';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'at';
    $request->userIp = 'ex';

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
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkAggregationIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkIpv6AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfigAggregationIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfigMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkMetadataEnum;
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subnetwork = new Subnetwork();
    $request->subnetwork->aggregationInterval = SubnetworkAggregationIntervalEnum::INTERVAL30_SEC;
    $request->subnetwork->allowSubnetCidrRoutesOverlap = false;
    $request->subnetwork->creationTimestamp = 'quisquam';
    $request->subnetwork->description = 'doloremque';
    $request->subnetwork->enableFlowLogs = false;
    $request->subnetwork->enableL2 = false;
    $request->subnetwork->enablePrivateV6Access = false;
    $request->subnetwork->externalIpv6Prefix = 'deleniti';
    $request->subnetwork->fingerprint = 'repellat';
    $request->subnetwork->flowSampling = 1091.4;
    $request->subnetwork->gatewayAddress = 'ipsa';
    $request->subnetwork->id = 'ab';
    $request->subnetwork->internalIpv6Prefix = 'tempora';
    $request->subnetwork->ipCidrRange = 'numquam';
    $request->subnetwork->ipv6AccessType = SubnetworkIpv6AccessTypeEnum::EXTERNAL;
    $request->subnetwork->ipv6CidrRange = 'magnam';
    $request->subnetwork->kind = 'corrupti';
    $request->subnetwork->logConfig = new SubnetworkLogConfig();
    $request->subnetwork->logConfig->aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum::INTERVAL1_MIN;
    $request->subnetwork->logConfig->enable = false;
    $request->subnetwork->logConfig->filterExpr = 'ullam';
    $request->subnetwork->logConfig->flowSampling = 4323.29;
    $request->subnetwork->logConfig->metadata = SubnetworkLogConfigMetadataEnum::EXCLUDE_ALL_METADATA;
    $request->subnetwork->logConfig->metadataFields = [
        'quisquam',
    ];
    $request->subnetwork->metadata = SubnetworkMetadataEnum::INCLUDE_ALL_METADATA;
    $request->subnetwork->name = 'Emilio Cummerata';
    $request->subnetwork->network = 'ipsa';
    $request->subnetwork->privateIpGoogleAccess = false;
    $request->subnetwork->privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->subnetwork->purpose = SubnetworkPurposeEnum::INTERNAL_HTTPS_LOAD_BALANCER;
    $request->subnetwork->region = 'vitae';
    $request->subnetwork->reservedInternalRange = 'magnam';
    $request->subnetwork->role = SubnetworkRoleEnum::ACTIVE;
    $request->subnetwork->secondaryIpRanges = [
        new SubnetworkSecondaryRange(),
    ];
    $request->subnetwork->selfLink = 'magnam';
    $request->subnetwork->selfLinkWithId = 'odit';
    $request->subnetwork->stackType = SubnetworkStackTypeEnum::IPV4_ONLY;
    $request->subnetwork->state = SubnetworkStateEnum::DRAINING;
    $request->subnetwork->vlans = [
        575331,
    ];
    $request->accessToken = 'nam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'reiciendis';
    $request->key = 'error';
    $request->oauthToken = 'architecto';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'non';
    $request->region = 'esse';
    $request->requestId = 'nostrum';
    $request->uploadType = 'facere';
    $request->uploadProtocol = 'veritatis';
    $request->userIp = 'dolor';

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
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'ea';
    $request->filter = 'qui';
    $request->key = 'doloribus';
    $request->maxResults = 545432;
    $request->oauthToken = 'pariatur';
    $request->orderBy = 'dolore';
    $request->pageToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'sunt';
    $request->quotaUser = 'perferendis';
    $request->region = 'illum';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'illo';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'similique';

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
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iure';
    $request->fields = 'qui';
    $request->filter = 'qui';
    $request->key = 'excepturi';
    $request->maxResults = 550424;
    $request->oauthToken = 'et';
    $request->orderBy = 'accusamus';
    $request->pageToken = 'fuga';
    $request->prettyPrint = false;
    $request->project = 'officiis';
    $request->quotaUser = 'eaque';
    $request->returnPartialSuccess = false;
    $request->serviceProject = 'qui';
    $request->uploadType = 'ratione';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'dolore';

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
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkAggregationIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkIpv6AccessTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfigAggregationIntervalEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkLogConfigMetadataEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubnetworkMetadataEnum;
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
    $request->subnetwork1->aggregationInterval = SubnetworkAggregationIntervalEnum::INTERVAL15_MIN;
    $request->subnetwork1->allowSubnetCidrRoutesOverlap = false;
    $request->subnetwork1->creationTimestamp = 'aliquam';
    $request->subnetwork1->description = 'placeat';
    $request->subnetwork1->enableFlowLogs = false;
    $request->subnetwork1->enableL2 = false;
    $request->subnetwork1->enablePrivateV6Access = false;
    $request->subnetwork1->externalIpv6Prefix = 'explicabo';
    $request->subnetwork1->fingerprint = 'labore';
    $request->subnetwork1->flowSampling = 7489.82;
    $request->subnetwork1->gatewayAddress = 'illo';
    $request->subnetwork1->id = 'provident';
    $request->subnetwork1->internalIpv6Prefix = 'ab';
    $request->subnetwork1->ipCidrRange = 'dolorum';
    $request->subnetwork1->ipv6AccessType = SubnetworkIpv6AccessTypeEnum::EXTERNAL;
    $request->subnetwork1->ipv6CidrRange = 'architecto';
    $request->subnetwork1->kind = 'nisi';
    $request->subnetwork1->logConfig = new SubnetworkLogConfig();
    $request->subnetwork1->logConfig->aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum::INTERVAL15_MIN;
    $request->subnetwork1->logConfig->enable = false;
    $request->subnetwork1->logConfig->filterExpr = 'sequi';
    $request->subnetwork1->logConfig->flowSampling = 2901.11;
    $request->subnetwork1->logConfig->metadata = SubnetworkLogConfigMetadataEnum::CUSTOM_METADATA;
    $request->subnetwork1->logConfig->metadataFields = [
        'qui',
    ];
    $request->subnetwork1->metadata = SubnetworkMetadataEnum::EXCLUDE_ALL_METADATA;
    $request->subnetwork1->name = 'Clara Labadie';
    $request->subnetwork1->network = 'quae';
    $request->subnetwork1->privateIpGoogleAccess = false;
    $request->subnetwork1->privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum::ENABLE_OUTBOUND_VM_ACCESS_TO_GOOGLE;
    $request->subnetwork1->purpose = SubnetworkPurposeEnum::PRIVATE_RFC1918;
    $request->subnetwork1->region = 'dolores';
    $request->subnetwork1->reservedInternalRange = 'illum';
    $request->subnetwork1->role = SubnetworkRoleEnum::BACKUP;
    $request->subnetwork1->secondaryIpRanges = [
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
    ];
    $request->subnetwork1->selfLink = 'expedita';
    $request->subnetwork1->selfLinkWithId = 'odit';
    $request->subnetwork1->stackType = SubnetworkStackTypeEnum::IPV4_ONLY;
    $request->subnetwork1->state = SubnetworkStateEnum::READY;
    $request->subnetwork1->vlans = [
        119949,
        867099,
    ];
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'culpa';
    $request->drainTimeoutSeconds = 273092;
    $request->fields = 'architecto';
    $request->key = 'laboriosam';
    $request->oauthToken = 'inventore';
    $request->prettyPrint = false;
    $request->project = 'temporibus';
    $request->quotaUser = 'ut';
    $request->region = 'placeat';
    $request->requestId = 'illo';
    $request->subnetworkPathParameter = 'velit';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'temporibus';
    $request->userIp = 'cupiditate';

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
    ];
    $request->regionSetPolicyRequest->etag = 'vero';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'minus';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
        new Rule(),
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 683086;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'distinctio';
    $request->fields = 'nam';
    $request->key = 'expedita';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'ut';
    $request->quotaUser = 'perferendis';
    $request->region = 'iste';
    $request->resource = 'recusandae';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'dolor';
    $request->userIp = 'magnam';

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
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laboriosam';
    $request->fields = 'pariatur';
    $request->key = 'cum';
    $request->oauthToken = 'placeat';
    $request->prettyPrint = false;
    $request->project = 'eius';
    $request->quotaUser = 'dolor';
    $request->region = 'eos';
    $request->requestId = 'quae';
    $request->subnetwork = 'quibusdam';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'voluptates';
    $request->userIp = 'natus';

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
        'velit',
        'iure',
        'non',
        'delectus',
    ];
    $request->accessToken = 'commodi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maxime';
    $request->fields = 'itaque';
    $request->key = 'molestias';
    $request->oauthToken = 'laudantium';
    $request->prettyPrint = false;
    $request->project = 'occaecati';
    $request->quotaUser = 'inventore';
    $request->region = 'maiores';
    $request->resource = 'voluptatum';
    $request->uploadType = 'inventore';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'molestiae';

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
