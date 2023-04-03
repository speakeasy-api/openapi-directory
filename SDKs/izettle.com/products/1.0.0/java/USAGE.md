<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCategoriesSecurity;
import org.openapis.openapi.models.operations.CreateCategoriesRequest;
import org.openapis.openapi.models.operations.CreateCategoriesResponse;
import org.openapis.openapi.models.shared.CreateCategoriesRequest;
import org.openapis.openapi.models.shared.CategoryDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCategoriesRequest req = new CreateCategoriesRequest() {{
                createCategoriesRequest = new CreateCategoriesRequest() {{
                    categories = new org.openapis.openapi.models.shared.CategoryDTO[]{{
                        add(new CategoryDTO() {{
                            name = "provident";
                            uuid = "bd9d8d69-a674-4e0f-867c-c8796ed151a0";
                        }}),
                        add(new CategoryDTO() {{
                            name = "ipsam";
                            uuid = "dfc2ddf7-cc78-4ca1-ba92-8fc816742cb7";
                        }}),
                        add(new CategoryDTO() {{
                            name = "ipsum";
                            uuid = "92059293-96fe-4a75-96eb-10faaa2352c5";
                        }}),
                    }};
                }};
                organizationUuid = "955907af-f1a3-4a2f-a946-7739251aa52c";
            }}            

            CreateCategoriesResponse res = sdk.categories.createCategories(req, new CreateCategoriesSecurity() {{
                zettleOauth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->