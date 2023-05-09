# jobs

### Available Operations

* [youtubereportingJobsCreate](#youtubereportingjobscreate) - Creates a job and returns it.
* [youtubereportingJobsDelete](#youtubereportingjobsdelete) - Deletes a job.
* [youtubereportingJobsGet](#youtubereportingjobsget) - Gets a job.
* [youtubereportingJobsList](#youtubereportingjobslist) - Lists jobs.
* [youtubereportingJobsReportsGet](#youtubereportingjobsreportsget) - Gets the metadata of a specific report.
* [youtubereportingJobsReportsList](#youtubereportingjobsreportslist) - Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

## youtubereportingJobsCreate

Creates a job and returns it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateResponse;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsCreateSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsCreateRequest req = new YoutubereportingJobsCreateRequest() {{
                dollarXgafv = XgafvEnum.ONE;
                job = new Job() {{
                    createTime = "deleniti";
                    expireTime = "hic";
                    id = "c816742c-b739-4205-9293-96fea7596eb1";
                    name = "Lela Orn";
                    reportTypeId = "dolores";
                    systemManaged = false;
                }};;
                accessToken = "dolorem";
                alt = AltEnum.MEDIA;
                callback = "explicabo";
                fields = "nobis";
                key = "enim";
                oauthToken = "omnis";
                onBehalfOfContentOwner = "nemo";
                prettyPrint = false;
                quotaUser = "minima";
                uploadType = "excepturi";
                uploadProtocol = "accusantium";
            }};            

            YoutubereportingJobsCreateResponse res = sdk.jobs.youtubereportingJobsCreate(req, new YoutubereportingJobsCreateSecurity() {{
                option1 = new YoutubereportingJobsCreateSecurityOption1("iure", "culpa") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubereportingJobsDelete

Deletes a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubereportingJobsDeleteRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsDeleteResponse;
import org.openapis.openapi.models.operations.YoutubereportingJobsDeleteSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsDeleteSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsDeleteSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsDeleteRequest req = new YoutubereportingJobsDeleteRequest("doloribus") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "dolorem";
                fields = "culpa";
                key = "consequuntur";
                oauthToken = "repellat";
                onBehalfOfContentOwner = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }};            

            YoutubereportingJobsDeleteResponse res = sdk.jobs.youtubereportingJobsDelete(req, new YoutubereportingJobsDeleteSecurity() {{
                option1 = new YoutubereportingJobsDeleteSecurityOption1("quam", "molestiae") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubereportingJobsGet

Gets a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubereportingJobsGetRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsGetResponse;
import org.openapis.openapi.models.operations.YoutubereportingJobsGetSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsGetSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsGetRequest req = new YoutubereportingJobsGetRequest("velit") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quia";
                alt = AltEnum.MEDIA;
                callback = "vitae";
                fields = "laborum";
                key = "animi";
                oauthToken = "enim";
                onBehalfOfContentOwner = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            YoutubereportingJobsGetResponse res = sdk.jobs.youtubereportingJobsGet(req, new YoutubereportingJobsGetSecurity() {{
                option1 = new YoutubereportingJobsGetSecurityOption1("ipsam", "id") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.job != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubereportingJobsList

Lists jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubereportingJobsListRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsListResponse;
import org.openapis.openapi.models.operations.YoutubereportingJobsListSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsListRequest req = new YoutubereportingJobsListRequest() {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aut";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "temporibus";
                includeSystemManaged = false;
                key = "laborum";
                oauthToken = "quasi";
                onBehalfOfContentOwner = "reiciendis";
                pageSize = 976460L;
                pageToken = "vero";
                prettyPrint = false;
                quotaUser = "nihil";
                uploadType = "praesentium";
                uploadProtocol = "voluptatibus";
            }};            

            YoutubereportingJobsListResponse res = sdk.jobs.youtubereportingJobsList(req, new YoutubereportingJobsListSecurity() {{
                option1 = new YoutubereportingJobsListSecurityOption1("ipsa", "omnis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubereportingJobsReportsGet

Gets the metadata of a specific report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsGetRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsGetResponse;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsGetSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsGetSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsGetSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsReportsGetRequest req = new YoutubereportingJobsReportsGetRequest("voluptate", "cum") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "doloremque";
                alt = AltEnum.MEDIA;
                callback = "ut";
                fields = "maiores";
                key = "dicta";
                oauthToken = "corporis";
                onBehalfOfContentOwner = "dolore";
                prettyPrint = false;
                quotaUser = "iusto";
                uploadType = "dicta";
                uploadProtocol = "harum";
            }};            

            YoutubereportingJobsReportsGetResponse res = sdk.jobs.youtubereportingJobsReportsGet(req, new YoutubereportingJobsReportsGetSecurity() {{
                option1 = new YoutubereportingJobsReportsGetSecurityOption1("enim", "accusamus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.report != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## youtubereportingJobsReportsList

Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsListRequest;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsListResponse;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsListSecurity;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsListSecurityOption1;
import org.openapis.openapi.models.operations.YoutubereportingJobsReportsListSecurityOption2;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            YoutubereportingJobsReportsListRequest req = new YoutubereportingJobsReportsListRequest("commodi") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quae";
                alt = AltEnum.JSON;
                callback = "quidem";
                createdAfter = "molestias";
                fields = "excepturi";
                key = "pariatur";
                oauthToken = "modi";
                onBehalfOfContentOwner = "praesentium";
                pageSize = 523248L;
                pageToken = "voluptates";
                prettyPrint = false;
                quotaUser = "quasi";
                startTimeAtOrAfter = "repudiandae";
                startTimeBefore = "sint";
                uploadType = "veritatis";
                uploadProtocol = "itaque";
            }};            

            YoutubereportingJobsReportsListResponse res = sdk.jobs.youtubereportingJobsReportsList(req, new YoutubereportingJobsReportsListSecurity() {{
                option1 = new YoutubereportingJobsReportsListSecurityOption1("incidunt", "enim") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }};
            }});

            if (res.listReportsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
