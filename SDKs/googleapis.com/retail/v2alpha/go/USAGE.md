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
        GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput: &shared.GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2alphaCatalogAttributeInput{
                DynamicFacetableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnumDynamicFacetableEnabled.ToPointer(),
                ExactSearchableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnumExactSearchableDisabled.ToPointer(),
                FacetIntervals: []shared.GoogleCloudRetailV2alphaInterval{
                    shared.GoogleCloudRetailV2alphaInterval{
                        ExclusiveMaximum: sdk.Float64(6027.63),
                        ExclusiveMinimum: sdk.Float64(8579.46),
                        Maximum: sdk.Float64(5448.83),
                        Minimum: sdk.Float64(8472.52),
                    },
                    shared.GoogleCloudRetailV2alphaInterval{
                        ExclusiveMaximum: sdk.Float64(4236.55),
                        ExclusiveMinimum: sdk.Float64(6235.64),
                        Maximum: sdk.Float64(6458.94),
                        Minimum: sdk.Float64(3843.82),
                    },
                    shared.GoogleCloudRetailV2alphaInterval{
                        ExclusiveMaximum: sdk.Float64(4375.87),
                        ExclusiveMinimum: sdk.Float64(2975.34),
                        Maximum: sdk.Float64(8917.73),
                        Minimum: sdk.Float64(567.13),
                    },
                    shared.GoogleCloudRetailV2alphaInterval{
                        ExclusiveMaximum: sdk.Float64(9636.63),
                        ExclusiveMinimum: sdk.Float64(2726.56),
                        Maximum: sdk.Float64(3834.41),
                        Minimum: sdk.Float64(4776.65),
                    },
                },
                IgnoredFacetValues: []shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                    shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                        EndTime: sdk.String("placeat"),
                        StartTime: sdk.String("voluptatum"),
                        Values: []string{
                            "excepturi",
                            "nisi",
                        },
                    },
                    shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                        EndTime: sdk.String("recusandae"),
                        StartTime: sdk.String("temporibus"),
                        Values: []string{
                            "quis",
                        },
                    },
                    shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                        EndTime: sdk.String("veritatis"),
                        StartTime: sdk.String("deserunt"),
                        Values: []string{
                            "ipsam",
                        },
                    },
                    shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues{
                        EndTime: sdk.String("repellendus"),
                        StartTime: sdk.String("sapiente"),
                        Values: []string{
                            "odit",
                            "at",
                            "at",
                            "maiores",
                        },
                    },
                },
                IndexableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnumIndexableEnabled.ToPointer(),
                Key: sdk.String("quod"),
                RecommendationsFilteringOption: shared.GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnumRecommendationsFilteringEnabled.ToPointer(),
                RetrievableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnumRetrievableEnabled.ToPointer(),
                SearchableOption: shared.GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnumSearchableEnabled.ToPointer(),
            },
        },
        AccessToken: sdk.String("porro"),
        Alt: shared.AltEnumProto.ToPointer(),
        AttributesConfig: "dicta",
        Callback: sdk.String("nam"),
        Fields: sdk.String("officia"),
        Key: sdk.String("occaecati"),
        OauthToken: sdk.String("fugit"),
        PrettyPrint: sdk.Bool(false),
        QuotaUser: sdk.String("deleniti"),
        UploadType: sdk.String("hic"),
        UploadProtocol: sdk.String("optio"),
    }, operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        Oauth2c: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaAttributesConfig != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->