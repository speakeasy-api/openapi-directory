# ApplicationDetailService

### Available Operations

* [TestingApplicationDetailServiceGetApkDetails](#testingapplicationdetailservicegetapkdetails) - Gets the details of an Android application APK.

## TestingApplicationDetailServiceGetApkDetails

Gets the details of an Android application APK.

### Example Usage

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
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        FileReference: &shared.FileReference{
            GcsPath: sdk.String("iure"),
        },
        AccessToken: sdk.String("magnam"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("ipsa"),
        Fields: sdk.String("delectus"),
        Key: sdk.String("tempora"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("molestiae"),
        UploadType: sdk.String("minus"),
        UploadProtocol: sdk.String("placeat"),
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
