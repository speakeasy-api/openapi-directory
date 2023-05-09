# SDK

## Overview

IP2WHOIS is a free tool to allow you to check WHOIS information for a particular domain, such as domain assigned owner contact information, registrar information, registrant information, location and much more.

### Available Operations

* [Get](#get) - Lookup WHOIS information

## Get

Lookup WHOIS information

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
    res, err := s.SDK.Get(ctx, operations.GetRequest{
        Domain: "quibusdam",
        Format: sdk.String("unde"),
        Key: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200TextHTMLString != nil {
        // handle response
    }
}
```
