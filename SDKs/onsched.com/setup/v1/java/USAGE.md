<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetSetupV1AppointmentsQueryParams;
import org.openapis.openapi.models.operations.GetSetupV1AppointmentsRequest;
import org.openapis.openapi.models.operations.GetSetupV1AppointmentsResponse;

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

            GetSetupV1AppointmentsRequest req = new GetSetupV1AppointmentsRequest() {{
                queryParams = new GetSetupV1AppointmentsQueryParams() {{
                    bookedBy = "corrupti";
                    calendarId = "provident";
                    customerId = "distinctio";
                    email = "Leda_Stiedemann@hotmail.com";
                    endDate = "2022-05-18T09:34:54.894Z";
                    lastname = "Oberbrunner";
                    limit = 384382;
                    locationId = "iure";
                    offset = 297534;
                    resourceId = "debitis";
                    serviceAllocationId = "ipsa";
                    serviceId = "delectus";
                    startDate = "2022-08-14T01:03:07.567Z";
                    status = "molestiae";
                }};
            }};            

            GetSetupV1AppointmentsResponse res = sdk.appointments.getSetupV1Appointments(req);

            if (res.appointmentListViewModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->