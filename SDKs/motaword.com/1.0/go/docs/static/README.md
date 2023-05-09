# Static

### Available Operations

* [GetEndpoints](#getendpoints) - Available endpoints
* [GetFormats](#getformats) - List of supported file formats
* [GetLanguages](#getlanguages) - List of supported languages
* [GetSwaggerYaml](#getswaggeryaml) - OpenAPI YAML representation of our API

## GetEndpoints

The root endpoint will provide you with an OpenAPI definition of MotaWord API.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Static.GetEndpoints(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GetFormats

Get a list of supported formats for documents, style guides and extensions.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Static.GetFormats(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFormats200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetLanguages

Get a list of supported languages

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Static.GetLanguages(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Languages != nil {
        // handle response
    }
}
```

## GetSwaggerYaml

Get Swagger YAML

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            MwoAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Static.GetSwaggerYaml(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSwaggerYaml200TextYamlString != nil {
        // handle response
    }
}
```
