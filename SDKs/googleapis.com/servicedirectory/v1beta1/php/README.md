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
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicedirectoryProjectsLocationsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicedirectoryProjectsLocationsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'provident';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'unde';
    $request->filter = 'nulla';
    $request->key = 'corrupti';
    $request->name = 'Ben Mueller';
    $request->oauthToken = 'iure';
    $request->pageSize = 297534;
    $request->pageToken = 'debitis';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new ServicedirectoryProjectsLocationsListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicedirectoryProjectsLocationsList($request, $requestSecurity);

    if ($response->listLocationsResponse !== null) {
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

* [servicedirectoryProjectsLocationsList](docs/projects/README.md#servicedirectoryprojectslocationslist) - Lists information about the supported locations for this service.
* [servicedirectoryProjectsLocationsNamespacesCreate](docs/projects/README.md#servicedirectoryprojectslocationsnamespacescreate) - Creates a namespace, and returns the new namespace.
* [servicedirectoryProjectsLocationsNamespacesList](docs/projects/README.md#servicedirectoryprojectslocationsnamespaceslist) - Lists all namespaces.
* [servicedirectoryProjectsLocationsNamespacesServicesCreate](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicescreate) - Creates a service, and returns the new service.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsCreate](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointscreate) - Creates an endpoint, and returns the new endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsDelete](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointsdelete) - Deletes an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsGet](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointsget) - Gets an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsList](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointslist) - Lists all endpoints.
* [servicedirectoryProjectsLocationsNamespacesServicesEndpointsPatch](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesendpointspatch) - Updates an endpoint.
* [servicedirectoryProjectsLocationsNamespacesServicesList](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesserviceslist) - Lists all services belonging to a namespace.
* [servicedirectoryProjectsLocationsNamespacesServicesResolve](docs/projects/README.md#servicedirectoryprojectslocationsnamespacesservicesresolve) - Returns a service and its associated endpoints. Resolving a service is not considered an active developer method.
* [servicedirectoryProjectsLocationsRegistrationPoliciesGetIamPolicy](docs/projects/README.md#servicedirectoryprojectslocationsregistrationpoliciesgetiampolicy) - Gets the IAM Policy for a resource
* [servicedirectoryProjectsLocationsRegistrationPoliciesSetIamPolicy](docs/projects/README.md#servicedirectoryprojectslocationsregistrationpoliciessetiampolicy) - Sets the IAM Policy for a resource
* [servicedirectoryProjectsLocationsRegistrationPoliciesTestIamPermissions](docs/projects/README.md#servicedirectoryprojectslocationsregistrationpoliciestestiampermissions) - Tests IAM permissions for a resource (namespace, service or service workload only).
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
