# SDK

## Overview

Get lists of NYT Articles based on shares, emails, and views.

<http://developer.nytimes.com/>
### Available Operations

* [getMostemailedSectionTimePeriodJson](#getmostemailedsectiontimeperiodjson) - Most Emailed by Section & Time Period
* [getMostsharedSectionTimePeriodJson](#getmostsharedsectiontimeperiodjson) - Most Shared by Section & Time Period
* [getMostviewedSectionTimePeriodJson](#getmostviewedsectiontimeperiodjson) - Most Viewed by Section & Time Period

## getMostemailedSectionTimePeriodJson

Most Emailed by Section & Time Period

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonRequest;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonResponse;
import org.openapis.openapi.models.operations.GETMostemailedSectionTimePeriodJsonSecurity;
import org.openapis.openapi.models.shared.SectionEnum;
import org.openapis.openapi.models.shared.TimePeriodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMostemailedSectionTimePeriodJsonRequest req = new GETMostemailedSectionTimePeriodJsonRequest(SectionEnum.TODAY_S_PAPER, TimePeriodEnum.SEVEN);            

            GETMostemailedSectionTimePeriodJsonResponse res = sdk.sdk.getMostemailedSectionTimePeriodJson(req, new GETMostemailedSectionTimePeriodJsonSecurity("nulla") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMostemailedSectionTimePeriodJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMostsharedSectionTimePeriodJson

Most Shared by Section & Time Period

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMostsharedSectionTimePeriodJsonRequest;
import org.openapis.openapi.models.operations.GETMostsharedSectionTimePeriodJsonResponse;
import org.openapis.openapi.models.operations.GETMostsharedSectionTimePeriodJsonSecurity;
import org.openapis.openapi.models.shared.SectionEnum;
import org.openapis.openapi.models.shared.TimePeriodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMostsharedSectionTimePeriodJsonRequest req = new GETMostsharedSectionTimePeriodJsonRequest(SectionEnum.PUBLIC_EDITOR, TimePeriodEnum.THIRTY);            

            GETMostsharedSectionTimePeriodJsonResponse res = sdk.sdk.getMostsharedSectionTimePeriodJson(req, new GETMostsharedSectionTimePeriodJsonSecurity("vel") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMostsharedSectionTimePeriodJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMostviewedSectionTimePeriodJson

Most Viewed by Section & Time Period

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETMostviewedSectionTimePeriodJsonRequest;
import org.openapis.openapi.models.operations.GETMostviewedSectionTimePeriodJsonResponse;
import org.openapis.openapi.models.operations.GETMostviewedSectionTimePeriodJsonSecurity;
import org.openapis.openapi.models.shared.SectionEnum;
import org.openapis.openapi.models.shared.TimePeriodEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETMostviewedSectionTimePeriodJsonRequest req = new GETMostviewedSectionTimePeriodJsonRequest(SectionEnum.SPORTS, TimePeriodEnum.SEVEN);            

            GETMostviewedSectionTimePeriodJsonResponse res = sdk.sdk.getMostviewedSectionTimePeriodJson(req, new GETMostviewedSectionTimePeriodJsonSecurity("suscipit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getMostviewedSectionTimePeriodJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
