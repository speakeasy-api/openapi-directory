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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ClearUserSessionsRequest{
        RequestBody: []byte("corrupti"),
        UserID: "provident",
    }

    ctx := context.Background()
    res, err := s.ClearUserSessions(ctx, req)
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

### SDK SDK

* `ClearUserSessions` - Clear User Sessions
* `FindUser` - Find User
* `GetAssignedAppLinks` - Get Assigned App Links
* `GetCurrentUser` - Get Current User
* `GetGroupsForUser` - Get Groups for User
* `GetUser` - Get User
* `ResetFactors` - Reset Factors

### CreateUser

* `CreateUserInGroup` - Create User in Group

### CredentialOperations

* `ChangePassword` - Change Password
* `ChangeRecoveryQuestion` - Change Recovery Question
* `ForgotPasswordOneTimeCode` - Forgot Password (One Time Code)
* `SetRecoveryCredential` - Set Recovery Credential

### LifecycleOperations

* `ActivateUser` - Activate User
* `DeactivateUser` - Deactivate User
* `ResetPassword` - Reset Password
* `SetTempPassword` - Set Temp Password
* `SuspendUser` - Suspend User
* `UnlockUser` - Unlock User
* `UnsuspendUser` - Unsuspend User
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
