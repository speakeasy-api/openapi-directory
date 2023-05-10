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
    ];
    $request->change->id = '8fc81674-2cb7-4392-8592-9396fea7596e';
    $request->change->isServing = false;
    $request->change->kind = 'quidem';
    $request->change->startTime = 'architecto';
    $request->change->status = ChangeStatusEnum::PENDING;
    $request->accessToken = 'reiciendis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->clientOperationId = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->location = 'corporis';
    $request->managedZone = 'explicabo';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->project = 'enim';
    $request->quotaUser = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'culpa';
    $request->changeId = 'doloribus';
    $request->clientOperationId = 'sapiente';
    $request->fields = 'architecto';
    $request->key = 'mollitia';
    $request->location = 'dolorem';
    $request->managedZone = 'culpa';
    $request->oauthToken = 'consequuntur';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'numquam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->fields = 'error';
    $request->key = 'quia';
    $request->location = 'quis';
    $request->managedZone = 'vitae';
    $request->maxResults = 674752;
    $request->oauthToken = 'animi';
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'odit';
    $request->quotaUser = 'quo';
    $request->sortBy = DnsChangesListSortByEnum::CHANGE_SEQUENCE;
    $request->sortOrder = 'sequi';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'ipsam';

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
