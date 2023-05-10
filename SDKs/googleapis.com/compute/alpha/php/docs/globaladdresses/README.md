# globalAddresses

### Available Operations

* [computeGlobalAddressesDelete](#computeglobaladdressesdelete) - Deletes the specified address resource.
* [computeGlobalAddressesGet](#computeglobaladdressesget) - Returns the specified address resource.
* [computeGlobalAddressesGetOwnerInstance](#computeglobaladdressesgetownerinstance) - Find owner instance from given ip address
* [computeGlobalAddressesInsert](#computeglobaladdressesinsert) - Creates an address resource in the specified project by using the data included in the request.
* [computeGlobalAddressesList](#computeglobaladdresseslist) - Retrieves a list of global addresses.
* [computeGlobalAddressesMove](#computeglobaladdressesmove) - Moves the specified address resource from one project to another project.
* [computeGlobalAddressesSetLabels](#computeglobaladdressessetlabels) - Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling Resources documentation.
* [computeGlobalAddressesTestIamPermissions](#computeglobaladdressestestiampermissions) - Returns permissions that a caller has on the specified resource.

## computeGlobalAddressesDelete

Deletes the specified address resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesDeleteSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesDeleteSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesDeleteSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalAddressesDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'corporis';
    $request->address = '185 Lubowitz Corners';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsum';
    $request->fields = 'consequatur';
    $request->key = 'soluta';
    $request->oauthToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->project = 'sequi';
    $request->quotaUser = 'recusandae';
    $request->requestId = 'labore';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'magni';
    $request->userIp = 'aperiam';

    $requestSecurity = new ComputeGlobalAddressesDeleteSecurity();
    $requestSecurity->option1 = new ComputeGlobalAddressesDeleteSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalAddresses->computeGlobalAddressesDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalAddressesGet

Returns the specified address resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalAddressesGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'illum';
    $request->address = '1133 Herta Glen';
    $request->alt = AltEnum::JSON;
    $request->callback = 'vel';
    $request->fields = 'laboriosam';
    $request->key = 'quaerat';
    $request->oauthToken = 'quasi';
    $request->prettyPrint = false;
    $request->project = 'rem';
    $request->quotaUser = 'dignissimos';
    $request->uploadType = 'doloremque';
    $request->uploadProtocol = 'assumenda';
    $request->userIp = 'provident';

    $requestSecurity = new ComputeGlobalAddressesGetSecurity();
    $requestSecurity->option1 = new ComputeGlobalAddressesGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalAddresses->computeGlobalAddressesGet($request, $requestSecurity);

    if ($response->address !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalAddressesGetOwnerInstance

Find owner instance from given ip address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetOwnerInstanceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetOwnerInstanceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetOwnerInstanceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetOwnerInstanceSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesGetOwnerInstanceSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalAddressesGetOwnerInstanceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'sed';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatibus';
    $request->fields = 'unde';
    $request->ipAddress = 'deserunt';
    $request->key = 'repellendus';
    $request->oauthToken = 'consequatur';
    $request->prettyPrint = false;
    $request->project = 'adipisci';
    $request->quotaUser = 'doloremque';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'debitis';

    $requestSecurity = new ComputeGlobalAddressesGetOwnerInstanceSecurity();
    $requestSecurity->option1 = new ComputeGlobalAddressesGetOwnerInstanceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalAddresses->computeGlobalAddressesGetOwnerInstance($request, $requestSecurity);

    if ($response->getOwnerInstanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalAddressesInsert

Creates an address resource in the specified project by using the data included in the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Address;
use \OpenAPI\OpenAPI\Models\Shared\AddressAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressIpVersionEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressIpv6EndpointTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressNetworkTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AddressStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesInsertSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesInsertSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesInsertSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalAddressesInsertRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->address = new Address();
    $request->address->address = '016 Katlynn Drive';
    $request->address->addressType = AddressAddressTypeEnum::EXTERNAL;
    $request->address->creationTimestamp = 'tempora';
    $request->address->description = 'eos';
    $request->address->id = 'natus';
    $request->address->ipVersion = AddressIpVersionEnum::IPV4;
    $request->address->ipv6EndpointType = AddressIpv6EndpointTypeEnum::NETLB;
    $request->address->kind = 'laudantium';
    $request->address->labelFingerprint = 'facilis';
    $request->address->labels = [
        'ullam' => 'aut',
        'quia' => 'officia',
        'quaerat' => 'corporis',
    ];
    $request->address->name = 'Mathew Williamson';
    $request->address->network = 'quidem';
    $request->address->networkTier = AddressNetworkTierEnum::STANDARD;
    $request->address->prefixLength = 506245;
    $request->address->purpose = AddressPurposeEnum::IPSEC_INTERCONNECT;
    $request->address->region = 'ipsam';
    $request->address->selfLink = 'officiis';
    $request->address->selfLinkWithId = 'sequi';
    $request->address->status = AddressStatusEnum::IN_USE;
    $request->address->subnetwork = 'voluptatem';
    $request->address->users = [
        'amet',
        'veritatis',
        'error',
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rerum';
    $request->fields = 'dolorum';
    $request->key = 'quibusdam';
    $request->oauthToken = 'earum';
    $request->prettyPrint = false;
    $request->project = 'excepturi';
    $request->quotaUser = 'numquam';
    $request->requestId = 'molestiae';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'error';
    $request->userIp = 'animi';

    $requestSecurity = new ComputeGlobalAddressesInsertSecurity();
    $requestSecurity->option1 = new ComputeGlobalAddressesInsertSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalAddresses->computeGlobalAddressesInsert($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalAddressesList

Retrieves a list of global addresses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalAddressesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'aliquid';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'facilis';
    $request->fields = 'optio';
    $request->filter = 'incidunt';
    $request->key = 'eos';
    $request->maxResults = 299379;
    $request->oauthToken = 'dolores';
    $request->orderBy = 'aliquid';
    $request->pageToken = 'eum';
    $request->prettyPrint = false;
    $request->project = 'vel';
    $request->quotaUser = 'ad';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'illo';
    $request->userIp = 'suscipit';

    $requestSecurity = new ComputeGlobalAddressesListSecurity();
    $requestSecurity->option1 = new ComputeGlobalAddressesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalAddresses->computeGlobalAddressesList($request, $requestSecurity);

    if ($response->addressList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalAddressesMove

Moves the specified address resource from one project to another project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalAddressesMoveRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesMoveSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesMoveSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesMoveSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalAddressesMoveRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalAddressesMoveRequest = new GlobalAddressesMoveRequest();
    $request->globalAddressesMoveRequest->description = 'fugiat';
    $request->globalAddressesMoveRequest->destinationAddress = 'impedit';
    $request->accessToken = 'culpa';
    $request->address = '9930 Runolfsson Rapid';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'ipsam';
    $request->key = 'occaecati';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->project = 'accusamus';
    $request->quotaUser = 'quisquam';
    $request->requestId = 'quasi';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'quo';
    $request->userIp = 'temporibus';

    $requestSecurity = new ComputeGlobalAddressesMoveSecurity();
    $requestSecurity->option1 = new ComputeGlobalAddressesMoveSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalAddresses->computeGlobalAddressesMove($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalAddressesSetLabels

Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling Resources documentation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlobalSetLabelsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesSetLabelsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesSetLabelsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesSetLabelsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalAddressesSetLabelsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'id';
    $request->globalSetLabelsRequest->labels = [
        'ipsa' => 'accusamus',
        'placeat' => 'quam',
        'similique' => 'delectus',
        'saepe' => 'facere',
    ];
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'aut';
    $request->key = 'temporibus';
    $request->oauthToken = 'tenetur';
    $request->prettyPrint = false;
    $request->project = 'incidunt';
    $request->quotaUser = 'numquam';
    $request->resource = 'corrupti';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'dolore';
    $request->userIp = 'esse';

    $requestSecurity = new ComputeGlobalAddressesSetLabelsSecurity();
    $requestSecurity->option1 = new ComputeGlobalAddressesSetLabelsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalAddresses->computeGlobalAddressesSetLabels($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## computeGlobalAddressesTestIamPermissions

Returns permissions that a caller has on the specified resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesTestIamPermissionsSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\ComputeGlobalAddressesTestIamPermissionsSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ComputeGlobalAddressesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'amet',
        'occaecati',
        'aut',
    ];
    $request->accessToken = 'impedit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quos';
    $request->fields = 'blanditiis';
    $request->key = 'quas';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'provident';
    $request->quotaUser = 'quas';
    $request->resource = 'ipsum';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'fuga';
    $request->userIp = 'facilis';

    $requestSecurity = new ComputeGlobalAddressesTestIamPermissionsSecurity();
    $requestSecurity->option1 = new ComputeGlobalAddressesTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->globalAddresses->computeGlobalAddressesTestIamPermissions($request, $requestSecurity);

    if ($response->testPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
