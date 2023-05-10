# projects

### Available Operations

* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate](#privatecaprojectslocationscapoolscertificateauthoritiesactivate) - Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList](#privatecaprojectslocationscapoolscertificateauthoritiescertificaterevocationlistslist) - Lists CertificateRevocationLists.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate](#privatecaprojectslocationscapoolscertificateauthoritiescreate) - Create a new CertificateAuthority in a given Project and Location.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable](#privatecaprojectslocationscapoolscertificateauthoritiesdisable) - Disable a CertificateAuthority.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable](#privatecaprojectslocationscapoolscertificateauthoritiesenable) - Enable a CertificateAuthority.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch](#privatecaprojectslocationscapoolscertificateauthoritiesfetch) - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList](#privatecaprojectslocationscapoolscertificateauthoritieslist) - Lists CertificateAuthorities.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete](#privatecaprojectslocationscapoolscertificateauthoritiesundelete) - Undelete a CertificateAuthority that has been deleted.
* [privatecaProjectsLocationsCaPoolsCertificatesCreate](#privatecaprojectslocationscapoolscertificatescreate) - Create a new Certificate in a given Project, Location from a particular CaPool.
* [privatecaProjectsLocationsCaPoolsCertificatesList](#privatecaprojectslocationscapoolscertificateslist) - Lists Certificates.
* [privatecaProjectsLocationsCaPoolsCertificatesRevoke](#privatecaprojectslocationscapoolscertificatesrevoke) - Revoke a Certificate.
* [privatecaProjectsLocationsCaPoolsCreate](#privatecaprojectslocationscapoolscreate) - Create a CaPool.
* [privatecaProjectsLocationsCaPoolsFetchCaCerts](#privatecaprojectslocationscapoolsfetchcacerts) - FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
* [privatecaProjectsLocationsCaPoolsList](#privatecaprojectslocationscapoolslist) - Lists CaPools.
* [privatecaProjectsLocationsCertificateTemplatesCreate](#privatecaprojectslocationscertificatetemplatescreate) - Create a new CertificateTemplate in a given Project and Location.
* [privatecaProjectsLocationsCertificateTemplatesGetIamPolicy](#privatecaprojectslocationscertificatetemplatesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [privatecaProjectsLocationsCertificateTemplatesList](#privatecaprojectslocationscertificatetemplateslist) - Lists CertificateTemplates.
* [privatecaProjectsLocationsCertificateTemplatesPatch](#privatecaprojectslocationscertificatetemplatespatch) - Update a CertificateTemplate.
* [privatecaProjectsLocationsCertificateTemplatesSetIamPolicy](#privatecaprojectslocationscertificatetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [privatecaProjectsLocationsCertificateTemplatesTestIamPermissions](#privatecaprojectslocationscertificatetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [privatecaProjectsLocationsList](#privatecaprojectslocationslist) - Lists information about the supported locations for this service.
* [privatecaProjectsLocationsOperationsCancel](#privatecaprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [privatecaProjectsLocationsOperationsDelete](#privatecaprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [privatecaProjectsLocationsOperationsGet](#privatecaprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [privatecaProjectsLocationsOperationsList](#privatecaprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate

Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ActivateCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubordinateConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubordinateConfigChain;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->activateCertificateAuthorityRequest = new ActivateCertificateAuthorityRequest();
    $request->activateCertificateAuthorityRequest->pemCaCertificate = 'iusto';
    $request->activateCertificateAuthorityRequest->requestId = 'excepturi';
    $request->activateCertificateAuthorityRequest->subordinateConfig = new SubordinateConfig();
    $request->activateCertificateAuthorityRequest->subordinateConfig->certificateAuthority = 'nisi';
    $request->activateCertificateAuthorityRequest->subordinateConfig->pemIssuerChain = new SubordinateConfigChain();
    $request->activateCertificateAuthorityRequest->subordinateConfig->pemIssuerChain->pemCertificates = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->accessToken = 'deserunt';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ipsam';
    $request->fields = 'repellendus';
    $request->key = 'sapiente';
    $request->name = 'Fred Strosin';
    $request->oauthToken = 'molestiae';
    $request->prettyPrint = false;
    $request->quotaUser = 'quod';
    $request->uploadType = 'quod';
    $request->uploadProtocol = 'esse';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList

Lists CertificateRevocationLists.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dicta';
    $request->fields = 'nam';
    $request->filter = 'officia';
    $request->key = 'occaecati';
    $request->oauthToken = 'fugit';
    $request->orderBy = 'deleniti';
    $request->pageSize = 944669;
    $request->pageToken = 'optio';
    $request->parent = 'totam';
    $request->prettyPrint = false;
    $request->quotaUser = 'beatae';
    $request->uploadType = 'commodi';
    $request->uploadProtocol = 'molestiae';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList($request, $requestSecurity);

    if ($response->listCertificateRevocationListsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate

Create a new CertificateAuthority in a given Project and Location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityInput;
use \OpenAPI\OpenAPI\Models\Shared\AccessUrls;
use \OpenAPI\OpenAPI\Models\Shared\CertificateConfig;
use \OpenAPI\OpenAPI\Models\Shared\PublicKey;
use \OpenAPI\OpenAPI\Models\Shared\PublicKeyFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\Subject;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAltNames;
use \OpenAPI\OpenAPI\Models\Shared\X509Extension;
use \OpenAPI\OpenAPI\Models\Shared\ObjectId;
use \OpenAPI\OpenAPI\Models\Shared\X509Parameters;
use \OpenAPI\OpenAPI\Models\Shared\CaOptions;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedKeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\NameConstraints;
use \OpenAPI\OpenAPI\Models\Shared\KeyVersionSpec;
use \OpenAPI\OpenAPI\Models\Shared\KeyVersionSpecAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubordinateConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubordinateConfigChain;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->certificateAuthorityInput = new CertificateAuthorityInput();
    $request->certificateAuthorityInput->accessUrls = new AccessUrls();
    $request->certificateAuthorityInput->accessUrls->caCertificateAccessUrl = 'qui';
    $request->certificateAuthorityInput->accessUrls->crlAccessUrls = [
        'cum',
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->certificateAuthorityInput->config = new CertificateConfig();
    $request->certificateAuthorityInput->config->publicKey = new PublicKey();
    $request->certificateAuthorityInput->config->publicKey->format = PublicKeyFormatEnum::KEY_FORMAT_UNSPECIFIED;
    $request->certificateAuthorityInput->config->publicKey->key = 'perferendis';
    $request->certificateAuthorityInput->config->subjectConfig = new SubjectConfig();
    $request->certificateAuthorityInput->config->subjectConfig->subject = new Subject();
    $request->certificateAuthorityInput->config->subjectConfig->subject->commonName = 'ad';
    $request->certificateAuthorityInput->config->subjectConfig->subject->countryCode = 'MU';
    $request->certificateAuthorityInput->config->subjectConfig->subject->locality = 'sed';
    $request->certificateAuthorityInput->config->subjectConfig->subject->organization = 'iste';
    $request->certificateAuthorityInput->config->subjectConfig->subject->organizationalUnit = 'dolor';
    $request->certificateAuthorityInput->config->subjectConfig->subject->postalCode = '39964-3649';
    $request->certificateAuthorityInput->config->subjectConfig->subject->province = 'quidem';
    $request->certificateAuthorityInput->config->subjectConfig->subject->streetAddress = 'architecto';
    $request->certificateAuthorityInput->config->subjectConfig->subjectAltName = new SubjectAltNames();
    $request->certificateAuthorityInput->config->subjectConfig->subjectAltName->customSans = [
        new X509Extension(),
    ];
    $request->certificateAuthorityInput->config->subjectConfig->subjectAltName->dnsNames = [
        'est',
        'mollitia',
        'laborum',
        'dolores',
    ];
    $request->certificateAuthorityInput->config->subjectConfig->subjectAltName->emailAddresses = [
        'corporis',
    ];
    $request->certificateAuthorityInput->config->subjectConfig->subjectAltName->ipAddresses = [
        'nobis',
    ];
    $request->certificateAuthorityInput->config->subjectConfig->subjectAltName->uris = [
        'omnis',
        'nemo',
    ];
    $request->certificateAuthorityInput->config->x509Config = new X509Parameters();
    $request->certificateAuthorityInput->config->x509Config->additionalExtensions = [
        new X509Extension(),
        new X509Extension(),
    ];
    $request->certificateAuthorityInput->config->x509Config->aiaOcspServers = [
        'accusantium',
        'iure',
        'culpa',
    ];
    $request->certificateAuthorityInput->config->x509Config->caOptions = new CaOptions();
    $request->certificateAuthorityInput->config->x509Config->caOptions->isCa = false;
    $request->certificateAuthorityInput->config->x509Config->caOptions->maxIssuerPathLength = 988374;
    $request->certificateAuthorityInput->config->x509Config->keyUsage = new KeyUsage();
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage = new KeyUsageOptions();
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage->certSign = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage->contentCommitment = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage->crlSign = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage->dataEncipherment = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage->decipherOnly = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage->digitalSignature = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage->encipherOnly = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage->keyAgreement = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->baseKeyUsage->keyEncipherment = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->extendedKeyUsage = new ExtendedKeyUsageOptions();
    $request->certificateAuthorityInput->config->x509Config->keyUsage->extendedKeyUsage->clientAuth = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->extendedKeyUsage->codeSigning = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->extendedKeyUsage->emailProtection = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->extendedKeyUsage->ocspSigning = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->extendedKeyUsage->serverAuth = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->extendedKeyUsage->timeStamping = false;
    $request->certificateAuthorityInput->config->x509Config->keyUsage->unknownExtendedKeyUsages = [
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
    ];
    $request->certificateAuthorityInput->config->x509Config->nameConstraints = new NameConstraints();
    $request->certificateAuthorityInput->config->x509Config->nameConstraints->critical = false;
    $request->certificateAuthorityInput->config->x509Config->nameConstraints->excludedDnsNames = [
        'mollitia',
    ];
    $request->certificateAuthorityInput->config->x509Config->nameConstraints->excludedEmailAddresses = [
        'culpa',
    ];
    $request->certificateAuthorityInput->config->x509Config->nameConstraints->excludedIpRanges = [
        'repellat',
    ];
    $request->certificateAuthorityInput->config->x509Config->nameConstraints->excludedUris = [
        'occaecati',
        'numquam',
        'commodi',
    ];
    $request->certificateAuthorityInput->config->x509Config->nameConstraints->permittedDnsNames = [
        'molestiae',
        'velit',
    ];
    $request->certificateAuthorityInput->config->x509Config->nameConstraints->permittedEmailAddresses = [
        'quia',
        'quis',
        'vitae',
    ];
    $request->certificateAuthorityInput->config->x509Config->nameConstraints->permittedIpRanges = [
        'animi',
        'enim',
        'odit',
    ];
    $request->certificateAuthorityInput->config->x509Config->nameConstraints->permittedUris = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->certificateAuthorityInput->config->x509Config->policyIds = [
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
    ];
    $request->certificateAuthorityInput->gcsBucket = 'aut';
    $request->certificateAuthorityInput->keySpec = new KeyVersionSpec();
    $request->certificateAuthorityInput->keySpec->algorithm = KeyVersionSpecAlgorithmEnum::SIGN_HASH_ALGORITHM_UNSPECIFIED;
    $request->certificateAuthorityInput->keySpec->cloudKmsKeyVersion = 'error';
    $request->certificateAuthorityInput->labels = [
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
    ];
    $request->certificateAuthorityInput->lifetime = 'ipsa';
    $request->certificateAuthorityInput->subordinateConfig = new SubordinateConfig();
    $request->certificateAuthorityInput->subordinateConfig->certificateAuthority = 'omnis';
    $request->certificateAuthorityInput->subordinateConfig->pemIssuerChain = new SubordinateConfigChain();
    $request->certificateAuthorityInput->subordinateConfig->pemIssuerChain->pemCertificates = [
        'cum',
        'perferendis',
    ];
    $request->certificateAuthorityInput->type = CertificateAuthorityTypeEnum::TYPE_UNSPECIFIED;
    $request->accessToken = 'reprehenderit';
    $request->alt = AltEnum::JSON;
    $request->callback = 'maiores';
    $request->certificateAuthorityId = 'dicta';
    $request->fields = 'corporis';
    $request->key = 'dolore';
    $request->oauthToken = 'iusto';
    $request->parent = 'dicta';
    $request->prettyPrint = false;
    $request->quotaUser = 'harum';
    $request->requestId = 'enim';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'commodi';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable

Disable a CertificateAuthority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\DisableCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->disableCertificateAuthorityRequest = new DisableCertificateAuthorityRequest();
    $request->disableCertificateAuthorityRequest->ignoreDependentResources = false;
    $request->disableCertificateAuthorityRequest->requestId = 'quae';
    $request->accessToken = 'ipsum';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'molestias';
    $request->fields = 'excepturi';
    $request->key = 'pariatur';
    $request->name = 'Irma Ledner DVM';
    $request->oauthToken = 'sint';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'itaque';
    $request->uploadProtocol = 'incidunt';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisableSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable

Enable a CertificateAuthority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnableCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->enableCertificateAuthorityRequest = new EnableCertificateAuthorityRequest();
    $request->enableCertificateAuthorityRequest->requestId = 'consequatur';
    $request->accessToken = 'est';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'explicabo';
    $request->fields = 'deserunt';
    $request->key = 'distinctio';
    $request->name = 'Francisco Gleason';
    $request->oauthToken = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'quos';
    $request->uploadType = 'perferendis';
    $request->uploadProtocol = 'magni';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnableSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch

Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
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

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch($request, $requestSecurity);

    if ($response->fetchCertificateAuthorityCsrResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList

Lists CertificateAuthorities.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'sint';
    $request->fields = 'officia';
    $request->filter = 'dolor';
    $request->key = 'debitis';
    $request->oauthToken = 'a';
    $request->orderBy = 'dolorum';
    $request->pageSize = 447125;
    $request->pageToken = 'in';
    $request->parent = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'maiores';
    $request->uploadType = 'rerum';
    $request->uploadProtocol = 'dicta';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList($request, $requestSecurity);

    if ($response->listCertificateAuthoritiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete

Undelete a CertificateAuthority that has been deleted.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UndeleteCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->undeleteCertificateAuthorityRequest = new UndeleteCertificateAuthorityRequest();
    $request->undeleteCertificateAuthorityRequest->requestId = 'cumque';
    $request->accessToken = 'facere';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'laborum';
    $request->key = 'accusamus';
    $request->name = 'Toni Haley';
    $request->oauthToken = 'quidem';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'nam';
    $request->uploadProtocol = 'id';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificatesCreate

Create a new Certificate in a given Project, Location from a particular CaPool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateDescription;
use \OpenAPI\OpenAPI\Models\Shared\KeyId;
use \OpenAPI\OpenAPI\Models\Shared\CertificateFingerprint;
use \OpenAPI\OpenAPI\Models\Shared\PublicKey;
use \OpenAPI\OpenAPI\Models\Shared\PublicKeyFormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubjectDescription;
use \OpenAPI\OpenAPI\Models\Shared\Subject;
use \OpenAPI\OpenAPI\Models\Shared\SubjectAltNames;
use \OpenAPI\OpenAPI\Models\Shared\X509Extension;
use \OpenAPI\OpenAPI\Models\Shared\ObjectId;
use \OpenAPI\OpenAPI\Models\Shared\X509Parameters;
use \OpenAPI\OpenAPI\Models\Shared\CaOptions;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedKeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\NameConstraints;
use \OpenAPI\OpenAPI\Models\Shared\CertificateConfig;
use \OpenAPI\OpenAPI\Models\Shared\SubjectConfig;
use \OpenAPI\OpenAPI\Models\Shared\RevocationDetails;
use \OpenAPI\OpenAPI\Models\Shared\RevocationDetailsRevocationStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateSubjectModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->certificateInput = new CertificateInput();
    $request->certificateInput->certificateDescription = new CertificateDescription();
    $request->certificateInput->certificateDescription->aiaIssuingCertificateUrls = [
        'sapiente',
        'amet',
        'deserunt',
    ];
    $request->certificateInput->certificateDescription->authorityKeyId = new KeyId();
    $request->certificateInput->certificateDescription->authorityKeyId->keyId = 'nisi';
    $request->certificateInput->certificateDescription->certFingerprint = new CertificateFingerprint();
    $request->certificateInput->certificateDescription->certFingerprint->sha256Hash = 'vel';
    $request->certificateInput->certificateDescription->crlDistributionPoints = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->certificateInput->certificateDescription->publicKey = new PublicKey();
    $request->certificateInput->certificateDescription->publicKey->format = PublicKeyFormatEnum::KEY_FORMAT_UNSPECIFIED;
    $request->certificateInput->certificateDescription->publicKey->key = 'magnam';
    $request->certificateInput->certificateDescription->subjectDescription = new SubjectDescription();
    $request->certificateInput->certificateDescription->subjectDescription->hexSerialNumber = 'distinctio';
    $request->certificateInput->certificateDescription->subjectDescription->lifetime = 'id';
    $request->certificateInput->certificateDescription->subjectDescription->notAfterTime = 'labore';
    $request->certificateInput->certificateDescription->subjectDescription->notBeforeTime = 'labore';
    $request->certificateInput->certificateDescription->subjectDescription->subject = new Subject();
    $request->certificateInput->certificateDescription->subjectDescription->subject->commonName = 'suscipit';
    $request->certificateInput->certificateDescription->subjectDescription->subject->countryCode = 'MU';
    $request->certificateInput->certificateDescription->subjectDescription->subject->locality = 'nobis';
    $request->certificateInput->certificateDescription->subjectDescription->subject->organization = 'eum';
    $request->certificateInput->certificateDescription->subjectDescription->subject->organizationalUnit = 'vero';
    $request->certificateInput->certificateDescription->subjectDescription->subject->postalCode = '12053';
    $request->certificateInput->certificateDescription->subjectDescription->subject->province = 'provident';
    $request->certificateInput->certificateDescription->subjectDescription->subject->streetAddress = 'quos';
    $request->certificateInput->certificateDescription->subjectDescription->subjectAltName = new SubjectAltNames();
    $request->certificateInput->certificateDescription->subjectDescription->subjectAltName->customSans = [
        new X509Extension(),
        new X509Extension(),
        new X509Extension(),
    ];
    $request->certificateInput->certificateDescription->subjectDescription->subjectAltName->dnsNames = [
        'mollitia',
    ];
    $request->certificateInput->certificateDescription->subjectDescription->subjectAltName->emailAddresses = [
        'mollitia',
        'ad',
        'eum',
        'dolor',
    ];
    $request->certificateInput->certificateDescription->subjectDescription->subjectAltName->ipAddresses = [
        'odit',
        'nemo',
        'quasi',
        'iure',
    ];
    $request->certificateInput->certificateDescription->subjectDescription->subjectAltName->uris = [
        'debitis',
        'eius',
        'maxime',
        'deleniti',
    ];
    $request->certificateInput->certificateDescription->subjectKeyId = new KeyId();
    $request->certificateInput->certificateDescription->subjectKeyId->keyId = 'facilis';
    $request->certificateInput->certificateDescription->x509Description = new X509Parameters();
    $request->certificateInput->certificateDescription->x509Description->additionalExtensions = [
        new X509Extension(),
        new X509Extension(),
    ];
    $request->certificateInput->certificateDescription->x509Description->aiaOcspServers = [
        'architecto',
    ];
    $request->certificateInput->certificateDescription->x509Description->caOptions = new CaOptions();
    $request->certificateInput->certificateDescription->x509Description->caOptions->isCa = false;
    $request->certificateInput->certificateDescription->x509Description->caOptions->maxIssuerPathLength = 919483;
    $request->certificateInput->certificateDescription->x509Description->keyUsage = new KeyUsage();
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage = new KeyUsageOptions();
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage->certSign = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage->contentCommitment = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage->crlSign = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage->dataEncipherment = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage->decipherOnly = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage->digitalSignature = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage->encipherOnly = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage->keyAgreement = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->baseKeyUsage->keyEncipherment = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->extendedKeyUsage = new ExtendedKeyUsageOptions();
    $request->certificateInput->certificateDescription->x509Description->keyUsage->extendedKeyUsage->clientAuth = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->extendedKeyUsage->codeSigning = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->extendedKeyUsage->emailProtection = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->extendedKeyUsage->ocspSigning = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->extendedKeyUsage->serverAuth = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->extendedKeyUsage->timeStamping = false;
    $request->certificateInput->certificateDescription->x509Description->keyUsage->unknownExtendedKeyUsages = [
        new ObjectId(),
        new ObjectId(),
    ];
    $request->certificateInput->certificateDescription->x509Description->nameConstraints = new NameConstraints();
    $request->certificateInput->certificateDescription->x509Description->nameConstraints->critical = false;
    $request->certificateInput->certificateDescription->x509Description->nameConstraints->excludedDnsNames = [
        'nihil',
        'repellat',
        'quibusdam',
    ];
    $request->certificateInput->certificateDescription->x509Description->nameConstraints->excludedEmailAddresses = [
        'saepe',
    ];
    $request->certificateInput->certificateDescription->x509Description->nameConstraints->excludedIpRanges = [
        'accusantium',
        'consequuntur',
        'praesentium',
        'natus',
    ];
    $request->certificateInput->certificateDescription->x509Description->nameConstraints->excludedUris = [
        'sunt',
    ];
    $request->certificateInput->certificateDescription->x509Description->nameConstraints->permittedDnsNames = [
        'illum',
        'pariatur',
        'maxime',
        'ea',
    ];
    $request->certificateInput->certificateDescription->x509Description->nameConstraints->permittedEmailAddresses = [
        'odit',
        'ea',
        'accusantium',
    ];
    $request->certificateInput->certificateDescription->x509Description->nameConstraints->permittedIpRanges = [
        'maiores',
    ];
    $request->certificateInput->certificateDescription->x509Description->nameConstraints->permittedUris = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->certificateInput->certificateDescription->x509Description->policyIds = [
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
    ];
    $request->certificateInput->certificateTemplate = 'eaque';
    $request->certificateInput->config = new CertificateConfig();
    $request->certificateInput->config->publicKey = new PublicKey();
    $request->certificateInput->config->publicKey->format = PublicKeyFormatEnum::PEM;
    $request->certificateInput->config->publicKey->key = 'nemo';
    $request->certificateInput->config->subjectConfig = new SubjectConfig();
    $request->certificateInput->config->subjectConfig->subject = new Subject();
    $request->certificateInput->config->subjectConfig->subject->commonName = 'voluptatibus';
    $request->certificateInput->config->subjectConfig->subject->countryCode = 'AI';
    $request->certificateInput->config->subjectConfig->subject->locality = 'fugiat';
    $request->certificateInput->config->subjectConfig->subject->organization = 'amet';
    $request->certificateInput->config->subjectConfig->subject->organizationalUnit = 'aut';
    $request->certificateInput->config->subjectConfig->subject->postalCode = '39771-3540';
    $request->certificateInput->config->subjectConfig->subject->province = 'quis';
    $request->certificateInput->config->subjectConfig->subject->streetAddress = 'nesciunt';
    $request->certificateInput->config->subjectConfig->subjectAltName = new SubjectAltNames();
    $request->certificateInput->config->subjectConfig->subjectAltName->customSans = [
        new X509Extension(),
    ];
    $request->certificateInput->config->subjectConfig->subjectAltName->dnsNames = [
        'dolores',
    ];
    $request->certificateInput->config->subjectConfig->subjectAltName->emailAddresses = [
        'quam',
        'dolor',
        'vero',
        'nostrum',
    ];
    $request->certificateInput->config->subjectConfig->subjectAltName->ipAddresses = [
        'recusandae',
        'omnis',
        'facilis',
        'perspiciatis',
    ];
    $request->certificateInput->config->subjectConfig->subjectAltName->uris = [
        'porro',
    ];
    $request->certificateInput->config->x509Config = new X509Parameters();
    $request->certificateInput->config->x509Config->additionalExtensions = [
        new X509Extension(),
    ];
    $request->certificateInput->config->x509Config->aiaOcspServers = [
        'error',
        'eaque',
        'occaecati',
    ];
    $request->certificateInput->config->x509Config->caOptions = new CaOptions();
    $request->certificateInput->config->x509Config->caOptions->isCa = false;
    $request->certificateInput->config->x509Config->caOptions->maxIssuerPathLength = 699098;
    $request->certificateInput->config->x509Config->keyUsage = new KeyUsage();
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage = new KeyUsageOptions();
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage->certSign = false;
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage->contentCommitment = false;
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage->crlSign = false;
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage->dataEncipherment = false;
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage->decipherOnly = false;
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage->digitalSignature = false;
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage->encipherOnly = false;
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage->keyAgreement = false;
    $request->certificateInput->config->x509Config->keyUsage->baseKeyUsage->keyEncipherment = false;
    $request->certificateInput->config->x509Config->keyUsage->extendedKeyUsage = new ExtendedKeyUsageOptions();
    $request->certificateInput->config->x509Config->keyUsage->extendedKeyUsage->clientAuth = false;
    $request->certificateInput->config->x509Config->keyUsage->extendedKeyUsage->codeSigning = false;
    $request->certificateInput->config->x509Config->keyUsage->extendedKeyUsage->emailProtection = false;
    $request->certificateInput->config->x509Config->keyUsage->extendedKeyUsage->ocspSigning = false;
    $request->certificateInput->config->x509Config->keyUsage->extendedKeyUsage->serverAuth = false;
    $request->certificateInput->config->x509Config->keyUsage->extendedKeyUsage->timeStamping = false;
    $request->certificateInput->config->x509Config->keyUsage->unknownExtendedKeyUsages = [
        new ObjectId(),
    ];
    $request->certificateInput->config->x509Config->nameConstraints = new NameConstraints();
    $request->certificateInput->config->x509Config->nameConstraints->critical = false;
    $request->certificateInput->config->x509Config->nameConstraints->excludedDnsNames = [
        'earum',
        'modi',
        'iste',
        'dolorum',
    ];
    $request->certificateInput->config->x509Config->nameConstraints->excludedEmailAddresses = [
        'pariatur',
        'provident',
        'nobis',
    ];
    $request->certificateInput->config->x509Config->nameConstraints->excludedIpRanges = [
        'delectus',
        'quaerat',
        'quos',
    ];
    $request->certificateInput->config->x509Config->nameConstraints->excludedUris = [
        'dolorem',
        'dolorem',
    ];
    $request->certificateInput->config->x509Config->nameConstraints->permittedDnsNames = [
        'qui',
    ];
    $request->certificateInput->config->x509Config->nameConstraints->permittedEmailAddresses = [
        'hic',
    ];
    $request->certificateInput->config->x509Config->nameConstraints->permittedIpRanges = [
        'cum',
        'voluptate',
        'dignissimos',
    ];
    $request->certificateInput->config->x509Config->nameConstraints->permittedUris = [
        'amet',
        'dolorum',
        'numquam',
        'veritatis',
    ];
    $request->certificateInput->config->x509Config->policyIds = [
        new ObjectId(),
    ];
    $request->certificateInput->labels = [
        'iure' => 'odio',
    ];
    $request->certificateInput->lifetime = 'quaerat';
    $request->certificateInput->pemCsr = 'accusamus';
    $request->certificateInput->revocationDetails = new RevocationDetails();
    $request->certificateInput->revocationDetails->revocationState = RevocationDetailsRevocationStateEnum::CERTIFICATE_HOLD;
    $request->certificateInput->revocationDetails->revocationTime = 'voluptatibus';
    $request->certificateInput->subjectMode = CertificateSubjectModeEnum::DEFAULT;
    $request->accessToken = 'natus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'atque';
    $request->certificateId = 'sit';
    $request->fields = 'fugiat';
    $request->issuingCertificateAuthorityId = 'ab';
    $request->key = 'soluta';
    $request->oauthToken = 'dolorum';
    $request->parent = 'iusto';
    $request->prettyPrint = false;
    $request->quotaUser = 'voluptate';
    $request->requestId = 'dolorum';
    $request->uploadType = 'deleniti';
    $request->uploadProtocol = 'omnis';
    $request->validateOnly = false;

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificatesCreate($request, $requestSecurity);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificatesList

Lists Certificates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'distinctio';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'ipsum';
    $request->filter = 'voluptate';
    $request->key = 'id';
    $request->oauthToken = 'saepe';
    $request->orderBy = 'eius';
    $request->pageSize = 137220;
    $request->pageToken = 'perferendis';
    $request->parent = 'amet';
    $request->prettyPrint = false;
    $request->quotaUser = 'optio';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'ad';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificatesList($request, $requestSecurity);

    if ($response->listCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCertificatesRevoke

Revoke a Certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RevokeCertificateRequest;
use \OpenAPI\OpenAPI\Models\Shared\RevokeCertificateRequestReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCertificatesRevokeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->revokeCertificateRequest = new RevokeCertificateRequest();
    $request->revokeCertificateRequest->reason = RevokeCertificateRequestReasonEnum::AFFILIATION_CHANGED;
    $request->revokeCertificateRequest->requestId = 'deserunt';
    $request->accessToken = 'provident';
    $request->alt = AltEnum::JSON;
    $request->callback = 'repellendus';
    $request->fields = 'totam';
    $request->key = 'similique';
    $request->name = 'Cristina Hahn';
    $request->oauthToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'officiis';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCertificatesRevokeSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCertificatesRevoke($request, $requestSecurity);

    if ($response->certificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsCreate

Create a CaPool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CaPoolInput;
use \OpenAPI\OpenAPI\Models\Shared\IssuancePolicy;
use \OpenAPI\OpenAPI\Models\Shared\IssuanceModes;
use \OpenAPI\OpenAPI\Models\Shared\AllowedKeyType;
use \OpenAPI\OpenAPI\Models\Shared\EcKeyType;
use \OpenAPI\OpenAPI\Models\Shared\EcKeyTypeSignatureAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\RsaKeyType;
use \OpenAPI\OpenAPI\Models\Shared\X509Parameters;
use \OpenAPI\OpenAPI\Models\Shared\X509Extension;
use \OpenAPI\OpenAPI\Models\Shared\ObjectId;
use \OpenAPI\OpenAPI\Models\Shared\CaOptions;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedKeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\NameConstraints;
use \OpenAPI\OpenAPI\Models\Shared\CertificateIdentityConstraints;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\CertificateExtensionConstraints;
use \OpenAPI\OpenAPI\Models\Shared\CertificateExtensionConstraintsKnownExtensionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\PublishingOptions;
use \OpenAPI\OpenAPI\Models\Shared\CaPoolTierEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->caPoolInput = new CaPoolInput();
    $request->caPoolInput->issuancePolicy = new IssuancePolicy();
    $request->caPoolInput->issuancePolicy->allowedIssuanceModes = new IssuanceModes();
    $request->caPoolInput->issuancePolicy->allowedIssuanceModes->allowConfigBasedIssuance = false;
    $request->caPoolInput->issuancePolicy->allowedIssuanceModes->allowCsrBasedIssuance = false;
    $request->caPoolInput->issuancePolicy->allowedKeyTypes = [
        new AllowedKeyType(),
        new AllowedKeyType(),
    ];
    $request->caPoolInput->issuancePolicy->baselineValues = new X509Parameters();
    $request->caPoolInput->issuancePolicy->baselineValues->additionalExtensions = [
        new X509Extension(),
        new X509Extension(),
        new X509Extension(),
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->aiaOcspServers = [
        'ipsum',
        'quisquam',
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->caOptions = new CaOptions();
    $request->caPoolInput->issuancePolicy->baselineValues->caOptions->isCa = false;
    $request->caPoolInput->issuancePolicy->baselineValues->caOptions->maxIssuerPathLength = 947371;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage = new KeyUsage();
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage = new KeyUsageOptions();
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage->certSign = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage->contentCommitment = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage->crlSign = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage->dataEncipherment = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage->decipherOnly = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage->digitalSignature = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage->encipherOnly = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage->keyAgreement = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->baseKeyUsage->keyEncipherment = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->extendedKeyUsage = new ExtendedKeyUsageOptions();
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->extendedKeyUsage->clientAuth = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->extendedKeyUsage->codeSigning = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->extendedKeyUsage->emailProtection = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->extendedKeyUsage->ocspSigning = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->extendedKeyUsage->serverAuth = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->extendedKeyUsage->timeStamping = false;
    $request->caPoolInput->issuancePolicy->baselineValues->keyUsage->unknownExtendedKeyUsages = [
        new ObjectId(),
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints = new NameConstraints();
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints->critical = false;
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints->excludedDnsNames = [
        'accusamus',
        'numquam',
        'enim',
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints->excludedEmailAddresses = [
        'sapiente',
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints->excludedIpRanges = [
        'nihil',
        'sit',
        'expedita',
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints->excludedUris = [
        'sed',
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints->permittedDnsNames = [
        'libero',
        'voluptas',
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints->permittedEmailAddresses = [
        'quam',
        'ipsum',
        'incidunt',
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints->permittedIpRanges = [
        'cupiditate',
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->nameConstraints->permittedUris = [
        'pariatur',
        'soluta',
        'dicta',
        'laborum',
    ];
    $request->caPoolInput->issuancePolicy->baselineValues->policyIds = [
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
    ];
    $request->caPoolInput->issuancePolicy->identityConstraints = new CertificateIdentityConstraints();
    $request->caPoolInput->issuancePolicy->identityConstraints->allowSubjectAltNamesPassthrough = false;
    $request->caPoolInput->issuancePolicy->identityConstraints->allowSubjectPassthrough = false;
    $request->caPoolInput->issuancePolicy->identityConstraints->celExpression = new Expr();
    $request->caPoolInput->issuancePolicy->identityConstraints->celExpression->description = 'incidunt';
    $request->caPoolInput->issuancePolicy->identityConstraints->celExpression->expression = 'aspernatur';
    $request->caPoolInput->issuancePolicy->identityConstraints->celExpression->location = 'dolores';
    $request->caPoolInput->issuancePolicy->identityConstraints->celExpression->title = 'Miss';
    $request->caPoolInput->issuancePolicy->maximumLifetime = 'facilis';
    $request->caPoolInput->issuancePolicy->passthroughExtensions = new CertificateExtensionConstraints();
    $request->caPoolInput->issuancePolicy->passthroughExtensions->additionalExtensions = [
        new ObjectId(),
        new ObjectId(),
    ];
    $request->caPoolInput->issuancePolicy->passthroughExtensions->knownExtensions = [
        CertificateExtensionConstraintsKnownExtensionsEnum::CA_OPTIONS,
        CertificateExtensionConstraintsKnownExtensionsEnum::AIA_OCSP_SERVERS,
    ];
    $request->caPoolInput->labels = [
        'neque' => 'fugit',
    ];
    $request->caPoolInput->publishingOptions = new PublishingOptions();
    $request->caPoolInput->publishingOptions->publishCaCert = false;
    $request->caPoolInput->publishingOptions->publishCrl = false;
    $request->caPoolInput->tier = CaPoolTierEnum::TIER_UNSPECIFIED;
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->caPoolId = 'ullam';
    $request->callback = 'nam';
    $request->fields = 'hic';
    $request->key = 'voluptatem';
    $request->oauthToken = 'cumque';
    $request->parent = 'soluta';
    $request->prettyPrint = false;
    $request->quotaUser = 'nobis';
    $request->requestId = 'et';
    $request->uploadType = 'saepe';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsFetchCaCerts

FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\FetchCaCertsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsFetchCaCertsRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->fetchCaCertsRequest = new FetchCaCertsRequest();
    $request->fetchCaCertsRequest->requestId = 'nobis';
    $request->accessToken = 'quos';
    $request->alt = AltEnum::PROTO;
    $request->caPool = 'cupiditate';
    $request->callback = 'aperiam';
    $request->fields = 'delectus';
    $request->key = 'dolorem';
    $request->oauthToken = 'dolore';
    $request->prettyPrint = false;
    $request->quotaUser = 'labore';
    $request->uploadType = 'adipisci';
    $request->uploadProtocol = 'dolorum';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsFetchCaCertsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsFetchCaCerts($request, $requestSecurity);

    if ($response->fetchCaCertsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCaPoolsList

Lists CaPools.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCaPoolsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCaPoolsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'quae';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quas';
    $request->fields = 'itaque';
    $request->filter = 'consequatur';
    $request->key = 'est';
    $request->oauthToken = 'repellendus';
    $request->orderBy = 'porro';
    $request->pageSize = 984330;
    $request->pageToken = 'ut';
    $request->parent = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'quae';

    $requestSecurity = new PrivatecaProjectsLocationsCaPoolsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCaPoolsList($request, $requestSecurity);

    if ($response->listCaPoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCertificateTemplatesCreate

Create a new CertificateTemplate in a given Project and Location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateIdentityConstraints;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\CertificateExtensionConstraints;
use \OpenAPI\OpenAPI\Models\Shared\ObjectId;
use \OpenAPI\OpenAPI\Models\Shared\CertificateExtensionConstraintsKnownExtensionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\X509Parameters;
use \OpenAPI\OpenAPI\Models\Shared\X509Extension;
use \OpenAPI\OpenAPI\Models\Shared\CaOptions;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedKeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\NameConstraints;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCertificateTemplatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->certificateTemplateInput = new CertificateTemplateInput();
    $request->certificateTemplateInput->description = 'odio';
    $request->certificateTemplateInput->identityConstraints = new CertificateIdentityConstraints();
    $request->certificateTemplateInput->identityConstraints->allowSubjectAltNamesPassthrough = false;
    $request->certificateTemplateInput->identityConstraints->allowSubjectPassthrough = false;
    $request->certificateTemplateInput->identityConstraints->celExpression = new Expr();
    $request->certificateTemplateInput->identityConstraints->celExpression->description = 'occaecati';
    $request->certificateTemplateInput->identityConstraints->celExpression->expression = 'voluptatibus';
    $request->certificateTemplateInput->identityConstraints->celExpression->location = 'quisquam';
    $request->certificateTemplateInput->identityConstraints->celExpression->title = 'Dr.';
    $request->certificateTemplateInput->labels = [
        'quis' => 'ipsum',
        'delectus' => 'voluptate',
        'consectetur' => 'vero',
    ];
    $request->certificateTemplateInput->passthroughExtensions = new CertificateExtensionConstraints();
    $request->certificateTemplateInput->passthroughExtensions->additionalExtensions = [
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
    ];
    $request->certificateTemplateInput->passthroughExtensions->knownExtensions = [
        CertificateExtensionConstraintsKnownExtensionsEnum::NAME_CONSTRAINTS,
        CertificateExtensionConstraintsKnownExtensionsEnum::AIA_OCSP_SERVERS,
    ];
    $request->certificateTemplateInput->predefinedValues = new X509Parameters();
    $request->certificateTemplateInput->predefinedValues->additionalExtensions = [
        new X509Extension(),
        new X509Extension(),
        new X509Extension(),
        new X509Extension(),
    ];
    $request->certificateTemplateInput->predefinedValues->aiaOcspServers = [
        'similique',
        'facilis',
    ];
    $request->certificateTemplateInput->predefinedValues->caOptions = new CaOptions();
    $request->certificateTemplateInput->predefinedValues->caOptions->isCa = false;
    $request->certificateTemplateInput->predefinedValues->caOptions->maxIssuerPathLength = 874288;
    $request->certificateTemplateInput->predefinedValues->keyUsage = new KeyUsage();
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage = new KeyUsageOptions();
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->certSign = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->contentCommitment = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->crlSign = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->dataEncipherment = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->decipherOnly = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->digitalSignature = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->encipherOnly = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->keyAgreement = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->keyEncipherment = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage = new ExtendedKeyUsageOptions();
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->clientAuth = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->codeSigning = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->emailProtection = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->ocspSigning = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->serverAuth = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->timeStamping = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->unknownExtendedKeyUsages = [
        new ObjectId(),
        new ObjectId(),
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints = new NameConstraints();
    $request->certificateTemplateInput->predefinedValues->nameConstraints->critical = false;
    $request->certificateTemplateInput->predefinedValues->nameConstraints->excludedDnsNames = [
        'quibusdam',
        'illum',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->excludedEmailAddresses = [
        'natus',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->excludedIpRanges = [
        'aut',
        'voluptatibus',
        'exercitationem',
        'nulla',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->excludedUris = [
        'porro',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->permittedDnsNames = [
        'doloribus',
        'iusto',
        'eligendi',
        'ducimus',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->permittedEmailAddresses = [
        'officia',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->permittedIpRanges = [
        'ipsam',
        'ea',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->permittedUris = [
        'vel',
    ];
    $request->certificateTemplateInput->predefinedValues->policyIds = [
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
    ];
    $request->accessToken = 'magnam';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ex';
    $request->certificateTemplateId = 'laudantium';
    $request->fields = 'dicta';
    $request->key = 'dolor';
    $request->oauthToken = 'maiores';
    $request->parent = 'quasi';
    $request->prettyPrint = false;
    $request->quotaUser = 'ex';
    $request->requestId = 'nulla';
    $request->uploadType = 'excepturi';
    $request->uploadProtocol = 'voluptatibus';

    $requestSecurity = new PrivatecaProjectsLocationsCertificateTemplatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCertificateTemplatesCreate($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCertificateTemplatesGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'saepe';
    $request->fields = 'ea';
    $request->key = 'impedit';
    $request->oauthToken = 'corporis';
    $request->optionsRequestedPolicyVersion = 333145;
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquid';
    $request->resource = 'inventore';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'ea';

    $requestSecurity = new PrivatecaProjectsLocationsCertificateTemplatesGetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCertificateTemplatesGetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCertificateTemplatesList

Lists CertificateTemplates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCertificateTemplatesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'consectetur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'aspernatur';
    $request->fields = 'minima';
    $request->filter = 'eaque';
    $request->key = 'a';
    $request->oauthToken = 'libero';
    $request->orderBy = 'aut';
    $request->pageSize = 11427;
    $request->pageToken = 'deleniti';
    $request->parent = 'impedit';
    $request->prettyPrint = false;
    $request->quotaUser = 'aliquam';
    $request->uploadType = 'fugit';
    $request->uploadProtocol = 'accusamus';

    $requestSecurity = new PrivatecaProjectsLocationsCertificateTemplatesListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCertificateTemplatesList($request, $requestSecurity);

    if ($response->listCertificateTemplatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCertificateTemplatesPatch

Update a CertificateTemplate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesPatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateTemplateInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateIdentityConstraints;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\CertificateExtensionConstraints;
use \OpenAPI\OpenAPI\Models\Shared\ObjectId;
use \OpenAPI\OpenAPI\Models\Shared\CertificateExtensionConstraintsKnownExtensionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\X509Parameters;
use \OpenAPI\OpenAPI\Models\Shared\X509Extension;
use \OpenAPI\OpenAPI\Models\Shared\CaOptions;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsage;
use \OpenAPI\OpenAPI\Models\Shared\KeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\ExtendedKeyUsageOptions;
use \OpenAPI\OpenAPI\Models\Shared\NameConstraints;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCertificateTemplatesPatchRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->certificateTemplateInput = new CertificateTemplateInput();
    $request->certificateTemplateInput->description = 'non';
    $request->certificateTemplateInput->identityConstraints = new CertificateIdentityConstraints();
    $request->certificateTemplateInput->identityConstraints->allowSubjectAltNamesPassthrough = false;
    $request->certificateTemplateInput->identityConstraints->allowSubjectPassthrough = false;
    $request->certificateTemplateInput->identityConstraints->celExpression = new Expr();
    $request->certificateTemplateInput->identityConstraints->celExpression->description = 'et';
    $request->certificateTemplateInput->identityConstraints->celExpression->expression = 'dolorum';
    $request->certificateTemplateInput->identityConstraints->celExpression->location = 'laborum';
    $request->certificateTemplateInput->identityConstraints->celExpression->title = 'Dr.';
    $request->certificateTemplateInput->labels = [
        'eum' => 'autem',
    ];
    $request->certificateTemplateInput->passthroughExtensions = new CertificateExtensionConstraints();
    $request->certificateTemplateInput->passthroughExtensions->additionalExtensions = [
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
    ];
    $request->certificateTemplateInput->passthroughExtensions->knownExtensions = [
        CertificateExtensionConstraintsKnownExtensionsEnum::AIA_OCSP_SERVERS,
        CertificateExtensionConstraintsKnownExtensionsEnum::NAME_CONSTRAINTS,
        CertificateExtensionConstraintsKnownExtensionsEnum::EXTENDED_KEY_USAGE,
    ];
    $request->certificateTemplateInput->predefinedValues = new X509Parameters();
    $request->certificateTemplateInput->predefinedValues->additionalExtensions = [
        new X509Extension(),
        new X509Extension(),
        new X509Extension(),
    ];
    $request->certificateTemplateInput->predefinedValues->aiaOcspServers = [
        'tempora',
    ];
    $request->certificateTemplateInput->predefinedValues->caOptions = new CaOptions();
    $request->certificateTemplateInput->predefinedValues->caOptions->isCa = false;
    $request->certificateTemplateInput->predefinedValues->caOptions->maxIssuerPathLength = 256139;
    $request->certificateTemplateInput->predefinedValues->keyUsage = new KeyUsage();
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage = new KeyUsageOptions();
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->certSign = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->contentCommitment = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->crlSign = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->dataEncipherment = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->decipherOnly = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->digitalSignature = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->encipherOnly = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->keyAgreement = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->baseKeyUsage->keyEncipherment = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage = new ExtendedKeyUsageOptions();
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->clientAuth = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->codeSigning = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->emailProtection = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->ocspSigning = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->serverAuth = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->extendedKeyUsage->timeStamping = false;
    $request->certificateTemplateInput->predefinedValues->keyUsage->unknownExtendedKeyUsages = [
        new ObjectId(),
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints = new NameConstraints();
    $request->certificateTemplateInput->predefinedValues->nameConstraints->critical = false;
    $request->certificateTemplateInput->predefinedValues->nameConstraints->excludedDnsNames = [
        'ipsa',
        'molestiae',
        'magnam',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->excludedEmailAddresses = [
        'eius',
        'esse',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->excludedIpRanges = [
        'rem',
        'fuga',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->excludedUris = [
        'quidem',
        'fugiat',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->permittedDnsNames = [
        'eum',
        'suscipit',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->permittedEmailAddresses = [
        'eos',
        'praesentium',
        'quisquam',
        'veritatis',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->permittedIpRanges = [
        'id',
    ];
    $request->certificateTemplateInput->predefinedValues->nameConstraints->permittedUris = [
        'neque',
        'quo',
        'illum',
    ];
    $request->certificateTemplateInput->predefinedValues->policyIds = [
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
        new ObjectId(),
    ];
    $request->accessToken = 'fuga';
    $request->alt = AltEnum::JSON;
    $request->callback = 'eos';
    $request->fields = 'voluptas';
    $request->key = 'ab';
    $request->name = 'William Goodwin';
    $request->oauthToken = 'aspernatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'sequi';
    $request->requestId = 'quo';
    $request->updateMask = 'esse';
    $request->uploadType = 'recusandae';
    $request->uploadProtocol = 'aperiam';

    $requestSecurity = new PrivatecaProjectsLocationsCertificateTemplatesPatchSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCertificateTemplatesPatch($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCertificateTemplatesSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\SetIamPolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\Policy;
use \OpenAPI\OpenAPI\Models\Shared\AuditConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfig;
use \OpenAPI\OpenAPI\Models\Shared\AuditLogConfigLogTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Binding;
use \OpenAPI\OpenAPI\Models\Shared\Expr;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->setIamPolicyRequest = new SetIamPolicyRequest();
    $request->setIamPolicyRequest->policy = new Policy();
    $request->setIamPolicyRequest->policy->auditConfigs = [
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
        new AuditConfig(),
    ];
    $request->setIamPolicyRequest->policy->bindings = [
        new Binding(),
        new Binding(),
    ];
    $request->setIamPolicyRequest->policy->etag = 'inventore';
    $request->setIamPolicyRequest->policy->version = 469498;
    $request->setIamPolicyRequest->updateMask = 'totam';
    $request->accessToken = 'accusamus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'odio';
    $request->fields = 'occaecati';
    $request->key = 'commodi';
    $request->oauthToken = 'sapiente';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolores';
    $request->resource = 'deserunt';
    $request->uploadType = 'molestiae';
    $request->uploadProtocol = 'accusantium';

    $requestSecurity = new PrivatecaProjectsLocationsCertificateTemplatesSetIamPolicySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCertificateTemplatesSetIamPolicy($request, $requestSecurity);

    if ($response->policy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsCertificateTemplatesTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\TestIamPermissionsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->testIamPermissionsRequest = new TestIamPermissionsRequest();
    $request->testIamPermissionsRequest->permissions = [
        'quas',
        'praesentium',
    ];
    $request->accessToken = 'consequuntur';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'fuga';
    $request->key = 'mollitia';
    $request->oauthToken = 'incidunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'atque';
    $request->resource = 'explicabo';
    $request->uploadType = 'minima';
    $request->uploadProtocol = 'nisi';

    $requestSecurity = new PrivatecaProjectsLocationsCertificateTemplatesTestIamPermissionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsCertificateTemplatesTestIamPermissions($request, $requestSecurity);

    if ($response->testIamPermissionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ratione';
    $request->fields = 'explicabo';
    $request->filter = 'saepe';
    $request->key = 'occaecati';
    $request->name = 'Carl Koch';
    $request->oauthToken = 'veritatis';
    $request->pageSize = 458604;
    $request->pageToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'nam';
    $request->uploadType = 'vero';
    $request->uploadProtocol = 'aliquid';

    $requestSecurity = new PrivatecaProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsOperationsCancelRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsOperationsCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsOperationsCancelRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'vel' => 'harum',
        'molestiae' => 'rerum',
        'occaecati' => 'minima',
        'distinctio' => 'eligendi',
    ];
    $request->accessToken = 'sit';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'tempore';
    $request->fields = 'adipisci';
    $request->key = 'cumque';
    $request->name = 'Elizabeth Schinner';
    $request->oauthToken = 'consectetur';
    $request->prettyPrint = false;
    $request->quotaUser = 'esse';
    $request->uploadType = 'blanditiis';
    $request->uploadProtocol = 'provident';

    $requestSecurity = new PrivatecaProjectsLocationsOperationsCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsOperationsCancel($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsOperationsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsOperationsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsOperationsDeleteRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'nulla';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'esse';
    $request->fields = 'quasi';
    $request->ignoreDependentResources = false;
    $request->key = 'a';
    $request->name = 'Kirk Stracke';
    $request->oauthToken = 'eveniet';
    $request->prettyPrint = false;
    $request->quotaUser = 'asperiores';
    $request->requestId = 'facere';
    $request->skipGracePeriod = false;
    $request->uploadType = 'veritatis';
    $request->uploadProtocol = 'consequuntur';

    $requestSecurity = new PrivatecaProjectsLocationsOperationsDeleteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsOperationsDelete($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsOperationsGetRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsOperationsGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsOperationsGetRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'similique';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'aliquid';
    $request->fields = 'tenetur';
    $request->key = 'quae';
    $request->name = 'Chester King';
    $request->oauthToken = 'illum';
    $request->prettyPrint = false;
    $request->quotaUser = 'soluta';
    $request->uploadType = 'accusantium';
    $request->uploadProtocol = 'aliquam';

    $requestSecurity = new PrivatecaProjectsLocationsOperationsGetSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsOperationsGet($request, $requestSecurity);

    if ($response->operation !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## privatecaProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsOperationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\PrivatecaProjectsLocationsOperationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PrivatecaProjectsLocationsOperationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dicta';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'reprehenderit';
    $request->fields = 'ullam';
    $request->filter = 'nisi';
    $request->key = 'aut';
    $request->name = 'Clarence Sporer';
    $request->oauthToken = 'itaque';
    $request->pageSize = 680270;
    $request->pageToken = 'architecto';
    $request->prettyPrint = false;
    $request->quotaUser = 'omnis';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'quasi';

    $requestSecurity = new PrivatecaProjectsLocationsOperationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->privatecaProjectsLocationsOperationsList($request, $requestSecurity);

    if ($response->listOperationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
