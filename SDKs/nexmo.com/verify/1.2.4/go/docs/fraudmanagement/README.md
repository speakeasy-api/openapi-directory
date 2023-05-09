# FraudManagement

## Overview

Fraud Management

### Available Operations

* [NetworkUnblock](#networkunblock) - Request a network unblock

## NetworkUnblock

Request to unblock a network that has been blocked due to potential fraud detection
<div class="Vlt-callout Vlt-callout--critical">
  <div class="Vlt-callout__content">
    <h4>Network Unblock is switched off by default.</h4>
    Please contact Sales to enable the Network Unblock API for your account.
  </div>
</div>

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
    res, err := s.FraudManagement.NetworkUnblock(ctx, shared.NetworkUnblock{
        Network: sdk.String("32526"),
        UnblockDuration: sdk.Int64(3600),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NetworkUnblockResponseOk != nil {
        // handle response
    }
}
```
