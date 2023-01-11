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
                    parent = "reiciendis";
                }};
                queryParams = new CloudschedulerProjectsLocationsJobsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "praesentium";
                    alt = "proto";
                    callback = "omnis";
                    fields = "praesentium";
                    key = "illo";
                    oauthToken = "omnis";
                    prettyPrint = true;
                    quotaUser = "est";
                    uploadType = "eaque";
                    uploadProtocol = "quas";
                }};
                request = new Job() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRouting = new AppEngineRouting() {{
                            host = "suscipit";
                            instance = "et";
                            service = "maxime";
                            version = "officiis";
                        }};
                        body = "iste";
                        headers = new java.util.HashMap<String, String>() {{
                            put("sapiente", "nulla");
                            put("id", "et");
                        }};
                        httpMethod = "PUT";
                        relativeUri = "officia";
                    }};
                    attemptDeadline = "optio";
                    description = "nihil";
                    httpTarget = new HttpTarget() {{
                        body = "corrupti";
                        headers = new java.util.HashMap<String, String>() {{
                            put("magni", "ducimus");
                            put("reprehenderit", "atque");
                        }};
                        httpMethod = "DELETE";
                        oauthToken = new OAuthToken() {{
                            scope = "suscipit";
                            serviceAccountEmail = "similique";
                        }};
                        oidcToken = new OidcToken() {{
                            audience = "quaerat";
                            serviceAccountEmail = "ipsa";
                        }};
                        uri = "ut";
                    }};
                    lastAttemptTime = "quia";
                    name = "ea";
                    pubsubTarget = new PubsubTarget() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("animi", "quo");
                        }};
                        data = "architecto";
                        topicName = "quia";
                    }};
                    retryConfig = new RetryConfig() {{
                        maxBackoffDuration = "voluptas";
                        maxDoublings = 8638442923286442776;
                        maxRetryDuration = "blanditiis";
                        minBackoffDuration = "nostrum";
                        retryCount = 8095275691201054826;
                    }};
                    schedule = "alias";
                    scheduleTime = "qui";
                    state = "DISABLED";
                    status = new Status() {{
                        code = 5833099620155982566;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("sed", "est");
                                put("qui", "ad");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("aliquid", "laboriosam");
                                put("consequuntur", "voluptatem");
                            }}),
                        }};
                        message = "dolor";
                    }};
                    timeZone = "expedita";
                    userUpdateTime = "qui";
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
