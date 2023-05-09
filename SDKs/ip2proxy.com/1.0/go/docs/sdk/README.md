# SDK

## Overview

IP2Proxy allows instant detection of anonymous proxy, VPN, TOR exit nodes, search engine robots (SES), data center ranges (PX2-PX10), residential proxies (PX10) and VPN provider name (PX11) by IP address. It also returns the threat type of the proxy (PX9 or higher). Visit https://www.ip2location.com/web-service/ip2proxy for further information.

### Available Operations

* [Get](#get) - Check if an IP address is proxy

## Get

Check if an IP address is proxy

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
        Format: operations.GetFormatEnumXML.ToPointer(),
        IP: "nulla",
        Key: "corrupti",
        Package: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Get200TextHTMLString != nil {
        // handle response
    }
}
```
