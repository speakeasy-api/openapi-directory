<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetSetupV1AppointmentsRequest req = new GetSetupV1AppointmentsRequest() {{
                queryParams = new GetSetupV1AppointmentsQueryParams() {{
                    bookedBy = "voluptatem";
                    calendarId = "hic";
                    customerId = "quia";
                    email = "perferendis";
                    endDate = "1987-03-13T06:39:44Z";
                    lastname = "exercitationem";
                    limit = 7158012375946119173;
                    locationId = "modi";
                    offset = 3543851051679539952;
                    resourceId = "harum";
                    serviceAllocationId = "autem";
                    serviceId = "numquam";
                    startDate = "2012-09-12T18:54:04Z";
                    status = "optio";
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