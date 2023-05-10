# globalAddresses

### Available Operations

* [computeGlobalAddressesDelete](#computeglobaladdressesdelete) - Deletes the specified address resource.
* [computeGlobalAddressesGet](#computeglobaladdressesget) - Returns the specified address resource.
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
    $request->accessToken = 'expedita';
    $request->address = '81052 Alicia Rest';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quam';
    $request->fields = 'est';
    $request->key = 'aliquam';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->project = 'culpa';
    $request->quotaUser = 'voluptatum';
    $request->requestId = 'iusto';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'voluptatibus';
    $request->userIp = 'voluptas';

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
    $request->accessToken = 'ullam';
    $request->address = '396 Hessel Flat';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'distinctio';
    $request->fields = 'maiores';
    $request->key = 'laboriosam';
    $request->oauthToken = 'voluptatem';
    $request->prettyPrint = false;
    $request->project = 'optio';
    $request->quotaUser = 'sequi';
    $request->uploadType = 'sunt';
    $request->uploadProtocol = 'vitae';
    $request->userIp = 'voluptatibus';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->address = new Address();
    $request->address->address = '26438 Dalton Hollow';
    $request->address->addressType = AddressAddressTypeEnum::INTERNAL;
    $request->address->creationTimestamp = 'reiciendis';
    $request->address->description = 'itaque';
    $request->address->id = 'vitae';
    $request->address->ipVersion = AddressIpVersionEnum::UNSPECIFIED_VERSION;
    $request->address->ipv6EndpointType = AddressIpv6EndpointTypeEnum::NETLB;
    $request->address->kind = 'quod';
    $request->address->labelFingerprint = 'minus';
    $request->address->labels = [
        'possimus' => 'maiores',
        'odio' => 'provident',
        'sapiente' => 'aperiam',
    ];
    $request->address->name = 'Jimmy McLaughlin';
    $request->address->network = 'unde';
    $request->address->networkTier = AddressNetworkTierEnum::FIXED_STANDARD;
    $request->address->prefixLength = 771931;
    $request->address->purpose = AddressPurposeEnum::GCE_ENDPOINT;
    $request->address->region = 'commodi';
    $request->address->selfLink = 'labore';
    $request->address->status = AddressStatusEnum::RESERVING;
    $request->address->subnetwork = 'in';
    $request->address->users = [
        'sunt',
        'enim',
        'nulla',
        'maiores',
    ];
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'impedit';
    $request->fields = 'accusamus';
    $request->key = 'et';
    $request->oauthToken = 'quas';
    $request->prettyPrint = false;
    $request->project = 'blanditiis';
    $request->quotaUser = 'cum';
    $request->requestId = 'dicta';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'tempora';
    $request->userIp = 'eveniet';

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
    $request->accessToken = 'sed';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quas';
    $request->fields = 'impedit';
    $request->filter = 'vel';
    $request->key = 'eligendi';
    $request->maxResults = 923159;
    $request->oauthToken = 'ex';
    $request->orderBy = 'beatae';
    $request->pageToken = 'veritatis';
    $request->prettyPrint = false;
    $request->project = 'maiores';
    $request->quotaUser = 'itaque';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'quidem';
    $request->userIp = 'illo';

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
    $request->globalAddressesMoveRequest->description = 'dignissimos';
    $request->globalAddressesMoveRequest->destinationAddress = 'minus';
    $request->accessToken = 'distinctio';
    $request->address = '739 Schmidt Lane';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsum';
    $request->fields = 'ducimus';
    $request->key = 'laudantium';
    $request->oauthToken = 'rerum';
    $request->prettyPrint = false;
    $request->project = 'deserunt';
    $request->quotaUser = 'odit';
    $request->requestId = 'ad';
    $request->uploadType = 'sequi';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'iusto';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->globalSetLabelsRequest = new GlobalSetLabelsRequest();
    $request->globalSetLabelsRequest->labelFingerprint = 'magnam';
    $request->globalSetLabelsRequest->labels = [
        'nulla' => 'impedit',
        'cupiditate' => 'illo',
    ];
    $request->accessToken = 'exercitationem';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'fugit';
    $request->key = 'maxime';
    $request->oauthToken = 'dolorum';
    $request->prettyPrint = false;
    $request->project = 'repellat';
    $request->quotaUser = 'nostrum';
    $request->resource = 'illum';
    $request->uploadType = 'quibusdam';
    $request->uploadProtocol = 'commodi';
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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testPermissionsRequest = new TestPermissionsRequest();
    $request->testPermissionsRequest->permissions = [
        'temporibus',
    ];
    $request->accessToken = 'optio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->fields = 'exercitationem';
    $request->key = 'culpa';
    $request->oauthToken = 'repudiandae';
    $request->prettyPrint = false;
    $request->project = 'aspernatur';
    $request->quotaUser = 'sapiente';
    $request->resource = 'neque';
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'suscipit';
    $request->userIp = 'harum';

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
