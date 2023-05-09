# Sslp

## Overview

SSLP Web Service

### Available Operations

* [GETMappedSSLPByPositionUsingGET](#getmappedsslpbypositionusingget) - Returns a list SSLP for given position and assembly map

## GETMappedSSLPByPositionUsingGET

Returns a list SSLP for given position and assembly map

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
    res, err := s.Sslp.GETMappedSSLPByPositionUsingGET(ctx, operations.GETMappedSSLPByPositionUsingGETRequest{
        Chr: "dolore",
        MapKey: 480894,
        Start: 118727,
        Stop: 688661,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
