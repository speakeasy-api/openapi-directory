# projects

### Available Operations

* [datapipelinesProjectsLocationsPipelinesCreate](#datapipelinesprojectslocationspipelinescreate) - Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
* [datapipelinesProjectsLocationsPipelinesDelete](#datapipelinesprojectslocationspipelinesdelete) - Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
* [datapipelinesProjectsLocationsPipelinesGet](#datapipelinesprojectslocationspipelinesget) - Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesJobsList](#datapipelinesprojectslocationspipelinesjobslist) - Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesList](#datapipelinesprojectslocationspipelineslist) - Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesPatch](#datapipelinesprojectslocationspipelinespatch) - Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
* [datapipelinesProjectsLocationsPipelinesRun](#datapipelinesprojectslocationspipelinesrun) - Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
* [datapipelinesProjectsLocationsPipelinesStop](#datapipelinesprojectslocationspipelinesstop) - Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.

## datapipelinesProjectsLocationsPipelinesCreate

Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateResponse;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1PipelineInput;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1PipelineStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1PipelineTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1RuntimeEnvironment;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1ScheduleSpecInput;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1Workload;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesCreateRequest req = new DatapipelinesProjectsLocationsPipelinesCreateRequest("numquam") {{
                dollarXgafv = XgafvEnum.ONE;
                googleCloudDatapipelinesV1PipelineInput = new GoogleCloudDatapipelinesV1PipelineInput() {{
                    displayName = "quam";
                    name = "Shannon Mueller";
                    pipelineSources = new java.util.HashMap<String, String>() {{
                        put("laborum", "animi");
                    }};
                    scheduleInfo = new GoogleCloudDatapipelinesV1ScheduleSpecInput() {{
                        schedule = "enim";
                        timeZone = "odit";
                    }};;
                    schedulerServiceAccountEmail = "quo";
                    state = GoogleCloudDatapipelinesV1PipelineStateEnum.STATE_RESUMING;
                    type = GoogleCloudDatapipelinesV1PipelineTypeEnum.PIPELINE_TYPE_STREAMING;
                    workload = new GoogleCloudDatapipelinesV1Workload() {{
                        dataflowFlexTemplateRequest = new GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest() {{
                            launchParameter = new GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter() {{
                                containerSpecGcsPath = "ipsam";
                                environment = new GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment() {{
                                    additionalExperiments = new String[]{{
                                        add("possimus"),
                                        add("aut"),
                                        add("quasi"),
                                    }};
                                    additionalUserLabels = new java.util.HashMap<String, String>() {{
                                        put("temporibus", "laborum");
                                        put("quasi", "reiciendis");
                                        put("voluptatibus", "vero");
                                    }};
                                    enableStreamingEngine = false;
                                    flexrsGoal = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum.FLEXRS_SPEED_OPTIMIZED;
                                    ipConfiguration = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PUBLIC;
                                    kmsKeyName = "voluptatibus";
                                    machineType = "ipsa";
                                    maxWorkers = 604846;
                                    network = "voluptate";
                                    numWorkers = 739264;
                                    serviceAccountEmail = "perferendis";
                                    subnetwork = "doloremque";
                                    tempLocation = "reprehenderit";
                                    workerRegion = "ut";
                                    workerZone = "maiores";
                                    zone = "dicta";
                                }};;
                                jobName = "corporis";
                                launchOptions = new java.util.HashMap<String, String>() {{
                                    put("iusto", "dicta");
                                    put("harum", "enim");
                                }};
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("commodi", "repudiandae");
                                    put("quae", "ipsum");
                                    put("quidem", "molestias");
                                    put("excepturi", "pariatur");
                                }};
                                transformNameMappings = new java.util.HashMap<String, String>() {{
                                    put("praesentium", "rem");
                                    put("voluptates", "quasi");
                                }};
                                update = false;
                            }};;
                            location = "repudiandae";
                            projectId = "sint";
                            validateOnly = false;
                        }};;
                        dataflowLaunchTemplateRequest = new GoogleCloudDatapipelinesV1LaunchTemplateRequest() {{
                            gcsPath = "veritatis";
                            launchParameters = new GoogleCloudDatapipelinesV1LaunchTemplateParameters() {{
                                environment = new GoogleCloudDatapipelinesV1RuntimeEnvironment() {{
                                    additionalExperiments = new String[]{{
                                        add("incidunt"),
                                        add("enim"),
                                        add("consequatur"),
                                        add("est"),
                                    }};
                                    additionalUserLabels = new java.util.HashMap<String, String>() {{
                                        put("explicabo", "deserunt");
                                        put("distinctio", "quibusdam");
                                        put("labore", "modi");
                                        put("qui", "aliquid");
                                    }};
                                    bypassTempDirValidation = false;
                                    enableStreamingEngine = false;
                                    ipConfiguration = GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PUBLIC;
                                    kmsKeyName = "quos";
                                    machineType = "perferendis";
                                    maxWorkers = 164940;
                                    network = "assumenda";
                                    numWorkers = 369808;
                                    serviceAccountEmail = "alias";
                                    subnetwork = "fugit";
                                    tempLocation = "dolorum";
                                    workerRegion = "excepturi";
                                    workerZone = "tempora";
                                    zone = "facilis";
                                }};;
                                jobName = "tempore";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("delectus", "eum");
                                    put("non", "eligendi");
                                }};
                                transformNameMapping = new java.util.HashMap<String, String>() {{
                                    put("aliquid", "provident");
                                    put("necessitatibus", "sint");
                                    put("officia", "dolor");
                                }};
                                update = false;
                            }};;
                            location = "debitis";
                            projectId = "a";
                            validateOnly = false;
                        }};;
                    }};;
                }};;
                accessToken = "dolorum";
                alt = AltEnum.MEDIA;
                callback = "in";
                fields = "illum";
                key = "maiores";
                oauthToken = "rerum";
                prettyPrint = false;
                quotaUser = "dicta";
                uploadType = "magnam";
                uploadProtocol = "cumque";
            }};            

            DatapipelinesProjectsLocationsPipelinesCreateResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesCreate(req, new DatapipelinesProjectsLocationsPipelinesCreateSecurity("facere", "ea") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatapipelinesV1Pipeline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datapipelinesProjectsLocationsPipelinesDelete

Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesDeleteRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesDeleteResponse;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesDeleteRequest req = new DatapipelinesProjectsLocationsPipelinesDeleteRequest("aliquid") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusamus";
                alt = AltEnum.JSON;
                callback = "occaecati";
                fields = "enim";
                key = "accusamus";
                oauthToken = "delectus";
                prettyPrint = false;
                quotaUser = "quidem";
                uploadType = "provident";
                uploadProtocol = "nam";
            }};            

            DatapipelinesProjectsLocationsPipelinesDeleteResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesDelete(req, new DatapipelinesProjectsLocationsPipelinesDeleteSecurity("id", "blanditiis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleProtobufEmpty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datapipelinesProjectsLocationsPipelinesGet

Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesGetRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesGetResponse;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesGetRequest req = new DatapipelinesProjectsLocationsPipelinesGetRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "amet";
                alt = AltEnum.MEDIA;
                callback = "nisi";
                fields = "vel";
                key = "natus";
                oauthToken = "omnis";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "perferendis";
                uploadProtocol = "nihil";
            }};            

            DatapipelinesProjectsLocationsPipelinesGetResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesGet(req, new DatapipelinesProjectsLocationsPipelinesGetSecurity("magnam", "distinctio") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatapipelinesV1Pipeline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datapipelinesProjectsLocationsPipelinesJobsList

Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesJobsListRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesJobsListResponse;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesJobsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesJobsListRequest req = new DatapipelinesProjectsLocationsPipelinesJobsListRequest("id") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "labore";
                alt = AltEnum.MEDIA;
                callback = "natus";
                fields = "nobis";
                key = "eum";
                oauthToken = "vero";
                pageSize = 135474L;
                pageToken = "architecto";
                prettyPrint = false;
                quotaUser = "magnam";
                uploadType = "et";
                uploadProtocol = "excepturi";
            }};            

            DatapipelinesProjectsLocationsPipelinesJobsListResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesJobsList(req, new DatapipelinesProjectsLocationsPipelinesJobsListSecurity("ullam", "provident") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatapipelinesV1ListJobsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datapipelinesProjectsLocationsPipelinesList

Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesListRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesListResponse;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesListRequest req = new DatapipelinesProjectsLocationsPipelinesListRequest("quos") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "accusantium";
                alt = AltEnum.MEDIA;
                callback = "reiciendis";
                fields = "mollitia";
                filter = "ad";
                key = "eum";
                oauthToken = "dolor";
                pageSize = 896547L;
                pageToken = "odit";
                prettyPrint = false;
                quotaUser = "nemo";
                uploadType = "quasi";
                uploadProtocol = "iure";
            }};            

            DatapipelinesProjectsLocationsPipelinesListResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesList(req, new DatapipelinesProjectsLocationsPipelinesListSecurity("doloribus", "debitis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatapipelinesV1ListPipelinesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datapipelinesProjectsLocationsPipelinesPatch

Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesPatchRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesPatchResponse;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1PipelineInput;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1PipelineStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1PipelineTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1RuntimeEnvironment;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1ScheduleSpecInput;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1Workload;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesPatchRequest req = new DatapipelinesProjectsLocationsPipelinesPatchRequest("eius") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatapipelinesV1PipelineInput = new GoogleCloudDatapipelinesV1PipelineInput() {{
                    displayName = "deleniti";
                    name = "Dr. Arnold Bradtke";
                    pipelineSources = new java.util.HashMap<String, String>() {{
                        put("nihil", "repellat");
                        put("quibusdam", "sed");
                        put("saepe", "pariatur");
                    }};
                    scheduleInfo = new GoogleCloudDatapipelinesV1ScheduleSpecInput() {{
                        schedule = "accusantium";
                        timeZone = "consequuntur";
                    }};;
                    schedulerServiceAccountEmail = "praesentium";
                    state = GoogleCloudDatapipelinesV1PipelineStateEnum.STATE_STOPPING;
                    type = GoogleCloudDatapipelinesV1PipelineTypeEnum.PIPELINE_TYPE_UNSPECIFIED;
                    workload = new GoogleCloudDatapipelinesV1Workload() {{
                        dataflowFlexTemplateRequest = new GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest() {{
                            launchParameter = new GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter() {{
                                containerSpecGcsPath = "sunt";
                                environment = new GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment() {{
                                    additionalExperiments = new String[]{{
                                        add("illum"),
                                        add("pariatur"),
                                        add("maxime"),
                                        add("ea"),
                                    }};
                                    additionalUserLabels = new java.util.HashMap<String, String>() {{
                                        put("odit", "ea");
                                        put("accusantium", "ab");
                                        put("maiores", "quidem");
                                    }};
                                    enableStreamingEngine = false;
                                    flexrsGoal = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum.FLEXRS_SPEED_OPTIMIZED;
                                    ipConfiguration = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PUBLIC;
                                    kmsKeyName = "autem";
                                    machineType = "nam";
                                    maxWorkers = 50588;
                                    network = "pariatur";
                                    numWorkers = 365496;
                                    serviceAccountEmail = "voluptatibus";
                                    subnetwork = "perferendis";
                                    tempLocation = "fugiat";
                                    workerRegion = "amet";
                                    workerZone = "aut";
                                    zone = "cumque";
                                }};;
                                jobName = "corporis";
                                launchOptions = new java.util.HashMap<String, String>() {{
                                    put("libero", "nobis");
                                    put("dolores", "quis");
                                    put("totam", "dignissimos");
                                    put("eaque", "quis");
                                }};
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("eos", "perferendis");
                                }};
                                transformNameMappings = new java.util.HashMap<String, String>() {{
                                    put("minus", "quam");
                                }};
                                update = false;
                            }};;
                            location = "dolor";
                            projectId = "vero";
                            validateOnly = false;
                        }};;
                        dataflowLaunchTemplateRequest = new GoogleCloudDatapipelinesV1LaunchTemplateRequest() {{
                            gcsPath = "nostrum";
                            launchParameters = new GoogleCloudDatapipelinesV1LaunchTemplateParameters() {{
                                environment = new GoogleCloudDatapipelinesV1RuntimeEnvironment() {{
                                    additionalExperiments = new String[]{{
                                        add("recusandae"),
                                        add("omnis"),
                                        add("facilis"),
                                        add("perspiciatis"),
                                    }};
                                    additionalUserLabels = new java.util.HashMap<String, String>() {{
                                        put("porro", "consequuntur");
                                    }};
                                    bypassTempDirValidation = false;
                                    enableStreamingEngine = false;
                                    ipConfiguration = GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PUBLIC;
                                    kmsKeyName = "error";
                                    machineType = "eaque";
                                    maxWorkers = 577229;
                                    network = "rerum";
                                    numWorkers = 237893;
                                    serviceAccountEmail = "asperiores";
                                    subnetwork = "earum";
                                    tempLocation = "modi";
                                    workerRegion = "iste";
                                    workerZone = "dolorum";
                                    zone = "deleniti";
                                }};;
                                jobName = "pariatur";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("nobis", "libero");
                                    put("delectus", "quaerat");
                                    put("quos", "aliquid");
                                }};
                                transformNameMapping = new java.util.HashMap<String, String>() {{
                                    put("dolorem", "dolor");
                                }};
                                update = false;
                            }};;
                            location = "qui";
                            projectId = "ipsum";
                            validateOnly = false;
                        }};;
                    }};;
                }};;
                accessToken = "hic";
                alt = AltEnum.MEDIA;
                callback = "cum";
                fields = "voluptate";
                key = "dignissimos";
                oauthToken = "reiciendis";
                prettyPrint = false;
                quotaUser = "amet";
                updateMask = "dolorum";
                uploadType = "numquam";
                uploadProtocol = "veritatis";
            }};            

            DatapipelinesProjectsLocationsPipelinesPatchResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesPatch(req, new DatapipelinesProjectsLocationsPipelinesPatchSecurity("ipsa", "ipsa") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatapipelinesV1Pipeline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datapipelinesProjectsLocationsPipelinesRun

Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesRunRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesRunResponse;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesRunSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesRunRequest req = new DatapipelinesProjectsLocationsPipelinesRunRequest("iure") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("accusamus", "quidem");
                    put("voluptatibus", "voluptas");
                }};
                accessToken = "natus";
                alt = AltEnum.JSON;
                callback = "atque";
                fields = "sit";
                key = "fugiat";
                oauthToken = "ab";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "dolorum";
                uploadProtocol = "iusto";
            }};            

            DatapipelinesProjectsLocationsPipelinesRunResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesRun(req, new DatapipelinesProjectsLocationsPipelinesRunSecurity("voluptate", "dolorum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatapipelinesV1RunPipelineResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## datapipelinesProjectsLocationsPipelinesStop

Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesStopRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesStopResponse;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesStopSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesStopRequest req = new DatapipelinesProjectsLocationsPipelinesStopRequest("deleniti") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("distinctio", "asperiores");
                    put("nihil", "ipsum");
                    put("voluptate", "id");
                    put("saepe", "eius");
                }};
                accessToken = "aspernatur";
                alt = AltEnum.JSON;
                callback = "amet";
                fields = "optio";
                key = "accusamus";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "saepe";
                uploadType = "suscipit";
                uploadProtocol = "deserunt";
            }};            

            DatapipelinesProjectsLocationsPipelinesStopResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesStop(req, new DatapipelinesProjectsLocationsPipelinesStopSecurity("provident", "minima") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatapipelinesV1Pipeline != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
