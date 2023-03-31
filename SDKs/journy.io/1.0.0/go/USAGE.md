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

    req := operations.AddUserToAccountRequestBody{
        Account: operations.AddUserToAccountRequestBodyAccount{
            AccountID: "corrupti",
            Domain: "provident",
        },
        Users: []AddUserToAccountRequestBodyUsers{
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: "Leda_Stiedemann@hotmail.com",
                    UserID: "vel",
                },
            },
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: "Luna.Hoppe@yahoo.com",
                    UserID: "debitis",
                },
            },
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: "Vincenzo.Goldner@gmail.com",
                    UserID: "minus",
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