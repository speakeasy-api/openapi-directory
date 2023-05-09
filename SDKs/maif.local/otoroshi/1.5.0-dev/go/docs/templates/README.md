# Templates

## Overview

Everything about Otoroshi entities templates

### Available Operations

* [InitiateAPIKey](#initiateapikey) - Get a template of an Otoroshi Api Key
* [InitiateService](#initiateservice) - Get a template of an Otoroshi service descriptor
* [InitiateServiceGroup](#initiateservicegroup) - Get a template of an Otoroshi service group

## InitiateAPIKey

Get a template of an Otoroshi Api Key. The generated entity is not persisted

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
    res, err := s.Templates.InitiateAPIKey(ctx, operations.InitiateAPIKeySecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APIKey != nil {
        // handle response
    }
}
```

## InitiateService

Get a template of an Otoroshi service descriptor. The generated entity is not persisted

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
    res, err := s.Templates.InitiateService(ctx, operations.InitiateServiceSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Service != nil {
        // handle response
    }
}
```

## InitiateServiceGroup

Get a template of an Otoroshi service group. The generated entity is not persisted

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
    res, err := s.Templates.InitiateServiceGroup(ctx, operations.InitiateServiceGroupSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Group != nil {
        // handle response
    }
}
```
