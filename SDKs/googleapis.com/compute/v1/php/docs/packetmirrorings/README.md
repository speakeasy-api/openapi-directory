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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatem';
    $request->fields = 'voluptatum';
    $request->filter = 'ducimus';
    $request->includeAllScopes = false;
    $request->key = 'possimus';
    $request->maxResults = 599413;
    $request->oauthToken = 'maxime';
    $request->orderBy = 'culpa';
    $request->pageToken = 'deserunt';
    $request->prettyPrint = false;
    $request->project = 'recusandae';
    $request->quotaUser = 'doloremque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'quibusdam';

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
    $request->accessToken = 'voluptate';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'est';
    $request->fields = 'est';
    $request->key = 'placeat';
    $request->oauthToken = 'occaecati';
    $request->packetMirroring = 'nam';
    $request->prettyPrint = false;
    $request->project = 'modi';
    $request->quotaUser = 'minus';
    $request->region = 'id';
    $request->requestId = 'culpa';
    $request->uploadType = 'beatae';
    $request->uploadProtocol = 'quod';
    $request->userIp = 'a';

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
    $request->accessToken = 'sint';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illo';
    $request->fields = 'minima';
    $request->key = 'nulla';
    $request->oauthToken = 'reiciendis';
    $request->packetMirroring = 'molestias';
    $request->prettyPrint = false;
    $request->project = 'ipsa';
    $request->quotaUser = 'amet';
    $request->region = 'natus';
    $request->uploadType = 'aperiam';
    $request->uploadProtocol = 'ducimus';
    $request->userIp = 'doloribus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->packetMirroring = new PacketMirroring();
    $request->packetMirroring->collectorIlb = new PacketMirroringForwardingRuleInfo();
    $request->packetMirroring->collectorIlb->canonicalUrl = 'ducimus';
    $request->packetMirroring->collectorIlb->url = 'deleniti';
    $request->packetMirroring->creationTimestamp = 'dolor';
    $request->packetMirroring->description = 'ab';
    $request->packetMirroring->enable = PacketMirroringEnableEnum::TRUE;
    $request->packetMirroring->filter = new PacketMirroringFilter();
    $request->packetMirroring->filter->ipProtocols = [
        'sequi',
        'fugiat',
        'eius',
    ];
    $request->packetMirroring->filter->cidrRanges = [
        'recusandae',
    ];
    $request->packetMirroring->filter->direction = PacketMirroringFilterDirectionEnum::BOTH;
    $request->packetMirroring->id = 'aliquam';
    $request->packetMirroring->kind = 'similique';
    $request->packetMirroring->mirroredResources = new PacketMirroringMirroredResourceInfo();
    $request->packetMirroring->mirroredResources->instances = [
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
    ];
    $request->packetMirroring->mirroredResources->subnetworks = [
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
    ];
    $request->packetMirroring->mirroredResources->tags = [
        'commodi',
        'commodi',
    ];
    $request->packetMirroring->name = 'Ramona Kub';
    $request->packetMirroring->network = new PacketMirroringNetworkInfo();
    $request->packetMirroring->network->canonicalUrl = 'consequatur';
    $request->packetMirroring->network->url = 'fugit';
    $request->packetMirroring->priority = 213871;
    $request->packetMirroring->region = 'nesciunt';
    $request->packetMirroring->selfLink = 'maxime';
    $request->accessToken = 'inventore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nihil';
    $request->fields = 'vitae';
    $request->key = 'quibusdam';
    $request->oauthToken = 'veniam';
    $request->prettyPrint = false;
    $request->project = 'et';
    $request->quotaUser = 'dolorum';
    $request->region = 'animi';
    $request->requestId = 'mollitia';
    $request->uploadType = 'autem';
    $request->uploadProtocol = 'illum';
    $request->userIp = 'at';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nemo';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quidem';
    $request->fields = 'nulla';
    $request->filter = 'aliquid';
    $request->key = 'eius';
    $request->maxResults = 541948;
    $request->oauthToken = 'reprehenderit';
    $request->orderBy = 'quo';
    $request->pageToken = 'enim';
    $request->prettyPrint = false;
    $request->project = 'reiciendis';
    $request->quotaUser = 'impedit';
    $request->region = 'aspernatur';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'voluptatum';
    $request->userIp = 'ex';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->packetMirroring1 = new PacketMirroring();
    $request->packetMirroring1->collectorIlb = new PacketMirroringForwardingRuleInfo();
    $request->packetMirroring1->collectorIlb->canonicalUrl = 'est';
    $request->packetMirroring1->collectorIlb->url = 'voluptatem';
    $request->packetMirroring1->creationTimestamp = 'aut';
    $request->packetMirroring1->description = 'nobis';
    $request->packetMirroring1->enable = PacketMirroringEnableEnum::TRUE;
    $request->packetMirroring1->filter = new PacketMirroringFilter();
    $request->packetMirroring1->filter->ipProtocols = [
        'autem',
        'perspiciatis',
        'saepe',
        'illo',
    ];
    $request->packetMirroring1->filter->cidrRanges = [
        'quae',
    ];
    $request->packetMirroring1->filter->direction = PacketMirroringFilterDirectionEnum::BOTH;
    $request->packetMirroring1->id = 'enim';
    $request->packetMirroring1->kind = 'ducimus';
    $request->packetMirroring1->mirroredResources = new PacketMirroringMirroredResourceInfo();
    $request->packetMirroring1->mirroredResources->instances = [
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
    ];
    $request->packetMirroring1->mirroredResources->subnetworks = [
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
    ];
    $request->packetMirroring1->mirroredResources->tags = [
        'libero',
    ];
    $request->packetMirroring1->name = 'Blake Koss';
    $request->packetMirroring1->network = new PacketMirroringNetworkInfo();
    $request->packetMirroring1->network->canonicalUrl = 'quibusdam';
    $request->packetMirroring1->network->url = 'accusamus';
    $request->packetMirroring1->priority = 846581;
    $request->packetMirroring1->region = 'blanditiis';
    $request->packetMirroring1->selfLink = 'tempora';
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'enim';
    $request->fields = 'dolorum';
    $request->key = 'aliquam';
    $request->oauthToken = 'beatae';
    $request->packetMirroringPathParameter = 'explicabo';
    $request->prettyPrint = false;
    $request->project = 'nesciunt';
    $request->quotaUser = 'corrupti';
    $request->region = 'officiis';
    $request->requestId = 'inventore';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'in';
    $request->userIp = 'sequi';

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
        'quisquam',
        'qui',
        'suscipit',
    ];
    $request->accessToken = 'officia';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'ratione';
    $request->key = 'expedita';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'provident';
    $request->region = 'dignissimos';
    $request->resource = 'dicta';
    $request->uploadType = 'id';
    $request->uploadProtocol = 'blanditiis';
    $request->userIp = 'repellat';

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
