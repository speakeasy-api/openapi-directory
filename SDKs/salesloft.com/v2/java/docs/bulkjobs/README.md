# bulkJobs

## Overview

Bulk Jobs

### Available Operations

* [getV2BulkJobs](#getv2bulkjobs) - List bulk jobs
* [getV2BulkJobsId](#getv2bulkjobsid) - Fetch a bulk job
* [postV2BulkJobs](#postv2bulkjobs) - Create a bulk job
* [putV2BulkJobsId](#putv2bulkjobsid) - Update a bulk job

## getV2BulkJobs

Fetches multiple bulk job records. The records can be filtered, paged, and sorted according to the respective parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2BulkJobsRequest;
import org.openapis.openapi.models.operations.GetV2BulkJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2BulkJobsRequest req = new GetV2BulkJobsRequest() {{
                id = new java.util.HashMap<String, Object>() {{
                    put("quidem", "voluptatibus");
                    put("voluptas", "natus");
                    put("eos", "atque");
                    put("sit", "fugiat");
                }};
                perPage = 67249L;
                state = new String[]{{
                    add("dolorum"),
                    add("iusto"),
                    add("voluptate"),
                }};
            }};            

            GetV2BulkJobsResponse res = sdk.bulkJobs.getV2BulkJobs(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getV2BulkJobsId

Fetches a bulk job, by ID only.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetV2BulkJobsIdRequest;
import org.openapis.openapi.models.operations.GetV2BulkJobsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetV2BulkJobsIdRequest req = new GetV2BulkJobsIdRequest(677082L);            

            GetV2BulkJobsIdResponse res = sdk.bulkJobs.getV2BulkJobsId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postV2BulkJobs

Creates a bulk job. The type of the bulk job must be included when created.

For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostV2BulkJobsRequestBody;
import org.openapis.openapi.models.operations.PostV2BulkJobsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostV2BulkJobsRequestBody req = new PostV2BulkJobsRequestBody("deleniti") {{
                name = "Terence Rau";
            }};            

            PostV2BulkJobsResponse res = sdk.bulkJobs.postV2BulkJobs(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putV2BulkJobsId

Updates a bulk job's name and / or marks a bulk job as 'ready_to_execute'.  May only be updated if the bulk job is still in an "open" state.

For additional information on creating bulk jobs, the types of supported bulk jobs, and examples of the bulk job flow, visit the <a href="/bulk.html" target="_blank" rel="noopener noreferrer">bulk job details page</a>.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutV2BulkJobsIdRequest;
import org.openapis.openapi.models.operations.PutV2BulkJobsIdRequestBody;
import org.openapis.openapi.models.operations.PutV2BulkJobsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutV2BulkJobsIdRequest req = new PutV2BulkJobsIdRequest(216897L) {{
                requestBody = new PutV2BulkJobsIdRequestBody() {{
                    name = "Alberta Ullrich";
                    readyToExecute = false;
                }};;
            }};            

            PutV2BulkJobsIdResponse res = sdk.bulkJobs.putV2BulkJobsId(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
