<!-- Start SDK Example Usage -->
```go
package main

import (
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
            AttributesConfig: "sit",
        },
        QueryParams: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams{
            DollarXgafv: "1",
            AccessToken: "culpa",
            Alt: "media",
            Callback: "consequuntur",
            Fields: "dolor",
            Key: "expedita",
            OauthToken: "voluptas",
            PrettyPrint: true,
            QuotaUser: "et",
            UploadType: "nihil",
            UploadProtocol: "rerum",
        },
        Request: &shared.GoogleCloudRetailV2AddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2CatalogAttributeInput{
                DynamicFacetableOption: "DYNAMIC_FACETABLE_DISABLED",
                ExactSearchableOption: "EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
                IndexableOption: "INDEXABLE_OPTION_UNSPECIFIED",
                Key: "et",
                RetrievableOption: "RETRIEVABLE_DISABLED",
                SearchableOption: "SEARCHABLE_DISABLED",
            },
        },
    }
    
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2AttributesConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->