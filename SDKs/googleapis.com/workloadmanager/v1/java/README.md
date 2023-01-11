# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `workloadmanagerProjectsLocationsEvaluationsCreate` - Creates a new Evaluation in a given project and location.
* `workloadmanagerProjectsLocationsEvaluationsList` - Lists Evaluations in a given project and location.
* `workloadmanagerProjectsLocationsList` - Lists information about the supported locations for this service.
* `workloadmanagerProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `workloadmanagerProjectsLocationsOperationsDelete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `workloadmanagerProjectsLocationsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `workloadmanagerProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
