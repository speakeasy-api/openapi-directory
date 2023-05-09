# cadences

## Overview

Cadence Management

### Available Operations

* [getV2CadencesJson](#getv2cadencesjson) - List cadences
* [getV2CadencesIdJson](#getv2cadencesidjson) - Fetch a cadence

## getV2CadencesJson

Fetches multiple cadence records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CadencesJsonRequest;
import org.openapis.openapi.models.operations.GetV2CadencesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CadencesJsonRequest req = new GetV2CadencesJsonRequest() {{
                archived = false;
                groupIds = "nam";
                ids = new Long[]{{
                    add(30452L),
                    add(765326L),
                    add(746994L),
                    add(748664L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                name = new String[]{{
                    add("saepe"),
                }};
                ownedByGuid = new String[]{{
                    add("veritatis"),
                }};
                page = 749255L;
                peopleAddable = false;
                perPage = 552193L;
                shared = false;
                sortBy = "tempore";
                sortDirection = "cupiditate";
                teamCadence = false;
                updatedAt = new String[]{{
                    add("delectus"),
                }};
            }};            

            GetV2CadencesJsonResponse res = sdk.cadences.getV2CadencesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2CadencesIdJson

Fetches a cadence, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CadencesIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2CadencesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CadencesIdJsonRequest req = new GetV2CadencesIdJsonRequest("dolorem");            

            GetV2CadencesIdJsonResponse res = sdk.cadences.getV2CadencesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
