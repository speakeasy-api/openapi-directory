# projects

### Available Operations

* [domainsProjectsLocationsList](#domainsprojectslocationslist) - Lists information about the supported locations for this service.
* [domainsProjectsLocationsOperationsList](#domainsprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [domainsProjectsLocationsRegistrationsConfigureContactSettings](#domainsprojectslocationsregistrationsconfigurecontactsettings) - Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .
* [domainsProjectsLocationsRegistrationsConfigureDnsSettings](#domainsprojectslocationsregistrationsconfigurednssettings) - Updates a `Registration`'s DNS settings.
* [domainsProjectsLocationsRegistrationsConfigureManagementSettings](#domainsprojectslocationsregistrationsconfiguremanagementsettings) - Updates a `Registration`'s management settings.
* [domainsProjectsLocationsRegistrationsDelete](#domainsprojectslocationsregistrationsdelete) - Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* [domainsProjectsLocationsRegistrationsExport](#domainsprojectslocationsregistrationsexport) - Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.
* [domainsProjectsLocationsRegistrationsGet](#domainsprojectslocationsregistrationsget) - Gets the details of a `Registration` resource.
* [domainsProjectsLocationsRegistrationsGetIamPolicy](#domainsprojectslocationsregistrationsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [domainsProjectsLocationsRegistrationsImport](#domainsprojectslocationsregistrationsimport) - Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.
* [domainsProjectsLocationsRegistrationsList](#domainsprojectslocationsregistrationslist) - Lists the `Registration` resources in a project.
* [domainsProjectsLocationsRegistrationsPatch](#domainsprojectslocationsregistrationspatch) - Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`
* [domainsProjectsLocationsRegistrationsRegister](#domainsprojectslocationsregistrationsregister) - Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.
* [domainsProjectsLocationsRegistrationsResetAuthorizationCode](#domainsprojectslocationsregistrationsresetauthorizationcode) - Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.
* [domainsProjectsLocationsRegistrationsRetrieveAuthorizationCode](#domainsprojectslocationsregistrationsretrieveauthorizationcode) - Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.
* [domainsProjectsLocationsRegistrationsRetrieveImportableDomains](#domainsprojectslocationsregistrationsretrieveimportabledomains) - Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.
* [domainsProjectsLocationsRegistrationsRetrieveRegisterParameters](#domainsprojectslocationsregistrationsretrieveregisterparameters) - Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.
* [domainsProjectsLocationsRegistrationsRetrieveTransferParameters](#domainsprojectslocationsregistrationsretrievetransferparameters) - Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.
* [domainsProjectsLocationsRegistrationsSearchDomains](#domainsprojectslocationsregistrationssearchdomains) - Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.
* [domainsProjectsLocationsRegistrationsSetIamPolicy](#domainsprojectslocationsregistrationssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [domainsProjectsLocationsRegistrationsTestIamPermissions](#domainsprojectslocationsregistrationstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [domainsProjectsLocationsRegistrationsTransfer](#domainsprojectslocationsregistrationstransfer) - Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

## domainsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->fields = 'voluptatum';
    $request->filter = 'iusto';
    $request->key = 'excepturi';
    $request->name = 'Mrs. Sophie Smith MD';
    $request->oauthToken = 'perferendis';
    $request->pageSize = 368241;
    $request->pageToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new DomainsProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'at';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestiae';
    $request->fields = 'quod';
    $request->filter = 'quod';
    $request->key = 'esse';
    $request->name = 'Miss Lowell Parisian';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 143353;
    $request->pageToken = 'deleniti';
    $request->prettyPrint = false;
    $request->quotaUser = 'hic';
    $request->uploadType = 'optio';
    $request->uploadProtocol = 'totam';

    $requestSecurity = new DomainsProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsConfigureContactSettings

Updates a `Registration`'s contact settings. Some changes require confirmation by the domain's registrant contact .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigureContactSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfigureContactSettingsRequestContactNoticesEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactSettings;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\ContactSettingsPrivacyEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsConfigureContactSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->configureContactSettingsRequest = new ConfigureContactSettingsRequest();
    $request->configureContactSettingsRequest->contactNotices = [
        ConfigureContactSettingsRequestContactNoticesEnum::CONTACT_NOTICE_UNSPECIFIED,
        ConfigureContactSettingsRequestContactNoticesEnum::CONTACT_NOTICE_UNSPECIFIED,
    ];
    $request->configureContactSettingsRequest->contactSettings = new ContactSettings();
    $request->configureContactSettingsRequest->contactSettings->adminContact = new Contact();
    $request->configureContactSettingsRequest->contactSettings->adminContact->email = 'Ona.Rippin@gmail.com';
    $request->configureContactSettingsRequest->contactSettings->adminContact->faxNumber = 'excepturi';
    $request->configureContactSettingsRequest->contactSettings->adminContact->phoneNumber = 'aspernatur';
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress = new PostalAddress();
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->addressLines = [
        'ad',
    ];
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->administrativeArea = 'natus';
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->languageCode = 'sed';
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->locality = 'iste';
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->organization = 'dolor';
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->postalCode = '39964-3649';
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->recipients = [
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->regionCode = 'est';
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->revision = 653140;
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->sortingCode = 'laborum';
    $request->configureContactSettingsRequest->contactSettings->adminContact->postalAddress->sublocality = 'dolores';
    $request->configureContactSettingsRequest->contactSettings->privacy = ContactSettingsPrivacyEnum::CONTACT_PRIVACY_UNSPECIFIED;
    $request->configureContactSettingsRequest->contactSettings->registrantContact = new Contact();
    $request->configureContactSettingsRequest->contactSettings->registrantContact->email = 'Braulio60@yahoo.com';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->faxNumber = 'nemo';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->phoneNumber = 'minima';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress = new PostalAddress();
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->addressLines = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->administrativeArea = 'doloribus';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->languageCode = 'sapiente';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->locality = 'architecto';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->organization = 'mollitia';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->postalCode = '61965';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->recipients = [
        'commodi',
        'quam',
    ];
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->regionCode = 'molestiae';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->revision = 244425;
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->sortingCode = 'error';
    $request->configureContactSettingsRequest->contactSettings->registrantContact->postalAddress->sublocality = 'quia';
    $request->configureContactSettingsRequest->contactSettings->technicalContact = new Contact();
    $request->configureContactSettingsRequest->contactSettings->technicalContact->email = 'Bernie.Padberg@yahoo.com';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->faxNumber = 'odit';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->phoneNumber = 'quo';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress = new PostalAddress();
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->addressLines = [
        'tenetur',
    ];
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->administrativeArea = 'ipsam';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->languageCode = 'id';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->locality = 'possimus';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->organization = 'aut';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->postalCode = '68609';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->recipients = [
        'vero',
        'nihil',
        'praesentium',
        'voluptatibus',
    ];
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->regionCode = 'ipsa';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->revision = 604846;
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->sortingCode = 'voluptate';
    $request->configureContactSettingsRequest->contactSettings->technicalContact->postalAddress->sublocality = 'cum';
    $request->configureContactSettingsRequest->updateMask = 'perferendis';
    $request->configureContactSettingsRequest->validateOnly = false;
    $request->accessToken = 'doloremque';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'ut';
    $request->fields = 'maiores';
    $request->key = 'dicta';
    $request->oauthToken = 'corporis';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolore';
    $request->registration = 'iusto';
    $request->uploadType = 'dicta';
    $request->uploadProtocol = 'harum';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsConfigureContactSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsConfigureContactSettings($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsConfigureDnsSettings

Updates a `Registration`'s DNS settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigureDnsSettingsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\DnsSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\CustomDns;
use \OpenAPI\OpenAPI\Models\Shared\DsRecord;
use \OpenAPI\OpenAPI\Models\Shared\DsRecordAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\DsRecordDigestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlueRecord;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDomainsDnsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDomainsDnsDsStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsConfigureDnsSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsConfigureDnsSettingsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->configureDnsSettingsRequestInput = new ConfigureDnsSettingsRequestInput();
    $request->configureDnsSettingsRequestInput->dnsSettings = new DnsSettingsInput();
    $request->configureDnsSettingsRequestInput->dnsSettings->customDns = new CustomDns();
    $request->configureDnsSettingsRequestInput->dnsSettings->customDns->dsRecords = [
        new DsRecord(),
        new DsRecord(),
        new DsRecord(),
        new DsRecord(),
    ];
    $request->configureDnsSettingsRequestInput->dnsSettings->customDns->nameServers = [
        'repudiandae',
        'quae',
    ];
    $request->configureDnsSettingsRequestInput->dnsSettings->glueRecords = [
        new GlueRecord(),
    ];
    $request->configureDnsSettingsRequestInput->dnsSettings->googleDomainsDns = new GoogleDomainsDnsInput();
    $request->configureDnsSettingsRequestInput->dnsSettings->googleDomainsDns->dsState = GoogleDomainsDnsDsStateEnum::DS_RECORDS_PUBLISHED;
    $request->configureDnsSettingsRequestInput->updateMask = 'molestias';
    $request->configureDnsSettingsRequestInput->validateOnly = false;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'modi';
    $request->fields = 'praesentium';
    $request->key = 'rem';
    $request->oauthToken = 'voluptates';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->registration = 'repudiandae';
    $request->uploadType = 'sint';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsConfigureDnsSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsConfigureDnsSettings($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsConfigureManagementSettings

Updates a `Registration`'s management settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ConfigureManagementSettingsRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\ManagementSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\ManagementSettingsTransferLockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsConfigureManagementSettingsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->configureManagementSettingsRequestInput = new ConfigureManagementSettingsRequestInput();
    $request->configureManagementSettingsRequestInput->managementSettings = new ManagementSettingsInput();
    $request->configureManagementSettingsRequestInput->managementSettings->transferLockState = ManagementSettingsTransferLockStateEnum::TRANSFER_LOCK_STATE_UNSPECIFIED;
    $request->configureManagementSettingsRequestInput->updateMask = 'enim';
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'explicabo';
    $request->key = 'deserunt';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quibusdam';
    $request->registration = 'labore';
    $request->uploadType = 'modi';
    $request->uploadProtocol = 'qui';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsConfigureManagementSettingsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsConfigureManagementSettings($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsDelete

Deletes a `Registration` resource. This method works on any `Registration` resource using [Subscription or Commitment billing](/domains/pricing#billing-models), provided that the resource was created at least 1 day in the past. For `Registration` resources using [Monthly billing](/domains/pricing#billing-models), this method works if: * `state` is `EXPORTED` with `expire_time` in the past * `state` is `REGISTRATION_FAILED` * `state` is `TRANSFER_FAILED` When an active registration is successfully deleted, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cupiditate';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'perferendis';
    $request->fields = 'magni';
    $request->key = 'assumenda';
    $request->name = 'Linda Corkery';
    $request->oauthToken = 'tempora';
    $request->prettyPrint = false;
    $request->quotaUser = 'facilis';
    $request->uploadType = 'tempore';
    $request->uploadProtocol = 'labore';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsDelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsExport

Exports a `Registration` resource, such that it is no longer managed by Cloud Domains. When an active domain is successfully exported, you can continue to use the domain in [Google Domains](https://domains.google/) until it expires. The calling user becomes the domain's sole owner in Google Domains, and permissions for the domain are subsequently managed there. The domain does not renew automatically unless the new owner sets up billing in Google Domains.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsExportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsExportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsExportRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'non' => 'eligendi',
        'sint' => 'aliquid',
    ];
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'officia';
    $request->key = 'dolor';
    $request->name = 'Randal Parisian';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsExportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsExport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsGet

Gets the details of a `Registration` resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'cumque';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'ea';
    $request->fields = 'aliquid';
    $request->key = 'laborum';
    $request->name = 'Alfred McClure';
    $request->oauthToken = 'delectus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'nam';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsGet($request, $requestSecurity);

    if ($response->registration !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'blanditiis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'sapiente';
    $request->fields = 'amet';
    $request->key = 'deserunt';
    $request->oauthToken = 'nisi';
    $request->optionsRequestedPolicyVersion = 423855;
    $request->prettyPrint = false;
    $request->quotaUser = 'natus';
    $request->resource = 'omnis';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsImport

Imports a domain name from [Google Domains](https://domains.google/) for use in Cloud Domains. To transfer a domain from another registrar, use the `TransferDomain` method instead. Since individual users can own domains in Google Domains, the calling user must have ownership permission on the domain.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsImportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importDomainRequest = new ImportDomainRequest();
    $request->importDomainRequest->domainName = 'magnam';
    $request->importDomainRequest->labels = [
        'id' => 'labore',
        'labore' => 'suscipit',
        'natus' => 'nobis',
    ];
    $request->accessToken = 'eum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'architecto';
    $request->key = 'magnam';
    $request->oauthToken = 'et';
    $request->parent = 'excepturi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ullam';
    $request->uploadType = 'provident';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsImportSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsImport($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsList

Lists the `Registration` resources in a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'accusantium';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reiciendis';
    $request->fields = 'mollitia';
    $request->filter = 'ad';
    $request->key = 'eum';
    $request->oauthToken = 'dolor';
    $request->pageSize = 896547;
    $request->pageToken = 'odit';
    $request->parent = 'nemo';
    $request->prettyPrint = false;
    $request->quotaUser = 'quasi';
    $request->uploadType = 'iure';
    $request->uploadProtocol = 'doloribus';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsList($request, $requestSecurity);

    if ($response->listRegistrationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsPatch

Updates select fields of a `Registration` resource, notably `labels`. To update other fields, use the appropriate custom update method: * To update management settings, see `ConfigureManagementSettings` * To update DNS configuration, see `ConfigureDnsSettings` * To update contact information, see `ConfigureContactSettings`

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegistrationInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactSettings;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\ContactSettingsPrivacyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\CustomDns;
use \OpenAPI\OpenAPI\Models\Shared\DsRecord;
use \OpenAPI\OpenAPI\Models\Shared\DsRecordAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\DsRecordDigestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlueRecord;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDomainsDnsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDomainsDnsDsStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagementSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\ManagementSettingsTransferLockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->registrationInput = new RegistrationInput();
    $request->registrationInput->contactSettings = new ContactSettings();
    $request->registrationInput->contactSettings->adminContact = new Contact();
    $request->registrationInput->contactSettings->adminContact->email = 'Rachel.Lind10@gmail.com';
    $request->registrationInput->contactSettings->adminContact->faxNumber = 'architecto';
    $request->registrationInput->contactSettings->adminContact->phoneNumber = 'repudiandae';
    $request->registrationInput->contactSettings->adminContact->postalAddress = new PostalAddress();
    $request->registrationInput->contactSettings->adminContact->postalAddress->addressLines = [
        'expedita',
        'nihil',
    ];
    $request->registrationInput->contactSettings->adminContact->postalAddress->administrativeArea = 'repellat';
    $request->registrationInput->contactSettings->adminContact->postalAddress->languageCode = 'quibusdam';
    $request->registrationInput->contactSettings->adminContact->postalAddress->locality = 'sed';
    $request->registrationInput->contactSettings->adminContact->postalAddress->organization = 'saepe';
    $request->registrationInput->contactSettings->adminContact->postalAddress->postalCode = '01561-1788';
    $request->registrationInput->contactSettings->adminContact->postalAddress->recipients = [
        'ea',
        'excepturi',
        'odit',
        'ea',
    ];
    $request->registrationInput->contactSettings->adminContact->postalAddress->regionCode = 'accusantium';
    $request->registrationInput->contactSettings->adminContact->postalAddress->revision = 69167;
    $request->registrationInput->contactSettings->adminContact->postalAddress->sortingCode = 'maiores';
    $request->registrationInput->contactSettings->adminContact->postalAddress->sublocality = 'quidem';
    $request->registrationInput->contactSettings->privacy = ContactSettingsPrivacyEnum::PUBLIC_CONTACT_DATA;
    $request->registrationInput->contactSettings->registrantContact = new Contact();
    $request->registrationInput->contactSettings->registrantContact->email = 'Heidi86@yahoo.com';
    $request->registrationInput->contactSettings->registrantContact->faxNumber = 'nemo';
    $request->registrationInput->contactSettings->registrantContact->phoneNumber = 'voluptatibus';
    $request->registrationInput->contactSettings->registrantContact->postalAddress = new PostalAddress();
    $request->registrationInput->contactSettings->registrantContact->postalAddress->addressLines = [
        'fugiat',
    ];
    $request->registrationInput->contactSettings->registrantContact->postalAddress->administrativeArea = 'amet';
    $request->registrationInput->contactSettings->registrantContact->postalAddress->languageCode = 'aut';
    $request->registrationInput->contactSettings->registrantContact->postalAddress->locality = 'cumque';
    $request->registrationInput->contactSettings->registrantContact->postalAddress->organization = 'corporis';
    $request->registrationInput->contactSettings->registrantContact->postalAddress->postalCode = '77135-4031';
    $request->registrationInput->contactSettings->registrantContact->postalAddress->recipients = [
        'perferendis',
    ];
    $request->registrationInput->contactSettings->registrantContact->postalAddress->regionCode = 'dolores';
    $request->registrationInput->contactSettings->registrantContact->postalAddress->revision = 793698;
    $request->registrationInput->contactSettings->registrantContact->postalAddress->sortingCode = 'quam';
    $request->registrationInput->contactSettings->registrantContact->postalAddress->sublocality = 'dolor';
    $request->registrationInput->contactSettings->technicalContact = new Contact();
    $request->registrationInput->contactSettings->technicalContact->email = 'Ewell_Welch70@hotmail.com';
    $request->registrationInput->contactSettings->technicalContact->faxNumber = 'perspiciatis';
    $request->registrationInput->contactSettings->technicalContact->phoneNumber = 'voluptatem';
    $request->registrationInput->contactSettings->technicalContact->postalAddress = new PostalAddress();
    $request->registrationInput->contactSettings->technicalContact->postalAddress->addressLines = [
        'consequuntur',
        'blanditiis',
        'error',
        'eaque',
    ];
    $request->registrationInput->contactSettings->technicalContact->postalAddress->administrativeArea = 'occaecati';
    $request->registrationInput->contactSettings->technicalContact->postalAddress->languageCode = 'rerum';
    $request->registrationInput->contactSettings->technicalContact->postalAddress->locality = 'adipisci';
    $request->registrationInput->contactSettings->technicalContact->postalAddress->organization = 'asperiores';
    $request->registrationInput->contactSettings->technicalContact->postalAddress->postalCode = '26658-5779';
    $request->registrationInput->contactSettings->technicalContact->postalAddress->recipients = [
        'quos',
        'aliquid',
    ];
    $request->registrationInput->contactSettings->technicalContact->postalAddress->regionCode = 'dolorem';
    $request->registrationInput->contactSettings->technicalContact->postalAddress->revision = 209843;
    $request->registrationInput->contactSettings->technicalContact->postalAddress->sortingCode = 'dolor';
    $request->registrationInput->contactSettings->technicalContact->postalAddress->sublocality = 'qui';
    $request->registrationInput->dnsSettings = new DnsSettingsInput();
    $request->registrationInput->dnsSettings->customDns = new CustomDns();
    $request->registrationInput->dnsSettings->customDns->dsRecords = [
        new DsRecord(),
    ];
    $request->registrationInput->dnsSettings->customDns->nameServers = [
        'excepturi',
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->registrationInput->dnsSettings->glueRecords = [
        new GlueRecord(),
        new GlueRecord(),
        new GlueRecord(),
        new GlueRecord(),
    ];
    $request->registrationInput->dnsSettings->googleDomainsDns = new GoogleDomainsDnsInput();
    $request->registrationInput->dnsSettings->googleDomainsDns->dsState = GoogleDomainsDnsDsStateEnum::DS_STATE_UNSPECIFIED;
    $request->registrationInput->domainName = 'dolorum';
    $request->registrationInput->labels = [
        'veritatis' => 'ipsa',
        'ipsa' => 'iure',
    ];
    $request->registrationInput->managementSettings = new ManagementSettingsInput();
    $request->registrationInput->managementSettings->transferLockState = ManagementSettingsTransferLockStateEnum::UNLOCKED;
    $request->registrationInput->pendingContactSettings = new ContactSettings();
    $request->registrationInput->pendingContactSettings->adminContact = new Contact();
    $request->registrationInput->pendingContactSettings->adminContact->email = 'Shaniya.Predovic61@gmail.com';
    $request->registrationInput->pendingContactSettings->adminContact->faxNumber = 'eos';
    $request->registrationInput->pendingContactSettings->adminContact->phoneNumber = 'atque';
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress = new PostalAddress();
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->addressLines = [
        'fugiat',
    ];
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->administrativeArea = 'ab';
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->languageCode = 'soluta';
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->locality = 'dolorum';
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->organization = 'iusto';
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->postalCode = '65687';
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->recipients = [
        'nihil',
        'ipsum',
        'voluptate',
        'id',
    ];
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->regionCode = 'saepe';
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->revision = 263322;
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->sortingCode = 'aspernatur';
    $request->registrationInput->pendingContactSettings->adminContact->postalAddress->sublocality = 'perferendis';
    $request->registrationInput->pendingContactSettings->privacy = ContactSettingsPrivacyEnum::CONTACT_PRIVACY_UNSPECIFIED;
    $request->registrationInput->pendingContactSettings->registrantContact = new Contact();
    $request->registrationInput->pendingContactSettings->registrantContact->email = 'Shannon.Hammes64@hotmail.com';
    $request->registrationInput->pendingContactSettings->registrantContact->faxNumber = 'provident';
    $request->registrationInput->pendingContactSettings->registrantContact->phoneNumber = 'minima';
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress = new PostalAddress();
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->addressLines = [
        'totam',
        'similique',
        'alias',
        'at',
    ];
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->administrativeArea = 'quaerat';
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->languageCode = 'tempora';
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->locality = 'vel';
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->organization = 'quod';
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->postalCode = '16946-4279';
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->recipients = [
        'tempore',
    ];
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->regionCode = 'accusamus';
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->revision = 253941;
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->sortingCode = 'enim';
    $request->registrationInput->pendingContactSettings->registrantContact->postalAddress->sublocality = 'dolorem';
    $request->registrationInput->pendingContactSettings->technicalContact = new Contact();
    $request->registrationInput->pendingContactSettings->technicalContact->email = 'Joshua71@hotmail.com';
    $request->registrationInput->pendingContactSettings->technicalContact->faxNumber = 'neque';
    $request->registrationInput->pendingContactSettings->technicalContact->phoneNumber = 'sed';
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress = new PostalAddress();
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->addressLines = [
        'libero',
        'voluptas',
    ];
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->administrativeArea = 'deserunt';
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->languageCode = 'quam';
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->locality = 'ipsum';
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->organization = 'incidunt';
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->postalCode = '58871';
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->recipients = [
        'totam',
        'incidunt',
        'aspernatur',
    ];
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->regionCode = 'dolores';
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->revision = 716860;
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->sortingCode = 'facilis';
    $request->registrationInput->pendingContactSettings->technicalContact->postalAddress->sublocality = 'aliquid';
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'temporibus';
    $request->fields = 'qui';
    $request->key = 'neque';
    $request->name = 'Mrs. Louise Kuhlman';
    $request->oauthToken = 'hic';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->updateMask = 'cumque';
    $request->uploadType = 'soluta';
    $request->uploadProtocol = 'nobis';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsRegister

Registers a new domain name and creates a corresponding `Registration` resource. Call `RetrieveRegisterParameters` first to check availability of the domain name and determine parameters like price that are needed to build a call to this method. A successful call creates a `Registration` resource in state `REGISTRATION_PENDING`, which resolves to `ACTIVE` within 1-2 minutes, indicating that the domain was successfully registered. If the resource ends up in state `REGISTRATION_FAILED`, it indicates that the domain was not registered successfully, and you can safely delete the resource and retry registration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRegisterRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDomainRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDomainRequestContactNoticesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDomainRequestDomainNoticesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegistrationInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactSettings;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\ContactSettingsPrivacyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\CustomDns;
use \OpenAPI\OpenAPI\Models\Shared\DsRecord;
use \OpenAPI\OpenAPI\Models\Shared\DsRecordAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\DsRecordDigestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlueRecord;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDomainsDnsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDomainsDnsDsStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagementSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\ManagementSettingsTransferLockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRegisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsRegisterRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->registerDomainRequestInput = new RegisterDomainRequestInput();
    $request->registerDomainRequestInput->contactNotices = [
        RegisterDomainRequestContactNoticesEnum::CONTACT_NOTICE_UNSPECIFIED,
        RegisterDomainRequestContactNoticesEnum::CONTACT_NOTICE_UNSPECIFIED,
        RegisterDomainRequestContactNoticesEnum::PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT,
        RegisterDomainRequestContactNoticesEnum::PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT,
    ];
    $request->registerDomainRequestInput->domainNotices = [
        RegisterDomainRequestDomainNoticesEnum::HSTS_PRELOADED,
        RegisterDomainRequestDomainNoticesEnum::DOMAIN_NOTICE_UNSPECIFIED,
        RegisterDomainRequestDomainNoticesEnum::HSTS_PRELOADED,
    ];
    $request->registerDomainRequestInput->registration = new RegistrationInput();
    $request->registerDomainRequestInput->registration->contactSettings = new ContactSettings();
    $request->registerDomainRequestInput->registration->contactSettings->adminContact = new Contact();
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->email = 'Eladio67@gmail.com';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->faxNumber = 'architecto';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->phoneNumber = 'quae';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress = new PostalAddress();
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->addressLines = [
        'quas',
    ];
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->administrativeArea = 'itaque';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->languageCode = 'consequatur';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->locality = 'est';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->organization = 'repellendus';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->postalCode = '92751-0545';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->recipients = [
        'quisquam',
        'vero',
        'omnis',
        'quis',
    ];
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->regionCode = 'ipsum';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->revision = 961571;
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->sortingCode = 'voluptate';
    $request->registerDomainRequestInput->registration->contactSettings->adminContact->postalAddress->sublocality = 'consectetur';
    $request->registerDomainRequestInput->registration->contactSettings->privacy = ContactSettingsPrivacyEnum::REDACTED_CONTACT_DATA;
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact = new Contact();
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->email = 'Jeramie_Weissnat48@hotmail.com';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->faxNumber = 'similique';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->phoneNumber = 'facilis';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress = new PostalAddress();
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->addressLines = [
        'ducimus',
        'dolore',
        'quibusdam',
        'illum',
    ];
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->administrativeArea = 'sequi';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->languageCode = 'natus';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->locality = 'impedit';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->organization = 'aut';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->postalCode = '38179-9474';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->recipients = [
        'officia',
    ];
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->regionCode = 'tempora';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->revision = 368584;
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->sortingCode = 'ea';
    $request->registerDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->sublocality = 'aspernatur';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact = new Contact();
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->email = 'Reinhold40@yahoo.com';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->faxNumber = 'laudantium';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->phoneNumber = 'dicta';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress = new PostalAddress();
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->addressLines = [
        'maiores',
    ];
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->administrativeArea = 'quasi';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->languageCode = 'ex';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->locality = 'nulla';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->organization = 'excepturi';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->postalCode = '39794-7333';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->recipients = [
        'magnam',
    ];
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->regionCode = 'ea';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->revision = 775220;
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->sortingCode = 'consectetur';
    $request->registerDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->sublocality = 'recusandae';
    $request->registerDomainRequestInput->registration->dnsSettings = new DnsSettingsInput();
    $request->registerDomainRequestInput->registration->dnsSettings->customDns = new CustomDns();
    $request->registerDomainRequestInput->registration->dnsSettings->customDns->dsRecords = [
        new DsRecord(),
    ];
    $request->registerDomainRequestInput->registration->dnsSettings->customDns->nameServers = [
        'eaque',
        'a',
    ];
    $request->registerDomainRequestInput->registration->dnsSettings->glueRecords = [
        new GlueRecord(),
        new GlueRecord(),
        new GlueRecord(),
    ];
    $request->registerDomainRequestInput->registration->dnsSettings->googleDomainsDns = new GoogleDomainsDnsInput();
    $request->registerDomainRequestInput->registration->dnsSettings->googleDomainsDns->dsState = GoogleDomainsDnsDsStateEnum::DS_STATE_UNSPECIFIED;
    $request->registerDomainRequestInput->registration->domainName = 'aut';
    $request->registerDomainRequestInput->registration->labels = [
        'impedit' => 'aliquam',
        'fugit' => 'accusamus',
        'inventore' => 'non',
    ];
    $request->registerDomainRequestInput->registration->managementSettings = new ManagementSettingsInput();
    $request->registerDomainRequestInput->registration->managementSettings->transferLockState = ManagementSettingsTransferLockStateEnum::TRANSFER_LOCK_STATE_UNSPECIFIED;
    $request->registerDomainRequestInput->registration->pendingContactSettings = new ContactSettings();
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact = new Contact();
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->email = 'Margarett43@hotmail.com';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->faxNumber = 'autem';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->phoneNumber = 'nobis';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress = new PostalAddress();
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->addressLines = [
        'assumenda',
        'nulla',
        'voluptas',
    ];
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->administrativeArea = 'libero';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->languageCode = 'quasi';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->locality = 'tempora';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->organization = 'numquam';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->postalCode = '50434';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->recipients = [
        'esse',
        'esse',
    ];
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->regionCode = 'rem';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->revision = 683282;
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->sortingCode = 'reprehenderit';
    $request->registerDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->sublocality = 'quidem';
    $request->registerDomainRequestInput->registration->pendingContactSettings->privacy = ContactSettingsPrivacyEnum::REDACTED_CONTACT_DATA;
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact = new Contact();
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->email = 'Horacio.Hoeger50@gmail.com';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->faxNumber = 'quisquam';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->phoneNumber = 'veritatis';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress = new PostalAddress();
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->addressLines = [
        'id',
    ];
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->administrativeArea = 'quidem';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->languageCode = 'neque';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->locality = 'quo';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->organization = 'illum';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->postalCode = '62130-5028';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->recipients = [
        'aspernatur',
        'sequi',
    ];
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->regionCode = 'quo';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->revision = 459856;
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->sortingCode = 'recusandae';
    $request->registerDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->sublocality = 'aperiam';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact = new Contact();
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->email = 'Polly46@hotmail.com';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->faxNumber = 'totam';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->phoneNumber = 'accusamus';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress = new PostalAddress();
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->addressLines = [
        'odio',
        'occaecati',
    ];
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->administrativeArea = 'commodi';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->languageCode = 'sapiente';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->locality = 'dolores';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->organization = 'deserunt';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->postalCode = '07455';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->recipients = [
        'deleniti',
    ];
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->regionCode = 'fugit';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->revision = 681393;
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->sortingCode = 'mollitia';
    $request->registerDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->sublocality = 'incidunt';
    $request->registerDomainRequestInput->validateOnly = false;
    $request->registerDomainRequestInput->yearlyPrice = new Money();
    $request->registerDomainRequestInput->yearlyPrice->currencyCode = 'atque';
    $request->registerDomainRequestInput->yearlyPrice->nanos = 128860;
    $request->registerDomainRequestInput->yearlyPrice->units = 'minima';
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sapiente';
    $request->fields = 'consequuntur';
    $request->key = 'ratione';
    $request->oauthToken = 'explicabo';
    $request->parent = 'saepe';
    $request->prettyPrint = false;
    $request->quotaUser = 'occaecati';
    $request->uploadType = 'atque';
    $request->uploadProtocol = 'et';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsRegisterSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsRegister($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsResetAuthorizationCode

Resets the authorization code of the `Registration` to a new random string. You can call this method only after 60 days have elapsed since the initial domain registration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsResetAuthorizationCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsResetAuthorizationCodeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'accusamus' => 'veritatis',
        'esse' => 'quod',
        'nam' => 'vero',
        'aliquid' => 'quasi',
    ];
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'harum';
    $request->fields = 'molestiae';
    $request->key = 'rerum';
    $request->oauthToken = 'occaecati';
    $request->prettyPrint = false;
    $request->quotaUser = 'minima';
    $request->registration = 'distinctio';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sit';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsResetAuthorizationCodeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsResetAuthorizationCode($request, $requestSecurity);

    if ($response->authorizationCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsRetrieveAuthorizationCode

Gets the authorization code of the `Registration` for the purpose of transferring the domain to another registrar. You can call this method only after 60 days have elapsed since the initial domain registration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'tempore';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'consequuntur';
    $request->key = 'consequatur';
    $request->oauthToken = 'minus';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->registration = 'sapiente';
    $request->uploadType = 'consectetur';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsRetrieveAuthorizationCodeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsRetrieveAuthorizationCode($request, $requestSecurity);

    if ($response->authorizationCode !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsRetrieveImportableDomains

Lists domain names from [Google Domains](https://domains.google/) that can be imported to Cloud Domains using the `ImportDomain` method. Since individual users can own domains in Google Domains, the list of domains returned depends on the individual user making the call. Domains already managed by Cloud Domains are not returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nulla';
    $request->fields = 'quas';
    $request->key = 'esse';
    $request->location = 'quasi';
    $request->oauthToken = 'a';
    $request->pageSize = 621679;
    $request->pageToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'pariatur';
    $request->uploadType = 'possimus';
    $request->uploadProtocol = 'quia';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsRetrieveImportableDomainsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsRetrieveImportableDomains($request, $requestSecurity);

    if ($response->retrieveImportableDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsRetrieveRegisterParameters

Gets parameters needed to register a new domain name, including price and up-to-date availability. Use the returned values to call `RegisterDomain`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'asperiores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'veritatis';
    $request->domainName = 'consequuntur';
    $request->fields = 'quasi';
    $request->key = 'similique';
    $request->location = 'culpa';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'tenetur';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'earum';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsRetrieveRegisterParametersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsRetrieveRegisterParameters($request, $requestSecurity);

    if ($response->retrieveRegisterParametersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsRetrieveTransferParameters

Gets parameters needed to transfer a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Use the returned values to call `TransferDomain`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRetrieveTransferParametersRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsRetrieveTransferParametersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsRetrieveTransferParametersRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'in';
    $request->alt = AltEnum::JSON;
    $request->callback = 'libero';
    $request->domainName = 'illum';
    $request->fields = 'soluta';
    $request->key = 'accusantium';
    $request->location = 'aliquam';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'dicta';
    $request->uploadType = 'ullam';
    $request->uploadProtocol = 'reprehenderit';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsRetrieveTransferParametersSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsRetrieveTransferParameters($request, $requestSecurity);

    if ($response->retrieveTransferParametersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsSearchDomains

Searches for available domain names similar to the provided query. Availability results from this method are approximate; call `RetrieveRegisterParameters` on a domain before registering to confirm availability.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsSearchDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsSearchDomainsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsSearchDomainsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'nisi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'voluptatum';
    $request->fields = 'qui';
    $request->key = 'quibusdam';
    $request->location = 'ex';
    $request->oauthToken = 'deleniti';
    $request->prettyPrint = false;
    $request->query = 'itaque';
    $request->quotaUser = 'dolorum';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'omnis';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsSearchDomainsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsSearchDomains($request, $requestSecurity);

    if ($response->searchDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'et';
    $request->setIamPolicyRequest->policy->version = 454162;
    $request->setIamPolicyRequest->updateMask = 'ipsa';
    $request->accessToken = 'minima';
    $request->alt = AltEnum::JSON;
    $request->callback = 'consectetur';
    $request->fields = 'adipisci';
    $request->key = 'iste';
    $request->oauthToken = 'temporibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusantium';
    $request->resource = 'rem';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'laudantium';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'ab',
        'corrupti',
        'non',
    ];
    $request->accessToken = 'voluptatem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'numquam';
    $request->key = 'impedit';
    $request->oauthToken = 'explicabo';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptas';
    $request->resource = 'aut';
    $request->uploadType = 'dignissimos';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## domainsProjectsLocationsRegistrationsTransfer

Transfers a domain name from another registrar to Cloud Domains. For domains already managed by [Google Domains](https://domains.google/), use `ImportDomain` instead. Before calling this method, go to the domain's current registrar to unlock the domain for transfer and retrieve the domain's transfer authorization code. Then call `RetrieveTransferParameters` to confirm that the domain is unlocked and to get values needed to build a call to this method. A successful call creates a `Registration` resource in state `TRANSFER_PENDING`. It can take several days to complete the transfer process. The registrant can often speed up this process by approving the transfer through the current registrar, either by clicking a link in an email from the registrar or by visiting the registrar's website. A few minutes after transfer approval, the resource transitions to state `ACTIVE`, indicating that the transfer was successful. If the transfer is rejected or the request expires without being approved, the resource can end up in state `TRANSFER_FAILED`. If transfer fails, you can safely delete the resource and retry the transfer.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsTransferRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TransferDomainRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizationCode;
use \OpenAPI\OpenAPI\Models\Shared\TransferDomainRequestContactNoticesEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegistrationInput;
use \OpenAPI\OpenAPI\Models\Shared\ContactSettings;
use \OpenAPI\OpenAPI\Models\Shared\Contact;
use \OpenAPI\OpenAPI\Models\Shared\PostalAddress;
use \OpenAPI\OpenAPI\Models\Shared\ContactSettingsPrivacyEnum;
use \OpenAPI\OpenAPI\Models\Shared\DnsSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\CustomDns;
use \OpenAPI\OpenAPI\Models\Shared\DsRecord;
use \OpenAPI\OpenAPI\Models\Shared\DsRecordAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\DsRecordDigestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GlueRecord;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDomainsDnsInput;
use \OpenAPI\OpenAPI\Models\Shared\GoogleDomainsDnsDsStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\ManagementSettingsInput;
use \OpenAPI\OpenAPI\Models\Shared\ManagementSettingsTransferLockStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\Money;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\DomainsProjectsLocationsRegistrationsTransferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DomainsProjectsLocationsRegistrationsTransferRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->transferDomainRequestInput = new TransferDomainRequestInput();
    $request->transferDomainRequestInput->authorizationCode = new AuthorizationCode();
    $request->transferDomainRequestInput->authorizationCode->code = 'natus';
    $request->transferDomainRequestInput->contactNotices = [
        TransferDomainRequestContactNoticesEnum::PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT,
    ];
    $request->transferDomainRequestInput->registration = new RegistrationInput();
    $request->transferDomainRequestInput->registration->contactSettings = new ContactSettings();
    $request->transferDomainRequestInput->registration->contactSettings->adminContact = new Contact();
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->email = 'Yessenia.Bayer@yahoo.com';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->faxNumber = 'consequuntur';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->phoneNumber = 'repellendus';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress = new PostalAddress();
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->addressLines = [
        'maxime',
        'dignissimos',
        'officia',
    ];
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->administrativeArea = 'asperiores';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->languageCode = 'nemo';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->locality = 'quae';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->organization = 'quaerat';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->postalCode = '82026-6326';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->recipients = [
        'recusandae',
        'totam',
        'fugiat',
    ];
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->regionCode = 'vel';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->revision = 497678;
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->sortingCode = 'quos';
    $request->transferDomainRequestInput->registration->contactSettings->adminContact->postalAddress->sublocality = 'vel';
    $request->transferDomainRequestInput->registration->contactSettings->privacy = ContactSettingsPrivacyEnum::PUBLIC_CONTACT_DATA;
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact = new Contact();
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->email = 'Mekhi.Ritchie@hotmail.com';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->faxNumber = 'corporis';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->phoneNumber = 'reiciendis';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress = new PostalAddress();
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->addressLines = [
        'nemo',
        'recusandae',
        'aliquid',
        'aperiam',
    ];
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->administrativeArea = 'cum';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->languageCode = 'consectetur';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->locality = 'in';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->organization = 'exercitationem';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->postalCode = '82939-6982';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->recipients = [
        'asperiores',
    ];
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->regionCode = 'adipisci';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->revision = 249420;
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->sortingCode = 'amet';
    $request->transferDomainRequestInput->registration->contactSettings->registrantContact->postalAddress->sublocality = 'beatae';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact = new Contact();
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->email = 'Valerie35@yahoo.com';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->faxNumber = 'harum';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->phoneNumber = 'laboriosam';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress = new PostalAddress();
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->addressLines = [
        'voluptates',
    ];
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->administrativeArea = 'libero';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->languageCode = 'vitae';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->locality = 'accusamus';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->organization = 'similique';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->postalCode = '13333';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->recipients = [
        'dolorum',
        'adipisci',
        'minus',
    ];
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->regionCode = 'dolores';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->revision = 503934;
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->sortingCode = 'in';
    $request->transferDomainRequestInput->registration->contactSettings->technicalContact->postalAddress->sublocality = 'dolore';
    $request->transferDomainRequestInput->registration->dnsSettings = new DnsSettingsInput();
    $request->transferDomainRequestInput->registration->dnsSettings->customDns = new CustomDns();
    $request->transferDomainRequestInput->registration->dnsSettings->customDns->dsRecords = [
        new DsRecord(),
        new DsRecord(),
    ];
    $request->transferDomainRequestInput->registration->dnsSettings->customDns->nameServers = [
        'temporibus',
        'ullam',
        'adipisci',
        'cum',
    ];
    $request->transferDomainRequestInput->registration->dnsSettings->glueRecords = [
        new GlueRecord(),
        new GlueRecord(),
        new GlueRecord(),
    ];
    $request->transferDomainRequestInput->registration->dnsSettings->googleDomainsDns = new GoogleDomainsDnsInput();
    $request->transferDomainRequestInput->registration->dnsSettings->googleDomainsDns->dsState = GoogleDomainsDnsDsStateEnum::DS_RECORDS_UNPUBLISHED;
    $request->transferDomainRequestInput->registration->domainName = 'hic';
    $request->transferDomainRequestInput->registration->labels = [
        'culpa' => 'corrupti',
    ];
    $request->transferDomainRequestInput->registration->managementSettings = new ManagementSettingsInput();
    $request->transferDomainRequestInput->registration->managementSettings->transferLockState = ManagementSettingsTransferLockStateEnum::LOCKED;
    $request->transferDomainRequestInput->registration->pendingContactSettings = new ContactSettings();
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact = new Contact();
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->email = 'Tristian.Heidenreich69@yahoo.com';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->faxNumber = 'sed';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->phoneNumber = 'reiciendis';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress = new PostalAddress();
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->addressLines = [
        'asperiores',
    ];
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->administrativeArea = 'facilis';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->languageCode = 'voluptate';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->locality = 'expedita';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->organization = 'ab';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->postalCode = '26144-6136';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->recipients = [
        'suscipit',
    ];
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->regionCode = 'sapiente';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->revision = 895386;
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->sortingCode = 'illo';
    $request->transferDomainRequestInput->registration->pendingContactSettings->adminContact->postalAddress->sublocality = 'reiciendis';
    $request->transferDomainRequestInput->registration->pendingContactSettings->privacy = ContactSettingsPrivacyEnum::CONTACT_PRIVACY_UNSPECIFIED;
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact = new Contact();
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->email = 'Wilfrid59@yahoo.com';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->faxNumber = 'eius';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->phoneNumber = 'necessitatibus';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress = new PostalAddress();
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->addressLines = [
        'ea',
    ];
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->administrativeArea = 'occaecati';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->languageCode = 'quos';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->locality = 'voluptatibus';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->organization = 'tempora';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->postalCode = '49402';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->recipients = [
        'praesentium',
        'facilis',
        'quaerat',
        'incidunt',
    ];
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->regionCode = 'ipsam';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->revision = 894864;
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->sortingCode = 'rem';
    $request->transferDomainRequestInput->registration->pendingContactSettings->registrantContact->postalAddress->sublocality = 'sit';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact = new Contact();
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->email = 'Lisa92@hotmail.com';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->faxNumber = 'reiciendis';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->phoneNumber = 'nulla';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress = new PostalAddress();
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->addressLines = [
        'aperiam',
    ];
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->administrativeArea = 'saepe';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->languageCode = 'numquam';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->locality = 'veniam';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->organization = 'in';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->postalCode = '15357-3656';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->recipients = [
        'expedita',
        'debitis',
        'neque',
        'dolorum',
    ];
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->regionCode = 'nostrum';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->revision = 639028;
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->sortingCode = 'dolorum';
    $request->transferDomainRequestInput->registration->pendingContactSettings->technicalContact->postalAddress->sublocality = 'corrupti';
    $request->transferDomainRequestInput->validateOnly = false;
    $request->transferDomainRequestInput->yearlyPrice = new Money();
    $request->transferDomainRequestInput->yearlyPrice->currencyCode = 'accusamus';
    $request->transferDomainRequestInput->yearlyPrice->nanos = 272683;
    $request->transferDomainRequestInput->yearlyPrice->units = 'atque';
    $request->accessToken = 'fugit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'voluptatem';
    $request->key = 'culpa';
    $request->oauthToken = 'expedita';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'esse';
    $request->uploadProtocol = 'ipsam';

    $requestSecurity = new DomainsProjectsLocationsRegistrationsTransferSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->domainsProjectsLocationsRegistrationsTransfer($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
