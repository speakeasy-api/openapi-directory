# projects

### Available Operations

* [cloudschedulerProjectsLocationsJobsCreate](#cloudschedulerprojectslocationsjobscreate) - Creates a job.
* [cloudschedulerProjectsLocationsJobsDelete](#cloudschedulerprojectslocationsjobsdelete) - Deletes a job.
* [cloudschedulerProjectsLocationsJobsGet](#cloudschedulerprojectslocationsjobsget) - Gets a job.
* [cloudschedulerProjectsLocationsJobsList](#cloudschedulerprojectslocationsjobslist) - Lists jobs.
* [cloudschedulerProjectsLocationsJobsPatch](#cloudschedulerprojectslocationsjobspatch) - Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
* [cloudschedulerProjectsLocationsJobsPause](#cloudschedulerprojectslocationsjobspause) - Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
* [cloudschedulerProjectsLocationsJobsResume](#cloudschedulerprojectslocationsjobsresume) - Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
* [cloudschedulerProjectsLocationsJobsRun](#cloudschedulerprojectslocationsjobsrun) - Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
* [cloudschedulerProjectsLocationsList](#cloudschedulerprojectslocationslist) - Lists information about the supported locations for this service.

## cloudschedulerProjectsLocationsJobsCreate

Creates a job.

### Example Usage

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

            CloudschedulerProjectsLocationsJobsCreateRequest req = new CloudschedulerProjectsLocationsJobsCreateRequest("nobis") {{
                dollarXgafv = XgafvEnum.ONE;
                job = new Job() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRouting = new AppEngineRouting() {{
                            host = "omnis";
                            instance = "nemo";
                            service = "minima";
                            version = "excepturi";
                        }};;
                        body = "accusantium";
                        headers = new java.util.HashMap<String, String>() {{
                            put("culpa", "doloribus");
                            put("sapiente", "architecto");
                        }};
                        httpMethod = AppEngineHttpTargetHttpMethodEnum.DELETE;
                        relativeUri = "dolorem";
                    }};;
                    attemptDeadline = "culpa";
                    description = "consequuntur";
                    httpTarget = new HttpTarget() {{
                        body = "repellat";
                        headers = new java.util.HashMap<String, String>() {{
                            put("occaecati", "numquam");
                            put("commodi", "quam");
                            put("molestiae", "velit");
                        }};
                        httpMethod = HttpTargetHttpMethodEnum.PUT;
                        oauthToken = new OAuthToken() {{
                            scope = "quia";
                            serviceAccountEmail = "quis";
                        }};;
                        oidcToken = new OidcToken() {{
                            audience = "vitae";
                            serviceAccountEmail = "laborum";
                        }};;
                        uri = "https://frozen-catch.net";
                    }};;
                    lastAttemptTime = "sequi";
                    name = "Vernon Ondricka Sr.";
                    pubsubTarget = new PubsubTarget() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("temporibus", "laborum");
                            put("quasi", "reiciendis");
                            put("voluptatibus", "vero");
                        }};
                        data = "nihil";
                        topicName = "praesentium";
                    }};;
                    retryConfig = new RetryConfig() {{
                        maxBackoffDuration = "voluptatibus";
                        maxDoublings = 55714;
                        maxRetryDuration = "omnis";
                        minBackoffDuration = "voluptate";
                        retryCount = 739264;
                    }};;
                    schedule = "perferendis";
                    scheduleTime = "doloremque";
                    state = JobStateEnum.PAUSED;
                    status = new Status() {{
                        code = 282807;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("corporis", "dolore");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("dicta", "harum");
                                put("enim", "accusamus");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("repudiandae", "quae");
                                put("ipsum", "quidem");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("excepturi", "pariatur");
                                put("modi", "praesentium");
                                put("rem", "voluptates");
                            }}),
                        }};
                        message = "quasi";
                    }};;
                    timeZone = "repudiandae";
                    userUpdateTime = "sint";
                }};;
                accessToken = "veritatis";
                alt = AltEnum.PROTO;
                callback = "incidunt";
                fields = "enim";
                key = "consequatur";
                oauthToken = "est";
                prettyPrint = false;
                quotaUser = "quibusdam";
                uploadType = "explicabo";
                uploadProtocol = "deserunt";
            }};            

            CloudschedulerProjectsLocationsJobsCreateResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsCreate(req, new CloudschedulerProjectsLocationsJobsCreateSecurity("distinctio", "quibusdam") {{
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

## cloudschedulerProjectsLocationsJobsDelete

Deletes a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsDeleteRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsDeleteResponse;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudschedulerProjectsLocationsJobsDeleteRequest req = new CloudschedulerProjectsLocationsJobsDeleteRequest("labore") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "qui";
                alt = AltEnum.MEDIA;
                callback = "cupiditate";
                fields = "quos";
                key = "perferendis";
                oauthToken = "magni";
                prettyPrint = false;
                quotaUser = "assumenda";
                uploadType = "ipsam";
                uploadProtocol = "alias";
            }};            

            CloudschedulerProjectsLocationsJobsDeleteResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsDelete(req, new CloudschedulerProjectsLocationsJobsDeleteSecurity("fugit", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## cloudschedulerProjectsLocationsJobsGet

Gets a job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsGetRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsGetResponse;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudschedulerProjectsLocationsJobsGetRequest req = new CloudschedulerProjectsLocationsJobsGetRequest("excepturi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "labore";
                fields = "delectus";
                key = "eum";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "eligendi";
                uploadType = "sint";
                uploadProtocol = "aliquid";
            }};            

            CloudschedulerProjectsLocationsJobsGetResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsGet(req, new CloudschedulerProjectsLocationsJobsGetSecurity("provident", "necessitatibus") {{
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

## cloudschedulerProjectsLocationsJobsList

Lists jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsListRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsListResponse;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudschedulerProjectsLocationsJobsListRequest req = new CloudschedulerProjectsLocationsJobsListRequest("sint") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "dolor";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "dolorum";
                key = "in";
                oauthToken = "in";
                pageSize = 846409L;
                pageToken = "maiores";
                prettyPrint = false;
                quotaUser = "rerum";
                uploadType = "dicta";
                uploadProtocol = "magnam";
            }};            

            CloudschedulerProjectsLocationsJobsListResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsList(req, new CloudschedulerProjectsLocationsJobsListSecurity("cumque", "facere") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## cloudschedulerProjectsLocationsJobsPatch

Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsPatchRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsPatchResponse;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsPatchSecurity;
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

            CloudschedulerProjectsLocationsJobsPatchRequest req = new CloudschedulerProjectsLocationsJobsPatchRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                job = new Job() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRouting = new AppEngineRouting() {{
                            host = "laborum";
                            instance = "accusamus";
                            service = "non";
                            version = "occaecati";
                        }};;
                        body = "enim";
                        headers = new java.util.HashMap<String, String>() {{
                            put("delectus", "quidem");
                            put("provident", "nam");
                            put("id", "blanditiis");
                            put("deleniti", "sapiente");
                        }};
                        httpMethod = AppEngineHttpTargetHttpMethodEnum.POST;
                        relativeUri = "deserunt";
                    }};;
                    attemptDeadline = "nisi";
                    description = "vel";
                    httpTarget = new HttpTarget() {{
                        body = "natus";
                        headers = new java.util.HashMap<String, String>() {{
                            put("molestiae", "perferendis");
                            put("nihil", "magnam");
                            put("distinctio", "id");
                        }};
                        httpMethod = HttpTargetHttpMethodEnum.GET;
                        oauthToken = new OAuthToken() {{
                            scope = "labore";
                            serviceAccountEmail = "suscipit";
                        }};;
                        oidcToken = new OidcToken() {{
                            audience = "natus";
                            serviceAccountEmail = "nobis";
                        }};;
                        uri = "http://ugly-cash.com";
                    }};;
                    lastAttemptTime = "magnam";
                    name = "Miriam Hermann";
                    pubsubTarget = new PubsubTarget() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("accusantium", "mollitia");
                            put("reiciendis", "mollitia");
                            put("ad", "eum");
                        }};
                        data = "dolor";
                        topicName = "necessitatibus";
                    }};;
                    retryConfig = new RetryConfig() {{
                        maxBackoffDuration = "odit";
                        maxDoublings = 367562;
                        maxRetryDuration = "quasi";
                        minBackoffDuration = "iure";
                        retryCount = 984043;
                    }};;
                    schedule = "debitis";
                    scheduleTime = "eius";
                    state = JobStateEnum.UPDATE_FAILED;
                    status = new Status() {{
                        code = 537023;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("architecto", "architecto");
                                put("repudiandae", "ullam");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("nihil", "repellat");
                                put("quibusdam", "sed");
                                put("saepe", "pariatur");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("consequuntur", "praesentium");
                            }}),
                        }};
                        message = "natus";
                    }};;
                    timeZone = "magni";
                    userUpdateTime = "sunt";
                }};;
                accessToken = "quo";
                alt = AltEnum.PROTO;
                callback = "pariatur";
                fields = "maxime";
                key = "ea";
                oauthToken = "excepturi";
                prettyPrint = false;
                quotaUser = "odit";
                updateMask = "ea";
                uploadType = "accusantium";
                uploadProtocol = "ab";
            }};            

            CloudschedulerProjectsLocationsJobsPatchResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsPatch(req, new CloudschedulerProjectsLocationsJobsPatchSecurity("maiores", "quidem") {{
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

## cloudschedulerProjectsLocationsJobsPause

Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsPauseRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsPauseResponse;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsPauseSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudschedulerProjectsLocationsJobsPauseRequest req = new CloudschedulerProjectsLocationsJobsPauseRequest("ipsam") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nam", "eaque");
                    put("pariatur", "nemo");
                }};
                accessToken = "voluptatibus";
                alt = AltEnum.JSON;
                callback = "fugiat";
                fields = "amet";
                key = "aut";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "corporis";
                uploadType = "hic";
                uploadProtocol = "libero";
            }};            

            CloudschedulerProjectsLocationsJobsPauseResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsPause(req, new CloudschedulerProjectsLocationsJobsPauseSecurity("nobis", "dolores") {{
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

## cloudschedulerProjectsLocationsJobsResume

Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsResumeRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsResumeResponse;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsResumeSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudschedulerProjectsLocationsJobsResumeRequest req = new CloudschedulerProjectsLocationsJobsResumeRequest("quis") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("eaque", "quis");
                    put("nesciunt", "eos");
                }};
                accessToken = "perferendis";
                alt = AltEnum.JSON;
                callback = "minus";
                fields = "quam";
                key = "dolor";
                oauthToken = "vero";
                prettyPrint = false;
                quotaUser = "nostrum";
                uploadType = "hic";
                uploadProtocol = "recusandae";
            }};            

            CloudschedulerProjectsLocationsJobsResumeResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsResume(req, new CloudschedulerProjectsLocationsJobsResumeSecurity("omnis", "facilis") {{
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

## cloudschedulerProjectsLocationsJobsRun

Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsRunRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsRunResponse;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudschedulerProjectsLocationsJobsRunRequest req = new CloudschedulerProjectsLocationsJobsRunRequest("perspiciatis") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("consequuntur", "blanditiis");
                    put("error", "eaque");
                    put("occaecati", "rerum");
                    put("adipisci", "asperiores");
                }};
                accessToken = "earum";
                alt = AltEnum.JSON;
                callback = "iste";
                fields = "dolorum";
                key = "deleniti";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "provident";
                uploadType = "nobis";
                uploadProtocol = "libero";
            }};            

            CloudschedulerProjectsLocationsJobsRunResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsRun(req, new CloudschedulerProjectsLocationsJobsRunSecurity("delectus", "quaerat") {{
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

## cloudschedulerProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudschedulerProjectsLocationsListRequest req = new CloudschedulerProjectsLocationsListRequest("quos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolorem";
                alt = AltEnum.JSON;
                callback = "dolor";
                fields = "qui";
                filter = "ipsum";
                key = "hic";
                oauthToken = "excepturi";
                pageSize = 739551L;
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "reiciendis";
                uploadProtocol = "amet";
            }};            

            CloudschedulerProjectsLocationsListResponse res = sdk.projects.cloudschedulerProjectsLocationsList(req, new CloudschedulerProjectsLocationsListSecurity("dolorum", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
