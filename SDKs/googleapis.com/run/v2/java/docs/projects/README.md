# projects

### Available Operations

* [runProjectsLocationsJobsCreate](#runprojectslocationsjobscreate) - Creates a Job.
* [runProjectsLocationsJobsExecutionsList](#runprojectslocationsjobsexecutionslist) - Lists Executions from a Job.
* [runProjectsLocationsJobsExecutionsTasksList](#runprojectslocationsjobsexecutionstaskslist) - Lists Tasks from an Execution of a Job.
* [runProjectsLocationsJobsList](#runprojectslocationsjobslist) - Lists Jobs.
* [runProjectsLocationsJobsRun](#runprojectslocationsjobsrun) - Triggers creation of a new Execution of this Job.
* [runProjectsLocationsOperationsList](#runprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [runProjectsLocationsOperationsWait](#runprojectslocationsoperationswait) - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
* [runProjectsLocationsServicesCreate](#runprojectslocationsservicescreate) - Creates a new Service in a given project and location.
* [runProjectsLocationsServicesGetIamPolicy](#runprojectslocationsservicesgetiampolicy) - Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
* [runProjectsLocationsServicesList](#runprojectslocationsserviceslist) - Lists Services.
* [runProjectsLocationsServicesPatch](#runprojectslocationsservicespatch) - Updates a Service.
* [runProjectsLocationsServicesRevisionsDelete](#runprojectslocationsservicesrevisionsdelete) - Deletes a Revision.
* [runProjectsLocationsServicesRevisionsGet](#runprojectslocationsservicesrevisionsget) - Gets information about a Revision.
* [runProjectsLocationsServicesRevisionsList](#runprojectslocationsservicesrevisionslist) - Lists Revisions from a given Service, or from a given location.
* [runProjectsLocationsServicesSetIamPolicy](#runprojectslocationsservicessetiampolicy) - Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
* [runProjectsLocationsServicesTestIamPermissions](#runprojectslocationsservicestestiampermissions) - Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

## runProjectsLocationsJobsCreate

Creates a Job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2BinaryAuthorization;
import org.openapis.openapi.models.shared.GoogleCloudRunV2CloudSqlInstance;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Condition;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionExecutionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionRevisionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionSeverityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Container;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EmptyDirVolumeSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVarSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ExecutionReference;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ExecutionTemplate;
import org.openapis.openapi.models.shared.GoogleCloudRunV2GRPCAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPGetAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader;
import org.openapis.openapi.models.shared.GoogleCloudRunV2JobInput;
import org.openapis.openapi.models.shared.GoogleCloudRunV2JobLaunchStageEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Probe;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ResourceRequirements;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretKeySelector;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretVolumeSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TCPSocketAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TaskTemplate;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Volume;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccess;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccessEgressEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsJobsCreateRequest req = new RunProjectsLocationsJobsCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudRunV2JobInput = new GoogleCloudRunV2JobInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("explicabo", "provident");
                        put("ipsa", "molestiae");
                    }};
                    binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization() {{
                        breakglassJustification = "magnam";
                        useDefault = false;
                    }};;
                    client = "odio";
                    clientVersion = "eius";
                    labels = new java.util.HashMap<String, String>() {{
                        put("esse", "rem");
                        put("fuga", "reprehenderit");
                    }};
                    latestCreatedExecution = new GoogleCloudRunV2ExecutionReference() {{
                        completionTime = "quidem";
                        createTime = "fugiat";
                        name = "Agnes Hoeger";
                    }};;
                    launchStage = GoogleCloudRunV2JobLaunchStageEnum.ALPHA;
                    name = "Harold Bednar";
                    template = new GoogleCloudRunV2ExecutionTemplate() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("quo", "illum");
                        }};
                        labels = new java.util.HashMap<String, String>() {{
                            put("fuga", "eius");
                            put("eos", "voluptas");
                            put("ab", "cupiditate");
                            put("consequatur", "tempora");
                        }};
                        parallelism = 892050;
                        taskCount = 370853;
                        template = new GoogleCloudRunV2TaskTemplate() {{
                            containers = new org.openapis.openapi.models.shared.GoogleCloudRunV2Container[]{{
                                add(new GoogleCloudRunV2Container() {{
                                    args = new String[]{{
                                        add("quo"),
                                    }};
                                    command = new String[]{{
                                        add("recusandae"),
                                        add("aperiam"),
                                    }};
                                    dependsOn = new String[]{{
                                        add("quod"),
                                        add("dignissimos"),
                                        add("inventore"),
                                    }};
                                    env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Sheldon Hackett";
                                            value = "commodi";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "sapiente";
                                                    version = "dolores";
                                                }};
                                            }};
                                        }}),
                                        add(new GoogleCloudRunV2EnvVar() {{
                                            name = "Fernando Barton";
                                            value = "quas";
                                            valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                                secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                    secret = "praesentium";
                                                    version = "consequuntur";
                                                }};
                                            }};
                                        }}),
                                    }};
                                    image = "deleniti";
                                    livenessProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 143829;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 681393;
                                            service = "mollitia";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Roy Hansen";
                                                    value = "sapiente";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Norma Christiansen";
                                                    value = "atque";
                                                }}),
                                            }};
                                            path = "et";
                                            port = 456911;
                                        }};
                                        initialDelaySeconds = 910545;
                                        periodSeconds = 882042;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 82971;
                                        }};
                                        timeoutSeconds = 458604;
                                    }};
                                    name = "Marco Terry PhD";
                                    ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 690025;
                                            name = "Luz McClure";
                                        }}),
                                        add(new GoogleCloudRunV2ContainerPort() {{
                                            containerPort = 756779;
                                            name = "Kristi Renner";
                                        }}),
                                    }};
                                    resources = new GoogleCloudRunV2ResourceRequirements() {{
                                        cpuIdle = false;
                                        limits = new java.util.HashMap<String, String>() {{
                                            put("consequatur", "minus");
                                        }};
                                        startupCpuBoost = false;
                                    }};
                                    startupProbe = new GoogleCloudRunV2Probe() {{
                                        failureThreshold = 308286;
                                        grpc = new GoogleCloudRunV2GRPCAction() {{
                                            port = 959167;
                                            service = "consectetur";
                                        }};
                                        httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                            httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Eduardo Wilkinson";
                                                    value = "esse";
                                                }}),
                                                add(new GoogleCloudRunV2HTTPHeader() {{
                                                    name = "Lorene Mueller";
                                                    value = "possimus";
                                                }}),
                                            }};
                                            path = "quia";
                                            port = 908844;
                                        }};
                                        initialDelaySeconds = 992430;
                                        periodSeconds = 815524;
                                        tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                            port = 85001;
                                        }};
                                        timeoutSeconds = 159414;
                                    }};
                                    volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                        add(new GoogleCloudRunV2VolumeMount() {{
                                            mountPath = "similique";
                                            name = "Dr. Gene Wiegand";
                                        }}),
                                    }};
                                    workingDir = "in";
                                }}),
                            }};
                            encryptionKey = "eius";
                            executionEnvironment = GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum.EXECUTION_ENVIRONMENT_GEN2;
                            maxRetries = 849039;
                            serviceAccount = "soluta";
                            timeout = "accusantium";
                            volumes = new org.openapis.openapi.models.shared.GoogleCloudRunV2Volume[]{{
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("dicta"),
                                            add("ullam"),
                                            add("reprehenderit"),
                                            add("ullam"),
                                        }};
                                    }};
                                    emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                        medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEDIUM_UNSPECIFIED;
                                        sizeLimit = "aut";
                                    }};
                                    name = "Clarence Sporer";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 929292;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 99615;
                                                path = "omnis";
                                                version = "tenetur";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 98478;
                                                path = "at";
                                                version = "et";
                                            }}),
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 454162;
                                                path = "ipsa";
                                                version = "minima";
                                            }}),
                                        }};
                                        secret = "veritatis";
                                    }};
                                }}),
                                add(new GoogleCloudRunV2Volume() {{
                                    cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                        instances = new String[]{{
                                            add("adipisci"),
                                        }};
                                    }};
                                    emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                        medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEMORY;
                                        sizeLimit = "temporibus";
                                    }};
                                    name = "Patsy Armstrong";
                                    secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                        defaultMode = 649832;
                                        items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                            add(new GoogleCloudRunV2VersionToPath() {{
                                                mode = 544591;
                                                path = "non";
                                                version = "voluptatem";
                                            }}),
                                        }};
                                        secret = "dolor";
                                    }};
                                }}),
                            }};
                            vpcAccess = new GoogleCloudRunV2VpcAccess() {{
                                connector = "occaecati";
                                egress = GoogleCloudRunV2VpcAccessEgressEnum.VPC_EGRESS_UNSPECIFIED;
                            }};;
                        }};;
                    }};;
                    terminalCondition = new GoogleCloudRunV2Condition() {{
                        executionReason = GoogleCloudRunV2ConditionExecutionReasonEnum.CANCELLED;
                        lastTransitionTime = "explicabo";
                        message = "voluptas";
                        reason = GoogleCloudRunV2ConditionReasonEnum.COMMON_REASON_UNDEFINED;
                        revisionReason = GoogleCloudRunV2ConditionRevisionReasonEnum.HEALTH_CHECK_CONTAINER_ERROR;
                        severity = GoogleCloudRunV2ConditionSeverityEnum.SEVERITY_UNSPECIFIED;
                        state = GoogleCloudRunV2ConditionStateEnum.CONDITION_SUCCEEDED;
                        type = "natus";
                    }};;
                }};;
                accessToken = "velit";
                alt = AltEnum.PROTO;
                callback = "voluptas";
                fields = "asperiores";
                jobId = "aperiam";
                key = "ea";
                oauthToken = "quaerat";
                prettyPrint = false;
                quotaUser = "consequuntur";
                uploadType = "repellendus";
                uploadProtocol = "officia";
                validateOnly = false;
            }};            

            RunProjectsLocationsJobsCreateResponse res = sdk.projects.runProjectsLocationsJobsCreate(req, new RunProjectsLocationsJobsCreateSecurity("maxime", "dignissimos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsJobsExecutionsList

Lists Executions from a Job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsExecutionsListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsExecutionsListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsExecutionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsJobsExecutionsListRequest req = new RunProjectsLocationsJobsExecutionsListRequest("officia") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.JSON;
                callback = "quaerat";
                fields = "porro";
                key = "quod";
                oauthToken = "labore";
                pageSize = 70447L;
                pageToken = "adipisci";
                prettyPrint = false;
                quotaUser = "fuga";
                showDeleted = false;
                uploadType = "id";
                uploadProtocol = "suscipit";
            }};            

            RunProjectsLocationsJobsExecutionsListResponse res = sdk.projects.runProjectsLocationsJobsExecutionsList(req, new RunProjectsLocationsJobsExecutionsListSecurity("velit", "culpa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRunV2ListExecutionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsJobsExecutionsTasksList

Lists Tasks from an Execution of a Job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsExecutionsTasksListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsExecutionsTasksListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsExecutionsTasksListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsJobsExecutionsTasksListRequest req = new RunProjectsLocationsJobsExecutionsTasksListRequest("est") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "totam";
                alt = AltEnum.PROTO;
                callback = "vel";
                fields = "ducimus";
                key = "quos";
                oauthToken = "vel";
                pageSize = 287051L;
                pageToken = "possimus";
                prettyPrint = false;
                quotaUser = "facilis";
                showDeleted = false;
                uploadType = "cum";
                uploadProtocol = "commodi";
            }};            

            RunProjectsLocationsJobsExecutionsTasksListResponse res = sdk.projects.runProjectsLocationsJobsExecutionsTasksList(req, new RunProjectsLocationsJobsExecutionsTasksListSecurity("in", "corporis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRunV2ListTasksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsJobsList

Lists Jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsJobsListRequest req = new RunProjectsLocationsJobsListRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nemo";
                alt = AltEnum.PROTO;
                callback = "aliquid";
                fields = "aperiam";
                key = "cum";
                oauthToken = "consectetur";
                pageSize = 449083L;
                pageToken = "exercitationem";
                prettyPrint = false;
                quotaUser = "earum";
                showDeleted = false;
                uploadType = "facere";
                uploadProtocol = "numquam";
            }};            

            RunProjectsLocationsJobsListResponse res = sdk.projects.runProjectsLocationsJobsList(req, new RunProjectsLocationsJobsListSecurity("doloribus", "suscipit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRunV2ListJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsJobsRun

Triggers creation of a new Execution of this Job.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsRunRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsRunResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsJobsRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2RunJobRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsJobsRunRequest req = new RunProjectsLocationsJobsRunRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRunV2RunJobRequest = new GoogleCloudRunV2RunJobRequest() {{
                    etag = "saepe";
                    validateOnly = false;
                }};;
                accessToken = "necessitatibus";
                alt = AltEnum.JSON;
                callback = "sunt";
                fields = "asperiores";
                key = "adipisci";
                oauthToken = "non";
                prettyPrint = false;
                quotaUser = "amet";
                uploadType = "beatae";
                uploadProtocol = "dignissimos";
            }};            

            RunProjectsLocationsJobsRunResponse res = sdk.projects.runProjectsLocationsJobsRun(req, new RunProjectsLocationsJobsRunSecurity("a", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsOperationsListRequest req = new RunProjectsLocationsOperationsListRequest("consectetur") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "harum";
                alt = AltEnum.MEDIA;
                callback = "ipsa";
                fields = "voluptates";
                filter = "libero";
                key = "vitae";
                oauthToken = "accusamus";
                pageSize = 631126L;
                pageToken = "tempora";
                prettyPrint = false;
                quotaUser = "aspernatur";
                uploadType = "voluptas";
                uploadProtocol = "voluptas";
            }};            

            RunProjectsLocationsOperationsListResponse res = sdk.projects.runProjectsLocationsOperationsList(req, new RunProjectsLocationsOperationsListSecurity("voluptas", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningListOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsOperationsWait

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsOperationsWaitRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsOperationsWaitResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsOperationsWaitSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleLongrunningWaitOperationRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsOperationsWaitRequest req = new RunProjectsLocationsOperationsWaitRequest("nobis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleLongrunningWaitOperationRequest = new GoogleLongrunningWaitOperationRequest() {{
                    timeout = "adipisci";
                }};;
                accessToken = "minus";
                alt = AltEnum.JSON;
                callback = "blanditiis";
                fields = "in";
                key = "dolore";
                oauthToken = "aliquam";
                prettyPrint = false;
                quotaUser = "officiis";
                uploadType = "temporibus";
                uploadProtocol = "ullam";
            }};            

            RunProjectsLocationsOperationsWaitResponse res = sdk.projects.runProjectsLocationsOperationsWait(req, new RunProjectsLocationsOperationsWaitSecurity("adipisci", "cum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesCreate

Creates a new Service in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesCreateRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesCreateResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2BinaryAuthorization;
import org.openapis.openapi.models.shared.GoogleCloudRunV2CloudSqlInstance;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Condition;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionExecutionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionRevisionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionSeverityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Container;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EmptyDirVolumeSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVarSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2GRPCAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPGetAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Probe;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ResourceRequirements;
import org.openapis.openapi.models.shared.GoogleCloudRunV2RevisionScaling;
import org.openapis.openapi.models.shared.GoogleCloudRunV2RevisionTemplate;
import org.openapis.openapi.models.shared.GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretKeySelector;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretVolumeSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ServiceIngressEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ServiceInput;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ServiceLaunchStageEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TCPSocketAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TrafficTarget;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TrafficTargetTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Volume;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccess;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccessEgressEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesCreateRequest req = new RunProjectsLocationsServicesCreateRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRunV2ServiceInput = new GoogleCloudRunV2ServiceInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("nesciunt", "culpa");
                        put("corrupti", "pariatur");
                        put("totam", "hic");
                        put("exercitationem", "nobis");
                    }};
                    binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization() {{
                        breakglassJustification = "sit";
                        useDefault = false;
                    }};;
                    client = "rerum";
                    clientVersion = "sed";
                    description = "reiciendis";
                    ingress = GoogleCloudRunV2ServiceIngressEnum.INGRESS_TRAFFIC_UNSPECIFIED;
                    labels = new java.util.HashMap<String, String>() {{
                        put("facilis", "voluptate");
                        put("expedita", "ab");
                        put("iste", "dolore");
                        put("laborum", "sed");
                    }};
                    launchStage = GoogleCloudRunV2ServiceLaunchStageEnum.EARLY_ACCESS;
                    name = "Melody Cole";
                    template = new GoogleCloudRunV2RevisionTemplate() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("suscipit", "sapiente");
                        }};
                        containers = new org.openapis.openapi.models.shared.GoogleCloudRunV2Container[]{{
                            add(new GoogleCloudRunV2Container() {{
                                args = new String[]{{
                                    add("reiciendis"),
                                }};
                                command = new String[]{{
                                    add("corrupti"),
                                }};
                                dependsOn = new String[]{{
                                    add("incidunt"),
                                    add("sed"),
                                    add("provident"),
                                    add("eius"),
                                }};
                                env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Rosemary McClure";
                                        value = "tempora";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "tempora";
                                                version = "voluptate";
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Marc Balistreri";
                                        value = "praesentium";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "facilis";
                                                version = "quaerat";
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Brittany Tremblay DDS";
                                        value = "error";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "veniam";
                                                version = "minima";
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Van Stoltenberg PhD";
                                        value = "numquam";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "veniam";
                                                version = "in";
                                            }};
                                        }};
                                    }}),
                                }};
                                image = "officiis";
                                livenessProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 104627;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 512452;
                                        service = "exercitationem";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Lester Parisian";
                                                value = "hic";
                                            }}),
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Darrel Doyle";
                                                value = "officia";
                                            }}),
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Byron Thiel";
                                                value = "fugit";
                                            }}),
                                        }};
                                        path = "ut";
                                        port = 856303;
                                    }};
                                    initialDelaySeconds = 30235;
                                    periodSeconds = 635057;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 710337;
                                    }};
                                    timeoutSeconds = 299643;
                                }};
                                name = "Ms. Georgia Hintz";
                                ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 361151;
                                        name = "Mattie Jaskolski III";
                                    }}),
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 342611;
                                        name = "Evan Altenwerth";
                                    }}),
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 209750;
                                        name = "Gerald Bradtke";
                                    }}),
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 695270;
                                        name = "Cameron Reilly";
                                    }}),
                                }};
                                resources = new GoogleCloudRunV2ResourceRequirements() {{
                                    cpuIdle = false;
                                    limits = new java.util.HashMap<String, String>() {{
                                        put("amet", "deserunt");
                                    }};
                                    startupCpuBoost = false;
                                }};
                                startupProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 454860;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 600392;
                                        service = "reiciendis";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Miss Brendan Volkman";
                                                value = "reprehenderit";
                                            }}),
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Grant Langosh";
                                                value = "voluptatem";
                                            }}),
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Phil Boyer";
                                                value = "asperiores";
                                            }}),
                                        }};
                                        path = "totam";
                                        port = 383103;
                                    }};
                                    initialDelaySeconds = 693957;
                                    periodSeconds = 806670;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 90885;
                                    }};
                                    timeoutSeconds = 461007;
                                }};
                                volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "assumenda";
                                        name = "Leah Mueller";
                                    }}),
                                }};
                                workingDir = "accusamus";
                            }}),
                            add(new GoogleCloudRunV2Container() {{
                                args = new String[]{{
                                    add("minima"),
                                    add("aspernatur"),
                                    add("ex"),
                                }};
                                command = new String[]{{
                                    add("corrupti"),
                                    add("at"),
                                    add("error"),
                                    add("blanditiis"),
                                }};
                                dependsOn = new String[]{{
                                    add("repudiandae"),
                                    add("atque"),
                                }};
                                env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Delia Parisian";
                                        value = "reiciendis";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "doloremque";
                                                version = "repudiandae";
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Ruth Breitenberg";
                                        value = "laboriosam";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "velit";
                                                version = "a";
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Oscar Ullrich";
                                        value = "officiis";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "perspiciatis";
                                                version = "in";
                                            }};
                                        }};
                                    }}),
                                }};
                                image = "adipisci";
                                livenessProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 907876;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 580887;
                                        service = "consequuntur";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Leo Kiehn II";
                                                value = "quidem";
                                            }}),
                                        }};
                                        path = "eveniet";
                                        port = 247399;
                                    }};
                                    initialDelaySeconds = 878493;
                                    periodSeconds = 39615;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 434156;
                                    }};
                                    timeoutSeconds = 59944;
                                }};
                                name = "Frank Krajcik";
                                ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 434761;
                                        name = "Sean Pacocha";
                                    }}),
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 523006;
                                        name = "Mrs. Geraldine Zulauf";
                                    }}),
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 470649;
                                        name = "Shane Abshire";
                                    }}),
                                }};
                                resources = new GoogleCloudRunV2ResourceRequirements() {{
                                    cpuIdle = false;
                                    limits = new java.util.HashMap<String, String>() {{
                                        put("id", "minima");
                                    }};
                                    startupCpuBoost = false;
                                }};
                                startupProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 293144;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 680349;
                                        service = "nesciunt";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Arturo Hagenes";
                                                value = "ut";
                                            }}),
                                        }};
                                        path = "culpa";
                                        port = 238413;
                                    }};
                                    initialDelaySeconds = 890653;
                                    periodSeconds = 514513;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 432606;
                                    }};
                                    timeoutSeconds = 367927;
                                }};
                                volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "esse";
                                        name = "Alvin Kemmer";
                                    }}),
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "aspernatur";
                                        name = "Joyce O'Kon";
                                    }}),
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "provident";
                                        name = "Lynn Jacobson DVM";
                                    }}),
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "doloribus";
                                        name = "Arlene Reichert";
                                    }}),
                                }};
                                workingDir = "laborum";
                            }}),
                            add(new GoogleCloudRunV2Container() {{
                                args = new String[]{{
                                    add("modi"),
                                    add("voluptatibus"),
                                    add("molestias"),
                                    add("officiis"),
                                }};
                                command = new String[]{{
                                    add("cumque"),
                                    add("vitae"),
                                    add("rerum"),
                                    add("tempora"),
                                }};
                                dependsOn = new String[]{{
                                    add("inventore"),
                                    add("fugit"),
                                }};
                                env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Lisa Flatley";
                                        value = "eius";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "rem";
                                                version = "at";
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Craig Williamson II";
                                        value = "beatae";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "cupiditate";
                                                version = "provident";
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Ed Weimann DVM";
                                        value = "perspiciatis";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "maiores";
                                                version = "debitis";
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Johnnie Hoeger";
                                        value = "cumque";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "fuga";
                                                version = "ratione";
                                            }};
                                        }};
                                    }}),
                                }};
                                image = "animi";
                                livenessProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 898760;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 862063;
                                        service = "consequatur";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Dora Mosciski";
                                                value = "adipisci";
                                            }}),
                                        }};
                                        path = "quasi";
                                        port = 169025;
                                    }};
                                    initialDelaySeconds = 984934;
                                    periodSeconds = 859581;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 896582;
                                    }};
                                    timeoutSeconds = 58534;
                                }};
                                name = "Ms. Marcia Kozey";
                                ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 979963;
                                        name = "Ben Bradtke Sr.";
                                    }}),
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 483706;
                                        name = "Joy Jacobson";
                                    }}),
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 58870;
                                        name = "Ralph Hegmann";
                                    }}),
                                }};
                                resources = new GoogleCloudRunV2ResourceRequirements() {{
                                    cpuIdle = false;
                                    limits = new java.util.HashMap<String, String>() {{
                                        put("officia", "suscipit");
                                        put("aliquid", "perferendis");
                                    }};
                                    startupCpuBoost = false;
                                }};
                                startupProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 431760;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 374753;
                                        service = "iste";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Isabel Schuster";
                                                value = "laborum";
                                            }}),
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Derek Leuschke PhD";
                                                value = "ex";
                                            }}),
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Ruben Goyette";
                                                value = "voluptatem";
                                            }}),
                                        }};
                                        path = "molestias";
                                        port = 737254;
                                    }};
                                    initialDelaySeconds = 399660;
                                    periodSeconds = 109784;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 530860;
                                    }};
                                    timeoutSeconds = 606308;
                                }};
                                volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "rerum";
                                        name = "Trevor Bartell";
                                    }}),
                                }};
                                workingDir = "architecto";
                            }}),
                            add(new GoogleCloudRunV2Container() {{
                                args = new String[]{{
                                    add("pariatur"),
                                    add("debitis"),
                                    add("voluptatem"),
                                }};
                                command = new String[]{{
                                    add("deleniti"),
                                }};
                                dependsOn = new String[]{{
                                    add("ex"),
                                    add("sapiente"),
                                    add("rem"),
                                    add("minus"),
                                }};
                                env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Dr. Chris Hermiston";
                                        value = "impedit";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "quibusdam";
                                                version = "nam";
                                            }};
                                        }};
                                    }}),
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Molly Fadel IV";
                                        value = "veritatis";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "tempora";
                                                version = "dolor";
                                            }};
                                        }};
                                    }}),
                                }};
                                image = "consequatur";
                                livenessProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 100014;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 24944;
                                        service = "modi";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Marsha Bergstrom";
                                                value = "ipsam";
                                            }}),
                                        }};
                                        path = "consequuntur";
                                        port = 55107;
                                    }};
                                    initialDelaySeconds = 559682;
                                    periodSeconds = 911198;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 773456;
                                    }};
                                    timeoutSeconds = 884952;
                                }};
                                name = "Jana Cremin";
                                ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 432984;
                                        name = "Jennie Gutkowski DDS";
                                    }}),
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 421844;
                                        name = "Brent Walter II";
                                    }}),
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 895692;
                                        name = "Sue Swaniawski";
                                    }}),
                                }};
                                resources = new GoogleCloudRunV2ResourceRequirements() {{
                                    cpuIdle = false;
                                    limits = new java.util.HashMap<String, String>() {{
                                        put("sequi", "doloribus");
                                        put("repudiandae", "optio");
                                        put("occaecati", "nemo");
                                    }};
                                    startupCpuBoost = false;
                                }};
                                startupProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 455898;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 501063;
                                        service = "officia";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Ida Lubowitz";
                                                value = "ducimus";
                                            }}),
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Lee Larkin IV";
                                                value = "fugiat";
                                            }}),
                                        }};
                                        path = "dicta";
                                        port = 395544;
                                    }};
                                    initialDelaySeconds = 159845;
                                    periodSeconds = 233078;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 46806;
                                    }};
                                    timeoutSeconds = 585432;
                                }};
                                volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "soluta";
                                        name = "Belinda Daugherty";
                                    }}),
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "magni";
                                        name = "Fannie Tillman";
                                    }}),
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "omnis";
                                        name = "Darrell Lang";
                                    }}),
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "temporibus";
                                        name = "Leslie Waters";
                                    }}),
                                }};
                                workingDir = "earum";
                            }}),
                        }};
                        encryptionKey = "modi";
                        executionEnvironment = GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum.EXECUTION_ENVIRONMENT_GEN2;
                        labels = new java.util.HashMap<String, String>() {{
                            put("voluptatem", "ipsam");
                            put("vel", "alias");
                            put("quasi", "non");
                            put("maiores", "enim");
                        }};
                        maxInstanceRequestConcurrency = 575213;
                        revision = "nulla";
                        scaling = new GoogleCloudRunV2RevisionScaling() {{
                            maxInstanceCount = 643678;
                            minInstanceCount = 458503;
                        }};;
                        serviceAccount = "nemo";
                        sessionAffinity = false;
                        timeout = "reprehenderit";
                        volumes = new org.openapis.openapi.models.shared.GoogleCloudRunV2Volume[]{{
                            add(new GoogleCloudRunV2Volume() {{
                                cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                    instances = new String[]{{
                                        add("sint"),
                                        add("accusamus"),
                                    }};
                                }};
                                emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                    medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEMORY;
                                    sizeLimit = "hic";
                                }};
                                name = "Emmett Jakubowski";
                                secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                    defaultMode = 966148;
                                    items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 791880;
                                            path = "fuga";
                                            version = "laborum";
                                        }}),
                                    }};
                                    secret = "consectetur";
                                }};
                            }}),
                            add(new GoogleCloudRunV2Volume() {{
                                cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                    instances = new String[]{{
                                        add("atque"),
                                    }};
                                }};
                                emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                    medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEDIUM_UNSPECIFIED;
                                    sizeLimit = "impedit";
                                }};
                                name = "Shelia Walker";
                                secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                    defaultMode = 482892;
                                    items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 194023;
                                            path = "dignissimos";
                                            version = "neque";
                                        }}),
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 778172;
                                            path = "deleniti";
                                            version = "quibusdam";
                                        }}),
                                    }};
                                    secret = "iure";
                                }};
                            }}),
                            add(new GoogleCloudRunV2Volume() {{
                                cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                    instances = new String[]{{
                                        add("voluptatibus"),
                                    }};
                                }};
                                emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                    medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEDIUM_UNSPECIFIED;
                                    sizeLimit = "magnam";
                                }};
                                name = "Dennis Schumm DVM";
                                secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                    defaultMode = 156383;
                                    items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 304198;
                                            path = "velit";
                                            version = "illo";
                                        }}),
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 36561;
                                            path = "vel";
                                            version = "ea";
                                        }}),
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 107617;
                                            path = "vero";
                                            version = "excepturi";
                                        }}),
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 431994;
                                            path = "velit";
                                            version = "ut";
                                        }}),
                                    }};
                                    secret = "perspiciatis";
                                }};
                            }}),
                        }};
                        vpcAccess = new GoogleCloudRunV2VpcAccess() {{
                            connector = "earum";
                            egress = GoogleCloudRunV2VpcAccessEgressEnum.VPC_EGRESS_UNSPECIFIED;
                        }};;
                    }};;
                    terminalCondition = new GoogleCloudRunV2Condition() {{
                        executionReason = GoogleCloudRunV2ConditionExecutionReasonEnum.CANCELLED;
                        lastTransitionTime = "voluptatibus";
                        message = "iste";
                        reason = GoogleCloudRunV2ConditionReasonEnum.POSTPONED_RETRY;
                        revisionReason = GoogleCloudRunV2ConditionRevisionReasonEnum.REVISION_REASON_UNDEFINED;
                        severity = GoogleCloudRunV2ConditionSeverityEnum.ERROR;
                        state = GoogleCloudRunV2ConditionStateEnum.CONDITION_SUCCEEDED;
                        type = "velit";
                    }};;
                    traffic = new org.openapis.openapi.models.shared.GoogleCloudRunV2TrafficTarget[]{{
                        add(new GoogleCloudRunV2TrafficTarget() {{
                            percent = 250398;
                            revision = "dolor";
                            tag = "iusto";
                            type = GoogleCloudRunV2TrafficTargetTypeEnum.TRAFFIC_TARGET_ALLOCATION_TYPE_UNSPECIFIED;
                        }}),
                        add(new GoogleCloudRunV2TrafficTarget() {{
                            percent = 39992;
                            revision = "consequatur";
                            tag = "officia";
                            type = GoogleCloudRunV2TrafficTargetTypeEnum.TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION;
                        }}),
                        add(new GoogleCloudRunV2TrafficTarget() {{
                            percent = 408303;
                            revision = "quidem";
                            tag = "voluptas";
                            type = GoogleCloudRunV2TrafficTargetTypeEnum.TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION;
                        }}),
                    }};
                }};;
                accessToken = "placeat";
                alt = AltEnum.MEDIA;
                callback = "expedita";
                fields = "deleniti";
                key = "a";
                oauthToken = "voluptate";
                prettyPrint = false;
                quotaUser = "ullam";
                serviceId = "unde";
                uploadType = "necessitatibus";
                uploadProtocol = "animi";
                validateOnly = false;
            }};            

            RunProjectsLocationsServicesCreateResponse res = sdk.projects.runProjectsLocationsServicesCreate(req, new RunProjectsLocationsServicesCreateSecurity("impedit", "ipsam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesGetIamPolicy

Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesGetIamPolicyRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesGetIamPolicyResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesGetIamPolicyRequest req = new RunProjectsLocationsServicesGetIamPolicyRequest("corporis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "error";
                alt = AltEnum.MEDIA;
                callback = "labore";
                fields = "veritatis";
                key = "vero";
                oauthToken = "consectetur";
                optionsRequestedPolicyVersion = 112427L;
                prettyPrint = false;
                quotaUser = "inventore";
                uploadType = "dolorem";
                uploadProtocol = "ad";
            }};            

            RunProjectsLocationsServicesGetIamPolicyResponse res = sdk.projects.runProjectsLocationsServicesGetIamPolicy(req, new RunProjectsLocationsServicesGetIamPolicySecurity("qui", "iste") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesList

Lists Services.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesListRequest req = new RunProjectsLocationsServicesListRequest("ex") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "rem";
                fields = "dolorum";
                key = "odio";
                oauthToken = "fugit";
                pageSize = 545L;
                pageToken = "magni";
                prettyPrint = false;
                quotaUser = "vel";
                showDeleted = false;
                uploadType = "quae";
                uploadProtocol = "quae";
            }};            

            RunProjectsLocationsServicesListResponse res = sdk.projects.runProjectsLocationsServicesList(req, new RunProjectsLocationsServicesListSecurity("modi", "neque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRunV2ListServicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesPatch

Updates a Service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesPatchRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesPatchResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2BinaryAuthorization;
import org.openapis.openapi.models.shared.GoogleCloudRunV2CloudSqlInstance;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Condition;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionExecutionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionRevisionReasonEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionSeverityEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ConditionStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Container;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EmptyDirVolumeSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar;
import org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVarSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2GRPCAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPGetAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Probe;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ResourceRequirements;
import org.openapis.openapi.models.shared.GoogleCloudRunV2RevisionScaling;
import org.openapis.openapi.models.shared.GoogleCloudRunV2RevisionTemplate;
import org.openapis.openapi.models.shared.GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretKeySelector;
import org.openapis.openapi.models.shared.GoogleCloudRunV2SecretVolumeSource;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ServiceIngressEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ServiceInput;
import org.openapis.openapi.models.shared.GoogleCloudRunV2ServiceLaunchStageEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TCPSocketAction;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TrafficTarget;
import org.openapis.openapi.models.shared.GoogleCloudRunV2TrafficTargetTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath;
import org.openapis.openapi.models.shared.GoogleCloudRunV2Volume;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccess;
import org.openapis.openapi.models.shared.GoogleCloudRunV2VpcAccessEgressEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesPatchRequest req = new RunProjectsLocationsServicesPatchRequest("exercitationem") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudRunV2ServiceInput = new GoogleCloudRunV2ServiceInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("ipsum", "unde");
                    }};
                    binaryAuthorization = new GoogleCloudRunV2BinaryAuthorization() {{
                        breakglassJustification = "nulla";
                        useDefault = false;
                    }};;
                    client = "distinctio";
                    clientVersion = "maxime";
                    description = "quia";
                    ingress = GoogleCloudRunV2ServiceIngressEnum.INGRESS_TRAFFIC_UNSPECIFIED;
                    labels = new java.util.HashMap<String, String>() {{
                        put("omnis", "libero");
                        put("dicta", "id");
                    }};
                    launchStage = GoogleCloudRunV2ServiceLaunchStageEnum.BETA;
                    name = "Oliver Luettgen IV";
                    template = new GoogleCloudRunV2RevisionTemplate() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("voluptates", "inventore");
                        }};
                        containers = new org.openapis.openapi.models.shared.GoogleCloudRunV2Container[]{{
                            add(new GoogleCloudRunV2Container() {{
                                args = new String[]{{
                                    add("dolore"),
                                    add("eligendi"),
                                    add("distinctio"),
                                }};
                                command = new String[]{{
                                    add("autem"),
                                }};
                                dependsOn = new String[]{{
                                    add("dolores"),
                                    add("assumenda"),
                                }};
                                env = new org.openapis.openapi.models.shared.GoogleCloudRunV2EnvVar[]{{
                                    add(new GoogleCloudRunV2EnvVar() {{
                                        name = "Bryant Lockman";
                                        value = "accusamus";
                                        valueSource = new GoogleCloudRunV2EnvVarSource() {{
                                            secretKeyRef = new GoogleCloudRunV2SecretKeySelector() {{
                                                secret = "necessitatibus";
                                                version = "tempore";
                                            }};
                                        }};
                                    }}),
                                }};
                                image = "sint";
                                livenessProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 409726;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 421819;
                                        service = "ipsam";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Dan Towne";
                                                value = "at";
                                            }}),
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Rachel Powlowski";
                                                value = "accusantium";
                                            }}),
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Erick Dare";
                                                value = "praesentium";
                                            }}),
                                        }};
                                        path = "odit";
                                        port = 127688;
                                    }};
                                    initialDelaySeconds = 358995;
                                    periodSeconds = 621473;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 937117;
                                    }};
                                    timeoutSeconds = 239337;
                                }};
                                name = "Otis Grady";
                                ports = new org.openapis.openapi.models.shared.GoogleCloudRunV2ContainerPort[]{{
                                    add(new GoogleCloudRunV2ContainerPort() {{
                                        containerPort = 600213;
                                        name = "Lucia McDermott";
                                    }}),
                                }};
                                resources = new GoogleCloudRunV2ResourceRequirements() {{
                                    cpuIdle = false;
                                    limits = new java.util.HashMap<String, String>() {{
                                        put("nesciunt", "at");
                                        put("officia", "dignissimos");
                                    }};
                                    startupCpuBoost = false;
                                }};
                                startupProbe = new GoogleCloudRunV2Probe() {{
                                    failureThreshold = 760744;
                                    grpc = new GoogleCloudRunV2GRPCAction() {{
                                        port = 898961;
                                        service = "corporis";
                                    }};
                                    httpGet = new GoogleCloudRunV2HTTPGetAction() {{
                                        httpHeaders = new org.openapis.openapi.models.shared.GoogleCloudRunV2HTTPHeader[]{{
                                            add(new GoogleCloudRunV2HTTPHeader() {{
                                                name = "Jaime McGlynn";
                                                value = "enim";
                                            }}),
                                        }};
                                        path = "neque";
                                        port = 446877;
                                    }};
                                    initialDelaySeconds = 796397;
                                    periodSeconds = 433077;
                                    tcpSocket = new GoogleCloudRunV2TCPSocketAction() {{
                                        port = 266408;
                                    }};
                                    timeoutSeconds = 357347;
                                }};
                                volumeMounts = new org.openapis.openapi.models.shared.GoogleCloudRunV2VolumeMount[]{{
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "voluptates";
                                        name = "Randolph Bayer";
                                    }}),
                                    add(new GoogleCloudRunV2VolumeMount() {{
                                        mountPath = "labore";
                                        name = "Sergio Hirthe";
                                    }}),
                                }};
                                workingDir = "minus";
                            }}),
                        }};
                        encryptionKey = "fuga";
                        executionEnvironment = GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum.EXECUTION_ENVIRONMENT_GEN1;
                        labels = new java.util.HashMap<String, String>() {{
                            put("impedit", "delectus");
                            put("tempore", "vero");
                            put("odit", "repellat");
                        }};
                        maxInstanceRequestConcurrency = 865946;
                        revision = "nemo";
                        scaling = new GoogleCloudRunV2RevisionScaling() {{
                            maxInstanceCount = 441321;
                            minInstanceCount = 45234;
                        }};;
                        serviceAccount = "odio";
                        sessionAffinity = false;
                        timeout = "minima";
                        volumes = new org.openapis.openapi.models.shared.GoogleCloudRunV2Volume[]{{
                            add(new GoogleCloudRunV2Volume() {{
                                cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                    instances = new String[]{{
                                        add("excepturi"),
                                        add("dolores"),
                                    }};
                                }};
                                emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                    medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEMORY;
                                    sizeLimit = "veritatis";
                                }};
                                name = "Colleen Streich";
                                secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                    defaultMode = 763165;
                                    items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 311486;
                                            path = "commodi";
                                            version = "officiis";
                                        }}),
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 810839;
                                            path = "quidem";
                                            version = "exercitationem";
                                        }}),
                                    }};
                                    secret = "quam";
                                }};
                            }}),
                            add(new GoogleCloudRunV2Volume() {{
                                cloudSqlInstance = new GoogleCloudRunV2CloudSqlInstance() {{
                                    instances = new String[]{{
                                        add("modi"),
                                    }};
                                }};
                                emptyDir = new GoogleCloudRunV2EmptyDirVolumeSource() {{
                                    medium = GoogleCloudRunV2EmptyDirVolumeSourceMediumEnum.MEDIUM_UNSPECIFIED;
                                    sizeLimit = "sint";
                                }};
                                name = "Earl VonRueden DVM";
                                secret = new GoogleCloudRunV2SecretVolumeSource() {{
                                    defaultMode = 334474;
                                    items = new org.openapis.openapi.models.shared.GoogleCloudRunV2VersionToPath[]{{
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 175372;
                                            path = "nam";
                                            version = "dicta";
                                        }}),
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 164488;
                                            path = "necessitatibus";
                                            version = "nobis";
                                        }}),
                                        add(new GoogleCloudRunV2VersionToPath() {{
                                            mode = 56877;
                                            path = "ducimus";
                                            version = "maiores";
                                        }}),
                                    }};
                                    secret = "veritatis";
                                }};
                            }}),
                        }};
                        vpcAccess = new GoogleCloudRunV2VpcAccess() {{
                            connector = "quasi";
                            egress = GoogleCloudRunV2VpcAccessEgressEnum.ALL_TRAFFIC;
                        }};;
                    }};;
                    terminalCondition = new GoogleCloudRunV2Condition() {{
                        executionReason = GoogleCloudRunV2ConditionExecutionReasonEnum.CANCELLING;
                        lastTransitionTime = "libero";
                        message = "excepturi";
                        reason = GoogleCloudRunV2ConditionReasonEnum.ENCRYPTION_KEY_PERMISSION_DENIED;
                        revisionReason = GoogleCloudRunV2ConditionRevisionReasonEnum.RETIRING;
                        severity = GoogleCloudRunV2ConditionSeverityEnum.ERROR;
                        state = GoogleCloudRunV2ConditionStateEnum.CONDITION_PENDING;
                        type = "doloribus";
                    }};;
                    traffic = new org.openapis.openapi.models.shared.GoogleCloudRunV2TrafficTarget[]{{
                        add(new GoogleCloudRunV2TrafficTarget() {{
                            percent = 574032;
                            revision = "enim";
                            tag = "hic";
                            type = GoogleCloudRunV2TrafficTargetTypeEnum.TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST;
                        }}),
                        add(new GoogleCloudRunV2TrafficTarget() {{
                            percent = 559774;
                            revision = "totam";
                            tag = "molestias";
                            type = GoogleCloudRunV2TrafficTargetTypeEnum.TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST;
                        }}),
                        add(new GoogleCloudRunV2TrafficTarget() {{
                            percent = 51170;
                            revision = "saepe";
                            tag = "architecto";
                            type = GoogleCloudRunV2TrafficTargetTypeEnum.TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST;
                        }}),
                        add(new GoogleCloudRunV2TrafficTarget() {{
                            percent = 614438;
                            revision = "assumenda";
                            tag = "tempore";
                            type = GoogleCloudRunV2TrafficTargetTypeEnum.TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION;
                        }}),
                    }};
                }};;
                accessToken = "velit";
                allowMissing = false;
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "impedit";
                key = "cum";
                oauthToken = "ipsum";
                prettyPrint = false;
                quotaUser = "adipisci";
                uploadType = "saepe";
                uploadProtocol = "deserunt";
                validateOnly = false;
            }};            

            RunProjectsLocationsServicesPatchResponse res = sdk.projects.runProjectsLocationsServicesPatch(req, new RunProjectsLocationsServicesPatchSecurity("doloremque", "quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesRevisionsDelete

Deletes a Revision.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesRevisionsDeleteRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesRevisionsDeleteResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesRevisionsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesRevisionsDeleteRequest req = new RunProjectsLocationsServicesRevisionsDeleteRequest("veniam") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "architecto";
                alt = AltEnum.MEDIA;
                callback = "molestiae";
                etag = "eligendi";
                fields = "possimus";
                key = "non";
                oauthToken = "magnam";
                prettyPrint = false;
                quotaUser = "itaque";
                uploadType = "sed";
                uploadProtocol = "asperiores";
                validateOnly = false;
            }};            

            RunProjectsLocationsServicesRevisionsDeleteResponse res = sdk.projects.runProjectsLocationsServicesRevisionsDelete(req, new RunProjectsLocationsServicesRevisionsDeleteSecurity("veniam", "consequuntur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleLongrunningOperation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesRevisionsGet

Gets information about a Revision.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesRevisionsGetRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesRevisionsGetResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesRevisionsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesRevisionsGetRequest req = new RunProjectsLocationsServicesRevisionsGetRequest("facere") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "odit";
                alt = AltEnum.PROTO;
                callback = "amet";
                fields = "exercitationem";
                key = "ab";
                oauthToken = "velit";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "tempore";
                uploadProtocol = "nisi";
            }};            

            RunProjectsLocationsServicesRevisionsGetResponse res = sdk.projects.runProjectsLocationsServicesRevisionsGet(req, new RunProjectsLocationsServicesRevisionsGetSecurity("voluptatibus", "quaerat") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRunV2Revision != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesRevisionsList

Lists Revisions from a given Service, or from a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesRevisionsListRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesRevisionsListResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesRevisionsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesRevisionsListRequest req = new RunProjectsLocationsServicesRevisionsListRequest("blanditiis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "nisi";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "libero";
                key = "minus";
                oauthToken = "facere";
                pageSize = 706061L;
                pageToken = "ipsum";
                prettyPrint = false;
                quotaUser = "ad";
                showDeleted = false;
                uploadType = "voluptatibus";
                uploadProtocol = "voluptatibus";
            }};            

            RunProjectsLocationsServicesRevisionsListResponse res = sdk.projects.runProjectsLocationsServicesRevisionsList(req, new RunProjectsLocationsServicesRevisionsListSecurity("consequuntur", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudRunV2ListRevisionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesSetIamPolicy

Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesSetIamPolicyRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesSetIamPolicyResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1AuditConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig;
import org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.GoogleIamV1Binding;
import org.openapis.openapi.models.shared.GoogleIamV1Policy;
import org.openapis.openapi.models.shared.GoogleIamV1SetIamPolicyRequest;
import org.openapis.openapi.models.shared.GoogleTypeExpr;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesSetIamPolicyRequest req = new RunProjectsLocationsServicesSetIamPolicyRequest("labore") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1SetIamPolicyRequest = new GoogleIamV1SetIamPolicyRequest() {{
                    policy = new GoogleIamV1Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditConfig[]{{
                            add(new GoogleIamV1AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.GoogleIamV1AuditLogConfig[]{{
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("neque"),
                                            add("iusto"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_WRITE;
                                    }}),
                                    add(new GoogleIamV1AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("eligendi"),
                                            add("fugiat"),
                                            add("unde"),
                                        }};
                                        logType = GoogleIamV1AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                }};
                                service = "ducimus";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.GoogleIamV1Binding[]{{
                            add(new GoogleIamV1Binding() {{
                                condition = new GoogleTypeExpr() {{
                                    description = "dicta";
                                    expression = "error";
                                    location = "porro";
                                    title = "Mr.";
                                }};
                                members = new String[]{{
                                    add("esse"),
                                    add("fugiat"),
                                }};
                                role = "ad";
                            }}),
                        }};
                        etag = "aspernatur";
                        version = 316501;
                    }};;
                    updateMask = "delectus";
                }};;
                accessToken = "iusto";
                alt = AltEnum.MEDIA;
                callback = "libero";
                fields = "illo";
                key = "ab";
                oauthToken = "incidunt";
                prettyPrint = false;
                quotaUser = "accusamus";
                uploadType = "saepe";
                uploadProtocol = "tempore";
            }};            

            RunProjectsLocationsServicesSetIamPolicyResponse res = sdk.projects.runProjectsLocationsServicesSetIamPolicy(req, new RunProjectsLocationsServicesSetIamPolicySecurity("veniam", "eos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1Policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## runProjectsLocationsServicesTestIamPermissions

Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.RunProjectsLocationsServicesTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleIamV1TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RunProjectsLocationsServicesTestIamPermissionsRequest req = new RunProjectsLocationsServicesTestIamPermissionsRequest("reiciendis") {{
                dollarXgafv = XgafvEnum.TWO;
                googleIamV1TestIamPermissionsRequest = new GoogleIamV1TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("praesentium"),
                        add("nemo"),
                    }};
                }};;
                accessToken = "repellat";
                alt = AltEnum.PROTO;
                callback = "sequi";
                fields = "nihil";
                key = "deleniti";
                oauthToken = "illo";
                prettyPrint = false;
                quotaUser = "labore";
                uploadType = "assumenda";
                uploadProtocol = "aliquam";
            }};            

            RunProjectsLocationsServicesTestIamPermissionsResponse res = sdk.projects.runProjectsLocationsServicesTestIamPermissions(req, new RunProjectsLocationsServicesTestIamPermissionsSecurity("quisquam", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleIamV1TestIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
