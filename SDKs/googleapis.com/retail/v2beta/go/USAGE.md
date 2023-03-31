<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest{
        DollarXgafv: "2",
        GoogleCloudRetailV2betaAddCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2betaAddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2betaCatalogAttributeInput{
                DynamicFacetableOption: "DYNAMIC_FACETABLE_ENABLED",
                ExactSearchableOption: "EXACT_SEARCHABLE_DISABLED",
                IndexableOption: "INDEXABLE_DISABLED",
                Key: "unde",
                RecommendationsFilteringOption: "RECOMMENDATIONS_FILTERING_ENABLED",
                RetrievableOption: "RETRIEVABLE_ENABLED",
                SearchableOption: "SEARCHABLE_DISABLED",
            },
        },
        AccessToken: "vel",
        Alt: "media",
        AttributesConfig: "deserunt",
        Callback: "suscipit",
        Fields: "iure",
        Key: "magnam",
        OauthToken: "debitis",
        PrettyPrint: false,
        QuotaUser: "ipsa",
        UploadType: "delectus",
        UploadProtocol: "tempora",
    }

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(ctx, req, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
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