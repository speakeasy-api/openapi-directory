# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->activateCertificateAuthorityRequest->pemCaCertificate = 'provident';
    $request->activateCertificateAuthorityRequest->requestId = 'distinctio';
    $request->activateCertificateAuthorityRequest->subordinateConfig = new SubordinateConfig();
    $request->activateCertificateAuthorityRequest->subordinateConfig->certificateAuthority = 'quibusdam';
    $request->activateCertificateAuthorityRequest->subordinateConfig->pemIssuerChain = new SubordinateConfigChain();
    $request->activateCertificateAuthorityRequest->subordinateConfig->pemIssuerChain->pemCertificates = [
        'nulla',
        'corrupti',
        'illum',
    ];
    $request->accessToken = 'vel';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'deserunt';
    $request->fields = 'suscipit';
    $request->key = 'iure';
    $request->name = 'Raquel Bednar';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'minus';
    $request->uploadProtocol = 'placeat';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesActivate](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesactivate) - Activate a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. After the parent Certificate Authority signs a certificate signing request from FetchCertificateAuthorityCsr, this method can complete the activation process.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCertificateRevocationListsList](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiescertificaterevocationlistslist) - Lists CertificateRevocationLists.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesCreate](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiescreate) - Create a new CertificateAuthority in a given Project and Location.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesDisable](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesdisable) - Disable a CertificateAuthority.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesEnable](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesenable) - Enable a CertificateAuthority.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesFetch](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesfetch) - Fetch a certificate signing request (CSR) from a CertificateAuthority that is in state AWAITING_USER_ACTIVATION and is of type SUBORDINATE. The CSR must then be signed by the desired parent Certificate Authority, which could be another CertificateAuthority resource, or could be an on-prem certificate authority. See also ActivateCertificateAuthority.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesList](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritieslist) - Lists CertificateAuthorities.
* [privatecaProjectsLocationsCaPoolsCertificateAuthoritiesUndelete](docs/projects/README.md#privatecaprojectslocationscapoolscertificateauthoritiesundelete) - Undelete a CertificateAuthority that has been deleted.
* [privatecaProjectsLocationsCaPoolsCertificatesCreate](docs/projects/README.md#privatecaprojectslocationscapoolscertificatescreate) - Create a new Certificate in a given Project, Location from a particular CaPool.
* [privatecaProjectsLocationsCaPoolsCertificatesList](docs/projects/README.md#privatecaprojectslocationscapoolscertificateslist) - Lists Certificates.
* [privatecaProjectsLocationsCaPoolsCertificatesRevoke](docs/projects/README.md#privatecaprojectslocationscapoolscertificatesrevoke) - Revoke a Certificate.
* [privatecaProjectsLocationsCaPoolsCreate](docs/projects/README.md#privatecaprojectslocationscapoolscreate) - Create a CaPool.
* [privatecaProjectsLocationsCaPoolsFetchCaCerts](docs/projects/README.md#privatecaprojectslocationscapoolsfetchcacerts) - FetchCaCerts returns the current trust anchor for the CaPool. This will include CA certificate chains for all ACTIVE CertificateAuthority resources in the CaPool.
* [privatecaProjectsLocationsCaPoolsList](docs/projects/README.md#privatecaprojectslocationscapoolslist) - Lists CaPools.
* [privatecaProjectsLocationsCertificateTemplatesCreate](docs/projects/README.md#privatecaprojectslocationscertificatetemplatescreate) - Create a new CertificateTemplate in a given Project and Location.
* [privatecaProjectsLocationsCertificateTemplatesGetIamPolicy](docs/projects/README.md#privatecaprojectslocationscertificatetemplatesgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [privatecaProjectsLocationsCertificateTemplatesList](docs/projects/README.md#privatecaprojectslocationscertificatetemplateslist) - Lists CertificateTemplates.
* [privatecaProjectsLocationsCertificateTemplatesPatch](docs/projects/README.md#privatecaprojectslocationscertificatetemplatespatch) - Update a CertificateTemplate.
* [privatecaProjectsLocationsCertificateTemplatesSetIamPolicy](docs/projects/README.md#privatecaprojectslocationscertificatetemplatessetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [privatecaProjectsLocationsCertificateTemplatesTestIamPermissions](docs/projects/README.md#privatecaprojectslocationscertificatetemplatestestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* [privatecaProjectsLocationsList](docs/projects/README.md#privatecaprojectslocationslist) - Lists information about the supported locations for this service.
* [privatecaProjectsLocationsOperationsCancel](docs/projects/README.md#privatecaprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [privatecaProjectsLocationsOperationsDelete](docs/projects/README.md#privatecaprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [privatecaProjectsLocationsOperationsGet](docs/projects/README.md#privatecaprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [privatecaProjectsLocationsOperationsList](docs/projects/README.md#privatecaprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
