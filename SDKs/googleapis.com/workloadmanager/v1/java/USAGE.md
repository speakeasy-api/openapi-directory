<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsCreatePathParams;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsCreateResponse;
import org.openapis.openapi.models.shared.EvaluationInput;
import org.openapis.openapi.models.shared.ResourceStatusStateEnum;
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.ResourceFilter;
import org.openapis.openapi.models.shared.GceInstanceFilter;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

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
                    parent = "corrupti";
                }};
                queryParams = new WorkloadmanagerProjectsLocationsEvaluationsCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    evaluationId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                }};
                request = new EvaluationInput() {{
                    description = "magnam";
                    labels = new java.util.HashMap<String, String>() {{
                        put("ipsa", "delectus");
                        put("tempora", "suscipit");
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    name = "iusto";
                    resourceFilter = new ResourceFilter() {{
                        gceInstanceFilter = new GceInstanceFilter() {{
                            serviceAccounts = new String[]{{
                                add("nisi"),
                                add("recusandae"),
                                add("temporibus"),
                            }};
                        }};
                        inclusionLabels = new java.util.HashMap<String, String>() {{
                            put("quis", "veritatis");
                        }};
                        resourceIdPatterns = new String[]{{
                            add("perferendis"),
                            add("ipsam"),
                            add("repellendus"),
                        }};
                        scopes = new String[]{{
                            add("quo"),
                            add("odit"),
                            add("at"),
                            add("at"),
                        }};
                    }};
                    resourceStatus = new ResourceStatus() {{
                        rulesNewerVersions = new String[]{{
                            add("molestiae"),
                            add("quod"),
                            add("quod"),
                            add("esse"),
                        }};
                        state = "ACTIVE";
                    }};
                    ruleNames = new String[]{{
                        add("dolorum"),
                        add("dicta"),
                        add("nam"),
                        add("officia"),
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