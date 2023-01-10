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
            Fields: "provident",
            Key: "maxime",
            OauthToken: "error",
            PrettyPrint: true,
            QuotaUser: "quaerat",
            UserIP: "omnis",
        },
        Request: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: "et",
            AuthFlowType: "sed",
            ClientID: "dolorum",
            Context: "numquam",
            ContinueURI: "nostrum",
            CustomParameter: map[string]string{
                "autem": "harum",
                "veritatis": "in",
            },
            HostedDomain: "totam",
            Identifier: "aut",
            OauthConsumerKey: "dolores",
            OauthScope: "temporibus",
            OpenidRealm: "molestias",
            OtaApp: "fugit",
            ProviderID: "quae",
            SessionID: "sed",
            TenantID: "voluptate",
            TenantProjectNumber: "autem",
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