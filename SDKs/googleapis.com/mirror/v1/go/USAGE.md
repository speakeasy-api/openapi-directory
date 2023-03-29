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
            AccountName: "unde",
            AccountType: "deserunt",
            UserToken: "porro",
        },
        QueryParams: operations.MirrorAccountsInsertQueryParams{
            Alt: "json",
            Fields: "id",
            Key: "vero",
            OauthToken: "perspiciatis",
            PrettyPrint: false,
            QuotaUser: "nulla",
            UserIP: "nihil",
        },
        Request: &shared.Account{
            AuthTokens: []shared.AuthToken{
                shared.AuthToken{
                    AuthToken: "facilis",
                    Type: "eum",
                },
                shared.AuthToken{
                    AuthToken: "iusto",
                    Type: "ullam",
                },
                shared.AuthToken{
                    AuthToken: "saepe",
                    Type: "inventore",
                },
            },
            Features: []string{
                "enim",
                "eum",
                "voluptatum",
                "autem",
            },
            Password: "vel",
            UserData: []shared.UserData{
                shared.UserData{
                    Key: "deleniti",
                    Value: "similique",
                },
                shared.UserData{
                    Key: "reprehenderit",
                    Value: "molestiae",
                },
                shared.UserData{
                    Key: "quo",
                    Value: "quasi",
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