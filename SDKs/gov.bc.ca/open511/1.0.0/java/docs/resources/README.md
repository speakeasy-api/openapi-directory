# resources

### Available Operations

* [getAreas](#getareas) - Lists the geographical areas (e.g. districts) that can be used to filter events.
* [getEvents](#getevents) - Lists road events
* [getJurisdiction](#getjurisdiction) - Lists the jurisdictions publishing data through this Open511 API implementation
* [getJurisdictiongeography](#getjurisdictiongeography) - Provides the geographical boundaries for all the jurisdictions.

## getAreas

Lists the geographical areas (e.g. districts) that can be used to filter events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAreasFormatEnum;
import org.openapis.openapi.models.operations.GetAreasRequest;
import org.openapis.openapi.models.operations.GetAreasResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAreasRequest req = new GetAreasRequest() {{
                format = GetAreasFormatEnum.XML;
            }};            

            GetAreasResponse res = sdk.resources.getAreas(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEvents

The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventsEventTypeEnum;
import org.openapis.openapi.models.operations.GetEventsFormatEnum;
import org.openapis.openapi.models.operations.GetEventsRequest;
import org.openapis.openapi.models.operations.GetEventsResponse;
import org.openapis.openapi.models.operations.GetEventsStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventsRequest req = new GetEventsRequest() {{
                areaId = "distinctio";
                bbox = "quibusdam";
                created = "unde";
                eventType = GetEventsEventTypeEnum.ROAD_CONDITION;
                format = GetEventsFormatEnum.XML;
                jurisdiction = "illum";
                roadName = "vel";
                severity = "error";
                status = GetEventsStatusEnum.ACTIVE;
                updated = "suscipit";
            }};            

            GetEventsResponse res = sdk.resources.getEvents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJurisdiction

Lists the jurisdictions publishing data through this Open511 API implementation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJurisdictionFormatEnum;
import org.openapis.openapi.models.operations.GetJurisdictionRequest;
import org.openapis.openapi.models.operations.GetJurisdictionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJurisdictionRequest req = new GetJurisdictionRequest() {{
                format = GetJurisdictionFormatEnum.JSON;
            }};            

            GetJurisdictionResponse res = sdk.resources.getJurisdiction(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJurisdictiongeography

Provides the geographical boundaries for all the jurisdictions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJurisdictiongeographyFormatEnum;
import org.openapis.openapi.models.operations.GetJurisdictiongeographyRequest;
import org.openapis.openapi.models.operations.GetJurisdictiongeographyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetJurisdictiongeographyRequest req = new GetJurisdictiongeographyRequest() {{
                format = GetJurisdictiongeographyFormatEnum.JSON;
            }};            

            GetJurisdictiongeographyResponse res = sdk.resources.getJurisdictiongeography(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
