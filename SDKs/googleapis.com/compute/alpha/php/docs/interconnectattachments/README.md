# interconnectAttachments

### Available Operations

* [computeInterconnectAttachmentsAggregatedList](#computeinterconnectattachmentsaggregatedlist) - Retrieves an aggregated list of interconnect attachments.
* [computeInterconnectAttachmentsDelete](#computeinterconnectattachmentsdelete) - Deletes the specified interconnect attachment.
* [computeInterconnectAttachmentsGet](#computeinterconnectattachmentsget) - Returns the specified interconnect attachment.
* [computeInterconnectAttachmentsGetIamPolicy](#computeinterconnectattachmentsgetiampolicy) - Gets the access control policy for a resource. May be empty if no such policy or resource exists.
* [computeInterconnectAttachmentsInsert](#computeinterconnectattachmentsinsert) - Creates an InterconnectAttachment in the specified project using the data included in the request.
* [computeInterconnectAttachmentsList](#computeinterconnectattachmentslist) - Retrieves the list of interconnect attachments contained within the specified region.
* [computeInterconnectAttachmentsPatch](#computeinterconnectattachmentspatch) - Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectAttachmentsSetIamPolicy](#computeinterconnectattachmentssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy.
* [computeInterconnectAttachmentsSetLabels](#computeinterconnectattachmentssetlabels) - Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.
* [computeInterconnectAttachmentsTestIamPermissions](#computeinterconnectattachmentstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeInterconnectAttachmentsAggregatedList

Retrieves an aggregated list of interconnect attachments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'aperiam';
    $request->fields = 'laudantium';
    $request->filter = 'ab';
    $request->includeAllScopes = false;
    $request->key = 'voluptatem';
    $request->maxResults = 593163;
    $request->oauthToken = 'ipsa';
    $request->orderBy = 'delectus';
    $request->pageToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'nihil';
    $request->quotaUser = 'quae';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'laboriosam';
    $request->userIp = 'ducimus';

    $requestSecurity = new ComputeInterconnectAttachmentsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsAggregatedList($request, $requestSecurity);

    if ($response->interconnectAttachmentAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectAttachmentsDelete

Deletes the specified interconnect attachment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'doloribus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'id';
    $request->fields = 'ex';
    $request->interconnectAttachment = 'quos';
    $request->key = 'dicta';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'exercitationem';
    $request->quotaUser = 'molestiae';
    $request->region = 'iure';
    $request->requestId = 'blanditiis';
    $request->uploadType = 'repellendus';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'itaque';

    $requestSecurity = new ComputeInterconnectAttachmentsDeleteSecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectAttachmentsGet

Returns the specified interconnect attachment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quaerat';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolore';
    $request->fields = 'accusantium';
    $request->interconnectAttachment = 'excepturi';
    $request->key = 'deserunt';
    $request->oauthToken = 'odit';
    $request->prettyPrint = false;
    $request->project = 'beatae';
    $request->quotaUser = 'exercitationem';
    $request->region = 'officiis';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'voluptas';

    $requestSecurity = new ComputeInterconnectAttachmentsGetSecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsGet($request, $requestSecurity);

    if ($response->interconnectAttachment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectAttachmentsGetIamPolicy

Gets the access control policy for a resource. May be empty if no such policy or resource exists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetIamPolicySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsGetIamPolicySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vitae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'molestias';
    $request->fields = 'cupiditate';
    $request->key = 'officia';
    $request->oauthToken = 'minima';
    $request->optionsRequestedPolicyVersion = 987092;
    $request->prettyPrint = false;
    $request->project = 'suscipit';
    $request->quotaUser = 'sequi';
    $request->region = 'debitis';
    $request->resource = 'neque';
    $request->uploadType = 'mollitia';
    $request->uploadProtocol = 'tenetur';
    $request->userIp = 'non';

    $requestSecurity = new ComputeInterconnectAttachmentsGetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectAttachmentsInsert

Creates an InterconnectAttachment in the specified project using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachment;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentBandwidthEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentConfigurationConstraints;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentConfigurationConstraintsBgpMd5Enum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentEdgeAvailabilityDomainEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentEncryptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentOperationalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentPartnerMetadata;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentPrivateInfo;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->interconnectAttachment = new InterconnectAttachment();
    $request->interconnectAttachment->adminEnabled = false;
    $request->interconnectAttachment->bandwidth = InterconnectAttachmentBandwidthEnum::BPS50_M;
    $request->interconnectAttachment->candidateIpv6Subnets = [
        'quibusdam',
        'quibusdam',
        'officia',
    ];
    $request->interconnectAttachment->candidateSubnets = [
        'velit',
    ];
    $request->interconnectAttachment->cloudRouterIpAddress = 'vero';
    $request->interconnectAttachment->cloudRouterIpv6Address = 'placeat';
    $request->interconnectAttachment->cloudRouterIpv6InterfaceId = 'pariatur';
    $request->interconnectAttachment->configurationConstraints = new InterconnectAttachmentConfigurationConstraints();
    $request->interconnectAttachment->configurationConstraints->bgpMd5 = InterconnectAttachmentConfigurationConstraintsBgpMd5Enum::MD5_REQUIRED;
    $request->interconnectAttachment->configurationConstraints->bgpPeerAsnRanges = [
        new InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange(),
    ];
    $request->interconnectAttachment->creationTimestamp = 'incidunt';
    $request->interconnectAttachment->customerRouterIpAddress = 'praesentium';
    $request->interconnectAttachment->customerRouterIpv6Address = 'ipsum';
    $request->interconnectAttachment->customerRouterIpv6InterfaceId = 'itaque';
    $request->interconnectAttachment->dataplaneVersion = 252323;
    $request->interconnectAttachment->description = 'dolorum';
    $request->interconnectAttachment->edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum::AVAILABILITY_DOMAIN2;
    $request->interconnectAttachment->encryption = InterconnectAttachmentEncryptionEnum::NONE;
    $request->interconnectAttachment->googleReferenceId = 'natus';
    $request->interconnectAttachment->id = 'quas';
    $request->interconnectAttachment->interconnect = 'saepe';
    $request->interconnectAttachment->ipsecInternalAddresses = [
        'assumenda',
        'maiores',
    ];
    $request->interconnectAttachment->kind = 'neque';
    $request->interconnectAttachment->labelFingerprint = 'in';
    $request->interconnectAttachment->labels = [
        'quaerat' => 'nostrum',
        'libero' => 'totam',
        'omnis' => 'veniam',
        'nostrum' => 'facere',
    ];
    $request->interconnectAttachment->mtu = 303791;
    $request->interconnectAttachment->name = 'Mrs. Tracy Walker';
    $request->interconnectAttachment->operationalStatus = InterconnectAttachmentOperationalStatusEnum::OS_ACTIVE;
    $request->interconnectAttachment->pairingKey = 'praesentium';
    $request->interconnectAttachment->partnerAsn = 'dolores';
    $request->interconnectAttachment->partnerMetadata = new InterconnectAttachmentPartnerMetadata();
    $request->interconnectAttachment->partnerMetadata->interconnectName = 'consectetur';
    $request->interconnectAttachment->partnerMetadata->partnerName = 'dicta';
    $request->interconnectAttachment->partnerMetadata->portalUrl = 'ipsa';
    $request->interconnectAttachment->privateInterconnectInfo = new InterconnectAttachmentPrivateInfo();
    $request->interconnectAttachment->privateInterconnectInfo->tag8021q = 580877;
    $request->interconnectAttachment->region = 'perferendis';
    $request->interconnectAttachment->remoteService = 'iure';
    $request->interconnectAttachment->router = 'cum';
    $request->interconnectAttachment->satisfiesPzs = false;
    $request->interconnectAttachment->selfLink = 'facere';
    $request->interconnectAttachment->selfLinkWithId = 'ratione';
    $request->interconnectAttachment->stackType = InterconnectAttachmentStackTypeEnum::IPV4_IPV6;
    $request->interconnectAttachment->state = InterconnectAttachmentStateEnum::DEFUNCT;
    $request->interconnectAttachment->subnetLength = 780157;
    $request->interconnectAttachment->type = InterconnectAttachmentTypeEnum::DEDICATED;
    $request->interconnectAttachment->vlanTag8021q = 586327;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'vero';
    $request->fields = 'nihil';
    $request->key = 'velit';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'consequatur';
    $request->region = 'consequuntur';
    $request->requestId = 'numquam';
    $request->uploadType = 'numquam';
    $request->uploadProtocol = 'excepturi';
    $request->userIp = 'pariatur';
    $request->validateOnly = false;

    $requestSecurity = new ComputeInterconnectAttachmentsInsertSecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectAttachmentsList

Retrieves the list of interconnect attachments contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'expedita';
    $request->filter = 'quidem';
    $request->key = 'consequuntur';
    $request->maxResults = 51228;
    $request->oauthToken = 'asperiores';
    $request->orderBy = 'debitis';
    $request->pageToken = 'nostrum';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'provident';
    $request->region = 'veritatis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'expedita';

    $requestSecurity = new ComputeInterconnectAttachmentsListSecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsList($request, $requestSecurity);

    if ($response->interconnectAttachmentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectAttachmentsPatch

Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachment;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentBandwidthEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentConfigurationConstraints;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentConfigurationConstraintsBgpMd5Enum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentEdgeAvailabilityDomainEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentEncryptionEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentOperationalStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentPartnerMetadata;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentPrivateInfo;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentStackTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\InterconnectAttachmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->interconnectAttachment1 = new InterconnectAttachment();
    $request->interconnectAttachment1->adminEnabled = false;
    $request->interconnectAttachment1->bandwidth = InterconnectAttachmentBandwidthEnum::BPS5_G;
    $request->interconnectAttachment1->candidateIpv6Subnets = [
        'magnam',
        'excepturi',
    ];
    $request->interconnectAttachment1->candidateSubnets = [
        'dolorum',
        'voluptatibus',
        'modi',
        'enim',
    ];
    $request->interconnectAttachment1->cloudRouterIpAddress = 'mollitia';
    $request->interconnectAttachment1->cloudRouterIpv6Address = 'sed';
    $request->interconnectAttachment1->cloudRouterIpv6InterfaceId = 'molestiae';
    $request->interconnectAttachment1->configurationConstraints = new InterconnectAttachmentConfigurationConstraints();
    $request->interconnectAttachment1->configurationConstraints->bgpMd5 = InterconnectAttachmentConfigurationConstraintsBgpMd5Enum::MD5_UNSUPPORTED;
    $request->interconnectAttachment1->configurationConstraints->bgpPeerAsnRanges = [
        new InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange(),
        new InterconnectAttachmentConfigurationConstraintsBgpPeerASNRange(),
    ];
    $request->interconnectAttachment1->creationTimestamp = 'error';
    $request->interconnectAttachment1->customerRouterIpAddress = 'saepe';
    $request->interconnectAttachment1->customerRouterIpv6Address = 'consequuntur';
    $request->interconnectAttachment1->customerRouterIpv6InterfaceId = 'quod';
    $request->interconnectAttachment1->dataplaneVersion = 581420;
    $request->interconnectAttachment1->description = 'earum';
    $request->interconnectAttachment1->edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum::AVAILABILITY_DOMAIN2;
    $request->interconnectAttachment1->encryption = InterconnectAttachmentEncryptionEnum::NONE;
    $request->interconnectAttachment1->googleReferenceId = 'quae';
    $request->interconnectAttachment1->id = 'doloremque';
    $request->interconnectAttachment1->interconnect = 'debitis';
    $request->interconnectAttachment1->ipsecInternalAddresses = [
        'temporibus',
        'quidem',
        'neque',
    ];
    $request->interconnectAttachment1->kind = 'est';
    $request->interconnectAttachment1->labelFingerprint = 'repellendus';
    $request->interconnectAttachment1->labels = [
        'quisquam' => 'vel',
        'cum' => 'doloremque',
    ];
    $request->interconnectAttachment1->mtu = 239378;
    $request->interconnectAttachment1->name = 'Ruth MacGyver';
    $request->interconnectAttachment1->operationalStatus = InterconnectAttachmentOperationalStatusEnum::OS_UNPROVISIONED;
    $request->interconnectAttachment1->pairingKey = 'nesciunt';
    $request->interconnectAttachment1->partnerAsn = 'sequi';
    $request->interconnectAttachment1->partnerMetadata = new InterconnectAttachmentPartnerMetadata();
    $request->interconnectAttachment1->partnerMetadata->interconnectName = 'in';
    $request->interconnectAttachment1->partnerMetadata->partnerName = 'modi';
    $request->interconnectAttachment1->partnerMetadata->portalUrl = 'nihil';
    $request->interconnectAttachment1->privateInterconnectInfo = new InterconnectAttachmentPrivateInfo();
    $request->interconnectAttachment1->privateInterconnectInfo->tag8021q = 243931;
    $request->interconnectAttachment1->region = 'aut';
    $request->interconnectAttachment1->remoteService = 'rem';
    $request->interconnectAttachment1->router = 'odit';
    $request->interconnectAttachment1->satisfiesPzs = false;
    $request->interconnectAttachment1->selfLink = 'libero';
    $request->interconnectAttachment1->selfLinkWithId = 'error';
    $request->interconnectAttachment1->stackType = InterconnectAttachmentStackTypeEnum::IPV4_IPV6;
    $request->interconnectAttachment1->state = InterconnectAttachmentStateEnum::UNPROVISIONED;
    $request->interconnectAttachment1->subnetLength = 181311;
    $request->interconnectAttachment1->type = InterconnectAttachmentTypeEnum::PARTNER;
    $request->interconnectAttachment1->vlanTag8021q = 718112;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'possimus';
    $request->fields = 'nemo';
    $request->interconnectAttachmentPathParameter = 'eum';
    $request->key = 'iusto';
    $request->oauthToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'unde';
    $request->region = 'impedit';
    $request->requestId = 'amet';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'commodi';
    $request->userIp = 'neque';

    $requestSecurity = new ComputeInterconnectAttachmentsPatchSecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectAttachmentsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsSetIamPolicyRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetPolicyRequest = new RegionSetPolicyRequest();
    $request->regionSetPolicyRequest->bindings = [
        new Binding(),
    ];
    $request->regionSetPolicyRequest->etag = 'officia';
    $request->regionSetPolicyRequest->policy = new Policy();
    $request->regionSetPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->regionSetPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->regionSetPolicyRequest->policy->etag = 'molestiae';
    $request->regionSetPolicyRequest->policy->rules = [
        new Rule(),
    ];
    $request->regionSetPolicyRequest->policy->version = 304199;
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'blanditiis';
    $request->fields = 'natus';
    $request->key = 'quisquam';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'recusandae';
    $request->region = 'iste';
    $request->resource = 'error';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nemo';
    $request->userIp = 'unde';

    $requestSecurity = new ComputeInterconnectAttachmentsSetIamPolicySecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectAttachmentsSetLabels

Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'temporibus';
    $request->regionSetLabelsRequest->labels = [
        'amet' => 'deserunt',
        'ducimus' => 'modi',
        'impedit' => 'ipsa',
    ];
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sed';
    $request->fields = 'a';
    $request->key = 'saepe';
    $request->oauthToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'quaerat';
    $request->region = 'cum';
    $request->requestId = 'dolore';
    $request->resource = 'quibusdam';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'atque';
    $request->userIp = 'tempore';

    $requestSecurity = new ComputeInterconnectAttachmentsSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeInterconnectAttachmentsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeInterconnectAttachmentsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeInterconnectAttachmentsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'quas',
        'voluptates',
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nisi';
    $request->fields = 'officiis';
    $request->key = 'quasi';
    $request->oauthToken = 'fugiat';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'impedit';
    $request->region = 'voluptatibus';
    $request->resource = 'ad';
    $request->uploadType = 'eaque';
    $request->uploadProtocol = 'aspernatur';
    $request->userIp = 'expedita';

    $requestSecurity = new ComputeInterconnectAttachmentsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeInterconnectAttachmentsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->interconnectAttachments->computeInterconnectAttachmentsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
