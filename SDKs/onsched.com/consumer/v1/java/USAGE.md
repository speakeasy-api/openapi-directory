<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdRequest;
import org.openapis.openapi.models.operations.DeleteConsumerV1AppointmentsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteConsumerV1AppointmentsIdRequest req = new DeleteConsumerV1AppointmentsIdRequest("provident");            

            DeleteConsumerV1AppointmentsIdResponse res = sdk.appointments.deleteConsumerV1AppointmentsId(req);

            if (res.appointmentViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->