# RequestTag

## Overview

An example tag

Here's a link
<https://example.com>
### Available Operations

* [GetApod](#getapod) - Returns images

## GetApod

Returns the picture of the day

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
    res, err := s.RequestTag.GetApod(ctx, operations.GetApodRequest{
        Date: sdk.String("provident"),
        Hd: sdk.Bool(false),
    }, operations.GetApodSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApod200ApplicationJSONAnies != nil {
        // handle response
    }
}
```
