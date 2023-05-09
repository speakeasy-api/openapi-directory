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
    res, err := s.Webfonts.WebfontsWebfontsList(ctx, operations.WebfontsWebfontsListRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        Capability: []WebfontsWebfontsListCapabilityEnum{
            operations.WebfontsWebfontsListCapabilityEnumVf,
            operations.WebfontsWebfontsListCapabilityEnumWoff2,
            operations.WebfontsWebfontsListCapabilityEnumVf,
        },
        Family: []string{
            "error",
            "deserunt",
        },
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        Sort: operations.WebfontsWebfontsListSortEnumSortUndefined.ToPointer(),
        Subset: sdk.String("delectus"),
        UploadType: sdk.String("tempora"),
        UploadProtocol: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebfontList != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->