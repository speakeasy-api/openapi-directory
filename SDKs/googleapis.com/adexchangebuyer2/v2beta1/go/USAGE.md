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
            AccountID: "a",
        },
        QueryParams: operations.Adexchangebuyer2AccountsClientsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "excepturi",
            Alt: "json",
            Callback: "qui",
            Fields: "quam",
            Key: "dolores",
            OauthToken: "autem",
            PrettyPrint: false,
            QuotaUser: "minima",
            UploadType: "est",
            UploadProtocol: "minus",
        },
        Request: &shared.Client{
            ClientAccountID: "veniam",
            ClientName: "dignissimos",
            EntityID: "voluptas",
            EntityName: "nostrum",
            EntityType: "ENTITY_TYPE_UNCLASSIFIED",
            PartnerClientID: "repellat",
            Role: "CLIENT_DEAL_VIEWER",
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