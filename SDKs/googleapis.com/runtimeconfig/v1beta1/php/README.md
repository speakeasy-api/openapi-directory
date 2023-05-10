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
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\RuntimeConfig;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\RuntimeconfigProjectsConfigsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RuntimeconfigProjectsConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->runtimeConfig = new RuntimeConfig();
    $request->runtimeConfig->description = 'provident';
    $request->runtimeConfig->name = 'Ellis Mitchell';
    $request->accessToken = 'illum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'error';
    $request->fields = 'deserunt';
    $request->key = 'suscipit';
    $request->oauthToken = 'iure';
    $request->parent = 'magnam';
    $request->prettyPrint = false;
    $request->quotaUser = 'debitis';
    $request->requestId = 'ipsa';
    $request->uploadType = 'delectus';
    $request->uploadProtocol = 'tempora';

    $requestSecurity = new RuntimeconfigProjectsConfigsCreateSecurity();
    $requestSecurity->option1 = new RuntimeconfigProjectsConfigsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->runtimeconfigProjectsConfigsCreate($request, $requestSecurity);

    if ($response->runtimeConfig !== null) {
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

* [runtimeconfigProjectsConfigsCreate](docs/projects/README.md#runtimeconfigprojectsconfigscreate) - Creates a new RuntimeConfig resource. The configuration name must be unique within project.
* [runtimeconfigProjectsConfigsGetIamPolicy](docs/projects/README.md#runtimeconfigprojectsconfigsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [runtimeconfigProjectsConfigsList](docs/projects/README.md#runtimeconfigprojectsconfigslist) - Lists all the RuntimeConfig resources within project.
* [runtimeconfigProjectsConfigsSetIamPolicy](docs/projects/README.md#runtimeconfigprojectsconfigssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [runtimeconfigProjectsConfigsVariablesCreate](docs/projects/README.md#runtimeconfigprojectsconfigsvariablescreate) - Creates a variable within the given configuration. You cannot create a variable with a name that is a prefix of an existing variable name, or a name that has an existing variable name as a prefix. To learn more about creating a variable, read the [Setting and Getting Data](/deployment-manager/runtime-configurator/set-and-get-variables) documentation.
* [runtimeconfigProjectsConfigsVariablesList](docs/projects/README.md#runtimeconfigprojectsconfigsvariableslist) - Lists variables within given a configuration, matching any provided filters. This only lists variable names, not the values, unless `return_values` is true, in which case only variables that user has IAM permission to GetVariable will be returned.
* [runtimeconfigProjectsConfigsVariablesUpdate](docs/projects/README.md#runtimeconfigprojectsconfigsvariablesupdate) - Updates an existing variable with a new value.
* [runtimeconfigProjectsConfigsVariablesWatch](docs/projects/README.md#runtimeconfigprojectsconfigsvariableswatch) - Watches a specific variable and waits for a change in the variable's value. When there is a change, this method returns the new value or times out. If a variable is deleted while being watched, the `variableState` state is set to `DELETED` and the method returns the last known variable `value`. If you set the deadline for watching to a larger value than internal timeout (60 seconds), the current variable value is returned and the `variableState` will be `VARIABLE_STATE_UNSPECIFIED`. To learn more about creating a watcher, read the [Watching a Variable for Changes](/deployment-manager/runtime-configurator/watching-a-variable) documentation.
* [runtimeconfigProjectsConfigsWaitersCreate](docs/projects/README.md#runtimeconfigprojectsconfigswaiterscreate) - Creates a Waiter resource. This operation returns a long-running Operation resource which can be polled for completion. However, a waiter with the given name will exist (and can be retrieved) prior to the operation completing. If the operation fails, the failed Waiter resource will still exist and must be deleted prior to subsequent creation attempts.
* [runtimeconfigProjectsConfigsWaitersDelete](docs/projects/README.md#runtimeconfigprojectsconfigswaitersdelete) - Deletes the waiter with the specified name.
* [runtimeconfigProjectsConfigsWaitersGet](docs/projects/README.md#runtimeconfigprojectsconfigswaitersget) - Gets information about a single waiter.
* [runtimeconfigProjectsConfigsWaitersList](docs/projects/README.md#runtimeconfigprojectsconfigswaiterslist) - List waiters within the given configuration.
* [runtimeconfigProjectsConfigsWaitersTestIamPermissions](docs/projects/README.md#runtimeconfigprojectsconfigswaiterstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
