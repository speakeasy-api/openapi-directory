# Employees

### Available Operations

* [GetV2Employees](#getv2employees) - ListEmployees
* [GetV2EmployeesID](#getv2employeesid) - RetrieveEmployee

## GetV2Employees

ListEmployees

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
    res, err := s.Employees.GetV2Employees(ctx, operations.GetV2EmployeesRequest{
        Cursor: sdk.String("illo"),
        Limit: sdk.Int64(846332),
        LocationID: sdk.String("nulla"),
        Status: sdk.String("amet"),
    }, operations.GetV2EmployeesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEmployeesResponse != nil {
        // handle response
    }
}
```

## GetV2EmployeesID

RetrieveEmployee

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
    res, err := s.Employees.GetV2EmployeesID(ctx, operations.GetV2EmployeesIDRequest{
        ID: "bbce247b-7684-4eff-9012-6d71cffbd0eb",
    }, operations.GetV2EmployeesIDSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetrieveEmployeeResponse != nil {
        // handle response
    }
}
```
