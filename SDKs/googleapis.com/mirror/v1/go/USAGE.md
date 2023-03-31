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

    req := operations.MirrorAccountsInsertRequest{
        Account: &shared.Account{
            AuthTokens: []shared.AuthToken{
                shared.AuthToken{
                    AuthToken: "provident",
                    Type: "distinctio",
                },
                shared.AuthToken{
                    AuthToken: "quibusdam",
                    Type: "unde",
                },
                shared.AuthToken{
                    AuthToken: "nulla",
                    Type: "corrupti",
                },
            },
            Features: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
            Password: "iure",
            UserData: []shared.UserData{
                shared.UserData{
                    Key: "debitis",
                    Value: "ipsa",
                },
                shared.UserData{
                    Key: "delectus",
                    Value: "tempora",
                },
            },
        },
        AccountName: "suscipit",
        AccountType: "molestiae",
        Alt: "json",
        Fields: "minus",
        Key: "placeat",
        OauthToken: "voluptatum",
        PrettyPrint: false,
        QuotaUser: "iusto",
        UserIP: "excepturi",
        UserToken: "nisi",
    }

    ctx := context.Background()
    res, err := s.Accounts.MirrorAccountsInsert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->