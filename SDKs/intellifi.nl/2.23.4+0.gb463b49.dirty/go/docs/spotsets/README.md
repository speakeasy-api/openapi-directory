# Spotsets

## Overview

The `spotsets` resource contains a collection of set definitons for each Smartspot and allows for remote mananagement.
Spotsets are stored and used on the Smartspot locally and synced between Smartspot and server.
Spotsets primarly are used as an input for Sense&Control.


<https://intellifi.zendesk.com/hc/en-us/articles/360009282834>
### Available Operations

* [GetSpotsets](#getspotsets) - Get spotsets
* [GetSpotsetsID](#getspotsetsid) - Get spotset
* [PostSpotsets](#postspotsets) - Create spotset
* [PutSpotsetsID](#putspotsetsid) - Update existing spotset

## GetSpotsets

Get spotsets

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
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spotsets.GetSpotsets(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.SpotSet != nil {
        // handle response
    }
}
```

## GetSpotsetsID

Get spotset

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spotsets.GetSpotsetsID(ctx, operations.GetSpotsetsIDRequest{
        ID: "e96349e1-cf9e-406e-ba43-7000ae6b6bc9",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SpotSet != nil {
        // handle response
    }
}
```

## PostSpotsets

Create spotset

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spotsets.PostSpotsets(ctx, shared.SpotSetCreate{})
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```

## PutSpotsetsID

Update existing spotset

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            CookieSid: sdk.String("YOUR_API_KEY_HERE"),
        }),
    )

    ctx := context.Background()
    res, err := s.Spotsets.PutSpotsetsID(ctx, operations.PutSpotsetsIDRequest{
        SpotSetUpdate: shared.SpotSetUpdate{
            Delete: sdk.Bool(false),
        },
        ID: "b8f759ea-c55a-4974-9d31-1352965bb8a7",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ResponseDefaultResource != nil {
        // handle response
    }
}
```
