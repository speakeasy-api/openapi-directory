# changes

### Available Operations

* [dnsChangesCreate](#dnschangescreate) - Atomically updates the ResourceRecordSet collection.
* [dnsChangesGet](#dnschangesget) - Fetches the representation of an existing Change.
* [dnsChangesList](#dnschangeslist) - Enumerates Changes to a ResourceRecordSet collection.

## dnsChangesCreate

Atomically updates the ResourceRecordSet collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Change;
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
use \OpenAPI\OpenAPI\Models\Shared\ChangeStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsChangesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->change = new Change();
    $request->change->additions = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->change->deletions = [
        new ResourceRecordSet(),
        new ResourceRecordSet(),
        new ResourceRecordSet(),
    ];
    $request->change->id = '28fc8167-42cb-4739-a059-29396fea7596';
    $request->change->isServing = false;
    $request->change->kind = 'saepe';
    $request->change->startTime = 'quidem';
    $request->change->status = ChangeStatusEnum::PENDING;
    $request->accessToken = 'ipsa';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->clientOperationId = 'mollitia';
    $request->fields = 'laborum';
    $request->key = 'dolores';
    $request->managedZone = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'nobis';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new DnsChangesCreateSecurity();
    $requestSecurity->option1 = new DnsChangesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changes->dnsChangesCreate($request, $requestSecurity);

    if ($response->change !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsChangesGet

Fetches the representation of an existing Change.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesGetSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesGetSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsChangesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'minima';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'accusantium';
    $request->changeId = 'iure';
    $request->clientOperationId = 'culpa';
    $request->fields = 'doloribus';
    $request->key = 'sapiente';
    $request->managedZone = 'architecto';
    $request->oauthToken = 'mollitia';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'culpa';
    $request->uploadType = 'consequuntur';
    $request->uploadProtocol = 'repellat';

    $requestSecurity = new DnsChangesGetSecurity();
    $requestSecurity->option1 = new DnsChangesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changes->dnsChangesGet($request, $requestSecurity);

    if ($response->change !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## dnsChangesList

Enumerates Changes to a ResourceRecordSet collection.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesListSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\DnsChangesListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DnsChangesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'occaecati';
    $request->alt = AltEnum::JSON;
    $request->callback = 'commodi';
    $request->fields = 'quam';
    $request->key = 'molestiae';
    $request->managedZone = 'velit';
    $request->maxResults = 623510;
    $request->oauthToken = 'quia';
    $request->pageToken = 'quis';
    $request->prettyPrint = false;
    $request->project = 'vitae';
    $request->quotaUser = 'laborum';
    $request->sortBy = DnsChangesListSortByEnum::CHANGE_SEQUENCE;
    $request->sortOrder = 'animi';
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new DnsChangesListSecurity();
    $requestSecurity->option1 = new DnsChangesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->changes->dnsChangesList($request, $requestSecurity);

    if ($response->changesListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
