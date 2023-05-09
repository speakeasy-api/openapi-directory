# Accounts

### Available Operations

* [MybusinessaccountmanagementAccountsCreate](#mybusinessaccountmanagementaccountscreate) - Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.
* [MybusinessaccountmanagementAccountsGet](#mybusinessaccountmanagementaccountsget) - Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.
* [MybusinessaccountmanagementAccountsInvitationsAccept](#mybusinessaccountmanagementaccountsinvitationsaccept) - Accepts the specified invitation.
* [MybusinessaccountmanagementAccountsInvitationsDecline](#mybusinessaccountmanagementaccountsinvitationsdecline) - Declines the specified invitation.
* [MybusinessaccountmanagementAccountsInvitationsList](#mybusinessaccountmanagementaccountsinvitationslist) - Lists pending invitations for the specified account.
* [MybusinessaccountmanagementAccountsList](#mybusinessaccountmanagementaccountslist) - Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

## MybusinessaccountmanagementAccountsCreate

Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.

### Example Usage

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
            AccountName: sdk.String("dolorum"),
            Name: sdk.String("Antoinette Nikolaus"),
            OrganizationInfo: &shared.OrganizationInfoInput{
                Address: &shared.PostalAddress{
                    AddressLines: []string{
                        "hic",
                        "optio",
                        "totam",
                    },
                    AdministrativeArea: sdk.String("beatae"),
                    LanguageCode: sdk.String("commodi"),
                    Locality: sdk.String("molestiae"),
                    Organization: sdk.String("modi"),
                    PostalCode: sdk.String("77425"),
                    Recipients: []string{
                        "perferendis",
                    },
                    RegionCode: sdk.String("ad"),
                    Revision: sdk.Int(617636),
                    SortingCode: sdk.String("sed"),
                    Sublocality: sdk.String("iste"),
                },
            },
            PrimaryOwner: sdk.String("dolor"),
            Type: shared.AccountTypeEnumUserGroup.ToPointer(),
        },
        AccessToken: sdk.String("laboriosam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("saepe"),
        Fields: sdk.String("fuga"),
        Key: sdk.String("in"),
        OauthToken: sdk.String("corporis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iste"),
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## MybusinessaccountmanagementAccountsGet

Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.

### Example Usage

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
    res, err := s.Accounts.MybusinessaccountmanagementAccountsGet(ctx, operations.MybusinessaccountmanagementAccountsGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("architecto"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("reiciendis"),
        Fields: sdk.String("est"),
        Key: sdk.String("mollitia"),
        Name: "Ernest Ebert",
        OauthToken: sdk.String("nobis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("enim"),
        UploadType: sdk.String("omnis"),
        UploadProtocol: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Account != nil {
        // handle response
    }
}
```

## MybusinessaccountmanagementAccountsInvitationsAccept

Accepts the specified invitation.

### Example Usage

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
    res, err := s.Accounts.MybusinessaccountmanagementAccountsInvitationsAccept(ctx, operations.MybusinessaccountmanagementAccountsInvitationsAcceptRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "accusantium": "iure",
            "culpa": "doloribus",
            "sapiente": "architecto",
        },
        AccessToken: sdk.String("mollitia"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("culpa"),
        Fields: sdk.String("consequuntur"),
        Key: sdk.String("repellat"),
        Name: "Tracy Fritsch",
        OauthToken: sdk.String("molestiae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("velit"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessaccountmanagementAccountsInvitationsDecline

Declines the specified invitation.

### Example Usage

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
    res, err := s.Accounts.MybusinessaccountmanagementAccountsInvitationsDecline(ctx, operations.MybusinessaccountmanagementAccountsInvitationsDeclineRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        RequestBody: map[string]interface{}{
            "laborum": "animi",
        },
        AccessToken: sdk.String("enim"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("quo"),
        Fields: sdk.String("sequi"),
        Key: sdk.String("tenetur"),
        Name: "Mr. Alberta Schuster",
        OauthToken: sdk.String("temporibus"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("laborum"),
        UploadType: sdk.String("quasi"),
        UploadProtocol: sdk.String("reiciendis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Empty != nil {
        // handle response
    }
}
```

## MybusinessaccountmanagementAccountsInvitationsList

Lists pending invitations for the specified account.

### Example Usage

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
    res, err := s.Accounts.MybusinessaccountmanagementAccountsInvitationsList(ctx, operations.MybusinessaccountmanagementAccountsInvitationsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("vero"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("praesentium"),
        Fields: sdk.String("voluptatibus"),
        Filter: sdk.String("ipsa"),
        Key: sdk.String("omnis"),
        OauthToken: sdk.String("voluptate"),
        Parent: "cum",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("perferendis"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("reprehenderit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListInvitationsResponse != nil {
        // handle response
    }
}
```

## MybusinessaccountmanagementAccountsList

Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.

### Example Usage

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
    res, err := s.Accounts.MybusinessaccountmanagementAccountsList(ctx, operations.MybusinessaccountmanagementAccountsListRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("maiores"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("corporis"),
        Fields: sdk.String("dolore"),
        Filter: sdk.String("iusto"),
        Key: sdk.String("dicta"),
        OauthToken: sdk.String("harum"),
        PageSize: sdk.Int64(317983),
        PageToken: sdk.String("accusamus"),
        ParentAccount: sdk.String("commodi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("repudiandae"),
        UploadType: sdk.String("quae"),
        UploadProtocol: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountsResponse != nil {
        // handle response
    }
}
```
