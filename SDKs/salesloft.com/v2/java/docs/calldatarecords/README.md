# callDataRecords

## Overview

Call Data Record Management

### Available Operations

* [getV2CallDataRecordsJson](#getv2calldatarecordsjson) - List call data records
* [getV2CallDataRecordsIdJson](#getv2calldatarecordsidjson) - Fetch a call data record

## getV2CallDataRecordsJson

Fetches multiple call data records. The records can be filtered, paged, and sorted according to
the respective parameters.

Call data records are records of all inbound and outbound calls through Salesloft. A call data record may
be associated with a call, but does not have to be.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CallDataRecordsJsonRequest;
import org.openapis.openapi.models.operations.GetV2CallDataRecordsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CallDataRecordsJsonRequest req = new GetV2CallDataRecordsJsonRequest() {{
                createdAt = new String[]{{
                    add("consectetur"),
                    add("vero"),
                }};
                hasCall = false;
                ids = new Long[]{{
                    add(492268L),
                    add(941378L),
                    add(715561L),
                    add(799203L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 486160L;
                perPage = 630448L;
                personId = new Long[]{{
                    add(874288L),
                    add(498140L),
                    add(293020L),
                }};
                sortBy = "quibusdam";
                sortDirection = "illum";
                updatedAt = new String[]{{
                    add("natus"),
                }};
                userGuid = new String[]{{
                    add("aut"),
                    add("voluptatibus"),
                    add("exercitationem"),
                    add("nulla"),
                }};
            }};            

            GetV2CallDataRecordsJsonResponse res = sdk.callDataRecords.getV2CallDataRecordsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2CallDataRecordsIdJson

Fetches a call data record, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CallDataRecordsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2CallDataRecordsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CallDataRecordsIdJsonRequest req = new GetV2CallDataRecordsIdJsonRequest("fugit");            

            GetV2CallDataRecordsIdJsonResponse res = sdk.callDataRecords.getV2CallDataRecordsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
