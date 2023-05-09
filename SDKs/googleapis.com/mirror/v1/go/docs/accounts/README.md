# Accounts

### Available Operations

* [MirrorAccountsInsert](#mirroraccountsinsert) - Inserts a new account for a user

## MirrorAccountsInsert

Inserts a new account for a user

### Example Usage

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
                    AuthToken: sdk.String("temporibus"),
                    Type: sdk.String("ab"),
                },
                shared.AuthToken{
                    AuthToken: sdk.String("quis"),
                    Type: sdk.String("veritatis"),
                },
                shared.AuthToken{
                    AuthToken: sdk.String("deserunt"),
                    Type: sdk.String("perferendis"),
                },
                shared.AuthToken{
                    AuthToken: sdk.String("ipsam"),
                    Type: sdk.String("repellendus"),
                },
            },
            Features: []string{
                "quo",
                "odit",
                "at",
                "at",
            },
            Password: sdk.String("maiores"),
            UserData: []shared.UserData{
                shared.UserData{
                    Key: sdk.String("quod"),
                    Value: sdk.String("quod"),
                },
                shared.UserData{
                    Key: sdk.String("esse"),
                    Value: sdk.String("totam"),
                },
            },
        },
        AccountName: "porro",
        AccountType: "dolorum",
        Alt: shared.AltEnumJSON.ToPointer(),
        Fields: sdk.String("dicta"),
        Key: sdk.String("nam"),
        OauthToken: sdk.String("officia"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("occaecati"),
        UserIP: sdk.String("fugit"),
        UserToken: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
