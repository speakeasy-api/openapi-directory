# SDK

## Overview

API for OpenAQ LCS

### Available Operations

* [FavicoFaviconIcoGet](#favicofaviconicoget) - Favico
* [PongPingGet](#pongpingget) - Pong

## FavicoFaviconIcoGet

Favico

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
    res, err := s.SDK.FavicoFaviconIcoGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.FavicoFaviconIcoGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```

## PongPingGet

Sanity check.
This will let the user know that the service is operational.
And this path operation will:
* show a lifesign

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
    res, err := s.SDK.PongPingGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PongPingGet200ApplicationJSONAny != nil {
        // handle response
    }
}
```
