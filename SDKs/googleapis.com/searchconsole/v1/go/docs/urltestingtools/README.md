# URLTestingTools

### Available Operations

* [SearchconsoleURLTestingToolsMobileFriendlyTestRun](#searchconsoleurltestingtoolsmobilefriendlytestrun) - Runs Mobile-Friendly Test for a given URL.

## SearchconsoleURLTestingToolsMobileFriendlyTestRun

Runs Mobile-Friendly Test for a given URL.

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
    res, err := s.URLTestingTools.SearchconsoleURLTestingToolsMobileFriendlyTestRun(ctx, operations.SearchconsoleURLTestingToolsMobileFriendlyTestRunRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        RunMobileFriendlyTestRequest: &shared.RunMobileFriendlyTestRequest{
            RequestScreenshot: sdk.Bool(false),
            URL: sdk.String("quidem"),
        },
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("id"),
        Fields: sdk.String("blanditiis"),
        Key: sdk.String("deleniti"),
        OauthToken: sdk.String("sapiente"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("amet"),
        UploadType: sdk.String("deserunt"),
        UploadProtocol: sdk.String("nisi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RunMobileFriendlyTestResponse != nil {
        // handle response
    }
}
```
