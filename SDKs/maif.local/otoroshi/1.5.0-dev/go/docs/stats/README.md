# Stats

## Overview

Everything about Otoroshi stats

### Available Operations

* [GlobalLiveStats](#globallivestats) - Get global otoroshi stats
* [ServiceLiveStats](#servicelivestats) - Get live feed of otoroshi stats

## GlobalLiveStats

Get global otoroshi stats

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
    res, err := s.Stats.GlobalLiveStats(ctx, operations.GlobalLiveStatsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Stats != nil {
        // handle response
    }
}
```

## ServiceLiveStats

Get live feed of global otoroshi stats (global) or for a service {id}

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
    res, err := s.Stats.ServiceLiveStats(ctx, operations.ServiceLiveStatsRequest{
        ID: "32648dc2-f615-4199-abfd-0e9fe6c632ca",
    }, operations.ServiceLiveStatsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Stats != nil {
        // handle response
    }
}
```
