<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateSecurity;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateRequest;
import org.openapis.openapi.models.operations.DatapipelinesProjectsLocationsPipelinesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
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
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DatapipelinesProjectsLocationsPipelinesCreateRequest req = new DatapipelinesProjectsLocationsPipelinesCreateRequest() {{
                dollarXgafv = "2";
                googleCloudDatapipelinesV1PipelineInput = new GoogleCloudDatapipelinesV1PipelineInput() {{
                    displayName = "provident";
                    name = "distinctio";
                    pipelineSources = new java.util.HashMap<String, String>() {{
                        put("unde", "nulla");
                        put("corrupti", "illum");
                        put("vel", "error");
                        put("deserunt", "suscipit");
                    }};
                    scheduleInfo = new GoogleCloudDatapipelinesV1ScheduleSpecInput() {{
                        schedule = "iure";
                        timeZone = "magnam";
                    }};
                    schedulerServiceAccountEmail = "debitis";
                    state = "STATE_UNSPECIFIED";
                    type = "PIPELINE_TYPE_STREAMING";
                    workload = new GoogleCloudDatapipelinesV1Workload() {{
                        dataflowFlexTemplateRequest = new GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest() {{
                            launchParameter = new GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter() {{
                                containerSpecGcsPath = "tempora";
                                environment = new GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment() {{
                                    additionalExperiments = new String[]{{
                                        add("molestiae"),
                                        add("minus"),
                                    }};
                                    additionalUserLabels = new java.util.HashMap<String, String>() {{
                                        put("voluptatum", "iusto");
                                        put("excepturi", "nisi");
                                        put("recusandae", "temporibus");
                                        put("ab", "quis");
                                    }};
                                    enableStreamingEngine = false;
                                    flexrsGoal = "FLEXRS_UNSPECIFIED";
                                    ipConfiguration = "WORKER_IP_PUBLIC";
                                    kmsKeyName = "perferendis";
                                    machineType = "ipsam";
                                    maxWorkers = 832620;
                                    network = "sapiente";
                                    numWorkers = 778157;
                                    serviceAccountEmail = "odit";
                                    subnetwork = "at";
                                    tempLocation = "at";
                                    workerRegion = "maiores";
                                    workerZone = "molestiae";
                                    zone = "quod";
                                }};
                                jobName = "quod";
                                launchOptions = new java.util.HashMap<String, String>() {{
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }};
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("officia", "occaecati");
                                    put("fugit", "deleniti");
                                    put("hic", "optio");
                                }};
                                transformNameMappings = new java.util.HashMap<String, String>() {{
                                    put("beatae", "commodi");
                                    put("molestiae", "modi");
                                    put("qui", "impedit");
                                }};
                                update = false;
                            }};
                            location = "cum";
                            projectId = "esse";
                            validateOnly = false;
                        }};
                        dataflowLaunchTemplateRequest = new GoogleCloudDatapipelinesV1LaunchTemplateRequest() {{
                            gcsPath = "ipsum";
                            launchParameters = new GoogleCloudDatapipelinesV1LaunchTemplateParameters() {{
                                environment = new GoogleCloudDatapipelinesV1RuntimeEnvironment() {{
                                    additionalExperiments = new String[]{{
                                        add("aspernatur"),
                                        add("perferendis"),
                                        add("ad"),
                                    }};
                                    additionalUserLabels = new java.util.HashMap<String, String>() {{
                                        put("sed", "iste");
                                        put("dolor", "natus");
                                        put("laboriosam", "hic");
                                    }};
                                    bypassTempDirValidation = false;
                                    enableStreamingEngine = false;
                                    ipConfiguration = "WORKER_IP_PRIVATE";
                                    kmsKeyName = "fuga";
                                    machineType = "in";
                                    maxWorkers = 359508;
                                    network = "iste";
                                    numWorkers = 437032;
                                    serviceAccountEmail = "saepe";
                                    subnetwork = "quidem";
                                    tempLocation = "architecto";
                                    workerRegion = "ipsa";
                                    workerZone = "reiciendis";
                                    zone = "est";
                                }};
                                jobName = "mollitia";
                                parameters = new java.util.HashMap<String, String>() {{
                                    put("dolores", "dolorem");
                                    put("corporis", "explicabo");
                                    put("nobis", "enim");
                                }};
                                transformNameMapping = new java.util.HashMap<String, String>() {{
                                    put("nemo", "minima");
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                                update = false;
                            }};
                            location = "doloribus";
                            projectId = "sapiente";
                            validateOnly = false;
                        }};
                    }};
                }};
                accessToken = "architecto";
                alt = "media";
                callback = "dolorem";
                fields = "culpa";
                key = "consequuntur";
                oauthToken = "repellat";
                parent = "mollitia";
                prettyPrint = false;
                quotaUser = "occaecati";
                uploadType = "numquam";
                uploadProtocol = "commodi";
            }}            

            DatapipelinesProjectsLocationsPipelinesCreateResponse res = sdk.projects.datapipelinesProjectsLocationsPipelinesCreate(req, new DatapipelinesProjectsLocationsPipelinesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.googleCloudDatapipelinesV1Pipeline.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->