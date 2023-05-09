# StreamAudio

## Overview

Start or stop streaming audio in to an active call

### Available Operations

* [StartStream](#startstream) - Play an audio file into a call
* [StopStream](#stopstream) - Stop playing an audio file into a call

## StartStream

Play an audio file into a call

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
    res, err := s.StreamAudio.StartStream(ctx, operations.StartStreamRequest{
        StartStreamRequest: shared.StartStreamRequest{
            Level: sdk.String("0.4"),
            Loop: sdk.Int64(414263),
            StreamURL: []string{
                "quae",
                "ipsum",
                "quidem",
                "molestias",
            },
        },
        UUID: "9d488e1e-91e4-450a-92ab-d44269802d50",
    }, operations.StartStreamSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartStreamResponse != nil {
        // handle response
    }
}
```

## StopStream

Stop playing an audio file into a call

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
    res, err := s.StreamAudio.StopStream(ctx, operations.StopStreamRequest{
        UUID: "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
    }, operations.StopStreamSecurity{
        BearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopStreamResponse != nil {
        // handle response
    }
}
```
