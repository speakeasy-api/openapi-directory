# Customers

### Available Operations

* [GetSetupV1Customers](#getsetupv1customers) - List Customers
* [GetSetupV1CustomersID](#getsetupv1customersid) - Get Customer
* [GetSetupV1CustomersIDPrivacy](#getsetupv1customersidprivacy) - Get Customer Data

## GetSetupV1Customers

<p>Use this endpoint to return a <b>List of Customers</b>. The results are returned in pages. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetSetupV1Customers(ctx, operations.GetSetupV1CustomersRequest{
        Deleted: sdk.Bool(false),
        Email: sdk.String("Maximus.Cormier99@gmail.com"),
        GroupID: sdk.String("facilis"),
        Lastname: sdk.String("Klein"),
        Limit: sdk.Int(709072),
        LocationID: sdk.String("ab"),
        Offset: sdk.Int(611749),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerListViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CustomersID

<p>Use this endpoint to return a <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's by using the <i>GET /setup/v1/customers</i> endpoint.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetSetupV1CustomersID(ctx, operations.GetSetupV1CustomersIDRequest{
        ID: "4a276b26-916f-4e1f-88f4-294e3698f447",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerViewModel != nil {
        // handle response
    }
}
```

## GetSetupV1CustomersIDPrivacy

<p>Use this endpoint to return the <b>Customer</b> object. A valid <b>customer id</b> is required. Find customer id's using the <i>GET /setup/v1/customers</i> endpoint.</p>

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Customers.GetSetupV1CustomersIDPrivacy(ctx, operations.GetSetupV1CustomersIDPrivacyRequest{
        ID: "f603e8b4-45e8-40ca-95ef-d20e457e1858",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerPrivacyViewModel != nil {
        // handle response
    }
}
```
