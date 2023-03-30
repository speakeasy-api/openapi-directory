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

    req := operations.AddUserToAccountRequest{
        Request: operations.AddUserToAccountRequestBody{
            Account: operations.AddUserToAccountRequestBodyAccount{
                AccountID: "unde",
                Domain: "deserunt",
            },
            Users: []AddUserToAccountRequestBodyUsers{
                operations.AddUserToAccountRequestBodyUsers{
                    Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                        Email: "Leatha_Stiedemann@hotmail.com",
                        UserID: "nihil",
                    },
                },
                operations.AddUserToAccountRequestBodyUsers{
                    Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                        Email: "Luna.Hoppe@yahoo.com",
                        UserID: "saepe",
                    },
                },
                operations.AddUserToAccountRequestBodyUsers{
                    Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                        Email: "Vincenzo.Goldner@gmail.com",
                        UserID: "autem",
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.AddUserToAccount(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserToAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->