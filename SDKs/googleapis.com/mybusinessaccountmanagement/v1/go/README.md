# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/googleapis.com/mybusinessaccountmanagement/v1/go
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
    res, err := s.Accounts.MybusinessaccountmanagementAccountsCreate(ctx, operations.MybusinessaccountmanagementAccountsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountInput: &shared.AccountInput{
            AccountName: sdk.String("provident"),
            Name: sdk.String("Ellis Mitchell"),
            OrganizationInfo: &shared.OrganizationInfoInput{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "vel",
                        "error",
                        "deserunt",
                        "suscipit",
                    },
                    AdministrativeArea: sdk.String("iure"),
                    LanguageCode: sdk.String("magnam"),
                    Locality: sdk.String("debitis"),
                    Organization: sdk.String("ipsa"),
                    PostalCode: sdk.String("23478-5453"),
                    Recipients: []string{
                        "temporibus",
                        "ab",
                        "quis",
                        "veritatis",
                    },
                    RegionCode: sdk.String("deserunt"),
                    Revision: sdk.Int(20218),
                    SortingCode: sdk.String("ipsam"),
                    Sublocality: sdk.String("repellendus"),
                },
            },
            PrimaryOwner: sdk.String("sapiente"),
            Type: shared.AccountTypeEnumUserGroup.ToPointer(),
        },
        AccessToken: sdk.String("odit"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("at"),
        Fields: sdk.String("maiores"),
        Key: sdk.String("molestiae"),
        OauthToken: sdk.String("quod"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("esse"),
        UploadProtocol: sdk.String("totam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Accounts](docs/accounts/README.md)

* [MybusinessaccountmanagementAccountsCreate](docs/accounts/README.md#mybusinessaccountmanagementaccountscreate) - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
* [MybusinessaccountmanagementAccountsGet](docs/accounts/README.md#mybusinessaccountmanagementaccountsget) - Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
* [MybusinessaccountmanagementAccountsInvitationsAccept](docs/accounts/README.md#mybusinessaccountmanagementaccountsinvitationsaccept) - Accepts the specified invitation.
* [MybusinessaccountmanagementAccountsInvitationsDecline](docs/accounts/README.md#mybusinessaccountmanagementaccountsinvitationsdecline) - Declines the specified invitation.
* [MybusinessaccountmanagementAccountsInvitationsList](docs/accounts/README.md#mybusinessaccountmanagementaccountsinvitationslist) - Lists pending invitations for the specified account.
* [MybusinessaccountmanagementAccountsList](docs/accounts/README.md#mybusinessaccountmanagementaccountslist) - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

### [Locations](docs/locations/README.md)

* [MybusinessaccountmanagementLocationsAdminsCreate](docs/locations/README.md#mybusinessaccountmanagementlocationsadminscreate) - Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.
* [MybusinessaccountmanagementLocationsAdminsDelete](docs/locations/README.md#mybusinessaccountmanagementlocationsadminsdelete) - Removes the specified admin as a manager of the specified location.
* [MybusinessaccountmanagementLocationsAdminsList](docs/locations/README.md#mybusinessaccountmanagementlocationsadminslist) - Lists all of the admins for the specified location.
* [MybusinessaccountmanagementLocationsAdminsPatch](docs/locations/README.md#mybusinessaccountmanagementlocationsadminspatch) - Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.
* [MybusinessaccountmanagementLocationsTransfer](docs/locations/README.md#mybusinessaccountmanagementlocationstransfer) - Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
