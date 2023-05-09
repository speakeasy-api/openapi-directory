<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1AppointmentsRequest;
import org.openapis.openapi.models.operations.GetSetupV1AppointmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1AppointmentsRequest req = new GetSetupV1AppointmentsRequest() {{
                bookedBy = "provident";
                calendarId = "distinctio";
                customerId = "quibusdam";
                email = "Ryan.Little62@yahoo.com";
                endDate = OffsetDateTime.parse("2022-03-26T09:37:56.283Z");
                lastname = "Kertzmann";
                limit = 297534;
                locationId = "debitis";
                offset = 56713;
                resourceId = "delectus";
                serviceAllocationId = "tempora";
                serviceId = "suscipit";
                startDate = OffsetDateTime.parse("2022-03-18T00:29:19.137Z");
                status = "placeat";
            }};            

            GetSetupV1AppointmentsResponse res = sdk.appointments.getSetupV1Appointments(req);

            if (res.appointmentListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->