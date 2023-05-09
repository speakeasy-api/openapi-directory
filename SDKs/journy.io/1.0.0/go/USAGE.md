<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.AddUserToAccount(ctx, operations.AddUserToAccountRequestBody{
        Account: operations.AddUserToAccountRequestBodyAccount{
            AccountID: sdk.String("corrupti"),
            Domain: sdk.String("provident"),
        },
        Users: []AddUserToAccountRequestBodyUsers{
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Leda_Stiedemann@hotmail.com"),
                    UserID: sdk.String("vel"),
                },
            },
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Luna.Hoppe@yahoo.com"),
                    UserID: sdk.String("debitis"),
                },
            },
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Vincenzo.Goldner@gmail.com"),
                    UserID: sdk.String("minus"),
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddUserToAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->