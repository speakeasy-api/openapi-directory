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

            DatapipelinesProjectsLocationsPipelinesCreateRequest req = new DatapipelinesProjectsLocationsPipelinesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                googleCloudDatapipelinesV1PipelineInput = new GoogleCloudDatapipelinesV1PipelineInput() {{
                    displayName = "distinctio";
                    name = "Stuart Stiedemann";
                    pipelineSources = new java.util.HashMap<String, String>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    scheduleInfo = new GoogleCloudDatapipelinesV1ScheduleSpecInput() {{
                        schedule = "magnam";
                        timeZone = "debitis";
                    }};;
                    schedulerServiceAccountEmail = "ipsa";
                    state = GoogleCloudDatapipelinesV1PipelineStateEnum.STATE_PAUSED;
                    type = GoogleCloudDatapipelinesV1PipelineTypeEnum.PIPELINE_TYPE_UNSPECIFIED;
                    workload = new GoogleCloudDatapipelinesV1Workload() {{
                        dataflowFlexTemplateRequest = new GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest() {{
                            launchParameter = new GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter() {{
                                containerSpecGcsPath = "suscipit";
                                environment = new GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment() {{
                                    additionalExperiments = new String[]{{
                                        add("minus"),
                                        add("placeat"),
                                    }};
                                    additionalUserLabels = new java.util.HashMap<String, String>() {{
                                        put("iusto", "excepturi");
                                        put("nisi", "recusandae");
                                        put("temporibus", "ab");
                                    }};
                                    enableStreamingEngine = false;
                                    flexrsGoal = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum.FLEXRS_SPEED_OPTIMIZED;
                                    ipConfiguration = GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum.WORKER_IP_UNSPECIFIED;
                                    kmsKeyName = "deserunt";
                                    machineType = "perferendis";
                                    maxWorkers = 368241;
                                    network = "repellendus";
                                    numWorkers = 957156;
                                    serviceAccountEmail = "quo";
                                    subnetwork = "odit";
                                    tempLocation = "at";
                                    workerRegion = "at";
                                    workerZone = "maiores";
                                    zone = "molestiae";
                                }};;
                                jobName = "quod";
                                launchOptions = new java.util.HashMap<String, String>() {{
                                    put("esse", "totam");
                                    put("porro", "dolorum");
                                    put("dicta", "nam");
                                    put("officia", "occaecati");
                                }};
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("deleniti", "hic");
                                }};
                                transformNameMappings = new java.util.HashMap<String, String>() {{
                                    put("totam", "beatae");
                                    put("commodi", "molestiae");
                                    put("modi", "qui");
                                    put("impedit", "cum");
                                }};
                                update = false;
                            }};;
                            location = "esse";
                            projectId = "ipsum";
                            validateOnly = false;
                        }};;
                        dataflowLaunchTemplateRequest = new GoogleCloudDatapipelinesV1LaunchTemplateRequest() {{
                            gcsPath = "excepturi";
                            launchParameters = new GoogleCloudDatapipelinesV1LaunchTemplateParameters() {{
                                environment = new GoogleCloudDatapipelinesV1RuntimeEnvironment() {{
                                    additionalExperiments = new String[]{{
                                        add("perferendis"),
                                    }};
                                    additionalUserLabels = new java.util.HashMap<String, String>() {{
                                        put("natus", "sed");
                                        put("iste", "dolor");
                                    }};
                                    bypassTempDirValidation = false;
                                    enableStreamingEngine = false;
                                    ipConfiguration = GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum.WORKER_IP_PUBLIC;
                                    kmsKeyName = "laboriosam";
                                    machineType = "hic";
                                    maxWorkers = 902599;
                                    network = "fuga";
                                    numWorkers = 449950;
                                    serviceAccountEmail = "corporis";
                                    subnetwork = "iste";
                                    tempLocation = "iure";
                                    workerRegion = "saepe";
                                    workerZone = "quidem";
                                    zone = "architecto";
                                }};;
                                jobName = "ipsa";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("est", "mollitia");
                                    put("laborum", "dolores");
                                    put("dolorem", "corporis");
                                    put("explicabo", "nobis");
                                }};
                                transformNameMapping = new java.util.HashMap<String, String>() {{
                                    put("omnis", "nemo");
                                    put("minima", "excepturi");
                                }};
                                update = false;
                            }};;
                            location = "accusantium";
                            projectId = "iure";
                            validateOnly = false;
                        }};;
                    }};;
                }};;
                accessToken = "culpa";
                alt = AltEnum.PROTO;
                callback = "sapiente";
                fields = "architecto";
                key = "mollitia";
                oauthToken = "dolorem";
                prettyPrint = false;
                quotaUser = "culpa";
                uploadType = "consequuntur";
                uploadProtocol = "repellat";
            }};            

            DatapipelinesProjectsLocationsPipelinesCreateResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesCreate(req, new DatapipelinesProjectsLocationsPipelinesCreateSecurity("mollitia", "occaecati") {{
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [datapipelinesProjectsLocationsPipelinesCreate](docs/projects/README.md#datapipelinesprojectslocationspipelinescreate) - Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
* [datapipelinesProjectsLocationsPipelinesDelete](docs/projects/README.md#datapipelinesprojectslocationspipelinesdelete) - Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
* [datapipelinesProjectsLocationsPipelinesGet](docs/projects/README.md#datapipelinesprojectslocationspipelinesget) - Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesJobsList](docs/projects/README.md#datapipelinesprojectslocationspipelinesjobslist) - Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesList](docs/projects/README.md#datapipelinesprojectslocationspipelineslist) - Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* [datapipelinesProjectsLocationsPipelinesPatch](docs/projects/README.md#datapipelinesprojectslocationspipelinespatch) - Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
* [datapipelinesProjectsLocationsPipelinesRun](docs/projects/README.md#datapipelinesprojectslocationspipelinesrun) - Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
* [datapipelinesProjectsLocationsPipelinesStop](docs/projects/README.md#datapipelinesprojectslocationspipelinesstop) - Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
