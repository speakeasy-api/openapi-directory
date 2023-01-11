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

            GetHackathonsIdFormatRequest req = new GetHackathonsIdFormatRequest() {{
                pathParams = new GetHackathonsIdFormatPathParams() {{
                    id = 8717895732742165505;
                }};
            }};

            GetHackathonsIdFormatResponse res = sdk.hackathons.getHackathonsIdFormat(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->