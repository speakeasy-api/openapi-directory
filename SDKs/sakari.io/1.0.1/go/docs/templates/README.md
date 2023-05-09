# Templates

## Overview

Define reusable message or web templates

### Available Operations

* [TemplatesCreate](#templatescreate) - Create template
* [TemplatesFetch](#templatesfetch) - Fetch template by ID
* [TemplatesFetchAll](#templatesfetchall) - Fetch templates
* [TemplatesRemove](#templatesremove) - Deletes a template
* [TemplatesUpdate](#templatesupdate) - Updates a template

## TemplatesCreate

Create template

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
    res, err := s.Templates.TemplatesCreate(ctx, operations.TemplatesCreateRequest{
        TemplateRequest: &shared.TemplateRequest{
            Name: sdk.String("Victor Casper"),
            Template: sdk.String("Hi {{{firstName}}}. Grab 20% off today only at ABC Shoes"),
            Type: shared.TemplateRequestTypeEnumSms.ToPointer(),
        },
        AccountID: "pariatur",
    }, operations.TemplatesCreateSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TemplatesResponse != nil {
        // handle response
    }
}
```

## TemplatesFetch

Fetch template by ID

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
    res, err := s.Templates.TemplatesFetch(ctx, operations.TemplatesFetchRequest{
        AccountID: "maxime",
        TemplateID: "ea",
    }, operations.TemplatesFetchSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TemplateResponse != nil {
        // handle response
    }
}
```

## TemplatesFetchAll

Fetch templates

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
    res, err := s.Templates.TemplatesFetchAll(ctx, operations.TemplatesFetchAllRequest{
        AccountID: "excepturi",
        Limit: sdk.Int64(139972),
        Name: sdk.String("Donna Bernhard"),
        Offset: sdk.Int64(373291),
    }, operations.TemplatesFetchAllSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TemplatesResponse != nil {
        // handle response
    }
}
```

## TemplatesRemove

Deletes a template

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
    res, err := s.Templates.TemplatesRemove(ctx, operations.TemplatesRemoveRequest{
        AccountID: "voluptate",
        TemplateID: "autem",
    }, operations.TemplatesRemoveSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TemplatesRemove200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TemplatesUpdate

Updates a template

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
    res, err := s.Templates.TemplatesUpdate(ctx, operations.TemplatesUpdateRequest{
        AccountID: "nam",
        TemplateID: "eaque",
    }, operations.TemplatesUpdateSecurity{
        SakariAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TemplateResponse != nil {
        // handle response
    }
}
```
