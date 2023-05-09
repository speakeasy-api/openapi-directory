# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [workloadmanagerProjectsLocationsEvaluationsCreate](docs/projects/README.md#workloadmanagerprojectslocationsevaluationscreate) - Creates a new Evaluation in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionslist) - Lists Executions in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsResultsList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionsresultslist) - List the running result of a single Execution.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsRun](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionsrun) - Creates a new Execution in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationsexecutionsscannedresourceslist) - List all scanned resources for a single Execution.
* [workloadmanagerProjectsLocationsEvaluationsList](docs/projects/README.md#workloadmanagerprojectslocationsevaluationslist) - Lists Evaluations in a given project and location.
* [workloadmanagerProjectsLocationsInsightsWriteInsight](docs/projects/README.md#workloadmanagerprojectslocationsinsightswriteinsight) - Write the data insights to workload manager data warehouse.
* [workloadmanagerProjectsLocationsList](docs/projects/README.md#workloadmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [workloadmanagerProjectsLocationsOperationsCancel](docs/projects/README.md#workloadmanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [workloadmanagerProjectsLocationsOperationsDelete](docs/projects/README.md#workloadmanagerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [workloadmanagerProjectsLocationsOperationsGet](docs/projects/README.md#workloadmanagerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [workloadmanagerProjectsLocationsOperationsList](docs/projects/README.md#workloadmanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workloadmanagerProjectsLocationsRulesList](docs/projects/README.md#workloadmanagerprojectslocationsruleslist) - Lists rules in a given project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
