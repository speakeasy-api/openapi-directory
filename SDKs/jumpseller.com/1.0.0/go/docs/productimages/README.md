# ProductImages

### Available Operations

* [DeleteProductsIDImagesImageIDJSON](#deleteproductsidimagesimageidjson) - Delete a Product Image.
* [GetProductsIDImagesJSON](#getproductsidimagesjson) - Retrieve all Product Images.
* [GetProductsIDImagesCountJSON](#getproductsidimagescountjson) - Count all Product Images.
* [GetProductsIDImagesImageIDJSON](#getproductsidimagesimageidjson) - Retrieve a single Product Image.
* [PostProductsIDImagesJSON](#postproductsidimagesjson) - Create a new Product Image.

## DeleteProductsIDImagesImageIDJSON

Delete a Product Image.

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
    res, err := s.ProductImages.DeleteProductsIDImagesImageIDJSON(ctx, operations.DeleteProductsIDImagesImageIDJSONRequest{
        Authtoken: "minima",
        ID: 392676,
        ImageID: 147014,
        Login: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProductsIDImagesImageIDJSON200ApplicationJSONString != nil {
        // handle response
    }
}
```

## GetProductsIDImagesJSON

Retrieve all Product Images.

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
    res, err := s.ProductImages.GetProductsIDImagesJSON(ctx, operations.GetProductsIDImagesJSONRequest{
        Authtoken: "consequuntur",
        ID: 187131,
        Login: "explicabo",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Images != nil {
        // handle response
    }
}
```

## GetProductsIDImagesCountJSON

Count all Product Images.

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
    res, err := s.ProductImages.GetProductsIDImagesCountJSON(ctx, operations.GetProductsIDImagesCountJSONRequest{
        Authtoken: "saepe",
        ID: 578922,
        Login: "atque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Count != nil {
        // handle response
    }
}
```

## GetProductsIDImagesImageIDJSON

Retrieve a single Product Image.

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
    res, err := s.ProductImages.GetProductsIDImagesImageIDJSON(ctx, operations.GetProductsIDImagesImageIDJSONRequest{
        Authtoken: "et",
        ID: 456911,
        ImageID: 910545,
        Login: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Image != nil {
        // handle response
    }
}
```

## PostProductsIDImagesJSON

Create a new Product Image.

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
    res, err := s.ProductImages.PostProductsIDImagesJSON(ctx, operations.PostProductsIDImagesJSONRequest{
        ImageEdit: shared.ImageEdit{
            Image: &shared.ImageEditFields{
                URL: sdk.String("veritatis"),
            },
        },
        Authtoken: "esse",
        ID: 800379,
        Login: "nam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Image != nil {
        // handle response
    }
}
```
