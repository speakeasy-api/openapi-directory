# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CloudschedulerProjectsLocationsJobsCreateRequest req = new CloudschedulerProjectsLocationsJobsCreateRequest() {{
                security = new CloudschedulerProjectsLocationsJobsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new CloudschedulerProjectsLocationsJobsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new CloudschedulerProjectsLocationsJobsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    fields = "dolor";
                    key = "expedita";
                    oauthToken = "voluptas";
                    prettyPrint = true;
                    quotaUser = "et";
                    uploadType = "nihil";
                    uploadProtocol = "rerum";
                }};
                request = new Job() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRouting = new AppEngineRouting() {{
                            host = "dicta";
                            instance = "debitis";
                            service = "voluptatum";
                            version = "et";
                        }};
                        body = "ut";
                        headers = new java.util.HashMap<String, String>() {{
                            put("et", "voluptate");
                            put("iste", "vitae");
                            put("totam", "dolores");
                        }};
                        httpMethod = "POST";
                        relativeUri = "debitis";
                    }};
                    attemptDeadline = "vel";
                    description = "odio";
                    httpTarget = new HttpTarget() {{
                        body = "dolore";
                        headers = new java.util.HashMap<String, String>() {{
                            put("aspernatur", "accusantium");
                            put("totam", "commodi");
                        }};
                        httpMethod = "PATCH";
                        oauthToken = new OAuthToken() {{
                            scope = "est";
                            serviceAccountEmail = "aut";
                        }};
                        oidcToken = new OidcToken() {{
                            audience = "odit";
                            serviceAccountEmail = "non";
                        }};
                        uri = "voluptas";
                    }};
                    lastAttemptTime = "omnis";
                    name = "aut";
                    pubsubTarget = new PubsubTarget() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("sed", "officiis");
                        }};
                        data = "autem";
                        topicName = "consectetur";
                    }};
                    retryConfig = new RetryConfig() {{
                        maxBackoffDuration = "nobis";
                        maxDoublings = 4345851588384648695;
                        maxRetryDuration = "qui";
                        minBackoffDuration = "recusandae";
                        retryCount = 7561811714888168464;
                    }};
                    schedule = "ipsum";
                    scheduleTime = "eveniet";
                    state = "UPDATE_FAILED";
                    status = new Status() {{
                        code = 7338728586234333996;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("exercitationem", "aut");
                                put("reprehenderit", "tempore");
                                put("maiores", "incidunt");
                            }}),
                        }};
                        message = "dolor";
                    }};
                    timeZone = "beatae";
                    userUpdateTime = "veritatis";
                }};
            }};

            CloudschedulerProjectsLocationsJobsCreateResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsCreate(req);

            if (res.job.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudschedulerProjectsLocationsJobsCreate` - Creates a job.
* `cloudschedulerProjectsLocationsJobsDelete` - Deletes a job.
* `cloudschedulerProjectsLocationsJobsGet` - Gets a job.
* `cloudschedulerProjectsLocationsJobsList` - Lists jobs.
* `cloudschedulerProjectsLocationsJobsPatch` - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* `cloudschedulerProjectsLocationsJobsPause` - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* `cloudschedulerProjectsLocationsJobsResume` - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* `cloudschedulerProjectsLocationsJobsRun` - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* `cloudschedulerProjectsLocationsList` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
