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
            Fields: "vitae",
            Key: "facilis",
            OauthToken: "ipsa",
            PrettyPrint: true,
            QuotaUser: "deleniti",
            UserIP: "et",
        },
        Request: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: "sed",
            AuthFlowType: "ad",
            ClientID: "omnis",
            Context: "ut",
            ContinueURI: "voluptas",
            CustomParameter: map[string]string{
                "inventore": "nihil",
                "ad": "quisquam",
            },
            HostedDomain: "deleniti",
            Identifier: "dolor",
            OauthConsumerKey: "ut",
            OauthScope: "natus",
            OpenidRealm: "odio",
            OtaApp: "error",
            ProviderID: "ea",
            SessionID: "possimus",
            TenantID: "ipsum",
            TenantProjectNumber: "qui",
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