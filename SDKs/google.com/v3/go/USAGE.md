<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Accounts.TravelpartnerAccountsAccountLinksCreate(ctx, operations.TravelpartnerAccountsAccountLinksCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccountLink: &shared.AccountLink{
            AccountLinkTarget: &shared.AccountLinkTarget{
                AllHotels: sdk.Bool(false),
                HotelList: &shared.HotelList{
                    PartnerHotelIds: []string{
                        "distinctio",
                        "quibusdam",
                        "unde",
                    },
                },
            },
            GoogleAdsCustomerName: sdk.String("nulla"),
            Name: sdk.String("Dallas Kassulke"),
            Status: shared.AccountLinkStatusEnumAccountLinkStatusUnknown.ToPointer(),
        },
        AccessToken: sdk.String("iure"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("debitis"),
        Fields: sdk.String("ipsa"),
        Key: sdk.String("delectus"),
        OauthToken: sdk.String("tempora"),
        Parent: "suscipit",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountLink != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->