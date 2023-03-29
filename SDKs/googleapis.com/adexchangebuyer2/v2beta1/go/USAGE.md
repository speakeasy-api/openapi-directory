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
        Security: operations.Adexchangebuyer2AccountsClientsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.Adexchangebuyer2AccountsClientsCreatePathParams{
            AccountID: "unde",
        },
        QueryParams: operations.Adexchangebuyer2AccountsClientsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.Client{
            ClientAccountID: "eum",
            ClientName: "iusto",
            EntityID: "ullam",
            EntityName: "saepe",
            EntityType: "ENTITY_TYPE_UNSPECIFIED",
            PartnerClientID: "sapiente",
            Role: "CLIENT_DEAL_VIEWER",
            Status: "DISABLED",
            VisibleToSeller: false,
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->