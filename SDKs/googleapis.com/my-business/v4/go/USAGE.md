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
    res, err := s.Accounts.MybusinessAccountsCreate(ctx, operations.MybusinessAccountsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Account: &shared.Account{
            AccountName: sdk.String("provident"),
            AccountNumber: sdk.String("distinctio"),
            Name: sdk.String("Stuart Stiedemann"),
            OrganizationInfo: &shared.OrganizationInfo{
                PhoneNumber: sdk.String("vel"),
                PostalAddress: &shared.PostalAddress{
                    AddressLines: []string{
                        "deserunt",
                        "suscipit",
                        "iure",
                    },
                    AdministrativeArea: sdk.String("magnam"),
                    LanguageCode: sdk.String("debitis"),
                    Locality: sdk.String("ipsa"),
                    Organization: sdk.String("delectus"),
                    PostalCode: sdk.String("34785"),
                    Recipients: []string{
                        "excepturi",
                        "nisi",
                    },
                    RegionCode: sdk.String("recusandae"),
                    Revision: sdk.Int(836079),
                    SortingCode: sdk.String("ab"),
                    Sublocality: sdk.String("quis"),
                },
                RegisteredDomain: sdk.String("veritatis"),
            },
            PermissionLevel: shared.AccountPermissionLevelEnumOwnerLevel.ToPointer(),
            Role: shared.AccountRoleEnumAccountRoleUnspecified.ToPointer(),
            State: &shared.AccountState{
                Status: shared.AccountStateStatusEnumVerified.ToPointer(),
            },
            Type: shared.AccountTypeEnumOrganization.ToPointer(),
        },
        AccessToken: sdk.String("sapiente"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("odit"),
        Fields: sdk.String("at"),
        Key: sdk.String("at"),
        OauthToken: sdk.String("maiores"),
        PrettyPrint: sdk.Bool(false),
        PrimaryOwner: sdk.String("molestiae"),
        QuotaUser: sdk.String("quod"),
        UploadType: sdk.String("quod"),
        UploadProtocol: sdk.String("esse"),
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