# bulkJobsJobData

## Overview

Bulk Jobs - Job Data

### Available Operations

* [getV2BulkJobsBulkJobsIdJobData](#getv2bulkjobsbulkjobsidjobdata) - List job data for a bulk job
* [postV2BulkJobsBulkJobsIdJobData](#postv2bulkjobsbulkjobsidjobdata) - Create job data for a bulk job

## getV2BulkJobsBulkJobsIdJobData

Fetches multiple job data records for a given bulk job. Pagination is not supported, but cursor based polling is via use of the `id[gt]` filter. Pass the last id seen (i.e. `id[gt]=1234`) in order to get the next batch of records.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2BulkJobsBulkJobsIdJobDataRequest;
import org.openapis.openapi.models.operations.GetV2BulkJobsBulkJobsIdJobDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2BulkJobsBulkJobsIdJobDataRequest req = new GetV2BulkJobsBulkJobsIdJobDataRequest(20651L) {{
                id = new java.util.HashMap<String, Object>() {{
                    put("optio", "accusamus");
                }};
                perPage = 320017L;
                status = new String[]{{
                    add("suscipit"),
                    add("deserunt"),
                    add("provident"),
                    add("minima"),
                }};
            }};            

            GetV2BulkJobsBulkJobsIdJobDataResponse res = sdk.bulkJobsJobData.getV2BulkJobsBulkJobsIdJobData(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2BulkJobsBulkJobsIdJobData

Upload job data for the specified bulk job. Upload an array of objects, where element contains the parameters necessary to execute the individual calls. Each call to this endpoint can handle up to 5,000 records at a time. There is no limit to how many times you can create job data for a given bulk job.

For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2BulkJobsBulkJobsIdJobDataRequest;
import org.openapis.openapi.models.operations.PostV2BulkJobsBulkJobsIdJobDataRequestBody;
import org.openapis.openapi.models.operations.PostV2BulkJobsBulkJobsIdJobDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2BulkJobsBulkJobsIdJobDataRequest req = new PostV2BulkJobsBulkJobsIdJobDataRequest(                new PostV2BulkJobsBulkJobsIdJobDataRequestBody(                new String[]{{
                                                add("totam"),
                                                add("similique"),
                                                add("alias"),
                                                add("at"),
                                            }});, 311860L);            

            PostV2BulkJobsBulkJobsIdJobDataResponse res = sdk.bulkJobsJobData.postV2BulkJobsBulkJobsIdJobData(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
