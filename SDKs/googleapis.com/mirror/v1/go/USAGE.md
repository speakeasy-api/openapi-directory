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
    res, err := s.Accounts.MirrorAccountsInsert(ctx, operations.MirrorAccountsInsertRequest{
        Account: &shared.Account{
            AuthTokens: []shared.AuthToken{
                shared.AuthToken{
                    AuthToken: sdk.String("provident"),
                    Type: sdk.String("distinctio"),
                },
                shared.AuthToken{
                    AuthToken: sdk.String("quibusdam"),
                    Type: sdk.String("unde"),
                },
                shared.AuthToken{
                    AuthToken: sdk.String("nulla"),
                    Type: sdk.String("corrupti"),
                },
            },
            Features: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            Password: sdk.String("iure"),
            UserData: []shared.UserData{
                shared.UserData{
                    Key: sdk.String("debitis"),
                    Value: sdk.String("ipsa"),
                },
                shared.UserData{
                    Key: sdk.String("delectus"),
                    Value: sdk.String("tempora"),
                },
            },
        },
        AccountName: "suscipit",
        AccountType: "molestiae",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("minus"),
        Key: sdk.String("placeat"),
        OauthToken: sdk.String("voluptatum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iusto"),
        UserIP: sdk.String("excepturi"),
        UserToken: "nisi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->