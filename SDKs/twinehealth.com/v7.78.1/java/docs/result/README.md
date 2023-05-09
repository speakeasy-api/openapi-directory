# result

## Overview

A patient health result is a quantitative result for a patient.

### Available Operations

* [fetchPatientHealthResult](#fetchpatienthealthresult) - Get a patient health result
* [fetchPatientHealthResults](#fetchpatienthealthresults) - List patient health results

## fetchPatientHealthResult

Get patient health result by id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientHealthResultRequest;
import org.openapis.openapi.models.operations.FetchPatientHealthResultResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientHealthResultRequest req = new FetchPatientHealthResultRequest("necessitatibus");            

            FetchPatientHealthResultResponse res = sdk.result.fetchPatientHealthResult(req);

            if (res.fetchPatientHealthResultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## fetchPatientHealthResults

Get a list of patient health results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FetchPatientHealthResultsRequest;
import org.openapis.openapi.models.operations.FetchPatientHealthResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FetchPatientHealthResultsRequest req = new FetchPatientHealthResultsRequest("ipsa") {{
                filterActions = "tempora";
                filterCreatedAt = "nihil";
                filterEndAt = "molestiae";
                filterStartAt = "dicta";
                filterThreads = "iusto";
                filterUpdatedAt = "esse";
                pageAfter = "praesentium";
                pageLimit = 979963L;
                pageNumber = 967260L;
                pageSize = 423706L;
            }};            

            FetchPatientHealthResultsResponse res = sdk.result.fetchPatientHealthResults(req);

            if (res.fetchPatientHealthResultResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
