# crmActivities

## Overview

CRM Activity Management

### Available Operations

* [getV2CrmActivitiesJson](#getv2crmactivitiesjson) - List crm activities
* [getV2CrmActivitiesIdJson](#getv2crmactivitiesidjson) - Fetch a crm activity

## getV2CrmActivitiesJson

Fetches multiple crm activity records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CrmActivitiesJsonRequest;
import org.openapis.openapi.models.operations.GetV2CrmActivitiesJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CrmActivitiesJsonRequest req = new GetV2CrmActivitiesJsonRequest() {{
                ids = new Long[]{{
                    add(788740L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 947371L;
                perPage = 229442L;
                sortBy = "tempore";
                sortDirection = "accusamus";
                updatedAt = new String[]{{
                    add("enim"),
                    add("dolorem"),
                }};
            }};            

            GetV2CrmActivitiesJsonResponse res = sdk.crmActivities.getV2CrmActivitiesJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2CrmActivitiesIdJson

Fetches a crm activity, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CrmActivitiesIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2CrmActivitiesIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CrmActivitiesIdJsonRequest req = new GetV2CrmActivitiesIdJsonRequest("sapiente");            

            GetV2CrmActivitiesIdJsonResponse res = sdk.crmActivities.getV2CrmActivitiesIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
