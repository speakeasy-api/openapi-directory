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
    
    req := operations.BillDetailBillsJurisdictionSessionBillIDGetRequest{
        PathParams: operations.BillDetailBillsJurisdictionSessionBillIDGetPathParams{
            BillID: "sit",
            Jurisdiction: "voluptas",
            Session: "culpa",
        },
        QueryParams: operations.BillDetailBillsJurisdictionSessionBillIDGetQueryParams{
            Apikey: "expedita",
            Include: []shared.BillIncludeEnum{
                "versions",
                "versions",
                "votes",
            },
        },
        Headers: operations.BillDetailBillsJurisdictionSessionBillIDGetHeaders{
            XAPIKey: "fugit",
        },
    }
    
    res, err := s.Bills.BillDetailBillsJurisdictionSessionBillIDGet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Bill != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->