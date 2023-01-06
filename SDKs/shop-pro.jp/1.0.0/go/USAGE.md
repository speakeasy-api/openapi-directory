<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CreateUsageChargeRequest{
        Security: operations.CreateUsageChargeSecurity{
            OAuth2: shared.SchemeOAuth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CreateUsageChargePathParams{
            RecurringApplicationChargeID: "est",
        },
        Headers: operations.CreateUsageChargeHeaders{
            XAppstoreUsageChargeToken: "at",
        },
        Request: operations.CreateUsageChargeRequestBody{
            UsageCharge: &operations.CreateUsageChargeRequestBodyUsageCharge{
                Description: "sed",
                Point: 4881243859244798930,
            },
        },
    }
    
    res, err := s.ApplicationCharge.CreateUsageCharge(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateUsageCharge201ApplicationJSONObject != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->