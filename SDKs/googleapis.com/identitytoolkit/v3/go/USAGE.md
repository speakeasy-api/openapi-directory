<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Relyingparty.IdentitytoolkitRelyingpartyCreateAuthURI(ctx, operations.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
        IdentitytoolkitRelyingpartyCreateAuthURIRequest: &shared.IdentitytoolkitRelyingpartyCreateAuthURIRequest{
            AppID: sdk.String("corrupti"),
            AuthFlowType: sdk.String("provident"),
            ClientID: sdk.String("distinctio"),
            Context: sdk.String("quibusdam"),
            ContinueURI: sdk.String("unde"),
            CustomParameter: map[string]string{
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
            },
            HostedDomain: sdk.String("debitis"),
            Identifier: sdk.String("ipsa"),
            OauthConsumerKey: sdk.String("delectus"),
            OauthScope: sdk.String("tempora"),
            OpenidRealm: sdk.String("suscipit"),
            OtaApp: sdk.String("molestiae"),
            ProviderID: sdk.String("minus"),
            SessionID: sdk.String("placeat"),
            TenantID: sdk.String("voluptatum"),
            TenantProjectNumber: sdk.String("iusto"),
        },
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("excepturi"),
        Key: sdk.String("nisi"),
        OauthToken: sdk.String("recusandae"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("temporibus"),
        UserIP: sdk.String("ab"),
    }, operations.IdentitytoolkitRelyingpartyCreateAuthURISecurity{
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