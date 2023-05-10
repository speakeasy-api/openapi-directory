# interconnectAttachments

### Available Operations

* [computeInterconnectAttachmentsAggregatedList](#computeinterconnectattachmentsaggregatedlist) - Retrieves an aggregated list of interconnect attachments.
* [computeInterconnectAttachmentsDelete](#computeinterconnectattachmentsdelete) - Deletes the specified interconnect attachment.
* [computeInterconnectAttachmentsGet](#computeinterconnectattachmentsget) - Returns the specified interconnect attachment.
* [computeInterconnectAttachmentsInsert](#computeinterconnectattachmentsinsert) - Creates an InterconnectAttachment in the specified project using the data included in the request.
* [computeInterconnectAttachmentsList](#computeinterconnectattachmentslist) - Retrieves the list of interconnect attachments contained within the specified region.
* [computeInterconnectAttachmentsPatch](#computeinterconnectattachmentspatch) - Updates the specified interconnect attachment with the data included in the request. This method supports PATCH semantics and uses the JSON merge patch format and processing rules.
* [computeInterconnectAttachmentsSetLabels](#computeinterconnectattachmentssetlabels) - Sets the labels on an InterconnectAttachment. To learn more about labels, read the Labeling Resources documentation.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'provident';
    $request->filter = 'provident';
    $request->includeAllScopes = false;
    $request->key = 'soluta';
    $request->maxResults = 803800;
    $request->oauthToken = 'commodi';
    $request->orderBy = 'consectetur';
    $request->pageToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'nisi';
    $request->quotaUser = 'aspernatur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'tempore';
    $request->userIp = 'asperiores';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'delectus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'porro';
    $request->interconnectAttachment = 'dolores';
    $request->key = 'iste';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'porro';
    $request->quotaUser = 'eaque';
    $request->region = 'ea';
    $request->requestId = 'consequatur';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'accusantium';
    $request->userIp = 'ea';

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
    $request->accessToken = 'et';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'molestiae';
    $request->interconnectAttachment = 'voluptate';
    $request->key = 'autem';
    $request->oauthToken = 'numquam';
    $request->prettyPrint = false;
    $request->project = 'voluptates';
    $request->quotaUser = 'debitis';
    $request->region = 'earum';
    $request->uploadType = 'suscipit';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'doloremque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->interconnectAttachment = new InterconnectAttachment();
    $request->interconnectAttachment->adminEnabled = false;
    $request->interconnectAttachment->bandwidth = InterconnectAttachmentBandwidthEnum::BPS20_G;
    $request->interconnectAttachment->candidateIpv6Subnets = [
        'vel',
        'itaque',
        'nulla',
        'excepturi',
    ];
    $request->interconnectAttachment->candidateSubnets = [
        'in',
        'nesciunt',
        'temporibus',
        'temporibus',
    ];
    $request->interconnectAttachment->cloudRouterIpAddress = 'eum';
    $request->interconnectAttachment->cloudRouterIpv6Address = 'non';
    $request->interconnectAttachment->cloudRouterIpv6InterfaceId = 'ut';
    $request->interconnectAttachment->creationTimestamp = 'nostrum';
    $request->interconnectAttachment->customerRouterIpAddress = 'dignissimos';
    $request->interconnectAttachment->customerRouterIpv6Address = 'illo';
    $request->interconnectAttachment->customerRouterIpv6InterfaceId = 'corporis';
    $request->interconnectAttachment->dataplaneVersion = 55356;
    $request->interconnectAttachment->description = 'occaecati';
    $request->interconnectAttachment->edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum::AVAILABILITY_DOMAIN_ANY;
    $request->interconnectAttachment->encryption = InterconnectAttachmentEncryptionEnum::NONE;
    $request->interconnectAttachment->googleReferenceId = 'recusandae';
    $request->interconnectAttachment->id = 'deleniti';
    $request->interconnectAttachment->interconnect = 'dignissimos';
    $request->interconnectAttachment->ipsecInternalAddresses = [
        'quibusdam',
    ];
    $request->interconnectAttachment->kind = 'adipisci';
    $request->interconnectAttachment->labelFingerprint = 'minus';
    $request->interconnectAttachment->labels = [
        'id' => 'architecto',
        'maiores' => 'perspiciatis',
    ];
    $request->interconnectAttachment->mtu = 802188;
    $request->interconnectAttachment->name = 'Hazel Considine';
    $request->interconnectAttachment->operationalStatus = InterconnectAttachmentOperationalStatusEnum::OS_UNPROVISIONED;
    $request->interconnectAttachment->pairingKey = 'iure';
    $request->interconnectAttachment->partnerAsn = 'aliquid';
    $request->interconnectAttachment->partnerMetadata = new InterconnectAttachmentPartnerMetadata();
    $request->interconnectAttachment->partnerMetadata->interconnectName = 'culpa';
    $request->interconnectAttachment->partnerMetadata->partnerName = 'illo';
    $request->interconnectAttachment->partnerMetadata->portalUrl = 'reiciendis';
    $request->interconnectAttachment->privateInterconnectInfo = new InterconnectAttachmentPrivateInfo();
    $request->interconnectAttachment->privateInterconnectInfo->tag8021q = 214359;
    $request->interconnectAttachment->region = 'doloremque';
    $request->interconnectAttachment->router = 'quod';
    $request->interconnectAttachment->satisfiesPzs = false;
    $request->interconnectAttachment->selfLink = 'dignissimos';
    $request->interconnectAttachment->stackType = InterconnectAttachmentStackTypeEnum::IPV4_IPV6;
    $request->interconnectAttachment->state = InterconnectAttachmentStateEnum::STATE_UNSPECIFIED;
    $request->interconnectAttachment->type = InterconnectAttachmentTypeEnum::PARTNER_PROVIDER;
    $request->interconnectAttachment->vlanTag8021q = 348056;
    $request->accessToken = 'quidem';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'molestiae';
    $request->fields = 'vitae';
    $request->key = 'excepturi';
    $request->oauthToken = 'voluptatum';
    $request->prettyPrint = false;
    $request->project = 'iste';
    $request->quotaUser = 'eaque';
    $request->region = 'reiciendis';
    $request->requestId = 'magnam';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'est';
    $request->userIp = 'tempora';
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
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'adipisci';
    $request->fields = 'atque';
    $request->filter = 'at';
    $request->key = 'rem';
    $request->maxResults = 346534;
    $request->oauthToken = 'tempore';
    $request->orderBy = 'eos';
    $request->pageToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'aperiam';
    $request->quotaUser = 'minima';
    $request->region = 'perspiciatis';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'reprehenderit';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->interconnectAttachment1 = new InterconnectAttachment();
    $request->interconnectAttachment1->adminEnabled = false;
    $request->interconnectAttachment1->bandwidth = InterconnectAttachmentBandwidthEnum::BPS200_M;
    $request->interconnectAttachment1->candidateIpv6Subnets = [
        'sequi',
        'eligendi',
        'consequuntur',
        'quae',
    ];
    $request->interconnectAttachment1->candidateSubnets = [
        'sint',
        'minus',
    ];
    $request->interconnectAttachment1->cloudRouterIpAddress = 'excepturi';
    $request->interconnectAttachment1->cloudRouterIpv6Address = 'porro';
    $request->interconnectAttachment1->cloudRouterIpv6InterfaceId = 'nesciunt';
    $request->interconnectAttachment1->creationTimestamp = 'maiores';
    $request->interconnectAttachment1->customerRouterIpAddress = 'veniam';
    $request->interconnectAttachment1->customerRouterIpv6Address = 'autem';
    $request->interconnectAttachment1->customerRouterIpv6InterfaceId = 'esse';
    $request->interconnectAttachment1->dataplaneVersion = 887167;
    $request->interconnectAttachment1->description = 'aperiam';
    $request->interconnectAttachment1->edgeAvailabilityDomain = InterconnectAttachmentEdgeAvailabilityDomainEnum::AVAILABILITY_DOMAIN_ANY;
    $request->interconnectAttachment1->encryption = InterconnectAttachmentEncryptionEnum::IPSEC;
    $request->interconnectAttachment1->googleReferenceId = 'corporis';
    $request->interconnectAttachment1->id = 'consequuntur';
    $request->interconnectAttachment1->interconnect = 'odio';
    $request->interconnectAttachment1->ipsecInternalAddresses = [
        'quis',
        'nobis',
    ];
    $request->interconnectAttachment1->kind = 'beatae';
    $request->interconnectAttachment1->labelFingerprint = 'repellendus';
    $request->interconnectAttachment1->labels = [
        'consequuntur' => 'delectus',
        'nobis' => 'possimus',
    ];
    $request->interconnectAttachment1->mtu = 670710;
    $request->interconnectAttachment1->name = 'Doyle Bradtke Sr.';
    $request->interconnectAttachment1->operationalStatus = InterconnectAttachmentOperationalStatusEnum::OS_ACTIVE;
    $request->interconnectAttachment1->pairingKey = 'inventore';
    $request->interconnectAttachment1->partnerAsn = 'laboriosam';
    $request->interconnectAttachment1->partnerMetadata = new InterconnectAttachmentPartnerMetadata();
    $request->interconnectAttachment1->partnerMetadata->interconnectName = 'quod';
    $request->interconnectAttachment1->partnerMetadata->partnerName = 'repudiandae';
    $request->interconnectAttachment1->partnerMetadata->portalUrl = 'consequuntur';
    $request->interconnectAttachment1->privateInterconnectInfo = new InterconnectAttachmentPrivateInfo();
    $request->interconnectAttachment1->privateInterconnectInfo->tag8021q = 133360;
    $request->interconnectAttachment1->region = 'sequi';
    $request->interconnectAttachment1->router = 'sint';
    $request->interconnectAttachment1->satisfiesPzs = false;
    $request->interconnectAttachment1->selfLink = 'accusamus';
    $request->interconnectAttachment1->stackType = InterconnectAttachmentStackTypeEnum::IPV4_ONLY;
    $request->interconnectAttachment1->state = InterconnectAttachmentStateEnum::UNPROVISIONED;
    $request->interconnectAttachment1->type = InterconnectAttachmentTypeEnum::DEDICATED;
    $request->interconnectAttachment1->vlanTag8021q = 318471;
    $request->accessToken = 'minus';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'accusantium';
    $request->fields = 'nulla';
    $request->interconnectAttachmentPathParameter = 'inventore';
    $request->key = 'omnis';
    $request->oauthToken = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'nostrum';
    $request->region = 'sint';
    $request->requestId = 'doloribus';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'adipisci';
    $request->userIp = 'natus';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'velit';
    $request->regionSetLabelsRequest->labels = [
        'eos' => 'nisi',
        'commodi' => 'impedit',
        'facilis' => 'temporibus',
    ];
    $request->accessToken = 'error';
    $request->alt = AltEnum::JSON;
    $request->callback = 'delectus';
    $request->fields = 'molestiae';
    $request->key = 'deserunt';
    $request->oauthToken = 'laborum';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'rerum';
    $request->region = 'consequuntur';
    $request->requestId = 'magnam';
    $request->resource = 'et';
    $request->uploadType = 'et';
    $request->uploadProtocol = 'ratione';
    $request->userIp = 'nisi';

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
