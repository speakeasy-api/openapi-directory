# ProductsAPI

### Available Operations

* [ProductsAPICount](#productsapicount)
* [ProductsAPIDeleteProduct](#productsapideleteproduct)
* [ProductsAPIDeleteProduct2](#productsapideleteproduct2)
* [ProductsAPIFind](#productsapifind)
* [ProductsAPIList](#productsapilist)
* [ProductsAPIPatchProduct](#productsapipatchproduct)
* [ProductsAPIPatchProduct2](#productsapipatchproduct2)
* [ProductsAPISave](#productsapisave)

## ProductsAPICount

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
    res, err := s.ProductsAPI.ProductsAPICount(ctx, operations.ProductsAPICountRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsAPICount200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ProductsAPIDeleteProduct

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
    res, err := s.ProductsAPI.ProductsAPIDeleteProduct(ctx, operations.ProductsAPIDeleteProductRequest{
        XAPIKey: "nulla",
        Serial: "corrupti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductsAPIDeleteProduct2

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
    res, err := s.ProductsAPI.ProductsAPIDeleteProduct2(ctx, operations.ProductsAPIDeleteProduct2Request{
        XAPIKey: "illum",
        Serial: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductsAPIFind

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
    res, err := s.ProductsAPI.ProductsAPIFind(ctx, operations.ProductsAPIFindRequest{
        RequestBody: operations.ProductsAPIFindRequestBody{},
        Page: sdk.Int(623564),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsAPIFind200ApplicationJSONOneOf != nil {
        // handle response
    }
}
```

## ProductsAPIList

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
    res, err := s.ProductsAPI.ProductsAPIList(ctx, operations.ProductsAPIListRequest{
        RequestBody: operations.ProductsAPIListRequestBody{},
        Page: sdk.Int(645894),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductViews != nil {
        // handle response
    }
}
```

## ProductsAPIPatchProduct

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
    res, err := s.ProductsAPI.ProductsAPIPatchProduct(ctx, operations.ProductsAPIPatchProductRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductsAPIPatchProduct2

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
    res, err := s.ProductsAPI.ProductsAPIPatchProduct2(ctx, operations.ProductsAPIPatchProduct2RequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ProductsAPISave

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
    res, err := s.ProductsAPI.ProductsAPISave(ctx, operations.ProductsAPISaveRequestBody{})
    if err != nil {
        log.Fatal(err)
    }

    if res.ProductsAPISave201ApplicationJSONOneOf != nil {
        // handle response
    }
}
```
