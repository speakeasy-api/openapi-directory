<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeRecommendationsFilteringOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2alphaCatalogAttributeInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest() {{
                security = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams() {{
                    attributesConfig = "corrupti";
                }};
                queryParams = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2alphaCatalogAttributeInput() {{
                        dynamicFacetableOption = "DYNAMIC_FACETABLE_ENABLED";
                        exactSearchableOption = "EXACT_SEARCHABLE_ENABLED";
                        indexableOption = "INDEXABLE_OPTION_UNSPECIFIED";
                        key = "debitis";
                        recommendationsFilteringOption = "RECOMMENDATIONS_FILTERING_OPTION_UNSPECIFIED";
                        retrievableOption = "RETRIEVABLE_DISABLED";
                        searchableOption = "SEARCHABLE_OPTION_UNSPECIFIED";
                    }};
                }};
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req);

            if (res.googleCloudRetailV2alphaAttributesConfig.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->