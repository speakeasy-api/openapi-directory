# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreatePathParams;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateQueryParams;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.shared.JobStateEnum;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.PubsubTarget;
import org.openapis.openapi.models.shared.HttpTargetHttpMethodEnum;
import org.openapis.openapi.models.shared.HttpTarget;
import org.openapis.openapi.models.shared.OidcToken;
import org.openapis.openapi.models.shared.OAuthToken;
import org.openapis.openapi.models.shared.AppEngineHttpTargetHttpMethodEnum;
import org.openapis.openapi.models.shared.AppEngineHttpTarget;
import org.openapis.openapi.models.shared.AppEngineRouting;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new CloudschedulerProjectsLocationsJobsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new Job() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRouting = new AppEngineRouting() {{
                            host = "suscipit";
                            instance = "iure";
                            service = "magnam";
                            version = "debitis";
                        }};
                        body = "ipsa";
                        headers = new java.util.HashMap<String, String>() {{
                            put("tempora", "suscipit");
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                            put("iusto", "excepturi");
                        }};
                        httpMethod = "HEAD";
                        relativeUri = "recusandae";
                    }};
                    attemptDeadline = "temporibus";
                    description = "ab";
                    httpTarget = new HttpTarget() {{
                        body = "quis";
                        headers = new java.util.HashMap<String, String>() {{
                            put("deserunt", "perferendis");
                        }};
                        httpMethod = "GET";
                        oauthToken = new OAuthToken() {{
                            scope = "repellendus";
                            serviceAccountEmail = "sapiente";
                        }};
                        oidcToken = new OidcToken() {{
                            audience = "quo";
                            serviceAccountEmail = "odit";
                        }};
                        uri = "https://trim-wheat.info";
                    }};
                    lastAttemptTime = "quod";
                    legacyAppEngineCron = false;
                    name = "quod";
                    pubsubTarget = new PubsubTarget() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("totam", "porro");
                            put("dolorum", "dicta");
                        }};
                        data = "nam";
                        topicName = "officia";
                    }};
                    retryConfig = new RetryConfig() {{
                        maxBackoffDuration = "occaecati";
                        maxDoublings = 143353;
                        maxRetryDuration = "deleniti";
                        minBackoffDuration = "hic";
                        retryCount = 758616;
                    }};
                    schedule = "totam";
                    scheduleTime = "beatae";
                    state = "PAUSED";
                    status = new Status() {{
                        code = 473600;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("impedit", "cum");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                            }}),
                        }};
                        message = "ad";
                    }};
                    timeZone = "natus";
                    userUpdateTime = "sed";
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

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
