# SwaggerDoc

## Overview

Operations about swagger_docs

### Available Operations

* [GETSwaggerDocFormat](#getswaggerdocformat) - Swagger compatible API description
* [GETSwaggerDocNameFormat](#getswaggerdocnameformat) - Swagger compatible API description for specific API

## GETSwaggerDocFormat

Swagger compatible API description

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SwaggerDoc.GETSwaggerDocFormat(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GETSwaggerDocNameFormat

Swagger compatible API description for specific API

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
    res, err := s.SwaggerDoc.GETSwaggerDocNameFormat(ctx, operations.GETSwaggerDocNameFormatRequest{
        Name: "Stuart Stiedemann",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
