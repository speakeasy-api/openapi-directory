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
    res, err := s.ApplicationDetailService.TestingApplicationDetailServiceGetApkDetails(ctx, operations.TestingApplicationDetailServiceGetApkDetailsRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        FileReference: &shared.FileReference{
            GcsPath: sdk.String("provident"),
        },
        AccessToken: sdk.String("distinctio"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("vel"),
        UploadType: sdk.String("error"),
        UploadProtocol: sdk.String("deserunt"),
    }, operations.TestingApplicationDetailServiceGetApkDetailsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetApkDetailsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->