# OngoingActions

## Overview

Ongoing Actions

### Available Operations

* [PostV2OngoingActionsJSON](#postv2ongoingactionsjson) - Create an ongoing action

## PostV2OngoingActionsJSON

Creates an ongoing action. An ongoing action is an action that is not yet completed,
but progress has been made towards the completion. The user should not need to do
anything for an ongoing action to be completed. An ongoing action can be later completed
by creating an activity.

Ongoing actions are marked as status=pending_activity.


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
    res, err := s.OngoingActions.PostV2OngoingActionsJSON(ctx, operations.PostV2OngoingActionsJSONRequestBody{
        ActionID: sdk.Int64(564667),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
