<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CreateCategoriesSecurity;
import org.openapis.openapi.models.operations.CreateCategoriesPathParams;
import org.openapis.openapi.models.operations.CreateCategoriesRequest;
import org.openapis.openapi.models.operations.CreateCategoriesResponse;
import org.openapis.openapi.models.shared.CreateCategoriesRequest;
import org.openapis.openapi.models.shared.CategoryDTO;
import org.openapis.openapi.models.shared.SchemeZettleOauth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateCategoriesRequest req = new CreateCategoriesRequest() {{
                security = new CreateCategoriesSecurity() {{
                    zettleOauth = new SchemeZettleOauth() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CreateCategoriesPathParams() {{
                    organizationUuid = "89bd9d8d-69a6-474e-8f46-7cc8796ed151";
                }};
                request = new CreateCategoriesRequest() {{
                    categories = new org.openapis.openapi.models.shared.CategoryDTO[]{{
                        add(new CategoryDTO() {{
                            name = "perferendis";
                            uuid = "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb";
                        }}),
                        add(new CategoryDTO() {{
                            name = "esse";
                            uuid = "39205929-396f-4ea7-996e-b10faaa2352c";
                        }}),
                        add(new CategoryDTO() {{
                            name = "enim";
                            uuid = "955907af-f1a3-4a2f-a946-7739251aa52c";
                        }}),
                    }};
                }};
            }};            

            CreateCategoriesResponse res = sdk.categories.createCategories(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->