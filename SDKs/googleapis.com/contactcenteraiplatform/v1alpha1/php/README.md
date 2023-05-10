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
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContactCenterInput;
use \OpenAPI\OpenAPI\Models\Shared\AdminUser;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfig;
use \OpenAPI\OpenAPI\Models\Shared\InstanceConfigInstanceSizeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SAMLParams;
use \OpenAPI\OpenAPI\Models\Shared\URIs;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ContactcenteraiplatformProjectsLocationsContactCentersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->contactCenterInput = new ContactCenterInput();
    $request->contactCenterInput->adminUser = new AdminUser();
    $request->contactCenterInput->adminUser->familyName = 'provident';
    $request->contactCenterInput->adminUser->givenName = 'distinctio';
    $request->contactCenterInput->ccaipManagedUsers = false;
    $request->contactCenterInput->customerDomainPrefix = 'quibusdam';
    $request->contactCenterInput->displayName = 'unde';
    $request->contactCenterInput->instanceConfig = new InstanceConfig();
    $request->contactCenterInput->instanceConfig->instanceSize = InstanceConfigInstanceSizeEnum::STANDARD3_XLARGE;
    $request->contactCenterInput->labels = [
        'illum' => 'vel',
        'error' => 'deserunt',
        'suscipit' => 'iure',
    ];
    $request->contactCenterInput->name = 'Raquel Bednar';
    $request->contactCenterInput->samlParams = new SAMLParams();
    $request->contactCenterInput->samlParams->certificate = 'suscipit';
    $request->contactCenterInput->samlParams->entityId = 'molestiae';
    $request->contactCenterInput->samlParams->ssoUri = 'minus';
    $request->contactCenterInput->samlParams->userEmail = 'placeat';
    $request->contactCenterInput->uris = new URIs();
    $request->contactCenterInput->uris->chatBotUri = 'voluptatum';
    $request->contactCenterInput->uris->mediaUri = 'iusto';
    $request->contactCenterInput->uris->rootUri = 'excepturi';
    $request->contactCenterInput->uris->virtualAgentStreamingServiceUri = 'nisi';
    $request->contactCenterInput->userEmail = 'recusandae';
    $request->accessToken = 'temporibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'quis';
    $request->contactCenterId = 'veritatis';
    $request->fields = 'deserunt';
    $request->key = 'perferendis';
    $request->oauthToken = 'ipsam';
    $request->parent = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'sapiente';
    $request->requestId = 'quo';
    $request->uploadType = 'odit';
    $request->uploadProtocol = 'at';

    $requestSecurity = new ContactcenteraiplatformProjectsLocationsContactCentersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->contactcenteraiplatformProjectsLocationsContactCentersCreate($request, $requestSecurity);

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

* [contactcenteraiplatformProjectsLocationsContactCentersCreate](docs/projects/README.md#contactcenteraiplatformprojectslocationscontactcenterscreate) - Creates a new ContactCenter in a given project and location.
* [contactcenteraiplatformProjectsLocationsContactCentersList](docs/projects/README.md#contactcenteraiplatformprojectslocationscontactcenterslist) - Lists ContactCenters in a given project and location.
* [contactcenteraiplatformProjectsLocationsContactCentersPatch](docs/projects/README.md#contactcenteraiplatformprojectslocationscontactcenterspatch) - Updates the parameters of a single ContactCenter.
* [contactcenteraiplatformProjectsLocationsList](docs/projects/README.md#contactcenteraiplatformprojectslocationslist) - Lists information about the supported locations for this service.
* [contactcenteraiplatformProjectsLocationsOperationsCancel](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [contactcenteraiplatformProjectsLocationsOperationsDelete](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [contactcenteraiplatformProjectsLocationsOperationsGet](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [contactcenteraiplatformProjectsLocationsOperationsList](docs/projects/README.md#contactcenteraiplatformprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [contactcenteraiplatformProjectsLocationsQueryContactCenterQuota](docs/projects/README.md#contactcenteraiplatformprojectslocationsquerycontactcenterquota) - Queries the contact center quota, an aggregation over all the projects, that belongs to the billing account, which the input project belongs to.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
