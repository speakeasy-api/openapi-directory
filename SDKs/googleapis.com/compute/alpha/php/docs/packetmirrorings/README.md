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
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quae';
    $request->fields = 'distinctio';
    $request->filter = 'maxime';
    $request->includeAllScopes = false;
    $request->key = 'fuga';
    $request->maxResults = 515768;
    $request->oauthToken = 'blanditiis';
    $request->orderBy = 'reiciendis';
    $request->pageToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'dignissimos';
    $request->quotaUser = 'eaque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'labore';
    $request->userIp = 'consectetur';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quisquam';
    $request->fields = 'neque';
    $request->key = 'at';
    $request->oauthToken = 'nulla';
    $request->packetMirroring = 'beatae';
    $request->prettyPrint = false;
    $request->project = 'necessitatibus';
    $request->quotaUser = 'harum';
    $request->region = 'deleniti';
    $request->requestId = 'maiores';
    $request->uploadType = 'odio';
    $request->uploadProtocol = 'tenetur';
    $request->userIp = 'quam';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'hic';
    $request->fields = 'aspernatur';
    $request->key = 'ipsum';
    $request->oauthToken = 'doloribus';
    $request->packetMirroring = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'eaque';
    $request->region = 'error';
    $request->uploadType = 'corporis';
    $request->uploadProtocol = 'totam';
    $request->userIp = 'commodi';

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
    $request->packetMirroring->collectorIlb->canonicalUrl = 'non';
    $request->packetMirroring->collectorIlb->url = 'mollitia';
    $request->packetMirroring->creationTimestamp = 'repudiandae';
    $request->packetMirroring->description = 'odio';
    $request->packetMirroring->enable = PacketMirroringEnableEnum::TRUE;
    $request->packetMirroring->filter = new PacketMirroringFilter();
    $request->packetMirroring->filter->ipProtocols = [
        'soluta',
        'voluptas',
    ];
    $request->packetMirroring->filter->cidrRanges = [
        'reiciendis',
        'officiis',
    ];
    $request->packetMirroring->filter->direction = PacketMirroringFilterDirectionEnum::INGRESS;
    $request->packetMirroring->id = 'tenetur';
    $request->packetMirroring->kind = 'veniam';
    $request->packetMirroring->mirroredResources = new PacketMirroringMirroredResourceInfo();
    $request->packetMirroring->mirroredResources->instances = [
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
    ];
    $request->packetMirroring->mirroredResources->subnetworks = [
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
    ];
    $request->packetMirroring->mirroredResources->tags = [
        'quia',
        'pariatur',
    ];
    $request->packetMirroring->name = 'Dr. Dustin Reilly';
    $request->packetMirroring->network = new PacketMirroringNetworkInfo();
    $request->packetMirroring->network->canonicalUrl = 'eveniet';
    $request->packetMirroring->network->url = 'placeat';
    $request->packetMirroring->priority = 934820;
    $request->packetMirroring->region = 'doloribus';
    $request->packetMirroring->selfLink = 'voluptatibus';
    $request->packetMirroring->selfLinkWithId = 'iusto';
    $request->accessToken = 'quo';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempore';
    $request->fields = 'quae';
    $request->key = 'quis';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'itaque';
    $request->quotaUser = 'occaecati';
    $request->region = 'odit';
    $request->requestId = 'ducimus';
    $request->uploadType = 'corrupti';
    $request->uploadProtocol = 'consequuntur';
    $request->userIp = 'voluptate';

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
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'esse';
    $request->filter = 'laboriosam';
    $request->key = 'laudantium';
    $request->maxResults = 93844;
    $request->oauthToken = 'nihil';
    $request->orderBy = 'labore';
    $request->pageToken = 'laboriosam';
    $request->prettyPrint = false;
    $request->project = 'praesentium';
    $request->quotaUser = 'quae';
    $request->region = 'nisi';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'amet';
    $request->uploadProtocol = 'tenetur';
    $request->userIp = 'ducimus';

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
    $request->packetMirroring1->collectorIlb->canonicalUrl = 'cupiditate';
    $request->packetMirroring1->collectorIlb->url = 'facilis';
    $request->packetMirroring1->creationTimestamp = 'iusto';
    $request->packetMirroring1->description = 'perspiciatis';
    $request->packetMirroring1->enable = PacketMirroringEnableEnum::FALSE;
    $request->packetMirroring1->filter = new PacketMirroringFilter();
    $request->packetMirroring1->filter->ipProtocols = [
        'maxime',
        'quae',
    ];
    $request->packetMirroring1->filter->cidrRanges = [
        'voluptatem',
        'tenetur',
        'mollitia',
    ];
    $request->packetMirroring1->filter->direction = PacketMirroringFilterDirectionEnum::BOTH;
    $request->packetMirroring1->id = 'quidem';
    $request->packetMirroring1->kind = 'soluta';
    $request->packetMirroring1->mirroredResources = new PacketMirroringMirroredResourceInfo();
    $request->packetMirroring1->mirroredResources->instances = [
        new PacketMirroringMirroredResourceInfoInstanceInfo(),
    ];
    $request->packetMirroring1->mirroredResources->subnetworks = [
        new PacketMirroringMirroredResourceInfoSubnetInfo(),
    ];
    $request->packetMirroring1->mirroredResources->tags = [
        'labore',
        'consequatur',
        'voluptates',
    ];
    $request->packetMirroring1->name = 'Krista Goyette';
    $request->packetMirroring1->network = new PacketMirroringNetworkInfo();
    $request->packetMirroring1->network->canonicalUrl = 'aliquid';
    $request->packetMirroring1->network->url = 'quaerat';
    $request->packetMirroring1->priority = 49827;
    $request->packetMirroring1->region = 'nisi';
    $request->packetMirroring1->selfLink = 'eius';
    $request->packetMirroring1->selfLinkWithId = 'consequuntur';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'autem';
    $request->fields = 'nostrum';
    $request->key = 'esse';
    $request->oauthToken = 'nobis';
    $request->packetMirroringPathParameter = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'ab';
    $request->quotaUser = 'culpa';
    $request->region = 'ipsa';
    $request->requestId = 'voluptate';
    $request->uploadType = 'placeat';
    $request->uploadProtocol = 'perferendis';
    $request->userIp = 'rem';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'sequi',
        'iste',
        'magni',
        'inventore',
    ];
    $request->accessToken = 'eligendi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'exercitationem';
    $request->fields = 'reprehenderit';
    $request->key = 'iste';
    $request->oauthToken = 'ratione';
    $request->prettyPrint = false;
    $request->project = 'consequatur';
    $request->quotaUser = 'pariatur';
    $request->region = 'eum';
    $request->resource = 'maiores';
    $request->uploadType = 'sit';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'dolorem';

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
