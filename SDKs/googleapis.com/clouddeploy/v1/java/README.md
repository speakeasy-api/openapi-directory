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

<!-- Start SDK Available Operations -->
## SDK Available Operations


### projects

* `clouddeployProjectsLocationsDeliveryPipelinesCreate` - Creates a new DeliveryPipeline in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesList` - Lists DeliveryPipelines in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon` - Abandons a Release in the Delivery Pipeline.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate` - Creates a new Release in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesList` - Lists Releases in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance` - Advances a Rollout in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove` - Approves a Rollout.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate` - Creates a new Rollout in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob` - Ignores the specified Job in a Rollout.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList` - Lists JobRuns in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate` - Terminates a Job Run in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList` - Lists Rollouts in a given project and location.
* `clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob` - Retries the specified Job in a Rollout.
* `clouddeployProjectsLocationsList` - Lists information about the supported locations for this service.
* `clouddeployProjectsLocationsOperationsCancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `clouddeployProjectsLocationsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `clouddeployProjectsLocationsTargetsCreate` - Creates a new Target in a given project and location.
* `clouddeployProjectsLocationsTargetsDelete` - Deletes a single Target.
* `clouddeployProjectsLocationsTargetsGet` - Gets details of a single Target.
* `clouddeployProjectsLocationsTargetsGetIamPolicy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `clouddeployProjectsLocationsTargetsList` - Lists Targets in a given project and location.
* `clouddeployProjectsLocationsTargetsPatch` - Updates the parameters of a single Target.
* `clouddeployProjectsLocationsTargetsSetIamPolicy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `clouddeployProjectsLocationsTargetsTestIamPermissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
