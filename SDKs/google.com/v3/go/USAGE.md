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

    req := operations.TravelpartnerAccountsAccountLinksCreateRequest{
        PathParams: operations.TravelpartnerAccountsAccountLinksCreatePathParams{
            Parent: "corrupti",
        },
        QueryParams: operations.TravelpartnerAccountsAccountLinksCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "distinctio",
            Alt: "proto",
            Callback: "unde",
            Fields: "nulla",
            Key: "corrupti",
            OauthToken: "illum",
            PrettyPrint: false,
            QuotaUser: "vel",
            UploadType: "error",
            UploadProtocol: "deserunt",
        },
        Request: &shared.AccountLink{
            AccountLinkTarget: &shared.AccountLinkTarget{
                AllHotels: false,
                HotelList: &shared.HotelList{
                    PartnerHotelIds: []string{
                        "iure",
                        "magnam",
                    },
                },
            },
            GoogleAdsCustomerName: "debitis",
            Name: "ipsa",
            Status: "APPROVED",
        },
    }

    ctx := context.Background()
    res, err := s.Accounts.TravelpartnerAccountsAccountLinksCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->