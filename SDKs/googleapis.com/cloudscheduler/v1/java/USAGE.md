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