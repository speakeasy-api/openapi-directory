# appointments

### Available Operations

* [getSetupV1Appointments](#getsetupv1appointments) - List Appointments
* [getSetupV1AppointmentsId](#getsetupv1appointmentsid) - Get Appointment
* [putSetupV1AppointmentsIdReassignResourceResourceId](#putsetupv1appointmentsidreassignresourceresourceid) - Reassign Appointment

## getSetupV1Appointments

<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

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
                .setSecurity(new Security("voluptatum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1AppointmentsRequest req = new GetSetupV1AppointmentsRequest() {{
                bookedBy = "iusto";
                calendarId = "excepturi";
                customerId = "nisi";
                email = "Rocky.Bernier@hotmail.com";
                endDate = OffsetDateTime.parse("2022-12-17T05:46:24.151Z");
                lastname = "Hills";
                limit = 832620;
                locationId = "sapiente";
                offset = 778157;
                resourceId = "odit";
                serviceAllocationId = "at";
                serviceId = "at";
                startDate = OffsetDateTime.parse("2021-07-31T09:34:50.024Z");
                status = "quod";
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

## getSetupV1AppointmentsId

<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. Find appointment id's by using the <i>GET​/setup​/v1​/appointments</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSetupV1AppointmentsIdRequest;
import org.openapis.openapi.models.operations.GetSetupV1AppointmentsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetSetupV1AppointmentsIdRequest req = new GetSetupV1AppointmentsIdRequest("esse");            

            GetSetupV1AppointmentsIdResponse res = sdk.appointments.getSetupV1AppointmentsId(req);

            if (res.appointmentViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSetupV1AppointmentsIdReassignResourceResourceId

<p>Use this endpoint to <b>Reassign</b> an appointment from one resource to another. The result returned is a single appointment that was reassigned to the target resource. A valid <b>appointment id</b> and <b>resource id</b> is required. Find appointment id's by using the <i>GET /setup/v1/appointments</i> endpoint, find resource id's by using the <i>GET ​/setup​/v1​/resources</i> endpoint.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSetupV1AppointmentsIdReassignResourceResourceIdRequest;
import org.openapis.openapi.models.operations.PutSetupV1AppointmentsIdReassignResourceResourceIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutSetupV1AppointmentsIdReassignResourceResourceIdRequest req = new PutSetupV1AppointmentsIdReassignResourceResourceIdRequest("porro", "dolorum");            

            PutSetupV1AppointmentsIdReassignResourceResourceIdResponse res = sdk.appointments.putSetupV1AppointmentsIdReassignResourceResourceId(req);

            if (res.appointmentViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
