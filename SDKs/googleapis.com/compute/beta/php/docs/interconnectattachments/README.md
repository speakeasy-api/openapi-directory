# interconnectAttachments

### Available Operations

* [computeInterconnectAttachmentsAggregatedList](#computeinterconnectattachmentsaggregatedlist) - Retrieves an aggregated list of interconnect attachments.
* [computeInterconnectAttachmentsDelete](#computeinterconnectattachmentsdelete) - Deletes the specified interconnect attachment.
* [computeInterconnectAttachmentsGet](#computeinterconnectattachmentsget) - Returns the specified interconnect attachment.
* [computeInterconnectAttachmentsInsert](#computeinterconnectattachmentsinsert) - Creates an InterconnectAttachment in the specified project using the data included in the request.
* [computeInterconnectAttachmentsList](#computeinterconnectattachmentslist) - Retrieves the list of interconnect attachments contained within the specified region.
* [computeInterconnectAttachmentsPatch](#computeinterconnectattachmentspatch) - Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
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
    $request->accessToken = 'laboriosam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'labore';
    $request->fields = 'ullam';
    $request->filter = 'excepturi';
    $request->includeAllScopes = false;
    $request->key = 'soluta';
    $request->maxResults = 914695;
    $request->oauthToken = 'rerum';
    $request->orderBy = 'cum';
    $request->pageToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'fugiat';
    $request->quotaUser = 'perferendis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'tenetur';
    $request->userIp = 'sunt';

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
    $request->accessToken = 'corrupti';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->fields = 'quod';
    $request->interconnectAttachment = 'a';
    $request->key = 'et';
    $request->oauthToken = 'ipsam';
    $request->prettyPrint = false;
    $request->project = 'eos';
    $request->quotaUser = 'exercitationem';
    $request->region = 'minima';
    $request->requestId = 'laudantium';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'fuga';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'corporis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'itaque';
    $request->fields = 'suscipit';
    $request->interconnectAttachment = 'porro';
    $request->key = 'nulla';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'qui';
    $request->quotaUser = 'in';
    $request->region = 'enim';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'impedit';
    $request->userIp = 'consectetur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->interconnectAttachment = new InterconnectAttachment();
    $request->interconnectAttachment->adminEnabled = false;
    $request->interconnectAttachment->bandwidth = InterconnectAttachmentBandwidthEnum::BPS200_M;
    $request->interconnectAttachment->candidateIpv6Subnets = [
        'fuga',
        'labore',
        'adipisci',
    ];
    $request->interconnectAttachment->candidateSubnets = [
        'cum',
    ];
    $request->interconnectAttachment->cloudRouterIpAddress = 'magnam';
    $request->interconnectAttachment->cloudRouterIpv6Address = 'nihil';
    $request->interconnectAttachment->cloudRouterIpv6InterfaceId = 'officiis';
    $request->interconnectAttachment->creationTimestamp = 'inventore';
    $request->interconnectAttachment->customerRouterIpAddress = 'esse';
    $request->interconnectAttachment->customerRouterIpv6Address = 'ex';
    $request->interconnectAttachment->customerRouterIpv6InterfaceId = 'amet';
    $request->interconnectAttachment->dataplaneVersion = 791516;
    $request->interconnectAttachment->description = 'ad';
    $request->interconnectAttachment->edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum::AVAILABILITY_DOMAIN1;
    $request->interconnectAttachment->encryption = InterconnectAttachmentEncryptionEnum::IPSEC;
    $request->interconnectAttachment->googleReferenceId = 'blanditiis';
    $request->interconnectAttachment->id = 'eligendi';
    $request->interconnectAttachment->interconnect = 'qui';
    $request->interconnectAttachment->ipsecInternalAddresses = [
        'recusandae',
    ];
    $request->interconnectAttachment->kind = 'perspiciatis';
    $request->interconnectAttachment->labelFingerprint = 'corrupti';
    $request->interconnectAttachment->labels = [
        'magni' => 'repellendus',
    ];
    $request->interconnectAttachment->mtu = 559048;
    $request->interconnectAttachment->name = 'Miranda Abshire';
    $request->interconnectAttachment->operationalStatus = InterconnectAttachmentOperationalStatusEnum::OS_ACTIVE;
    $request->interconnectAttachment->pairingKey = 'repudiandae';
    $request->interconnectAttachment->partnerAsn = 'soluta';
    $request->interconnectAttachment->partnerMetadata = new InterconnectAttachmentPartnerMetadata();
    $request->interconnectAttachment->partnerMetadata->interconnectName = 'eius';
    $request->interconnectAttachment->partnerMetadata->partnerName = 'fuga';
    $request->interconnectAttachment->partnerMetadata->portalUrl = 'blanditiis';
    $request->interconnectAttachment->privateInterconnectInfo = new InterconnectAttachmentPrivateInfo();
    $request->interconnectAttachment->privateInterconnectInfo->tag8021q = 748266;
    $request->interconnectAttachment->region = 'ea';
    $request->interconnectAttachment->router = 'iusto';
    $request->interconnectAttachment->satisfiesPzs = false;
    $request->interconnectAttachment->selfLink = 'dolore';
    $request->interconnectAttachment->stackType = InterconnectAttachmentStackTypeEnum::IPV4_ONLY;
    $request->interconnectAttachment->state = InterconnectAttachmentStateEnum::UNPROVISIONED;
    $request->interconnectAttachment->type = InterconnectAttachmentTypeEnum::PARTNER;
    $request->interconnectAttachment->vlanTag8021q = 788995;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sunt';
    $request->fields = 'rem';
    $request->key = 'itaque';
    $request->oauthToken = 'assumenda';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'esse';
    $request->region = 'a';
    $request->requestId = 'quam';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'dignissimos';
    $request->userIp = 'earum';
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'magni';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'eius';
    $request->filter = 'rerum';
    $request->key = 'nesciunt';
    $request->maxResults = 863492;
    $request->oauthToken = 'velit';
    $request->orderBy = 'necessitatibus';
    $request->pageToken = 'facere';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'cumque';
    $request->region = 'ullam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'reprehenderit';
    $request->userIp = 'aut';

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
        'aspernatur',
        'harum',
    ];
    $request->interconnectAttachment1->candidateSubnets = [
        'dolor',
        'porro',
        'iste',
        'earum',
    ];
    $request->interconnectAttachment1->cloudRouterIpAddress = 'vitae';
    $request->interconnectAttachment1->cloudRouterIpv6Address = 'impedit';
    $request->interconnectAttachment1->cloudRouterIpv6InterfaceId = 'eligendi';
    $request->interconnectAttachment1->creationTimestamp = 'veniam';
    $request->interconnectAttachment1->customerRouterIpAddress = 'aperiam';
    $request->interconnectAttachment1->customerRouterIpv6Address = 'consectetur';
    $request->interconnectAttachment1->customerRouterIpv6InterfaceId = 'repellat';
    $request->interconnectAttachment1->dataplaneVersion = 377691;
    $request->interconnectAttachment1->description = 'quod';
    $request->interconnectAttachment1->edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum::AVAILABILITY_DOMAIN1;
    $request->interconnectAttachment1->encryption = InterconnectAttachmentEncryptionEnum::NONE;
    $request->interconnectAttachment1->googleReferenceId = 'distinctio';
    $request->interconnectAttachment1->id = 'cumque';
    $request->interconnectAttachment1->interconnect = 'assumenda';
    $request->interconnectAttachment1->ipsecInternalAddresses = [
        'deserunt',
    ];
    $request->interconnectAttachment1->kind = 'vel';
    $request->interconnectAttachment1->labelFingerprint = 'qui';
    $request->interconnectAttachment1->labels = [
        'accusantium' => 'voluptatibus',
        'occaecati' => 'nemo',
        'quam' => 'reiciendis',
    ];
    $request->interconnectAttachment1->mtu = 199704;
    $request->interconnectAttachment1->name = 'Vernon Bernhard';
    $request->interconnectAttachment1->operationalStatus = InterconnectAttachmentOperationalStatusEnum::OS_UNPROVISIONED;
    $request->interconnectAttachment1->pairingKey = 'possimus';
    $request->interconnectAttachment1->partnerAsn = 'molestiae';
    $request->interconnectAttachment1->partnerMetadata = new InterconnectAttachmentPartnerMetadata();
    $request->interconnectAttachment1->partnerMetadata->interconnectName = 'officiis';
    $request->interconnectAttachment1->partnerMetadata->partnerName = 'reiciendis';
    $request->interconnectAttachment1->partnerMetadata->portalUrl = 'voluptatum';
    $request->interconnectAttachment1->privateInterconnectInfo = new InterconnectAttachmentPrivateInfo();
    $request->interconnectAttachment1->privateInterconnectInfo->tag8021q = 46226;
    $request->interconnectAttachment1->region = 'reprehenderit';
    $request->interconnectAttachment1->router = 'animi';
    $request->interconnectAttachment1->satisfiesPzs = false;
    $request->interconnectAttachment1->selfLink = 'officia';
    $request->interconnectAttachment1->stackType = InterconnectAttachmentStackTypeEnum::IPV4_ONLY;
    $request->interconnectAttachment1->state = InterconnectAttachmentStateEnum::ACTIVE;
    $request->interconnectAttachment1->type = InterconnectAttachmentTypeEnum::DEDICATED;
    $request->interconnectAttachment1->vlanTag8021q = 941730;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'similique';
    $request->interconnectAttachmentPathParameter = 'odio';
    $request->key = 'unde';
    $request->oauthToken = 'asperiores';
    $request->prettyPrint = false;
    $request->project = 'nam';
    $request->quotaUser = 'provident';
    $request->region = 'fugiat';
    $request->requestId = 'recusandae';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'aut';
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
    $request->regionSetLabelsRequest->labelFingerprint = 'soluta';
    $request->regionSetLabelsRequest->labels = [
        'qui' => 'commodi',
        'a' => 'temporibus',
        'sequi' => 'eum',
    ];
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'animi';
    $request->fields = 'excepturi';
    $request->key = 'dolores';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'laboriosam';
    $request->quotaUser = 'distinctio';
    $request->region = 'quo';
    $request->requestId = 'facilis';
    $request->resource = 'magnam';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'molestias';

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
        'optio',
        'esse',
    ];
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'beatae';
    $request->key = 'dignissimos';
    $request->oauthToken = 'quia';
    $request->prettyPrint = false;
    $request->project = 'ratione';
    $request->quotaUser = 'veritatis';
    $request->region = 'amet';
    $request->resource = 'sequi';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'fugiat';
    $request->userIp = 'quod';

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
