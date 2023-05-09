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
    res, err := s.Projects.CloudassetProjectsBatchGetAssetsHistory(ctx, operations.CloudassetProjectsBatchGetAssetsHistoryRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        AssetNames: []string{
            "unde",
            "nulla",
            "corrupti",
            "illum",
        },
        Callback: sdk.String("vel"),
        ContentType: operations.CloudassetProjectsBatchGetAssetsHistoryContentTypeEnumResource.ToPointer(),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("iure"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        ReadTimeWindowEndTime: sdk.String("ipsa"),
        ReadTimeWindowStartTime: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    }, operations.CloudassetProjectsBatchGetAssetsHistorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetAssetsHistoryResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->