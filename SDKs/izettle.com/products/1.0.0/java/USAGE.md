<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CreateCategoriesRequest req = new CreateCategoriesRequest() {{
                security = new CreateCategoriesSecurity() {{
                    zettleApiKey = new SchemeZettleApiKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new CreateCategoriesPathParams() {{
                    organizationUuid = "ullam";
                }};
                request = new CategoryRequest() {{
                    categories = new openapisdk.models.shared.CategoryDto[]() {{
                        add(new CategoryDto() {{
                            name = "modi";
                            uuid = "dolorem";
                        }}),
                        add(new CategoryDto() {{
                            name = "deserunt";
                            uuid = "esse";
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