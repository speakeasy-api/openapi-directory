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
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GoogleCloudServicebrokerV1beta1Broker;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\ServicebrokerProjectsBrokersCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ServicebrokerProjectsBrokersCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->googleCloudServicebrokerV1beta1Broker = new GoogleCloudServicebrokerV1beta1Broker();
    $request->googleCloudServicebrokerV1beta1Broker->createTime = 'provident';
    $request->googleCloudServicebrokerV1beta1Broker->name = 'Ellis Mitchell';
    $request->googleCloudServicebrokerV1beta1Broker->title = 'Dr.';
    $request->googleCloudServicebrokerV1beta1Broker->url = 'vel';
    $request->accessToken = 'error';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'suscipit';
    $request->fields = 'iure';
    $request->key = 'magnam';
    $request->oauthToken = 'debitis';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'delectus';
    $request->uploadType = 'tempora';
    $request->uploadProtocol = 'suscipit';

    $requestSecurity = new ServicebrokerProjectsBrokersCreateSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->servicebrokerProjectsBrokersCreate($request, $requestSecurity);

    if ($response->body !== null) {
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

* [servicebrokerProjectsBrokersCreate](docs/projects/README.md#servicebrokerprojectsbrokerscreate) - CreateBroker creates a Broker.
* [servicebrokerProjectsBrokersInstancesBindingsList](docs/projects/README.md#servicebrokerprojectsbrokersinstancesbindingslist) - Lists all the bindings in the instance.
* [servicebrokerProjectsBrokersInstancesList](docs/projects/README.md#servicebrokerprojectsbrokersinstanceslist) - Lists all the instances in the brokers
This API is an extension and not part of the OSB spec.
Hence the path is a standard Google API URL.
* [servicebrokerProjectsBrokersList](docs/projects/README.md#servicebrokerprojectsbrokerslist) - ListBrokers lists brokers.
* [servicebrokerProjectsBrokersV2CatalogList](docs/projects/README.md#servicebrokerprojectsbrokersv2cataloglist) - Lists all the Services registered with this broker for consumption for
given service registry broker, which contains an set of services.
Note, that Service producer API is separate from Broker API.
* [servicebrokerProjectsBrokersV2ServiceInstancesCreate](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancescreate) - Provisions a service instance.
If `request.accepts_incomplete` is false and Broker cannot execute request
synchronously HTTP 422 error will be returned along with
FAILED_PRECONDITION status.
If `request.accepts_incomplete` is true and the Broker decides to execute
resource asynchronously then HTTP 202 response code will be returned and a
valid polling operation in the response will be included.
If Broker executes the request synchronously and it succeeds HTTP 201
response will be furnished.
If identical instance exists, then HTTP 200 response will be returned.
If an instance with identical ID but mismatching parameters exists, then
HTTP 409 status code will be returned.
* [servicebrokerProjectsBrokersV2ServiceInstancesPatch](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancespatch) - Updates an existing service instance.
See CreateServiceInstance for possible response codes.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsCreate](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancesservicebindingscreate) - CreateBinding generates a service binding to an existing service instance.
See ProviServiceInstance for async operation details.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsDelete](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsdelete) - Unbinds from a service instance.
For synchronous/asynchronous request details see CreateServiceInstance
method.
If binding does not exist HTTP 410 status will be returned.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGet](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsget) - GetBinding returns the binding information.
* [servicebrokerProjectsBrokersV2ServiceInstancesServiceBindingsGetLastOperation](docs/projects/README.md#servicebrokerprojectsbrokersv2serviceinstancesservicebindingsgetlastoperation) - Returns the state of the last operation for the binding.
Only last (or current) operation can be polled.

### [v1beta1](docs/v1beta1/README.md)

* [servicebrokerGetIamPolicy](docs/v1beta1/README.md#servicebrokergetiampolicy) - Gets the access control policy for a resource.
Returns an empty policy if the resource exists and does not have a policy
set.
* [servicebrokerSetIamPolicy](docs/v1beta1/README.md#servicebrokersetiampolicy) - Sets the access control policy on the specified resource. Replaces any
existing policy.

Can return Public Errors: NOT_FOUND, INVALID_ARGUMENT and PERMISSION_DENIED
* [servicebrokerTestIamPermissions](docs/v1beta1/README.md#servicebrokertestiampermissions) - Returns permissions that a caller has on the specified resource.
If the resource does not exist, this will return an empty set of
permissions, not a NOT_FOUND error.

Note: This operation is designed to be used for building permission-aware
UIs and command-line tools, not for authorization checking. This operation
may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
