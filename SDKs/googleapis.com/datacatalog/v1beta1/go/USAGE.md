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
    res, err := s.Catalog.DatacatalogCatalogSearch(ctx, operations.DatacatalogCatalogSearchRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudDatacatalogV1beta1SearchCatalogRequest: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequest{
            OrderBy: sdk.String("provident"),
            PageSize: sdk.Int(715190),
            PageToken: sdk.String("quibusdam"),
            Query: sdk.String("unde"),
            Scope: &shared.GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope{
                IncludeGcpPublicDatasets: sdk.Bool(false),
                IncludeOrgIds: []string{
                    "corrupti",
                    "illum",
                    "vel",
                    "error",
                },
                IncludeProjectIds: []string{
                    "suscipit",
                    "iure",
                    "magnam",
                },
                RestrictedLocations: []string{
                    "ipsa",
                    "delectus",
                    "tempora",
                    "suscipit",
                },
            },
        },
        AccessToken: sdk.String("molestiae"),
        Alt: shared.AltEnumProto.ToPointer(),
        Callback: sdk.String("placeat"),
        Fields: sdk.String("voluptatum"),
        Key: sdk.String("iusto"),
        OauthToken: sdk.String("excepturi"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("nisi"),
        UploadType: sdk.String("recusandae"),
        UploadProtocol: sdk.String("temporibus"),
    }, operations.DatacatalogCatalogSearchSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudDatacatalogV1beta1SearchCatalogResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->