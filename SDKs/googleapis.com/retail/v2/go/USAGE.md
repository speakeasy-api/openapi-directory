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
        GoogleCloudRetailV2AddCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2AddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2CatalogAttributeInput{
                DynamicFacetableOption: "DYNAMIC_FACETABLE_ENABLED",
                ExactSearchableOption: "EXACT_SEARCHABLE_DISABLED",
                IndexableOption: "INDEXABLE_DISABLED",
                Key: "unde",
                RetrievableOption: "RETRIEVABLE_DISABLED",
                SearchableOption: "SEARCHABLE_ENABLED",
            },
        },
        AccessToken: "illum",
        Alt: "media",
        AttributesConfig: "error",
        Callback: "deserunt",
        Fields: "suscipit",
        Key: "iure",
        OauthToken: "magnam",
        PrettyPrint: false,
        QuotaUser: "debitis",
        UploadType: "ipsa",
        UploadProtocol: "delectus",
    }

    ctx := context.Background()
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(ctx, req, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
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