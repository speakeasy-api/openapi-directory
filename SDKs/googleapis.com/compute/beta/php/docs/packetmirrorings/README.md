# packetMirrorings

### Available Operations

* [computePacketMirroringsAggregatedList](#computepacketmirroringsaggregatedlist) - Retrieves an aggregated list of packetMirrorings.
* [computePacketMirroringsDelete](#computepacketmirroringsdelete) - Deletes the specified PacketMirroring resource.
* [computePacketMirroringsGet](#computepacketmirroringsget) - Returns the specified PacketMirroring resource.
* [computePacketMirroringsInsert](#computepacketmirroringsinsert) - Creates a PacketMirroring resource in the specified project and region using the data included in the request.
* [computePacketMirroringsList](#computepacketmirroringslist) - Retrieves a list of PacketMirroring resources available to the specified project and region.
* [computePacketMirroringsPatch](#computepacketmirroringspatch) - Patches the specified PacketMirroring resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.
* [computePacketMirroringsTestIamPermissions](#computepacketmirroringstestiampermissions) - Returns permissions that a caller has on the specified resource.

## computePacketMirroringsAggregatedList

Retrieves an aggregated list of packetMirrorings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePacketMirroringsAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'enim';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'beatae';
    $request->filter = 'repudiandae';
    $request->includeAllScopes = false;
    $request->key = 'ex';
    $request->maxResults = 404525;
    $request->oauthToken = 'harum';
    $request->orderBy = 'cum';
    $request->pageToken = 'non';
    $request->prettyPrint = false;
    $request->project = 'quia';
    $request->quotaUser = 'laboriosam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'molestias';
    $request->userIp = 'dignissimos';

    $requestSecurity = new ComputePacketMirroringsAggregatedListSecurity();
    $requestSecurity->option1 = new ComputePacketMirroringsAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->packetMirrorings->computePacketMirroringsAggregatedList($request, $requestSecurity);

    if ($response->packetMirroringAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePacketMirroringsDelete

Deletes the specified PacketMirroring resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePacketMirroringsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorum';
    $request->fields = 'qui';
    $request->key = 'nulla';
    $request->oauthToken = 'velit';
    $request->packetMirroring = 'amet';
    $request->prettyPrint = false;
    $request->project = 'ipsam';
    $request->quotaUser = 'suscipit';
    $request->region = 'odio';
    $request->requestId = 'ipsa';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'error';
    $request->userIp = 'velit';

    $requestSecurity = new ComputePacketMirroringsDeleteSecurity();
    $requestSecurity->option1 = new ComputePacketMirroringsDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->packetMirrorings->computePacketMirroringsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePacketMirroringsGet

Returns the specified PacketMirroring resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePacketMirroringsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'recusandae';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'reiciendis';
    $request->key = 'ad';
    $request->oauthToken = 'perspiciatis';
    $request->packetMirroring = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'dolorem';
    $request->quotaUser = 'ipsam';
    $request->region = 'voluptatum';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'officia';
    $request->userIp = 'earum';

    $requestSecurity = new ComputePacketMirroringsGetSecurity();
    $requestSecurity->option1 = new ComputePacketMirroringsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->packetMirrorings->computePacketMirroringsGet($request, $requestSecurity);

    if ($response->packetMirroring !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePacketMirroringsInsert

Creates a PacketMirroring resource in the specified project and region using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroring;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringForwardingRuleInfo;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringFilter;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringFilterDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringMirroredResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringMirroredResourceInfoInstanceInfo;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringMirroredResourceInfoSubnetInfo;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringNetworkInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePacketMirroringsInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->packetMirroring = new PacketMirroring();
    $request->packetMirroring->collectorIlb = new PacketMirroringForwardingRuleInfo();
    $request->packetMirroring->collectorIlb->canonicalUrl = 'quisquam';
    $request->packetMirroring->collectorIlb->url = 'officia';
    $request->packetMirroring->creationTimestamp = 'officiis';
    $request->packetMirroring->description = 'ratione';
    $request->packetMirroring->enable = PacketMirroringEnableEnum::FALSE;
    $request->packetMirroring->filter = new PacketMirroringFilter();
    $request->packetMirroring->filter->ipProtocols = [
        'deserunt',
    ];
    $request->packetMirroring->filter->cidrRanges = [
        'inventore',
    ];
    $request->packetMirroring->filter->direction = PacketMirroringFilterDirectionEnum::INGRESS;
    $request->packetMirroring->id = 'maiores';
    $request->packetMirroring->kind = 'ducimus';
    $request->packetMirroring->mirroredResources = new PacketMirroringMirroredResourceInfo();
    $request->packetMirroring->mirroredResources->instances = [
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
    ];
    $request->packetMirroring->mirroredResources->subnetworks = [
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
    ];
    $request->packetMirroring->mirroredResources->tags = [
        'quod',
    ];
    $request->packetMirroring->name = 'Virgil Koepp III';
    $request->packetMirroring->network = new PacketMirroringNetworkInfo();
    $request->packetMirroring->network->canonicalUrl = 'maxime';
    $request->packetMirroring->network->url = 'deleniti';
    $request->packetMirroring->priority = 35254;
    $request->packetMirroring->region = 'sed';
    $request->packetMirroring->selfLink = 'minus';
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptates';
    $request->fields = 'alias';
    $request->key = 'placeat';
    $request->oauthToken = 'in';
    $request->prettyPrint = false;
    $request->project = 'possimus';
    $request->quotaUser = 'iste';
    $request->region = 'assumenda';
    $request->requestId = 'neque';
    $request->uploadType = 'dolores';
    $request->uploadProtocol = 'consectetur';
    $request->userIp = 'repellat';

    $requestSecurity = new ComputePacketMirroringsInsertSecurity();
    $requestSecurity->option1 = new ComputePacketMirroringsInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->packetMirrorings->computePacketMirroringsInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePacketMirroringsList

Retrieves a list of PacketMirroring resources available to the specified project and region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePacketMirroringsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'animi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'autem';
    $request->fields = 'sequi';
    $request->filter = 'officiis';
    $request->key = 'nulla';
    $request->maxResults = 582351;
    $request->oauthToken = 'optio';
    $request->orderBy = 'asperiores';
    $request->pageToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'nobis';
    $request->quotaUser = 'quas';
    $request->region = 'nemo';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'soluta';
    $request->userIp = 'quo';

    $requestSecurity = new ComputePacketMirroringsListSecurity();
    $requestSecurity->option1 = new ComputePacketMirroringsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->packetMirrorings->computePacketMirroringsList($request, $requestSecurity);

    if ($response->packetMirroringList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePacketMirroringsPatch

Patches the specified PacketMirroring resource with the data included in the request. This method supports PATCH semantics and uses JSON merge patch format and processing rules.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroring;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringForwardingRuleInfo;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringEnableEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringFilter;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringFilterDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringMirroredResourceInfo;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringMirroredResourceInfoInstanceInfo;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringMirroredResourceInfoSubnetInfo;
use \OpenAPI\OpenAPI\Models\Shared\PacketMirroringNetworkInfo;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePacketMirroringsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->packetMirroring1 = new PacketMirroring();
    $request->packetMirroring1->collectorIlb = new PacketMirroringForwardingRuleInfo();
    $request->packetMirroring1->collectorIlb->canonicalUrl = 'id';
    $request->packetMirroring1->collectorIlb->url = 'quaerat';
    $request->packetMirroring1->creationTimestamp = 'inventore';
    $request->packetMirroring1->description = 'accusamus';
    $request->packetMirroring1->enable = PacketMirroringEnableEnum::TRUE;
    $request->packetMirroring1->filter = new PacketMirroringFilter();
    $request->packetMirroring1->filter->ipProtocols = [
        'numquam',
    ];
    $request->packetMirroring1->filter->cidrRanges = [
        'numquam',
        'culpa',
    ];
    $request->packetMirroring1->filter->direction = PacketMirroringFilterDirectionEnum::BOTH;
    $request->packetMirroring1->id = 'iusto';
    $request->packetMirroring1->kind = 'voluptatibus';
    $request->packetMirroring1->mirroredResources = new PacketMirroringMirroredResourceInfo();
    $request->packetMirroring1->mirroredResources->instances = [
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
    ];
    $request->packetMirroring1->mirroredResources->subnetworks = [
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
    ];
    $request->packetMirroring1->mirroredResources->tags = [
        'veritatis',
        'inventore',
        'autem',
        'optio',
    ];
    $request->packetMirroring1->name = 'Bryant Heller';
    $request->packetMirroring1->network = new PacketMirroringNetworkInfo();
    $request->packetMirroring1->network->canonicalUrl = 'numquam';
    $request->packetMirroring1->network->url = 'officia';
    $request->packetMirroring1->priority = 441358;
    $request->packetMirroring1->region = 'nemo';
    $request->packetMirroring1->selfLink = 'nisi';
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->fields = 'dolorem';
    $request->key = 'placeat';
    $request->oauthToken = 'dignissimos';
    $request->packetMirroringPathParameter = 'quibusdam';
    $request->prettyPrint = false;
    $request->project = 'placeat';
    $request->quotaUser = 'natus';
    $request->region = 'accusamus';
    $request->requestId = 'repellat';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'doloribus';
    $request->userIp = 'labore';

    $requestSecurity = new ComputePacketMirroringsPatchSecurity();
    $requestSecurity->option1 = new ComputePacketMirroringsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->packetMirrorings->computePacketMirroringsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computePacketMirroringsTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputePacketMirroringsTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputePacketMirroringsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'impedit',
        'autem',
        'qui',
        'consectetur',
    ];
    $request->accessToken = 'ea';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consequatur';
    $request->fields = 'delectus';
    $request->key = 'nesciunt';
    $request->oauthToken = 'et';
    $request->prettyPrint = false;
    $request->project = 'dolor';
    $request->quotaUser = 'voluptatum';
    $request->region = 'doloribus';
    $request->resource = 'nesciunt';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'at';
    $request->userIp = 'tenetur';

    $requestSecurity = new ComputePacketMirroringsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputePacketMirroringsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->packetMirrorings->computePacketMirroringsTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
