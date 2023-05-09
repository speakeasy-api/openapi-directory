<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaAddCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2betaAddCatalogAttributeRequestInput = new GoogleCloudRetailV2betaAddCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2betaCatalogAttributeInput() {{
                        dynamicFacetableOption = GoogleCloudRetailV2betaCatalogAttributeDynamicFacetableOptionEnum.DYNAMIC_FACETABLE_DISABLED;
                        exactSearchableOption = GoogleCloudRetailV2betaCatalogAttributeExactSearchableOptionEnum.EXACT_SEARCHABLE_DISABLED;
                        indexableOption = GoogleCloudRetailV2betaCatalogAttributeIndexableOptionEnum.INDEXABLE_ENABLED;
                        key = "nulla";
                        recommendationsFilteringOption = GoogleCloudRetailV2betaCatalogAttributeRecommendationsFilteringOptionEnum.RECOMMENDATIONS_FILTERING_DISABLED;
                        retrievableOption = GoogleCloudRetailV2betaCatalogAttributeRetrievableOptionEnum.RETRIEVABLE_DISABLED;
                        searchableOption = GoogleCloudRetailV2betaCatalogAttributeSearchableOptionEnum.SEARCHABLE_ENABLED;
                    }};;
                }};;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "suscipit";
                fields = "iure";
                key = "magnam";
                oauthToken = "debitis";
                prettyPrint = false;
                quotaUser = "ipsa";
                uploadType = "delectus";
                uploadProtocol = "tempora";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity("suscipit", "molestiae") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2betaAttributesConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->