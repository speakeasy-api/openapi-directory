# operations

### Available Operations

* [operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet](#operationsflightstatusarrivalsbyairportcodeandfromdatetimeget) - Flight Status at Arrival Airport
* [operationsFlightstatusByFlightNumberAndDateGet](#operationsflightstatusbyflightnumberanddateget) - Flight Status
* [operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet](#operationsflightstatusdeparturesbyairportcodeandfromdatetimeget) - Flight Status at Departure Airport
* [operationsFlightstatusRouteDateByOriginAndDestinationGet](#operationsflightstatusroutedatebyoriginanddestinationget) - Flight Status by Route
* [operationsSchedulesFromDateTimeByOriginAndDestinationGet](#operationsschedulesfromdatetimebyoriginanddestinationget) - Flight Schedules

## operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet

Status of all arrivals at a given airport up to 4 hours from the provided date time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest;
import org.openapis.openapi.models.operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse;
import org.openapis.openapi.models.operations.OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest req = new OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetRequest("quis", "veritatis", "deserunt") {{
                limit = "perferendis";
                offset = "ipsam";
            }};            

            OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetResponse res = sdk.operations.operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet(req, new OperationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGetSecurity("repellendus") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationsFlightstatusArrivalsByAirportCodeAndFromDateTimeGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## operationsFlightstatusByFlightNumberAndDateGet

Status of a particular flight (boarding, delayed, etc.).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OperationsFlightstatusByFlightNumberAndDateGetRequest;
import org.openapis.openapi.models.operations.OperationsFlightstatusByFlightNumberAndDateGetResponse;
import org.openapis.openapi.models.operations.OperationsFlightstatusByFlightNumberAndDateGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OperationsFlightstatusByFlightNumberAndDateGetRequest req = new OperationsFlightstatusByFlightNumberAndDateGetRequest("sapiente", "quo", "odit") {{
                limit = "at";
                offset = "at";
            }};            

            OperationsFlightstatusByFlightNumberAndDateGetResponse res = sdk.operations.operationsFlightstatusByFlightNumberAndDateGet(req, new OperationsFlightstatusByFlightNumberAndDateGetSecurity("maiores") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationsFlightstatusByFlightNumberAndDateGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet

Status of all departures from a given airport up to 4 hours from the provided date time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest;
import org.openapis.openapi.models.operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse;
import org.openapis.openapi.models.operations.OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest req = new OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetRequest("molestiae", "quod", "quod") {{
                limit = "esse";
                offset = "totam";
            }};            

            OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetResponse res = sdk.operations.operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet(req, new OperationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGetSecurity("porro") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationsFlightstatusDeparturesByAirportCodeAndFromDateTimeGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## operationsFlightstatusRouteDateByOriginAndDestinationGet

Status of flights between a given origin and destination on a given date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest;
import org.openapis.openapi.models.operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse;
import org.openapis.openapi.models.operations.OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest req = new OperationsFlightstatusRouteDateByOriginAndDestinationGetRequest("dolorum", "dicta", "nam", "officia") {{
                limit = "occaecati";
                offset = "fugit";
            }};            

            OperationsFlightstatusRouteDateByOriginAndDestinationGetResponse res = sdk.operations.operationsFlightstatusRouteDateByOriginAndDestinationGet(req, new OperationsFlightstatusRouteDateByOriginAndDestinationGetSecurity("deleniti") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationsFlightstatusRouteDateByOriginAndDestinationGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## operationsSchedulesFromDateTimeByOriginAndDestinationGet

Scheduled flights between given airports on a given date.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest;
import org.openapis.openapi.models.operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse;
import org.openapis.openapi.models.operations.OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest req = new OperationsSchedulesFromDateTimeByOriginAndDestinationGetRequest("hic", "optio", "totam", "beatae") {{
                directFlights = false;
                limit = "commodi";
                offset = "molestiae";
            }};            

            OperationsSchedulesFromDateTimeByOriginAndDestinationGetResponse res = sdk.operations.operationsSchedulesFromDateTimeByOriginAndDestinationGet(req, new OperationsSchedulesFromDateTimeByOriginAndDestinationGetSecurity("modi") {{
                auth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operationsSchedulesFromDateTimeByOriginAndDestinationGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
