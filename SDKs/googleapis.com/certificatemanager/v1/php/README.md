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
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CertificateIssuanceConfigInput;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityConfig;
use \OpenAPI\OpenAPI\Models\Shared\CertificateAuthorityServiceConfig;
use \OpenAPI\OpenAPI\Models\Shared\CertificateIssuanceConfigKeyAlgorithmEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->certificateIssuanceConfigInput = new CertificateIssuanceConfigInput();
    $request->certificateIssuanceConfigInput->certificateAuthorityConfig = new CertificateAuthorityConfig();
    $request->certificateIssuanceConfigInput->certificateAuthorityConfig->certificateAuthorityServiceConfig = new CertificateAuthorityServiceConfig();
    $request->certificateIssuanceConfigInput->certificateAuthorityConfig->certificateAuthorityServiceConfig->caPool = 'provident';
    $request->certificateIssuanceConfigInput->description = 'distinctio';
    $request->certificateIssuanceConfigInput->keyAlgorithm = CertificateIssuanceConfigKeyAlgorithmEnum::ECDSA_P256;
    $request->certificateIssuanceConfigInput->labels = [
        'nulla' => 'corrupti',
        'illum' => 'vel',
        'error' => 'deserunt',
    ];
    $request->certificateIssuanceConfigInput->lifetime = 'suscipit';
    $request->certificateIssuanceConfigInput->name = 'Dr. Valerie Toy';
    $request->certificateIssuanceConfigInput->rotationWindowPercentage = 383441;
    $request->accessToken = 'molestiae';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'placeat';
    $request->certificateIssuanceConfigId = 'voluptatum';
    $request->fields = 'iusto';
    $request->key = 'excepturi';
    $request->oauthToken = 'nisi';
    $request->parent = 'recusandae';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'ab';
    $request->uploadProtocol = 'quis';

    $requestSecurity = new CertificatemanagerProjectsLocationsCertificateIssuanceConfigsCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate($request, $requestSecurity);

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

* [certificatemanagerProjectsLocationsCertificateIssuanceConfigsCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificateissuanceconfigscreate) - Creates a new CertificateIssuanceConfig in a given project and location.
* [certificatemanagerProjectsLocationsCertificateIssuanceConfigsList](docs/projects/README.md#certificatemanagerprojectslocationscertificateissuanceconfigslist) - Lists CertificateIssuanceConfigs in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapscertificatemapentriescreate) - Creates a new CertificateMapEntry in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCertificateMapEntriesList](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapscertificatemapentrieslist) - Lists CertificateMapEntries in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapscreate) - Creates a new CertificateMap in a given project and location.
* [certificatemanagerProjectsLocationsCertificateMapsList](docs/projects/README.md#certificatemanagerprojectslocationscertificatemapslist) - Lists CertificateMaps in a given project and location.
* [certificatemanagerProjectsLocationsCertificatesCreate](docs/projects/README.md#certificatemanagerprojectslocationscertificatescreate) - Creates a new Certificate in a given project and location.
* [certificatemanagerProjectsLocationsCertificatesList](docs/projects/README.md#certificatemanagerprojectslocationscertificateslist) - Lists Certificates in a given project and location.
* [certificatemanagerProjectsLocationsDnsAuthorizationsCreate](docs/projects/README.md#certificatemanagerprojectslocationsdnsauthorizationscreate) - Creates a new DnsAuthorization in a given project and location.
* [certificatemanagerProjectsLocationsDnsAuthorizationsList](docs/projects/README.md#certificatemanagerprojectslocationsdnsauthorizationslist) - Lists DnsAuthorizations in a given project and location.
* [certificatemanagerProjectsLocationsList](docs/projects/README.md#certificatemanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [certificatemanagerProjectsLocationsOperationsCancel](docs/projects/README.md#certificatemanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [certificatemanagerProjectsLocationsOperationsList](docs/projects/README.md#certificatemanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [certificatemanagerProjectsLocationsTrustConfigsCreate](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigscreate) - Creates a new TrustConfig in a given project and location.
* [certificatemanagerProjectsLocationsTrustConfigsDelete](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigsdelete) - Deletes a single TrustConfig.
* [certificatemanagerProjectsLocationsTrustConfigsGet](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigsget) - Gets details of a single TrustConfig.
* [certificatemanagerProjectsLocationsTrustConfigsList](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigslist) - Lists TrustConfigs in a given project and location.
* [certificatemanagerProjectsLocationsTrustConfigsPatch](docs/projects/README.md#certificatemanagerprojectslocationstrustconfigspatch) - Updates a TrustConfig.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
