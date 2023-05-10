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
    $request->resourceRecordSet->kind = 'ipsam';
    $request->resourceRecordSet->name = 'Judy Keebler';
    $request->resourceRecordSet->routingPolicy = new RRSetRoutingPolicy();
    $request->resourceRecordSet->routingPolicy->geo = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->geo->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->geo->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->geo->kind = 'ex';
    $request->resourceRecordSet->routingPolicy->kind = 'laudantium';
    $request->resourceRecordSet->routingPolicy->primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->kind = 'dolor';
    $request->resourceRecordSet->routingPolicy->primaryBackup->kind = 'maiores';
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets = new RRSetRoutingPolicyHealthCheckTargets();
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets->internalLoadBalancers = [
        new RRSetRoutingPolicyLoadBalancerTarget(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->trickleTraffic = 4061.2;
    $request->resourceRecordSet->routingPolicy->wrr = new RRSetRoutingPolicyWrrPolicy();
    $request->resourceRecordSet->routingPolicy->wrr->items = [
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->wrr->kind = 'excepturi';
    $request->resourceRecordSet->rrdatas = [
        'nostrum',
        'sapiente',
        'quisquam',
        'saepe',
    ];
    $request->resourceRecordSet->signatureRrdatas = [
        'impedit',
        'corporis',
    ];
    $request->resourceRecordSet->ttl = 333145;
    $request->resourceRecordSet->type = 'aliquid';
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ea';
    $request->clientOperationId = 'quo';
    $request->fields = 'consectetur';
    $request->key = 'recusandae';
    $request->location = 'aspernatur';
    $request->managedZone = 'minima';
    $request->oauthToken = 'eaque';
    $request->prettyPrint = false;
    $request->project = 'a';
    $request->quotaUser = 'libero';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'aut';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->clientOperationId = 'accusamus';
    $request->fields = 'inventore';
    $request->key = 'non';
    $request->location = 'et';
    $request->managedZone = 'dolorum';
    $request->name = 'Clark Franecki';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'quas';
    $request->quotaUser = 'assumenda';
    $request->type = 'nulla';
    $request->uploadType = 'voluptas';
    $request->uploadProtocol = 'libero';

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
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::JSON;
    $request->callback = 'explicabo';
    $request->clientOperationId = 'provident';
    $request->fields = 'ipsa';
    $request->key = 'molestiae';
    $request->location = 'magnam';
    $request->managedZone = 'odio';
    $request->name = 'Joy Klocko';
    $request->oauthToken = 'reprehenderit';
    $request->prettyPrint = false;
    $request->project = 'quidem';
    $request->quotaUser = 'fugiat';
    $request->type = 'ut';
    $request->uploadType = 'eum';
    $request->uploadProtocol = 'suscipit';

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
    $request->accessToken = 'eos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quisquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->location = 'id';
    $request->managedZone = 'quidem';
    $request->maxResults = 206594;
    $request->name = 'Dallas Sanford';
    $request->oauthToken = 'eos';
    $request->pageToken = 'voluptas';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'cupiditate';
    $request->type = 'consequatur';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'debitis';

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
    $request->resourceRecordSet->kind = 'aspernatur';
    $request->resourceRecordSet->name = 'Angelica Koelpin MD';
    $request->resourceRecordSet->routingPolicy = new RRSetRoutingPolicy();
    $request->resourceRecordSet->routingPolicy->geo = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->geo->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->geo->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->geo->kind = 'dignissimos';
    $request->resourceRecordSet->routingPolicy->kind = 'inventore';
    $request->resourceRecordSet->routingPolicy->primaryBackup = new RRSetRoutingPolicyPrimaryBackupPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets = new RRSetRoutingPolicyGeoPolicy();
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->enableFencing = false;
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->items = [
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
        new RRSetRoutingPolicyGeoPolicyGeoPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->backupGeoTargets->kind = 'totam';
    $request->resourceRecordSet->routingPolicy->primaryBackup->kind = 'accusamus';
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets = new RRSetRoutingPolicyHealthCheckTargets();
    $request->resourceRecordSet->routingPolicy->primaryBackup->primaryTargets->internalLoadBalancers = [
        new RRSetRoutingPolicyLoadBalancerTarget(),
        new RRSetRoutingPolicyLoadBalancerTarget(),
    ];
    $request->resourceRecordSet->routingPolicy->primaryBackup->trickleTraffic = 4884.1;
    $request->resourceRecordSet->routingPolicy->wrr = new RRSetRoutingPolicyWrrPolicy();
    $request->resourceRecordSet->routingPolicy->wrr->items = [
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
        new RRSetRoutingPolicyWrrPolicyWrrPolicyItem(),
    ];
    $request->resourceRecordSet->routingPolicy->wrr->kind = 'commodi';
    $request->resourceRecordSet->rrdatas = [
        'dolores',
        'deserunt',
        'molestiae',
        'accusantium',
    ];
    $request->resourceRecordSet->signatureRrdatas = [
        'eum',
        'quas',
        'praesentium',
        'consequuntur',
    ];
    $request->resourceRecordSet->ttl = 536178;
    $request->resourceRecordSet->type = 'fugit';
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->clientOperationId = 'atque';
    $request->fields = 'explicabo';
    $request->key = 'minima';
    $request->location = 'nisi';
    $request->managedZone = 'fugit';
    $request->name = 'Eugene Dibbert';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'et';
    $request->type = 'esse';
    $request->uploadType = 'eveniet';
    $request->uploadProtocol = 'accusamus';

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
