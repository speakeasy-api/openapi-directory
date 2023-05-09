# neosentry

## Overview

Operations with Sentry NearEarthObjects

### Available Operations

* [retrieveSentryRiskData](#retrievesentryriskdata) - Retrieve Sentry (Impact Risk ) Near Earth Objects
* [retrieveSentryRiskDataById](#retrievesentryriskdatabyid) - Retrieve Sentry (Impact Risk ) Near Earth Objectby ID 

## retrieveSentryRiskData

Retrieves Near Earth Objects listed in the NASA sentry data set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveSentryRiskDataRequest;
import org.openapis.openapi.models.operations.RetrieveSentryRiskDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveSentryRiskDataRequest req = new RetrieveSentryRiskDataRequest() {{
                isActive = false;
                page = 857946;
                size = 544883;
            }};            

            RetrieveSentryRiskDataResponse res = sdk.neosentry.retrieveSentryRiskData(req);

            if (res.sentryObjectPagingDto != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retrieveSentryRiskDataById

Retrieves Sentry Near Earth Object by ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetrieveSentryRiskDataByIdRequest;
import org.openapis.openapi.models.operations.RetrieveSentryRiskDataByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RetrieveSentryRiskDataByIdRequest req = new RetrieveSentryRiskDataByIdRequest("illum");            

            RetrieveSentryRiskDataByIdResponse res = sdk.neosentry.retrieveSentryRiskDataById(req);

            if (res.sentryImpactRiskObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
