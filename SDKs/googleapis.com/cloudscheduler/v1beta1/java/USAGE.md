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
                    legacyAppEngineCron = false;
                    name = "illo";
                    pubsubTarget = new PubsubTarget() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("officiis", "autem");
                            put("consectetur", "nobis");
                            put("odio", "qui");
                        }};
                        data = "recusandae";
                        topicName = "at";
                    }};
                    retryConfig = new RetryConfig() {{
                        maxBackoffDuration = "ipsum";
                        maxDoublings = 8902041070398994519;
                        maxRetryDuration = "modi";
                        minBackoffDuration = "sint";
                        retryCount = 5392504858645185670;
                    }};
                    schedule = "ut";
                    scheduleTime = "exercitationem";
                    state = "UPDATE_FAILED";
                    status = new Status() {{
                        code = 5837486892148644279;
                        details = new java.util.HashMap<String, Object>[]() {{
                            add(new java.util.HashMap<String, Object>() {{
                                put("incidunt", "dolor");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("veritatis", "in");
                                put("et", "omnis");
                                put("ipsum", "ex");
                            }}),
                            add(new java.util.HashMap<String, Object>() {{
                                put("placeat", "vel");
                                put("rerum", "mollitia");
                                put("voluptas", "quam");
                            }}),
                        }};
                        message = "reprehenderit";
                    }};
                    timeZone = "qui";
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