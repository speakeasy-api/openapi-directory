# appointments

### Available Operations

* [deleteConsumerV1AppointmentsId](#deleteconsumerv1appointmentsid) - Delete Appointment
* [getConsumerV1Appointments](#getconsumerv1appointments) - Get Appointments
* [getConsumerV1AppointmentsBookingfields](#getconsumerv1appointmentsbookingfields) - Get Custom Fields Labels
* [getConsumerV1AppointmentsCustomfields](#getconsumerv1appointmentscustomfields) - Get Custom Fields List
* [getConsumerV1AppointmentsId](#getconsumerv1appointmentsid) - Get Appointment
* [postConsumerV1Appointments](#postconsumerv1appointments) - Create Appointment
* [putConsumerV1AppointmentsIdBook](#putconsumerv1appointmentsidbook) - Book Appointment
* [putConsumerV1AppointmentsIdCancel](#putconsumerv1appointmentsidcancel) - Cancel Appointment
* [putConsumerV1AppointmentsIdConfirm](#putconsumerv1appointmentsidconfirm) - Confirm Appointment
* [putConsumerV1AppointmentsIdNoshow](#putconsumerv1appointmentsidnoshow) - Set NoShow Status
* [putConsumerV1AppointmentsIdReschedule](#putconsumerv1appointmentsidreschedule) - Reschedule Appointment
* [putConsumerV1AppointmentsIdReserve](#putconsumerv1appointmentsidreserve) - Reserve Appointment

## deleteConsumerV1AppointmentsId

<p>Use this endpoint to permanently <b>Delete</b> an appointment. Only appointments with a of "IN" status, initial, can be deleted. Past dated appointments cannot be deleted. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

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
                .setSecurity(new Security("distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteConsumerV1AppointmentsIdRequest req = new DeleteConsumerV1AppointmentsIdRequest("quibusdam");            

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

## getConsumerV1Appointments

<p>Use this endpoint to return a <b>List of Appointments</b>. Use the offset and limit parameters to control the page start and number of results. Default offset is 0, limit is 20, max is 100. Use the query parameters to filter the results further. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1AppointmentsRequest;
import org.openapis.openapi.models.operations.GetConsumerV1AppointmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1AppointmentsRequest req = new GetConsumerV1AppointmentsRequest() {{
                bookedBy = "nulla";
                calendarId = "corrupti";
                customerId = "illum";
                email = "Linda.Oberbrunner@yahoo.com";
                endDate = OffsetDateTime.parse("2022-02-09T12:04:06.508Z");
                lastname = "Bednar";
                limit = 963663;
                locationId = "tempora";
                offset = 383441;
                phone = "885.553.9803 x060";
                resourceId = "ipsam";
                serviceAllocationId = "repellendus";
                serviceId = "sapiente";
                startDate = OffsetDateTime.parse("2022-07-31T07:34:52.790Z");
                status = "at";
            }};            

            GetConsumerV1AppointmentsResponse res = sdk.appointments.getConsumerV1Appointments(req);

            if (res.appointmentListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1AppointmentsBookingfields

<p>Use this endpoint to return a locations <b>Appointment Booking Fields</b>. Appointment booking fields are stored with each Appointment record. They are used when you need additional information collected during your booking process. It is tied to an appointment/visit and will be stored in the appointment record. Use the field name, type, and length to determine how to update these field values when posting an appointment.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1AppointmentsBookingfieldsRequest;
import org.openapis.openapi.models.operations.GetConsumerV1AppointmentsBookingfieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1AppointmentsBookingfieldsRequest req = new GetConsumerV1AppointmentsBookingfieldsRequest() {{
                locationId = "maiores";
            }};            

            GetConsumerV1AppointmentsBookingfieldsResponse res = sdk.appointments.getConsumerV1AppointmentsBookingfields(req);

            if (res.bookingFieldListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1AppointmentsCustomfields

<p>Use this endpoint to return a locations <b>Appointment Custom Field</b> definitions. Appointment custom fields are stored with each appointment. They are used when the information collected during the booking is specific to a particular appointment/visit. The response will list the custom fields used (customField1 - 10), the field type (string, number, date, boolean) and the length of each one.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1AppointmentsCustomfieldsRequest;
import org.openapis.openapi.models.operations.GetConsumerV1AppointmentsCustomfieldsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1AppointmentsCustomfieldsRequest req = new GetConsumerV1AppointmentsCustomfieldsRequest() {{
                locationId = "quod";
            }};            

            GetConsumerV1AppointmentsCustomfieldsResponse res = sdk.appointments.getConsumerV1AppointmentsCustomfields(req);

            if (res.customFieldDefinitionListViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConsumerV1AppointmentsId

<p>Use this endpoint to return an <b>Appointment</b> object. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConsumerV1AppointmentsIdRequest;
import org.openapis.openapi.models.operations.GetConsumerV1AppointmentsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetConsumerV1AppointmentsIdRequest req = new GetConsumerV1AppointmentsIdRequest("esse");            

            GetConsumerV1AppointmentsIdResponse res = sdk.appointments.getConsumerV1AppointmentsId(req);

            if (res.appointmentViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConsumerV1Appointments

<p>Use this endpoint to <b>Create</b> a new appointment. The appointment will be created with an "IN", Initial status. Posting an appointment with "IN" status requires minimal information and requires a "PUT book" call to complete the booking transaction, <i>PUT ​/consumer​/v1​/appointments​/{id}​/book</i>. Alternatively, you can post an appointment using the <b>completeBooking</b> option which completes the booking in one transaction, but it will require more data. The method you choose depends on your solutions workflow. </p>
<p>
  <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b></p>
<p>A valid <b>serviceId</b> is required. The serviceId provided must be valid for the location being booked. A valid serviceId is one that is scoped to a Primary Company Location or is associated with a Business Location</p>
<p>OPTIONAL FIELDS INCLUDE: </p>
<p>
  <b>locationId</b> - if not supplied, the appointment will be posted to the primary business location. If you support multiple location, we recommend always supplying the locationId. </p>
<p>
  <b>resourceId</b> - not required when posting with an "IN" status but is required when the appointment is booked. Use <i>GET /consumer/v1/resources</i> for a list of resources. </p>
<p>
  <b>customerId</b> - if supplied the name and email will be retrieved from the customer record. </p>
<p>
  <b>BookedBy</b> - if not supplied the email address of the booked appointment is used or the ip address if no email address is provided. BookedBy is used in the Appointment Audit trail which can be viewed in the appointment object.</p>
<p>
  <b>Location</b> - is a string value representing the location of the appointment. It provides no added functionality in OnSched and should not be confused with locationId.</p>
<p>
  <b>TimezoneName</b> - if used timezoneName must be in IANA format, <i>America/New_York</i>. This is the timezone the appointment was booked in. Populating this information can help later in situations where appointments are booked before a Daylight Savings change. If no timezoneName is supplied, the Business Locations timezone will be used.</p>
<p>
  <b>COMPLETE BOOKING:</b> This parameter provides a mechanism for immediate booking with the POST appointment endpoint. To complete the booking in one transaction, populate the <b>completeBooking</b> parameter with a "BK", booked or an "RS", reserved status and provide an (<b>email</b> and <b>name</b>) or a <b>customerId</b> in the post body. Doing so will book the appointment and send notifications all in one transaction. <b>Note:</b> "IN" can also be used as a completeBooking option to support payment flows. With the "IN" option, notifications are NOT sent.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConsumerV1AppointmentsRequest;
import org.openapis.openapi.models.operations.PostConsumerV1AppointmentsResponse;
import org.openapis.openapi.models.shared.AppointmentInitialModel;
import org.openapis.openapi.models.shared.BookingFieldItem;
import org.openapis.openapi.models.shared.CustomFieldInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PostConsumerV1AppointmentsRequest req = new PostConsumerV1AppointmentsRequest() {{
                appointmentInitialModel = new AppointmentInitialModel() {{
                    appointmentBookingFields = new org.openapis.openapi.models.shared.BookingFieldItem[]{{
                        add(new BookingFieldItem() {{
                            name = "Samuel Reichel";
                            value = "fugit";
                        }}),
                        add(new BookingFieldItem() {{
                            name = "Irvin Rosenbaum III";
                            value = "molestiae";
                        }}),
                        add(new BookingFieldItem() {{
                            name = "Norma Ryan";
                            value = "ipsum";
                        }}),
                        add(new BookingFieldItem() {{
                            name = "Brandon Auer";
                            value = "sed";
                        }}),
                    }};
                    bookedBy = "iste";
                    bookingWindowId = "dolor";
                    calendarId = "natus";
                    customFields = new CustomFieldInputModel() {{
                        field1 = "laboriosam";
                        field10 = "hic";
                        field2 = "saepe";
                        field3 = "fuga";
                        field4 = "in";
                        field5 = "corporis";
                        field6 = "iste";
                        field7 = "iure";
                        field8 = "saepe";
                        field9 = "quidem";
                    }};;
                    customerBookingFields = new org.openapis.openapi.models.shared.BookingFieldItem[]{{
                        add(new BookingFieldItem() {{
                            name = "Lela Orn";
                            value = "dolores";
                        }}),
                    }};
                    customerId = "dolorem";
                    customerMessage = "corporis";
                    email = "Nestor.Halvorson@gmail.com";
                    endDateTime = OffsetDateTime.parse("2022-06-06T21:04:34.044Z");
                    groupSize = 38425;
                    location = "iure";
                    locationId = "culpa";
                    name = "Darrin Brakus";
                    notes = "culpa";
                    phone = "1-965-444-4261";
                    phoneType = "quis";
                    resourceGroupId = "vitae";
                    resourceId = "laborum";
                    resourceIds = "animi";
                    serviceAllocationId = "enim";
                    serviceId = "odit";
                    startDateTime = OffsetDateTime.parse("2022-05-30T17:48:55.594Z");
                    timezoneName = "tenetur";
                    travelAppointmentId = "ipsam";
                    travelTimeMins = 662527;
                }};;
                completeBooking = "possimus";
            }};            

            PostConsumerV1AppointmentsResponse res = sdk.appointments.postConsumerV1Appointments(req);

            if (res.appointmentInitialViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConsumerV1AppointmentsIdBook

<p>Use this endpoint to <b>Book</b> an appointment. Only appointments with an "IN" status, Initial, can be booked. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint. Other pertinent fields can also be updated at the time of booking by including them in the post body. <b>Note: If no name or email address was provided in the initial Post Appointment, it will be required in the post body.</b></p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdBookRequest;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdBookResponse;
import org.openapis.openapi.models.shared.AppointmentBookModel;
import org.openapis.openapi.models.shared.BookingFieldItem;
import org.openapis.openapi.models.shared.CustomFieldInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aut") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutConsumerV1AppointmentsIdBookRequest req = new PutConsumerV1AppointmentsIdBookRequest("quasi") {{
                appointmentBookModel = new AppointmentBookModel() {{
                    appointmentBookingFields = new org.openapis.openapi.models.shared.BookingFieldItem[]{{
                        add(new BookingFieldItem() {{
                            name = "Neal Boyer";
                            value = "vero";
                        }}),
                        add(new BookingFieldItem() {{
                            name = "Miss Irma Wolff";
                            value = "cum";
                        }}),
                        add(new BookingFieldItem() {{
                            name = "Sharon Kiehn";
                            value = "dicta";
                        }}),
                    }};
                    customFields = new CustomFieldInputModel() {{
                        field1 = "corporis";
                        field10 = "dolore";
                        field2 = "iusto";
                        field3 = "dicta";
                        field4 = "harum";
                        field5 = "enim";
                        field6 = "accusamus";
                        field7 = "commodi";
                        field8 = "repudiandae";
                        field9 = "quae";
                    }};;
                    customerBookingFields = new org.openapis.openapi.models.shared.BookingFieldItem[]{{
                        add(new BookingFieldItem() {{
                            name = "Virgil Mante";
                            value = "praesentium";
                        }}),
                    }};
                    customerMessage = "rem";
                    email = "Aurelia.Waelchi@hotmail.com";
                    groupSize = 929297;
                    name = "Erin Altenwerth";
                    notes = "explicabo";
                    phone = "1-782-413-5501 x8301";
                    phoneExt = "dolorum";
                    phoneType = "excepturi";
                }};;
            }};            

            PutConsumerV1AppointmentsIdBookResponse res = sdk.appointments.putConsumerV1AppointmentsIdBook(req);

            if (res.appointmentViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConsumerV1AppointmentsIdCancel

<p>Use this endpoint to <b>Cancel</b> an appointment booking or reservation. Only appointments with a "BK", booked or "RS", reserved status can be cancelled. Past dated appointments cannot be cancelled. A valid <b>appointment id</b> is required. For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdCancelRequest;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdCancelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutConsumerV1AppointmentsIdCancelRequest req = new PutConsumerV1AppointmentsIdCancelRequest("facilis");            

            PutConsumerV1AppointmentsIdCancelResponse res = sdk.appointments.putConsumerV1AppointmentsIdCancel(req);

            if (res.appointmentViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConsumerV1AppointmentsIdConfirm

<p>Use this endpoint to <b>Confirm</b> an appointment. This updates the boolean confirmed field to TRUE. <b>NOTE:</b> If the appointment status is set to "RS", Reserved, it also updates the status of the appointment to "BK", Booked. </p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdConfirmRequest;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdConfirmResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempore") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutConsumerV1AppointmentsIdConfirmRequest req = new PutConsumerV1AppointmentsIdConfirmRequest(288476) {{
                undo = false;
            }};            

            PutConsumerV1AppointmentsIdConfirmResponse res = sdk.appointments.putConsumerV1AppointmentsIdConfirm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConsumerV1AppointmentsIdNoshow

<p>Use this endpoint to change the status of an appointment from "BK", Booked to <b>"NS", NoShow</b>. This gives API consumers a way to internally track No Show appointments. It provides no added functionality in OnSched.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdNoshowRequest;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdNoshowResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutConsumerV1AppointmentsIdNoshowRequest req = new PutConsumerV1AppointmentsIdNoshowRequest(433288) {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eligendi", "sint");
                }};
            }};            

            PutConsumerV1AppointmentsIdNoshowResponse res = sdk.appointments.putConsumerV1AppointmentsIdNoshow(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConsumerV1AppointmentsIdReschedule

<p>Use this endpoint to <b>Reschedule</b> an appointment booking. Only appointments in "BK", booked status, can be Rescheduled. Past dated appointments cannot be rescheduled. A valid <b>appointment id</b> is required.</p>
<p>The <b>StartDateTime</b> and <b>EndDateTime</b> are required. Use the ISO 8601 format for DateTime Timezone, e.g., <b>2016-10-30T09:00:00-5:00</b>.</p>
<p>The serviceId is optional. If changing the <b>serviceId</b>, the new service id's duration must match the original service's duration.</p>
<p>The resourceId is optional. If changing the <b>resourceId</b>, verify the availability of the new resource prior to rescheduling.</p>
<p>
  <b>IMPORTANT:</b> Always run availability before rescheduling an appointment to verify the timeslot is open and available for the new time, service and/or resource requested. This is the only way to assure the slot is available. You cannot reschedule an appointment to a different location. If necessary, you should cancel and then book an appointment in the other location.</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointment Overview</a></p>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdRescheduleRequest;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdRescheduleResponse;
import org.openapis.openapi.models.shared.AppointmentRescheduleModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutConsumerV1AppointmentsIdRescheduleRequest req = new PutConsumerV1AppointmentsIdRescheduleRequest("provident") {{
                appointmentRescheduleModel = new AppointmentRescheduleModel() {{
                    endDateTime = OffsetDateTime.parse("2021-04-14T09:13:11.675Z");
                    resourceId = "officia";
                    resourceIds = "dolor";
                    serviceId = "debitis";
                    startDateTime = OffsetDateTime.parse("2020-12-17T08:08:22.040Z");
                    travelAppointmentId = "in";
                    travelTimeMins = 449198;
                }};;
            }};            

            PutConsumerV1AppointmentsIdRescheduleResponse res = sdk.appointments.putConsumerV1AppointmentsIdReschedule(req);

            if (res.appointmentViewModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConsumerV1AppointmentsIdReserve

<p>Use this endpoint to <b>Reserve</b> an appointment. Only appointments with an "IN" status, Initial, can be reserved. A valid <b>appointment id</b> is required. Use the appointment id returned from the initial <i>POST /consumer/v1/appointments</i> endpoint.</p>
<p>
  <b>NOTE: Reservations are different from Bookings as reservations are a two-step booking process that must be managed by the API consumer.</b> An appointment that is reserved is not completely booked until other business conditions have been met. For example, an appointment may be reserved if it is not yet assigned to a resource or until the customer or resource explicitly confirms it.</p>
<p>With reservations you have the ability to notify the customer of a reservation prior to officially booking and the workflow can be designed to indicate what conditions will need to be met in order to convert the reservation to a complete booking. A reservation converts to a complete booking when it is either Confirmed or Booked. </p>
<p>
  <b>IMPORTANT: A reserved appointment time will not be released, i.e., become available to others, until it is Cancelled. The booking timer is not used with reserved appointments.</b>
</p>
<p>For more information: <a href="https://onsched.readme.io/docs/appointments-overview">Appointments Overview</a></p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdReserveRequest;
import org.openapis.openapi.models.operations.PutConsumerV1AppointmentsIdReserveResponse;
import org.openapis.openapi.models.shared.AppointmentReserveModel;
import org.openapis.openapi.models.shared.BookingFieldItem;
import org.openapis.openapi.models.shared.CustomFieldInputModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PutConsumerV1AppointmentsIdReserveRequest req = new PutConsumerV1AppointmentsIdReserveRequest("maiores") {{
                appointmentReserveModel = new AppointmentReserveModel() {{
                    appointmentBookingFields = new org.openapis.openapi.models.shared.BookingFieldItem[]{{
                        add(new BookingFieldItem() {{
                            name = "Valerie Runolfsson";
                            value = "aliquid";
                        }}),
                        add(new BookingFieldItem() {{
                            name = "Tomas Friesen";
                            value = "accusamus";
                        }}),
                        add(new BookingFieldItem() {{
                            name = "Abraham McKenzie";
                            value = "blanditiis";
                        }}),
                    }};
                    customFields = new CustomFieldInputModel() {{
                        field1 = "deleniti";
                        field10 = "sapiente";
                        field2 = "amet";
                        field3 = "deserunt";
                        field4 = "nisi";
                        field5 = "vel";
                        field6 = "natus";
                        field7 = "omnis";
                        field8 = "molestiae";
                        field9 = "perferendis";
                    }};;
                    customerBookingFields = new org.openapis.openapi.models.shared.BookingFieldItem[]{{
                        add(new BookingFieldItem() {{
                            name = "Verna Olson";
                            value = "suscipit";
                        }}),
                        add(new BookingFieldItem() {{
                            name = "Robin Keebler";
                            value = "architecto";
                        }}),
                    }};
                    customerMessage = "magnam";
                    email = "Kevon_Hermann@gmail.com";
                    name = "Kenneth O'Hara";
                    notes = "ad";
                    phone = "1-381-404-9828 x574";
                    phoneExt = "architecto";
                    phoneType = "architecto";
                }};;
                sendNotifications = false;
            }};            

            PutConsumerV1AppointmentsIdReserveResponse res = sdk.appointments.putConsumerV1AppointmentsIdReserve(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
