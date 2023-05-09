# Qtl

### Available Operations

* [GETMappedQTLByPositionUsingGET](#getmappedqtlbypositionusingget) - Returns a list QTL for given position and assembly map
* [GETQTLByRgdIDUsingGET](#getqtlbyrgdidusingget) - Return a QTL for provided RGD ID
* [GETQtlListByPositionUsingGET](#getqtllistbypositionusingget) - Returns a list QTL for given position and assembly map

## GETMappedQTLByPositionUsingGET

Returns a list QTL for given position and assembly map

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
    res, err := s.Qtl.GETMappedQTLByPositionUsingGET(ctx, operations.GETMappedQTLByPositionUsingGETRequest{
        Chr: "laborum",
        MapKey: 96098,
        Start: 971945,
        Stop: 976460,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETQTLByRgdIDUsingGET

Return a QTL for provided RGD ID

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
    res, err := s.Qtl.GETQTLByRgdIDUsingGET(ctx, operations.GETQTLByRgdIDUsingGETRequest{
        RgdID: 878194,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GETQtlListByPositionUsingGET

Returns a list QTL for given position and assembly map

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
    res, err := s.Qtl.GETQtlListByPositionUsingGET(ctx, operations.GETQtlListByPositionUsingGETRequest{
        Chr: "nihil",
        MapKey: 509624,
        Start: 976762,
        Stop: 55714,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
