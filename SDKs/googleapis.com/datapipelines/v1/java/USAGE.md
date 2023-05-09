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