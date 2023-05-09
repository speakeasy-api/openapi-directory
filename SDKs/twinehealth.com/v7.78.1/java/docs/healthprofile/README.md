# healthProfile

## Overview

A health profile contains a set of health questions and answers for a patient.

### Available Operations

* [fetchHealthProfile](#fetchhealthprofile) - Get a health profile
* [fetchHealthProfiles](#fetchhealthprofiles) - List health profiles

## fetchHealthProfile

Get a health profile by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHealthProfileIncludeEnum;
import org.openapis.openapi.models.operations.FetchHealthProfileRequest;
import org.openapis.openapi.models.operations.FetchHealthProfileResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHealthProfileRequest req = new FetchHealthProfileRequest("illum") {{
                include = FetchHealthProfileIncludeEnum.QUESTIONS;
            }};            

            FetchHealthProfileResponse res = sdk.healthProfile.fetchHealthProfile(req);

            if (res.fetchHealthProfileResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchHealthProfiles

Get a list of health profiles

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchHealthProfilesIncludeEnum;
import org.openapis.openapi.models.operations.FetchHealthProfilesRequest;
import org.openapis.openapi.models.operations.FetchHealthProfilesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchHealthProfilesRequest req = new FetchHealthProfilesRequest() {{
                filterGroups = "accusantium";
                filterOrganization = "aliquam";
                filterPatient = "sapiente";
                include = FetchHealthProfilesIncludeEnum.PATIENT;
                pageCursor = "ullam";
                pageLimit = 443879L;
                pageNumber = 356707L;
                pageSize = 391774L;
            }};            

            FetchHealthProfilesResponse res = sdk.healthProfile.fetchHealthProfiles(req);

            if (res.fetchHealthProfilesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
