# MimeEmailPayloads

## Overview

MIME content for email

### Available Operations

* [GetV2MimeEmailPayloadsIDJSON](#getv2mimeemailpayloadsidjson) - Fetch the MIME content for email

## GetV2MimeEmailPayloadsIDJSON

Fetch the MIME content for email.


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
    res, err := s.MimeEmailPayloads.GetV2MimeEmailPayloadsIDJSON(ctx, operations.GetV2MimeEmailPayloadsIDJSONRequest{
        ID: "5b85efbd-02ba-4e0b-a2d7-82259e3ea4b5",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
