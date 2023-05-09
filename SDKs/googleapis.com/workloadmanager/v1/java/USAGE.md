<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsCreateResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.EvaluationInput;
import org.openapis.openapi.models.shared.GceInstanceFilter;
import org.openapis.openapi.models.shared.ResourceFilter;
import org.openapis.openapi.models.shared.ResourceStatus;
import org.openapis.openapi.models.shared.ResourceStatusStateEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsEvaluationsCreateRequest req = new WorkloadmanagerProjectsLocationsEvaluationsCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                evaluationInput = new EvaluationInput() {{
                    description = "distinctio";
                    labels = new java.util.HashMap<String, String>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                    name = "Dr. Valerie Toy";
                    resourceFilter = new ResourceFilter() {{
                        gceInstanceFilter = new GceInstanceFilter() {{
                            serviceAccounts = new String[]{{
                                add("molestiae"),
                                add("minus"),
                            }};
                        }};;
                        inclusionLabels = new java.util.HashMap<String, String>() {{
                            put("voluptatum", "iusto");
                            put("excepturi", "nisi");
                            put("recusandae", "temporibus");
                            put("ab", "quis");
                        }};
                        resourceIdPatterns = new String[]{{
                            add("deserunt"),
                        }};
                        scopes = new String[]{{
                            add("ipsam"),
                        }};
                    }};;
                    resourceStatus = new ResourceStatus() {{
                        rulesNewerVersions = new String[]{{
                            add("sapiente"),
                            add("quo"),
                            add("odit"),
                            add("at"),
                        }};
                        state = ResourceStatusStateEnum.DELETING;
                    }};;
                    ruleNames = new String[]{{
                        add("molestiae"),
                        add("quod"),
                        add("quod"),
                        add("esse"),
                    }};
                    schedule = "totam";
                }};;
                accessToken = "porro";
                alt = AltEnum.PROTO;
                callback = "dicta";
                evaluationId = "nam";
                fields = "officia";
                key = "occaecati";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "deleniti";
                requestId = "hic";
                uploadType = "optio";
                uploadProtocol = "totam";
            }};            

            WorkloadmanagerProjectsLocationsEvaluationsCreateResponse res = sdk.projects.workloadmanagerProjectsLocationsEvaluationsCreate(req, new WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity("beatae", "commodi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->