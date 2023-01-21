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
            RecurringApplicationChargeID: "sit",
        },
        Headers: operations.CreateUsageChargeHeaders{
            XAppstoreUsageChargeToken: "voluptas",
        },
        Request: operations.CreateUsageChargeRequestBody{
            UsageCharge: &operations.CreateUsageChargeRequestBodyUsageCharge{
                Description: "culpa",
                Point: 501233450539197794,
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