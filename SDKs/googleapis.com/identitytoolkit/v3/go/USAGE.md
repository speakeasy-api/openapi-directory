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
    
    req := operations.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
        Security: operations.IdentitytoolkitRelyingpartyCreateAuthURISecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        QueryParams: operations.IdentitytoolkitRelyingpartyCreateAuthURIQueryParams{
            Alt: "json",
            Fields: "voluptas",
            Key: "culpa",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "dolor",
            UserIP: "expedita",
        },
        Request: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: "voluptas",
            AuthFlowType: "fugit",
            ClientID: "et",
            Context: "nihil",
            ContinueURI: "rerum",
            CustomParameter: map[string]string{
                "debitis": "voluptatum",
                "et": "ut",
                "dolorem": "et",
            },
            HostedDomain: "voluptate",
            Identifier: "iste",
            OauthConsumerKey: "vitae",
            OauthScope: "totam",
            OpenidRealm: "dolores",
            OtaApp: "illum",
            ProviderID: "debitis",
            SessionID: "vel",
            TenantID: "odio",
            TenantProjectNumber: "dolore",
        },
    }
    
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyCreateAuthURI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthURIResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->