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
            BillID: "aut",
            Jurisdiction: "earum",
            Session: "omnis",
        },
        QueryParams: operations.BillDetailBillsJurisdictionSessionBillIDGetQueryParams{
            Apikey: "minima",
            Include: []shared.BillIncludeEnum{
                "versions",
                "sponsorships",
                "votes",
            },
        },
        Headers: operations.BillDetailBillsJurisdictionSessionBillIDGetHeaders{
            XAPIKey: "et",
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