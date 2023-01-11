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
                    galaxyApName = "aliquam";
                    galaxyApPassword = "architecto";
                    galaxySearchType = "dignissimos";
                }};
                request = new SearchRequestBody() {{
                    address = new SearchRequestBodyAddress() {{
                        addressLine1 = "consectetur";
                        addressLine2 = "in";
                    }};
                    age = 71.099998;
                    dob = "praesentium";
                    email = "eum";
                    firstName = "error";
                    lastName = "rerum";
                    middleName = "iusto";
                    phoneNumber = "repellendus";
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