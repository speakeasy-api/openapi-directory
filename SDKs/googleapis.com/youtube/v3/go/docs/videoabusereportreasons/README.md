# VideoAbuseReportReasons

### Available Operations

* [YoutubeVideoAbuseReportReasonsList](#youtubevideoabusereportreasonslist) - Retrieves a list of resources, possibly filtered.

## YoutubeVideoAbuseReportReasonsList

Retrieves a list of resources, possibly filtered.

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
    res, err := s.VideoAbuseReportReasons.YoutubeVideoAbuseReportReasonsList(ctx, operations.YoutubeVideoAbuseReportReasonsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumJSON.ToPointer(),
        Callback: sdk.String("sint"),
        Fields: sdk.String("aperiam"),
        Hl: sdk.String("eaque"),
        Key: sdk.String("eum"),
        OauthToken: sdk.String("laboriosam"),
        Part: []string{
            "autem",
            "assumenda",
            "explicabo",
        },
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("fugiat"),
        UploadType: sdk.String("doloremque"),
        UploadProtocol: sdk.String("voluptatem"),
    }, operations.YoutubeVideoAbuseReportReasonsListSecurity{
        Option1: &operations.YoutubeVideoAbuseReportReasonsListSecurityOption1{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
            Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.VideoAbuseReportReasonListResponse != nil {
        // handle response
    }
}
```
