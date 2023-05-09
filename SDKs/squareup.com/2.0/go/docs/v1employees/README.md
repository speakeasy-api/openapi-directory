# V1Employees

### Available Operations

* [CreateEmployee](#createemployee) - CreateEmployee
* [CreateEmployeeRole](#createemployeerole) - CreateEmployeeRole
* [ListEmployeeRoles](#listemployeeroles) - ListEmployeeRoles
* [ListEmployees](#listemployees) - ListEmployees
* [RetrieveEmployee](#retrieveemployee) - RetrieveEmployee
* [RetrieveEmployeeRole](#retrieveemployeerole) - RetrieveEmployeeRole
* [UpdateEmployee](#updateemployee) - UpdateEmployee
* [UpdateEmployeeRole](#updateemployeerole) - UpdateEmployeeRole

## CreateEmployee

 Use the CreateEmployee endpoint to add an employee to a Square
account. Employees created with the Connect API have an initial status
of `INACTIVE`. Inactive employees cannot sign in to Square Point of Sale
until they are activated from the Square Dashboard. Employee status
cannot be changed with the Connect API.

Employee entities cannot be deleted. To disable employee profiles,
set the employee's status to <code>INACTIVE</code>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1Employees.CreateEmployee(ctx, shared.V1Employee{
        AuthorizedLocationIds: []string{
            "sequi",
            "maiores",
            "reprehenderit",
        },
        CreatedAt: sdk.String("dolore"),
        Email: sdk.String("Tanner_Tromp78@yahoo.com"),
        ExternalID: sdk.String("distinctio"),
        FirstName: "Hilbert",
        ID: sdk.String("9d541b4b-393f-4356-a625-bea32201dec3"),
        LastName: "Kiehn",
        RoleIds: []string{
            "optio",
            "voluptas",
            "error",
        },
        Status: sdk.String("quas"),
        UpdatedAt: sdk.String("saepe"),
    }, operations.CreateEmployeeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Employee != nil {
        // handle response
    }
}
```

## CreateEmployeeRole

Creates an employee role you can then assign to employees.

Square accounts can include any number of roles that can be assigned to
employees. These roles define the actions and permissions granted to an
employee with that role. For example, an employee with a "Shift Manager"
role might be able to issue refunds in Square Point of Sale, whereas an
employee with a "Clerk" role might not.

Roles are assigned with the [V1UpdateEmployee](https://developer.squareup.com/reference/square_2021-08-18/v1-employees-api/update-employee-role)
endpoint. An employee can have only one role at a time.

If an employee has no role, they have none of the permissions associated
with roles. All employees can accept payments with Square Point of Sale.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1Employees.CreateEmployeeRole(ctx, shared.V1EmployeeRole{
        CreatedAt: sdk.String("officia"),
        ID: sdk.String("1d48c5c2-f9e2-41d9-8fd5-3776bfc7677f"),
        IsOwner: sdk.Bool(false),
        Name: "Mrs. Melba Heathcote",
        Permissions: []string{
            "debitis",
            "magnam",
        },
        UpdatedAt: sdk.String("deleniti"),
    }, operations.CreateEmployeeRoleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1EmployeeRole != nil {
        // handle response
    }
}
```

## ListEmployeeRoles

Provides summary information for all of a business's employee roles.

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
    res, err := s.V1Employees.ListEmployeeRoles(ctx, operations.ListEmployeeRolesRequest{
        BatchToken: sdk.String("consequuntur"),
        Limit: sdk.Int64(517083),
        Order: sdk.String("hic"),
    }, operations.ListEmployeeRolesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1EmployeeRoles != nil {
        // handle response
    }
}
```

## ListEmployees

Provides summary information for all of a business's employees.

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
    res, err := s.V1Employees.ListEmployees(ctx, operations.ListEmployeesRequest{
        BatchToken: sdk.String("nam"),
        BeginCreatedAt: sdk.String("eum"),
        BeginUpdatedAt: sdk.String("assumenda"),
        EndCreatedAt: sdk.String("officia"),
        EndUpdatedAt: sdk.String("repudiandae"),
        ExternalID: sdk.String("recusandae"),
        Limit: sdk.Int64(99075),
        Order: sdk.String("sint"),
        Status: sdk.String("cumque"),
    }, operations.ListEmployeesSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Employees != nil {
        // handle response
    }
}
```

## RetrieveEmployee

Provides the details for a single employee.

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
    res, err := s.V1Employees.RetrieveEmployee(ctx, operations.RetrieveEmployeeRequest{
        EmployeeID: "explicabo",
    }, operations.RetrieveEmployeeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Employee != nil {
        // handle response
    }
}
```

## RetrieveEmployeeRole

Provides the details for a single employee role.

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
    res, err := s.V1Employees.RetrieveEmployeeRole(ctx, operations.RetrieveEmployeeRoleRequest{
        RoleID: "nisi",
    }, operations.RetrieveEmployeeRoleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1EmployeeRole != nil {
        // handle response
    }
}
```

## UpdateEmployee

UpdateEmployee

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
    res, err := s.V1Employees.UpdateEmployee(ctx, operations.UpdateEmployeeRequest{
        V1Employee: shared.V1Employee{
            AuthorizedLocationIds: []string{
                "quae",
                "impedit",
                "facilis",
                "ex",
            },
            CreatedAt: sdk.String("quasi"),
            Email: sdk.String("Quinten22@yahoo.com"),
            ExternalID: sdk.String("vitae"),
            FirstName: "Norbert",
            ID: sdk.String("abdab767-a444-4dd0-9a0a-be58eb3d54ba"),
            LastName: "Blanda",
            RoleIds: []string{
                "facilis",
                "nesciunt",
                "laborum",
                "quibusdam",
            },
            Status: sdk.String("aliquam"),
            UpdatedAt: sdk.String("sint"),
        },
        EmployeeID: "expedita",
    }, operations.UpdateEmployeeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1Employee != nil {
        // handle response
    }
}
```

## UpdateEmployeeRole

Modifies the details of an employee role.

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
    res, err := s.V1Employees.UpdateEmployeeRole(ctx, operations.UpdateEmployeeRoleRequest{
        V1EmployeeRole: shared.V1EmployeeRole{
            CreatedAt: sdk.String("molestias"),
            ID: sdk.String("e5c18b25-e87f-4648-a325-5be95c0cbcb2"),
            IsOwner: sdk.Bool(false),
            Name: "Angelo Larkin",
            Permissions: []string{
                "quos",
            },
            UpdatedAt: sdk.String("repellendus"),
        },
        RoleID: "in",
    }, operations.UpdateEmployeeRoleSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.V1EmployeeRole != nil {
        // handle response
    }
}
```
