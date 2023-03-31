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

import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateSecurity;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreatePathParams;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateQueryParams;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateResponse;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1PipelineStateEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1PipelineTypeEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1PipelineInput;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1Workload;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1RuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1RuntimeEnvironment;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentFlexrsGoalEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironmentIpConfigurationEnum;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment;
import org.openapis.openapi.models.shared.GoogleCloudDatapipelinesV1ScheduleSpecInput;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesCreateRequest req = new DatapipelinesProjectsLocationsPipelinesCreateRequest() {{
                security = new DatapipelinesProjectsLocationsPipelinesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new DatapipelinesProjectsLocationsPipelinesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new DatapipelinesProjectsLocationsPipelinesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    fields = "nulla";
                    key = "corrupti";
                    oauthToken = "illum";
                    prettyPrint = false;
                    quotaUser = "vel";
                    uploadType = "error";
                    uploadProtocol = "deserunt";
                }};
                request = new GoogleCloudDatapipelinesV1PipelineInput() {{
                    displayName = "suscipit";
                    name = "iure";
                    pipelineSources = new java.util.HashMap<String, String>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                    scheduleInfo = new GoogleCloudDatapipelinesV1ScheduleSpecInput() {{
                        schedule = "suscipit";
                        timeZone = "molestiae";
                    }};
                    schedulerServiceAccountEmail = "minus";
                    state = "STATE_ARCHIVED";
                    type = "PIPELINE_TYPE_BATCH";
                    workload = new GoogleCloudDatapipelinesV1Workload() {{
                        dataflowFlexTemplateRequest = new GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest() {{
                            launchParameter = new GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter() {{
                                containerSpecGcsPath = "iusto";
                                environment = new GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment() {{
                                    additionalExperiments = new String[]{{
                                        add("nisi"),
                                        add("recusandae"),
                                        add("temporibus"),
                                    }};
                                    additionalUserLabels = new java.util.HashMap<String, String>() {{
                                        put("quis", "veritatis");
                                    }};
                                    enableStreamingEngine = false;
                                    flexrsGoal = "FLEXRS_SPEED_OPTIMIZED";
                                    ipConfiguration = "WORKER_IP_UNSPECIFIED";
                                    kmsKeyName = "ipsam";
                                    machineType = "repellendus";
                                    maxWorkers = 957156;
                                    network = "quo";
                                    numWorkers = 140350;
                                    serviceAccountEmail = "at";
                                    subnetwork = "at";
                                    tempLocation = "maiores";
                                    workerRegion = "molestiae";
                                    workerZone = "quod";
                                    zone = "quod";
                                }};
                                jobName = "esse";
                                launchOptions = new java.util.HashMap<String, String>() {{
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
                            }};
                            location = "esse";
                            projectId = "ipsum";
                            validateOnly = false;
                        }};
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
                                    ipConfiguration = "WORKER_IP_PUBLIC";
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
                                }};
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
                            }};
                            location = "accusantium";
                            projectId = "iure";
                            validateOnly = false;
                        }};
                    }};
                }};
            }};            

            DatapipelinesProjectsLocationsPipelinesCreateResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesCreate(req);

            if (res.googleCloudDatapipelinesV1Pipeline.isPresent()) {
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

* `datapipelinesProjectsLocationsPipelinesCreate` - Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
* `datapipelinesProjectsLocationsPipelinesDelete` - Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
* `datapipelinesProjectsLocationsPipelinesGet` - Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `datapipelinesProjectsLocationsPipelinesJobsList` - Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `datapipelinesProjectsLocationsPipelinesList` - Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `datapipelinesProjectsLocationsPipelinesPatch` - Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
* `datapipelinesProjectsLocationsPipelinesRun` - Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
* `datapipelinesProjectsLocationsPipelinesStop` - Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
