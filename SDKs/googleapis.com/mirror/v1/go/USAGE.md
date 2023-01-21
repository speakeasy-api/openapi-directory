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
            AccountName: "sit",
            AccountType: "voluptas",
            UserToken: "culpa",
        },
        QueryParams: operations.MirrorAccountsInsertQueryParams{
            Alt: "json",
            Fields: "consequuntur",
            Key: "dolor",
            OauthToken: "expedita",
            PrettyPrint: true,
            QuotaUser: "fugit",
            UserIP: "et",
        },
        Request: &shared.Account{
            AuthTokens: []shared.AuthToken{
                shared.AuthToken{
                    AuthToken: "rerum",
                    Type: "dicta",
                },
            },
            Features: []string{
                "voluptatum",
            },
            Password: "et",
            UserData: []shared.UserData{
                shared.UserData{
                    Key: "dolorem",
                    Value: "et",
                },
                shared.UserData{
                    Key: "voluptate",
                    Value: "iste",
                },
                shared.UserData{
                    Key: "vitae",
                    Value: "totam",
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