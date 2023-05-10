# addresses

### Available Operations

* [computeAddressesAggregatedList](#computeaddressesaggregatedlist) - Retrieves an aggregated list of addresses.
* [computeAddressesDelete](#computeaddressesdelete) - Deletes the specified address resource.
* [computeAddressesGet](#computeaddressesget) - Returns the specified address resource.
* [computeAddressesInsert](#computeaddressesinsert) - Creates an address resource in the specified project by using the data included in the request.
* [computeAddressesList](#computeaddresseslist) - Retrieves a list of addresses contained within the specified region.
* [computeAddressesMove](#computeaddressesmove) - Moves the specified address resource.
* [computeAddressesSetLabels](#computeaddressessetlabels) - Sets the labels on an Address. To learn more about labels, read the Labeling Resources documentation.

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
    $request->address->addressType = AddressAddressTypeEnum::INTERNAL;
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
    $request->address->status = AddressStatusEnum::RESERVING;
    $request->address->subnetwork = 'dicta';
    $request->address->users = [
        'dolore',
        'iusto',
    ];
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'enim';
    $request->fields = 'accusamus';
    $request->key = 'commodi';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'quae';
    $request->quotaUser = 'ipsum';
    $request->region = 'quidem';
    $request->requestId = 'molestias';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'pariatur';
    $request->userIp = 'modi';

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
    $request->accessToken = 'rem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quasi';
    $request->fields = 'repudiandae';
    $request->filter = 'sint';
    $request->key = 'veritatis';
    $request->maxResults = 929297;
    $request->oauthToken = 'incidunt';
    $request->orderBy = 'enim';
    $request->pageToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'est';
    $request->quotaUser = 'quibusdam';
    $request->region = 'explicabo';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'deserunt';
    $request->uploadProtocol = 'distinctio';
    $request->userIp = 'quibusdam';

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
    $request->regionAddressesMoveRequest->description = 'modi';
    $request->regionAddressesMoveRequest->destinationAddress = 'qui';
    $request->accessToken = 'aliquid';
    $request->address = '5018 Abigale Creek';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'excepturi';
    $request->fields = 'tempora';
    $request->key = 'facilis';
    $request->oauthToken = 'tempore';
    $request->prettyPrint = false;
    $request->project = 'labore';
    $request->quotaUser = 'delectus';
    $request->region = 'eum';
    $request->requestId = 'non';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sint';
    $request->userIp = 'aliquid';

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
    $request->regionSetLabelsRequest->labelFingerprint = 'necessitatibus';
    $request->regionSetLabelsRequest->labels = [
        'officia' => 'dolor',
        'debitis' => 'a',
        'dolorum' => 'in',
    ];
    $request->accessToken = 'in';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'maiores';
    $request->fields = 'rerum';
    $request->key = 'dicta';
    $request->oauthToken = 'magnam';
    $request->prettyPrint = false;
    $request->project = 'cumque';
    $request->quotaUser = 'facere';
    $request->region = 'ea';
    $request->requestId = 'aliquid';
    $request->resource = 'laborum';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'non';
    $request->userIp = 'occaecati';

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
