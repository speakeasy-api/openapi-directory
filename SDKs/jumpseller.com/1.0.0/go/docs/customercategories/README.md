# CustomerCategories

### Available Operations

* [DeleteCustomerCategoriesIDJSON](#deletecustomercategoriesidjson) - Delete an existing CustomerCategory.
* [DeleteCustomerCategoriesIDCustomersJSON](#deletecustomercategoriesidcustomersjson) - Delete Customers from an existing CustomerCategory.
* [GetCustomerCategoriesJSON](#getcustomercategoriesjson) - Retrieve all Customer Categories.
* [GetCustomerCategoriesIDJSON](#getcustomercategoriesidjson) - Retrieve a single CustomerCategory.
* [GetCustomerCategoriesIDCustomersJSON](#getcustomercategoriesidcustomersjson) - Retrieves the customers in a CustomerCategory.
* [PostCustomerCategoriesJSON](#postcustomercategoriesjson) - Create a new CustomerCategory.
* [PostCustomerCategoriesIDCustomersJSON](#postcustomercategoriesidcustomersjson) - Adds Customers to a CustomerCategory.
* [PutCustomerCategoriesIDJSON](#putcustomercategoriesidjson) - Update a CustomerCategory.

## DeleteCustomerCategoriesIDJSON

Delete an existing CustomerCategory.

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
    res, err := s.CustomerCategories.DeleteCustomerCategoriesIDJSON(ctx, operations.DeleteCustomerCategoriesIDJSONRequest{
        Authtoken: "explicabo",
        ID: 647174,
        Login: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomerCategoriesIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## DeleteCustomerCategoriesIDCustomersJSON

Delete Customers from an existing CustomerCategory.

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
    res, err := s.CustomerCategories.DeleteCustomerCategoriesIDCustomersJSON(ctx, operations.DeleteCustomerCategoriesIDCustomersJSONRequest{
        CustomersToCustomerCategory: shared.CustomersToCustomerCategory{
            Customers: []shared.CustomerToCustomerCategory{
                shared.CustomerToCustomerCategory{
                    Email: sdk.String("Dillan_Deckow@gmail.com"),
                    ID: sdk.Int(552822),
                },
                shared.CustomerToCustomerCategory{
                    Email: sdk.String("Casimir.Simonis@gmail.com"),
                    ID: sdk.Int(146441),
                },
                shared.CustomerToCustomerCategory{
                    Email: sdk.String("Kevin_Glover28@hotmail.com"),
                    ID: sdk.Int(962189),
                },
                shared.CustomerToCustomerCategory{
                    Email: sdk.String("Delores.Roob@yahoo.com"),
                    ID: sdk.Int(592042),
                },
            },
        },
        Authtoken: "necessitatibus",
        ID: 572252,
        Login: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomerCategoriesIDCustomersJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetCustomerCategoriesJSON

Retrieve all Customer Categories.

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
    res, err := s.CustomerCategories.GetCustomerCategoriesJSON(ctx, operations.GetCustomerCategoriesJSONRequest{
        Authtoken: "dolor",
        Limit: sdk.Int64(891555),
        Login: "a",
        Page: sdk.Int64(680056),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerCategories != nil {
        // handle response
    }
}
```

## GetCustomerCategoriesIDJSON

Retrieve a single CustomerCategory.

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
    res, err := s.CustomerCategories.GetCustomerCategoriesIDJSON(ctx, operations.GetCustomerCategoriesIDJSONRequest{
        Authtoken: "in",
        ID: 449198,
        Login: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerCategory != nil {
        // handle response
    }
}
```

## GetCustomerCategoriesIDCustomersJSON

Retrieves the customers in a CustomerCategory.

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
    res, err := s.CustomerCategories.GetCustomerCategoriesIDCustomersJSON(ctx, operations.GetCustomerCategoriesIDCustomersJSONRequest{
        Authtoken: "maiores",
        ID: 699479,
        Login: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customers != nil {
        // handle response
    }
}
```

## PostCustomerCategoriesJSON

Create a new CustomerCategory.

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
    res, err := s.CustomerCategories.PostCustomerCategoriesJSON(ctx, operations.PostCustomerCategoriesJSONRequest{
        CustomerCategoryEdit: shared.CustomerCategoryEdit{
            Category: &shared.CustomerCategoryEditFields{
                Name: sdk.String("Blanca Schulist"),
            },
        },
        Authtoken: "laborum",
        Login: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerCategory != nil {
        // handle response
    }
}
```

## PostCustomerCategoriesIDCustomersJSON

Adds Customers to a CustomerCategory.

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
    res, err := s.CustomerCategories.PostCustomerCategoriesIDCustomersJSON(ctx, operations.PostCustomerCategoriesIDCustomersJSONRequest{
        CustomersToCustomerCategory: shared.CustomersToCustomerCategory{
            Customers: []shared.CustomerToCustomerCategory{
                shared.CustomerToCustomerCategory{
                    Email: sdk.String("Elyssa_Tillman58@yahoo.com"),
                    ID: sdk.Int(725255),
                },
            },
        },
        Authtoken: "id",
        ID: 501324,
        Login: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Customers != nil {
        // handle response
    }
}
```

## PutCustomerCategoriesIDJSON

Update a CustomerCategory.

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
    res, err := s.CustomerCategories.PutCustomerCategoriesIDJSON(ctx, operations.PutCustomerCategoriesIDJSONRequest{
        CustomerCategoryEdit: shared.CustomerCategoryEdit{
            Category: &shared.CustomerCategoryEditFields{
                Name: sdk.String("Vincent Nolan"),
            },
        },
        Authtoken: "natus",
        ID: 606393,
        Login: "molestiae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CustomerCategory != nil {
        // handle response
    }
}
```
