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
    res, err := s.BillingAccounts.CloudbillingBillingAccountsCreate(ctx, operations.CloudbillingBillingAccountsCreateRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BillingAccountInput: &shared.BillingAccountInput{
            DisplayName: sdk.String("provident"),
            MasterBillingAccount: sdk.String("distinctio"),
        },
        AccessToken: sdk.String("quibusdam"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("nulla"),
        Fields: sdk.String("corrupti"),
        Key: sdk.String("illum"),
        OauthToken: sdk.String("vel"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("error"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.CloudbillingBillingAccountsCreateSecurity{
        Option1: &operations.CloudbillingBillingAccountsCreateSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BillingAccount != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->