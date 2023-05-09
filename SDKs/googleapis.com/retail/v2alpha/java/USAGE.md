<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2alphaAddCatalogAttributeRequestInput = new GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2alphaCatalogAttributeInput() {{
                        dynamicFacetableOption = GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum.DYNAMIC_FACETABLE_DISABLED;
                        exactSearchableOption = GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum.EXACT_SEARCHABLE_DISABLED;
                        facetIntervals = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaInterval[]{{
                            add(new GoogleCloudRetailV2alphaInterval() {{
                                exclusiveMaximum = 8579.46;
                                exclusiveMinimum = 5448.83;
                                maximum = 8472.52;
                                minimum = 4236.55;
                            }}),
                            add(new GoogleCloudRetailV2alphaInterval() {{
                                exclusiveMaximum = 6235.64;
                                exclusiveMinimum = 6458.94;
                                maximum = 3843.82;
                                minimum = 4375.87;
                            }}),
                            add(new GoogleCloudRetailV2alphaInterval() {{
                                exclusiveMaximum = 2975.34;
                                exclusiveMinimum = 8917.73;
                                maximum = 567.13;
                                minimum = 9636.63;
                            }}),
                        }};
                        ignoredFacetValues = new org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues[]{{
                            add(new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues() {{
                                endTime = "suscipit";
                                startTime = "molestiae";
                                values = new String[]{{
                                    add("placeat"),
                                    add("voluptatum"),
                                    add("iusto"),
                                    add("excepturi"),
                                }};
                            }}),
                            add(new GoogleCloudRetailV2alphaCatalogAttributeIgnoredFacetValues() {{
                                endTime = "nisi";
                                startTime = "recusandae";
                                values = new String[]{{
                                    add("ab"),
                                    add("quis"),
                                    add("veritatis"),
                                    add("deserunt"),
                                }};
                            }}),
                        }};
                        indexableOption = GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum.INDEXABLE_OPTION_UNSPECIFIED;
                        key = "ipsam";
                        recommendationsFilteringOption = GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum.RECOMMENDATIONS_FILTERING_ENABLED;
                        retrievableOption = GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum.RETRIEVABLE_DISABLED;
                        searchableOption = GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum.SEARCHABLE_DISABLED;
                    }};;
                }};;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "at";
                fields = "maiores";
                key = "molestiae";
                oauthToken = "quod";
                prettyPrint = false;
                quotaUser = "quod";
                uploadType = "esse";
                uploadProtocol = "totam";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity("porro", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2alphaAttributesConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->