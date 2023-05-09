# SDK

## Overview

The perfectpdf api does one thing, perfectly: it converts html to pdf. The perfectpdf api uses headless Google Chrome to provide a low cost, high quality, simple to use service.

<https://services.scideas.net/perfectpdf>
### Available Operations

* [PostPerfectpdfAPI](#postperfectpdfapi) - Returns PDF document.

## PostPerfectpdfAPI

Returns PDF document.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.SDK.PostPerfectpdfAPI(ctx, shared.PerfectpdfAPIBody{
        APIKey: "abc123",
        HTML: "<!doctype html><html><head><meta charset="UTF-8"><title>my title</title><script src="script.js"></script></head><body><div>My PDF</div></body></html>",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
