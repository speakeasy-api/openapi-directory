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
    res, err := s.Organizations.SecuritycenterOrganizationsAssetsGroup(ctx, operations.SecuritycenterOrganizationsAssetsGroupRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GroupAssetsRequest: &shared.GroupAssetsRequest{
            CompareDuration: sdk.String("provident"),
            Filter: sdk.String("distinctio"),
            GroupBy: sdk.String("quibusdam"),
            PageSize: sdk.Int(602763),
            PageToken: sdk.String("nulla"),
            ReadTime: sdk.String("corrupti"),
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        Callback: sdk.String("error"),
        Fields: sdk.String("deserunt"),
        Key: sdk.String("suscipit"),
        OauthToken: sdk.String("iure"),
        Parent: "magnam",
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.SecuritycenterOrganizationsAssetsGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GroupAssetsResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->