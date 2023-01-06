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
            AccountID: "qui",
        },
        QueryParams: operations.Adexchangebuyer2AccountsClientsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "error",
            Alt: "media",
            Callback: "quis",
            Fields: "autem",
            Key: "ratione",
            OauthToken: "illo",
            PrettyPrint: false,
            QuotaUser: "cumque",
            UploadType: "aut",
            UploadProtocol: "eveniet",
        },
        Request: &shared.Client{
            ClientAccountID: "animi",
            ClientName: "minus",
            EntityID: "laudantium",
            EntityName: "rerum",
            EntityType: "ENTITY_TYPE_UNCLASSIFIED",
            PartnerClientID: "qui",
            Role: "CLIENT_DEAL_APPROVER",
            Status: "CLIENT_STATUS_UNSPECIFIED",
            VisibleToSeller: false,
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