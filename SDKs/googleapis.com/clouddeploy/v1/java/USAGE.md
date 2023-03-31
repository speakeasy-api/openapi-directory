<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse;
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
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;
import org.openapis.openapi.models.shared.SchemeOauth2;
import org.openapis.openapi.models.shared.SchemeOauth2c;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest() {{
                security = new ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity() {{
                    oauth2 = new SchemeOauth2() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                    oauth2c = new SchemeOauth2c() {{
                        authorization = "Bearer YOUR_ACCESS_TOKEN_HERE";
                    }};
                }};
                pathParams = new ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams() {{
                    parent = "corrupti";
                }};
                queryParams = new ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams() {{
                    dollarXgafv = "2";
                    accessToken = "distinctio";
                    alt = "proto";
                    callback = "unde";
                    deliveryPipelineId = "nulla";
                    fields = "corrupti";
                    key = "illum";
                    oauthToken = "vel";
                    prettyPrint = false;
                    quotaUser = "error";
                    requestId = "deserunt";
                    uploadType = "suscipit";
                    uploadProtocol = "iure";
                    validateOnly = false;
                }};
                request = new DeliveryPipelineInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("debitis", "ipsa");
                        put("delectus", "tempora");
                    }};
                    condition = new PipelineCondition() {{
                        pipelineReadyCondition = new PipelineReadyCondition() {{
                            status = false;
                            updateTime = "suscipit";
                        }};
                        targetsPresentCondition = new TargetsPresentCondition() {{
                            missingTargets = new String[]{{
                                add("minus"),
                                add("placeat"),
                            }};
                            status = false;
                            updateTime = "voluptatum";
                        }};
                        targetsTypeCondition = new TargetsTypeCondition() {{
                            errorDetails = "iusto";
                            status = false;
                        }};
                    }};
                    description = "excepturi";
                    etag = "nisi";
                    labels = new java.util.HashMap<String, String>() {{
                        put("temporibus", "ab");
                        put("quis", "veritatis");
                        put("deserunt", "perferendis");
                        put("ipsam", "repellendus");
                    }};
                    name = "sapiente";
                    serialPipeline = new SerialPipeline() {{
                        stages = new org.openapis.openapi.models.shared.Stage[]{{
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("at"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(978619),
                                                add(473608),
                                                add(799159),
                                                add(800911),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 520478;
                                                    phaseId = "porro";
                                                    profiles = new String[]{{
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
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("esse"),
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(18789),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 617636;
                                                    phaseId = "sed";
                                                    profiles = new String[]{{
                                                        add("dolor"),
                                                        add("natus"),
                                                        add("laboriosam"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 943749;
                                                    phaseId = "saepe";
                                                    profiles = new String[]{{
                                                        add("in"),
                                                        add("corporis"),
                                                        add("iste"),
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
                                                    deployment = "iure";
                                                    httpRoute = "saepe";
                                                    service = "quidem";
                                                }};
                                                serviceNetworking = new ServiceNetworking() {{
                                                    deployment = "architecto";
                                                    service = "ipsa";
                                                }};
                                            }};
                                        }};
                                    }};
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "reiciendis";
                            }}),
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("mollitia"),
                                    add("laborum"),
                                    add("dolores"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(358152),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 750686;
                                                    phaseId = "enim";
                                                    profiles = new String[]{{
                                                        add("nemo"),
                                                        add("minima"),
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
                                                    deployment = "accusantium";
                                                    httpRoute = "iure";
                                                    service = "culpa";
                                                }};
                                                serviceNetworking = new ServiceNetworking() {{
                                                    deployment = "doloribus";
                                                    service = "sapiente";
                                                }};
                                            }};
                                        }};
                                    }};
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "architecto";
                            }}),
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("dolorem"),
                                    add("culpa"),
                                    add("consequuntur"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(653108),
                                                add(581850),
                                                add(253291),
                                                add(414369),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 474697;
                                                    phaseId = "velit";
                                                    profiles = new String[]{{
                                                        add("quia"),
                                                        add("quis"),
                                                        add("vitae"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 674752;
                                                    phaseId = "animi";
                                                    profiles = new String[]{{
                                                        add("odit"),
                                                        add("quo"),
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
                                                    deployment = "sequi";
                                                    httpRoute = "tenetur";
                                                    service = "ipsam";
                                                }};
                                                serviceNetworking = new ServiceNetworking() {{
                                                    deployment = "id";
                                                    service = "possimus";
                                                }};
                                            }};
                                        }};
                                    }};
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "aut";
                            }}),
                        }};
                    }};
                    suspended = false;
                }};
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesCreate(req);

            if (res.operation.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->