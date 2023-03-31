<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CreateUsageChargeRequest{
        RequestBody: operations.CreateUsageChargeRequestBody{
            UsageCharge: &operations.CreateUsageChargeRequestBodyUsageCharge{
                Description: "2019/4 メール送信分",
                Point: 100,
            },
        },
        XAppstoreUsageChargeToken: "corrupti",
        RecurringApplicationChargeID: "provident",
    }

    ctx := context.Background()
    res, err := s.ApplicationCharge.CreateUsageCharge(ctx, req, operations.CreateUsageChargeSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUsageCharge201ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->