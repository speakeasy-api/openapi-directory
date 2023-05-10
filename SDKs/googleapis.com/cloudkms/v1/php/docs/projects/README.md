# projects

### Available Operations

* [cloudkmsProjectsLocationsEkmConnectionsCreate](#cloudkmsprojectslocationsekmconnectionscreate) - Creates a new EkmConnection in a given Project and Location.
* [cloudkmsProjectsLocationsEkmConnectionsList](#cloudkmsprojectslocationsekmconnectionslist) - Lists EkmConnections.
* [cloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity](#cloudkmsprojectslocationsekmconnectionsverifyconnectivity) - Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.
* [cloudkmsProjectsLocationsGenerateRandomBytes](#cloudkmsprojectslocationsgeneraterandombytes) - Generate random bytes using the Cloud KMS randomness source in the provided location.
* [cloudkmsProjectsLocationsKeyRingsCreate](#cloudkmsprojectslocationskeyringscreate) - Create a new KeyRing in a given Project and Location.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate](#cloudkmsprojectslocationskeyringscryptokeyscreate) - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricdecrypt) - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsasymmetricsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionscreate) - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsdestroy) - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsgetpublickey) - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsimport) - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionslist) - Lists CryptoKeyVersions.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacsign) - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsmacverify) - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionspatch) - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore](#cloudkmsprojectslocationskeyringscryptokeyscryptokeyversionsrestore) - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt](#cloudkmsprojectslocationskeyringscryptokeysdecrypt) - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt](#cloudkmsprojectslocationskeyringscryptokeysencrypt) - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysList](#cloudkmsprojectslocationskeyringscryptokeyslist) - Lists CryptoKeys.
* [cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion](#cloudkmsprojectslocationskeyringscryptokeysupdateprimaryversion) - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
* [cloudkmsProjectsLocationsKeyRingsImportJobsCreate](#cloudkmsprojectslocationskeyringsimportjobscreate) - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
* [cloudkmsProjectsLocationsKeyRingsImportJobsGet](#cloudkmsprojectslocationskeyringsimportjobsget) - Returns metadata for a given ImportJob.
* [cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy](#cloudkmsprojectslocationskeyringsimportjobsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [cloudkmsProjectsLocationsKeyRingsImportJobsList](#cloudkmsprojectslocationskeyringsimportjobslist) - Lists ImportJobs.
* [cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy](#cloudkmsprojectslocationskeyringsimportjobssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions](#cloudkmsprojectslocationskeyringsimportjobstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [cloudkmsProjectsLocationsKeyRingsList](#cloudkmsprojectslocationskeyringslist) - Lists KeyRings.
* [cloudkmsProjectsLocationsList](#cloudkmsprojectslocationslist) - Lists information about the supported locations for this service.

## cloudkmsProjectsLocationsEkmConnectionsCreate

Creates a new EkmConnection in a given Project and Location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EkmConnectionInput;
use \OpenAPI\OpenAPI\Models\Shared\EkmConnectionKeyManagementModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServiceResolverInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateInput;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsEkmConnectionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->ekmConnectionInput = new EkmConnectionInput();
    $request->ekmConnectionInput->cryptoSpacePath = 'tempora';
    $request->ekmConnectionInput->etag = 'suscipit';
    $request->ekmConnectionInput->keyManagementMode = EkmConnectionKeyManagementModeEnum::MANUAL;
    $request->ekmConnectionInput->serviceResolvers = [
        new ServiceResolverInput(),
        new ServiceResolverInput(),
        new ServiceResolverInput(),
        new ServiceResolverInput(),
    ];
    $request->accessToken = 'placeat';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'iusto';
    $request->ekmConnectionId = 'excepturi';
    $request->fields = 'nisi';
    $request->key = 'recusandae';
    $request->oauthToken = 'temporibus';
    $request->parent = 'ab';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'deserunt';

    $requestSecurity = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsEkmConnectionsCreate($request, $requestSecurity);

    if ($response->ekmConnection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsEkmConnectionsList

Lists EkmConnections.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsEkmConnectionsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sapiente';
    $request->fields = 'quo';
    $request->filter = 'odit';
    $request->key = 'at';
    $request->oauthToken = 'at';
    $request->orderBy = 'maiores';
    $request->pageSize = 473608;
    $request->pageToken = 'quod';
    $request->parent = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'porro';

    $requestSecurity = new CloudkmsProjectsLocationsEkmConnectionsListSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsEkmConnectionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsEkmConnectionsList($request, $requestSecurity);

    if ($response->listEkmConnectionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity

Verifies that Cloud KMS can successfully connect to the external key manager specified by an EkmConnection. If there is an error connecting to the EKM, this method returns a FAILED_PRECONDITION status containing structured information as described at https://cloud.google.com/kms/docs/reference/ekm_errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivityRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivityRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'officia';
    $request->fields = 'occaecati';
    $request->key = 'fugit';
    $request->name = 'Irvin Rosenbaum III';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'modi';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'impedit';

    $requestSecurity = new CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsEkmConnectionsVerifyConnectivitySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsEkmConnectionsVerifyConnectivity($request, $requestSecurity);

    if ($response->verifyConnectivityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsGenerateRandomBytes

Generate random bytes using the Cloud KMS randomness source in the provided location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsGenerateRandomBytesRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GenerateRandomBytesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GenerateRandomBytesRequestProtectionLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsGenerateRandomBytesSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsGenerateRandomBytesRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->generateRandomBytesRequest = new GenerateRandomBytesRequest();
    $request->generateRandomBytesRequest->lengthBytes = 456150;
    $request->generateRandomBytesRequest->protectionLevel = GenerateRandomBytesRequestProtectionLevelEnum::SOFTWARE;
    $request->accessToken = 'excepturi';
    $request->alt = AltEnum::JSON;
    $request->callback = 'perferendis';
    $request->fields = 'ad';
    $request->key = 'natus';
    $request->location = 'sed';
    $request->oauthToken = 'iste';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'laboriosam';

    $requestSecurity = new CloudkmsProjectsLocationsGenerateRandomBytesSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsGenerateRandomBytesSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsGenerateRandomBytes($request, $requestSecurity);

    if ($response->generateRandomBytesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCreate

Create a new KeyRing in a given Project and Location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'saepe';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'in';
    $request->fields = 'corporis';
    $request->key = 'iste';
    $request->keyRingId = 'iure';
    $request->oauthToken = 'saepe';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'architecto';
    $request->uploadType = 'ipsa';
    $request->uploadProtocol = 'reiciendis';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCreateSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCreate($request, $requestSecurity);

    if ($response->keyRing !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate

Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyInput;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\KeyOperationAttestationInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateChains;
use \OpenAPI\OpenAPI\Models\Shared\ExternalProtectionLevelOptions;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionTemplate;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionTemplateAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionTemplateProtectionLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cryptoKeyInput = new CryptoKeyInput();
    $request->cryptoKeyInput->cryptoKeyBackend = 'mollitia';
    $request->cryptoKeyInput->destroyScheduledDuration = 'laborum';
    $request->cryptoKeyInput->importOnly = false;
    $request->cryptoKeyInput->labels = [
        'dolorem' => 'corporis',
    ];
    $request->cryptoKeyInput->nextRotationTime = 'explicabo';
    $request->cryptoKeyInput->primary = new CryptoKeyVersionInput();
    $request->cryptoKeyInput->primary->attestation = new KeyOperationAttestationInput();
    $request->cryptoKeyInput->primary->attestation->certChains = new CertificateChains();
    $request->cryptoKeyInput->primary->attestation->certChains->caviumCerts = [
        'enim',
        'omnis',
        'nemo',
        'minima',
    ];
    $request->cryptoKeyInput->primary->attestation->certChains->googleCardCerts = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->cryptoKeyInput->primary->attestation->certChains->googlePartitionCerts = [
        'sapiente',
        'architecto',
        'mollitia',
        'dolorem',
    ];
    $request->cryptoKeyInput->primary->externalProtectionLevelOptions = new ExternalProtectionLevelOptions();
    $request->cryptoKeyInput->primary->externalProtectionLevelOptions->ekmConnectionKeyPath = 'culpa';
    $request->cryptoKeyInput->primary->externalProtectionLevelOptions->externalKeyUri = 'consequuntur';
    $request->cryptoKeyInput->primary->state = CryptoKeyVersionStateEnum::EXTERNAL_DESTRUCTION_FAILED;
    $request->cryptoKeyInput->purpose = CryptoKeyPurposeEnum::ASYMMETRIC_DECRYPT;
    $request->cryptoKeyInput->rotationPeriod = 'occaecati';
    $request->cryptoKeyInput->versionTemplate = new CryptoKeyVersionTemplate();
    $request->cryptoKeyInput->versionTemplate->algorithm = CryptoKeyVersionTemplateAlgorithmEnum::RSA_SIGN_PKCS13072_SHA256;
    $request->cryptoKeyInput->versionTemplate->protectionLevel = CryptoKeyVersionTemplateProtectionLevelEnum::HSM;
    $request->accessToken = 'quam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'velit';
    $request->cryptoKeyId = 'error';
    $request->fields = 'quia';
    $request->key = 'quis';
    $request->oauthToken = 'vitae';
    $request->parent = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'animi';
    $request->skipInitialVersionCreation = false;
    $request->uploadType = 'enim';
    $request->uploadProtocol = 'odit';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate($request, $requestSecurity);

    if ($response->cryptoKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt

Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AsymmetricDecryptRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->asymmetricDecryptRequest = new AsymmetricDecryptRequest();
    $request->asymmetricDecryptRequest->ciphertext = 'sequi';
    $request->asymmetricDecryptRequest->ciphertextCrc32c = 'tenetur';
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->key = 'quasi';
    $request->name = 'Dr. Jake Pacocha';
    $request->oauthToken = 'vero';
    $request->prettyPrint = false;
    $request->quotaUser = 'nihil';
    $request->uploadType = 'praesentium';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt($request, $requestSecurity);

    if ($response->asymmetricDecryptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign

Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AsymmetricSignRequest;
use \OpenAPI\OpenAPI\Models\Shared\Digest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->asymmetricSignRequest = new AsymmetricSignRequest();
    $request->asymmetricSignRequest->data = 'omnis';
    $request->asymmetricSignRequest->dataCrc32c = 'voluptate';
    $request->asymmetricSignRequest->digest = new Digest();
    $request->asymmetricSignRequest->digest->sha256 = 'cum';
    $request->asymmetricSignRequest->digest->sha384 = 'perferendis';
    $request->asymmetricSignRequest->digest->sha512 = 'doloremque';
    $request->asymmetricSignRequest->digestCrc32c = 'reprehenderit';
    $request->accessToken = 'ut';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->name = 'Mildred Pfeffer';
    $request->oauthToken = 'commodi';
    $request->prettyPrint = false;
    $request->quotaUser = 'repudiandae';
    $request->uploadType = 'quae';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign($request, $requestSecurity);

    if ($response->asymmetricSignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate

Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\KeyOperationAttestationInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateChains;
use \OpenAPI\OpenAPI\Models\Shared\ExternalProtectionLevelOptions;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cryptoKeyVersionInput = new CryptoKeyVersionInput();
    $request->cryptoKeyVersionInput->attestation = new KeyOperationAttestationInput();
    $request->cryptoKeyVersionInput->attestation->certChains = new CertificateChains();
    $request->cryptoKeyVersionInput->attestation->certChains->caviumCerts = [
        'excepturi',
        'pariatur',
        'modi',
    ];
    $request->cryptoKeyVersionInput->attestation->certChains->googleCardCerts = [
        'rem',
        'voluptates',
        'quasi',
    ];
    $request->cryptoKeyVersionInput->attestation->certChains->googlePartitionCerts = [
        'sint',
        'veritatis',
        'itaque',
        'incidunt',
    ];
    $request->cryptoKeyVersionInput->externalProtectionLevelOptions = new ExternalProtectionLevelOptions();
    $request->cryptoKeyVersionInput->externalProtectionLevelOptions->ekmConnectionKeyPath = 'enim';
    $request->cryptoKeyVersionInput->externalProtectionLevelOptions->externalKeyUri = 'consequatur';
    $request->cryptoKeyVersionInput->state = CryptoKeyVersionStateEnum::IMPORT_FAILED;
    $request->accessToken = 'quibusdam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'distinctio';
    $request->key = 'quibusdam';
    $request->oauthToken = 'labore';
    $request->parent = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'aliquid';
    $request->uploadProtocol = 'cupiditate';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate($request, $requestSecurity);

    if ($response->cryptoKeyVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy

Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'magni' => 'assumenda',
    ];
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugit';
    $request->fields = 'dolorum';
    $request->key = 'excepturi';
    $request->name = 'Olivia Rice';
    $request->oauthToken = 'eum';
    $request->prettyPrint = false;
    $request->quotaUser = 'non';
    $request->uploadType = 'eligendi';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy($request, $requestSecurity);

    if ($response->cryptoKeyVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey

Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
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

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey($request, $requestSecurity);

    if ($response->publicKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport

Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportCryptoKeyVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportCryptoKeyVersionRequestAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->importCryptoKeyVersionRequest = new ImportCryptoKeyVersionRequest();
    $request->importCryptoKeyVersionRequest->algorithm = ImportCryptoKeyVersionRequestAlgorithmEnum::EC_SIGN_SECP256_K1_SHA256;
    $request->importCryptoKeyVersionRequest->cryptoKeyVersion = 'facere';
    $request->importCryptoKeyVersionRequest->importJob = 'ea';
    $request->importCryptoKeyVersionRequest->rsaAesWrappedKey = 'aliquid';
    $request->importCryptoKeyVersionRequest->wrappedKey = 'laborum';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'occaecati';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->oauthToken = 'delectus';
    $request->parent = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport($request, $requestSecurity);

    if ($response->cryptoKeyVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList

Lists CryptoKeyVersions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'deserunt';
    $request->filter = 'nisi';
    $request->key = 'vel';
    $request->oauthToken = 'natus';
    $request->orderBy = 'omnis';
    $request->pageSize = 474867;
    $request->pageToken = 'perferendis';
    $request->parent = 'nihil';
    $request->prettyPrint = false;
    $request->quotaUser = 'magnam';
    $request->uploadType = 'distinctio';
    $request->uploadProtocol = 'id';
    $request->view = CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListViewEnum::CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED;

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList($request, $requestSecurity);

    if ($response->listCryptoKeyVersionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign

Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MacSignRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->macSignRequest = new MacSignRequest();
    $request->macSignRequest->data = 'suscipit';
    $request->macSignRequest->dataCrc32c = 'natus';
    $request->accessToken = 'nobis';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'vero';
    $request->fields = 'aspernatur';
    $request->key = 'architecto';
    $request->name = 'Frances Marks';
    $request->oauthToken = 'quos';
    $request->prettyPrint = false;
    $request->quotaUser = 'sint';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'mollitia';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign($request, $requestSecurity);

    if ($response->macSignResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify

Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MacVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->macVerifyRequest = new MacVerifyRequest();
    $request->macVerifyRequest->data = 'mollitia';
    $request->macVerifyRequest->dataCrc32c = 'ad';
    $request->macVerifyRequest->mac = 'eum';
    $request->macVerifyRequest->macCrc32c = 'dolor';
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->fields = 'quasi';
    $request->key = 'iure';
    $request->name = 'Doyle Gibson';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify($request, $requestSecurity);

    if ($response->macVerifyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch

Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionInput;
use \OpenAPI\OpenAPI\Models\Shared\KeyOperationAttestationInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateChains;
use \OpenAPI\OpenAPI\Models\Shared\ExternalProtectionLevelOptions;
use \OpenAPI\OpenAPI\Models\Shared\CryptoKeyVersionStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->cryptoKeyVersionInput = new CryptoKeyVersionInput();
    $request->cryptoKeyVersionInput->attestation = new KeyOperationAttestationInput();
    $request->cryptoKeyVersionInput->attestation->certChains = new CertificateChains();
    $request->cryptoKeyVersionInput->attestation->certChains->caviumCerts = [
        'expedita',
        'nihil',
    ];
    $request->cryptoKeyVersionInput->attestation->certChains->googleCardCerts = [
        'quibusdam',
        'sed',
        'saepe',
        'pariatur',
    ];
    $request->cryptoKeyVersionInput->attestation->certChains->googlePartitionCerts = [
        'consequuntur',
    ];
    $request->cryptoKeyVersionInput->externalProtectionLevelOptions = new ExternalProtectionLevelOptions();
    $request->cryptoKeyVersionInput->externalProtectionLevelOptions->ekmConnectionKeyPath = 'praesentium';
    $request->cryptoKeyVersionInput->externalProtectionLevelOptions->externalKeyUri = 'natus';
    $request->cryptoKeyVersionInput->state = CryptoKeyVersionStateEnum::PENDING_GENERATION;
    $request->accessToken = 'sunt';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'illum';
    $request->fields = 'pariatur';
    $request->key = 'maxime';
    $request->name = 'Miriam Connelly Jr.';
    $request->oauthToken = 'maiores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quidem';
    $request->updateMask = 'ipsam';
    $request->uploadType = 'voluptate';
    $request->uploadProtocol = 'autem';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch($request, $requestSecurity);

    if ($response->cryptoKeyVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore

Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->requestBody = [
        'pariatur' => 'nemo',
    ];
    $request->accessToken = 'voluptatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'fugiat';
    $request->fields = 'amet';
    $request->key = 'aut';
    $request->name = 'Lewis Welch';
    $request->oauthToken = 'dolores';
    $request->prettyPrint = false;
    $request->quotaUser = 'quis';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'dignissimos';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore($request, $requestSecurity);

    if ($response->cryptoKeyVersion !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt

Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DecryptRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->decryptRequest = new DecryptRequest();
    $request->decryptRequest->additionalAuthenticatedData = 'quis';
    $request->decryptRequest->additionalAuthenticatedDataCrc32c = 'nesciunt';
    $request->decryptRequest->ciphertext = 'eos';
    $request->decryptRequest->ciphertextCrc32c = 'perferendis';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quam';
    $request->fields = 'dolor';
    $request->key = 'vero';
    $request->name = 'Mindy Walter';
    $request->oauthToken = 'perspiciatis';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptatem';
    $request->uploadType = 'porro';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt($request, $requestSecurity);

    if ($response->decryptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt

Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EncryptRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->encryptRequest = new EncryptRequest();
    $request->encryptRequest->additionalAuthenticatedData = 'error';
    $request->encryptRequest->additionalAuthenticatedDataCrc32c = 'eaque';
    $request->encryptRequest->plaintext = 'occaecati';
    $request->encryptRequest->plaintextCrc32c = 'rerum';
    $request->accessToken = 'adipisci';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'earum';
    $request->fields = 'modi';
    $request->key = 'iste';
    $request->name = 'Casey Stracke';
    $request->oauthToken = 'libero';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'quaerat';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt($request, $requestSecurity);

    if ($response->encryptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysList

Lists CryptoKeys.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'dolorem';
    $request->alt = AltEnum::JSON;
    $request->callback = 'dolor';
    $request->fields = 'qui';
    $request->filter = 'ipsum';
    $request->key = 'hic';
    $request->oauthToken = 'excepturi';
    $request->orderBy = 'cum';
    $request->pageSize = 452109;
    $request->pageToken = 'dignissimos';
    $request->parent = 'reiciendis';
    $request->prettyPrint = false;
    $request->quotaUser = 'amet';
    $request->uploadType = 'dolorum';
    $request->uploadProtocol = 'numquam';
    $request->versionView = CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum::CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED;

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysList($request, $requestSecurity);

    if ($response->listCryptoKeysResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion

Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UpdateCryptoKeyPrimaryVersionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->updateCryptoKeyPrimaryVersionRequest = new UpdateCryptoKeyPrimaryVersionRequest();
    $request->updateCryptoKeyPrimaryVersionRequest->cryptoKeyVersionId = 'ipsa';
    $request->accessToken = 'iure';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quaerat';
    $request->fields = 'accusamus';
    $request->key = 'quidem';
    $request->name = 'Hector Mosciski';
    $request->oauthToken = 'sit';
    $request->prettyPrint = false;
    $request->quotaUser = 'fugiat';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion($request, $requestSecurity);

    if ($response->cryptoKey !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsCreate

Create a new ImportJob within a KeyRing. ImportJob.import_method is required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportJobInput;
use \OpenAPI\OpenAPI\Models\Shared\KeyOperationAttestationInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateChains;
use \OpenAPI\OpenAPI\Models\Shared\ImportJobImportMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImportJobProtectionLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\WrappingPublicKey;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->importJobInput = new ImportJobInput();
    $request->importJobInput->attestation = new KeyOperationAttestationInput();
    $request->importJobInput->attestation->certChains = new CertificateChains();
    $request->importJobInput->attestation->certChains->caviumCerts = [
        'voluptate',
        'dolorum',
    ];
    $request->importJobInput->attestation->certChains->googleCardCerts = [
        'omnis',
        'necessitatibus',
        'distinctio',
    ];
    $request->importJobInput->attestation->certChains->googlePartitionCerts = [
        'nihil',
        'ipsum',
        'voluptate',
        'id',
    ];
    $request->importJobInput->importMethod = ImportJobImportMethodEnum::RSA_OAEP4096_SHA256;
    $request->importJobInput->protectionLevel = ImportJobProtectionLevelEnum::SOFTWARE;
    $request->importJobInput->publicKey = new WrappingPublicKey();
    $request->importJobInput->publicKey->pem = 'aspernatur';
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'accusamus';
    $request->importJobId = 'ad';
    $request->key = 'saepe';
    $request->oauthToken = 'suscipit';
    $request->parent = 'deserunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsImportJobsCreate($request, $requestSecurity);

    if ($response->importJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsGet

Returns metadata for a given ImportJob.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::JSON;
    $request->callback = 'at';
    $request->fields = 'quaerat';
    $request->key = 'tempora';
    $request->name = 'Bernadette Torp';
    $request->oauthToken = 'a';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'harum';
    $request->uploadProtocol = 'iusto';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsGetSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsImportJobsGet($request, $requestSecurity);

    if ($response->importJob !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quisquam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'amet';
    $request->fields = 'tempore';
    $request->key = 'accusamus';
    $request->oauthToken = 'numquam';
    $request->optionsRequestedPolicyVersion = 313692;
    $request->prettyPrint = false;
    $request->quotaUser = 'dolorem';
    $request->resource = 'sapiente';
    $request->uploadType = 'totam';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsList

Lists ImportJobs.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsImportJobsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'expedita';
    $request->alt = AltEnum::JSON;
    $request->callback = 'sed';
    $request->fields = 'vel';
    $request->filter = 'libero';
    $request->key = 'voluptas';
    $request->oauthToken = 'deserunt';
    $request->orderBy = 'quam';
    $request->pageSize = 214880;
    $request->pageToken = 'incidunt';
    $request->parent = 'qui';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'maxime';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsImportJobsListSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsImportJobsList($request, $requestSecurity);

    if ($response->listImportJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest();
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
    ];
    $request->setIamPolicyRequest->policy->etag = 'totam';
    $request->setIamPolicyRequest->policy->version = 276894;
    $request->setIamPolicyRequest->updateMask = 'aspernatur';
    $request->accessToken = 'dolores';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'facilis';
    $request->fields = 'aliquid';
    $request->key = 'quam';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->resource = 'qui';
    $request->uploadType = 'neque';
    $request->uploadProtocol = 'fugit';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'sunt',
        'ullam',
    ];
    $request->accessToken = 'nam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'voluptatem';
    $request->fields = 'cumque';
    $request->key = 'soluta';
    $request->oauthToken = 'nobis';
    $request->prettyPrint = false;
    $request->quotaUser = 'et';
    $request->resource = 'saepe';
    $request->uploadType = 'ipsum';
    $request->uploadProtocol = 'veritatis';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsKeyRingsList

Lists KeyRings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsKeyRingsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsKeyRingsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'cupiditate';
    $request->fields = 'aperiam';
    $request->filter = 'delectus';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolore';
    $request->orderBy = 'labore';
    $request->pageSize = 240829;
    $request->pageToken = 'dolorum';
    $request->parent = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'quae';
    $request->uploadType = 'aut';
    $request->uploadProtocol = 'quas';

    $requestSecurity = new CloudkmsProjectsLocationsKeyRingsListSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsKeyRingsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsKeyRingsList($request, $requestSecurity);

    if ($response->listKeyRingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## cloudkmsProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\CloudkmsProjectsLocationsListSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloudkmsProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'repellendus';
    $request->fields = 'porro';
    $request->filter = 'doloribus';
    $request->key = 'ut';
    $request->name = 'Ms. Terrance Davis';
    $request->oauthToken = 'occaecati';
    $request->pageSize = 977496;
    $request->pageToken = 'quisquam';
    $request->prettyPrint = false;
    $request->quotaUser = 'vero';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new CloudkmsProjectsLocationsListSecurity();
    $requestSecurity->option1 = new CloudkmsProjectsLocationsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->cloudkmsProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
