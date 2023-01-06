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
            AccountName: "odio",
            AccountType: "et",
            UserToken: "voluptas",
        },
        QueryParams: operations.MirrorAccountsInsertQueryParams{
            Alt: "json",
            Fields: "aut",
            Key: "nostrum",
            OauthToken: "vero",
            PrettyPrint: true,
            QuotaUser: "dolor",
            UserIP: "eveniet",
        },
        Request: &shared.Account{
            AuthTokens: []shared.AuthToken{
                shared.AuthToken{
                    AuthToken: "id",
                    Type: "architecto",
                },
                shared.AuthToken{
                    AuthToken: "aperiam",
                    Type: "tempora",
                },
            },
            Features: []string{
                "et",
                "aliquam",
            },
            Password: "laudantium",
            UserData: []shared.UserData{
                shared.UserData{
                    Key: "error",
                    Value: "magnam",
                },
                shared.UserData{
                    Key: "qui",
                    Value: "hic",
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