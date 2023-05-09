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
    res, err := s.Organizations.KmsinventoryOrganizationsProtectedResourcesSearch(ctx, operations.KmsinventoryOrganizationsProtectedResourcesSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        AccessToken: sdk.String("provident"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("quibusdam"),
        CryptoKey: sdk.String("unde"),
        Fields: sdk.String("nulla"),
        Key: sdk.String("corrupti"),
        OauthToken: sdk.String("illum"),
        PageSize: sdk.Int64(423655),
        PageToken: sdk.String("error"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deserunt"),
        Scope: "suscipit",
        UploadType: sdk.String("iure"),
        UploadProtocol: sdk.String("magnam"),
    }, operations.KmsinventoryOrganizationsProtectedResourcesSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudKmsInventoryV1SearchProtectedResourcesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->