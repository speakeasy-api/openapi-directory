<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.DeliveryPipelineInput;
import org.openapis.openapi.models.shared.SerialPipeline;
import org.openapis.openapi.models.shared.Stage;
import org.openapis.openapi.models.shared.Strategy;
import org.openapis.openapi.models.shared.Standard;
import org.openapis.openapi.models.shared.Canary;
import org.openapis.openapi.models.shared.RuntimeConfig;
import org.openapis.openapi.models.shared.KubernetesConfig;
import org.openapis.openapi.models.shared.ServiceNetworking;
import org.openapis.openapi.models.shared.GatewayServiceMesh;
import org.openapis.openapi.models.shared.CloudRunConfig;
import org.openapis.openapi.models.shared.CustomCanaryDeployment;
import org.openapis.openapi.models.shared.PhaseConfig;
import org.openapis.openapi.models.shared.CanaryDeployment;
import org.openapis.openapi.models.shared.PipelineCondition;
import org.openapis.openapi.models.shared.TargetsTypeCondition;
import org.openapis.openapi.models.shared.TargetsPresentCondition;
import org.openapis.openapi.models.shared.PipelineReadyCondition;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest() {{
                dollarXgafv = "2";
                deliveryPipelineInput = new DeliveryPipelineInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }};
                    condition = new PipelineCondition() {{
                        pipelineReadyCondition = new PipelineReadyCondition() {{
                            status = false;
                            updateTime = "vel";
                        }};
                        targetsPresentCondition = new TargetsPresentCondition() {{
                            missingTargets = new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }};
                            status = false;
                            updateTime = "magnam";
                        }};
                        targetsTypeCondition = new TargetsTypeCondition() {{
                            errorDetails = "debitis";
                            status = false;
                        }};
                    }};
                    description = "ipsa";
                    etag = "delectus";
                    labels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "molestiae");
                        put("minus", "placeat");
                    }};
                    name = "voluptatum";
                    serialPipeline = new SerialPipeline() {{
                        stages = new org.openapis.openapi.models.shared.Stage[]{{
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("nisi"),
                                    add("recusandae"),
                                    add("temporibus"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(337396),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 648172;
                                                    phaseId = "perferendis";
                                                    profiles = new String[]{{
                                                        add("repellendus"),
                                                        add("sapiente"),
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
                                                    deployment = "quo";
                                                    httpRoute = "odit";
                                                    service = "at";
                                                }};
                                                serviceNetworking = new ServiceNetworking() {{
                                                    deployment = "at";
                                                    service = "maiores";
                                                }};
                                            }};
                                        }};
                                    }};
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "molestiae";
                            }}),
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("quod"),
                                    add("esse"),
                                    add("totam"),
                                    add("porro"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(118274),
                                                add(720633),
                                                add(639921),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 143353;
                                                    phaseId = "deleniti";
                                                    profiles = new String[]{{
                                                        add("optio"),
                                                        add("totam"),
                                                        add("beatae"),
                                                        add("commodi"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 473600;
                                                    phaseId = "modi";
                                                    profiles = new String[]{{
                                                        add("impedit"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 736918;
                                                    phaseId = "esse";
                                                    profiles = new String[]{{
                                                        add("excepturi"),
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
                                                    deployment = "aspernatur";
                                                    httpRoute = "perferendis";
                                                    service = "ad";
                                                }};
                                                serviceNetworking = new ServiceNetworking() {{
                                                    deployment = "natus";
                                                    service = "sed";
                                                }};
                                            }};
                                        }};
                                    }};
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "iste";
                            }}),
                        }};
                    }};
                    suspended = false;
                }};
                accessToken = "dolor";
                alt = "media";
                callback = "laboriosam";
                deliveryPipelineId = "hic";
                fields = "saepe";
                key = "fuga";
                oauthToken = "in";
                parent = "corporis";
                prettyPrint = false;
                quotaUser = "iste";
                requestId = "iure";
                uploadType = "saepe";
                uploadProtocol = "quidem";
                validateOnly = false;
            }}            

            ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesCreate(req, new ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity() {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->