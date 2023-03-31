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