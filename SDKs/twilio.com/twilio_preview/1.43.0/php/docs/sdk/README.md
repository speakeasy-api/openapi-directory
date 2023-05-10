# SDK

## Overview

This is the public Twilio REST API.

### Available Operations

* [createDeployedDevicesCertificate](#createdeployeddevicescertificate) - Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.
* [createDeployedDevicesDeployment](#createdeployeddevicesdeployment) - Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.
* [createDeployedDevicesDevice](#createdeployeddevicesdevice) - Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.
* [createDeployedDevicesFleet](#createdeployeddevicesfleet) - Create a new Fleet for scoping of deployed devices within your account.
* [createDeployedDevicesKey](#createdeployeddeviceskey) - Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.
* [createHostedNumbersAuthorizationDocument](#createhostednumbersauthorizationdocument) - Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.
* [createHostedNumbersHostedNumberOrder](#createhostednumbershostednumberorder) - Host a phone number's capability on Twilio's platform.
* [createMarketplaceInstalledAddOn](#createmarketplaceinstalledaddon) - Install an Add-on for the Account specified.
* [createSyncDocument](#createsyncdocument)
* [createSyncService](#createsyncservice)
* [createSyncSyncList](#createsyncsynclist)
* [createSyncSyncListItem](#createsyncsynclistitem)
* [createSyncSyncMap](#createsyncsyncmap)
* [createSyncSyncMapItem](#createsyncsyncmapitem)
* [createUnderstandAssistant](#createunderstandassistant)
* [createUnderstandField](#createunderstandfield)
* [createUnderstandFieldType](#createunderstandfieldtype)
* [createUnderstandFieldValue](#createunderstandfieldvalue)
* [createUnderstandModelBuild](#createunderstandmodelbuild)
* [createUnderstandQuery](#createunderstandquery)
* [createUnderstandSample](#createunderstandsample)
* [createUnderstandTask](#createunderstandtask)
* [createWirelessCommand](#createwirelesscommand)
* [createWirelessRatePlan](#createwirelessrateplan)
* [deleteDeployedDevicesCertificate](#deletedeployeddevicescertificate) - Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [deleteDeployedDevicesDeployment](#deletedeployeddevicesdeployment) - Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.
* [deleteDeployedDevicesDevice](#deletedeployeddevicesdevice) - Delete a specific Device from the Fleet, also removing it from associated Deployments.
* [deleteDeployedDevicesFleet](#deletedeployeddevicesfleet) - Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.
* [deleteDeployedDevicesKey](#deletedeployeddeviceskey) - Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.
* [deleteHostedNumbersHostedNumberOrder](#deletehostednumbershostednumberorder) - Cancel the HostedNumberOrder (only available when the status is in `received`).
* [deleteMarketplaceInstalledAddOn](#deletemarketplaceinstalledaddon) - Remove an Add-on installation from your account
* [deleteSyncDocument](#deletesyncdocument)
* [deleteSyncDocumentPermission](#deletesyncdocumentpermission) - Delete a specific Sync Document Permission.
* [deleteSyncService](#deletesyncservice)
* [deleteSyncSyncList](#deletesyncsynclist)
* [deleteSyncSyncListItem](#deletesyncsynclistitem)
* [deleteSyncSyncListPermission](#deletesyncsynclistpermission) - Delete a specific Sync List Permission.
* [deleteSyncSyncMap](#deletesyncsyncmap)
* [deleteSyncSyncMapItem](#deletesyncsyncmapitem)
* [deleteSyncSyncMapPermission](#deletesyncsyncmappermission) - Delete a specific Sync Map Permission.
* [deleteUnderstandAssistant](#deleteunderstandassistant)
* [deleteUnderstandField](#deleteunderstandfield)
* [deleteUnderstandFieldType](#deleteunderstandfieldtype)
* [deleteUnderstandFieldValue](#deleteunderstandfieldvalue)
* [deleteUnderstandModelBuild](#deleteunderstandmodelbuild)
* [deleteUnderstandQuery](#deleteunderstandquery)
* [deleteUnderstandSample](#deleteunderstandsample)
* [deleteUnderstandTask](#deleteunderstandtask)
* [deleteWirelessRatePlan](#deletewirelessrateplan)
* [fetchDeployedDevicesCertificate](#fetchdeployeddevicescertificate) - Fetch information about a specific Certificate credential in the Fleet.
* [fetchDeployedDevicesDeployment](#fetchdeployeddevicesdeployment) - Fetch information about a specific Deployment in the Fleet.
* [fetchDeployedDevicesDevice](#fetchdeployeddevicesdevice) - Fetch information about a specific Device in the Fleet.
* [fetchDeployedDevicesFleet](#fetchdeployeddevicesfleet) - Fetch information about a specific Fleet in your account.
* [fetchDeployedDevicesKey](#fetchdeployeddeviceskey) - Fetch information about a specific Key credential in the Fleet.
* [fetchHostedNumbersAuthorizationDocument](#fetchhostednumbersauthorizationdocument) - Fetch a specific AuthorizationDocument.
* [fetchHostedNumbersHostedNumberOrder](#fetchhostednumbershostednumberorder) - Fetch a specific HostedNumberOrder.
* [fetchMarketplaceAvailableAddOn](#fetchmarketplaceavailableaddon) - Fetch an instance of an Add-on currently available to be installed.
* [fetchMarketplaceAvailableAddOnExtension](#fetchmarketplaceavailableaddonextension) - Fetch an instance of an Extension for the Available Add-on.
* [fetchMarketplaceInstalledAddOn](#fetchmarketplaceinstalledaddon) - Fetch an instance of an Add-on currently installed on this Account.
* [fetchMarketplaceInstalledAddOnExtension](#fetchmarketplaceinstalledaddonextension) - Fetch an instance of an Extension for the Installed Add-on.
* [fetchSyncDocument](#fetchsyncdocument)
* [fetchSyncDocumentPermission](#fetchsyncdocumentpermission) - Fetch a specific Sync Document Permission.
* [fetchSyncService](#fetchsyncservice)
* [fetchSyncSyncList](#fetchsyncsynclist)
* [fetchSyncSyncListItem](#fetchsyncsynclistitem)
* [fetchSyncSyncListPermission](#fetchsyncsynclistpermission) - Fetch a specific Sync List Permission.
* [fetchSyncSyncMap](#fetchsyncsyncmap)
* [fetchSyncSyncMapItem](#fetchsyncsyncmapitem)
* [fetchSyncSyncMapPermission](#fetchsyncsyncmappermission) - Fetch a specific Sync Map Permission.
* [fetchUnderstandAssistant](#fetchunderstandassistant)
* [fetchUnderstandAssistantFallbackActions](#fetchunderstandassistantfallbackactions)
* [fetchUnderstandAssistantInitiationActions](#fetchunderstandassistantinitiationactions)
* [fetchUnderstandDialogue](#fetchunderstanddialogue)
* [fetchUnderstandField](#fetchunderstandfield)
* [fetchUnderstandFieldType](#fetchunderstandfieldtype)
* [fetchUnderstandFieldValue](#fetchunderstandfieldvalue)
* [fetchUnderstandModelBuild](#fetchunderstandmodelbuild)
* [fetchUnderstandQuery](#fetchunderstandquery)
* [fetchUnderstandSample](#fetchunderstandsample)
* [fetchUnderstandStyleSheet](#fetchunderstandstylesheet) - Returns Style sheet JSON object for this Assistant
* [fetchUnderstandTask](#fetchunderstandtask)
* [fetchUnderstandTaskActions](#fetchunderstandtaskactions) - Returns JSON actions for this Task.
* [fetchUnderstandTaskStatistics](#fetchunderstandtaskstatistics)
* [fetchWirelessCommand](#fetchwirelesscommand)
* [fetchWirelessRatePlan](#fetchwirelessrateplan)
* [fetchWirelessSim](#fetchwirelesssim)
* [fetchWirelessUsage](#fetchwirelessusage)
* [listDeployedDevicesCertificate](#listdeployeddevicescertificate) - Retrieve a list of all Certificate credentials belonging to the Fleet.
* [listDeployedDevicesDeployment](#listdeployeddevicesdeployment) - Retrieve a list of all Deployments belonging to the Fleet.
* [listDeployedDevicesDevice](#listdeployeddevicesdevice) - Retrieve a list of all Devices belonging to the Fleet.
* [listDeployedDevicesFleet](#listdeployeddevicesfleet) - Retrieve a list of all Fleets belonging to your account.
* [listDeployedDevicesKey](#listdeployeddeviceskey) - Retrieve a list of all Keys credentials belonging to the Fleet.
* [listHostedNumbersAuthorizationDocument](#listhostednumbersauthorizationdocument) - Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.
* [listHostedNumbersDependentHostedNumberOrder](#listhostednumbersdependenthostednumberorder) - Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.
* [listHostedNumbersHostedNumberOrder](#listhostednumbershostednumberorder) - Retrieve a list of HostedNumberOrders belonging to the account initiating the request.
* [listMarketplaceAvailableAddOn](#listmarketplaceavailableaddon) - Retrieve a list of Add-ons currently available to be installed.
* [listMarketplaceAvailableAddOnExtension](#listmarketplaceavailableaddonextension) - Retrieve a list of Extensions for the Available Add-on.
* [listMarketplaceInstalledAddOn](#listmarketplaceinstalledaddon) - Retrieve a list of Add-ons currently installed on this Account.
* [listMarketplaceInstalledAddOnExtension](#listmarketplaceinstalledaddonextension) - Retrieve a list of Extensions for the Installed Add-on.
* [listSyncDocument](#listsyncdocument)
* [listSyncDocumentPermission](#listsyncdocumentpermission) - Retrieve a list of all Permissions applying to a Sync Document.
* [listSyncService](#listsyncservice)
* [listSyncSyncList](#listsyncsynclist)
* [listSyncSyncListItem](#listsyncsynclistitem)
* [listSyncSyncListPermission](#listsyncsynclistpermission) - Retrieve a list of all Permissions applying to a Sync List.
* [listSyncSyncMap](#listsyncsyncmap)
* [listSyncSyncMapItem](#listsyncsyncmapitem)
* [listSyncSyncMapPermission](#listsyncsyncmappermission) - Retrieve a list of all Permissions applying to a Sync Map.
* [listUnderstandAssistant](#listunderstandassistant)
* [listUnderstandField](#listunderstandfield)
* [listUnderstandFieldType](#listunderstandfieldtype)
* [listUnderstandFieldValue](#listunderstandfieldvalue)
* [listUnderstandModelBuild](#listunderstandmodelbuild)
* [listUnderstandQuery](#listunderstandquery)
* [listUnderstandSample](#listunderstandsample)
* [listUnderstandTask](#listunderstandtask)
* [listWirelessCommand](#listwirelesscommand)
* [listWirelessRatePlan](#listwirelessrateplan)
* [listWirelessSim](#listwirelesssim)
* [updateDeployedDevicesCertificate](#updatedeployeddevicescertificate) - Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.
* [updateDeployedDevicesDeployment](#updatedeployeddevicesdeployment) - Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.
* [updateDeployedDevicesDevice](#updatedeployeddevicesdevice) - Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.
* [updateDeployedDevicesFleet](#updatedeployeddevicesfleet) - Update the friendly name property of a specific Fleet in your account.
* [updateDeployedDevicesKey](#updatedeployeddeviceskey) - Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.
* [updateHostedNumbersAuthorizationDocument](#updatehostednumbersauthorizationdocument) - Updates a specific AuthorizationDocument.
* [updateHostedNumbersHostedNumberOrder](#updatehostednumbershostednumberorder) - Updates a specific HostedNumberOrder.
* [updateMarketplaceInstalledAddOn](#updatemarketplaceinstalledaddon) - Update an Add-on installation for the Account specified.
* [updateMarketplaceInstalledAddOnExtension](#updatemarketplaceinstalledaddonextension) - Update an Extension for an Add-on installation.
* [updateSyncDocument](#updatesyncdocument)
* [updateSyncDocumentPermission](#updatesyncdocumentpermission) - Update an identity's access to a specific Sync Document.
* [updateSyncService](#updatesyncservice)
* [updateSyncSyncListItem](#updatesyncsynclistitem)
* [updateSyncSyncListPermission](#updatesyncsynclistpermission) - Update an identity's access to a specific Sync List.
* [updateSyncSyncMapItem](#updatesyncsyncmapitem)
* [updateSyncSyncMapPermission](#updatesyncsyncmappermission) - Update an identity's access to a specific Sync Map.
* [updateUnderstandAssistant](#updateunderstandassistant)
* [updateUnderstandAssistantFallbackActions](#updateunderstandassistantfallbackactions)
* [updateUnderstandAssistantInitiationActions](#updateunderstandassistantinitiationactions)
* [updateUnderstandFieldType](#updateunderstandfieldtype)
* [updateUnderstandModelBuild](#updateunderstandmodelbuild)
* [updateUnderstandQuery](#updateunderstandquery)
* [updateUnderstandSample](#updateunderstandsample)
* [updateUnderstandStyleSheet](#updateunderstandstylesheet) - Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.
* [updateUnderstandTask](#updateunderstandtask)
* [updateUnderstandTaskActions](#updateunderstandtaskactions) - Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
* [updateWirelessRatePlan](#updatewirelessrateplan)
* [updateWirelessSim](#updatewirelesssim)

## createDeployedDevicesCertificate

Enroll a new Certificate credential to the Fleet, optionally giving it a friendly name and assigning to a Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesCertificateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeployedDevicesCertificateRequest();
    $request->fleetSid = 'unde';
    $request->requestBody = new CreateDeployedDevicesCertificateCreateDeployedDevicesCertificateRequest();
    $request->requestBody->certificateData = 'nulla';
    $request->requestBody->deviceSid = 'corrupti';
    $request->requestBody->friendlyName = 'illum';

    $requestSecurity = new CreateDeployedDevicesCertificateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDeployedDevicesCertificate($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployedDevicesDeployment

Create a new Deployment in the Fleet, optionally giving it a friendly name and linking to a specific Twilio Sync service instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesDeploymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeployedDevicesDeploymentRequest();
    $request->fleetSid = 'vel';
    $request->requestBody = new CreateDeployedDevicesDeploymentCreateDeployedDevicesDeploymentRequest();
    $request->requestBody->friendlyName = 'error';
    $request->requestBody->syncServiceSid = 'deserunt';

    $requestSecurity = new CreateDeployedDevicesDeploymentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDeployedDevicesDeployment($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployedDevicesDevice

Create a new Device in the Fleet, optionally giving it a unique name, friendly name, and assigning to a Deployment and/or human identity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeployedDevicesDeviceRequest();
    $request->fleetSid = 'suscipit';
    $request->requestBody = new CreateDeployedDevicesDeviceCreateDeployedDevicesDeviceRequest();
    $request->requestBody->deploymentSid = 'iure';
    $request->requestBody->enabled = false;
    $request->requestBody->friendlyName = 'magnam';
    $request->requestBody->identity = 'debitis';
    $request->requestBody->uniqueName = 'ipsa';

    $requestSecurity = new CreateDeployedDevicesDeviceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDeployedDevicesDevice($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployedDevicesFleet

Create a new Fleet for scoping of deployed devices within your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesFleetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeployedDevicesFleetCreateDeployedDevicesFleetRequest();
    $request->friendlyName = 'delectus';

    $requestSecurity = new CreateDeployedDevicesFleetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDeployedDevicesFleet($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployedDevicesKey

Create a new Key credential in the Fleet, optionally giving it a friendly name and assigning to a Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeployedDevicesKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeployedDevicesKeyRequest();
    $request->fleetSid = 'tempora';
    $request->requestBody = new CreateDeployedDevicesKeyCreateDeployedDevicesKeyRequest();
    $request->requestBody->deviceSid = 'suscipit';
    $request->requestBody->friendlyName = 'molestiae';

    $requestSecurity = new CreateDeployedDevicesKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createDeployedDevicesKey($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHostedNumbersAuthorizationDocument

Create an AuthorizationDocument for authorizing the hosting of phone number capabilities on Twilio's platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostedNumbersAuthorizationDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHostedNumbersAuthorizationDocumentCreateHostedNumbersAuthorizationDocumentRequest();
    $request->addressSid = 'minus';
    $request->ccEmails = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->contactPhoneNumber = 'recusandae';
    $request->contactTitle = 'temporibus';
    $request->email = 'Ettie.Bogisich@gmail.com';
    $request->hostedNumberOrderSids = [
        'repellendus',
        'sapiente',
    ];

    $requestSecurity = new CreateHostedNumbersAuthorizationDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createHostedNumbersAuthorizationDocument($request, $requestSecurity);

    if ($response->previewHostedNumbersAuthorizationDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createHostedNumbersHostedNumberOrder

Host a phone number's capability on Twilio's platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\HostedNumberOrderEnumVerificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateHostedNumbersHostedNumberOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequest();
    $request->accountSid = 'quo';
    $request->addressSid = 'odit';
    $request->ccEmails = [
        'at',
        'maiores',
        'molestiae',
        'quod',
    ];
    $request->email = 'Jakayla_Lebsack11@hotmail.com';
    $request->friendlyName = 'nam';
    $request->phoneNumber = 'officia';
    $request->smsApplicationSid = 'occaecati';
    $request->smsCapability = false;
    $request->smsFallbackMethod = CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsFallbackMethodEnum::HEAD;
    $request->smsFallbackUrl = 'https://wasteful-route.name';
    $request->smsMethod = CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestSmsMethodEnum::HEAD;
    $request->smsUrl = 'http://kosher-dipstick.biz';
    $request->statusCallbackMethod = CreateHostedNumbersHostedNumberOrderCreateHostedNumbersHostedNumberOrderRequestStatusCallbackMethodEnum::PUT;
    $request->statusCallbackUrl = 'https://jolly-cowboy.name';
    $request->uniqueName = 'aspernatur';
    $request->verificationDocumentSid = 'perferendis';
    $request->verificationType = HostedNumberOrderEnumVerificationTypeEnum::PHONE_CALL;

    $requestSecurity = new CreateHostedNumbersHostedNumberOrderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createHostedNumbersHostedNumberOrder($request, $requestSecurity);

    if ($response->previewHostedNumbersHostedNumberOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createMarketplaceInstalledAddOn

Install an Add-on for the Account specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMarketplaceInstalledAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMarketplaceInstalledAddOnCreateMarketplaceInstalledAddOnRequest();
    $request->acceptTermsOfService = false;
    $request->availableAddOnSid = 'natus';
    $request->configuration = 'sed';
    $request->uniqueName = 'iste';

    $requestSecurity = new CreateMarketplaceInstalledAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createMarketplaceInstalledAddOn($request, $requestSecurity);

    if ($response->previewMarketplaceInstalledAddOn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncDocumentCreateSyncDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncDocumentRequest();
    $request->requestBody = new CreateSyncDocumentCreateSyncDocumentRequest();
    $request->requestBody->data = 'dolor';
    $request->requestBody->uniqueName = 'natus';
    $request->serviceSid = 'laboriosam';

    $requestSecurity = new CreateSyncDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncDocument($request, $requestSecurity);

    if ($response->previewSyncServiceDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncServiceCreateSyncServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncServiceCreateSyncServiceRequest();
    $request->aclEnabled = false;
    $request->friendlyName = 'hic';
    $request->reachabilityWebhooksEnabled = false;
    $request->webhookUrl = 'https://reckless-illustration.info';

    $requestSecurity = new CreateSyncServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncService($request, $requestSecurity);

    if ($response->previewSyncService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncSyncList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncListCreateSyncSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncSyncListRequest();
    $request->requestBody = new CreateSyncSyncListCreateSyncSyncListRequest();
    $request->requestBody->uniqueName = 'iste';
    $request->serviceSid = 'iure';

    $requestSecurity = new CreateSyncSyncListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncSyncList($request, $requestSecurity);

    if ($response->previewSyncServiceSyncList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncListItemCreateSyncSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncSyncListItemRequest();
    $request->listSid = 'saepe';
    $request->requestBody = new CreateSyncSyncListItemCreateSyncSyncListItemRequest();
    $request->requestBody->data = 'quidem';
    $request->serviceSid = 'architecto';

    $requestSecurity = new CreateSyncSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncSyncListItem($request, $requestSecurity);

    if ($response->previewSyncServiceSyncListSyncListItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncSyncMap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncMapCreateSyncSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncMapSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncSyncMapRequest();
    $request->requestBody = new CreateSyncSyncMapCreateSyncSyncMapRequest();
    $request->requestBody->uniqueName = 'ipsa';
    $request->serviceSid = 'reiciendis';

    $requestSecurity = new CreateSyncSyncMapSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncSyncMap($request, $requestSecurity);

    if ($response->previewSyncServiceSyncMap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSyncSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncMapItemCreateSyncSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSyncSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSyncSyncMapItemRequest();
    $request->mapSid = 'est';
    $request->requestBody = new CreateSyncSyncMapItemCreateSyncSyncMapItemRequest();
    $request->requestBody->data = 'mollitia';
    $request->requestBody->key = 'laborum';
    $request->serviceSid = 'dolores';

    $requestSecurity = new CreateSyncSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createSyncSyncMapItem($request, $requestSecurity);

    if ($response->previewSyncServiceSyncMapSyncMapItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnderstandAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandAssistantCreateUnderstandAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnderstandAssistantCreateUnderstandAssistantRequest();
    $request->callbackEvents = 'dolorem';
    $request->callbackUrl = 'http://colorless-ribbon.biz';
    $request->fallbackActions = 'omnis';
    $request->friendlyName = 'nemo';
    $request->initiationActions = 'minima';
    $request->logQueries = false;
    $request->styleSheet = 'excepturi';
    $request->uniqueName = 'accusantium';

    $requestSecurity = new CreateUnderstandAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUnderstandAssistant($request, $requestSecurity);

    if ($response->previewUnderstandAssistant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnderstandField

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandFieldCreateUnderstandFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandFieldSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnderstandFieldRequest();
    $request->assistantSid = 'iure';
    $request->requestBody = new CreateUnderstandFieldCreateUnderstandFieldRequest();
    $request->requestBody->fieldType = 'culpa';
    $request->requestBody->uniqueName = 'doloribus';
    $request->taskSid = 'sapiente';

    $requestSecurity = new CreateUnderstandFieldSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUnderstandField($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTaskField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnderstandFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnderstandFieldTypeRequest();
    $request->assistantSid = 'architecto';
    $request->requestBody = new CreateUnderstandFieldTypeCreateUnderstandFieldTypeRequest();
    $request->requestBody->friendlyName = 'mollitia';
    $request->requestBody->uniqueName = 'dolorem';

    $requestSecurity = new CreateUnderstandFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUnderstandFieldType($request, $requestSecurity);

    if ($response->previewUnderstandAssistantFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnderstandFieldValue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandFieldValueCreateUnderstandFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandFieldValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnderstandFieldValueRequest();
    $request->assistantSid = 'culpa';
    $request->fieldTypeSid = 'consequuntur';
    $request->requestBody = new CreateUnderstandFieldValueCreateUnderstandFieldValueRequest();
    $request->requestBody->language = 'repellat';
    $request->requestBody->synonymOf = 'mollitia';
    $request->requestBody->value = 'occaecati';

    $requestSecurity = new CreateUnderstandFieldValueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUnderstandFieldValue($request, $requestSecurity);

    if ($response->previewUnderstandAssistantFieldTypeFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnderstandModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandModelBuildCreateUnderstandModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnderstandModelBuildRequest();
    $request->assistantSid = 'numquam';
    $request->requestBody = new CreateUnderstandModelBuildCreateUnderstandModelBuildRequest();
    $request->requestBody->statusCallback = 'http://kind-ironclad.biz';
    $request->requestBody->uniqueName = 'error';

    $requestSecurity = new CreateUnderstandModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUnderstandModelBuild($request, $requestSecurity);

    if ($response->previewUnderstandAssistantModelBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnderstandQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandQueryCreateUnderstandQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnderstandQueryRequest();
    $request->assistantSid = 'quia';
    $request->requestBody = new CreateUnderstandQueryCreateUnderstandQueryRequest();
    $request->requestBody->field = 'quis';
    $request->requestBody->language = 'vitae';
    $request->requestBody->modelBuild = 'laborum';
    $request->requestBody->query = 'animi';
    $request->requestBody->tasks = 'enim';

    $requestSecurity = new CreateUnderstandQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUnderstandQuery($request, $requestSecurity);

    if ($response->previewUnderstandAssistantQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnderstandSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandSampleCreateUnderstandSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnderstandSampleRequest();
    $request->assistantSid = 'odit';
    $request->requestBody = new CreateUnderstandSampleCreateUnderstandSampleRequest();
    $request->requestBody->language = 'quo';
    $request->requestBody->sourceChannel = 'sequi';
    $request->requestBody->taggedText = 'tenetur';
    $request->taskSid = 'ipsam';

    $requestSecurity = new CreateUnderstandSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUnderstandSample($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTaskSample !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUnderstandTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandTaskCreateUnderstandTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUnderstandTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUnderstandTaskRequest();
    $request->assistantSid = 'id';
    $request->requestBody = new CreateUnderstandTaskCreateUnderstandTaskRequest();
    $request->requestBody->actions = 'possimus';
    $request->requestBody->actionsUrl = 'http://bumpy-overview.org';
    $request->requestBody->friendlyName = 'laborum';
    $request->requestBody->uniqueName = 'quasi';

    $requestSecurity = new CreateUnderstandTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createUnderstandTask($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWirelessCommand

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWirelessCommandCreateWirelessCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWirelessCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWirelessCommandCreateWirelessCommandRequest();
    $request->callbackMethod = 'reiciendis';
    $request->callbackUrl = 'https://twin-intent.name';
    $request->command = 'voluptatibus';
    $request->commandMode = 'ipsa';
    $request->device = 'omnis';
    $request->includeSid = 'voluptate';
    $request->sim = 'cum';

    $requestSecurity = new CreateWirelessCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createWirelessCommand($request, $requestSecurity);

    if ($response->previewWirelessCommand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWirelessRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateWirelessRatePlanCreateWirelessRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWirelessRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWirelessRatePlanCreateWirelessRatePlanRequest();
    $request->commandsEnabled = false;
    $request->dataEnabled = false;
    $request->dataLimit = 19987;
    $request->dataMetering = 'doloremque';
    $request->friendlyName = 'reprehenderit';
    $request->internationalRoaming = [
        'maiores',
        'dicta',
    ];
    $request->messagingEnabled = false;
    $request->nationalRoamingEnabled = false;
    $request->uniqueName = 'corporis';
    $request->voiceEnabled = false;

    $requestSecurity = new CreateWirelessRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->createWirelessRatePlan($request, $requestSecurity);

    if ($response->previewWirelessRatePlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeployedDevicesCertificate

Unregister a specific Certificate credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesCertificateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeployedDevicesCertificateRequest();
    $request->fleetSid = 'dolore';
    $request->sid = 'iusto';

    $requestSecurity = new DeleteDeployedDevicesCertificateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDeployedDevicesCertificate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeployedDevicesDeployment

Delete a specific Deployment from the Fleet, leaving associated devices effectively undeployed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesDeploymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeployedDevicesDeploymentRequest();
    $request->fleetSid = 'dicta';
    $request->sid = 'harum';

    $requestSecurity = new DeleteDeployedDevicesDeploymentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDeployedDevicesDeployment($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeployedDevicesDevice

Delete a specific Device from the Fleet, also removing it from associated Deployments.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeployedDevicesDeviceRequest();
    $request->fleetSid = 'enim';
    $request->sid = 'accusamus';

    $requestSecurity = new DeleteDeployedDevicesDeviceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDeployedDevicesDevice($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeployedDevicesFleet

Delete a specific Fleet from your account, also destroys all nested resources: Devices, Deployments, Certificates, Keys.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesFleetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeployedDevicesFleetRequest();
    $request->sid = 'commodi';

    $requestSecurity = new DeleteDeployedDevicesFleetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDeployedDevicesFleet($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDeployedDevicesKey

Delete a specific Key credential from the Fleet, effectively disallowing any inbound client connections that are presenting it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDeployedDevicesKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDeployedDevicesKeyRequest();
    $request->fleetSid = 'repudiandae';
    $request->sid = 'quae';

    $requestSecurity = new DeleteDeployedDevicesKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteDeployedDevicesKey($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteHostedNumbersHostedNumberOrder

Cancel the HostedNumberOrder (only available when the status is in `received`).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHostedNumbersHostedNumberOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteHostedNumbersHostedNumberOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteHostedNumbersHostedNumberOrderRequest();
    $request->sid = 'ipsum';

    $requestSecurity = new DeleteHostedNumbersHostedNumberOrderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteHostedNumbersHostedNumberOrder($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMarketplaceInstalledAddOn

Remove an Add-on installation from your account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMarketplaceInstalledAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMarketplaceInstalledAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMarketplaceInstalledAddOnRequest();
    $request->sid = 'quidem';

    $requestSecurity = new DeleteMarketplaceInstalledAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteMarketplaceInstalledAddOn($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncDocumentRequest();
    $request->serviceSid = 'molestias';
    $request->sid = 'excepturi';

    $requestSecurity = new DeleteSyncDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncDocument($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncDocumentPermission

Delete a specific Sync Document Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncDocumentPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncDocumentPermissionRequest();
    $request->documentSid = 'pariatur';
    $request->identity = 'modi';
    $request->serviceSid = 'praesentium';

    $requestSecurity = new DeleteSyncDocumentPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncDocumentPermission($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncServiceRequest();
    $request->sid = 'rem';

    $requestSecurity = new DeleteSyncServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncService($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncSyncList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncSyncListRequest();
    $request->serviceSid = 'voluptates';
    $request->sid = 'quasi';

    $requestSecurity = new DeleteSyncSyncListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncSyncList($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncSyncListItemRequest();
    $request->ifMatch = 'repudiandae';
    $request->index = 575947;
    $request->listSid = 'veritatis';
    $request->serviceSid = 'itaque';

    $requestSecurity = new DeleteSyncSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncSyncListItem($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncSyncListPermission

Delete a specific Sync List Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncListPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncSyncListPermissionRequest();
    $request->identity = 'incidunt';
    $request->listSid = 'enim';
    $request->serviceSid = 'consequatur';

    $requestSecurity = new DeleteSyncSyncListPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncSyncListPermission($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncSyncMap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncMapSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncSyncMapRequest();
    $request->serviceSid = 'est';
    $request->sid = 'quibusdam';

    $requestSecurity = new DeleteSyncSyncMapSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncSyncMap($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncSyncMapItemRequest();
    $request->ifMatch = 'explicabo';
    $request->key = 'deserunt';
    $request->mapSid = 'distinctio';
    $request->serviceSid = 'quibusdam';

    $requestSecurity = new DeleteSyncSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncSyncMapItem($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSyncSyncMapPermission

Delete a specific Sync Map Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSyncSyncMapPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSyncSyncMapPermissionRequest();
    $request->identity = 'labore';
    $request->mapSid = 'modi';
    $request->serviceSid = 'qui';

    $requestSecurity = new DeleteSyncSyncMapPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteSyncSyncMapPermission($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUnderstandAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUnderstandAssistantRequest();
    $request->sid = 'aliquid';

    $requestSecurity = new DeleteUnderstandAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUnderstandAssistant($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUnderstandField

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandFieldSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUnderstandFieldRequest();
    $request->assistantSid = 'cupiditate';
    $request->sid = 'quos';
    $request->taskSid = 'perferendis';

    $requestSecurity = new DeleteUnderstandFieldSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUnderstandField($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUnderstandFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUnderstandFieldTypeRequest();
    $request->assistantSid = 'magni';
    $request->sid = 'assumenda';

    $requestSecurity = new DeleteUnderstandFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUnderstandFieldType($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUnderstandFieldValue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandFieldValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUnderstandFieldValueRequest();
    $request->assistantSid = 'ipsam';
    $request->fieldTypeSid = 'alias';
    $request->sid = 'fugit';

    $requestSecurity = new DeleteUnderstandFieldValueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUnderstandFieldValue($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUnderstandModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUnderstandModelBuildRequest();
    $request->assistantSid = 'dolorum';
    $request->sid = 'excepturi';

    $requestSecurity = new DeleteUnderstandModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUnderstandModelBuild($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUnderstandQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUnderstandQueryRequest();
    $request->assistantSid = 'tempora';
    $request->sid = 'facilis';

    $requestSecurity = new DeleteUnderstandQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUnderstandQuery($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUnderstandSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUnderstandSampleRequest();
    $request->assistantSid = 'tempore';
    $request->sid = 'labore';
    $request->taskSid = 'delectus';

    $requestSecurity = new DeleteUnderstandSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUnderstandSample($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUnderstandTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUnderstandTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUnderstandTaskRequest();
    $request->assistantSid = 'eum';
    $request->sid = 'non';

    $requestSecurity = new DeleteUnderstandTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteUnderstandTask($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWirelessRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWirelessRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWirelessRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWirelessRatePlanRequest();
    $request->sid = 'eligendi';

    $requestSecurity = new DeleteWirelessRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->deleteWirelessRatePlan($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDeployedDevicesCertificate

Fetch information about a specific Certificate credential in the Fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesCertificateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeployedDevicesCertificateRequest();
    $request->fleetSid = 'sint';
    $request->sid = 'aliquid';

    $requestSecurity = new FetchDeployedDevicesCertificateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDeployedDevicesCertificate($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDeployedDevicesDeployment

Fetch information about a specific Deployment in the Fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesDeploymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeployedDevicesDeploymentRequest();
    $request->fleetSid = 'provident';
    $request->sid = 'necessitatibus';

    $requestSecurity = new FetchDeployedDevicesDeploymentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDeployedDevicesDeployment($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDeployedDevicesDevice

Fetch information about a specific Device in the Fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeployedDevicesDeviceRequest();
    $request->fleetSid = 'sint';
    $request->sid = 'officia';

    $requestSecurity = new FetchDeployedDevicesDeviceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDeployedDevicesDevice($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDeployedDevicesFleet

Fetch information about a specific Fleet in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesFleetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeployedDevicesFleetRequest();
    $request->sid = 'dolor';

    $requestSecurity = new FetchDeployedDevicesFleetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDeployedDevicesFleet($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchDeployedDevicesKey

Fetch information about a specific Key credential in the Fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchDeployedDevicesKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchDeployedDevicesKeyRequest();
    $request->fleetSid = 'debitis';
    $request->sid = 'a';

    $requestSecurity = new FetchDeployedDevicesKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchDeployedDevicesKey($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchHostedNumbersAuthorizationDocument

Fetch a specific AuthorizationDocument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchHostedNumbersAuthorizationDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchHostedNumbersAuthorizationDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchHostedNumbersAuthorizationDocumentRequest();
    $request->sid = 'dolorum';

    $requestSecurity = new FetchHostedNumbersAuthorizationDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchHostedNumbersAuthorizationDocument($request, $requestSecurity);

    if ($response->previewHostedNumbersAuthorizationDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchHostedNumbersHostedNumberOrder

Fetch a specific HostedNumberOrder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchHostedNumbersHostedNumberOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchHostedNumbersHostedNumberOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchHostedNumbersHostedNumberOrderRequest();
    $request->sid = 'in';

    $requestSecurity = new FetchHostedNumbersHostedNumberOrderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchHostedNumbersHostedNumberOrder($request, $requestSecurity);

    if ($response->previewHostedNumbersHostedNumberOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMarketplaceAvailableAddOn

Fetch an instance of an Add-on currently available to be installed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMarketplaceAvailableAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMarketplaceAvailableAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMarketplaceAvailableAddOnRequest();
    $request->sid = 'in';

    $requestSecurity = new FetchMarketplaceAvailableAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMarketplaceAvailableAddOn($request, $requestSecurity);

    if ($response->previewMarketplaceAvailableAddOn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMarketplaceAvailableAddOnExtension

Fetch an instance of an Extension for the Available Add-on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMarketplaceAvailableAddOnExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMarketplaceAvailableAddOnExtensionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMarketplaceAvailableAddOnExtensionRequest();
    $request->availableAddOnSid = 'illum';
    $request->sid = 'maiores';

    $requestSecurity = new FetchMarketplaceAvailableAddOnExtensionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMarketplaceAvailableAddOnExtension($request, $requestSecurity);

    if ($response->previewMarketplaceAvailableAddOnAvailableAddOnExtension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMarketplaceInstalledAddOn

Fetch an instance of an Add-on currently installed on this Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMarketplaceInstalledAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMarketplaceInstalledAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMarketplaceInstalledAddOnRequest();
    $request->sid = 'rerum';

    $requestSecurity = new FetchMarketplaceInstalledAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMarketplaceInstalledAddOn($request, $requestSecurity);

    if ($response->previewMarketplaceInstalledAddOn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchMarketplaceInstalledAddOnExtension

Fetch an instance of an Extension for the Installed Add-on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchMarketplaceInstalledAddOnExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchMarketplaceInstalledAddOnExtensionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchMarketplaceInstalledAddOnExtensionRequest();
    $request->installedAddOnSid = 'dicta';
    $request->sid = 'magnam';

    $requestSecurity = new FetchMarketplaceInstalledAddOnExtensionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchMarketplaceInstalledAddOnExtension($request, $requestSecurity);

    if ($response->previewMarketplaceInstalledAddOnInstalledAddOnExtension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncDocumentRequest();
    $request->serviceSid = 'cumque';
    $request->sid = 'facere';

    $requestSecurity = new FetchSyncDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncDocument($request, $requestSecurity);

    if ($response->previewSyncServiceDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncDocumentPermission

Fetch a specific Sync Document Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncDocumentPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncDocumentPermissionRequest();
    $request->documentSid = 'ea';
    $request->identity = 'aliquid';
    $request->serviceSid = 'laborum';

    $requestSecurity = new FetchSyncDocumentPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncDocumentPermission($request, $requestSecurity);

    if ($response->previewSyncServiceDocumentDocumentPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncServiceRequest();
    $request->sid = 'accusamus';

    $requestSecurity = new FetchSyncServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncService($request, $requestSecurity);

    if ($response->previewSyncService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncSyncList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncSyncListRequest();
    $request->serviceSid = 'non';
    $request->sid = 'occaecati';

    $requestSecurity = new FetchSyncSyncListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncSyncList($request, $requestSecurity);

    if ($response->previewSyncServiceSyncList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncSyncListItemRequest();
    $request->index = 313218;
    $request->listSid = 'accusamus';
    $request->serviceSid = 'delectus';

    $requestSecurity = new FetchSyncSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncSyncListItem($request, $requestSecurity);

    if ($response->previewSyncServiceSyncListSyncListItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncSyncListPermission

Fetch a specific Sync List Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncListPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncSyncListPermissionRequest();
    $request->identity = 'quidem';
    $request->listSid = 'provident';
    $request->serviceSid = 'nam';

    $requestSecurity = new FetchSyncSyncListPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncSyncListPermission($request, $requestSecurity);

    if ($response->previewSyncServiceSyncListSyncListPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncSyncMap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncMapSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncSyncMapRequest();
    $request->serviceSid = 'id';
    $request->sid = 'blanditiis';

    $requestSecurity = new FetchSyncSyncMapSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncSyncMap($request, $requestSecurity);

    if ($response->previewSyncServiceSyncMap !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncSyncMapItemRequest();
    $request->key = 'deleniti';
    $request->mapSid = 'sapiente';
    $request->serviceSid = 'amet';

    $requestSecurity = new FetchSyncSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncSyncMapItem($request, $requestSecurity);

    if ($response->previewSyncServiceSyncMapSyncMapItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchSyncSyncMapPermission

Fetch a specific Sync Map Permission.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchSyncSyncMapPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchSyncSyncMapPermissionRequest();
    $request->identity = 'deserunt';
    $request->mapSid = 'nisi';
    $request->serviceSid = 'vel';

    $requestSecurity = new FetchSyncSyncMapPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchSyncSyncMapPermission($request, $requestSecurity);

    if ($response->previewSyncServiceSyncMapSyncMapPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandAssistantRequest();
    $request->sid = 'natus';

    $requestSecurity = new FetchUnderstandAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandAssistant($request, $requestSecurity);

    if ($response->previewUnderstandAssistant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandAssistantFallbackActions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandAssistantFallbackActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandAssistantFallbackActionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandAssistantFallbackActionsRequest();
    $request->assistantSid = 'omnis';

    $requestSecurity = new FetchUnderstandAssistantFallbackActionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandAssistantFallbackActions($request, $requestSecurity);

    if ($response->previewUnderstandAssistantAssistantFallbackActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandAssistantInitiationActions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandAssistantInitiationActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandAssistantInitiationActionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandAssistantInitiationActionsRequest();
    $request->assistantSid = 'molestiae';

    $requestSecurity = new FetchUnderstandAssistantInitiationActionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandAssistantInitiationActions($request, $requestSecurity);

    if ($response->previewUnderstandAssistantAssistantInitiationActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandDialogue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandDialogueRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandDialogueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandDialogueRequest();
    $request->assistantSid = 'perferendis';
    $request->sid = 'nihil';

    $requestSecurity = new FetchUnderstandDialogueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandDialogue($request, $requestSecurity);

    if ($response->previewUnderstandAssistantDialogue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandField

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandFieldSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandFieldRequest();
    $request->assistantSid = 'magnam';
    $request->sid = 'distinctio';
    $request->taskSid = 'id';

    $requestSecurity = new FetchUnderstandFieldSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandField($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTaskField !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandFieldTypeRequest();
    $request->assistantSid = 'labore';
    $request->sid = 'labore';

    $requestSecurity = new FetchUnderstandFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandFieldType($request, $requestSecurity);

    if ($response->previewUnderstandAssistantFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandFieldValue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandFieldValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandFieldValueRequest();
    $request->assistantSid = 'suscipit';
    $request->fieldTypeSid = 'natus';
    $request->sid = 'nobis';

    $requestSecurity = new FetchUnderstandFieldValueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandFieldValue($request, $requestSecurity);

    if ($response->previewUnderstandAssistantFieldTypeFieldValue !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandModelBuildRequest();
    $request->assistantSid = 'eum';
    $request->sid = 'vero';

    $requestSecurity = new FetchUnderstandModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandModelBuild($request, $requestSecurity);

    if ($response->previewUnderstandAssistantModelBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandQueryRequest();
    $request->assistantSid = 'aspernatur';
    $request->sid = 'architecto';

    $requestSecurity = new FetchUnderstandQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandQuery($request, $requestSecurity);

    if ($response->previewUnderstandAssistantQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandSampleRequest();
    $request->assistantSid = 'magnam';
    $request->sid = 'et';
    $request->taskSid = 'excepturi';

    $requestSecurity = new FetchUnderstandSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandSample($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTaskSample !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandStyleSheet

Returns Style sheet JSON object for this Assistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandStyleSheetRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandStyleSheetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandStyleSheetRequest();
    $request->assistantSid = 'ullam';

    $requestSecurity = new FetchUnderstandStyleSheetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandStyleSheet($request, $requestSecurity);

    if ($response->previewUnderstandAssistantStyleSheet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandTaskRequest();
    $request->assistantSid = 'provident';
    $request->sid = 'quos';

    $requestSecurity = new FetchUnderstandTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandTask($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandTaskActions

Returns JSON actions for this Task.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandTaskActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandTaskActionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandTaskActionsRequest();
    $request->assistantSid = 'sint';
    $request->taskSid = 'accusantium';

    $requestSecurity = new FetchUnderstandTaskActionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandTaskActions($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTaskTaskActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchUnderstandTaskStatistics

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandTaskStatisticsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchUnderstandTaskStatisticsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchUnderstandTaskStatisticsRequest();
    $request->assistantSid = 'mollitia';
    $request->taskSid = 'reiciendis';

    $requestSecurity = new FetchUnderstandTaskStatisticsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchUnderstandTaskStatistics($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTaskTaskStatistics !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWirelessCommand

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWirelessCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWirelessCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWirelessCommandRequest();
    $request->sid = 'mollitia';

    $requestSecurity = new FetchWirelessCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWirelessCommand($request, $requestSecurity);

    if ($response->previewWirelessCommand !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWirelessRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWirelessRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWirelessRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWirelessRatePlanRequest();
    $request->sid = 'ad';

    $requestSecurity = new FetchWirelessRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWirelessRatePlan($request, $requestSecurity);

    if ($response->previewWirelessRatePlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWirelessSim

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWirelessSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWirelessSimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWirelessSimRequest();
    $request->sid = 'eum';

    $requestSecurity = new FetchWirelessSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWirelessSim($request, $requestSecurity);

    if ($response->previewWirelessSim !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## fetchWirelessUsage

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FetchWirelessUsageRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchWirelessUsageSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchWirelessUsageRequest();
    $request->end = 'dolor';
    $request->simSid = 'necessitatibus';
    $request->start = 'odit';

    $requestSecurity = new FetchWirelessUsageSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->fetchWirelessUsage($request, $requestSecurity);

    if ($response->previewWirelessSimUsage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployedDevicesCertificate

Retrieve a list of all Certificate credentials belonging to the Fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesCertificateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeployedDevicesCertificateRequest();
    $request->deviceSid = 'nemo';
    $request->fleetSid = 'quasi';
    $request->page = 435865;
    $request->pageSize = 984043;
    $request->pageToken = 'debitis';

    $requestSecurity = new ListDeployedDevicesCertificateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDeployedDevicesCertificate($request, $requestSecurity);

    if ($response->listDeployedDevicesCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployedDevicesDeployment

Retrieve a list of all Deployments belonging to the Fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesDeploymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeployedDevicesDeploymentRequest();
    $request->fleetSid = 'eius';
    $request->page = 806194;
    $request->pageSize = 537023;
    $request->pageToken = 'facilis';

    $requestSecurity = new ListDeployedDevicesDeploymentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDeployedDevicesDeployment($request, $requestSecurity);

    if ($response->listDeployedDevicesDeploymentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployedDevicesDevice

Retrieve a list of all Devices belonging to the Fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeployedDevicesDeviceRequest();
    $request->deploymentSid = 'in';
    $request->fleetSid = 'architecto';
    $request->page = 99569;
    $request->pageSize = 919483;
    $request->pageToken = 'ullam';

    $requestSecurity = new ListDeployedDevicesDeviceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDeployedDevicesDevice($request, $requestSecurity);

    if ($response->listDeployedDevicesDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployedDevicesFleet

Retrieve a list of all Fleets belonging to your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesFleetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeployedDevicesFleetRequest();
    $request->page = 714242;
    $request->pageSize = 469249;
    $request->pageToken = 'repellat';

    $requestSecurity = new ListDeployedDevicesFleetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDeployedDevicesFleet($request, $requestSecurity);

    if ($response->listDeployedDevicesFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeployedDevicesKey

Retrieve a list of all Keys credentials belonging to the Fleet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeployedDevicesKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeployedDevicesKeyRequest();
    $request->deviceSid = 'quibusdam';
    $request->fleetSid = 'sed';
    $request->page = 904648;
    $request->pageSize = 868126;
    $request->pageToken = 'accusantium';

    $requestSecurity = new ListDeployedDevicesKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listDeployedDevicesKey($request, $requestSecurity);

    if ($response->listDeployedDevicesKeyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHostedNumbersAuthorizationDocument

Retrieve a list of AuthorizationDocuments belonging to the account initiating the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListHostedNumbersAuthorizationDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationDocumentEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListHostedNumbersAuthorizationDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHostedNumbersAuthorizationDocumentRequest();
    $request->email = 'Johan12@gmail.com';
    $request->page = 779051;
    $request->pageSize = 848009;
    $request->pageToken = 'pariatur';
    $request->status = AuthorizationDocumentEnumStatusEnum::FAILED;

    $requestSecurity = new ListHostedNumbersAuthorizationDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listHostedNumbersAuthorizationDocument($request, $requestSecurity);

    if ($response->listHostedNumbersAuthorizationDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHostedNumbersDependentHostedNumberOrder

Retrieve a list of dependent HostedNumberOrders belonging to the AuthorizationDocument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListHostedNumbersDependentHostedNumberOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\DependentHostedNumberOrderEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListHostedNumbersDependentHostedNumberOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHostedNumbersDependentHostedNumberOrderRequest();
    $request->friendlyName = 'ea';
    $request->incomingPhoneNumberSid = 'excepturi';
    $request->page = 139972;
    $request->pageSize = 407183;
    $request->pageToken = 'accusantium';
    $request->phoneNumber = 'ab';
    $request->signingDocumentSid = 'maiores';
    $request->status = DependentHostedNumberOrderEnumStatusEnum::COMPLETED;
    $request->uniqueName = 'ipsam';

    $requestSecurity = new ListHostedNumbersDependentHostedNumberOrderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listHostedNumbersDependentHostedNumberOrder($request, $requestSecurity);

    if ($response->listHostedNumbersDependentHostedNumberOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listHostedNumbersHostedNumberOrder

Retrieve a list of HostedNumberOrders belonging to the account initiating the request.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListHostedNumbersHostedNumberOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\HostedNumberOrderEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListHostedNumbersHostedNumberOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListHostedNumbersHostedNumberOrderRequest();
    $request->friendlyName = 'voluptate';
    $request->incomingPhoneNumberSid = 'autem';
    $request->page = 722056;
    $request->pageSize = 50588;
    $request->pageToken = 'pariatur';
    $request->phoneNumber = 'nemo';
    $request->status = HostedNumberOrderEnumStatusEnum::ACTION_REQUIRED;
    $request->uniqueName = 'perferendis';

    $requestSecurity = new ListHostedNumbersHostedNumberOrderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listHostedNumbersHostedNumberOrder($request, $requestSecurity);

    if ($response->listHostedNumbersHostedNumberOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMarketplaceAvailableAddOn

Retrieve a list of Add-ons currently available to be installed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMarketplaceAvailableAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMarketplaceAvailableAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMarketplaceAvailableAddOnRequest();
    $request->page = 855804;
    $request->pageSize = 230742;
    $request->pageToken = 'aut';

    $requestSecurity = new ListMarketplaceAvailableAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMarketplaceAvailableAddOn($request, $requestSecurity);

    if ($response->listMarketplaceAvailableAddOnResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMarketplaceAvailableAddOnExtension

Retrieve a list of Extensions for the Available Add-on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMarketplaceAvailableAddOnExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMarketplaceAvailableAddOnExtensionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMarketplaceAvailableAddOnExtensionRequest();
    $request->availableAddOnSid = 'cumque';
    $request->page = 359978;
    $request->pageSize = 944124;
    $request->pageToken = 'libero';

    $requestSecurity = new ListMarketplaceAvailableAddOnExtensionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMarketplaceAvailableAddOnExtension($request, $requestSecurity);

    if ($response->listMarketplaceAvailableAddOnExtensionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMarketplaceInstalledAddOn

Retrieve a list of Add-ons currently installed on this Account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMarketplaceInstalledAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMarketplaceInstalledAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMarketplaceInstalledAddOnRequest();
    $request->page = 749999;
    $request->pageSize = 171629;
    $request->pageToken = 'quis';

    $requestSecurity = new ListMarketplaceInstalledAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMarketplaceInstalledAddOn($request, $requestSecurity);

    if ($response->listMarketplaceInstalledAddOnResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listMarketplaceInstalledAddOnExtension

Retrieve a list of Extensions for the Installed Add-on.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListMarketplaceInstalledAddOnExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListMarketplaceInstalledAddOnExtensionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListMarketplaceInstalledAddOnExtensionRequest();
    $request->installedAddOnSid = 'totam';
    $request->page = 489549;
    $request->pageSize = 54338;
    $request->pageToken = 'quis';

    $requestSecurity = new ListMarketplaceInstalledAddOnExtensionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listMarketplaceInstalledAddOnExtension($request, $requestSecurity);

    if ($response->listMarketplaceInstalledAddOnExtensionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncDocumentRequest();
    $request->page = 199996;
    $request->pageSize = 179490;
    $request->pageToken = 'perferendis';
    $request->serviceSid = 'dolores';

    $requestSecurity = new ListSyncDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncDocument($request, $requestSecurity);

    if ($response->listSyncDocumentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncDocumentPermission

Retrieve a list of all Permissions applying to a Sync Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncDocumentPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncDocumentPermissionRequest();
    $request->documentSid = 'minus';
    $request->page = 463451;
    $request->pageSize = 223924;
    $request->pageToken = 'vero';
    $request->serviceSid = 'nostrum';

    $requestSecurity = new ListSyncDocumentPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncDocumentPermission($request, $requestSecurity);

    if ($response->listSyncDocumentPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncServiceRequest();
    $request->page = 944120;
    $request->pageSize = 928082;
    $request->pageToken = 'omnis';

    $requestSecurity = new ListSyncServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncService($request, $requestSecurity);

    if ($response->listSyncServiceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncSyncList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncSyncListRequest();
    $request->page = 704415;
    $request->pageSize = 596656;
    $request->pageToken = 'voluptatem';
    $request->serviceSid = 'porro';

    $requestSecurity = new ListSyncSyncListSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncSyncList($request, $requestSecurity);

    if ($response->listSyncSyncListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\SyncListItemEnumQueryFromBoundTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyncListItemEnumQueryResultOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncSyncListItemRequest();
    $request->bounds = SyncListItemEnumQueryFromBoundTypeEnum::INCLUSIVE;
    $request->from = 'blanditiis';
    $request->listSid = 'error';
    $request->order = SyncListItemEnumQueryResultOrderEnum::ASC;
    $request->page = 577229;
    $request->pageSize = 699098;
    $request->pageToken = 'adipisci';
    $request->serviceSid = 'asperiores';

    $requestSecurity = new ListSyncSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncSyncListItem($request, $requestSecurity);

    if ($response->listSyncSyncListItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncSyncListPermission

Retrieve a list of all Permissions applying to a Sync List.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncListPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncSyncListPermissionRequest();
    $request->listSid = 'earum';
    $request->page = 267262;
    $request->pageSize = 613966;
    $request->pageToken = 'dolorum';
    $request->serviceSid = 'deleniti';

    $requestSecurity = new ListSyncSyncListPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncSyncListPermission($request, $requestSecurity);

    if ($response->listSyncSyncListPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncSyncMap

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncMapRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncMapSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncSyncMapRequest();
    $request->page = 864282;
    $request->pageSize = 589910;
    $request->pageToken = 'nobis';
    $request->serviceSid = 'libero';

    $requestSecurity = new ListSyncSyncMapSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncSyncMap($request, $requestSecurity);

    if ($response->listSyncSyncMapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\SyncMapItemEnumQueryFromBoundTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SyncMapItemEnumQueryResultOrderEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncSyncMapItemRequest();
    $request->bounds = SyncMapItemEnumQueryFromBoundTypeEnum::EXCLUSIVE;
    $request->from = 'quaerat';
    $request->mapSid = 'quos';
    $request->order = SyncMapItemEnumQueryResultOrderEnum::ASC;
    $request->page = 212390;
    $request->pageSize = 209843;
    $request->pageToken = 'dolor';
    $request->serviceSid = 'qui';

    $requestSecurity = new ListSyncSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncSyncMapItem($request, $requestSecurity);

    if ($response->listSyncSyncMapItemResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSyncSyncMapPermission

Retrieve a list of all Permissions applying to a Sync Map.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSyncSyncMapPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSyncSyncMapPermissionRequest();
    $request->mapSid = 'ipsum';
    $request->page = 944373;
    $request->pageSize = 569574;
    $request->pageToken = 'cum';
    $request->serviceSid = 'voluptate';

    $requestSecurity = new ListSyncSyncMapPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listSyncSyncMapPermission($request, $requestSecurity);

    if ($response->listSyncSyncMapPermissionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUnderstandAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUnderstandAssistantRequest();
    $request->page = 490459;
    $request->pageSize = 970237;
    $request->pageToken = 'amet';

    $requestSecurity = new ListUnderstandAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUnderstandAssistant($request, $requestSecurity);

    if ($response->listUnderstandAssistantResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUnderstandField

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandFieldRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandFieldSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUnderstandFieldRequest();
    $request->assistantSid = 'dolorum';
    $request->page = 254356;
    $request->pageSize = 85295;
    $request->pageToken = 'ipsa';
    $request->taskSid = 'ipsa';

    $requestSecurity = new ListUnderstandFieldSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUnderstandField($request, $requestSecurity);

    if ($response->listUnderstandFieldResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUnderstandFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUnderstandFieldTypeRequest();
    $request->assistantSid = 'iure';
    $request->page = 487838;
    $request->pageSize = 311796;
    $request->pageToken = 'accusamus';

    $requestSecurity = new ListUnderstandFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUnderstandFieldType($request, $requestSecurity);

    if ($response->listUnderstandFieldTypeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUnderstandFieldValue

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandFieldValueRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandFieldValueSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUnderstandFieldValueRequest();
    $request->assistantSid = 'quidem';
    $request->fieldTypeSid = 'voluptatibus';
    $request->language = 'voluptas';
    $request->page = 617658;
    $request->pageSize = 179603;
    $request->pageToken = 'atque';

    $requestSecurity = new ListUnderstandFieldValueSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUnderstandFieldValue($request, $requestSecurity);

    if ($response->listUnderstandFieldValueResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUnderstandModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUnderstandModelBuildRequest();
    $request->assistantSid = 'sit';
    $request->page = 854614;
    $request->pageSize = 67249;
    $request->pageToken = 'soluta';

    $requestSecurity = new ListUnderstandModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUnderstandModelBuild($request, $requestSecurity);

    if ($response->listUnderstandModelBuildResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUnderstandQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUnderstandQueryRequest();
    $request->assistantSid = 'dolorum';
    $request->language = 'iusto';
    $request->modelBuild = 'voluptate';
    $request->page = 677082;
    $request->pageSize = 536579;
    $request->pageToken = 'omnis';
    $request->status = 'necessitatibus';

    $requestSecurity = new ListUnderstandQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUnderstandQuery($request, $requestSecurity);

    if ($response->listUnderstandQueryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUnderstandSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUnderstandSampleRequest();
    $request->assistantSid = 'distinctio';
    $request->language = 'asperiores';
    $request->page = 469497;
    $request->pageSize = 216897;
    $request->pageToken = 'voluptate';
    $request->taskSid = 'id';

    $requestSecurity = new ListUnderstandSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUnderstandSample($request, $requestSecurity);

    if ($response->listUnderstandSampleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUnderstandTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUnderstandTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUnderstandTaskRequest();
    $request->assistantSid = 'saepe';
    $request->page = 263322;
    $request->pageSize = 137220;
    $request->pageToken = 'perferendis';

    $requestSecurity = new ListUnderstandTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listUnderstandTask($request, $requestSecurity);

    if ($response->listUnderstandTaskResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWirelessCommand

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWirelessCommandRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWirelessCommandSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWirelessCommandRequest();
    $request->device = 'amet';
    $request->direction = 'optio';
    $request->page = 881586;
    $request->pageSize = 320017;
    $request->pageToken = 'saepe';
    $request->sim = 'suscipit';
    $request->status = 'deserunt';

    $requestSecurity = new ListWirelessCommandSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWirelessCommand($request, $requestSecurity);

    if ($response->listWirelessCommandResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWirelessRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWirelessRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWirelessRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWirelessRatePlanRequest();
    $request->page = 588317;
    $request->pageSize = 324683;
    $request->pageToken = 'repellendus';

    $requestSecurity = new ListWirelessRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWirelessRatePlan($request, $requestSecurity);

    if ($response->listWirelessRatePlanResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWirelessSim

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ListWirelessSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWirelessSimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWirelessSimRequest();
    $request->eId = 'totam';
    $request->iccid = 'similique';
    $request->page = 55;
    $request->pageSize = 872651;
    $request->pageToken = 'quaerat';
    $request->ratePlan = 'tempora';
    $request->simRegistrationCode = 'vel';
    $request->status = 'quod';

    $requestSecurity = new ListWirelessSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->listWirelessSim($request, $requestSecurity);

    if ($response->listWirelessSimResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeployedDevicesCertificate

Update the given properties of a specific Certificate credential in the Fleet, giving it a friendly name or assigning to a Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesCertificateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeployedDevicesCertificateRequest();
    $request->fleetSid = 'officiis';
    $request->requestBody = new UpdateDeployedDevicesCertificateUpdateDeployedDevicesCertificateRequest();
    $request->requestBody->deviceSid = 'qui';
    $request->requestBody->friendlyName = 'dolorum';
    $request->sid = 'a';

    $requestSecurity = new UpdateDeployedDevicesCertificateSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDeployedDevicesCertificate($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeployedDevicesDeployment

Update the given properties of a specific Deployment credential in the Fleet, giving it a friendly name or linking to a specific Twilio Sync service instance.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesDeploymentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeployedDevicesDeploymentRequest();
    $request->fleetSid = 'esse';
    $request->requestBody = new UpdateDeployedDevicesDeploymentUpdateDeployedDevicesDeploymentRequest();
    $request->requestBody->friendlyName = 'harum';
    $request->requestBody->syncServiceSid = 'iusto';
    $request->sid = 'ipsum';

    $requestSecurity = new UpdateDeployedDevicesDeploymentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDeployedDevicesDeployment($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetDeployment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeployedDevicesDevice

Update the given properties of a specific Device in the Fleet, giving it a friendly name, assigning to a Deployment, or a human identity.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesDeviceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeployedDevicesDeviceRequest();
    $request->fleetSid = 'quisquam';
    $request->requestBody = new UpdateDeployedDevicesDeviceUpdateDeployedDevicesDeviceRequest();
    $request->requestBody->deploymentSid = 'tenetur';
    $request->requestBody->enabled = false;
    $request->requestBody->friendlyName = 'amet';
    $request->requestBody->identity = 'tempore';
    $request->sid = 'accusamus';

    $requestSecurity = new UpdateDeployedDevicesDeviceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDeployedDevicesDevice($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetDevice !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeployedDevicesFleet

Update the friendly name property of a specific Fleet in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesFleetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeployedDevicesFleetRequest();
    $request->requestBody = new UpdateDeployedDevicesFleetUpdateDeployedDevicesFleetRequest();
    $request->requestBody->defaultDeploymentSid = 'numquam';
    $request->requestBody->friendlyName = 'enim';
    $request->sid = 'dolorem';

    $requestSecurity = new UpdateDeployedDevicesFleetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDeployedDevicesFleet($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDeployedDevicesKey

Update the given properties of a specific Key credential in the Fleet, giving it a friendly name or assigning to a Device.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDeployedDevicesKeySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDeployedDevicesKeyRequest();
    $request->fleetSid = 'sapiente';
    $request->requestBody = new UpdateDeployedDevicesKeyUpdateDeployedDevicesKeyRequest();
    $request->requestBody->deviceSid = 'totam';
    $request->requestBody->friendlyName = 'nihil';
    $request->sid = 'sit';

    $requestSecurity = new UpdateDeployedDevicesKeySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateDeployedDevicesKey($request, $requestSecurity);

    if ($response->previewDeployedDevicesFleetKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHostedNumbersAuthorizationDocument

Updates a specific AuthorizationDocument.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostedNumbersAuthorizationDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationDocumentEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostedNumbersAuthorizationDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHostedNumbersAuthorizationDocumentRequest();
    $request->requestBody = new UpdateHostedNumbersAuthorizationDocumentUpdateHostedNumbersAuthorizationDocumentRequest();
    $request->requestBody->addressSid = 'expedita';
    $request->requestBody->ccEmails = [
        'sed',
    ];
    $request->requestBody->contactPhoneNumber = 'vel';
    $request->requestBody->contactTitle = 'libero';
    $request->requestBody->email = 'Lura27@yahoo.com';
    $request->requestBody->hostedNumberOrderSids = [
        'cupiditate',
    ];
    $request->requestBody->status = AuthorizationDocumentEnumStatusEnum::FAILED;
    $request->sid = 'pariatur';

    $requestSecurity = new UpdateHostedNumbersAuthorizationDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateHostedNumbersAuthorizationDocument($request, $requestSecurity);

    if ($response->previewHostedNumbersAuthorizationDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateHostedNumbersHostedNumberOrder

Updates a specific HostedNumberOrder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostedNumbersHostedNumberOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest;
use \OpenAPI\OpenAPI\Models\Shared\HostedNumberOrderEnumStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\HostedNumberOrderEnumVerificationTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateHostedNumbersHostedNumberOrderSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateHostedNumbersHostedNumberOrderRequest();
    $request->requestBody = new UpdateHostedNumbersHostedNumberOrderUpdateHostedNumbersHostedNumberOrderRequest();
    $request->requestBody->callDelay = 747080;
    $request->requestBody->ccEmails = [
        'laborum',
    ];
    $request->requestBody->email = 'Doyle71@yahoo.com';
    $request->requestBody->extension = 'facilis';
    $request->requestBody->friendlyName = 'aliquid';
    $request->requestBody->status = HostedNumberOrderEnumStatusEnum::CARRIER_PROCESSING;
    $request->requestBody->uniqueName = 'molestias';
    $request->requestBody->verificationCode = 'temporibus';
    $request->requestBody->verificationDocumentSid = 'qui';
    $request->requestBody->verificationType = HostedNumberOrderEnumVerificationTypeEnum::PHONE_CALL;
    $request->sid = 'fugit';

    $requestSecurity = new UpdateHostedNumbersHostedNumberOrderSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateHostedNumbersHostedNumberOrder($request, $requestSecurity);

    if ($response->previewHostedNumbersHostedNumberOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMarketplaceInstalledAddOn

Update an Add-on installation for the Account specified.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMarketplaceInstalledAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMarketplaceInstalledAddOnSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMarketplaceInstalledAddOnRequest();
    $request->requestBody = new UpdateMarketplaceInstalledAddOnUpdateMarketplaceInstalledAddOnRequest();
    $request->requestBody->configuration = 'magni';
    $request->requestBody->uniqueName = 'odio';
    $request->sid = 'sunt';

    $requestSecurity = new UpdateMarketplaceInstalledAddOnSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMarketplaceInstalledAddOn($request, $requestSecurity);

    if ($response->previewMarketplaceInstalledAddOn !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMarketplaceInstalledAddOnExtension

Update an Extension for an Add-on installation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMarketplaceInstalledAddOnExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMarketplaceInstalledAddOnExtensionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMarketplaceInstalledAddOnExtensionRequest();
    $request->installedAddOnSid = 'ullam';
    $request->requestBody = new UpdateMarketplaceInstalledAddOnExtensionUpdateMarketplaceInstalledAddOnExtensionRequest();
    $request->requestBody->enabled = false;
    $request->sid = 'nam';

    $requestSecurity = new UpdateMarketplaceInstalledAddOnExtensionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateMarketplaceInstalledAddOnExtension($request, $requestSecurity);

    if ($response->previewMarketplaceInstalledAddOnInstalledAddOnExtension !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncDocument

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncDocumentUpdateSyncDocumentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncDocumentSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncDocumentRequest();
    $request->ifMatch = 'hic';
    $request->requestBody = new UpdateSyncDocumentUpdateSyncDocumentRequest();
    $request->requestBody->data = 'voluptatem';
    $request->serviceSid = 'cumque';
    $request->sid = 'soluta';

    $requestSecurity = new UpdateSyncDocumentSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncDocument($request, $requestSecurity);

    if ($response->previewSyncServiceDocument !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncDocumentPermission

Update an identity's access to a specific Sync Document.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncDocumentPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncDocumentPermissionRequest();
    $request->documentSid = 'nobis';
    $request->identity = 'et';
    $request->requestBody = new UpdateSyncDocumentPermissionUpdateSyncDocumentPermissionRequest();
    $request->requestBody->manage = false;
    $request->requestBody->read = false;
    $request->requestBody->write = false;
    $request->serviceSid = 'saepe';

    $requestSecurity = new UpdateSyncDocumentPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncDocumentPermission($request, $requestSecurity);

    if ($response->previewSyncServiceDocumentDocumentPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncService

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncServiceUpdateSyncServiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncServiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncServiceRequest();
    $request->requestBody = new UpdateSyncServiceUpdateSyncServiceRequest();
    $request->requestBody->aclEnabled = false;
    $request->requestBody->friendlyName = 'ipsum';
    $request->requestBody->reachabilityWebhooksEnabled = false;
    $request->requestBody->webhookUrl = 'http://shrill-medium.net';
    $request->sid = 'cupiditate';

    $requestSecurity = new UpdateSyncServiceSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncService($request, $requestSecurity);

    if ($response->previewSyncService !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncSyncListItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncListItemUpdateSyncSyncListItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncListItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncSyncListItemRequest();
    $request->ifMatch = 'aperiam';
    $request->index = 961937;
    $request->listSid = 'dolorem';
    $request->requestBody = new UpdateSyncSyncListItemUpdateSyncSyncListItemRequest();
    $request->requestBody->data = 'dolore';
    $request->serviceSid = 'labore';

    $requestSecurity = new UpdateSyncSyncListItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncSyncListItem($request, $requestSecurity);

    if ($response->previewSyncServiceSyncListSyncListItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncSyncListPermission

Update an identity's access to a specific Sync List.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncListPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncSyncListPermissionRequest();
    $request->identity = 'adipisci';
    $request->listSid = 'dolorum';
    $request->requestBody = new UpdateSyncSyncListPermissionUpdateSyncSyncListPermissionRequest();
    $request->requestBody->manage = false;
    $request->requestBody->read = false;
    $request->requestBody->write = false;
    $request->serviceSid = 'architecto';

    $requestSecurity = new UpdateSyncSyncListPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncSyncListPermission($request, $requestSecurity);

    if ($response->previewSyncServiceSyncListSyncListPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncSyncMapItem

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncMapItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncSyncMapItemRequest();
    $request->ifMatch = 'quae';
    $request->key = 'aut';
    $request->mapSid = 'quas';
    $request->requestBody = new UpdateSyncSyncMapItemUpdateSyncSyncMapItemRequest();
    $request->requestBody->data = 'itaque';
    $request->serviceSid = 'consequatur';

    $requestSecurity = new UpdateSyncSyncMapItemSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncSyncMapItem($request, $requestSecurity);

    if ($response->previewSyncServiceSyncMapSyncMapItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSyncSyncMapPermission

Update an identity's access to a specific Sync Map.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSyncSyncMapPermissionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSyncSyncMapPermissionRequest();
    $request->identity = 'est';
    $request->mapSid = 'repellendus';
    $request->requestBody = new UpdateSyncSyncMapPermissionUpdateSyncSyncMapPermissionRequest();
    $request->requestBody->manage = false;
    $request->requestBody->read = false;
    $request->requestBody->write = false;
    $request->serviceSid = 'porro';

    $requestSecurity = new UpdateSyncSyncMapPermissionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateSyncSyncMapPermission($request, $requestSecurity);

    if ($response->previewSyncServiceSyncMapSyncMapPermission !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandAssistant

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandAssistantUpdateUnderstandAssistantRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandAssistantSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandAssistantRequest();
    $request->requestBody = new UpdateUnderstandAssistantUpdateUnderstandAssistantRequest();
    $request->requestBody->callbackEvents = 'doloribus';
    $request->requestBody->callbackUrl = 'http://rosy-nanoparticle.biz';
    $request->requestBody->fallbackActions = 'quae';
    $request->requestBody->friendlyName = 'laudantium';
    $request->requestBody->initiationActions = 'odio';
    $request->requestBody->logQueries = false;
    $request->requestBody->styleSheet = 'occaecati';
    $request->requestBody->uniqueName = 'voluptatibus';
    $request->sid = 'quisquam';

    $requestSecurity = new UpdateUnderstandAssistantSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandAssistant($request, $requestSecurity);

    if ($response->previewUnderstandAssistant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandAssistantFallbackActions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandAssistantFallbackActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandAssistantFallbackActionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandAssistantFallbackActionsRequest();
    $request->assistantSid = 'vero';
    $request->requestBody = new UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest();
    $request->requestBody->fallbackActions = 'omnis';

    $requestSecurity = new UpdateUnderstandAssistantFallbackActionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandAssistantFallbackActions($request, $requestSecurity);

    if ($response->previewUnderstandAssistantAssistantFallbackActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandAssistantInitiationActions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandAssistantInitiationActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandAssistantInitiationActionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandAssistantInitiationActionsRequest();
    $request->assistantSid = 'quis';
    $request->requestBody = new UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest();
    $request->requestBody->initiationActions = 'ipsum';

    $requestSecurity = new UpdateUnderstandAssistantInitiationActionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandAssistantInitiationActions($request, $requestSecurity);

    if ($response->previewUnderstandAssistantAssistantInitiationActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandFieldType

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandFieldTypeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandFieldTypeRequest();
    $request->assistantSid = 'delectus';
    $request->requestBody = new UpdateUnderstandFieldTypeUpdateUnderstandFieldTypeRequest();
    $request->requestBody->friendlyName = 'voluptate';
    $request->requestBody->uniqueName = 'consectetur';
    $request->sid = 'vero';

    $requestSecurity = new UpdateUnderstandFieldTypeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandFieldType($request, $requestSecurity);

    if ($response->previewUnderstandAssistantFieldType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandModelBuild

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandModelBuildSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandModelBuildRequest();
    $request->assistantSid = 'tenetur';
    $request->requestBody = new UpdateUnderstandModelBuildUpdateUnderstandModelBuildRequest();
    $request->requestBody->uniqueName = 'dignissimos';
    $request->sid = 'hic';

    $requestSecurity = new UpdateUnderstandModelBuildSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandModelBuild($request, $requestSecurity);

    if ($response->previewUnderstandAssistantModelBuild !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandQuery

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandQueryUpdateUnderstandQueryRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandQuerySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandQueryRequest();
    $request->assistantSid = 'distinctio';
    $request->requestBody = new UpdateUnderstandQueryUpdateUnderstandQueryRequest();
    $request->requestBody->sampleSid = 'quod';
    $request->requestBody->status = 'odio';
    $request->sid = 'similique';

    $requestSecurity = new UpdateUnderstandQuerySecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandQuery($request, $requestSecurity);

    if ($response->previewUnderstandAssistantQuery !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandSample

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandSampleUpdateUnderstandSampleRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandSampleSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandSampleRequest();
    $request->assistantSid = 'facilis';
    $request->requestBody = new UpdateUnderstandSampleUpdateUnderstandSampleRequest();
    $request->requestBody->language = 'vero';
    $request->requestBody->sourceChannel = 'ducimus';
    $request->requestBody->taggedText = 'dolore';
    $request->sid = 'quibusdam';
    $request->taskSid = 'illum';

    $requestSecurity = new UpdateUnderstandSampleSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandSample($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTaskSample !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandStyleSheet

Updates the style sheet for an assistant identified by {AssistantSid} or {AssistantUniqueName}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandStyleSheetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandStyleSheetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandStyleSheetRequest();
    $request->assistantSid = 'sequi';
    $request->requestBody = new UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest();
    $request->requestBody->styleSheet = 'natus';

    $requestSecurity = new UpdateUnderstandStyleSheetSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandStyleSheet($request, $requestSecurity);

    if ($response->previewUnderstandAssistantStyleSheet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandTask

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandTaskUpdateUnderstandTaskRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandTaskSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandTaskRequest();
    $request->assistantSid = 'impedit';
    $request->requestBody = new UpdateUnderstandTaskUpdateUnderstandTaskRequest();
    $request->requestBody->actions = 'aut';
    $request->requestBody->actionsUrl = 'https://grateful-stumbling.com';
    $request->requestBody->friendlyName = 'porro';
    $request->requestBody->uniqueName = 'maiores';
    $request->sid = 'doloribus';

    $requestSecurity = new UpdateUnderstandTaskSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandTask($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTask !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUnderstandTaskActions

Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandTaskActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUnderstandTaskActionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUnderstandTaskActionsRequest();
    $request->assistantSid = 'iusto';
    $request->requestBody = new UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest();
    $request->requestBody->actions = 'eligendi';
    $request->taskSid = 'ducimus';

    $requestSecurity = new UpdateUnderstandTaskActionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateUnderstandTaskActions($request, $requestSecurity);

    if ($response->previewUnderstandAssistantTaskTaskActions !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWirelessRatePlan

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessRatePlanUpdateWirelessRatePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessRatePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWirelessRatePlanRequest();
    $request->requestBody = new UpdateWirelessRatePlanUpdateWirelessRatePlanRequest();
    $request->requestBody->friendlyName = 'alias';
    $request->requestBody->uniqueName = 'officia';
    $request->sid = 'tempora';

    $requestSecurity = new UpdateWirelessRatePlanSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWirelessRatePlan($request, $requestSecurity);

    if ($response->previewWirelessRatePlan !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWirelessSim

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessSimUpdateWirelessSimRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWirelessSimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWirelessSimRequest();
    $request->requestBody = new UpdateWirelessSimUpdateWirelessSimRequest();
    $request->requestBody->callbackMethod = 'ipsam';
    $request->requestBody->callbackUrl = 'http://concrete-hill.net';
    $request->requestBody->commandsCallbackMethod = UpdateWirelessSimUpdateWirelessSimRequestCommandsCallbackMethodEnum::GET;
    $request->requestBody->commandsCallbackUrl = 'http://ideal-licensing.com';
    $request->requestBody->friendlyName = 'dolor';
    $request->requestBody->ratePlan = 'maiores';
    $request->requestBody->smsFallbackMethod = UpdateWirelessSimUpdateWirelessSimRequestSmsFallbackMethodEnum::HEAD;
    $request->requestBody->smsFallbackUrl = 'http://torn-mixer.org';
    $request->requestBody->smsMethod = UpdateWirelessSimUpdateWirelessSimRequestSmsMethodEnum::POST;
    $request->requestBody->smsUrl = 'https://spirited-ticket.info';
    $request->requestBody->status = 'impedit';
    $request->requestBody->uniqueName = 'corporis';
    $request->requestBody->voiceFallbackMethod = UpdateWirelessSimUpdateWirelessSimRequestVoiceFallbackMethodEnum::GET;
    $request->requestBody->voiceFallbackUrl = 'http://bogus-elite.info';
    $request->requestBody->voiceMethod = UpdateWirelessSimUpdateWirelessSimRequestVoiceMethodEnum::PUT;
    $request->requestBody->voiceUrl = 'http://venerated-carp.biz';
    $request->sid = 'eaque';

    $requestSecurity = new UpdateWirelessSimSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->sdk->updateWirelessSim($request, $requestSecurity);

    if ($response->previewWirelessSim !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
