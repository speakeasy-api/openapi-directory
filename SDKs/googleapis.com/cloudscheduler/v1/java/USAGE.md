<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.CloudschedulerProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudschedulerProjectsLocationsJobsCreateRequest req = new CloudschedulerProjectsLocationsJobsCreateRequest() {{
                dollarXgafv = "2";
                job = new Job() {{
                    appEngineHttpTarget = new AppEngineHttpTarget() {{
                        appEngineRouting = new AppEngineRouting() {{
                            host = "provident";
                            instance = "distinctio";
                            service = "quibusdam";
                            version = "unde";
                        }};
                        body = "nulla";
                        headers = new java.util.HashMap<String, String>() {{
                            put("illum", "vel");
                            put("error", "deserunt");
                            put("suscipit", "iure");
                        }};
                        httpMethod = "GET";
                        relativeUri = "debitis";
                    }};
                    attemptDeadline = "ipsa";
                    description = "delectus";
                    httpTarget = new HttpTarget() {{
                        body = "tempora";
                        headers = new java.util.HashMap<String, String>() {{
                            put("molestiae", "minus");
                            put("placeat", "voluptatum");
                        }};
                        httpMethod = "HEAD";
                        oauthToken = new OAuthToken() {{
                            scope = "excepturi";
                            serviceAccountEmail = "nisi";
                        }};
                        oidcToken = new OidcToken() {{
                            audience = "recusandae";
                            serviceAccountEmail = "temporibus";
                        }};
                        uri = "http://gloomy-blanket.name";
                    }};
                    lastAttemptTime = "perferendis";
                    name = "ipsam";
                    pubsubTarget = new PubsubTarget() {{
                        attributes = new java.util.HashMap<String, String>() {{
                            put("sapiente", "quo");
                            put("odit", "at");
                            put("at", "maiores");
                            put("molestiae", "quod");
                        }};
                        data = "quod";
                        topicName = "esse";
                    }};
                    retryConfig = new RetryConfig() {{
                        maxBackoffDuration = "totam";
                        maxDoublings = 780529;
                        maxRetryDuration = "dolorum";
                        minBackoffDuration = "dicta";
                        retryCount = 720633;
                    }};
                    schedule = "officia";
                    scheduleTime = "occaecati";
                    state = "STATE_UNSPECIFIED";
                    status = new Status() {{
                        code = 537373;
                        details = new java.util.HashMap<String, Object>[]{{
                            add(new java.util.HashMap<String, Object>() {{
                                put("totam", "beatae");
                                put("commodi", "molestiae");
                                put("modi", "qui");
                                put("impedit", "cum");
                            }}),
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
                    }};
                    timeZone = "iure";
                    userUpdateTime = "saepe";
                }};
                accessToken = "quidem";
                alt = "json";
                callback = "ipsa";
                fields = "reiciendis";
                key = "est";
                oauthToken = "mollitia";
                parent = "laborum";
                prettyPrint = false;
                quotaUser = "dolores";
                uploadType = "dolorem";
                uploadProtocol = "corporis";
            }}            

            CloudschedulerProjectsLocationsJobsCreateResponse res = sdk.projects.cloudschedulerProjectsLocationsJobsCreate(req, new CloudschedulerProjectsLocationsJobsCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.job.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->