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
            Parent: "unde",
        },
        QueryParams: operations.TravelpartnerAccountsAccountLinksCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.AccountLink{
            AccountLinkTarget: &shared.AccountLinkTarget{
                AllHotels: false,
                HotelList: &shared.HotelList{
                    PartnerHotelIds: []string{
                        "iusto",
                        "ullam",
                    },
                },
            },
            GoogleAdsCustomerName: "saepe",
            Name: "inventore",
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