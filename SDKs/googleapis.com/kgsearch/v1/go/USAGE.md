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
    res, err := s.Entities.KgsearchEntitiesSearch(ctx, operations.KgsearchEntitiesSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Ids: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Indent: sdk.Bool(false),
        Key: sdk.String("deserunt"),
        Languages: []string{
            "iure",
            "magnam",
        },
        Limit: sdk.Int64(891773),
        OauthToken: sdk.String("ipsa"),
        Prefix: sdk.Bool(false),
        PrettyPrint: sdk.Bool(false),
        Query: sdk.String("delectus"),
        QuotaUser: sdk.String("tempora"),
        Types: []string{
            "molestiae",
            "minus",
        },
        UploadType: sdk.String("placeat"),
        UploadProtocol: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SearchResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->