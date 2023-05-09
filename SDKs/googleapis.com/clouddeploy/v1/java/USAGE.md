<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.Canary;
import org.openapis.openapi.models.shared.CanaryDeployment;
import org.openapis.openapi.models.shared.CloudRunConfig;
import org.openapis.openapi.models.shared.CustomCanaryDeployment;
import org.openapis.openapi.models.shared.DeliveryPipelineInput;
import org.openapis.openapi.models.shared.GatewayServiceMesh;
import org.openapis.openapi.models.shared.KubernetesConfig;
import org.openapis.openapi.models.shared.PhaseConfig;
import org.openapis.openapi.models.shared.PipelineCondition;
import org.openapis.openapi.models.shared.PipelineReadyCondition;
import org.openapis.openapi.models.shared.RuntimeConfig;
import org.openapis.openapi.models.shared.SerialPipeline;
import org.openapis.openapi.models.shared.ServiceNetworking;
import org.openapis.openapi.models.shared.Stage;
import org.openapis.openapi.models.shared.Standard;
import org.openapis.openapi.models.shared.Strategy;
import org.openapis.openapi.models.shared.TargetsPresentCondition;
import org.openapis.openapi.models.shared.TargetsTypeCondition;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest("corrupti") {{
                dollarXgafv = XgafvEnum.TWO;
                deliveryPipelineInput = new DeliveryPipelineInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("quibusdam", "unde");
                        put("nulla", "corrupti");
                        put("illum", "vel");
                    }};
                    condition = new PipelineCondition() {{
                        pipelineReadyCondition = new PipelineReadyCondition() {{
                            status = false;
                            updateTime = "error";
                        }};;
                        targetsPresentCondition = new TargetsPresentCondition() {{
                            missingTargets = new String[]{{
                                add("suscipit"),
                                add("iure"),
                                add("magnam"),
                            }};
                            status = false;
                            updateTime = "debitis";
                        }};;
                        targetsTypeCondition = new TargetsTypeCondition() {{
                            errorDetails = "ipsa";
                            status = false;
                        }};;
                    }};;
                    description = "delectus";
                    etag = "tempora";
                    labels = new java.util.HashMap<String, String>() {{
                        put("molestiae", "minus");
                        put("placeat", "voluptatum");
                    }};
                    name = "Miriam Huel";
                    serialPipeline = new SerialPipeline() {{
                        stages = new org.openapis.openapi.models.shared.Stage[]{{
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("veritatis"),
                                    add("deserunt"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(368241),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 957156;
                                                    phaseId = "quo";
                                                    profiles = new String[]{{
                                                        add("at"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 870088;
                                                    phaseId = "maiores";
                                                    profiles = new String[]{{
                                                        add("quod"),
                                                        add("quod"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 461479;
                                                    phaseId = "totam";
                                                    profiles = new String[]{{
                                                        add("dolorum"),
                                                        add("dicta"),
                                                        add("nam"),
                                                        add("officia"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 582020;
                                                    phaseId = "fugit";
                                                    profiles = new String[]{{
                                                        add("hic"),
                                                        add("optio"),
                                                        add("totam"),
                                                    }};
                                                    verify = false;
                                                }}),
                                            }};
                                        }};
                                        runtimeConfig = new RuntimeConfig() {{
                                            cloudRun = new CloudRunConfig() {{
                                                automaticTrafficControl = false;
                                            }};
                                            kubernetes = new KubernetesConfig() {{
                                                gatewayServiceMesh = new GatewayServiceMesh() {{
                                                    deployment = "beatae";
                                                    httpRoute = "commodi";
                                                    service = "molestiae";
                                                }};
                                                serviceNetworking = new ServiceNetworking() {{
                                                    deployment = "modi";
                                                    service = "qui";
                                                }};
                                            }};
                                        }};
                                    }};
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "impedit";
                            }}),
                        }};
                    }};;
                    suspended = false;
                }};;
                accessToken = "cum";
                alt = AltEnum.MEDIA;
                callback = "ipsum";
                deliveryPipelineId = "excepturi";
                fields = "aspernatur";
                key = "perferendis";
                oauthToken = "ad";
                prettyPrint = false;
                quotaUser = "natus";
                requestId = "sed";
                uploadType = "iste";
                uploadProtocol = "dolor";
                validateOnly = false;
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesCreate(req, new ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity("natus", "laboriosam") {{
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