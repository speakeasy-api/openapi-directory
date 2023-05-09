# Customers

## Overview

Create, List, Updated and Delete Customers

### Available Operations

* [GetCustomer](#getcustomer) - Represents a customer
* [GetCustomers](#getcustomers) - List all customers or find your own account

## GetCustomer

Represents a customer

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetCustomer(ctx, operations.GetCustomerRequest{
        Account: 384382,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCustomer200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetCustomers

List all customers or find your own account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            BasicAuth: &shared.SchemeBasicAuth{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetCustomers(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
