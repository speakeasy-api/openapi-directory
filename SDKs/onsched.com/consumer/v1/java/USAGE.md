<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdPathParams;
import org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdRequest;
import org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }})
                .build();

            DeleteConsumerV1AppointmentsIdRequest req = new DeleteConsumerV1AppointmentsIdRequest() {{
                pathParams = new DeleteConsumerV1AppointmentsIdPathParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteConsumerV1AppointmentsIdResponse res = sdk.appointments.deleteConsumerV1AppointmentsId(req);

            if (res.appointmentViewModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->