# calls

## Overview

Call Management

### Available Operations

* [getV2ActivitiesCallsJson](#getv2activitiescallsjson) - List calls
* [getV2ActivitiesCallsIdJson](#getv2activitiescallsidjson) - Fetch a call
* [postV2ActivitiesCallsJson](#postv2activitiescallsjson) - Create a call

## getV2ActivitiesCallsJson

Fetches multiple call records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ActivitiesCallsJsonRequest;
import org.openapis.openapi.models.operations.GetV2ActivitiesCallsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ActivitiesCallsJsonRequest req = new GetV2ActivitiesCallsJsonRequest() {{
                createdAt = new String[]{{
                    add("ratione"),
                    add("ex"),
                }};
                disposition = new String[]{{
                    add("dicta"),
                    add("dolor"),
                    add("maiores"),
                }};
                ids = new Long[]{{
                    add(406120L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 862192L;
                perPage = 569211L;
                personId = new Long[]{{
                    add(343605L),
                    add(960835L),
                    add(788873L),
                    add(906556L),
                }};
                sentiment = new String[]{{
                    add("impedit"),
                    add("corporis"),
                }};
                sortBy = "veniam";
                sortDirection = "aliquid";
                updatedAt = new String[]{{
                    add("magnam"),
                }};
                userGuid = new String[]{{
                    add("quo"),
                    add("consectetur"),
                }};
            }};            

            GetV2ActivitiesCallsJsonResponse res = sdk.calls.getV2ActivitiesCallsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2ActivitiesCallsIdJson

Fetches a call, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2ActivitiesCallsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2ActivitiesCallsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2ActivitiesCallsIdJsonRequest req = new GetV2ActivitiesCallsIdJsonRequest("recusandae");            

            GetV2ActivitiesCallsIdJsonResponse res = sdk.calls.getV2ActivitiesCallsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2ActivitiesCallsJson

Creates a call. The parameters of this endpoint can be used to create an action
and ensure that the CRM Task is mapped correctly.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2ActivitiesCallsJsonRequestBody;
import org.openapis.openapi.models.operations.PostV2ActivitiesCallsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2ActivitiesCallsJsonRequestBody req = new PostV2ActivitiesCallsJsonRequestBody(132487L) {{
                actionId = 325310L;
                crmParams = new java.util.HashMap<String, Object>() {{
                    put("a", "libero");
                }};
                disposition = "aut";
                duration = 11427L;
                linkedCallDataRecordIds = new Long[]{{
                    add(770581L),
                    add(304582L),
                    add(146946L),
                }};
                notes = "accusamus";
                sentiment = "inventore";
                to = "non";
                userGuid = "et";
            }};            

            PostV2ActivitiesCallsJsonResponse res = sdk.calls.postV2ActivitiesCallsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
