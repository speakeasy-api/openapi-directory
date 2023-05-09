# phoneNumberAssignments

## Overview

Phone Number Assignments

### Available Operations

* [getV2PhoneNumberAssignmentsJson](#getv2phonenumberassignmentsjson) - List phone number assignments
* [getV2PhoneNumberAssignmentsIdJson](#getv2phonenumberassignmentsidjson) - Fetch a phone number assignment

## getV2PhoneNumberAssignmentsJson

Fetches multiple phone number assignment records. The records can be filtered, paged, and sorted according to
the respective parameters.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PhoneNumberAssignmentsJsonRequest;
import org.openapis.openapi.models.operations.GetV2PhoneNumberAssignmentsJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PhoneNumberAssignmentsJsonRequest req = new GetV2PhoneNumberAssignmentsJsonRequest() {{
                ids = new Long[]{{
                    add(184362L),
                    add(739884L),
                    add(434761L),
                    add(898063L),
                }};
                includePagingCounts = false;
                limitPagingCounts = false;
                page = 187552L;
                perPage = 672582L;
                sortBy = "distinctio";
                sortDirection = "voluptatum";
            }};            

            GetV2PhoneNumberAssignmentsJsonResponse res = sdk.phoneNumberAssignments.getV2PhoneNumberAssignmentsJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2PhoneNumberAssignmentsIdJson

Fetches a phone number assignment, by ID only.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2PhoneNumberAssignmentsIdJsonRequest;
import org.openapis.openapi.models.operations.GetV2PhoneNumberAssignmentsIdJsonResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2PhoneNumberAssignmentsIdJsonRequest req = new GetV2PhoneNumberAssignmentsIdJsonRequest("rem");            

            GetV2PhoneNumberAssignmentsIdJsonResponse res = sdk.phoneNumberAssignments.getV2PhoneNumberAssignmentsIdJson(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
