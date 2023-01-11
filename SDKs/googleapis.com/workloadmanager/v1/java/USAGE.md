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
                    parent = "sunt";
                }};
                queryParams = new WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "explicabo";
                    alt = "media";
                    callback = "libero";
                    evaluationId = "odio";
                    fields = "distinctio";
                    key = "et";
                    oauthToken = "a";
                    prettyPrint = false;
                    quotaUser = "esse";
                    requestId = "eos";
                    uploadType = "consequatur";
                    uploadProtocol = "rerum";
                }};
                request = new EvaluationInput() {{
                    description = "alias";
                    labels = new java.util.HashMap<String, String>() {{
                        put("et", "rerum");
                        put("non", "sapiente");
                        put("et", "labore");
                    }};
                    name = "et";
                    resourceFilter = new ResourceFilter() {{
                        gceInstanceFilter = new GceInstanceFilter() {{
                            serviceAccounts = new String[]() {{
                                add("et"),
                            }};
                        }};
                        inclusionLabels = new java.util.HashMap<String, String>() {{
                            put("ut", "veniam");
                            put("aut", "ut");
                            put("qui", "temporibus");
                        }};
                        resourceIdPatterns = new String[]() {{
                            add("dolores"),
                        }};
                        scopes = new String[]() {{
                            add("tempora"),
                            add("aut"),
                        }};
                    }};
                    resourceStatus = new ResourceStatus() {{
                        rulesNewerVersions = new String[]() {{
                            add("eveniet"),
                            add("aut"),
                            add("omnis"),
                        }};
                        state = "CREATING";
                    }};
                    ruleNames = new String[]() {{
                        add("in"),
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