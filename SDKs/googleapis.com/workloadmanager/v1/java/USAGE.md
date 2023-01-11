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

            WorkloadmanagerProjectsLocationsEvaluationsCreateRequest req = new WorkloadmanagerProjectsLocationsEvaluationsCreateRequest() {{
                security = new WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams() {{
                    parent = "sit";
                }};
                queryParams = new WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams() {{
                    dollarXgafv = "1";
                    accessToken = "culpa";
                    alt = "media";
                    callback = "consequuntur";
                    evaluationId = "dolor";
                    fields = "expedita";
                    key = "voluptas";
                    oauthToken = "fugit";
                    prettyPrint = false;
                    quotaUser = "nihil";
                    requestId = "rerum";
                    uploadType = "dicta";
                    uploadProtocol = "debitis";
                }};
                request = new EvaluationInput() {{
                    description = "voluptatum";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ut", "dolorem");
                    }};
                    name = "et";
                    resourceFilter = new ResourceFilter() {{
                        gceInstanceFilter = new GceInstanceFilter() {{
                            serviceAccounts = new String[]() {{
                                add("iste"),
                            }};
                        }};
                        inclusionLabels = new java.util.HashMap<String, String>() {{
                            put("totam", "dolores");
                        }};
                        resourceIdPatterns = new String[]() {{
                            add("debitis"),
                            add("vel"),
                            add("odio"),
                        }};
                        scopes = new String[]() {{
                            add("id"),
                            add("aspernatur"),
                        }};
                    }};
                    resourceStatus = new ResourceStatus() {{
                        rulesNewerVersions = new String[]() {{
                            add("totam"),
                            add("commodi"),
                            add("quis"),
                        }};
                        state = "CREATING";
                    }};
                    ruleNames = new String[]() {{
                        add("odit"),
                        add("non"),
                        add("voluptas"),
                    }};
                }};
            }};

            WorkloadmanagerProjectsLocationsEvaluationsCreateResponse res = sdk.projects.workloadmanagerProjectsLocationsEvaluationsCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->