# SubaccountManagement

## Overview

This section shows how you can create, retrieve and modify subaccounts of a primary account.

### Available Operations

* [CreateSubAccount](#createsubaccount) - Create subaccount
* [ModifySubaccount](#modifysubaccount) - Modify a subaccount
* [RetrieveSubaccount](#retrievesubaccount) - Retrieve a subaccount
* [RetrieveSubaccountsList](#retrievesubaccountslist) - Retrieve list of subaccounts

## CreateSubAccount

Create a subaccount for a given primary account.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SubaccountManagement.CreateSubAccount(ctx, operations.CreateSubAccountRequest{
        NewSubaccountRequest: shared.NewSubaccountRequest{
            Name: "Subaccount department A",
            Secret: sdk.String("Password123"),
            UsePrimaryAccountBalance: sdk.Bool(false),
        },
        APIKey: "provident",
    }, operations.CreateSubAccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountCreateResponse != nil {
        // handle response
    }
}
```

## ModifySubaccount

Change one or more properties of a subaccount.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SubaccountManagement.ModifySubaccount(ctx, operations.ModifySubaccountRequest{
        ModifySubaccountRequest: shared.ModifySubaccountRequest{
            Name: sdk.String("Subaccount department B"),
            Suspended: sdk.Bool(true),
            UsePrimaryAccountBalance: sdk.Bool(false),
        },
        APIKey: "distinctio",
        SubaccountKey: "quibusdam",
    }, operations.ModifySubaccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountResponse != nil {
        // handle response
    }
}
```

## RetrieveSubaccount

Get the information of a subaccount specified with its API key.


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
    res, err := s.SubaccountManagement.RetrieveSubaccount(ctx, operations.RetrieveSubaccountRequest{
        APIKey: "unde",
        SubaccountKey: "nulla",
    }, operations.RetrieveSubaccountSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountResponse != nil {
        // handle response
    }
}
```

## RetrieveSubaccountsList

Get the information of all the subaccounts owned by the primary account.


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
    res, err := s.SubaccountManagement.RetrieveSubaccountsList(ctx, operations.RetrieveSubaccountsListRequest{
        APIKey: "corrupti",
    }, operations.RetrieveSubaccountsListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SubaccountsAllResponse != nil {
        // handle response
    }
}
```
