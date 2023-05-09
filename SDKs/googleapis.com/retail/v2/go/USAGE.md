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
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(ctx, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest{
        DollarXgafv: shared.XgafvEnumTwo.ToPointer(),
        GoogleCloudRetailV2AddCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2AddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2CatalogAttributeInput{
                DynamicFacetableOption: shared.GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled.ToPointer(),
                ExactSearchableOption: shared.GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnumExactSearchableDisabled.ToPointer(),
                IndexableOption: shared.GoogleCloudRetailV2CatalogAttributeIndexableOptionEnumIndexableDisabled.ToPointer(),
                Key: sdk.String("unde"),
                RetrievableOption: shared.GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnumRetrievableDisabled.ToPointer(),
                SearchableOption: shared.GoogleCloudRetailV2CatalogAttributeSearchableOptionEnumSearchableEnabled.ToPointer(),
            },
        },
        AccessToken: sdk.String("illum"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AttributesConfig: "error",
        Callback: sdk.String("deserunt"),
        Fields: sdk.String("suscipit"),
        Key: sdk.String("iure"),
        OauthToken: sdk.String("magnam"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("debitis"),
        UploadType: sdk.String("ipsa"),
        UploadProtocol: sdk.String("delectus"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2AttributesConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->