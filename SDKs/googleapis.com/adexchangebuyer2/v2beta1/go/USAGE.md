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
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsCreate(ctx, operations.Adexchangebuyer2AccountsClientsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        Client: &shared.Client{
            ClientAccountID: sdk.String("provident"),
            ClientName: sdk.String("distinctio"),
            EntityID: sdk.String("quibusdam"),
            EntityName: sdk.String("unde"),
            EntityType: shared.ClientEntityTypeEnumEntityTypeUnclassified.ToPointer(),
            PartnerClientID: sdk.String("corrupti"),
            Role: shared.ClientRoleEnumClientDealApprover.ToPointer(),
            Status: shared.ClientStatusEnumDisabled.ToPointer(),
            VisibleToSeller: sdk.Bool(false),
        },
        AccessToken: sdk.String("error"),
        AccountID: "deserunt",
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("iure"),
        Fields: sdk.String("magnam"),
        Key: sdk.String("debitis"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.Adexchangebuyer2AccountsClientsCreateSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->