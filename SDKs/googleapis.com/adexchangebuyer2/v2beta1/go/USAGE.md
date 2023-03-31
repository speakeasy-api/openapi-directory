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

    req := operations.Adexchangebuyer2AccountsClientsCreateRequest{
        DollarXgafv: "2",
        Client: &shared.Client{
            ClientAccountID: "provident",
            ClientName: "distinctio",
            EntityID: "quibusdam",
            EntityName: "unde",
            EntityType: "ENTITY_TYPE_UNCLASSIFIED",
            PartnerClientID: "corrupti",
            Role: "CLIENT_DEAL_APPROVER",
            Status: "DISABLED",
            VisibleToSeller: false,
        },
        AccessToken: "error",
        AccountID: "deserunt",
        Alt: "media",
        Callback: "iure",
        Fields: "magnam",
        Key: "debitis",
        OauthToken: "ipsa",
        PrettyPrint: false,
        QuotaUser: "delectus",
        UploadType: "tempora",
        UploadProtocol: "suscipit",
    }

    ctx := context.Background()
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsCreate(ctx, req, operations.Adexchangebuyer2AccountsClientsCreateSecurity{
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