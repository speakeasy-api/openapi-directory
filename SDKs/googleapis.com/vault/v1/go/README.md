# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/vault/v1/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Matters.VaultMattersAddPermissions(ctx, operations.VaultMattersAddPermissionsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AddMatterPermissionsRequest: &shared.AddMatterPermissionsRequest{
            CcMe: sdk.Bool(false),
            MatterPermission: &shared.MatterPermission{
                AccountID: sdk.String("provident"),
                Role: shared.MatterPermissionRoleEnumOwner.ToPointer(),
            },
            SendEmails: sdk.Bool(false),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        MatterID: "vel",
        OauthToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        UploadType: sdk.String("suscipit"),
        UploadProtocol: sdk.String("iure"),
    }, operations.VaultMattersAddPermissionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MatterPermission != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Matters](docs/matters/README.md)

* [VaultMattersAddPermissions](docs/matters/README.md#vaultmattersaddpermissions) - Adds an account as a matter collaborator.
* [VaultMattersClose](docs/matters/README.md#vaultmattersclose) - Closes the specified matter. Returns the matter with updated state.
* [VaultMattersCount](docs/matters/README.md#vaultmatterscount) - Counts the accounts processed by the specified query.
* [VaultMattersCreate](docs/matters/README.md#vaultmatterscreate) - Creates a matter with the given name and description. The initial state is open, and the owner is the method caller. Returns the created matter with default view.
* [VaultMattersDelete](docs/matters/README.md#vaultmattersdelete) - Deletes the specified matter. Returns the matter with updated state.
* [VaultMattersExportsCreate](docs/matters/README.md#vaultmattersexportscreate) - Creates an export.
* [VaultMattersExportsDelete](docs/matters/README.md#vaultmattersexportsdelete) - Deletes an export.
* [VaultMattersExportsGet](docs/matters/README.md#vaultmattersexportsget) - Gets an export.
* [VaultMattersExportsList](docs/matters/README.md#vaultmattersexportslist) - Lists details about the exports in the specified matter.
* [VaultMattersGet](docs/matters/README.md#vaultmattersget) - Gets the specified matter.
* [VaultMattersHoldsAccountsCreate](docs/matters/README.md#vaultmattersholdsaccountscreate) - Adds an account to a hold. Accounts can be added only to a hold that does not have an organizational unit set. If you try to add an account to an organizational unit-based hold, an error is returned.
* [VaultMattersHoldsAccountsDelete](docs/matters/README.md#vaultmattersholdsaccountsdelete) - Removes an account from a hold.
* [VaultMattersHoldsAccountsList](docs/matters/README.md#vaultmattersholdsaccountslist) - Lists the accounts covered by a hold. This can list only individually-specified accounts covered by the hold. If the hold covers an organizational unit, use the [Admin SDK](https://developers.google.com/admin-sdk/). to list the members of the organizational unit on hold.
* [VaultMattersHoldsAddHeldAccounts](docs/matters/README.md#vaultmattersholdsaddheldaccounts) - Adds accounts to a hold. Returns a list of accounts that have been successfully added. Accounts can be added only to an existing account-based hold.
* [VaultMattersHoldsCreate](docs/matters/README.md#vaultmattersholdscreate) - Creates a hold in the specified matter.
* [VaultMattersHoldsDelete](docs/matters/README.md#vaultmattersholdsdelete) - Removes the specified hold and releases the accounts or organizational unit covered by the hold. If the data is not preserved by another hold or retention rule, it might be purged.
* [VaultMattersHoldsGet](docs/matters/README.md#vaultmattersholdsget) - Gets the specified hold.
* [VaultMattersHoldsList](docs/matters/README.md#vaultmattersholdslist) - Lists the holds in a matter.
* [VaultMattersHoldsRemoveHeldAccounts](docs/matters/README.md#vaultmattersholdsremoveheldaccounts) - Removes the specified accounts from a hold. Returns a list of statuses in the same order as the request.
* [VaultMattersHoldsUpdate](docs/matters/README.md#vaultmattersholdsupdate) - Updates the scope (organizational unit or accounts) and query parameters of a hold. You cannot add accounts to a hold that covers an organizational unit, nor can you add organizational units to a hold that covers individual accounts. If you try, the unsupported values are ignored.
* [VaultMattersList](docs/matters/README.md#vaultmatterslist) - Lists matters the requestor has access to.
* [VaultMattersRemovePermissions](docs/matters/README.md#vaultmattersremovepermissions) - Removes an account as a matter collaborator.
* [VaultMattersReopen](docs/matters/README.md#vaultmattersreopen) - Reopens the specified matter. Returns the matter with updated state.
* [VaultMattersSavedQueriesCreate](docs/matters/README.md#vaultmatterssavedqueriescreate) - Creates a saved query.
* [VaultMattersSavedQueriesDelete](docs/matters/README.md#vaultmatterssavedqueriesdelete) - Deletes the specified saved query.
* [VaultMattersSavedQueriesGet](docs/matters/README.md#vaultmatterssavedqueriesget) - Retrieves the specified saved query.
* [VaultMattersSavedQueriesList](docs/matters/README.md#vaultmatterssavedquerieslist) - Lists the saved queries in a matter.
* [VaultMattersUndelete](docs/matters/README.md#vaultmattersundelete) - Undeletes the specified matter. Returns the matter with updated state.
* [VaultMattersUpdate](docs/matters/README.md#vaultmattersupdate) - Updates the specified matter. This updates only the name and description of the matter, identified by matter ID. Changes to any other fields are ignored. Returns the default view of the matter.

### [Operations](docs/operations/README.md)

* [VaultOperationsCancel](docs/operations/README.md#vaultoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [VaultOperationsDelete](docs/operations/README.md#vaultoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [VaultOperationsList](docs/operations/README.md#vaultoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
