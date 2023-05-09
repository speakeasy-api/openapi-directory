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