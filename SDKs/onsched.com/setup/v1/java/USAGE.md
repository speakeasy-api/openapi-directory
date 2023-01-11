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
                    bookedBy = "sit";
                    calendarId = "voluptas";
                    customerId = "culpa";
                    email = "expedita";
                    endDate = "1997-12-26T13:41:25Z";
                    lastname = "dolor";
                    limit = 1774932891286980153;
                    locationId = "voluptas";
                    offset = 8274930044578894929;
                    resourceId = "et";
                    serviceAllocationId = "nihil";
                    serviceId = "rerum";
                    startDate = "2004-06-02T10:14:12Z";
                    status = "voluptatum";
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