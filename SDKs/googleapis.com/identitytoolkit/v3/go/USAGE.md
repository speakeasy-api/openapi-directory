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
            Fields: "corrupti",
            Key: "provident",
            OauthToken: "distinctio",
            PrettyPrint: false,
            QuotaUser: "quibusdam",
            UserIP: "unde",
        },
        Request: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: "nulla",
            AuthFlowType: "corrupti",
            ClientID: "illum",
            Context: "vel",
            ContinueURI: "error",
            CustomParameter: map[string]string{
                "suscipit": "iure",
                "magnam": "debitis",
                "ipsa": "delectus",
            },
            HostedDomain: "tempora",
            Identifier: "suscipit",
            OauthConsumerKey: "molestiae",
            OauthScope: "minus",
            OpenidRealm: "placeat",
            OtaApp: "voluptatum",
            ProviderID: "iusto",
            SessionID: "excepturi",
            TenantID: "nisi",
            TenantProjectNumber: "recusandae",
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