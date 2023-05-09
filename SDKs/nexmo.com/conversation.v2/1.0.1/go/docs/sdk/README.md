# SDK

## Overview

The Conversation API enables you to build conversation features where communication can take place across multiple mediums including IP Messaging, PSTN Voice, SMS and WebRTC Audio and Video. The context of the conversations is maintained though each communication event taking place within a conversation, no matter the medium.

### Available Operations

* [GetUsers](#getusers) - List Users

## GetUsers

List Users

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
    res, err := s.SDK.GetUsers(ctx, operations.GetUsersRequest{
        Cursor: sdk.String("quibusdam"),
        Order: shared.OrderEnumDesc.ToPointer(),
        PageSize: sdk.Int64(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetUsers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
