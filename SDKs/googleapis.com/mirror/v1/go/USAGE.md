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
    
    req := operations.MirrorAccountsInsertRequest{
        PathParams: operations.MirrorAccountsInsertPathParams{
            AccountName: "quo",
            AccountType: "dolorem",
            UserToken: "quod",
        },
        QueryParams: operations.MirrorAccountsInsertQueryParams{
            Alt: "json",
            Fields: "eius",
            Key: "dolor",
            OauthToken: "maiores",
            PrettyPrint: false,
            QuotaUser: "recusandae",
            UserIP: "in",
        },
        Request: &shared.Account{
            AuthTokens: []shared.AuthToken{
                shared.AuthToken{
                    AuthToken: "ipsum",
                    Type: "mollitia",
                },
            },
            Features: []string{
                "ipsum",
                "vero",
                "autem",
            },
            Password: "laboriosam",
            UserData: []shared.UserData{
                shared.UserData{
                    Key: "incidunt",
                    Value: "distinctio",
                },
                shared.UserData{
                    Key: "labore",
                    Value: "magnam",
                },
            },
        },
    }
    
    res, err := s.Accounts.MirrorAccountsInsert(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->