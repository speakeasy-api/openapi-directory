# reports

## Overview

Reports generation

### Available Operations

* [getReportsEvents](#getreportsevents) - Fetch a list of Events within the time period for the Devices or Groups
* [getReportsRoute](#getreportsroute) - Fetch a list of Positions within the time period for the Devices or Groups
* [getReportsStops](#getreportsstops) - Fetch a list of ReportStops within the time period for the Devices or Groups
* [getReportsSummary](#getreportssummary) - Fetch a list of ReportSummary within the time period for the Devices or Groups
* [getReportsTrips](#getreportstrips) - Fetch a list of ReportTrips within the time period for the Devices or Groups

## getReportsEvents

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsEventsRequest;
import org.openapis.openapi.models.operations.GetReportsEventsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet", "tempore") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetReportsEventsRequest req = new GetReportsEventsRequest(OffsetDateTime.parse("2022-03-28T22:24:48.068Z"), OffsetDateTime.parse("2022-10-15T03:23:12.773Z")) {{
                deviceId = new Long[]{{
                    add(518201L),
                    add(471752L),
                    add(25662L),
                    add(711584L),
                }};
                groupId = new Long[]{{
                    add(153694L),
                }};
                type = new String[]{{
                    add("libero"),
                    add("voluptas"),
                }};
            }};            

            GetReportsEventsResponse res = sdk.reports.getReportsEvents(req);

            if (res.events != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportsRoute

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsRouteRequest;
import org.openapis.openapi.models.operations.GetReportsRouteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt", "quam") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetReportsRouteRequest req = new GetReportsRouteRequest(OffsetDateTime.parse("2022-09-21T15:58:20.330Z"), OffsetDateTime.parse("2022-05-31T19:46:08.472Z")) {{
                deviceId = new Long[]{{
                    add(863856L),
                    add(747080L),
                    add(117531L),
                    add(674848L),
                }};
                groupId = new Long[]{{
                    add(276894L),
                    add(132068L),
                    add(174909L),
                }};
            }};            

            GetReportsRouteResponse res = sdk.reports.getReportsRoute(req);

            if (res.positions != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportsStops

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsStopsRequest;
import org.openapis.openapi.models.operations.GetReportsStopsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio", "facilis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetReportsStopsRequest req = new GetReportsStopsRequest(OffsetDateTime.parse("2022-07-15T22:48:14.867Z"), OffsetDateTime.parse("2021-04-27T11:41:31.258Z")) {{
                deviceId = new Long[]{{
                    add(204865L),
                }};
                groupId = new Long[]{{
                    add(164959L),
                }};
            }};            

            GetReportsStopsResponse res = sdk.reports.getReportsStops(req);

            if (res.reportStops != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportsSummary

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsSummaryRequest;
import org.openapis.openapi.models.operations.GetReportsSummaryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio", "sunt") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetReportsSummaryRequest req = new GetReportsSummaryRequest(OffsetDateTime.parse("2022-04-12T10:34:24.004Z"), OffsetDateTime.parse("2022-11-28T15:41:44.846Z")) {{
                deviceId = new Long[]{{
                    add(746994L),
                    add(748664L),
                    add(92596L),
                    add(903720L),
                }};
                groupId = new Long[]{{
                    add(83422L),
                }};
            }};            

            GetReportsSummaryResponse res = sdk.reports.getReportsSummary(req);

            if (res.reportSummaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportsTrips

At least one _deviceId_ or one _groupId_ must be passed

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportsTripsRequest;
import org.openapis.openapi.models.operations.GetReportsTripsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis", "quos") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetReportsTripsRequest req = new GetReportsTripsRequest(OffsetDateTime.parse("2021-10-31T07:58:44.750Z"), OffsetDateTime.parse("2022-01-14T21:26:14.171Z")) {{
                deviceId = new Long[]{{
                    add(292147L),
                }};
                groupId = new Long[]{{
                    add(240829L),
                    add(677263L),
                }};
            }};            

            GetReportsTripsResponse res = sdk.reports.getReportsTrips(req);

            if (res.reportTrips != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
