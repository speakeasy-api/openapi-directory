# PlayDTMF

## Overview

Play DTMF tones in to an active call

### Available Operations

* [StartDTMF](#startdtmf) - Play DTMF tones into a call

## StartDTMF

Play DTMF tones into a call

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
    res, err := s.PlayDTMF.StartDTMF(ctx, operations.StartDTMFRequest{
        DTMFRequest: shared.DTMFRequest{
            Digits: sdk.String("1713"),
        },
        UUID: "39205929-396f-4ea7-996e-b10faaa2352c",
    }, operations.StartDTMFSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DTMFResponse != nil {
        // handle response
    }
}
```
