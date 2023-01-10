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
            RecurringApplicationChargeID: "a",
        },
        Headers: operations.CreateUsageChargeHeaders{
            XAppstoreUsageChargeToken: "eveniet",
        },
        Request: operations.CreateUsageChargeRequestBody{
            UsageCharge: &operations.CreateUsageChargeRequestBodyUsageCharge{
                Description: "similique",
                Point: 7913887709946499438,
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