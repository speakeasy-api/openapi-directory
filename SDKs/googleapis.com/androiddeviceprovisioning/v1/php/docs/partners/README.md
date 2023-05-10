# partners

### Available Operations

* [androiddeviceprovisioningPartnersCustomersCreate](#androiddeviceprovisioningpartnerscustomerscreate) - Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.
* [androiddeviceprovisioningPartnersCustomersList](#androiddeviceprovisioningpartnerscustomerslist) - Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.
* [androiddeviceprovisioningPartnersDevicesClaim](#androiddeviceprovisioningpartnersdevicesclaim) - Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.
* [androiddeviceprovisioningPartnersDevicesClaimAsync](#androiddeviceprovisioningpartnersdevicesclaimasync) - Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [androiddeviceprovisioningPartnersDevicesFindByIdentifier](#androiddeviceprovisioningpartnersdevicesfindbyidentifier) - Finds devices by hardware identifiers, such as IMEI.
* [androiddeviceprovisioningPartnersDevicesFindByOwner](#androiddeviceprovisioningpartnersdevicesfindbyowner) - Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.
* [androiddeviceprovisioningPartnersDevicesGet](#androiddeviceprovisioningpartnersdevicesget) - Gets a device.
* [androiddeviceprovisioningPartnersDevicesMetadata](#androiddeviceprovisioningpartnersdevicesmetadata) - Updates reseller metadata associated with the device. Android devices only.
* [androiddeviceprovisioningPartnersDevicesUnclaim](#androiddeviceprovisioningpartnersdevicesunclaim) - Unclaims a device from a customer and removes it from zero-touch enrollment.
* [androiddeviceprovisioningPartnersDevicesUnclaimAsync](#androiddeviceprovisioningpartnersdevicesunclaimasync) - Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).
* [androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync](#androiddeviceprovisioningpartnersdevicesupdatemetadataasync) - Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.
* [androiddeviceprovisioningPartnersVendorsCustomersList](#androiddeviceprovisioningpartnersvendorscustomerslist) - Lists the customers of the vendor.
* [androiddeviceprovisioningPartnersVendorsList](#androiddeviceprovisioningpartnersvendorslist) - Lists the vendors of the partner.

## androiddeviceprovisioningPartnersCustomersCreate

Creates a customer for zero-touch enrollment. After the method returns successfully, admin and owner roles can manage devices and EMM configs by calling API methods or using their zero-touch enrollment portal. The customer receives an email that welcomes them to zero-touch enrollment and explains how to sign into the portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersCustomersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCustomerRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\CompanyInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleWorkspaceAccountInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersCustomersCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createCustomerRequestInput = new CreateCustomerRequestInput();
    $request->createCustomerRequestInput->customer = new CompanyInput();
    $request->createCustomerRequestInput->customer->adminEmails = [
        'consequatur',
        'est',
    ];
    $request->createCustomerRequestInput->customer->companyName = 'quibusdam';
    $request->createCustomerRequestInput->customer->googleWorkspaceAccount = new GoogleWorkspaceAccountInput();
    $request->createCustomerRequestInput->customer->googleWorkspaceAccount->customerId = 'explicabo';
    $request->createCustomerRequestInput->customer->languageCode = 'deserunt';
    $request->createCustomerRequestInput->customer->ownerEmails = [
        'quibusdam',
        'labore',
        'modi',
    ];
    $request->createCustomerRequestInput->customer->skipWelcomeEmail = false;
    $request->accessToken = 'qui';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'cupiditate';
    $request->fields = 'quos';
    $request->key = 'perferendis';
    $request->oauthToken = 'magni';
    $request->parent = 'assumenda';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsam';
    $request->uploadType = 'alias';
    $request->uploadProtocol = 'fugit';

    $response = $sdk->partners->androiddeviceprovisioningPartnersCustomersCreate($request);

    if ($response->company !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersCustomersList

Lists the customers that are enrolled to the reseller identified by the `partnerId` argument. This list includes customers that the reseller created and customers that enrolled themselves using the portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersCustomersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersCustomersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'facilis';
    $request->fields = 'tempore';
    $request->key = 'labore';
    $request->oauthToken = 'delectus';
    $request->pageSize = 433288;
    $request->pageToken = 'non';
    $request->partnerId = 'eligendi';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'provident';

    $response = $sdk->partners->androiddeviceprovisioningPartnersCustomersList($request);

    if ($response->listCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersDevicesClaim

Claims a device for a customer and adds it to zero-touch enrollment. If the device is already claimed by another customer, the call returns an error.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersDevicesClaimRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClaimDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifierDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\ClaimDeviceRequestSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersDevicesClaimRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->claimDeviceRequest = new ClaimDeviceRequest();
    $request->claimDeviceRequest->customerId = 'sint';
    $request->claimDeviceRequest->deviceIdentifier = new DeviceIdentifier();
    $request->claimDeviceRequest->deviceIdentifier->chromeOsAttestedDeviceId = 'officia';
    $request->claimDeviceRequest->deviceIdentifier->deviceType = DeviceIdentifierDeviceTypeEnum::DEVICE_TYPE_UNSPECIFIED;
    $request->claimDeviceRequest->deviceIdentifier->imei = 'debitis';
    $request->claimDeviceRequest->deviceIdentifier->manufacturer = 'a';
    $request->claimDeviceRequest->deviceIdentifier->meid = 'dolorum';
    $request->claimDeviceRequest->deviceIdentifier->model = 'in';
    $request->claimDeviceRequest->deviceIdentifier->serialNumber = 'in';
    $request->claimDeviceRequest->deviceMetadata = new DeviceMetadata();
    $request->claimDeviceRequest->deviceMetadata->entries = [
        'maiores' => 'rerum',
        'dicta' => 'magnam',
        'cumque' => 'facere',
        'ea' => 'aliquid',
    ];
    $request->claimDeviceRequest->googleWorkspaceCustomerId = 'laborum';
    $request->claimDeviceRequest->preProvisioningToken = 'accusamus';
    $request->claimDeviceRequest->sectionType = ClaimDeviceRequestSectionTypeEnum::SECTION_TYPE_UNSPECIFIED;
    $request->claimDeviceRequest->simlockProfileId = 'occaecati';
    $request->accessToken = 'enim';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'delectus';
    $request->fields = 'quidem';
    $request->key = 'provident';
    $request->oauthToken = 'nam';
    $request->partnerId = 'id';
    $request->prettyPrint = false;
    $request->quotaUser = 'blanditiis';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'sapiente';

    $response = $sdk->partners->androiddeviceprovisioningPartnersDevicesClaim($request);

    if ($response->claimDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersDevicesClaimAsync

Claims a batch of devices for a customer asynchronously. Adds the devices to zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ClaimDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartnerClaim;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifierDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\PartnerClaimSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersDevicesClaimAsyncRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->claimDevicesRequest = new ClaimDevicesRequest();
    $request->claimDevicesRequest->claims = [
        new PartnerClaim(),
        new PartnerClaim(),
        new PartnerClaim(),
    ];
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'natus';
    $request->fields = 'omnis';
    $request->key = 'molestiae';
    $request->oauthToken = 'perferendis';
    $request->partnerId = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'id';

    $response = $sdk->partners->androiddeviceprovisioningPartnersDevicesClaimAsync($request);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersDevicesFindByIdentifier

Finds devices by hardware identifiers, such as IMEI.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FindDevicesByDeviceIdentifierRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifierDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersDevicesFindByIdentifierRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->findDevicesByDeviceIdentifierRequest = new FindDevicesByDeviceIdentifierRequest();
    $request->findDevicesByDeviceIdentifierRequest->deviceIdentifier = new DeviceIdentifier();
    $request->findDevicesByDeviceIdentifierRequest->deviceIdentifier->chromeOsAttestedDeviceId = 'labore';
    $request->findDevicesByDeviceIdentifierRequest->deviceIdentifier->deviceType = DeviceIdentifierDeviceTypeEnum::DEVICE_TYPE_ANDROID;
    $request->findDevicesByDeviceIdentifierRequest->deviceIdentifier->imei = 'natus';
    $request->findDevicesByDeviceIdentifierRequest->deviceIdentifier->manufacturer = 'nobis';
    $request->findDevicesByDeviceIdentifierRequest->deviceIdentifier->meid = 'eum';
    $request->findDevicesByDeviceIdentifierRequest->deviceIdentifier->model = 'vero';
    $request->findDevicesByDeviceIdentifierRequest->deviceIdentifier->serialNumber = 'aspernatur';
    $request->findDevicesByDeviceIdentifierRequest->limit = 'architecto';
    $request->findDevicesByDeviceIdentifierRequest->pageToken = 'magnam';
    $request->accessToken = 'et';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ullam';
    $request->fields = 'provident';
    $request->key = 'quos';
    $request->oauthToken = 'sint';
    $request->partnerId = 'accusantium';
    $request->prettyPrint = false;
    $request->quotaUser = 'mollitia';
    $request->uploadType = 'reiciendis';
    $request->uploadProtocol = 'mollitia';

    $response = $sdk->partners->androiddeviceprovisioningPartnersDevicesFindByIdentifier($request);

    if ($response->findDevicesByDeviceIdentifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersDevicesFindByOwner

Finds devices claimed for customers. The results only contain devices registered to the reseller that's identified by the `partnerId` argument. The customer's devices purchased from other resellers don't appear in the results.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FindDevicesByOwnerRequest;
use \OpenAPI\OpenAPI\Models\Shared\FindDevicesByOwnerRequestSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersDevicesFindByOwnerRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->findDevicesByOwnerRequest = new FindDevicesByOwnerRequest();
    $request->findDevicesByOwnerRequest->customerId = [
        'dolor',
        'necessitatibus',
    ];
    $request->findDevicesByOwnerRequest->googleWorkspaceCustomerId = [
        'nemo',
    ];
    $request->findDevicesByOwnerRequest->limit = 'quasi';
    $request->findDevicesByOwnerRequest->pageToken = 'iure';
    $request->findDevicesByOwnerRequest->sectionType = FindDevicesByOwnerRequestSectionTypeEnum::SECTION_TYPE_ZERO_TOUCH;
    $request->accessToken = 'debitis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maxime';
    $request->fields = 'deleniti';
    $request->key = 'facilis';
    $request->oauthToken = 'in';
    $request->partnerId = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'repudiandae';
    $request->uploadProtocol = 'ullam';

    $response = $sdk->partners->androiddeviceprovisioningPartnersDevicesFindByOwner($request);

    if ($response->findDevicesByOwnerResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersDevicesGet

Gets a device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersDevicesGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersDevicesGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nihil';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'sed';
    $request->key = 'saepe';
    $request->name = 'Edward Crooks';
    $request->oauthToken = 'magni';
    $request->prettyPrint = false;
    $request->quotaUser = 'sunt';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'illum';

    $response = $sdk->partners->androiddeviceprovisioningPartnersDevicesGet($request);

    if ($response->device !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersDevicesMetadata

Updates reseller metadata associated with the device. Android devices only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersDevicesMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeviceMetadataRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersDevicesMetadataRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->updateDeviceMetadataRequest = new UpdateDeviceMetadataRequest();
    $request->updateDeviceMetadataRequest->deviceMetadata = new DeviceMetadata();
    $request->updateDeviceMetadataRequest->deviceMetadata->entries = [
        'ea' => 'excepturi',
        'odit' => 'ea',
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'autem';
    $request->deviceId = 'nam';
    $request->fields = 'eaque';
    $request->key = 'pariatur';
    $request->metadataOwnerId = 'nemo';
    $request->oauthToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'perferendis';
    $request->uploadType = 'fugiat';
    $request->uploadProtocol = 'amet';

    $response = $sdk->partners->androiddeviceprovisioningPartnersDevicesMetadata($request);

    if ($response->deviceMetadata !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersDevicesUnclaim

Unclaims a device from a customer and removes it from zero-touch enrollment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersDevicesUnclaimRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnclaimDeviceRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifierDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnclaimDeviceRequestSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersDevicesUnclaimRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->unclaimDeviceRequest = new UnclaimDeviceRequest();
    $request->unclaimDeviceRequest->deviceId = 'cumque';
    $request->unclaimDeviceRequest->deviceIdentifier = new DeviceIdentifier();
    $request->unclaimDeviceRequest->deviceIdentifier->chromeOsAttestedDeviceId = 'corporis';
    $request->unclaimDeviceRequest->deviceIdentifier->deviceType = DeviceIdentifierDeviceTypeEnum::DEVICE_TYPE_CHROME_OS;
    $request->unclaimDeviceRequest->deviceIdentifier->imei = 'libero';
    $request->unclaimDeviceRequest->deviceIdentifier->manufacturer = 'nobis';
    $request->unclaimDeviceRequest->deviceIdentifier->meid = 'dolores';
    $request->unclaimDeviceRequest->deviceIdentifier->model = 'quis';
    $request->unclaimDeviceRequest->deviceIdentifier->serialNumber = 'totam';
    $request->unclaimDeviceRequest->sectionType = UnclaimDeviceRequestSectionTypeEnum::SECTION_TYPE_SIM_LOCK;
    $request->unclaimDeviceRequest->vacationModeDays = 54338;
    $request->unclaimDeviceRequest->vacationModeExpireTime = 'quis';
    $request->accessToken = 'nesciunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'dolores';
    $request->key = 'minus';
    $request->oauthToken = 'quam';
    $request->partnerId = 'dolor';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'nostrum';
    $request->uploadProtocol = 'hic';

    $response = $sdk->partners->androiddeviceprovisioningPartnersDevicesUnclaim($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersDevicesUnclaimAsync

Unclaims a batch of devices for a customer asynchronously. Removes the devices from zero-touch enrollment. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnclaimDevicesRequest;
use \OpenAPI\OpenAPI\Models\Shared\PartnerUnclaim;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifierDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PartnerUnclaimSectionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersDevicesUnclaimAsyncRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->unclaimDevicesRequest = new UnclaimDevicesRequest();
    $request->unclaimDevicesRequest->unclaims = [
        new PartnerUnclaim(),
        new PartnerUnclaim(),
        new PartnerUnclaim(),
    ];
    $request->accessToken = 'facilis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatem';
    $request->fields = 'porro';
    $request->key = 'consequuntur';
    $request->oauthToken = 'blanditiis';
    $request->partnerId = 'error';
    $request->prettyPrint = false;
    $request->quotaUser = 'eaque';
    $request->uploadType = 'occaecati';
    $request->uploadProtocol = 'rerum';

    $response = $sdk->partners->androiddeviceprovisioningPartnersDevicesUnclaimAsync($request);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync

Updates the reseller metadata attached to a batch of devices. This method updates devices asynchronously and returns an `Operation` that can be used to track progress. Read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations). Android Devices only.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateDeviceMetadataInBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMetadataArguments;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\DeviceIdentifierDeviceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\DeviceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersDevicesUpdateMetadataAsyncRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->updateDeviceMetadataInBatchRequest = new UpdateDeviceMetadataInBatchRequest();
    $request->updateDeviceMetadataInBatchRequest->updates = [
        new UpdateMetadataArguments(),
        new UpdateMetadataArguments(),
        new UpdateMetadataArguments(),
        new UpdateMetadataArguments(),
    ];
    $request->accessToken = 'earum';
    $request->alt = AltEnum::JSON;
    $request->callback = 'iste';
    $request->fields = 'dolorum';
    $request->key = 'deleniti';
    $request->oauthToken = 'pariatur';
    $request->partnerId = 'provident';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->uploadType = 'libero';
    $request->uploadProtocol = 'delectus';

    $response = $sdk->partners->androiddeviceprovisioningPartnersDevicesUpdateMetadataAsync($request);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersVendorsCustomersList

Lists the customers of the vendor.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersVendorsCustomersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersVendorsCustomersListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dolorem';
    $request->fields = 'dolorem';
    $request->key = 'dolor';
    $request->oauthToken = 'qui';
    $request->pageSize = 218749;
    $request->pageToken = 'hic';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'cum';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'dignissimos';

    $response = $sdk->partners->androiddeviceprovisioningPartnersVendorsCustomersList($request);

    if ($response->listVendorCustomersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## androiddeviceprovisioningPartnersVendorsList

Lists the vendors of the partner.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AndroiddeviceprovisioningPartnersVendorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AndroiddeviceprovisioningPartnersVendorsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'numquam';
    $request->fields = 'veritatis';
    $request->key = 'ipsa';
    $request->oauthToken = 'ipsa';
    $request->pageSize = 434417;
    $request->pageToken = 'odio';
    $request->parent = 'quaerat';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'quidem';
    $request->uploadProtocol = 'voluptatibus';

    $response = $sdk->partners->androiddeviceprovisioningPartnersVendorsList($request);

    if ($response->listVendorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
