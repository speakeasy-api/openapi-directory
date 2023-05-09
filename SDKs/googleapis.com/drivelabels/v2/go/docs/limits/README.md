# Limits

### Available Operations

* [DrivelabelsLimitsGetLabel](#drivelabelslimitsgetlabel) - Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

## DrivelabelsLimitsGetLabel

Get the constraints on the structure of a Label; such as, the maximum number of Fields allowed and maximum length of the label title.

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
    res, err := s.Limits.DrivelabelsLimitsGetLabel(ctx, operations.DrivelabelsLimitsGetLabelRequest{
        DollarXgafv: shared.XgafvEnumOne.ToPointer(),
        AccessToken: sdk.String("quod"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("a"),
        Fields: sdk.String("quisquam"),
        Key: sdk.String("enim"),
        Name: sdk.String("Mr. Kristopher Torphy"),
        OauthToken: sdk.String("ipsa"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nobis"),
        UploadType: sdk.String("necessitatibus"),
        UploadProtocol: sdk.String("quia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleAppsDriveLabelsV2LabelLimits != nil {
        // handle response
    }
}
```
