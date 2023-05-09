# rootEvent

## Overview

Events.

### Available Operations

* [getEventsCsvDownloadLink](#geteventscsvdownloadlink) - Download summary of events as a CSV file
* [queryEventV1](#queryeventv1) - Get information for all events
* [queryLatestEventsV1](#querylatesteventsv1) - Get latest events with their associated event series information

## getEventsCsvDownloadLink

Download summary of the related events that match the value specified in the following categories: event type, status, object name or ID, eventSeriesId, object type, and limit events by dates.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsCsvDownloadLinkEventSeriesStatusEnum;
import org.openapis.openapi.models.operations.GetEventsCsvDownloadLinkEventSeverityEnum;
import org.openapis.openapi.models.operations.GetEventsCsvDownloadLinkEventStatusEnum;
import org.openapis.openapi.models.operations.GetEventsCsvDownloadLinkEventTypeEnum;
import org.openapis.openapi.models.operations.GetEventsCsvDownloadLinkObjectTypeEnum;
import org.openapis.openapi.models.operations.GetEventsCsvDownloadLinkOrderByTimeEnum;
import org.openapis.openapi.models.operations.GetEventsCsvDownloadLinkRequest;
import org.openapis.openapi.models.operations.GetEventsCsvDownloadLinkResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("porro", "eum") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetEventsCsvDownloadLinkRequest req = new GetEventsCsvDownloadLinkRequest() {{
                afterDate = OffsetDateTime.parse("2021-12-24T16:30:16.544Z");
                afterId = "consequuntur";
                beforeDate = OffsetDateTime.parse("2022-09-18T00:06:33.286Z");
                eventSeriesStatus = GetEventsCsvDownloadLinkEventSeriesStatusEnum.CANCELING;
                eventSeverity = GetEventsCsvDownloadLinkEventSeverityEnum.WARNING;
                eventStatus = GetEventsCsvDownloadLinkEventStatusEnum.INFO;
                eventType = GetEventsCsvDownloadLinkEventTypeEnum.INSTANTIATE;
                limit = 128860;
                objectIds = new String[]{{
                    add("nisi"),
                    add("fugit"),
                }};
                objectName = "sapiente";
                objectType = GetEventsCsvDownloadLinkObjectTypeEnum.AGGREGATE_VSPHERE_VM;
                orderByTime = GetEventsCsvDownloadLinkOrderByTimeEnum.ASC;
            }};            

            GetEventsCsvDownloadLinkResponse res = sdk.rootEvent.getEventsCsvDownloadLink(req);

            if (res.eventCsvDownloadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryEventV1

Returns information for all events. Only Global or Read Only Admins and Support users have authorization to use this endpoint. Accepts filters. For similar functionality to the previous /internal/event endpoint, use the /v1/event/latest endpoint.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryEventV1OrderByTimeEnum;
import org.openapis.openapi.models.operations.QueryEventV1Request;
import org.openapis.openapi.models.operations.QueryEventV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("explicabo", "saepe") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryEventV1Request req = new QueryEventV1Request() {{
                afterDate = OffsetDateTime.parse("2021-11-30T00:31:10.440Z");
                afterId = "et";
                beforeDate = OffsetDateTime.parse("2022-02-02T15:37:41.657Z");
                limit = 882042;
                orderByTime = QueryEventV1OrderByTimeEnum.ASC;
                shouldIncludeEventSeries = false;
            }};            

            QueryEventV1Response res = sdk.rootEvent.queryEventV1(req);

            if (res.eventsAndSeriesSummariesV1 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## queryLatestEventsV1

Get the latest event, event series status, and the number of warning events for all event series. This endpoint has similar/enhanced functionality to the previously deprecated /internal/event endpoint.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryLatestEventsV1EventSeriesStatusEnum;
import org.openapis.openapi.models.operations.QueryLatestEventsV1EventSeverityEnum;
import org.openapis.openapi.models.operations.QueryLatestEventsV1EventStatusEnum;
import org.openapis.openapi.models.operations.QueryLatestEventsV1EventTypeEnum;
import org.openapis.openapi.models.operations.QueryLatestEventsV1ObjectTypeEnum;
import org.openapis.openapi.models.operations.QueryLatestEventsV1OrderByTimeEnum;
import org.openapis.openapi.models.operations.QueryLatestEventsV1Request;
import org.openapis.openapi.models.operations.QueryLatestEventsV1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("esse", "quod") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            QueryLatestEventsV1Request req = new QueryLatestEventsV1Request() {{
                afterDate = OffsetDateTime.parse("2021-03-31T16:39:55.446Z");
                afterId = "aliquid";
                beforeDate = OffsetDateTime.parse("2022-02-05T00:34:15.868Z");
                eventSeriesStatus = QueryLatestEventsV1EventSeriesStatusEnum.SCHEDULED;
                eventSeverity = QueryLatestEventsV1EventSeverityEnum.INFORMATIONAL;
                eventStatus = QueryLatestEventsV1EventStatusEnum.QUEUED;
                eventType = QueryLatestEventsV1EventTypeEnum.RESOURCE_OPERATIONS;
                limit = 580197;
                objectIds = new String[]{{
                    add("distinctio"),
                    add("eligendi"),
                }};
                objectName = "sit";
                objectType = QueryLatestEventsV1ObjectTypeEnum.ORACLE_RAC;
                orderByTime = QueryLatestEventsV1OrderByTimeEnum.DESC;
                shouldIncludeEventSeries = false;
            }};            

            QueryLatestEventsV1Response res = sdk.rootEvent.queryLatestEventsV1(req);

            if (res.activityLogSummaryV1ListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
