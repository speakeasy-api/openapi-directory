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
    $request->resourceRecordSet->routingPolicy->geoPolicy = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->geoPolicy->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->geoPolicy->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->geoPolicy->kind = 'quod';
    $request->resourceRecordSet->routingPolicy->kind = 'odio';
    $request->resourceRecordSet->routingPolicy->primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->kind = 'facilis';
    $request->resourceRecordSet->routingPolicy->primaryBackup->kind = 'vero';
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets = new RRSetRoutingPolicyHealthCheckTargets();
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets->internalLoadBalancers = [
        new RRSetRoutingPolicyLoadBalancerTarget(),
        new RRSetRoutingPolicyLoadBalancerTarget(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->trickleTraffic = 2930.2;
    $request->resourceRecordSet->routingPolicy->wrr = new RRSetRoutingPolicyWrrPolicy();
    $request->resourceRecordSet->routingPolicy->wrr->items = [
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->wrr->kind = 'illum';
    $request->resourceRecordSet->routingPolicy->wrrPolicy = new RRSetRoutingPolicyWrrPolicy();
    $request->resourceRecordSet->routingPolicy->wrrPolicy->items = [
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->wrrPolicy->kind = 'natus';
    $request->resourceRecordSet->rrdatas = [
        'aut',
        'voluptatibus',
        'exercitationem',
        'nulla',
    ];
    $request->resourceRecordSet->signatureRrdatas = [
        'porro',
    ];
    $request->resourceRecordSet->ttl = 981830;
    $request->resourceRecordSet->type = 'doloribus';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ducimus';
    $request->clientOperationId = 'alias';
    $request->fields = 'officia';
    $request->key = 'tempora';
    $request->managedZone = 'ipsam';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'vel';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'magnam';

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
    $request->accessToken = 'ex';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dicta';
    $request->clientOperationId = 'dolor';
    $request->fields = 'maiores';
    $request->key = 'quasi';
    $request->managedZone = 'ex';
    $request->name = 'Marshall Wiza';
    $request->oauthToken = 'quisquam';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'ea';
    $request->type = 'impedit';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'veniam';

    $requestSecurity = new DnsResourceRecordSetsDeleteSecurity();
    $requestSecurity->option1 = new DnsResourceRecordSetsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->resourceRecordSets->dnsResourceRecordSetsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
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
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->clientOperationId = 'quo';
    $request->fields = 'consectetur';
    $request->key = 'recusandae';
    $request->managedZone = 'aspernatur';
    $request->name = 'Shirley Wilderman Jr.';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->project = 'impedit';
    $request->quotaUser = 'aliquam';
    $request->type = 'fugit';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'inventore';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'et';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'laborum';
    $request->fields = 'placeat';
    $request->key = 'velit';
    $request->managedZone = 'eum';
    $request->maxResults = 420539;
    $request->name = 'Clifton Simonis';
    $request->oauthToken = 'libero';
    $request->pageToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'tempora';
    $request->quotaUser = 'numquam';
    $request->type = 'explicabo';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'ipsa';

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
    $request->resourceRecordSet->kind = 'magnam';
    $request->resourceRecordSet->name = 'Esther Koch';
    $request->resourceRecordSet->routingPolicy = new RRSetRoutingPolicy();
    $request->resourceRecordSet->routingPolicy->geo = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->geo->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->geo->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->geo->kind = 'reprehenderit';
    $request->resourceRecordSet->routingPolicy->geoPolicy = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->geoPolicy->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->geoPolicy->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->geoPolicy->kind = 'fugiat';
    $request->resourceRecordSet->routingPolicy->kind = 'ut';
    $request->resourceRecordSet->routingPolicy->primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->kind = 'suscipit';
    $request->resourceRecordSet->routingPolicy->primaryBackup->kind = 'assumenda';
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets = new RRSetRoutingPolicyHealthCheckTargets();
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets->internalLoadBalancers = [
        new RRSetRoutingPolicyLoadBalancerTarget(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->trickleTraffic = 5093.42;
    $request->resourceRecordSet->routingPolicy->wrr = new RRSetRoutingPolicyWrrPolicy();
    $request->resourceRecordSet->routingPolicy->wrr->items = [
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->wrr->kind = 'veritatis';
    $request->resourceRecordSet->routingPolicy->wrrPolicy = new RRSetRoutingPolicyWrrPolicy();
    $request->resourceRecordSet->routingPolicy->wrrPolicy->items = [
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->wrrPolicy->kind = 'id';
    $request->resourceRecordSet->rrdatas = [
        'neque',
        'quo',
        'illum',
    ];
    $request->resourceRecordSet->signatureRrdatas = [
        'fuga',
        'eius',
        'eos',
        'voluptas',
    ];
    $request->resourceRecordSet->ttl = 69859;
    $request->resourceRecordSet->type = 'cupiditate';
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::JSON;
    $request->callback = 'debitis';
    $request->clientOperationId = 'ipsam';
    $request->fields = 'aspernatur';
    $request->key = 'sequi';
    $request->managedZone = 'quo';
    $request->name = 'Sophie Bayer';
    $request->oauthToken = 'dignissimos';
    $request->prettyPrint = false;
    $request->project = 'inventore';
    $request->quotaUser = 'nihil';
    $request->type = 'totam';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'aliquam';

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
