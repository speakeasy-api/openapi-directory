# Validation

## Overview

Validation functions

### Available Operations

* [GetBadge](#getbadge) - Return a redirect to a badge svg file depending on a source definition's validity
* [Validate](#validate) - Validate an OpenAPI 3.0.x definition supplied in the body of the request
* [ValidateURL](#validateurl) - Validate an OpenAPI 3.0.x definition

## GetBadge

Return a redirect to a badge svg file depending on a source definition's validity

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
    res, err := s.Validation.GetBadge(ctx, operations.GetBadgeRequest{
        URL: "http://physical-pegboard.info",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Validate

Validate an OpenAPI 3.0.x definition supplied in the body of the request

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
    res, err := s.Validation.Validate(ctx, operations.ValidateRequestBody{
        Filename: sdk.String("iure"),
        Source: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidationResult != nil {
        // handle response
    }
}
```

## ValidateURL

Validate an OpenAPI 3.0.x definition

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
    res, err := s.Validation.ValidateURL(ctx, operations.ValidateURLRequest{
        URL: "https://awesome-voter.biz",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ValidationResult != nil {
        // handle response
    }
}
```
