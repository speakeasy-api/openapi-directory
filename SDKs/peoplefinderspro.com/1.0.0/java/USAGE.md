<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

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
                requestBody = new SearchRequestBody() {{
                    address = new SearchRequestBodyAddress() {{
                        addressLine1 = "corrupti";
                        addressLine2 = "provident";
                    }};
                    age = 7151.9;
                    dob = "quibusdam";
                    email = "Ryan.Little62@yahoo.com";
                    firstName = "Luna";
                    lastName = "Hoppe";
                    middleName = "iure";
                    phoneNumber = "magnam";
                }};
                galaxyApName = "debitis";
                galaxyApPassword = "ipsa";
                galaxySearchType = "delectus";
            }}            

            SearchResponse res = sdk.search(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->