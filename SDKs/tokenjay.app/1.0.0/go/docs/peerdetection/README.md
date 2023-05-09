# PeerDetection

## Overview

Detecting nodes to use for submitting transactions

### Available Operations

* [GetPeersList](#getpeerslist) - Lists known peers sorted by block height

## GetPeersList

Lists known peers sorted by block height

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
    res, err := s.PeerDetection.GetPeersList(ctx, operations.GetPeersListRequest{
        ClosedAPI: sdk.Bool(false),
        Limit: sdk.Int(681820),
        Unreachable: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
