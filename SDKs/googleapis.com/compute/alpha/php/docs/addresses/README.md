# addresses

### Available Operations

* [computeAddressesAggregatedList](#computeaddressesaggregatedlist) - Retrieves an aggregated list of addresses.
* [computeAddressesDelete](#computeaddressesdelete) - Deletes the specified address resource.
* [computeAddressesGet](#computeaddressesget) - Returns the specified address resource.
* [computeAddressesInsert](#computeaddressesinsert) - Creates an address resource in the specified project by using the data included in the request.
* [computeAddressesList](#computeaddresseslist) - Retrieves a list of addresses contained within the specified region.
* [computeAddressesMove](#computeaddressesmove) - Moves the specified address resource.
* [computeAddressesSetLabels](#computeaddressessetlabels) - Sets the labels on an Address. To learn more about labels, read the Labeling Resources documentation.
* [computeAddressesTestIamPermissions](#computeaddressestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeAddressesAggregatedList

Retrieves an aggregated list of addresses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesAggregatedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesAggregatedListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesAggregatedListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesAggregatedListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesAggregatedListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAddressesAggregatedListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::JSON;
    $request->callback = 'excepturi';
    $request->fields = 'aspernatur';
    $request->filter = 'perferendis';
    $request->includeAllScopes = false;
    $request->key = 'ad';
    $request->maxResults = 617636;
    $request->oauthToken = 'sed';
    $request->orderBy = 'iste';
    $request->pageToken = 'dolor';
    $request->prettyPrint = false;
    $request->project = 'natus';
    $request->quotaUser = 'laboriosam';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'hic';
    $request->uploadProtocol = 'saepe';
    $request->userIp = 'fuga';

    $requestSecurity = new ComputeAddressesAggregatedListSecurity();
    $requestSecurity->option1 = new ComputeAddressesAggregatedListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->addresses->computeAddressesAggregatedList($request, $requestSecurity);

    if ($response->addressAggregatedList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAddressesDelete

Deletes the specified address resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAddressesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->address = '4960 Waino Point';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'laborum';
    $request->fields = 'dolores';
    $request->key = 'dolorem';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->project = 'explicabo';
    $request->quotaUser = 'nobis';
    $request->region = 'enim';
    $request->requestId = 'omnis';
    $request->uploadType = 'nemo';
    $request->uploadProtocol = 'minima';
    $request->userIp = 'excepturi';

    $requestSecurity = new ComputeAddressesDeleteSecurity();
    $requestSecurity->option1 = new ComputeAddressesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->addresses->computeAddressesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAddressesGet

Returns the specified address resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAddressesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'iure';
    $request->address = '9916 Lorine Crossing';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'mollitia';
    $request->fields = 'occaecati';
    $request->key = 'numquam';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->project = 'quam';
    $request->quotaUser = 'molestiae';
    $request->region = 'velit';
    $request->uploadType = 'error';
    $request->uploadProtocol = 'quia';
    $request->userIp = 'quis';

    $requestSecurity = new ComputeAddressesGetSecurity();
    $requestSecurity->option1 = new ComputeAddressesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->addresses->computeAddressesGet($request, $requestSecurity);

    if ($response->address !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAddressesInsert

Creates an address resource in the specified project by using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressIpv6EndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAddressesInsertRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->address = new Address();
    $request->address->address = '631 Dietrich Villages';
    $request->address->addressType = AddressAddressTypeEnum::EXTERNAL;
    $request->address->creationTimestamp = 'id';
    $request->address->description = 'possimus';
    $request->address->id = 'aut';
    $request->address->ipVersion = AddressIpVersionEnum::IPV4;
    $request->address->ipv6EndpointType = AddressIpv6EndpointTypeEnum::VM;
    $request->address->kind = 'temporibus';
    $request->address->labelFingerprint = 'laborum';
    $request->address->labels = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->address->name = 'Jessie Langosh V';
    $request->address->network = 'voluptate';
    $request->address->networkTier = AddressNetworkTierEnum::STANDARD;
    $request->address->prefixLength = 19987;
    $request->address->purpose = AddressPurposeEnum::DNS_RESOLVER;
    $request->address->region = 'reprehenderit';
    $request->address->selfLink = 'ut';
    $request->address->selfLinkWithId = 'maiores';
    $request->address->status = AddressStatusEnum::IN_USE;
    $request->address->subnetwork = 'corporis';
    $request->address->users = [
        'iusto',
        'dicta',
    ];
    $request->accessToken = 'harum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'accusamus';
    $request->fields = 'commodi';
    $request->key = 'repudiandae';
    $request->oauthToken = 'quae';
    $request->prettyPrint = false;
    $request->project = 'ipsum';
    $request->quotaUser = 'quidem';
    $request->region = 'molestias';
    $request->requestId = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';
    $request->userIp = 'praesentium';

    $requestSecurity = new ComputeAddressesInsertSecurity();
    $requestSecurity->option1 = new ComputeAddressesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->addresses->computeAddressesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAddressesList

Retrieves a list of addresses contained within the specified region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAddressesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptates';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repudiandae';
    $request->fields = 'sint';
    $request->filter = 'veritatis';
    $request->key = 'itaque';
    $request->maxResults = 277718;
    $request->oauthToken = 'enim';
    $request->orderBy = 'consequatur';
    $request->pageToken = 'est';
    $request->prettyPrint = false;
    $request->project = 'quibusdam';
    $request->quotaUser = 'explicabo';
    $request->region = 'deserunt';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'quibusdam';
    $request->userIp = 'labore';

    $requestSecurity = new ComputeAddressesListSecurity();
    $requestSecurity->option1 = new ComputeAddressesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->addresses->computeAddressesList($request, $requestSecurity);

    if ($response->addressList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAddressesMove

Moves the specified address resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionAddressesMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesMoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesMoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesMoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAddressesMoveRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->regionAddressesMoveRequest = new RegionAddressesMoveRequest();
    $request->regionAddressesMoveRequest->description = 'qui';
    $request->regionAddressesMoveRequest->destinationAddress = 'aliquid';
    $request->accessToken = 'cupiditate';
    $request->address = '0183 Caden Port';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempora';
    $request->fields = 'facilis';
    $request->key = 'tempore';
    $request->oauthToken = 'labore';
    $request->prettyPrint = false;
    $request->project = 'delectus';
    $request->quotaUser = 'eum';
    $request->region = 'non';
    $request->requestId = 'eligendi';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'aliquid';
    $request->userIp = 'provident';

    $requestSecurity = new ComputeAddressesMoveSecurity();
    $requestSecurity->option1 = new ComputeAddressesMoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->addresses->computeAddressesMove($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAddressesSetLabels

Sets the labels on an Address. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegionSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAddressesSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->regionSetLabelsRequest = new RegionSetLabelsRequest();
    $request->regionSetLabelsRequest->labelFingerprint = 'sint';
    $request->regionSetLabelsRequest->labels = [
        'dolor' => 'debitis',
        'a' => 'dolorum',
        'in' => 'in',
    ];
    $request->accessToken = 'illum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'rerum';
    $request->fields = 'dicta';
    $request->key = 'magnam';
    $request->oauthToken = 'cumque';
    $request->prettyPrint = false;
    $request->project = 'facere';
    $request->quotaUser = 'ea';
    $request->region = 'aliquid';
    $request->requestId = 'laborum';
    $request->resource = 'accusamus';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'occaecati';
    $request->userIp = 'enim';

    $requestSecurity = new ComputeAddressesSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeAddressesSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->addresses->computeAddressesSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeAddressesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeAddressesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeAddressesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'quidem',
        'provident',
        'nam',
        'id',
    ];
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'amet';
    $request->key = 'deserunt';
    $request->oauthToken = 'nisi';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'natus';
    $request->region = 'omnis';
    $request->resource = 'molestiae';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'nihil';
    $request->userIp = 'magnam';

    $requestSecurity = new ComputeAddressesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeAddressesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->addresses->computeAddressesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
