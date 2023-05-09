# projects

### Available Operations

* [workloadmanagerProjectsLocationsEvaluationsCreate](#workloadmanagerprojectslocationsevaluationscreate) - Creates a new Evaluation in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsList](#workloadmanagerprojectslocationsevaluationsexecutionslist) - Lists Executions in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsResultsList](#workloadmanagerprojectslocationsevaluationsexecutionsresultslist) - List the running result of a single Execution.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsRun](#workloadmanagerprojectslocationsevaluationsexecutionsrun) - Creates a new Execution in a given project and location.
* [workloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList](#workloadmanagerprojectslocationsevaluationsexecutionsscannedresourceslist) - List all scanned resources for a single Execution.
* [workloadmanagerProjectsLocationsEvaluationsList](#workloadmanagerprojectslocationsevaluationslist) - Lists Evaluations in a given project and location.
* [workloadmanagerProjectsLocationsInsightsWriteInsight](#workloadmanagerprojectslocationsinsightswriteinsight) - Write the data insights to workload manager data warehouse.
* [workloadmanagerProjectsLocationsList](#workloadmanagerprojectslocationslist) - Lists information about the supported locations for this service.
* [workloadmanagerProjectsLocationsOperationsCancel](#workloadmanagerprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [workloadmanagerProjectsLocationsOperationsDelete](#workloadmanagerprojectslocationsoperationsdelete) - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* [workloadmanagerProjectsLocationsOperationsGet](#workloadmanagerprojectslocationsoperationsget) - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* [workloadmanagerProjectsLocationsOperationsList](#workloadmanagerprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [workloadmanagerProjectsLocationsRulesList](#workloadmanagerprojectslocationsruleslist) - Lists rules in a given project.

## workloadmanagerProjectsLocationsEvaluationsCreate

Creates a new Evaluation in a given project and location.

### Example Usage

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

            WorkloadmanagerProjectsLocationsEvaluationsCreateRequest req = new WorkloadmanagerProjectsLocationsEvaluationsCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                evaluationInput = new EvaluationInput() {{
                    description = "qui";
                    labels = new java.util.HashMap<String, String>() {{
                        put("cum", "esse");
                        put("ipsum", "excepturi");
                        put("aspernatur", "perferendis");
                        put("ad", "natus");
                    }};
                    name = "Sheryl Fadel";
                    resourceFilter = new ResourceFilter() {{
                        gceInstanceFilter = new GceInstanceFilter() {{
                            serviceAccounts = new String[]{{
                                add("saepe"),
                                add("fuga"),
                                add("in"),
                                add("corporis"),
                            }};
                        }};;
                        inclusionLabels = new java.util.HashMap<String, String>() {{
                            put("iure", "saepe");
                            put("quidem", "architecto");
                            put("ipsa", "reiciendis");
                        }};
                        resourceIdPatterns = new String[]{{
                            add("mollitia"),
                            add("laborum"),
                            add("dolores"),
                        }};
                        scopes = new String[]{{
                            add("corporis"),
                        }};
                    }};;
                    resourceStatus = new ResourceStatus() {{
                        rulesNewerVersions = new String[]{{
                            add("nobis"),
                        }};
                        state = ResourceStatusStateEnum.CREATING;
                    }};;
                    ruleNames = new String[]{{
                        add("nemo"),
                        add("minima"),
                        add("excepturi"),
                    }};
                    schedule = "accusantium";
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "doloribus";
                evaluationId = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                requestId = "consequuntur";
                uploadType = "repellat";
                uploadProtocol = "mollitia";
            }};            

            WorkloadmanagerProjectsLocationsEvaluationsCreateResponse res = sdk.projects.workloadmanagerProjectsLocationsEvaluationsCreate(req, new WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity("occaecati", "numquam") {{
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

## workloadmanagerProjectsLocationsEvaluationsExecutionsList

Lists Executions in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsListRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsListResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsEvaluationsExecutionsListRequest req = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsListRequest("commodi") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "molestiae";
                alt = AltEnum.JSON;
                callback = "error";
                fields = "quia";
                filter = "quis";
                key = "vitae";
                oauthToken = "laborum";
                orderBy = "animi";
                pageSize = 317202L;
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "sequi";
                uploadProtocol = "tenetur";
            }};            

            WorkloadmanagerProjectsLocationsEvaluationsExecutionsListResponse res = sdk.projects.workloadmanagerProjectsLocationsEvaluationsExecutionsList(req, new WorkloadmanagerProjectsLocationsEvaluationsExecutionsListSecurity("ipsam", "id") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workloadmanagerProjectsLocationsEvaluationsExecutionsResultsList

List the running result of a single Execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListRequest req = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListRequest("possimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "quasi";
                alt = AltEnum.MEDIA;
                callback = "temporibus";
                fields = "laborum";
                filter = "quasi";
                key = "reiciendis";
                oauthToken = "voluptatibus";
                pageSize = 878194L;
                pageToken = "nihil";
                prettyPrint = false;
                quotaUser = "praesentium";
                uploadType = "voluptatibus";
                uploadProtocol = "ipsa";
            }};            

            WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListResponse res = sdk.projects.workloadmanagerProjectsLocationsEvaluationsExecutionsResultsList(req, new WorkloadmanagerProjectsLocationsEvaluationsExecutionsResultsListSecurity("omnis", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listExecutionResultsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workloadmanagerProjectsLocationsEvaluationsExecutionsRun

Creates a new Execution in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ExecutionInput;
import org.openapis.openapi.models.shared.ExecutionRunTypeEnum;
import org.openapis.openapi.models.shared.RunEvaluationRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunRequest req = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunRequest("cum") {{
                dollarXgafv = XgafvEnum.ONE;
                runEvaluationRequestInput = new RunEvaluationRequestInput() {{
                    execution = new ExecutionInput() {{
                        labels = new java.util.HashMap<String, String>() {{
                            put("reprehenderit", "ut");
                        }};
                        name = "Willie Hessel";
                        runType = ExecutionRunTypeEnum.TYPE_UNSPECIFIED;
                    }};;
                    executionId = "harum";
                    requestId = "enim";
                }};;
                accessToken = "accusamus";
                alt = AltEnum.MEDIA;
                callback = "repudiandae";
                fields = "quae";
                key = "ipsum";
                oauthToken = "quidem";
                prettyPrint = false;
                quotaUser = "molestias";
                uploadType = "excepturi";
                uploadProtocol = "pariatur";
            }};            

            WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunResponse res = sdk.projects.workloadmanagerProjectsLocationsEvaluationsExecutionsRun(req, new WorkloadmanagerProjectsLocationsEvaluationsExecutionsRunSecurity("modi", "praesentium") {{
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

## workloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList

List all scanned resources for a single Execution.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListRequest req = new WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListRequest("rem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quasi";
                alt = AltEnum.PROTO;
                callback = "sint";
                fields = "veritatis";
                filter = "itaque";
                key = "incidunt";
                oauthToken = "enim";
                orderBy = "consequatur";
                pageSize = 667411L;
                pageToken = "quibusdam";
                prettyPrint = false;
                quotaUser = "explicabo";
                rule = "deserunt";
                uploadType = "distinctio";
                uploadProtocol = "quibusdam";
            }};            

            WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListResponse res = sdk.projects.workloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesList(req, new WorkloadmanagerProjectsLocationsEvaluationsExecutionsScannedResourcesListSecurity("labore", "modi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listScannedResourcesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workloadmanagerProjectsLocationsEvaluationsList

Lists Evaluations in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsListRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsListResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsEvaluationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsEvaluationsListRequest req = new WorkloadmanagerProjectsLocationsEvaluationsListRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "cupiditate";
                alt = AltEnum.MEDIA;
                callback = "perferendis";
                fields = "magni";
                filter = "assumenda";
                key = "ipsam";
                oauthToken = "alias";
                orderBy = "fugit";
                pageSize = 677817L;
                pageToken = "excepturi";
                prettyPrint = false;
                quotaUser = "tempora";
                uploadType = "facilis";
                uploadProtocol = "tempore";
            }};            

            WorkloadmanagerProjectsLocationsEvaluationsListResponse res = sdk.projects.workloadmanagerProjectsLocationsEvaluationsList(req, new WorkloadmanagerProjectsLocationsEvaluationsListSecurity("labore", "delectus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listEvaluationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workloadmanagerProjectsLocationsInsightsWriteInsight

Write the data insights to workload manager data warehouse.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsInsightsWriteInsightRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsInsightsWriteInsightResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsInsightsWriteInsightSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.InsightInput;
import org.openapis.openapi.models.shared.SapDiscovery;
import org.openapis.openapi.models.shared.SapDiscoveryComponent;
import org.openapis.openapi.models.shared.SapDiscoveryMetadata;
import org.openapis.openapi.models.shared.SapDiscoveryResource;
import org.openapis.openapi.models.shared.SapDiscoveryResourceResourceStateEnum;
import org.openapis.openapi.models.shared.SapDiscoveryResourceResourceTypeEnum;
import org.openapis.openapi.models.shared.SapValidation;
import org.openapis.openapi.models.shared.SapValidationValidationDetail;
import org.openapis.openapi.models.shared.SapValidationValidationDetailSapValidationTypeEnum;
import org.openapis.openapi.models.shared.WriteInsightRequestInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsInsightsWriteInsightRequest req = new WorkloadmanagerProjectsLocationsInsightsWriteInsightRequest("eum") {{
                dollarXgafv = XgafvEnum.ONE;
                writeInsightRequestInput = new WriteInsightRequestInput() {{
                    insight = new InsightInput() {{
                        sapDiscovery = new SapDiscovery() {{
                            applicationLayer = new SapDiscoveryComponent() {{
                                applicationType = "eligendi";
                                databaseType = "sint";
                                hostProject = "aliquid";
                                resources = new org.openapis.openapi.models.shared.SapDiscoveryResource[]{{
                                    add(new SapDiscoveryResource() {{
                                        relatedResources = new String[]{{
                                            add("sint"),
                                            add("officia"),
                                            add("dolor"),
                                            add("debitis"),
                                        }};
                                        resourceKind = "a";
                                        resourceState = SapDiscoveryResourceResourceStateEnum.REPLACED;
                                        resourceType = SapDiscoveryResourceResourceTypeEnum.COMPUTE;
                                        resourceUri = "in";
                                        updateTime = "illum";
                                    }}),
                                    add(new SapDiscoveryResource() {{
                                        relatedResources = new String[]{{
                                            add("rerum"),
                                            add("dicta"),
                                            add("magnam"),
                                            add("cumque"),
                                        }};
                                        resourceKind = "facere";
                                        resourceState = SapDiscoveryResourceResourceStateEnum.UPDATED;
                                        resourceType = SapDiscoveryResourceResourceTypeEnum.COMPUTE;
                                        resourceUri = "laborum";
                                        updateTime = "accusamus";
                                    }}),
                                    add(new SapDiscoveryResource() {{
                                        relatedResources = new String[]{{
                                            add("occaecati"),
                                        }};
                                        resourceKind = "enim";
                                        resourceState = SapDiscoveryResourceResourceStateEnum.MISSING;
                                        resourceType = SapDiscoveryResourceResourceTypeEnum.NETWORK;
                                        resourceUri = "quidem";
                                        updateTime = "provident";
                                    }}),
                                }};
                                sid = "nam";
                            }};;
                            databaseLayer = new SapDiscoveryComponent() {{
                                applicationType = "id";
                                databaseType = "blanditiis";
                                hostProject = "deleniti";
                                resources = new org.openapis.openapi.models.shared.SapDiscoveryResource[]{{
                                    add(new SapDiscoveryResource() {{
                                        relatedResources = new String[]{{
                                            add("deserunt"),
                                        }};
                                        resourceKind = "nisi";
                                        resourceState = SapDiscoveryResourceResourceStateEnum.UPDATED;
                                        resourceType = SapDiscoveryResourceResourceTypeEnum.STORAGE;
                                        resourceUri = "omnis";
                                        updateTime = "molestiae";
                                    }}),
                                    add(new SapDiscoveryResource() {{
                                        relatedResources = new String[]{{
                                            add("nihil"),
                                        }};
                                        resourceKind = "magnam";
                                        resourceState = SapDiscoveryResourceResourceStateEnum.REPLACED;
                                        resourceType = SapDiscoveryResourceResourceTypeEnum.STORAGE;
                                        resourceUri = "labore";
                                        updateTime = "labore";
                                    }}),
                                    add(new SapDiscoveryResource() {{
                                        relatedResources = new String[]{{
                                            add("natus"),
                                            add("nobis"),
                                        }};
                                        resourceKind = "eum";
                                        resourceState = SapDiscoveryResourceResourceStateEnum.MISSING;
                                        resourceType = SapDiscoveryResourceResourceTypeEnum.RESOURCE_TYPE_UNSPECIFIED;
                                        resourceUri = "architecto";
                                        updateTime = "magnam";
                                    }}),
                                    add(new SapDiscoveryResource() {{
                                        relatedResources = new String[]{{
                                            add("excepturi"),
                                        }};
                                        resourceKind = "ullam";
                                        resourceState = SapDiscoveryResourceResourceStateEnum.REMOVED;
                                        resourceType = SapDiscoveryResourceResourceTypeEnum.STORAGE;
                                        resourceUri = "sint";
                                        updateTime = "accusantium";
                                    }}),
                                }};
                                sid = "mollitia";
                            }};;
                            metadata = new SapDiscoveryMetadata() {{
                                customerRegion = "reiciendis";
                                definedSystem = "mollitia";
                                environmentType = "ad";
                                sapProduct = "eum";
                            }};;
                            systemId = "dolor";
                            updateTime = "necessitatibus";
                        }};;
                        sapValidation = new SapValidation() {{
                            validationDetails = new org.openapis.openapi.models.shared.SapValidationValidationDetail[]{{
                                add(new SapValidationValidationDetail() {{
                                    details = new java.util.HashMap<String, String>() {{
                                        put("quasi", "iure");
                                        put("doloribus", "debitis");
                                    }};
                                    sapValidationType = SapValidationValidationDetailSapValidationTypeEnum.SYSTEM;
                                }}),
                            }};
                        }};;
                    }};;
                    requestId = "maxime";
                }};;
                accessToken = "deleniti";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "architecto";
                key = "architecto";
                oauthToken = "repudiandae";
                prettyPrint = false;
                quotaUser = "ullam";
                uploadType = "expedita";
                uploadProtocol = "nihil";
            }};            

            WorkloadmanagerProjectsLocationsInsightsWriteInsightResponse res = sdk.projects.workloadmanagerProjectsLocationsInsightsWriteInsight(req, new WorkloadmanagerProjectsLocationsInsightsWriteInsightSecurity("repellat", "quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.writeInsightResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workloadmanagerProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsListRequest req = new WorkloadmanagerProjectsLocationsListRequest("sed") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "pariatur";
                alt = AltEnum.JSON;
                callback = "consequuntur";
                fields = "praesentium";
                filter = "natus";
                key = "magni";
                oauthToken = "sunt";
                pageSize = 779051L;
                pageToken = "illum";
                prettyPrint = false;
                quotaUser = "pariatur";
                uploadType = "maxime";
                uploadProtocol = "ea";
            }};            

            WorkloadmanagerProjectsLocationsListResponse res = sdk.projects.workloadmanagerProjectsLocationsList(req, new WorkloadmanagerProjectsLocationsListSecurity("excepturi", "odit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workloadmanagerProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsOperationsCancelRequest req = new WorkloadmanagerProjectsLocationsOperationsCancelRequest("ea") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("maiores", "quidem");
                }};
                accessToken = "ipsam";
                alt = AltEnum.MEDIA;
                callback = "autem";
                fields = "nam";
                key = "eaque";
                oauthToken = "pariatur";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "voluptatibus";
                uploadProtocol = "perferendis";
            }};            

            WorkloadmanagerProjectsLocationsOperationsCancelResponse res = sdk.projects.workloadmanagerProjectsLocationsOperationsCancel(req, new WorkloadmanagerProjectsLocationsOperationsCancelSecurity("fugiat", "amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workloadmanagerProjectsLocationsOperationsDelete

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsDeleteRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsDeleteResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsOperationsDeleteRequest req = new WorkloadmanagerProjectsLocationsOperationsDeleteRequest("aut") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "corporis";
                alt = AltEnum.PROTO;
                callback = "libero";
                fields = "nobis";
                key = "dolores";
                oauthToken = "quis";
                prettyPrint = false;
                quotaUser = "totam";
                uploadType = "dignissimos";
                uploadProtocol = "eaque";
            }};            

            WorkloadmanagerProjectsLocationsOperationsDeleteResponse res = sdk.projects.workloadmanagerProjectsLocationsOperationsDelete(req, new WorkloadmanagerProjectsLocationsOperationsDeleteSecurity("quis", "nesciunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workloadmanagerProjectsLocationsOperationsGet

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsGetRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsGetResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsOperationsGetRequest req = new WorkloadmanagerProjectsLocationsOperationsGetRequest("eos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "dolores";
                alt = AltEnum.PROTO;
                callback = "quam";
                fields = "dolor";
                key = "vero";
                oauthToken = "nostrum";
                prettyPrint = false;
                quotaUser = "hic";
                uploadType = "recusandae";
                uploadProtocol = "omnis";
            }};            

            WorkloadmanagerProjectsLocationsOperationsGetResponse res = sdk.projects.workloadmanagerProjectsLocationsOperationsGet(req, new WorkloadmanagerProjectsLocationsOperationsGetSecurity("facilis", "perspiciatis") {{
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

## workloadmanagerProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsOperationsListRequest req = new WorkloadmanagerProjectsLocationsOperationsListRequest("voluptatem") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequuntur";
                alt = AltEnum.MEDIA;
                callback = "error";
                fields = "eaque";
                filter = "occaecati";
                key = "rerum";
                oauthToken = "adipisci";
                pageSize = 992397L;
                pageToken = "earum";
                prettyPrint = false;
                quotaUser = "modi";
                uploadType = "iste";
                uploadProtocol = "dolorum";
            }};            

            WorkloadmanagerProjectsLocationsOperationsListResponse res = sdk.projects.workloadmanagerProjectsLocationsOperationsList(req, new WorkloadmanagerProjectsLocationsOperationsListSecurity("deleniti", "pariatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workloadmanagerProjectsLocationsRulesList

Lists rules in a given project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsRulesListRequest;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsRulesListResponse;
import org.openapis.openapi.models.operations.WorkloadmanagerProjectsLocationsRulesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkloadmanagerProjectsLocationsRulesListRequest req = new WorkloadmanagerProjectsLocationsRulesListRequest("provident") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "libero";
                alt = AltEnum.PROTO;
                callback = "quaerat";
                fields = "quos";
                filter = "aliquid";
                key = "dolorem";
                oauthToken = "dolorem";
                pageSize = 222443L;
                pageToken = "qui";
                prettyPrint = false;
                quotaUser = "ipsum";
                uploadType = "hic";
                uploadProtocol = "excepturi";
            }};            

            WorkloadmanagerProjectsLocationsRulesListResponse res = sdk.projects.workloadmanagerProjectsLocationsRulesList(req, new WorkloadmanagerProjectsLocationsRulesListSecurity("cum", "voluptate") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
