# bulkJobsResults

## Overview

Bulk Jobs - Results

### Available Operations

* [getV2BulkJobsBulkJobsIdResults](#getv2bulkjobsbulkjobsidresults) - List job data for a completed bulk job.

## getV2BulkJobsBulkJobsIdResults

Fetches multiple job data records for a completed bulk job. Note that until a bulk job's state is set to `done` the returned `data` will be an empty array. Pagination is not supported, but cursor based polling is via use of the `id[gt]` filter. Pass the last id seen (i.e. `id[gt]=1234`) in order to get the next batch of records.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2BulkJobsBulkJobsIdResultsRequest;
import org.openapis.openapi.models.operations.GetV2BulkJobsBulkJobsIdResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2BulkJobsBulkJobsIdResultsRequest req = new GetV2BulkJobsBulkJobsIdResultsRequest(273542L) {{
                id = new java.util.HashMap<String, Object>() {{
                    put("quod", "officiis");
                    put("qui", "dolorum");
                }};
                perPage = 952792L;
                status = new String[]{{
                    add("harum"),
                    add("iusto"),
                }};
            }};            

            GetV2BulkJobsBulkJobsIdResultsResponse res = sdk.bulkJobsResults.getV2BulkJobsBulkJobsIdResults(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
