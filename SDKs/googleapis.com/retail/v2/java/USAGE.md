<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse;
import org.openapis.openapi.models.operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2AddCatalogAttributeRequestInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeInput;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum;
import org.openapis.openapi.models.shared.GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest req = new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRetailV2AddCatalogAttributeRequestInput = new GoogleCloudRetailV2AddCatalogAttributeRequestInput() {{
                    catalogAttribute = new GoogleCloudRetailV2CatalogAttributeInput() {{
                        dynamicFacetableOption = GoogleCloudRetailV2CatalogAttributeDynamicFacetableOptionEnum.DYNAMIC_FACETABLE_DISABLED;
                        exactSearchableOption = GoogleCloudRetailV2CatalogAttributeExactSearchableOptionEnum.EXACT_SEARCHABLE_DISABLED;
                        indexableOption = GoogleCloudRetailV2CatalogAttributeIndexableOptionEnum.INDEXABLE_ENABLED;
                        key = "nulla";
                        retrievableOption = GoogleCloudRetailV2CatalogAttributeRetrievableOptionEnum.RETRIEVABLE_ENABLED;
                        searchableOption = GoogleCloudRetailV2CatalogAttributeSearchableOptionEnum.SEARCHABLE_DISABLED;
                    }};;
                }};;
                accessToken = "vel";
                alt = AltEnum.MEDIA;
                callback = "deserunt";
                fields = "suscipit";
                key = "iure";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "debitis";
                uploadType = "ipsa";
                uploadProtocol = "delectus";
            }};            

            RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeResponse res = sdk.projects.retailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(req, new RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity("tempora", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRetailV2AttributesConfig != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->