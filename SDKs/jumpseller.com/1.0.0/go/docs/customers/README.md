# Customers

### Available Operations

* [DeleteCustomersIDJSON](#deletecustomersidjson) - Delete an existing Customer.
* [GetCustomersJSON](#getcustomersjson) - Retrieve all Customers.
* [GetCustomersCountJSON](#getcustomerscountjson) - Count all Customers.
* [GetCustomersEmailEmailJSON](#getcustomersemailemailjson) - Retrieve a single Customer by email.
* [GetCustomersIDJSON](#getcustomersidjson) - Retrieve a single Customer by id.
* [PostCustomersJSON](#postcustomersjson) - Create a new Customer.
* [PutCustomersIDJSON](#putcustomersidjson) - Update a new Customer.

## DeleteCustomersIDJSON

Delete an existing Customer.

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
    res, err := s.Customers.DeleteCustomersIDJSON(ctx, operations.DeleteCustomersIDJSONRequest{
        Authtoken: "perferendis",
        ID: 470132,
        Login: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomersIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetCustomersJSON

Retrieve all Customers.

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
    res, err := s.Customers.GetCustomersJSON(ctx, operations.GetCustomersJSONRequest{
        Authtoken: "distinctio",
        Limit: sdk.Int64(660174),
        Login: "labore",
        Page: sdk.Int64(290077),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customers != nil {
        // handle response
    }
}
```

## GetCustomersCountJSON

Count all Customers.

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
    res, err := s.Customers.GetCustomersCountJSON(ctx, operations.GetCustomersCountJSONRequest{
        Authtoken: "suscipit",
        Login: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetCustomersEmailEmailJSON

Retrieve a single Customer by email.

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
    res, err := s.Customers.GetCustomersEmailEmailJSON(ctx, operations.GetCustomersEmailEmailJSONRequest{
        Authtoken: "nobis",
        Email: "Shaina29@yahoo.com",
        Login: "et",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```

## GetCustomersIDJSON

Retrieve a single Customer by id.

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
    res, err := s.Customers.GetCustomersIDJSON(ctx, operations.GetCustomersIDJSONRequest{
        Authtoken: "excepturi",
        ID: 354047,
        Login: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```

## PostCustomersJSON

Create a new Customer.

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
    res, err := s.Customers.PostCustomersJSON(ctx, operations.PostCustomersJSONRequest{
        CustomerWithPasswordNoID: shared.CustomerWithPasswordNoID{
            Customer: &shared.CustomerFieldsWithPasswordNoID{
                BillingAddress: &shared.BillingAddress{
                    Address: sdk.String("5069 Hammes Keys"),
                    City: sdk.String("Fort Brown"),
                    Country: sdk.String("Guinea-Bissau"),
                    Municipality: sdk.String("quasi"),
                    Name: sdk.String("Melba Toy"),
                    Postal: sdk.String("deleniti"),
                    Region: sdk.String("facilis"),
                    Surname: sdk.String("in"),
                    Taxid: sdk.String("architecto"),
                },
                CustomerCategory: []int64{
                    919483,
                },
                Email: sdk.String("Michael_Koss14@yahoo.com"),
                Password: sdk.String("saepe"),
                Phone: sdk.String("(215) 611-7888 x45140"),
                ShippingAddress: &shared.ShippingAddress{
                    Address: sdk.String("96344 Beatty Throughway"),
                    City: sdk.String("Fort Agnes"),
                    Country: sdk.String("Swaziland"),
                    Municipality: sdk.String("amet"),
                    Name: sdk.String("Erma Hessel"),
                    Postal: sdk.String("nobis"),
                    Region: sdk.String("dolores"),
                    Surname: sdk.String("quis"),
                },
                Status: shared.CustomerFieldsWithPasswordNoIDStatusEnumPending.ToPointer(),
            },
        },
        Authtoken: "dignissimos",
        Login: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```

## PutCustomersIDJSON

Update a new Customer.

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
    res, err := s.Customers.PutCustomersIDJSON(ctx, operations.PutCustomersIDJSONRequest{
        CustomerWithPasswordNoID: shared.CustomerWithPasswordNoID{
            Customer: &shared.CustomerFieldsWithPasswordNoID{
                BillingAddress: &shared.BillingAddress{
                    Address: sdk.String("1101 Kohler Extensions"),
                    City: sdk.String("Georgetown"),
                    Country: sdk.String("United States of America"),
                    Municipality: sdk.String("recusandae"),
                    Name: sdk.String("Miss Cesar Metz"),
                    Postal: sdk.String("blanditiis"),
                    Region: sdk.String("error"),
                    Surname: sdk.String("eaque"),
                    Taxid: sdk.String("occaecati"),
                },
                CustomerCategory: []int64{
                    237893,
                    992397,
                    934214,
                },
                Email: sdk.String("Lessie_Parisian@gmail.com"),
                Password: sdk.String("provident"),
                Phone: sdk.String("793-632-2212 x95744"),
                ShippingAddress: &shared.ShippingAddress{
                    Address: sdk.String("262 Anderson Cape"),
                    City: sdk.String("Jeffborough"),
                    Country: sdk.String("Tanzania"),
                    Municipality: sdk.String("quidem"),
                    Name: sdk.String("Hector Mosciski"),
                    Postal: sdk.String("sit"),
                    Region: sdk.String("fugiat"),
                    Surname: sdk.String("ab"),
                },
                Status: shared.CustomerFieldsWithPasswordNoIDStatusEnumDisabled.ToPointer(),
            },
        },
        Authtoken: "dolorum",
        ID: 478596,
        Login: "voluptate",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customer != nil {
        // handle response
    }
}
```
