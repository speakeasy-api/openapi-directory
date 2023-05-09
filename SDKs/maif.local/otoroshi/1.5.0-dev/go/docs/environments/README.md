# Environments

## Overview

Everything about Otoroshi Environments

### Available Operations

* [AllLines](#alllines) - Get all environments
* [ServicesForALine](#servicesforaline) - Get all services for an environment

## AllLines

Get all environments provided by the current Otoroshi instance

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
    res, err := s.Environments.AllLines(ctx, operations.AllLinesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Environment != nil {
        // handle response
    }
}
```

## ServicesForALine

Get all services for an environment provided by the current Otoroshi instance

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
    res, err := s.Environments.ServicesForALine(ctx, operations.ServicesForALineRequest{
        Line: "quasi",
    }, operations.ServicesForALineSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Services != nil {
        // handle response
    }
}
```
