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