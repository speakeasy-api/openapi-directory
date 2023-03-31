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
        DollarXgafv: "2",
        AccountLink: &shared.AccountLink{
            AccountLinkTarget: &shared.AccountLinkTarget{
                AllHotels: false,
                HotelList: &shared.HotelList{
                    PartnerHotelIds: []string{
                        "distinctio",
                        "quibusdam",
                        "unde",
                    },
                },
            },
            GoogleAdsCustomerName: "nulla",
            Name: "corrupti",
            Status: "APPROVED",
        },
        AccessToken: "vel",
        Alt: "media",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        Parent: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
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