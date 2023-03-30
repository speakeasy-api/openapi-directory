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
        PathParams: operations.MirrorAccountsInsertPathParams{
            AccountName: "corrupti",
            AccountType: "provident",
            UserToken: "distinctio",
        },
        QueryParams: operations.MirrorAccountsInsertQueryParams{
            Alt: "json",
            Fields: "quibusdam",
            Key: "unde",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "corrupti",
            UserIP: "illum",
        },
        Request: &shared.Account{
            AuthTokens: []shared.AuthToken{
                shared.AuthToken{
                    AuthToken: "error",
                    Type: "deserunt",
                },
                shared.AuthToken{
                    AuthToken: "suscipit",
                    Type: "iure",
                },
            },
            Features: []string{
                "debitis",
                "ipsa",
            },
            Password: "delectus",
            UserData: []shared.UserData{
                shared.UserData{
                    Key: "suscipit",
                    Value: "molestiae",
                },
                shared.UserData{
                    Key: "minus",
                    Value: "placeat",
                },
            },
        },
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