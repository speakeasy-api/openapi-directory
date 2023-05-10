# resourceRecordSets

### Available Operations

* [dnsResourceRecordSetsCreate](#dnsresourcerecordsetscreate) - Creates a new ResourceRecordSet.
* [dnsResourceRecordSetsDelete](#dnsresourcerecordsetsdelete) - Deletes a previously created ResourceRecordSet.
* [dnsResourceRecordSetsGet](#dnsresourcerecordsetsget) - Fetches the representation of an existing ResourceRecordSet.
* [dnsResourceRecordSetsList](#dnsresourcerecordsetslist) - Enumerates ResourceRecordSets that you have created but not yet deleted.
* [dnsResourceRecordSetsPatch](#dnsresourcerecordsetspatch) - Applies a partial update to an existing ResourceRecordSet.

## dnsResourceRecordSetsCreate

Creates a new ResourceRecordSet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyHealthCheckTargets;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTarget;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyPrimaryBackupPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResourceRecordSetsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resourceRecordSet = new ResourceRecordSet();
    $request->resourceRecordSet->kind = 'ipsum';
    $request->resourceRecordSet->name = 'Karl Feeney';
    $request->resourceRecordSet->routingPolicy = new RRSetRoutingPolicy();
    $request->resourceRecordSet->routingPolicy->geo = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->geo->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->geo->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->geo->kind = 'hic';
    $request->resourceRecordSet->routingPolicy->kind = 'distinctio';
    $request->resourceRecordSet->routingPolicy->primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->kind = 'odio';
    $request->resourceRecordSet->routingPolicy->primaryBackup->kind = 'similique';
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets = new RRSetRoutingPolicyHealthCheckTargets();
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets->internalLoadBalancers = [
        new RRSetRoutingPolicyLoadBalancerTarget(),
        new RRSetRoutingPolicyLoadBalancerTarget(),
        new RRSetRoutingPolicyLoadBalancerTarget(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->trickleTraffic = 8742.88;
    $request->resourceRecordSet->routingPolicy->wrr = new RRSetRoutingPolicyWrrPolicy();
    $request->resourceRecordSet->routingPolicy->wrr->items = [
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->wrr->kind = 'dolore';
    $request->resourceRecordSet->rrdatas = [
        'illum',
        'sequi',
        'natus',
        'impedit',
    ];
    $request->resourceRecordSet->signatureRrdatas = [
        'voluptatibus',
    ];
    $request->resourceRecordSet->ttl = 347233;
    $request->resourceRecordSet->type = 'nulla';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->clientOperationId = 'doloribus';
    $request->fields = 'iusto';
    $request->key = 'eligendi';
    $request->managedZone = 'ducimus';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'officia';
    $request->quotaUser = 'tempora';
    $request->uploadType = 'ipsam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new DnsResourceRecordSetsCreateSecurity();
    $requestSecurity->option1 = new DnsResourceRecordSetsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourceRecordSets->dnsResourceRecordSetsCreate($request, $requestSecurity);

    if ($response->resourceRecordSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResourceRecordSetsDelete

Deletes a previously created ResourceRecordSet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResourceRecordSetsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'vel';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'magnam';
    $request->clientOperationId = 'ratione';
    $request->fields = 'ex';
    $request->key = 'laudantium';
    $request->managedZone = 'dicta';
    $request->name = 'Elisa Boyle';
    $request->oauthToken = 'excepturi';
    $request->prettyPrint = false;
    $request->project = 'voluptatibus';
    $request->quotaUser = 'nostrum';
    $request->type = 'sapiente';
    $request->uploadType = 'quisquam';
    $request->uploadProtocol = 'saepe';

    $requestSecurity = new DnsResourceRecordSetsDeleteSecurity();
    $requestSecurity->option1 = new DnsResourceRecordSetsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourceRecordSets->dnsResourceRecordSetsDelete($request, $requestSecurity);

    if ($response->resourceRecordSetsDeleteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResourceRecordSetsGet

Fetches the representation of an existing ResourceRecordSet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResourceRecordSetsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'veniam';
    $request->clientOperationId = 'aliquid';
    $request->fields = 'inventore';
    $request->key = 'magnam';
    $request->managedZone = 'ea';
    $request->name = 'Glenn Walter';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'libero';
    $request->type = 'aut';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'deleniti';

    $requestSecurity = new DnsResourceRecordSetsGetSecurity();
    $requestSecurity->option1 = new DnsResourceRecordSetsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourceRecordSets->dnsResourceRecordSetsGet($request, $requestSecurity);

    if ($response->resourceRecordSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResourceRecordSetsList

Enumerates ResourceRecordSets that you have created but not yet deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResourceRecordSetsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'inventore';
    $request->key = 'non';
    $request->managedZone = 'et';
    $request->maxResults = 677412;
    $request->name = 'Clark Franecki';
    $request->oauthToken = 'nobis';
    $request->pageToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'assumenda';
    $request->quotaUser = 'nulla';
    $request->type = 'voluptas';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new DnsResourceRecordSetsListSecurity();
    $requestSecurity->option1 = new DnsResourceRecordSetsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourceRecordSets->dnsResourceRecordSetsList($request, $requestSecurity);

    if ($response->resourceRecordSetsListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsResourceRecordSetsPatch

Applies a partial update to an existing ResourceRecordSet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ResourceRecordSet;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyGeoPolicyGeoPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyHealthCheckTargets;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTarget;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetIpProtocolEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyLoadBalancerTargetLoadBalancerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyPrimaryBackupPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicy;
use \OpenAPI\OpenAPI\Models\Shared\RRSetRoutingPolicyWrrPolicyWrrPolicyItem;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsResourceRecordSetsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsResourceRecordSetsPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->resourceRecordSet = new ResourceRecordSet();
    $request->resourceRecordSet->kind = 'numquam';
    $request->resourceRecordSet->name = 'Ramona Bednar';
    $request->resourceRecordSet->routingPolicy = new RRSetRoutingPolicy();
    $request->resourceRecordSet->routingPolicy->geo = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->geo->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->geo->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->geo->kind = 'eius';
    $request->resourceRecordSet->routingPolicy->kind = 'esse';
    $request->resourceRecordSet->routingPolicy->primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->kind = 'rem';
    $request->resourceRecordSet->routingPolicy->primaryBackup->kind = 'fuga';
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets = new RRSetRoutingPolicyHealthCheckTargets();
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets->internalLoadBalancers = [
        new RRSetRoutingPolicyLoadBalancerTarget(),
        new RRSetRoutingPolicyLoadBalancerTarget(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->trickleTraffic = 6956.26;
    $request->resourceRecordSet->routingPolicy->wrr = new RRSetRoutingPolicyWrrPolicy();
    $request->resourceRecordSet->routingPolicy->wrr->items = [
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->wrr->kind = 'ut';
    $request->resourceRecordSet->rrdatas = [
        'suscipit',
        'assumenda',
    ];
    $request->resourceRecordSet->signatureRrdatas = [
        'praesentium',
    ];
    $request->resourceRecordSet->ttl = 788546;
    $request->resourceRecordSet->type = 'veritatis';
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quidem';
    $request->clientOperationId = 'neque';
    $request->fields = 'quo';
    $request->key = 'illum';
    $request->managedZone = 'quo';
    $request->name = 'Herbert Daugherty V';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'debitis';
    $request->type = 'ipsam';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new DnsResourceRecordSetsPatchSecurity();
    $requestSecurity->option1 = new DnsResourceRecordSetsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourceRecordSets->dnsResourceRecordSetsPatch($request, $requestSecurity);

    if ($response->resourceRecordSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
