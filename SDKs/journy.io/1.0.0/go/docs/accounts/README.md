# Accounts

## Overview

Endpoints for creating, deleting or updating accounts.

### Available Operations

* [AddUserToAccount](#addusertoaccount) - Add users to an account
* [DeleteAccount](#deleteaccount) - Delete account
* [RemoveUserFromAccount](#removeuserfromaccount) - Remove user from account
* [UpsertAccount](#upsertaccount) - Create or update account

## AddUserToAccount

You can add up to 100 users to an account.

### Example Usage

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
            AccountID: sdk.String("placeat"),
            Domain: sdk.String("voluptatum"),
        },
        Users: []AddUserToAccountRequestBodyUsers{
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Glen.Walsh33@yahoo.com"),
                    UserID: sdk.String("veritatis"),
                },
            },
            operations.AddUserToAccountRequestBodyUsers{
                Identification: operations.AddUserToAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Aiyana_Hills77@yahoo.com"),
                    UserID: sdk.String("odit"),
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

## DeleteAccount

Endpoint used to delete an account.

### Example Usage

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
    res, err := s.Accounts.DeleteAccount(ctx, operations.DeleteAccountRequestBody{
        Identification: operations.DeleteAccountRequestBodyIdentification{
            AccountID: sdk.String("at"),
            Domain: sdk.String("at"),
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteAccount202ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveUserFromAccount

You can remove up to 100 users from an account.

When removing a user, the user will still be stored in journy.io, but marked as "removed".


### Example Usage

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
    res, err := s.Accounts.RemoveUserFromAccount(ctx, operations.RemoveUserFromAccountRequestBody{
        Account: operations.RemoveUserFromAccountRequestBodyAccount{
            AccountID: sdk.String("maiores"),
            Domain: sdk.String("molestiae"),
        },
        Users: []RemoveUserFromAccountRequestBodyUsers{
            operations.RemoveUserFromAccountRequestBodyUsers{
                Identification: operations.RemoveUserFromAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Jakayla_Lebsack11@hotmail.com"),
                    UserID: sdk.String("nam"),
                },
            },
            operations.RemoveUserFromAccountRequestBodyUsers{
                Identification: operations.RemoveUserFromAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Kristina_Conroy@yahoo.com"),
                    UserID: sdk.String("optio"),
                },
            },
            operations.RemoveUserFromAccountRequestBodyUsers{
                Identification: operations.RemoveUserFromAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Benjamin.Johns@yahoo.com"),
                    UserID: sdk.String("qui"),
                },
            },
            operations.RemoveUserFromAccountRequestBodyUsers{
                Identification: operations.RemoveUserFromAccountRequestBodyUsersIdentification{
                    Email: sdk.String("Myra56@hotmail.com"),
                    UserID: sdk.String("aspernatur"),
                },
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveUserFromAccount204ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpsertAccount

Endpoint used to create or update an account.

### Example Usage

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
    res, err := s.Accounts.UpsertAccount(ctx, operations.UpsertAccountRequestBody{
        Identification: operations.UpsertAccountRequestBodyIdentification{
            AccountID: sdk.String("perferendis"),
            Domain: sdk.String("ad"),
        },
        Properties: map[string]interface{}{
            "sed": "iste",
            "dolor": "natus",
            "laboriosam": "hic",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpsertAccount201ApplicationJSONObject != nil {
        // handle response
    }
}
```
