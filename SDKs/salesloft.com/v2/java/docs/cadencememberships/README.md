# cadenceMemberships

## Overview

Cadence Membership

### Available Operations

* [deleteV2CadenceMembershipsIdJson](#deletev2cadencemembershipsidjson) - Delete a cadence membership
* [getV2CadenceMembershipsJson](#getv2cadencemembershipsjson) - List cadence memberships
* [getV2CadenceMembershipsIdJson](#getv2cadencemembershipsidjson) - Fetch a cadence membership
* [postV2CadenceMembershipsJson](#postv2cadencemembershipsjson) - Create a cadence membership

## deleteV2CadenceMembershipsIdJson

Cadence Membership


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteV2CadenceMembershipsIdJsonRequest;
import org.openapis.openapi.models.operations.DeleteV2CadenceMembershipsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteV2CadenceMembershipsIdJsonRequest req = new DeleteV2CadenceMembershipsIdJsonRequest("incidunt");            

            DeleteV2CadenceMembershipsIdJsonResponse res = sdk.cadenceMemberships.deleteV2CadenceMembershipsIdJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2CadenceMembershipsJson

Fetches multiple cadence membership records. The records can be filtered, paged, and sorted according to
the respective parameters. A cadence membership is the association between a person and their current and
historical time on a cadence. Cadence membership records are mutable and change over time. If a person is
added to a cadence and re-added to the same cadence in the future, there is a single membership record.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CadenceMembershipsJsonRequest;
import org.openapis.openapi.models.operations.GetV2CadenceMembershipsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CadenceMembershipsJsonRequest req = new GetV2CadenceMembershipsJsonRequest() {{
                cadenceId = 132068L;
                currentlyOnCadence = false;
                ids = new Long[]{{
                    add(716860L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 704474L;
                perPage = 396060L;
                personId = 463150L;
                sortBy = "molestias";
                sortDirection = "temporibus";
                updatedAt = new String[]{{
                    add("neque"),
                }};
            }};            

            GetV2CadenceMembershipsJsonResponse res = sdk.cadenceMemberships.getV2CadenceMembershipsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2CadenceMembershipsIdJson

Fetches a cadence membership, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2CadenceMembershipsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2CadenceMembershipsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2CadenceMembershipsIdJsonRequest req = new GetV2CadenceMembershipsIdJsonRequest("fugit");            

            GetV2CadenceMembershipsIdJsonResponse res = sdk.cadenceMemberships.getV2CadenceMembershipsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2CadenceMembershipsJson

Adds a person to a cadence. person_id and cadence_id are required, and must be visible to the authenticated user. user_id will
default to the authenticated user, but can be set to any visible user on the authenticated team.

A person cannot be added to a cadence on behalf of a teammate unless the cadence is a team cadence, the cadence is owned by
the teammate, or the teammate has the Personal Cadence Admin permission.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2CadenceMembershipsJsonRequest;
import org.openapis.openapi.models.operations.PostV2CadenceMembershipsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2CadenceMembershipsJsonRequest req = new PostV2CadenceMembershipsJsonRequest(164959L, 488056L) {{
                stepId = 124833L;
                userId = 355613L;
            }};            

            PostV2CadenceMembershipsJsonResponse res = sdk.cadenceMemberships.postV2CadenceMembershipsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
