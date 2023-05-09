# cashDrawers

### Available Operations

* [listCashDrawerShiftEvents](#listcashdrawershiftevents) - ListCashDrawerShiftEvents
* [listCashDrawerShifts](#listcashdrawershifts) - ListCashDrawerShifts
* [retrieveCashDrawerShift](#retrievecashdrawershift) - RetrieveCashDrawerShift

## listCashDrawerShiftEvents

Provides a paginated list of events for a single cash drawer shift.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCashDrawerShiftEventsRequest;
import org.openapis.openapi.models.operations.ListCashDrawerShiftEventsResponse;
import org.openapis.openapi.models.operations.ListCashDrawerShiftEventsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCashDrawerShiftEventsRequest req = new ListCashDrawerShiftEventsRequest("in", "architecto") {{
                cursor = "architecto";
                limit = 919483L;
            }};            

            ListCashDrawerShiftEventsResponse res = sdk.cashDrawers.listCashDrawerShiftEvents(req, new ListCashDrawerShiftEventsSecurity("ullam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCashDrawerShiftEventsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCashDrawerShifts

Provides the details for all of the cash drawer shifts for a location
in a date range.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCashDrawerShiftsRequest;
import org.openapis.openapi.models.operations.ListCashDrawerShiftsResponse;
import org.openapis.openapi.models.operations.ListCashDrawerShiftsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCashDrawerShiftsRequest req = new ListCashDrawerShiftsRequest("expedita") {{
                beginTime = "nihil";
                cursor = "repellat";
                endTime = "quibusdam";
                limit = 149448L;
                sortOrder = "saepe";
            }};            

            ListCashDrawerShiftsResponse res = sdk.cashDrawers.listCashDrawerShifts(req, new ListCashDrawerShiftsSecurity("pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listCashDrawerShiftsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveCashDrawerShift

Provides the summary details for a single cash drawer shift. See
[ListCashDrawerShiftEvents](https://developer.squareup.com/reference/square_2021-08-18/cash-drawers-api/list-cash-drawer-shift-events) for a list of cash drawer shift events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveCashDrawerShiftRequest;
import org.openapis.openapi.models.operations.RetrieveCashDrawerShiftResponse;
import org.openapis.openapi.models.operations.RetrieveCashDrawerShiftSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveCashDrawerShiftRequest req = new RetrieveCashDrawerShiftRequest("accusantium", "consequuntur");            

            RetrieveCashDrawerShiftResponse res = sdk.cashDrawers.retrieveCashDrawerShift(req, new RetrieveCashDrawerShiftSecurity("praesentium") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retrieveCashDrawerShiftResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
