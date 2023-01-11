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

            SearchRequest req = new SearchRequest() {{
                headers = new SearchHeaders() {{
                    galaxyApName = "sit";
                    galaxyApPassword = "voluptas";
                    galaxySearchType = "culpa";
                }};
                request = new SearchRequestBody() {{
                    address = new SearchRequestBodyAddress() {{
                        addressLine1 = "expedita";
                        addressLine2 = "consequuntur";
                    }};
                    age = 96.199997;
                    dob = "voluptas";
                    email = "fugit";
                    firstName = "et";
                    lastName = "nihil";
                    middleName = "rerum";
                    phoneNumber = "dicta";
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