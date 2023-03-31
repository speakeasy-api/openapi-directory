<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DeleteCompanyAttendancesIdPathParams;
import org.openapis.openapi.models.operations.DeleteCompanyAttendancesIdRequest;
import org.openapis.openapi.models.operations.DeleteCompanyAttendancesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteCompanyAttendancesIdRequest req = new DeleteCompanyAttendancesIdRequest() {{
                pathParams = new DeleteCompanyAttendancesIdPathParams() {{
                    id = 548814;
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