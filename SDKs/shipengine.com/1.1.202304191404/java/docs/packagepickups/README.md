# packagePickups

## Overview

Scheduled package pickups

### Available Operations

* [deleteScheduledPickup](#deletescheduledpickup) - Delete a Scheduled Pickup
* [getPickupById](#getpickupbyid) - Get Pickup By ID
* [listScheduledPickups](#listscheduledpickups) - List Scheduled Pickups
* [schedulePickup](#schedulepickup) - Schedule a Pickup

## deleteScheduledPickup

Delete a previously-scheduled pickup by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteScheduledPickupRequest;
import org.openapis.openapi.models.operations.DeleteScheduledPickupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteScheduledPickupRequest req = new DeleteScheduledPickupRequest("pik_3YcKU5zdtJuCqoeNwyqqbW");            

            DeleteScheduledPickupResponse res = sdk.packagePickups.deleteScheduledPickup(req);

            if (res.deletePickupByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPickupById

Get Pickup By ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPickupByIdRequest;
import org.openapis.openapi.models.operations.GetPickupByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetPickupByIdRequest req = new GetPickupByIdRequest("pik_3YcKU5zdtJuCqoeNwyqqbW");            

            GetPickupByIdResponse res = sdk.packagePickups.getPickupById(req);

            if (res.getPickupByIdResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listScheduledPickups

List all pickups that have been scheduled for this carrier

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListScheduledPickupsRequest;
import org.openapis.openapi.models.operations.ListScheduledPickupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListScheduledPickupsRequest req = new ListScheduledPickupsRequest() {{
                carrierId = "se-28529731";
                createdAtEnd = OffsetDateTime.parse("2022-02-18T18:29:26.833Z");
                createdAtStart = OffsetDateTime.parse("2022-01-09T22:25:53.570Z");
                page = 16627;
                pageSize = 855804;
                warehouseId = "se-28529731";
            }};            

            ListScheduledPickupsResponse res = sdk.packagePickups.listScheduledPickups(req);

            if (res.getPickupsResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## schedulePickup

Schedule a package pickup with a carrier

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SchedulePickupResponse;
import org.openapis.openapi.models.shared.ContactDetails;
import org.openapis.openapi.models.shared.PickupWindow;
import org.openapis.openapi.models.shared.SchedulePickupRequestBodyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.SchedulePickupRequestBodyInput req = new SchedulePickupRequestBodyInput(                new ContactDetails("john.doe@example.com", "aut", "cumque");,                 new String[]{{
                                add("se-28529731"),
                                add("se-28529731"),
                            }},                 new PickupWindow(OffsetDateTime.parse("2018-09-23T15:00:00.000Z"), OffsetDateTime.parse("2018-09-23T15:00:00.000Z"));) {{
                pickupNotes = "hic";
            }};            

            SchedulePickupResponse res = sdk.packagePickups.schedulePickup(req);

            if (res.schedulePickupResponseBody != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
