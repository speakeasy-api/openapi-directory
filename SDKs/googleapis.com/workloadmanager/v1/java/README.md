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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `workloadmanagerProjectsLocationsEvaluationsCreate` - Creates a new Evaluation in a given project and location.
* `workloadmanagerProjectsLocationsEvaluationsList` - Lists Evaluations in a given project and location.
* `workloadmanagerProjectsLocationsInsightsWriteInsight` - Write the data insights to workload manager data warehouse.
* `workloadmanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `workloadmanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `workloadmanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `workloadmanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `workloadmanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
