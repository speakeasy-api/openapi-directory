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
                    parent = "reprehenderit";
                }};
                queryParams = new CloudschedulerProjectsLocationsJobsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "error";
                    alt = "proto";
                    callback = "iusto";
                    fields = "odio";
                    key = "et";
                    oauthToken = "at";
                    prettyPrint = true;
                    quotaUser = "numquam";
                    uploadType = "est";
                    uploadProtocol = "dolores";
                }};
                request = new Job() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRouting = new AppEngineRouting() {{
                            host = "in";
                            instance = "sed";
                            service = "dolore";
                            version = "minus";
                        }};
                        body = "dolorem";
                        headers = new java.util.HashMap<String, String>() {{
                            put("et", "provident");
                            put("expedita", "sit");
                        }};
                        httpMethod = "PATCH";
                        relativeUri = "nihil";
                    }};
                    attemptDeadline = "adipisci";
                    description = "praesentium";
                    httpTarget = new HttpTarget() {{
                        body = "laudantium";
                        headers = new java.util.HashMap<String, String>() {{
                            put("beatae", "fuga");
                        }};
                        httpMethod = "HTTP_METHOD_UNSPECIFIED";
                        oauthToken = new OAuthToken() {{
                            scope = "quas";
                            serviceAccountEmail = "incidunt";
                        }};
                        oidcToken = new OidcToken() {{
                            audience = "et";
                            serviceAccountEmail = "placeat";
                        }};
                        uri = "culpa";
                    }};
                    lastAttemptTime = "praesentium";
                    legacyAppEngineCron = false;
                    name = "quaerat";
                    pubsubTarget = new PubsubTarget() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("iusto", "nihil");
                            put("ab", "veritatis");
                            put("labore", "natus");
                        }};
                        data = "quo";
                        topicName = "error";
                    }};
                    retryConfig = new RetryConfig() {{
                        maxBackoffDuration = "neque";
                        maxDoublings = 1526989145207753327;
                        maxRetryDuration = "doloribus";
                        minBackoffDuration = "qui";
                        retryCount = 2537660340158744879;
                    }};
                    schedule = "occaecati";
                    scheduleTime = "dolore";
                    state = "STATE_UNSPECIFIED";
                    status = new Status() {{
                        code = 8510604158603891294;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("sint", "laboriosam");
                                put("quia", "sunt");
                                put("inventore", "nobis");
                            }}),
                        }};
                        message = "eum";
                    }};
                    timeZone = "perferendis";
                    userUpdateTime = "sapiente";
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
