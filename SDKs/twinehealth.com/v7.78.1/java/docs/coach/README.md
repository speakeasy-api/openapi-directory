# coach

## Overview

A coach is a person that supports a patient

### Available Operations

* [fetchCoach](#fetchcoach) - Get a coach
* [fetchCoaches](#fetchcoaches) - List coaches

## fetchCoach

Get a coach record by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCoachRequest;
import org.openapis.openapi.models.operations.FetchCoachResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCoachRequest req = new FetchCoachRequest("quasi");            

            FetchCoachResponse res = sdk.coach.fetchCoach(req);

            if (res.fetchCoachResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchCoaches

Get a list of coaches matching the specified filters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchCoachesRequest;
import org.openapis.openapi.models.operations.FetchCoachesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchCoachesRequest req = new FetchCoachesRequest() {{
                filterGroups = "similique";
                filterOrganization = "culpa";
            }};            

            FetchCoachesResponse res = sdk.coach.fetchCoaches(req);

            if (res.fetchCoachesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
