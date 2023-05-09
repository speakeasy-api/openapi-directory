# diaryController

### Available Operations

* [diaryControllerAddFeedbackForm](#diarycontrolleraddfeedbackform) - Submit appointment feedback
* [diaryControllerAddFeedbackJson](#diarycontrolleraddfeedbackjson) - Submit appointment feedback
* [diaryControllerAddFeedbackRaw](#diarycontrolleraddfeedbackraw) - Submit appointment feedback
* [diaryControllerCancelAppointment](#diarycontrollercancelappointment) - Cancel an existing appointment using its unique identifier
* [diaryControllerDeleteAppointment](#diarycontrollerdeleteappointment) - Delete an existing appointment using its unique identifier
* [diaryControllerGetAllocations](#diarycontrollergetallocations) - Get a list of all available allocations for a date + 7 days for a specified appointment type
* [diaryControllerGetAppointment](#diarycontrollergetappointment) - Get an appointment by ID
* [diaryControllerGetAppointmentTypes](#diarycontrollergetappointmenttypes) - A collection of all diary appointment types
* [diaryControllerGetAppointmentsBetweenDates](#diarycontrollergetappointmentsbetweendates) - A collection of diary appointments linked to a company filtered between specific dates and by appointment type
* [diaryControllerGetRecurringAppointments](#diarycontrollergetrecurringappointments) - Retrieves all recurring appointments:-
* [diaryControllerPostAppointmentForm](#diarycontrollerpostappointmentform) - Post an appointment into a valid diary allocation
* [diaryControllerPostAppointmentJson](#diarycontrollerpostappointmentjson) - Post an appointment into a valid diary allocation
* [diaryControllerPostAppointmentRaw](#diarycontrollerpostappointmentraw) - Post an appointment into a valid diary allocation
* [diaryControllerPutAppointmentForm](#diarycontrollerputappointmentform) - Update an existing appointment using its unique identifier
* [diaryControllerPutAppointmentJson](#diarycontrollerputappointmentjson) - Update an existing appointment using its unique identifier
* [diaryControllerPutAppointmentRaw](#diarycontrollerputappointmentraw) - Update an existing appointment using its unique identifier
* [diaryControllerSearchGuest](#diarycontrollersearchguest) - Match Guest Parameters with existing applicants

## diaryControllerAddFeedbackForm

Submit appointment feedback

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerAddFeedbackFormRequest;
import org.openapis.openapi.models.operations.DiaryControllerAddFeedbackFormResponse;
import org.openapis.openapi.models.shared.FeedbackSubmissionModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerAddFeedbackFormRequest req = new DiaryControllerAddFeedbackFormRequest(                new FeedbackSubmissionModel() {{
                                appointmentID = "vel";
                                feedback = "error";
                                propertyID = "deserunt";
                            }};, "suscipit");            

            DiaryControllerAddFeedbackFormResponse res = sdk.diaryController.diaryControllerAddFeedbackForm(req);

            if (res.diaryControllerAddFeedbackForm200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerAddFeedbackJson

Submit appointment feedback

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerAddFeedbackJsonRequest;
import org.openapis.openapi.models.operations.DiaryControllerAddFeedbackJsonResponse;
import org.openapis.openapi.models.shared.FeedbackSubmissionModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerAddFeedbackJsonRequest req = new DiaryControllerAddFeedbackJsonRequest(                new FeedbackSubmissionModel() {{
                                appointmentID = "iure";
                                feedback = "magnam";
                                propertyID = "debitis";
                            }};, "ipsa");            

            DiaryControllerAddFeedbackJsonResponse res = sdk.diaryController.diaryControllerAddFeedbackJson(req);

            if (res.diaryControllerAddFeedbackJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerAddFeedbackRaw

Submit appointment feedback

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerAddFeedbackRawRequest;
import org.openapis.openapi.models.operations.DiaryControllerAddFeedbackRawResponse;
import org.openapis.openapi.models.shared.FeedbackSubmissionModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerAddFeedbackRawRequest req = new DiaryControllerAddFeedbackRawRequest("delectus".getBytes(), "tempora");            

            DiaryControllerAddFeedbackRawResponse res = sdk.diaryController.diaryControllerAddFeedbackRaw(req);

            if (res.diaryControllerAddFeedbackRaw200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerCancelAppointment

Cancel an existing appointment using its unique identifier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerCancelAppointmentRequest;
import org.openapis.openapi.models.operations.DiaryControllerCancelAppointmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerCancelAppointmentRequest req = new DiaryControllerCancelAppointmentRequest("suscipit", "molestiae");            

            DiaryControllerCancelAppointmentResponse res = sdk.diaryController.diaryControllerCancelAppointment(req);

            if (res.diaryControllerCancelAppointment200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerDeleteAppointment

Delete an existing appointment using its unique identifier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerDeleteAppointmentRequest;
import org.openapis.openapi.models.operations.DiaryControllerDeleteAppointmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerDeleteAppointmentRequest req = new DiaryControllerDeleteAppointmentRequest("minus", "placeat");            

            DiaryControllerDeleteAppointmentResponse res = sdk.diaryController.diaryControllerDeleteAppointment(req);

            if (res.diaryControllerDeleteAppointment200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerGetAllocations

Get a list of all available allocations for a date + 7 days for a specified appointment type

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerGetAllocationsRequest;
import org.openapis.openapi.models.operations.DiaryControllerGetAllocationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerGetAllocationsRequest req = new DiaryControllerGetAllocationsRequest("voluptatum", OffsetDateTime.parse("2022-06-07T15:55:46.205Z"), "nisi") {{
                branchID = "recusandae";
                lettings = false;
                propertyIdentifier = "temporibus";
            }};            

            DiaryControllerGetAllocationsResponse res = sdk.diaryController.diaryControllerGetAllocations(req);

            if (res.diaryBookingModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerGetAppointment

Get an appointment by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerGetAppointmentRequest;
import org.openapis.openapi.models.operations.DiaryControllerGetAppointmentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerGetAppointmentRequest req = new DiaryControllerGetAppointmentRequest("ab", "quis");            

            DiaryControllerGetAppointmentResponse res = sdk.diaryController.diaryControllerGetAppointment(req);

            if (res.diaryAppointmentModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerGetAppointmentTypes

A collection of all diary appointment types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerGetAppointmentTypesRequest;
import org.openapis.openapi.models.operations.DiaryControllerGetAppointmentTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerGetAppointmentTypesRequest req = new DiaryControllerGetAppointmentTypesRequest(87129, 648172, "perferendis");            

            DiaryControllerGetAppointmentTypesResponse res = sdk.diaryController.diaryControllerGetAppointmentTypes(req);

            if (res.diaryAppointmentTypeModelResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerGetAppointmentsBetweenDates

A collection of diary appointments linked to a company filtered between specific dates and by appointment type

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerGetAppointmentsBetweenDatesRequest;
import org.openapis.openapi.models.operations.DiaryControllerGetAppointmentsBetweenDatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerGetAppointmentsBetweenDatesRequest req = new DiaryControllerGetAppointmentsBetweenDatesRequest(                new String[]{{
                                add("repellendus"),
                                add("sapiente"),
                            }}, "quo", 140350, OffsetDateTime.parse("2020-05-23T06:06:25.221Z"), 978619, "molestiae", OffsetDateTime.parse("2020-08-07T00:03:55.328Z"));            

            DiaryControllerGetAppointmentsBetweenDatesResponse res = sdk.diaryController.diaryControllerGetAppointmentsBetweenDates(req);

            if (res.diaryAppointmentModelResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerGetRecurringAppointments

Retrieves all recurring appointments:-

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerGetRecurringAppointmentsRequest;
import org.openapis.openapi.models.operations.DiaryControllerGetRecurringAppointmentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerGetRecurringAppointmentsRequest req = new DiaryControllerGetRecurringAppointmentsRequest(                new String[]{{
                                add("totam"),
                                add("porro"),
                            }}, "dolorum", 118274, 720633, "officia");            

            DiaryControllerGetRecurringAppointmentsResponse res = sdk.diaryController.diaryControllerGetRecurringAppointments(req);

            if (res.diaryAppointmentModelResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerPostAppointmentForm

Post an appointment into a valid diary allocation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerPostAppointmentFormRequest;
import org.openapis.openapi.models.operations.DiaryControllerPostAppointmentFormResponse;
import org.openapis.openapi.models.shared.DiaryAppointmentDetails;
import org.openapis.openapi.models.shared.DiaryBookingModel;
import org.openapis.openapi.models.shared.DiaryGuestDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerPostAppointmentFormRequest req = new DiaryControllerPostAppointmentFormRequest(                new DiaryAppointmentDetails() {{
                                allocationDetails = new DiaryBookingModel() {{
                                    end = OffsetDateTime.parse("2022-09-18T08:27:00.721Z");
                                    staffID = "deleniti";
                                    staffName = "hic";
                                    start = OffsetDateTime.parse("2021-06-08T13:49:32.889Z");
                                }};;
                                appointmentType = "beatae";
                                extraComments = "commodi";
                                guests = new org.openapis.openapi.models.shared.DiaryGuestDetails[]{{
                                    add(new DiaryGuestDetails() {{
                                        allowMarketingCorrespondence = false;
                                        emailAddress = "modi";
                                        forename = "qui";
                                        mobilePhone = "impedit";
                                        oid = "cum";
                                        surname = "esse";
                                    }}),
                                    add(new DiaryGuestDetails() {{
                                        allowMarketingCorrespondence = false;
                                        emailAddress = "ipsum";
                                        forename = "excepturi";
                                        mobilePhone = "aspernatur";
                                        oid = "perferendis";
                                        surname = "ad";
                                    }}),
                                }};
                                subject = "natus";
                            }};,                 new String[]{{
                                add("iste"),
                            }}, "dolor") {{
                lettings = false;
            }};            

            DiaryControllerPostAppointmentFormResponse res = sdk.diaryController.diaryControllerPostAppointmentForm(req);

            if (res.diaryControllerPostAppointmentForm200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerPostAppointmentJson

Post an appointment into a valid diary allocation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerPostAppointmentJsonRequest;
import org.openapis.openapi.models.operations.DiaryControllerPostAppointmentJsonResponse;
import org.openapis.openapi.models.shared.DiaryAppointmentDetails;
import org.openapis.openapi.models.shared.DiaryBookingModel;
import org.openapis.openapi.models.shared.DiaryGuestDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerPostAppointmentJsonRequest req = new DiaryControllerPostAppointmentJsonRequest(                new DiaryAppointmentDetails() {{
                                allocationDetails = new DiaryBookingModel() {{
                                    end = OffsetDateTime.parse("2022-03-24T20:42:46.563Z");
                                    staffID = "hic";
                                    staffName = "saepe";
                                    start = OffsetDateTime.parse("2022-02-06T12:52:33.708Z");
                                }};;
                                appointmentType = "corporis";
                                extraComments = "iste";
                                guests = new org.openapis.openapi.models.shared.DiaryGuestDetails[]{{
                                    add(new DiaryGuestDetails() {{
                                        allowMarketingCorrespondence = false;
                                        emailAddress = "saepe";
                                        forename = "quidem";
                                        mobilePhone = "architecto";
                                        oid = "ipsa";
                                        surname = "reiciendis";
                                    }}),
                                    add(new DiaryGuestDetails() {{
                                        allowMarketingCorrespondence = false;
                                        emailAddress = "est";
                                        forename = "mollitia";
                                        mobilePhone = "laborum";
                                        oid = "dolores";
                                        surname = "dolorem";
                                    }}),
                                }};
                                subject = "corporis";
                            }};,                 new String[]{{
                                add("nobis"),
                            }}, "enim") {{
                lettings = false;
            }};            

            DiaryControllerPostAppointmentJsonResponse res = sdk.diaryController.diaryControllerPostAppointmentJson(req);

            if (res.diaryControllerPostAppointmentJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerPostAppointmentRaw

Post an appointment into a valid diary allocation

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerPostAppointmentRawRequest;
import org.openapis.openapi.models.operations.DiaryControllerPostAppointmentRawResponse;
import org.openapis.openapi.models.shared.DiaryAppointmentDetails;
import org.openapis.openapi.models.shared.DiaryBookingModel;
import org.openapis.openapi.models.shared.DiaryGuestDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerPostAppointmentRawRequest req = new DiaryControllerPostAppointmentRawRequest("omnis".getBytes(),                 new String[]{{
                                add("minima"),
                                add("excepturi"),
                            }}, "accusantium") {{
                lettings = false;
            }};            

            DiaryControllerPostAppointmentRawResponse res = sdk.diaryController.diaryControllerPostAppointmentRaw(req);

            if (res.diaryControllerPostAppointmentRaw200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerPutAppointmentForm

Update an existing appointment using its unique identifier

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerPutAppointmentFormRequest;
import org.openapis.openapi.models.operations.DiaryControllerPutAppointmentFormResponse;
import org.openapis.openapi.models.shared.DiaryAppointmentDetails;
import org.openapis.openapi.models.shared.DiaryBookingModel;
import org.openapis.openapi.models.shared.DiaryGuestDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerPutAppointmentFormRequest req = new DiaryControllerPutAppointmentFormRequest(                new DiaryAppointmentDetails() {{
                                allocationDetails = new DiaryBookingModel() {{
                                    end = OffsetDateTime.parse("2022-05-14T11:45:33.094Z");
                                    staffID = "doloribus";
                                    staffName = "sapiente";
                                    start = OffsetDateTime.parse("2022-05-07T17:33:24.154Z");
                                }};;
                                appointmentType = "dolorem";
                                extraComments = "culpa";
                                guests = new org.openapis.openapi.models.shared.DiaryGuestDetails[]{{
                                    add(new DiaryGuestDetails() {{
                                        allowMarketingCorrespondence = false;
                                        emailAddress = "repellat";
                                        forename = "mollitia";
                                        mobilePhone = "occaecati";
                                        oid = "numquam";
                                        surname = "commodi";
                                    }}),
                                }};
                                subject = "quam";
                            }};, "molestiae", "velit") {{
                allowMarketingCorrespondence = false;
                lettings = false;
            }};            

            DiaryControllerPutAppointmentFormResponse res = sdk.diaryController.diaryControllerPutAppointmentForm(req);

            if (res.diaryControllerPutAppointmentForm200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerPutAppointmentJson

Update an existing appointment using its unique identifier

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerPutAppointmentJsonRequest;
import org.openapis.openapi.models.operations.DiaryControllerPutAppointmentJsonResponse;
import org.openapis.openapi.models.shared.DiaryAppointmentDetails;
import org.openapis.openapi.models.shared.DiaryBookingModel;
import org.openapis.openapi.models.shared.DiaryGuestDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerPutAppointmentJsonRequest req = new DiaryControllerPutAppointmentJsonRequest(                new DiaryAppointmentDetails() {{
                                allocationDetails = new DiaryBookingModel() {{
                                    end = OffsetDateTime.parse("2022-09-06T22:51:09.401Z");
                                    staffID = "quis";
                                    staffName = "vitae";
                                    start = OffsetDateTime.parse("2021-09-08T21:06:19.630Z");
                                }};;
                                appointmentType = "enim";
                                extraComments = "odit";
                                guests = new org.openapis.openapi.models.shared.DiaryGuestDetails[]{{
                                    add(new DiaryGuestDetails() {{
                                        allowMarketingCorrespondence = false;
                                        emailAddress = "sequi";
                                        forename = "tenetur";
                                        mobilePhone = "ipsam";
                                        oid = "id";
                                        surname = "possimus";
                                    }}),
                                    add(new DiaryGuestDetails() {{
                                        allowMarketingCorrespondence = false;
                                        emailAddress = "aut";
                                        forename = "quasi";
                                        mobilePhone = "error";
                                        oid = "temporibus";
                                        surname = "laborum";
                                    }}),
                                    add(new DiaryGuestDetails() {{
                                        allowMarketingCorrespondence = false;
                                        emailAddress = "quasi";
                                        forename = "reiciendis";
                                        mobilePhone = "voluptatibus";
                                        oid = "vero";
                                        surname = "nihil";
                                    }}),
                                    add(new DiaryGuestDetails() {{
                                        allowMarketingCorrespondence = false;
                                        emailAddress = "praesentium";
                                        forename = "voluptatibus";
                                        mobilePhone = "ipsa";
                                        oid = "omnis";
                                        surname = "voluptate";
                                    }}),
                                }};
                                subject = "cum";
                            }};, "perferendis", "doloremque") {{
                allowMarketingCorrespondence = false;
                lettings = false;
            }};            

            DiaryControllerPutAppointmentJsonResponse res = sdk.diaryController.diaryControllerPutAppointmentJson(req);

            if (res.diaryControllerPutAppointmentJSON200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerPutAppointmentRaw

Update an existing appointment using its unique identifier

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerPutAppointmentRawRequest;
import org.openapis.openapi.models.operations.DiaryControllerPutAppointmentRawResponse;
import org.openapis.openapi.models.shared.DiaryAppointmentDetails;
import org.openapis.openapi.models.shared.DiaryBookingModel;
import org.openapis.openapi.models.shared.DiaryGuestDetails;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerPutAppointmentRawRequest req = new DiaryControllerPutAppointmentRawRequest("reprehenderit".getBytes(), "ut", "maiores") {{
                allowMarketingCorrespondence = false;
                lettings = false;
            }};            

            DiaryControllerPutAppointmentRawResponse res = sdk.diaryController.diaryControllerPutAppointmentRaw(req);

            if (res.diaryControllerPutAppointmentRaw200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## diaryControllerSearchGuest

Match Guest Parameters with existing applicants

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DiaryControllerSearchGuestRequest;
import org.openapis.openapi.models.operations.DiaryControllerSearchGuestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DiaryControllerSearchGuestRequest req = new DiaryControllerSearchGuestRequest("dicta", 359444, "dolore", "iusto", 118727, "harum", "enim");            

            DiaryControllerSearchGuestResponse res = sdk.diaryController.diaryControllerSearchGuest(req);

            if (res.guestDiaryParametersResultsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
