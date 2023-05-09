# HistoricalData

## Overview

API operations to get historical data.

### Available Operations

* [GetHistory](#gethistory) - Gets historical data for a specific group, application or service.

## GetHistory

Gets the historical data for a specific group, application or service, for a given period.<br><br>If a parent ID (group ID, application ID, or service ID) is provided, the function narrows down the devices list to those attached to the specified parent:<br>- use the <b>hardware/groups</b> service in the <b>Groups</b> section to get all available group IDs.<br>- use the <b>hardware/applications</b> service in the <b>Applications</b> section to get all available application IDs.<br>- use the <b>hardware/services</b> service in the <b>Services</b> section to get all available service IDs.<br><br><b>Note</b>: At most, one parent ID is taken into account according to this order of precedence:<ol><li>group ID</li><li>application ID</li><li>service ID</li></ol>

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
    res, err := s.HistoricalData.GetHistory(ctx, operations.GetHistoryRequest{
        ApplicationID: sdk.String("ipsum"),
        From: sdk.Int64(568434),
        GroupID: sdk.String("aspernatur"),
        ServiceID: sdk.String("perferendis"),
        To: sdk.Int64(324141),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
