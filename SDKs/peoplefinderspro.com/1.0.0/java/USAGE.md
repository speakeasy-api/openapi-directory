<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.SearchHeaders;
import org.openapis.openapi.models.operations.SearchRequestBodyAddress;
import org.openapis.openapi.models.operations.SearchRequestBody;
import org.openapis.openapi.models.operations.SearchRequest;
import org.openapis.openapi.models.operations.SearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchRequest req = new SearchRequest() {{
                headers = new SearchHeaders() {{
                    galaxyApName = "corrupti";
                    galaxyApPassword = "provident";
                    galaxySearchType = "distinctio";
                }};
                request = new SearchRequestBody() {{
                    address = new SearchRequestBodyAddress() {{
                        addressLine1 = "quibusdam";
                        addressLine2 = "unde";
                    }};
                    age = 8579.46;
                    dob = "corrupti";
                    email = "Henry.Mueller@hotmail.com";
                    firstName = "Hunter";
                    lastName = "Gulgowski";
                    middleName = "debitis";
                    phoneNumber = "ipsa";
                }};
            }};            

            SearchResponse res = sdk.search(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->