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
        GoogleCloudRetailV2betaAddCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2betaAddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2betaCatalogAttributeInput{
                DynamicFacetableOption: shared.GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled.ToPointer(),
                ExactSearchableOption: shared.GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnumExactSearchableDisabled.ToPointer(),
                IndexableOption: shared.GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnumIndexableDisabled.ToPointer(),
                Key: sdk.String("unde"),
                RecommendationsFilteringOption: shared.GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringEnabled.ToPointer(),
                RetrievableOption: shared.GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnumRetrievableEnabled.ToPointer(),
                SearchableOption: shared.GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnumSearchableDisabled.ToPointer(),
            },
        },
        AccessToken: sdk.String("vel"),
        Alt: shared.AltEnumMedia.ToPointer(),
        AttributesConfig: "deserunt",
        Callback: sdk.String("suscipit"),
        Fields: sdk.String("iure"),
        Key: sdk.String("magnam"),
        OauthToken: sdk.String("debitis"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("ipsa"),
        UploadType: sdk.String("delectus"),
        UploadProtocol: sdk.String("tempora"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaAttributesConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->