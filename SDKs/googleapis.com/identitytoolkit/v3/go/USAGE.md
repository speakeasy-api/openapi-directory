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
            Fields: "deserunt",
            Key: "porro",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "id",
            UserIP: "vero",
        },
        Request: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: "perspiciatis",
            AuthFlowType: "nulla",
            ClientID: "nihil",
            Context: "fuga",
            ContinueURI: "facilis",
            CustomParameter: map[string]string{
                "iusto": "ullam",
                "saepe": "inventore",
            },
            HostedDomain: "sapiente",
            Identifier: "enim",
            OauthConsumerKey: "eum",
            OauthScope: "voluptatum",
            OpenidRealm: "autem",
            OtaApp: "vel",
            ProviderID: "non",
            SessionID: "deleniti",
            TenantID: "similique",
            TenantProjectNumber: "reprehenderit",
        },
    }

    ctx := context.Background()
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyCreateAuthURI(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthURIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->