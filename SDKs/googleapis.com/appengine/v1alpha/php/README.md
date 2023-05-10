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
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AuthorizedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\CertificateRawData;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificate;
use \OpenAPI\OpenAPI\Models\Shared\ManagedCertificateStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\AppengineAppsAuthorizedCertificatesCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppengineAppsAuthorizedCertificatesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->authorizedCertificate = new AuthorizedCertificate();
    $request->authorizedCertificate->certificateRawData = new CertificateRawData();
    $request->authorizedCertificate->certificateRawData->privateKey = 'provident';
    $request->authorizedCertificate->certificateRawData->publicCertificate = 'distinctio';
    $request->authorizedCertificate->displayName = 'quibusdam';
    $request->authorizedCertificate->domainMappingsCount = 602763;
    $request->authorizedCertificate->domainNames = [
        'corrupti',
        'illum',
        'vel',
        'error',
    ];
    $request->authorizedCertificate->expireTime = 'deserunt';
    $request->authorizedCertificate->id = '674e0f46-7cc8-4796-ad15-1a05dfc2ddf7';
    $request->authorizedCertificate->managedCertificate = new ManagedCertificate();
    $request->authorizedCertificate->managedCertificate->lastRenewalTime = 'quod';
    $request->authorizedCertificate->managedCertificate->status = ManagedCertificateStatusEnum::FAILED_RETRYING_CAA_FORBIDDEN;
    $request->authorizedCertificate->name = 'Deanna Sauer MD';
    $request->authorizedCertificate->visibleDomainMappings = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->accessToken = 'hic';
    $request->alt = AltEnum::PROTO;
    $request->appsId = 'totam';
    $request->callback = 'beatae';
    $request->fields = 'commodi';
    $request->key = 'molestiae';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

    $requestSecurity = new AppengineAppsAuthorizedCertificatesCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->apps->appengineAppsAuthorizedCertificatesCreate($request, $requestSecurity);

    if ($response->authorizedCertificate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [apps](docs/apps/README.md)

* [appengineAppsAuthorizedCertificatesCreate](docs/apps/README.md#appengineappsauthorizedcertificatescreate) - Uploads the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesDelete](docs/apps/README.md#appengineappsauthorizedcertificatesdelete) - Deletes the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesGet](docs/apps/README.md#appengineappsauthorizedcertificatesget) - Gets the specified SSL certificate.
* [appengineAppsAuthorizedCertificatesList](docs/apps/README.md#appengineappsauthorizedcertificateslist) - Lists all SSL certificates the user is authorized to administer.
* [appengineAppsAuthorizedCertificatesPatch](docs/apps/README.md#appengineappsauthorizedcertificatespatch) - Updates the specified SSL certificate. To renew a certificate and maintain its existing domain mappings, update certificate_data with a new certificate. The new certificate must be applicable to the same domains as the original certificate. The certificate display_name may also be updated.
* [appengineAppsAuthorizedDomainsList](docs/apps/README.md#appengineappsauthorizeddomainslist) - Lists all domains the user is authorized to administer.
* [appengineAppsDomainMappingsCreate](docs/apps/README.md#appengineappsdomainmappingscreate) - Maps a domain to an application. A user must be authorized to administer a domain in order to map it to an application. For a list of available authorized domains, see AuthorizedDomains.ListAuthorizedDomains.
* [appengineAppsDomainMappingsDelete](docs/apps/README.md#appengineappsdomainmappingsdelete) - Deletes the specified domain mapping. A user must be authorized to administer the associated domain in order to delete a DomainMapping resource.
* [appengineAppsDomainMappingsGet](docs/apps/README.md#appengineappsdomainmappingsget) - Gets the specified domain mapping.
* [appengineAppsDomainMappingsList](docs/apps/README.md#appengineappsdomainmappingslist) - Lists the domain mappings on an application.
* [appengineAppsDomainMappingsPatch](docs/apps/README.md#appengineappsdomainmappingspatch) - Updates the specified domain mapping. To map an SSL certificate to a domain mapping, update certificate_id to point to an AuthorizedCertificate resource. A user must be authorized to administer the associated domain in order to update a DomainMapping resource.
* [appengineAppsLocationsGet](docs/apps/README.md#appengineappslocationsget) - Gets information about a location.
* [appengineAppsLocationsList](docs/apps/README.md#appengineappslocationslist) - Lists information about the supported locations for this service.
* [appengineAppsOperationsGet](docs/apps/README.md#appengineappsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineAppsOperationsList](docs/apps/README.md#appengineappsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.

### [projects](docs/projects/README.md)

* [appengineProjectsLocationsGet](docs/projects/README.md#appengineprojectslocationsget) - Gets information about a location.
* [appengineProjectsLocationsList](docs/projects/README.md#appengineprojectslocationslist) - Lists information about the supported locations for this service.
* [appengineProjectsLocationsOperationsGet](docs/projects/README.md#appengineprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [appengineProjectsLocationsOperationsList](docs/projects/README.md#appengineprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
