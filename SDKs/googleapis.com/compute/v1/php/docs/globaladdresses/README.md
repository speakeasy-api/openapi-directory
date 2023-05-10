# globalAddresses

### Available Operations

* [computeGlobalAddressesDelete](#computeglobaladdressesdelete) - Deletes the specified address resource.
* [computeGlobalAddressesGet](#computeglobaladdressesget) - Returns the specified address resource.
* [computeGlobalAddressesInsert](#computeglobaladdressesinsert) - Creates an address resource in the specified project by using the data included in the request.
* [computeGlobalAddressesList](#computeglobaladdresseslist) - Retrieves a list of global addresses.
* [computeGlobalAddressesMove](#computeglobaladdressesmove) - Moves the specified address resource from one project to another project.
* [computeGlobalAddressesSetLabels](#computeglobaladdressessetlabels) - Sets the labels on a GlobalAddress. To learn more about labels, read the Labeling Resources documentation.

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'veritatis';
    $request->address = '465 Oberbrunner Crossroad';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptas';
    $request->fields = 'animi';
    $request->key = 'commodi';
    $request->oauthToken = 'alias';
    $request->prettyPrint = false;
    $request->project = 'fuga';
    $request->quotaUser = 'aut';
    $request->requestId = 'dolore';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'aliquam';
    $request->userIp = 'iste';

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
    $request->accessToken = 'eligendi';
    $request->address = '356 Janelle Circle';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ipsam';
    $request->fields = 'quasi';
    $request->key = 'cumque';
    $request->oauthToken = 'dicta';
    $request->prettyPrint = false;
    $request->project = 'harum';
    $request->quotaUser = 'facere';
    $request->uploadType = 'facilis';
    $request->uploadProtocol = 'beatae';
    $request->userIp = 'cumque';

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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->address = new Address();
    $request->address->address = '75558 Stracke Ville';
    $request->address->addressType = AddressAddressTypeEnum::UNSPECIFIED_TYPE;
    $request->address->creationTimestamp = 'incidunt';
    $request->address->description = 'quod';
    $request->address->id = 'minus';
    $request->address->ipVersion = AddressIpVersionEnum::UNSPECIFIED_VERSION;
    $request->address->ipv6EndpointType = AddressIpv6EndpointTypeEnum::VM;
    $request->address->kind = 'excepturi';
    $request->address->labelFingerprint = 'occaecati';
    $request->address->labels = [
        'quo' => 'esse',
        'hic' => 'maxime',
        'accusantium' => 'soluta',
    ];
    $request->address->name = 'Meredith Roob Jr.';
    $request->address->network = 'laudantium';
    $request->address->networkTier = AddressNetworkTierEnum::PREMIUM;
    $request->address->prefixLength = 219860;
    $request->address->purpose = AddressPurposeEnum::VPC_PEERING;
    $request->address->region = 'tempora';
    $request->address->selfLink = 'magni';
    $request->address->status = AddressStatusEnum::RESERVING;
    $request->address->subnetwork = 'doloremque';
    $request->address->users = [
        'eum',
    ];
    $request->accessToken = 'at';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'voluptatum';
    $request->key = 'blanditiis';
    $request->oauthToken = 'nihil';
    $request->prettyPrint = false;
    $request->project = 'atque';
    $request->quotaUser = 'rerum';
    $request->requestId = 'deserunt';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'nostrum';
    $request->userIp = 'atque';

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
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'est';
    $request->alt = AltEnum::JSON;
    $request->callback = 'rem';
    $request->fields = 'magni';
    $request->filter = 'quae';
    $request->key = 'quas';
    $request->maxResults = 811259;
    $request->oauthToken = 'enim';
    $request->orderBy = 'labore';
    $request->pageToken = 'sapiente';
    $request->prettyPrint = false;
    $request->project = 'saepe';
    $request->quotaUser = 'delectus';
    $request->returnPartialSuccess = false;
    $request->uploadType = 'officia';
    $request->uploadProtocol = 'natus';
    $request->userIp = 'cumque';

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
    $request->globalAddressesMoveRequest->description = 'quaerat';
    $request->globalAddressesMoveRequest->destinationAddress = 'doloribus';
    $request->accessToken = 'quia';
    $request->address = '673 Hilton Haven';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nesciunt';
    $request->fields = 'sit';
    $request->key = 'odio';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->project = 'asperiores';
    $request->quotaUser = 'recusandae';
    $request->requestId = 'voluptates';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'dicta';
    $request->userIp = 'fugit';

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
    $request->globalSetLabelsRequest->labelFingerprint = 'aliquid';
    $request->globalSetLabelsRequest->labels = [
        'sed' => 'deleniti',
        'sunt' => 'nesciunt',
        'delectus' => 'laborum',
        'aliquam' => 'deserunt',
    ];
    $request->accessToken = 'modi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'impedit';
    $request->fields = 'eius';
    $request->key = 'voluptatum';
    $request->oauthToken = 'ipsa';
    $request->prettyPrint = false;
    $request->project = 'at';
    $request->quotaUser = 'dolorem';
    $request->resource = 'repellat';
    $request->uploadType = 'aspernatur';
    $request->uploadProtocol = 'inventore';
    $request->userIp = 'sequi';

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
