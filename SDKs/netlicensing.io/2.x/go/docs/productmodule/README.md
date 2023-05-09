# ProductModule

## Overview

Product Module operations

Product Module Services
<https://netlicensing.io/wiki/product-module-services>
### Available Operations

* [CreateProductModule](#createproductmodule) - Create Product Module
* [DeleteProductModule](#deleteproductmodule) - Delete Product Module
* [GetProductModule](#getproductmodule) - Get Product Module
* [ListProductModules](#listproductmodules) - List Product Modules
* [UpdateProductModule](#updateproductmodule) - Update Product Module

## CreateProductModule

Creates a new Product Module

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
    res, err := s.ProductModule.CreateProductModule(ctx, operations.CreateProductModuleRequestBody{
        Active: false,
        LicenseTemplate: []CreateProductModuleRequestBodyLicenseTemplateEnum{
            operations.CreateProductModuleRequestBodyLicenseTemplateEnumFeature,
            operations.CreateProductModuleRequestBodyLicenseTemplateEnumFeature,
            operations.CreateProductModuleRequestBodyLicenseTemplateEnumTimevolume,
        },
        LicensingModel: "reiciendis",
        MaxCheckoutValidity: sdk.Int(976460),
        Name: "Jessie Langosh V",
        NodeSecretMode: []CreateProductModuleRequestBodyNodeSecretModeEnum{
            operations.CreateProductModuleRequestBodyNodeSecretModeEnumClient,
            operations.CreateProductModuleRequestBodyNodeSecretModeEnumPredefined,
        },
        Number: sdk.String("doloremque"),
        ProductNumber: "reprehenderit",
        RedThreshold: sdk.Int(282807),
        YellowThreshold: sdk.Int(979587),
    }, operations.CreateProductModuleSecurity{
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

## DeleteProductModule

Delete a Product Module by 'number'

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
    res, err := s.ProductModule.DeleteProductModule(ctx, operations.DeleteProductModuleRequest{
        ForceCascade: sdk.Bool(false),
        ProductModuleNumber: "dicta",
    }, operations.DeleteProductModuleSecurity{
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

## GetProductModule

Return a Product Module by 'productModuleNumber'

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
    res, err := s.ProductModule.GetProductModule(ctx, operations.GetProductModuleRequest{
        ProductModuleNumber: "corporis",
    }, operations.GetProductModuleSecurity{
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

## ListProductModules

Return a list of all Product Modules for the current Vendor

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
    res, err := s.ProductModule.ListProductModules(ctx, operations.ListProductModulesSecurity{
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

## UpdateProductModule

Sets the provided properties to a Product Module. Return an updated Product Module

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
    res, err := s.ProductModule.UpdateProductModule(ctx, operations.UpdateProductModuleRequest{
        RequestBody: &operations.UpdateProductModuleRequestBody{
            Active: sdk.Bool(false),
            LicenseTemplate: []UpdateProductModuleRequestBodyLicenseTemplateEnum{
                operations.UpdateProductModuleRequestBodyLicenseTemplateEnumTimevolume,
                operations.UpdateProductModuleRequestBodyLicenseTemplateEnumTimevolume,
            },
            LicensingModel: sdk.String("harum"),
            MaxCheckoutValidity: sdk.Int(317983),
            Name: sdk.String("Mrs. Leslie VonRueden"),
            NodeSecretMode: []UpdateProductModuleRequestBodyNodeSecretModeEnum{
                operations.UpdateProductModuleRequestBodyNodeSecretModeEnumClient,
                operations.UpdateProductModuleRequestBodyNodeSecretModeEnumClient,
                operations.UpdateProductModuleRequestBodyNodeSecretModeEnumPredefined,
            },
            Number: sdk.String("praesentium"),
            RedThreshold: sdk.Int(523248),
            YellowThreshold: sdk.Int(916723),
        },
        ProductModuleNumber: "quasi",
    }, operations.UpdateProductModuleSecurity{
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
