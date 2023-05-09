# Products

### Available Operations

* [DeleteProductsIDJSON](#deleteproductsidjson) - Delete an existing Product.
* [GetProductsJSON](#getproductsjson) - Retrieve all Products.
* [GetProductsAfterIDJSON](#getproductsafteridjson) - Retrieves Products after the given id.
* [GetProductsCategoryCategoryIDJSON](#getproductscategorycategoryidjson) - Retrieve Products filtered by category.
* [GetProductsCategoryCategoryIDCountJSON](#getproductscategorycategoryidcountjson) - Count Products filtered by category.
* [GetProductsCountJSON](#getproductscountjson) - Count all Products.
* [GetProductsSearchJSON](#getproductssearchjson) - Retrieve a Product List from a query.
* [GetProductsStatusStatusJSON](#getproductsstatusstatusjson) - Retrieve Products filtered by status.
* [GetProductsStatusStatusCountJSON](#getproductsstatusstatuscountjson) - Count Products filtered by status.
* [GetProductsIDJSON](#getproductsidjson) - Retrieve a single Product.
* [PostProductsJSON](#postproductsjson) - Create a new Product.
* [PutProductsIDJSON](#putproductsidjson) - Modify an existing Product.

## DeleteProductsIDJSON

Delete an existing Product.

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
    res, err := s.Products.DeleteProductsIDJSON(ctx, operations.DeleteProductsIDJSONRequest{
        Authtoken: "quae",
        ID: 312753,
        Login: "porro",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProductsIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetProductsJSON

Retrieve all Products.

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
    res, err := s.Products.GetProductsJSON(ctx, operations.GetProductsJSONRequest{
        Authtoken: "quod",
        Limit: sdk.Int64(288398),
        Locale: sdk.String("ab"),
        Login: "adipisci",
        Page: sdk.Int64(683573),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Products != nil {
        // handle response
    }
}
```

## GetProductsAfterIDJSON

Retrieves Products after the given id.

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
    res, err := s.Products.GetProductsAfterIDJSON(ctx, operations.GetProductsAfterIDJSONRequest{
        Authtoken: "id",
        ID: 380729,
        Locale: sdk.String("velit"),
        Login: "culpa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Products != nil {
        // handle response
    }
}
```

## GetProductsCategoryCategoryIDJSON

Retrieve Products filtered by category.

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
    res, err := s.Products.GetProductsCategoryCategoryIDJSON(ctx, operations.GetProductsCategoryCategoryIDJSONRequest{
        Authtoken: "est",
        CategoryID: 926880,
        Locale: sdk.String("totam"),
        Login: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Products != nil {
        // handle response
    }
}
```

## GetProductsCategoryCategoryIDCountJSON

Count Products filtered by category.

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
    res, err := s.Products.GetProductsCategoryCategoryIDCountJSON(ctx, operations.GetProductsCategoryCategoryIDCountJSONRequest{
        Authtoken: "vel",
        CategoryID: 497678,
        Locale: sdk.String("quos"),
        Login: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetProductsCountJSON

Count all Products.

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
    res, err := s.Products.GetProductsCountJSON(ctx, operations.GetProductsCountJSONRequest{
        Authtoken: "labore",
        Login: "possimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetProductsSearchJSON

Endpoint example: 

```text
https://api.jumpseller.com/v1/products/search.json?login=XXXXXX&authtoken=XXXXX&query=test&fields=name,description 
```

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
    res, err := s.Products.GetProductsSearchJSON(ctx, operations.GetProductsSearchJSONRequest{
        Authtoken: "facilis",
        Fields: operations.GetProductsSearchJSONFieldsEnumOptionName.ToPointer(),
        Locale: sdk.String("commodi"),
        Login: "in",
        Query: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Products != nil {
        // handle response
    }
}
```

## GetProductsStatusStatusJSON

Retrieve Products filtered by status.

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
    res, err := s.Products.GetProductsStatusStatusJSON(ctx, operations.GetProductsStatusStatusJSONRequest{
        Authtoken: "reiciendis",
        Locale: sdk.String("assumenda"),
        Login: "nemo",
        Status: operations.GetProductsStatusStatusJSONStatusEnumDisabled,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Products != nil {
        // handle response
    }
}
```

## GetProductsStatusStatusCountJSON

Count Products filtered by status.

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
    res, err := s.Products.GetProductsStatusStatusCountJSON(ctx, operations.GetProductsStatusStatusCountJSONRequest{
        Authtoken: "aliquid",
        Locale: sdk.String("aperiam"),
        Login: "cum",
        Status: operations.GetProductsStatusStatusCountJSONStatusEnumAvailable,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetProductsIDJSON

Retrieve a single Product.

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
    res, err := s.Products.GetProductsIDJSON(ctx, operations.GetProductsIDJSONRequest{
        Authtoken: "in",
        ID: 348519,
        Locale: sdk.String("earum"),
        Login: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## PostProductsJSON

Create a new Product.

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
    res, err := s.Products.PostProductsJSON(ctx, operations.PostProductsJSONRequest{
        ProductEdit: shared.ProductEdit{
            Product: &shared.ProductEditFields{
                Barcode: sdk.String("numquam"),
                Categories: []shared.CategoryFields{
                    shared.CategoryFields{
                        ID: sdk.Int(381760),
                        Name: sdk.String("Rickey Ullrich"),
                        ParentID: sdk.Int(121059),
                        Permalink: sdk.String("asperiores"),
                    },
                    shared.CategoryFields{
                        ID: sdk.Int(241545),
                        Name: sdk.String("Wendy Breitenberg"),
                        ParentID: sdk.Int(891523),
                        Permalink: sdk.String("consectetur"),
                    },
                    shared.CategoryFields{
                        ID: sdk.Int(358107),
                        Name: sdk.String("Rick Beer"),
                        ParentID: sdk.Int(113816),
                        Permalink: sdk.String("accusamus"),
                    },
                    shared.CategoryFields{
                        ID: sdk.Int(631126),
                        Name: sdk.String("Kelly Hoeger"),
                        ParentID: sdk.Int(324405),
                        Permalink: sdk.String("nobis"),
                    },
                },
                Description: sdk.String("dolorum"),
                Diameter: sdk.Float32(2378.07),
                Featured: sdk.Bool(false),
                GoogleProductCategory: sdk.String("minus"),
                Height: sdk.Float32(1718.53),
                Length: sdk.Float32(5039.34),
                MetaDescription: sdk.String("in"),
                Name: "Suzanne Torphy",
                PackageFormat: shared.ProductEditFieldsPackageFormatEnumBox.ToPointer(),
                PageTitle: sdk.String("cum"),
                Permalink: sdk.String("blanditiis"),
                Price: 5553.61,
                ShippingRequired: sdk.Bool(false),
                Sku: sdk.String("hic"),
                Status: shared.ProductEditFieldsStatusEnumAvailable.ToPointer(),
                Stock: sdk.Int(633998),
                StockUnlimited: sdk.Bool(false),
                Weight: sdk.Float32(5485.19),
                Width: sdk.Float32(8672.9),
            },
        },
        Authtoken: "totam",
        Locale: sdk.String("hic"),
        Login: "exercitationem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```

## PutProductsIDJSON

Modify an existing Product.

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
    res, err := s.Products.PutProductsIDJSON(ctx, operations.PutProductsIDJSONRequest{
        ProductEdit: shared.ProductEdit{
            Product: &shared.ProductEditFields{
                Barcode: sdk.String("nobis"),
                Categories: []shared.CategoryFields{
                    shared.CategoryFields{
                        ID: sdk.Int(699575),
                        Name: sdk.String("Faith Cole"),
                        ParentID: sdk.Int(451822),
                        Permalink: sdk.String("expedita"),
                    },
                },
                Description: sdk.String("ab"),
                Diameter: sdk.Float32(6117.49),
                Featured: sdk.Bool(false),
                GoogleProductCategory: sdk.String("dolore"),
                Height: sdk.Float32(6719.07),
                Length: sdk.Float32(1523.54),
                MetaDescription: sdk.String("in"),
                Name: "Melody Cole",
                PackageFormat: shared.ProductEditFieldsPackageFormatEnumBox.ToPointer(),
                PageTitle: sdk.String("suscipit"),
                Permalink: sdk.String("sapiente"),
                Price: 8953.86,
                ShippingRequired: sdk.Bool(false),
                Sku: sdk.String("illo"),
                Status: shared.ProductEditFieldsStatusEnumDisabled.ToPointer(),
                Stock: sdk.Int(19300),
                StockUnlimited: sdk.Bool(false),
                Weight: sdk.Float32(5468.85),
                Width: sdk.Float32(9795.74),
            },
        },
        Authtoken: "incidunt",
        ID: 148478,
        Locale: sdk.String("provident"),
        Login: "eius",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Product != nil {
        // handle response
    }
}
```
