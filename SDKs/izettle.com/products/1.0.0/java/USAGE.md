<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCategoriesRequest;
import org.openapis.openapi.models.operations.CreateCategoriesResponse;
import org.openapis.openapi.models.operations.CreateCategoriesSecurity;
import org.openapis.openapi.models.shared.CategoryDTO;
import org.openapis.openapi.models.shared.CreateCategoriesRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCategoriesRequest req = new CreateCategoriesRequest(                new CreateCategoriesRequest(                new org.openapis.openapi.models.shared.CategoryDTO[]{{
                                                add(new CategoryDTO("odit", "ddf7cc78-ca1b-4a92-8fc8-16742cb73920") {{
                                                    name = "Kelvin Sporer";
                                                    uuid = "8d69a674-e0f4-467c-8879-6ed151a05dfc";
                                                }}),
                                                add(new CategoryDTO("sapiente", "1a3a2fa9-4677-4392-91aa-52c3f5ad019d") {{
                                                    name = "Faye Cormier";
                                                    uuid = "96fea759-6eb1-40fa-aa23-52c5955907af";
                                                }}),
                                                add(new CategoryDTO("voluptates", "1e91e450-ad2a-4bd4-8269-802d502a94bb") {{
                                                    name = "Ryan Witting";
                                                    uuid = "78f097b0-074f-4154-b1b5-e6e13b99d488";
                                                }}),
                                            }});, "4f63c969-e9a3-4efa-b7df-b14cd66ae395");            

            CreateCategoriesResponse res = sdk.categories.createCategories(req, new CreateCategoriesSecurity("accusamus") {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->