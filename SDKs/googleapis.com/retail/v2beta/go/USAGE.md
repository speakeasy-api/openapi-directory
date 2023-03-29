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
        Security: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams{
            AttributesConfig: "unde",
        },
        QueryParams: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams{
            DollarXgafv: "2",
            AccessToken: "porro",
            Alt: "proto",
            Callback: "id",
            Fields: "vero",
            Key: "perspiciatis",
            OauthToken: "nulla",
            PrettyPrint: false,
            QuotaUser: "nihil",
            UploadType: "fuga",
            UploadProtocol: "facilis",
        },
        Request: &shared.GoogleCloudRetailV2betaAddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2betaCatalogAttributeInput{
                DynamicFacetableOption: "DYNAMIC_FACETABLE_ENABLED",
                ExactSearchableOption: "EXACT_SEARCHABLE_ENABLED",
                IndexableOption: "INDEXABLE_OPTION_UNSPECIFIED",
                Key: "saepe",
                RecommendationsFilteringOption: "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED",
                RetrievableOption: "RETRIEVABLE_DISABLED",
                SearchableOption: "SEARCHABLE_OPTION_UNSPECIFIED",
            },
        },
    }

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2betaAttributesConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->