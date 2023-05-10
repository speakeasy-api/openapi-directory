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
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'ad';
    $request->filter = 'soluta';
    $request->includeAllScopes = false;
    $request->key = 'officia';
    $request->maxResults = 344001;
    $request->oauthToken = 'exercitationem';
    $request->orderBy = 'vitae';
    $request->pageToken = 'illo';
    $request->prettyPrint = false;
    $request->project = 'soluta';
    $request->quotaUser = 'expedita';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'ipsum';
    $request->userIp = 'nihil';

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
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'rem';
    $request->key = 'dolore';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'architecto';
    $request->region = 'tempora';
    $request->requestId = 'eum';
    $request->subnetwork = 'incidunt';
    $request->uploadType = 'ducimus';
    $request->uploadProtocol = 'neque';
    $request->userIp = 'sequi';

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
    $request->subnetworksExpandIpCidrRangeRequest->ipCidrRange = 'expedita';
    $request->accessToken = 'quod';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->fields = 'voluptates';
    $request->key = 'suscipit';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'velit';
    $request->region = 'sapiente';
    $request->requestId = 'dolorem';
    $request->subnetwork = 'quam';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'odio';
    $request->userIp = 'dolores';

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
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'minus';
    $request->fields = 'non';
    $request->key = 'in';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'blanditiis';
    $request->region = 'possimus';
    $request->subnetwork = 'labore';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'voluptates';

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
    $request->accessToken = 'ea';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'assumenda';
    $request->fields = 'fugit';
    $request->key = 'placeat';
    $request->oauthToken = 'officia';
    $request->optionsRequestedPolicyVersion = 848473;
    $request->prettyPrint = false;
    $request->project = 'alias';
    $request->quotaUser = 'aperiam';
    $request->region = 'nisi';
    $request->resource = 'quibusdam';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'esse';
    $request->userIp = 'minus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->subnetwork = new Subnetwork();
    $request->subnetwork->allowSubnetCidrRoutesOverlap = false;
    $request->subnetwork->creationTimestamp = 'accusamus';
    $request->subnetwork->description = 'soluta';
    $request->subnetwork->enableFlowLogs = false;
    $request->subnetwork->externalIpv6Prefix = 'distinctio';
    $request->subnetwork->fingerprint = 'nam';
    $request->subnetwork->gatewayAddress = 'quo';
    $request->subnetwork->id = 'iste';
    $request->subnetwork->internalIpv6Prefix = 'itaque';
    $request->subnetwork->ipCidrRange = 'provident';
    $request->subnetwork->ipv6AccessType = SubnetworkIpv6AccessTypeEnum::EXTERNAL;
    $request->subnetwork->ipv6CidrRange = 'aliquam';
    $request->subnetwork->kind = 'incidunt';
    $request->subnetwork->logConfig = new SubnetworkLogConfig();
    $request->subnetwork->logConfig->aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum::INTERVAL5_MIN;
    $request->subnetwork->logConfig->enable = false;
    $request->subnetwork->logConfig->filterExpr = 'ipsam';
    $request->subnetwork->logConfig->flowSampling = 6952.9;
    $request->subnetwork->logConfig->metadata = SubnetworkLogConfigMetadataEnum::EXCLUDE_ALL_METADATA;
    $request->subnetwork->logConfig->metadataFields = [
        'enim',
        'fuga',
    ];
    $request->subnetwork->name = 'Jodi Wunsch';
    $request->subnetwork->network = 'eligendi';
    $request->subnetwork->privateIpGoogleAccess = false;
    $request->subnetwork->privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum::ENABLE_BIDIRECTIONAL_ACCESS_TO_GOOGLE;
    $request->subnetwork->purpose = SubnetworkPurposeEnum::PRIVATE_SERVICE_CONNECT;
    $request->subnetwork->region = 'placeat';
    $request->subnetwork->reservedInternalRange = 'quisquam';
    $request->subnetwork->role = SubnetworkRoleEnum::BACKUP;
    $request->subnetwork->secondaryIpRanges = [
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
    ];
    $request->subnetwork->selfLink = 'fuga';
    $request->subnetwork->stackType = SubnetworkStackTypeEnum::IPV4_IPV6;
    $request->subnetwork->state = SubnetworkStateEnum::DRAINING;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->fields = 'officiis';
    $request->key = 'cum';
    $request->oauthToken = 'aut';
    $request->prettyPrint = false;
    $request->project = 'ex';
    $request->quotaUser = 'dolorum';
    $request->region = 'autem';
    $request->requestId = 'maxime';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'officiis';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'explicabo';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'et';
    $request->fields = 'sunt';
    $request->filter = 'asperiores';
    $request->key = 'quam';
    $request->maxResults = 481306;
    $request->oauthToken = 'animi';
    $request->orderBy = 'nihil';
    $request->pageToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'totam';
    $request->region = 'maiores';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'quaerat';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eveniet';
    $request->fields = 'fugiat';
    $request->filter = 'iusto';
    $request->key = 'modi';
    $request->maxResults = 496357;
    $request->oauthToken = 'aut';
    $request->orderBy = 'a';
    $request->pageToken = 'impedit';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'blanditiis';
    $request->returnPartialSuccess = false;
    $request->serviceProject = 'minus';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'quas';
    $request->userIp = 'dolores';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->subnetwork1 = new Subnetwork();
    $request->subnetwork1->allowSubnetCidrRoutesOverlap = false;
    $request->subnetwork1->creationTimestamp = 'praesentium';
    $request->subnetwork1->description = 'nihil';
    $request->subnetwork1->enableFlowLogs = false;
    $request->subnetwork1->externalIpv6Prefix = 'beatae';
    $request->subnetwork1->fingerprint = 'suscipit';
    $request->subnetwork1->gatewayAddress = 'porro';
    $request->subnetwork1->id = 'fugit';
    $request->subnetwork1->internalIpv6Prefix = 'iure';
    $request->subnetwork1->ipCidrRange = 'doloribus';
    $request->subnetwork1->ipv6AccessType = SubnetworkIpv6AccessTypeEnum::EXTERNAL;
    $request->subnetwork1->ipv6CidrRange = 'libero';
    $request->subnetwork1->kind = 'et';
    $request->subnetwork1->logConfig = new SubnetworkLogConfig();
    $request->subnetwork1->logConfig->aggregationInterval = SubnetworkLogConfigAggregationIntervalEnum::INTERVAL1_MIN;
    $request->subnetwork1->logConfig->enable = false;
    $request->subnetwork1->logConfig->filterExpr = 'minima';
    $request->subnetwork1->logConfig->flowSampling = 4929.18;
    $request->subnetwork1->logConfig->metadata = SubnetworkLogConfigMetadataEnum::EXCLUDE_ALL_METADATA;
    $request->subnetwork1->logConfig->metadataFields = [
        'ratione',
    ];
    $request->subnetwork1->name = 'Hazel Schoen V';
    $request->subnetwork1->network = 'impedit';
    $request->subnetwork1->privateIpGoogleAccess = false;
    $request->subnetwork1->privateIpv6GoogleAccess = SubnetworkPrivateIpv6GoogleAccessEnum::DISABLE_GOOGLE_ACCESS;
    $request->subnetwork1->purpose = SubnetworkPurposeEnum::PRIVATE_SERVICE_CONNECT;
    $request->subnetwork1->region = 'magnam';
    $request->subnetwork1->reservedInternalRange = 'dolorum';
    $request->subnetwork1->role = SubnetworkRoleEnum::BACKUP;
    $request->subnetwork1->secondaryIpRanges = [
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
        new SubnetworkSecondaryRange(),
    ];
    $request->subnetwork1->selfLink = 'eos';
    $request->subnetwork1->stackType = SubnetworkStackTypeEnum::IPV4_IPV6;
    $request->subnetwork1->state = SubnetworkStateEnum::DRAINING;
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'eveniet';
    $request->drainTimeoutSeconds = 242384;
    $request->fields = 'molestiae';
    $request->key = 'molestiae';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'consectetur';
    $request->region = 'exercitationem';
    $request->requestId = 'aut';
    $request->subnetworkPathParameter = 'officiis';
    $request->uploadType = 'at';
    $request->uploadProtocol = 'deleniti';
    $request->userIp = 'nemo';

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
    $request->regionSetPolicyRequest->etag = 'delectus';
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
    $request->regionSetPolicyRequest->policy->etag = 'minus';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 615130;
    $request->accessToken = 'veritatis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolorum';
    $request->fields = 'voluptas';
    $request->key = 'quidem';
    $request->oauthToken = 'esse';
    $request->prettyPrint = false;
    $request->project = 'debitis';
    $request->quotaUser = 'distinctio';
    $request->region = 'fugiat';
    $request->resource = 'porro';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'alias';
    $request->userIp = 'doloremque';

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
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sunt';
    $request->fields = 'temporibus';
    $request->key = 'illum';
    $request->oauthToken = 'adipisci';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'veniam';
    $request->region = 'sed';
    $request->requestId = 'consectetur';
    $request->subnetwork = 'quo';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'animi';
    $request->userIp = 'magnam';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'distinctio',
        'iste',
        'asperiores',
    ];
    $request->accessToken = 'pariatur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sequi';
    $request->fields = 'repellat';
    $request->key = 'totam';
    $request->oauthToken = 'neque';
    $request->prettyPrint = false;
    $request->project = 'repellendus';
    $request->quotaUser = 'asperiores';
    $request->region = 'iste';
    $request->resource = 'quidem';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'minus';
    $request->userIp = 'numquam';

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
