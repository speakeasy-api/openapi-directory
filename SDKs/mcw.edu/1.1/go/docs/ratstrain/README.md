# RatStrain

### Available Operations

* [GETAllStrainsUsingGET](#getallstrainsusingget) - Return all active strains in RGD
* [GETStrainByRgdIDUsingGET](#getstrainbyrgdidusingget) - Return a strain by RGD ID
* [GETStrainsByPositionUsingGET](#getstrainsbypositionusingget) - Return all active strains by position

## GETAllStrainsUsingGET

Return all active strains in RGD

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
    res, err := s.RatStrain.GETAllStrainsUsingGET(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStrainByRgdIDUsingGET

Return a strain by RGD ID

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
    res, err := s.RatStrain.GETStrainByRgdIDUsingGET(ctx, operations.GETStrainByRgdIDUsingGETRequest{
        RgdID: 441711,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETStrainsByPositionUsingGET

Return all active strains by position

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
    res, err := s.RatStrain.GETStrainsByPositionUsingGET(ctx, operations.GETStrainsByPositionUsingGETRequest{
        Chr: "ut",
        MapKey: 979587,
        Start: 120196,
        Stop: 359444,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
