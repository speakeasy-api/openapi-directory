# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/okta.local/1.0.0/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.ClearUserSessions(ctx, operations.ClearUserSessionsRequest{
        RequestBody: []byte("corrupti"),
        UserID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [ClearUserSessions](docs/sdk/README.md#clearusersessions) - Clear User Sessions
* [FindUser](docs/sdk/README.md#finduser) - Find User
* [GetAssignedAppLinks](docs/sdk/README.md#getassignedapplinks) - Get Assigned App Links
* [GetCurrentUser](docs/sdk/README.md#getcurrentuser) - Get Current User
* [GetGroupsForUser](docs/sdk/README.md#getgroupsforuser) - Get Groups for User
* [GetUser](docs/sdk/README.md#getuser) - Get User
* [ResetFactors](docs/sdk/README.md#resetfactors) - Reset Factors

### [CreateUser](docs/createuser/README.md)

* [CreateUserInGroup](docs/createuser/README.md#createuseringroup) - Create User in Group

### [CredentialOperations](docs/credentialoperations/README.md)

* [ChangePassword](docs/credentialoperations/README.md#changepassword) - Change Password
* [ChangeRecoveryQuestion](docs/credentialoperations/README.md#changerecoveryquestion) - Change Recovery Question
* [ForgotPasswordOneTimeCode](docs/credentialoperations/README.md#forgotpasswordonetimecode) - Forgot Password (One Time Code)
* [SetRecoveryCredential](docs/credentialoperations/README.md#setrecoverycredential) - Set Recovery Credential

### [LifecycleOperations](docs/lifecycleoperations/README.md)

* [ActivateUser](docs/lifecycleoperations/README.md#activateuser) - Activate User
* [DeactivateUser](docs/lifecycleoperations/README.md#deactivateuser) - Deactivate User
* [ResetPassword](docs/lifecycleoperations/README.md#resetpassword) - Reset Password
* [SetTempPassword](docs/lifecycleoperations/README.md#settemppassword) - Set Temp Password
* [SuspendUser](docs/lifecycleoperations/README.md#suspenduser) - Suspend User
* [UnlockUser](docs/lifecycleoperations/README.md#unlockuser) - Unlock User
* [UnsuspendUser](docs/lifecycleoperations/README.md#unsuspenduser) - Unsuspend User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
