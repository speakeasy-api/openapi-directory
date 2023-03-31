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
        IdentitytoolkitRelyingpartyCreateAuthURIRequest: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: "corrupti",
            AuthFlowType: "provident",
            ClientID: "distinctio",
            Context: "quibusdam",
            ContinueURI: "unde",
            CustomParameter: map[string]string{
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
            },
            HostedDomain: "debitis",
            Identifier: "ipsa",
            OauthConsumerKey: "delectus",
            OauthScope: "tempora",
            OpenidRealm: "suscipit",
            OtaApp: "molestiae",
            ProviderID: "minus",
            SessionID: "placeat",
            TenantID: "voluptatum",
            TenantProjectNumber: "iusto",
        },
        Alt: "json",
        Fields: "excepturi",
        Key: "nisi",
        OauthToken: "recusandae",
        PrettyPrint: false,
        QuotaUser: "temporibus",
        UserIP: "ab",
    }

    ctx := context.Background()
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyCreateAuthURI(ctx, req, operations.IdentitytoolkitRelyingpartyCreateAuthURISecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAuthURIResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->