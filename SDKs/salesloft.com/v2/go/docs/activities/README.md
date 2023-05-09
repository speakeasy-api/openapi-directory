# Activities

## Overview

Activities

### Available Operations

* [PostV2ActivitiesJSON](#postv2activitiesjson) - Create an activity

## PostV2ActivitiesJSON

Creates an activity. An activity will mark the associated action as completed. Currently,
only certain action types can have an activity explicitly created for them.


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
    res, err := s.Activities.PostV2ActivitiesJSON(ctx, operations.PostV2ActivitiesJSONRequestBody{
        ActionID: sdk.Int64(770581),
        TaskID: sdk.Int64(304582),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
