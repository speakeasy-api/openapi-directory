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

            DeleteCompanyAttendancesIdRequest req = new DeleteCompanyAttendancesIdRequest() {{
                pathParams = new DeleteCompanyAttendancesIdPathParams() {{
                    id = 8717895732742165505;
                }};
            }};

            DeleteCompanyAttendancesIdResponse res = sdk.deleteCompanyAttendancesId(req);

            if (res.response.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->