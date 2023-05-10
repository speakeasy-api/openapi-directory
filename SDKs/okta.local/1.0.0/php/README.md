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
use \OpenAPI\OpenAPI\Models\Operations\ClearUserSessionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClearUserSessionsRequest();
    $request->requestBody = 'corrupti';
    $request->userId = 'provident';

    $response = $sdk->clearUserSessions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [clearUserSessions](docs/sdk/README.md#clearusersessions) - Clear User Sessions
* [findUser](docs/sdk/README.md#finduser) - Find User
* [getAssignedAppLinks](docs/sdk/README.md#getassignedapplinks) - Get Assigned App Links
* [getCurrentUser](docs/sdk/README.md#getcurrentuser) - Get Current User
* [getGroupsForUser](docs/sdk/README.md#getgroupsforuser) - Get Groups for User
* [getUser](docs/sdk/README.md#getuser) - Get User
* [resetFactors](docs/sdk/README.md#resetfactors) - Reset Factors

### [createUser](docs/createuser/README.md)

* [createUserInGroup](docs/createuser/README.md#createuseringroup) - Create User in Group

### [credentialOperations](docs/credentialoperations/README.md)

* [changePassword](docs/credentialoperations/README.md#changepassword) - Change Password
* [changeRecoveryQuestion](docs/credentialoperations/README.md#changerecoveryquestion) - Change Recovery Question
* [forgotPasswordOneTimeCode](docs/credentialoperations/README.md#forgotpasswordonetimecode) - Forgot Password (One Time Code)
* [setRecoveryCredential](docs/credentialoperations/README.md#setrecoverycredential) - Set Recovery Credential

### [lifecycleOperations](docs/lifecycleoperations/README.md)

* [activateUser](docs/lifecycleoperations/README.md#activateuser) - Activate User
* [deactivateUser](docs/lifecycleoperations/README.md#deactivateuser) - Deactivate User
* [resetPassword](docs/lifecycleoperations/README.md#resetpassword) - Reset Password
* [setTempPassword](docs/lifecycleoperations/README.md#settemppassword) - Set Temp Password
* [suspendUser](docs/lifecycleoperations/README.md#suspenduser) - Suspend User
* [unlockUser](docs/lifecycleoperations/README.md#unlockuser) - Unlock User
* [unsuspendUser](docs/lifecycleoperations/README.md#unsuspenduser) - Unsuspend User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
