# Product

## Overview

Product operations

Product Services
<https://netlicensing.io/wiki/product-services>
### Available Operations

* [CreateProduct](#createproduct) - Create Product
* [DeleteProduct](#deleteproduct) - Delete Product
* [ListProducts](#listproducts) - List Products
* [ProductNumber](#productnumber) - Get Product
* [UpdateProduct](#updateproduct) - Update Product

## CreateProduct

Creates a new Product

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
    res, err := s.Product.CreateProduct(ctx, operations.CreateProductRequestBody{
        Active: false,
        Description: sdk.String("mollitia"),
        LicenseeAutoCreate: sdk.Bool(false),
        LicensingInfo: sdk.String("occaecati"),
        Name: "Lucy Konopelski",
        Number: sdk.String("error"),
        VatMode: operations.CreateProductRequestBodyVatModeEnumGross.ToPointer(),
        Version: "quis",
    }, operations.CreateProductSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## DeleteProduct

Delete a Product by 'number'

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
    res, err := s.Product.DeleteProduct(ctx, operations.DeleteProductRequest{
        ForceCascade: sdk.Bool(false),
        ProductNumber: "vitae",
    }, operations.DeleteProductSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## ListProducts

Return a list of all configured Products for the current Vendor

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
    res, err := s.Product.ListProducts(ctx, operations.ListProductsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensings != nil {
        // handle response
    }
}
```

## ProductNumber

Return a Product by 'productNumber'

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
    res, err := s.Product.ProductNumber(ctx, operations.ProductNumberRequest{
        ProductNumber: "laborum",
    }, operations.ProductNumberSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```

## UpdateProduct

Sets the provided properties to a Product. Return an updated Product

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
    res, err := s.Product.UpdateProduct(ctx, operations.UpdateProductRequest{
        RequestBody: &operations.UpdateProductRequestBody{
            Active: sdk.Bool(false),
            Description: sdk.String("animi"),
            LicenseeAutoCreate: sdk.Bool(false),
            LicensingInfo: sdk.String("enim"),
            Name: sdk.String("Angelica Dietrich"),
            Number: sdk.String("id"),
            VatMode: operations.UpdateProductRequestBodyVatModeEnumNet.ToPointer(),
            Version: sdk.String("aut"),
        },
        ProductNumber: "quasi",
    }, operations.UpdateProductSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Netlicensing != nil {
        // handle response
    }
}
```
