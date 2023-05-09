# Member

## Overview

Memberships connect users with conversations. Each membership has one conversation and one user however a user can have many memberships to conversations just as conversations can have many members.

### Available Operations

* [GetMembers](#getmembers) - List Members

## GetMembers

List Members

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
    res, err := s.Member.GetMembers(ctx, operations.GetMembersRequest{
        ConversationID: "suscipit",
        Cursor: sdk.String("molestiae"),
        Order: shared.OrderEnumDesc.ToPointer(),
        PageSize: sdk.Int64(812169),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMembers200ApplicationJSONObject != nil {
        // handle response
    }
}
```
