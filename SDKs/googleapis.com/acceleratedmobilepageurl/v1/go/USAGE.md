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
    res, err := s.AmpUrls.AcceleratedmobilepageurlAmpUrlsBatchGet(ctx, operations.AcceleratedmobilepageurlAmpUrlsBatchGetRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        BatchGetAmpUrlsRequest: &shared.BatchGetAmpUrlsRequest{
            LookupStrategy: shared.BatchGetAmpUrlsRequestLookupStrategyEnumInIndexDoc.ToPointer(),
            Urls: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
        },
        AccessToken: sdk.String("corrupti"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("vel"),
        Fields: sdk.String("error"),
        Key: sdk.String("deserunt"),
        OauthToken: sdk.String("suscipit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("iure"),
        UploadType: sdk.String("magnam"),
        UploadProtocol: sdk.String("debitis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAmpUrlsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->