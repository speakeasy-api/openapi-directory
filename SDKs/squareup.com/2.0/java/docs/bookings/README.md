# bookings

### Available Operations

* [cancelBooking](#cancelbooking) - CancelBooking
* [createBooking](#createbooking) - CreateBooking
* [listTeamMemberBookingProfiles](#listteammemberbookingprofiles) - ListTeamMemberBookingProfiles
* [retrieveBooking](#retrievebooking) - RetrieveBooking
* [retrieveBusinessBookingProfile](#retrievebusinessbookingprofile) - RetrieveBusinessBookingProfile
* [retrieveTeamMemberBookingProfile](#retrieveteammemberbookingprofile) - RetrieveTeamMemberBookingProfile
* [searchAvailability](#searchavailability) - SearchAvailability
* [updateBooking](#updatebooking) - UpdateBooking

## cancelBooking

Cancels an existing booking.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelBookingRequest;
import org.openapis.openapi.models.operations.CancelBookingResponse;
import org.openapis.openapi.models.operations.CancelBookingSecurity;
import org.openapis.openapi.models.shared.CancelBookingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CancelBookingRequest req = new CancelBookingRequest(                new CancelBookingRequest() {{
                                bookingVersion = 437587L;
                                idempotencyKey = "magnam";
                            }};, "debitis");            

            CancelBookingResponse res = sdk.bookings.cancelBooking(req, new CancelBookingSecurity("ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.cancelBookingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBooking

Creates a booking.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBookingResponse;
import org.openapis.openapi.models.operations.CreateBookingSecurity;
import org.openapis.openapi.models.shared.AppointmentSegment;
import org.openapis.openapi.models.shared.Booking;
import org.openapis.openapi.models.shared.CreateBookingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateBookingRequest req = new CreateBookingRequest(                new Booking() {{
                                appointmentSegments = new org.openapis.openapi.models.shared.AppointmentSegment[]{{
                                    add(new AppointmentSegment(812169L, "voluptatum", 479977L, "excepturi") {{
                                        durationMinutes = 272656L;
                                        serviceVariationId = "suscipit";
                                        serviceVariationVersion = 477665L;
                                        teamMemberId = "minus";
                                    }}),
                                    add(new AppointmentSegment(337396L, "veritatis", 648172L, "perferendis") {{
                                        durationMinutes = 392785L;
                                        serviceVariationId = "recusandae";
                                        serviceVariationVersion = 836079L;
                                        teamMemberId = "ab";
                                    }}),
                                    add(new AppointmentSegment(140350L, "at", 870088L, "maiores") {{
                                        durationMinutes = 368241L;
                                        serviceVariationId = "repellendus";
                                        serviceVariationVersion = 957156L;
                                        teamMemberId = "quo";
                                    }}),
                                    add(new AppointmentSegment(520478L, "porro", 678880L, "dicta") {{
                                        durationMinutes = 473608L;
                                        serviceVariationId = "quod";
                                        serviceVariationVersion = 800911L;
                                        teamMemberId = "esse";
                                    }}),
                                }};
                                createdAt = "nam";
                                customerId = "officia";
                                customerNote = "occaecati";
                                id = "28fc8167-42cb-4739-a059-29396fea7596";
                                locationId = "saepe";
                                sellerNote = "quidem";
                                startAt = "architecto";
                                status = "ipsa";
                                updatedAt = "reiciendis";
                                version = 666767L;
                            }};) {{
                idempotencyKey = "mollitia";
            }};            

            CreateBookingResponse res = sdk.bookings.createBooking(req, new CreateBookingSecurity("laborum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createBookingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTeamMemberBookingProfiles

Lists booking profiles for team members.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTeamMemberBookingProfilesRequest;
import org.openapis.openapi.models.operations.ListTeamMemberBookingProfilesResponse;
import org.openapis.openapi.models.operations.ListTeamMemberBookingProfilesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListTeamMemberBookingProfilesRequest req = new ListTeamMemberBookingProfilesRequest() {{
                bookableOnly = false;
                cursor = "dolores";
                limit = 210382L;
                locationId = "corporis";
            }};            

            ListTeamMemberBookingProfilesResponse res = sdk.bookings.listTeamMemberBookingProfiles(req, new ListTeamMemberBookingProfilesSecurity("explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTeamMemberBookingProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveBooking

Retrieves a booking.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveBookingRequest;
import org.openapis.openapi.models.operations.RetrieveBookingResponse;
import org.openapis.openapi.models.operations.RetrieveBookingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveBookingRequest req = new RetrieveBookingRequest("nobis");            

            RetrieveBookingResponse res = sdk.bookings.retrieveBooking(req, new RetrieveBookingSecurity("enim") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveBookingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveBusinessBookingProfile

Retrieves a seller's booking profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveBusinessBookingProfileResponse;
import org.openapis.openapi.models.operations.RetrieveBusinessBookingProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveBusinessBookingProfileResponse res = sdk.bookings.retrieveBusinessBookingProfile(new RetrieveBusinessBookingProfileSecurity("omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveBusinessBookingProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveTeamMemberBookingProfile

Retrieves a team member's booking profile.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveTeamMemberBookingProfileRequest;
import org.openapis.openapi.models.operations.RetrieveTeamMemberBookingProfileResponse;
import org.openapis.openapi.models.operations.RetrieveTeamMemberBookingProfileSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveTeamMemberBookingProfileRequest req = new RetrieveTeamMemberBookingProfileRequest("nemo");            

            RetrieveTeamMemberBookingProfileResponse res = sdk.bookings.retrieveTeamMemberBookingProfile(req, new RetrieveTeamMemberBookingProfileSecurity("minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveTeamMemberBookingProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchAvailability

Searches for availabilities for booking.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchAvailabilityResponse;
import org.openapis.openapi.models.operations.SearchAvailabilitySecurity;
import org.openapis.openapi.models.shared.FilterValue;
import org.openapis.openapi.models.shared.SearchAvailabilityFilter;
import org.openapis.openapi.models.shared.SearchAvailabilityQuery;
import org.openapis.openapi.models.shared.SearchAvailabilityRequest;
import org.openapis.openapi.models.shared.SegmentFilter;
import org.openapis.openapi.models.shared.TimeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SearchAvailabilityRequest req = new SearchAvailabilityRequest(                new SearchAvailabilityQuery(                new SearchAvailabilityFilter(                new TimeRange() {{
                                                                endAt = "excepturi";
                                                                startAt = "accusantium";
                                                            }};) {{
                                                bookingId = "iure";
                                                locationId = "culpa";
                                                segmentFilters = new org.openapis.openapi.models.shared.SegmentFilter[]{{
                                                    add(new SegmentFilter("mollitia") {{
                                                        serviceVariationId = "sapiente";
                                                        teamMemberIdFilter = new FilterValue() {{
                                                            all = new String[]{{
                                                                add("mollitia"),
                                                            }};
                                                            any = new String[]{{
                                                                add("culpa"),
                                                            }};
                                                            none = new String[]{{
                                                                add("repellat"),
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new SegmentFilter("vitae") {{
                                                        serviceVariationId = "occaecati";
                                                        teamMemberIdFilter = new FilterValue() {{
                                                            all = new String[]{{
                                                                add("commodi"),
                                                                add("quam"),
                                                            }};
                                                            any = new String[]{{
                                                                add("velit"),
                                                                add("error"),
                                                            }};
                                                            none = new String[]{{
                                                                add("quis"),
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new SegmentFilter("aut") {{
                                                        serviceVariationId = "laborum";
                                                        teamMemberIdFilter = new FilterValue() {{
                                                            all = new String[]{{
                                                                add("enim"),
                                                                add("odit"),
                                                                add("quo"),
                                                            }};
                                                            any = new String[]{{
                                                                add("tenetur"),
                                                            }};
                                                            none = new String[]{{
                                                                add("id"),
                                                                add("possimus"),
                                                            }};
                                                        }};
                                                    }}),
                                                    add(new SegmentFilter("perferendis") {{
                                                        serviceVariationId = "quasi";
                                                        teamMemberIdFilter = new FilterValue() {{
                                                            all = new String[]{{
                                                                add("temporibus"),
                                                                add("laborum"),
                                                                add("quasi"),
                                                            }};
                                                            any = new String[]{{
                                                                add("voluptatibus"),
                                                                add("vero"),
                                                                add("nihil"),
                                                                add("praesentium"),
                                                            }};
                                                            none = new String[]{{
                                                                add("ipsa"),
                                                                add("omnis"),
                                                                add("voluptate"),
                                                                add("cum"),
                                                            }};
                                                        }};
                                                    }}),
                                                }};
                                            }};););            

            SearchAvailabilityResponse res = sdk.bookings.searchAvailability(req, new SearchAvailabilitySecurity("doloremque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.searchAvailabilityResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBooking

Updates a booking.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBookingRequest;
import org.openapis.openapi.models.operations.UpdateBookingResponse;
import org.openapis.openapi.models.operations.UpdateBookingSecurity;
import org.openapis.openapi.models.shared.AppointmentSegment;
import org.openapis.openapi.models.shared.Booking;
import org.openapis.openapi.models.shared.UpdateBookingRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateBookingRequest req = new UpdateBookingRequest(                new UpdateBookingRequest(                new Booking() {{
                                                appointmentSegments = new org.openapis.openapi.models.shared.AppointmentSegment[]{{
                                                    add(new AppointmentSegment(296140L, "iusto", 118727L, "harum") {{
                                                        durationMinutes = 282807L;
                                                        serviceVariationId = "maiores";
                                                        serviceVariationVersion = 120196L;
                                                        teamMemberId = "corporis";
                                                    }}),
                                                    add(new AppointmentSegment(64147L, "ipsum", 692472L, "molestias") {{
                                                        durationMinutes = 317983L;
                                                        serviceVariationId = "accusamus";
                                                        serviceVariationVersion = 414263L;
                                                        teamMemberId = "repudiandae";
                                                    }}),
                                                }};
                                                createdAt = "excepturi";
                                                customerId = "pariatur";
                                                customerNote = "modi";
                                                id = "88e1e91e-450a-4d2a-bd44-269802d502a9";
                                                locationId = "tempora";
                                                sellerNote = "facilis";
                                                startAt = "tempore";
                                                status = "labore";
                                                updatedAt = "delectus";
                                                version = 433288L;
                                            }};) {{
                                idempotencyKey = "non";
                            }};, "eligendi");            

            UpdateBookingResponse res = sdk.bookings.updateBooking(req, new UpdateBookingSecurity("sint") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateBookingResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
