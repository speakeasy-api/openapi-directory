<!-- Start SDK Example Usage -->
```go
package main

import (
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
            AccountID: "sit",
        },
        QueryParams: operations.Adexchangebuyer2AccountsClientsCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.Client{
            ClientAccountID: "dicta",
            ClientName: "debitis",
            EntityID: "voluptatum",
            EntityName: "et",
            EntityType: "ADVERTISER",
            PartnerClientID: "dolorem",
            Role: "CLIENT_DEAL_NEGOTIATOR",
            Status: "CLIENT_STATUS_UNSPECIFIED",
            VisibleToSeller: true,
        },
    }
    
    res, err := s.Accounts.Adexchangebuyer2AccountsClientsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Client != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->