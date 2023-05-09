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
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AppEngineHttpTarget;
import org.openapis.openapi.models.shared.AppEngineHttpTargetHttpMethodEnum;
import org.openapis.openapi.models.shared.AppEngineRouting;
import org.openapis.openapi.models.shared.HttpTarget;
import org.openapis.openapi.models.shared.HttpTargetHttpMethodEnum;
import org.openapis.openapi.models.shared.Job;
import org.openapis.openapi.models.shared.JobStateEnum;
import org.openapis.openapi.models.shared.OAuthToken;
import org.openapis.openapi.models.shared.OidcToken;
import org.openapis.openapi.models.shared.PubsubTarget;
import org.openapis.openapi.models.shared.RetryConfig;
import org.openapis.openapi.models.shared.Status;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudschedulerProjectsLocationsJobsCreateRequest req = new CloudschedulerProjectsLocationsJobsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                job = new Job() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRouting = new AppEngineRouting() {{
                            host = "distinctio";
                            instance = "quibusdam";
                            service = "unde";
                            version = "nulla";
                        }};;
                        body = "corrupti";
                        headers = new java.util.HashMap<String, String>() {{
                            put("vel", "error");
                            put("deserunt", "suscipit");
                            put("iure", "magnam");
                            put("debitis", "ipsa");
                        }};
                        httpMethod = AppEngineHttpTargetHttpMethodEnum.OPTIONS;
                        relativeUri = "tempora";
                    }};;
                    attemptDeadline = "suscipit";
                    description = "molestiae";
                    httpTarget = new HttpTarget() {{
                        body = "minus";
                        headers = new java.util.HashMap<String, String>() {{
                            put("voluptatum", "iusto");
                            put("excepturi", "nisi");
                            put("recusandae", "temporibus");
                            put("ab", "quis");
                        }};
                        httpMethod = HttpTargetHttpMethodEnum.HTTP_METHOD_UNSPECIFIED;
                        oauthToken = new OAuthToken() {{
                            scope = "deserunt";
                            serviceAccountEmail = "perferendis";
                        }};;
                        oidcToken = new OidcToken() {{
                            audience = "ipsam";
                            serviceAccountEmail = "repellendus";
                        }};;
                        uri = "https://spherical-caviar.org";
                    }};;
                    lastAttemptTime = "at";
                    name = "Javier Schmidt";
                    pubsubTarget = new PubsubTarget() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("porro", "dolorum");
                            put("dicta", "nam");
                            put("officia", "occaecati");
                        }};
                        data = "fugit";
                        topicName = "deleniti";
                    }};;
                    retryConfig = new RetryConfig() {{
                        maxBackoffDuration = "hic";
                        maxDoublings = 758616;
                        maxRetryDuration = "totam";
                        minBackoffDuration = "beatae";
                        retryCount = 414662;
                    }};;
                    schedule = "molestiae";
                    scheduleTime = "modi";
                    state = JobStateEnum.STATE_UNSPECIFIED;
                    status = new Status() {{
                        code = 774234;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("ipsum", "excepturi");
                                put("aspernatur", "perferendis");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("natus", "sed");
                                put("iste", "dolor");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("laboriosam", "hic");
                                put("saepe", "fuga");
                                put("in", "corporis");
                            }}),
                        }};
                        message = "iste";
                    }};;
                    timeZone = "iure";
                    userUpdateTime = "saepe";
                }};;
                accessToken = "quidem";
                alt = AltEnum.JSON;
                callback = "ipsa";
                fields = "reiciendis";
                key = "est";
                oauthToken = "mollitia";
                prettyPrint = false;
                quotaUser = "laborum";
                uploadType = "dolores";
                uploadProtocol = "dolorem";
            }};            

            CloudschedulerProjectsLocationsJobsCreateResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsCreate(req, new CloudschedulerProjectsLocationsJobsCreateSecurity("corporis", "explicabo") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [cloudschedulerProjectsLocationsJobsCreate](docs/projects/README.md#cloudschedulerprojectslocationsjobscreate) - Creates a job.
* [cloudschedulerProjectsLocationsJobsDelete](docs/projects/README.md#cloudschedulerprojectslocationsjobsdelete) - Deletes a job.
* [cloudschedulerProjectsLocationsJobsGet](docs/projects/README.md#cloudschedulerprojectslocationsjobsget) - Gets a job.
* [cloudschedulerProjectsLocationsJobsList](docs/projects/README.md#cloudschedulerprojectslocationsjobslist) - Lists jobs.
* [cloudschedulerProjectsLocationsJobsPatch](docs/projects/README.md#cloudschedulerprojectslocationsjobspatch) - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* [cloudschedulerProjectsLocationsJobsPause](docs/projects/README.md#cloudschedulerprojectslocationsjobspause) - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* [cloudschedulerProjectsLocationsJobsResume](docs/projects/README.md#cloudschedulerprojectslocationsjobsresume) - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* [cloudschedulerProjectsLocationsJobsRun](docs/projects/README.md#cloudschedulerprojectslocationsjobsrun) - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* [cloudschedulerProjectsLocationsList](docs/projects/README.md#cloudschedulerprojectslocationslist) - Lists information about the supported locations for this service.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
