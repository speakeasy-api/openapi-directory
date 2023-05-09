# projects

### Available Operations

* [clouddeployProjectsLocationsDeliveryPipelinesCreate](#clouddeployprojectslocationsdeliverypipelinescreate) - Creates a new DeliveryPipeline in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesList](#clouddeployprojectslocationsdeliverypipelineslist) - Lists DeliveryPipelines in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon](#clouddeployprojectslocationsdeliverypipelinesreleasesabandon) - Abandons a Release in the Delivery Pipeline.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate](#clouddeployprojectslocationsdeliverypipelinesreleasescreate) - Creates a new Release in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesList](#clouddeployprojectslocationsdeliverypipelinesreleaseslist) - Lists Releases in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsadvance) - Advances a Rollout in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsapprove) - Approves a Rollout.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutscreate) - Creates a new Rollout in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsignorejob) - Ignores the specified Job in a Rollout.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunslist) - Lists JobRuns in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunsterminate) - Terminates a Job Run in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutslist) - Lists Rollouts in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob](#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsretryjob) - Retries the specified Job in a Rollout.
* [clouddeployProjectsLocationsList](#clouddeployprojectslocationslist) - Lists information about the supported locations for this service.
* [clouddeployProjectsLocationsOperationsCancel](#clouddeployprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [clouddeployProjectsLocationsOperationsList](#clouddeployprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [clouddeployProjectsLocationsTargetsCreate](#clouddeployprojectslocationstargetscreate) - Creates a new Target in a given project and location.
* [clouddeployProjectsLocationsTargetsDelete](#clouddeployprojectslocationstargetsdelete) - Deletes a single Target.
* [clouddeployProjectsLocationsTargetsGet](#clouddeployprojectslocationstargetsget) - Gets details of a single Target.
* [clouddeployProjectsLocationsTargetsGetIamPolicy](#clouddeployprojectslocationstargetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [clouddeployProjectsLocationsTargetsList](#clouddeployprojectslocationstargetslist) - Lists Targets in a given project and location.
* [clouddeployProjectsLocationsTargetsPatch](#clouddeployprojectslocationstargetspatch) - Updates the parameters of a single Target.
* [clouddeployProjectsLocationsTargetsSetIamPolicy](#clouddeployprojectslocationstargetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [clouddeployProjectsLocationsTargetsTestIamPermissions](#clouddeployprojectslocationstargetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

## clouddeployProjectsLocationsDeliveryPipelinesCreate

Creates a new DeliveryPipeline in a given project and location.

### Example Usage

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

            ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest("hic") {{
                dollarXgafv = XgafvEnum.TWO;
                deliveryPipelineInput = new DeliveryPipelineInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("in", "corporis");
                        put("iste", "iure");
                        put("saepe", "quidem");
                    }};
                    condition = new PipelineCondition() {{
                        pipelineReadyCondition = new PipelineReadyCondition() {{
                            status = false;
                            updateTime = "architecto";
                        }};;
                        targetsPresentCondition = new TargetsPresentCondition() {{
                            missingTargets = new String[]{{
                                add("reiciendis"),
                            }};
                            status = false;
                            updateTime = "est";
                        }};;
                        targetsTypeCondition = new TargetsTypeCondition() {{
                            errorDetails = "mollitia";
                            status = false;
                        }};;
                    }};;
                    description = "laborum";
                    etag = "dolores";
                    labels = new java.util.HashMap<String, String>() {{
                        put("corporis", "explicabo");
                    }};
                    name = "Ronnie Mohr";
                    serialPipeline = new SerialPipeline() {{
                        stages = new org.openapis.openapi.models.shared.Stage[]{{
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("iure"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(988374),
                                                add(958950),
                                                add(102044),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 208876;
                                                    phaseId = "culpa";
                                                    profiles = new String[]{{
                                                        add("repellat"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 653108;
                                                    phaseId = "occaecati";
                                                    profiles = new String[]{{
                                                        add("commodi"),
                                                        add("quam"),
                                                    }};
                                                    verify = false;
                                                }}),
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
                                            }};
                                        }};
                                        runtimeConfig = new RuntimeConfig() {{
                                            cloudRun = new CloudRunConfig() {{
                                                automaticTrafficControl = false;
                                            }};
                                            kubernetes = new KubernetesConfig() {{
                                                gatewayServiceMesh = new GatewayServiceMesh() {{
                                                    deployment = "laborum";
                                                    httpRoute = "animi";
                                                    service = "enim";
                                                }};
                                                serviceNetworking = new ServiceNetworking() {{
                                                    deployment = "odit";
                                                    service = "quo";
                                                }};
                                            }};
                                        }};
                                    }};
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "sequi";
                            }}),
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("ipsam"),
                                    add("id"),
                                    add("possimus"),
                                    add("aut"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(622846),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 673660;
                                                    phaseId = "quasi";
                                                    profiles = new String[]{{
                                                        add("voluptatibus"),
                                                        add("vero"),
                                                        add("nihil"),
                                                        add("praesentium"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 976762;
                                                    phaseId = "ipsa";
                                                    profiles = new String[]{{
                                                        add("voluptate"),
                                                        add("cum"),
                                                        add("perferendis"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 39187;
                                                    phaseId = "reprehenderit";
                                                    profiles = new String[]{{
                                                        add("maiores"),
                                                        add("dicta"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 359444;
                                                    phaseId = "dolore";
                                                    profiles = new String[]{{
                                                        add("dicta"),
                                                        add("harum"),
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
                                                    deployment = "enim";
                                                    httpRoute = "accusamus";
                                                    service = "commodi";
                                                }};
                                                serviceNetworking = new ServiceNetworking() {{
                                                    deployment = "repudiandae";
                                                    service = "quae";
                                                }};
                                            }};
                                        }};
                                    }};
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "ipsum";
                            }}),
                            add(new Stage() {{
                                profiles = new String[]{{
                                    add("molestias"),
                                    add("excepturi"),
                                    add("pariatur"),
                                }};
                                strategy = new Strategy() {{
                                    canary = new Canary() {{
                                        canaryDeployment = new CanaryDeployment() {{
                                            percentages = new Integer[]{{
                                                add(508969),
                                                add(523248),
                                            }};
                                            verify = false;
                                        }};
                                        customCanaryDeployment = new CustomCanaryDeployment() {{
                                            phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                add(new PhaseConfig() {{
                                                    percentage = 93940;
                                                    phaseId = "repudiandae";
                                                    profiles = new String[]{{
                                                        add("veritatis"),
                                                        add("itaque"),
                                                        add("incidunt"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 318569;
                                                    phaseId = "consequatur";
                                                    profiles = new String[]{{
                                                        add("quibusdam"),
                                                        add("explicabo"),
                                                        add("deserunt"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 716327;
                                                    phaseId = "quibusdam";
                                                    profiles = new String[]{{
                                                        add("modi"),
                                                        add("qui"),
                                                    }};
                                                    verify = false;
                                                }}),
                                                add(new PhaseConfig() {{
                                                    percentage = 397821;
                                                    phaseId = "cupiditate";
                                                    profiles = new String[]{{
                                                        add("perferendis"),
                                                        add("magni"),
                                                        add("assumenda"),
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
                                                    deployment = "ipsam";
                                                    httpRoute = "alias";
                                                    service = "fugit";
                                                }};
                                                serviceNetworking = new ServiceNetworking() {{
                                                    deployment = "dolorum";
                                                    service = "excepturi";
                                                }};
                                            }};
                                        }};
                                    }};
                                    standard = new Standard() {{
                                        verify = false;
                                    }};
                                }};
                                targetId = "tempora";
                            }}),
                        }};
                    }};;
                    suspended = false;
                }};;
                accessToken = "facilis";
                alt = AltEnum.PROTO;
                callback = "labore";
                deliveryPipelineId = "delectus";
                fields = "eum";
                key = "non";
                oauthToken = "eligendi";
                prettyPrint = false;
                quotaUser = "sint";
                requestId = "aliquid";
                uploadType = "provident";
                uploadProtocol = "necessitatibus";
                validateOnly = false;
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesCreateResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesCreate(req, new ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity("sint", "officia") {{
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

## clouddeployProjectsLocationsDeliveryPipelinesList

Lists DeliveryPipelines in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesListRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesListResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesListRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesListRequest("dolor") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "a";
                alt = AltEnum.PROTO;
                callback = "in";
                fields = "in";
                filter = "illum";
                key = "maiores";
                oauthToken = "rerum";
                orderBy = "dicta";
                pageSize = 297437L;
                pageToken = "cumque";
                prettyPrint = false;
                quotaUser = "facere";
                uploadType = "ea";
                uploadProtocol = "aliquid";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesListResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesList(req, new ClouddeployProjectsLocationsDeliveryPipelinesListSecurity("laborum", "accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listDeliveryPipelinesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon

Abandons a Release in the Delivery Pipeline.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonRequest("non") {{
                dollarXgafv = XgafvEnum.TWO;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("accusamus", "delectus");
                    put("quidem", "provident");
                }};
                accessToken = "nam";
                alt = AltEnum.MEDIA;
                callback = "blanditiis";
                fields = "deleniti";
                key = "sapiente";
                oauthToken = "amet";
                prettyPrint = false;
                quotaUser = "deserunt";
                uploadType = "nisi";
                uploadProtocol = "vel";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesAbandonSecurity("natus", "omnis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.abandonReleaseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate

Creates a new Release in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.BuildArtifact;
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
import org.openapis.openapi.models.shared.ReleaseCondition;
import org.openapis.openapi.models.shared.ReleaseInput;
import org.openapis.openapi.models.shared.ReleaseReadyCondition;
import org.openapis.openapi.models.shared.RuntimeConfig;
import org.openapis.openapi.models.shared.SerialPipeline;
import org.openapis.openapi.models.shared.ServiceNetworking;
import org.openapis.openapi.models.shared.SkaffoldSupportedCondition;
import org.openapis.openapi.models.shared.SkaffoldSupportedConditionSkaffoldSupportStateEnum;
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

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateRequest("molestiae") {{
                dollarXgafv = XgafvEnum.ONE;
                releaseInput = new ReleaseInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("magnam", "distinctio");
                        put("id", "labore");
                    }};
                    buildArtifacts = new org.openapis.openapi.models.shared.BuildArtifact[]{{
                        add(new BuildArtifact() {{
                            image = "suscipit";
                            tag = "natus";
                        }}),
                        add(new BuildArtifact() {{
                            image = "nobis";
                            tag = "eum";
                        }}),
                    }};
                    condition = new ReleaseCondition() {{
                        releaseReadyCondition = new ReleaseReadyCondition() {{
                            status = false;
                        }};;
                        skaffoldSupportedCondition = new SkaffoldSupportedCondition() {{
                            maintenanceModeTime = "vero";
                            skaffoldSupportState = SkaffoldSupportedConditionSkaffoldSupportStateEnum.SKAFFOLD_SUPPORT_STATE_UNSPECIFIED;
                            status = false;
                            supportExpirationTime = "architecto";
                        }};;
                    }};;
                    deliveryPipelineSnapshot = new DeliveryPipelineInput() {{
                        annotations = new java.util.HashMap<String, String>() {{
                            put("et", "excepturi");
                            put("ullam", "provident");
                        }};
                        condition = new PipelineCondition() {{
                            pipelineReadyCondition = new PipelineReadyCondition() {{
                                status = false;
                                updateTime = "quos";
                            }};;
                            targetsPresentCondition = new TargetsPresentCondition() {{
                                missingTargets = new String[]{{
                                    add("accusantium"),
                                    add("mollitia"),
                                    add("reiciendis"),
                                }};
                                status = false;
                                updateTime = "mollitia";
                            }};;
                            targetsTypeCondition = new TargetsTypeCondition() {{
                                errorDetails = "ad";
                                status = false;
                            }};;
                        }};;
                        description = "eum";
                        etag = "dolor";
                        labels = new java.util.HashMap<String, String>() {{
                            put("odit", "nemo");
                            put("quasi", "iure");
                            put("doloribus", "debitis");
                            put("eius", "maxime");
                        }};
                        name = "Mr. Andres King";
                        serialPipeline = new SerialPipeline() {{
                            stages = new org.openapis.openapi.models.shared.Stage[]{{
                                add(new Stage() {{
                                    profiles = new String[]{{
                                        add("nihil"),
                                        add("repellat"),
                                        add("quibusdam"),
                                    }};
                                    strategy = new Strategy() {{
                                        canary = new Canary() {{
                                            canaryDeployment = new CanaryDeployment() {{
                                                percentages = new Integer[]{{
                                                    add(904648),
                                                }};
                                                verify = false;
                                            }};
                                            customCanaryDeployment = new CustomCanaryDeployment() {{
                                                phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                    add(new PhaseConfig() {{
                                                        percentage = 37559;
                                                        phaseId = "consequuntur";
                                                        profiles = new String[]{{
                                                            add("natus"),
                                                            add("magni"),
                                                            add("sunt"),
                                                        }};
                                                        verify = false;
                                                    }}),
                                                    add(new PhaseConfig() {{
                                                        percentage = 779051;
                                                        phaseId = "illum";
                                                        profiles = new String[]{{
                                                            add("maxime"),
                                                            add("ea"),
                                                            add("excepturi"),
                                                            add("odit"),
                                                        }};
                                                        verify = false;
                                                    }}),
                                                    add(new PhaseConfig() {{
                                                        percentage = 407183;
                                                        phaseId = "accusantium";
                                                        profiles = new String[]{{
                                                            add("maiores"),
                                                        }};
                                                        verify = false;
                                                    }}),
                                                    add(new PhaseConfig() {{
                                                        percentage = 697429;
                                                        phaseId = "ipsam";
                                                        profiles = new String[]{{
                                                            add("autem"),
                                                            add("nam"),
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
                                                        deployment = "eaque";
                                                        httpRoute = "pariatur";
                                                        service = "nemo";
                                                    }};
                                                    serviceNetworking = new ServiceNetworking() {{
                                                        deployment = "voluptatibus";
                                                        service = "perferendis";
                                                    }};
                                                }};
                                            }};
                                        }};
                                        standard = new Standard() {{
                                            verify = false;
                                        }};
                                    }};
                                    targetId = "fugiat";
                                }}),
                                add(new Stage() {{
                                    profiles = new String[]{{
                                        add("aut"),
                                    }};
                                    strategy = new Strategy() {{
                                        canary = new Canary() {{
                                            canaryDeployment = new CanaryDeployment() {{
                                                percentages = new Integer[]{{
                                                    add(359978),
                                                    add(944124),
                                                    add(729991),
                                                    add(749999),
                                                }};
                                                verify = false;
                                            }};
                                            customCanaryDeployment = new CustomCanaryDeployment() {{
                                                phaseConfigs = new org.openapis.openapi.models.shared.PhaseConfig[]{{
                                                    add(new PhaseConfig() {{
                                                        percentage = 339404;
                                                        phaseId = "totam";
                                                        profiles = new String[]{{
                                                            add("eaque"),
                                                            add("quis"),
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
                                                        deployment = "nesciunt";
                                                        httpRoute = "eos";
                                                        service = "perferendis";
                                                    }};
                                                    serviceNetworking = new ServiceNetworking() {{
                                                        deployment = "dolores";
                                                        service = "minus";
                                                    }};
                                                }};
                                            }};
                                        }};
                                        standard = new Standard() {{
                                            verify = false;
                                        }};
                                    }};
                                    targetId = "quam";
                                }}),
                            }};
                        }};;
                        suspended = false;
                    }};;
                    description = "dolor";
                    etag = "vero";
                    labels = new java.util.HashMap<String, String>() {{
                        put("hic", "recusandae");
                        put("omnis", "facilis");
                    }};
                    name = "George Sawayn";
                    skaffoldConfigPath = "error";
                    skaffoldConfigUri = "eaque";
                    skaffoldVersion = "occaecati";
                }};;
                accessToken = "rerum";
                alt = AltEnum.JSON;
                callback = "asperiores";
                fields = "earum";
                key = "modi";
                oauthToken = "iste";
                prettyPrint = false;
                quotaUser = "dolorum";
                releaseId = "deleniti";
                requestId = "pariatur";
                uploadType = "provident";
                uploadProtocol = "nobis";
                validateOnly = false;
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesCreateSecurity("libero", "delectus") {{
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

## clouddeployProjectsLocationsDeliveryPipelinesReleasesList

Lists Releases in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesListRequest("quaerat") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "aliquid";
                alt = AltEnum.JSON;
                callback = "dolorem";
                fields = "dolor";
                filter = "qui";
                key = "ipsum";
                oauthToken = "hic";
                orderBy = "excepturi";
                pageSize = 739551L;
                pageToken = "voluptate";
                prettyPrint = false;
                quotaUser = "dignissimos";
                uploadType = "reiciendis";
                uploadProtocol = "amet";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesListResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesList(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesListSecurity("dolorum", "numquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listReleasesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance

Advances a Rollout in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceSecurity;
import org.openapis.openapi.models.shared.AdvanceRolloutRequest;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceRequest("veritatis") {{
                dollarXgafv = XgafvEnum.ONE;
                advanceRolloutRequest = new AdvanceRolloutRequest() {{
                    phaseId = "ipsa";
                }};;
                accessToken = "iure";
                alt = AltEnum.MEDIA;
                callback = "quaerat";
                fields = "accusamus";
                key = "quidem";
                oauthToken = "voluptatibus";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "natus";
                uploadProtocol = "eos";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvanceSecurity("atque", "sit") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.advanceRolloutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove

Approves a Rollout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.ApproveRolloutRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveRequest("fugiat") {{
                dollarXgafv = XgafvEnum.ONE;
                approveRolloutRequest = new ApproveRolloutRequest() {{
                    approved = false;
                }};;
                accessToken = "soluta";
                alt = AltEnum.PROTO;
                callback = "iusto";
                fields = "voluptate";
                key = "dolorum";
                oauthToken = "deleniti";
                prettyPrint = false;
                quotaUser = "omnis";
                uploadType = "necessitatibus";
                uploadProtocol = "distinctio";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApproveSecurity("asperiores", "nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.approveRolloutResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate

Creates a new Rollout in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RolloutInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateRequest("ipsum") {{
                dollarXgafv = XgafvEnum.ONE;
                rolloutInput = new RolloutInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("saepe", "eius");
                        put("aspernatur", "perferendis");
                        put("amet", "optio");
                    }};
                    description = "accusamus";
                    etag = "ad";
                    labels = new java.util.HashMap<String, String>() {{
                        put("suscipit", "deserunt");
                        put("provident", "minima");
                        put("repellendus", "totam");
                        put("similique", "alias");
                    }};
                    name = "Alex Goodwin";
                    targetId = "officiis";
                }};;
                accessToken = "qui";
                alt = AltEnum.PROTO;
                callback = "a";
                fields = "esse";
                key = "harum";
                oauthToken = "iusto";
                prettyPrint = false;
                quotaUser = "ipsum";
                requestId = "quisquam";
                rolloutId = "tenetur";
                startingPhaseId = "amet";
                uploadType = "tempore";
                uploadProtocol = "accusamus";
                validateOnly = false;
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreateSecurity("numquam", "enim") {{
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

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob

Ignores the specified Job in a Rollout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.IgnoreJobRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobRequest("dolorem") {{
                dollarXgafv = XgafvEnum.TWO;
                ignoreJobRequest = new IgnoreJobRequest() {{
                    jobId = "totam";
                    phaseId = "nihil";
                }};;
                accessToken = "sit";
                alt = AltEnum.PROTO;
                callback = "neque";
                fields = "sed";
                key = "vel";
                oauthToken = "libero";
                prettyPrint = false;
                quotaUser = "voluptas";
                uploadType = "deserunt";
                uploadProtocol = "quam";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJobSecurity("ipsum", "incidunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ignoreJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList

Lists JobRuns in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListRequest("qui") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "maxime";
                alt = AltEnum.PROTO;
                callback = "soluta";
                fields = "dicta";
                filter = "laborum";
                key = "totam";
                oauthToken = "incidunt";
                orderBy = "aspernatur";
                pageSize = 174909L;
                pageToken = "distinctio";
                prettyPrint = false;
                quotaUser = "facilis";
                uploadType = "aliquid";
                uploadProtocol = "quam";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsListSecurity("molestias", "temporibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listJobRunsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate

Terminates a Job Run in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateRequest("qui") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("magni", "odio");
                }};
                accessToken = "sunt";
                alt = AltEnum.MEDIA;
                callback = "nam";
                fields = "hic";
                key = "voluptatem";
                oauthToken = "cumque";
                prettyPrint = false;
                quotaUser = "soluta";
                uploadType = "nobis";
                uploadProtocol = "et";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminateSecurity("saepe", "ipsum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.terminateJobRunResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList

Lists Rollouts in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListRequest("veritatis") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quos";
                alt = AltEnum.PROTO;
                callback = "cupiditate";
                fields = "aperiam";
                filter = "delectus";
                key = "dolorem";
                oauthToken = "dolore";
                orderBy = "labore";
                pageSize = 240829L;
                pageToken = "dolorum";
                prettyPrint = false;
                quotaUser = "architecto";
                uploadType = "quae";
                uploadProtocol = "aut";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsListSecurity("quas", "itaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listRolloutsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob

Retries the specified Job in a Rollout.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.RetryJobRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest req = new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobRequest("consequatur") {{
                dollarXgafv = XgafvEnum.TWO;
                retryJobRequest = new RetryJobRequest() {{
                    jobId = "repellendus";
                    phaseId = "porro";
                }};;
                accessToken = "doloribus";
                alt = AltEnum.JSON;
                callback = "facilis";
                fields = "cupiditate";
                key = "qui";
                oauthToken = "quae";
                prettyPrint = false;
                quotaUser = "laudantium";
                uploadType = "odio";
                uploadProtocol = "occaecati";
            }};            

            ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobResponse res = sdk.projects.clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob(req, new ClouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJobSecurity("voluptatibus", "quisquam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.retryJobResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsList

Lists information about the supported locations for this service.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsListRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsListResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsListRequest req = new ClouddeployProjectsLocationsListRequest("vero") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "quis";
                alt = AltEnum.JSON;
                callback = "delectus";
                fields = "voluptate";
                filter = "consectetur";
                key = "vero";
                oauthToken = "tenetur";
                pageSize = 492268L;
                pageToken = "hic";
                prettyPrint = false;
                quotaUser = "distinctio";
                uploadType = "quod";
                uploadProtocol = "odio";
            }};            

            ClouddeployProjectsLocationsListResponse res = sdk.projects.clouddeployProjectsLocationsList(req, new ClouddeployProjectsLocationsListSecurity("similique", "facilis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listLocationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsOperationsCancel

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsOperationsCancelRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsOperationsCancelResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsOperationsCancelSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsOperationsCancelRequest req = new ClouddeployProjectsLocationsOperationsCancelRequest("vero") {{
                dollarXgafv = XgafvEnum.ONE;
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("quibusdam", "illum");
                    put("sequi", "natus");
                }};
                accessToken = "impedit";
                alt = AltEnum.JSON;
                callback = "voluptatibus";
                fields = "exercitationem";
                key = "nulla";
                oauthToken = "fugit";
                prettyPrint = false;
                quotaUser = "porro";
                uploadType = "maiores";
                uploadProtocol = "doloribus";
            }};            

            ClouddeployProjectsLocationsOperationsCancelResponse res = sdk.projects.clouddeployProjectsLocationsOperationsCancel(req, new ClouddeployProjectsLocationsOperationsCancelSecurity("iusto", "eligendi") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.empty != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsOperationsList

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsOperationsListRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsOperationsListResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsOperationsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsOperationsListRequest req = new ClouddeployProjectsLocationsOperationsListRequest("ducimus") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "officia";
                alt = AltEnum.JSON;
                callback = "ipsam";
                fields = "ea";
                filter = "aspernatur";
                key = "vel";
                oauthToken = "possimus";
                pageSize = 297842L;
                pageToken = "ratione";
                prettyPrint = false;
                quotaUser = "ex";
                uploadType = "laudantium";
                uploadProtocol = "dicta";
            }};            

            ClouddeployProjectsLocationsOperationsListResponse res = sdk.projects.clouddeployProjectsLocationsOperationsList(req, new ClouddeployProjectsLocationsOperationsListSecurity("dolor", "maiores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listOperationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsTargetsCreate

Creates a new Target in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsCreateRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsCreateResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsCreateSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnthosCluster;
import org.openapis.openapi.models.shared.CloudRunLocation;
import org.openapis.openapi.models.shared.DefaultPool;
import org.openapis.openapi.models.shared.ExecutionConfig;
import org.openapis.openapi.models.shared.ExecutionConfigUsagesEnum;
import org.openapis.openapi.models.shared.GkeCluster;
import org.openapis.openapi.models.shared.MultiTarget;
import org.openapis.openapi.models.shared.PrivatePool;
import org.openapis.openapi.models.shared.TargetInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsTargetsCreateRequest req = new ClouddeployProjectsLocationsTargetsCreateRequest("quasi") {{
                dollarXgafv = XgafvEnum.ONE;
                targetInput = new TargetInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("excepturi", "voluptatibus");
                        put("nostrum", "sapiente");
                        put("quisquam", "saepe");
                        put("ea", "impedit");
                    }};
                    anthosCluster = new AnthosCluster() {{
                        membership = "corporis";
                    }};;
                    description = "veniam";
                    etag = "aliquid";
                    executionConfigs = new org.openapis.openapi.models.shared.ExecutionConfig[]{{
                        add(new ExecutionConfig() {{
                            artifactStorage = "magnam";
                            defaultPool = new DefaultPool() {{
                                artifactStorage = "ea";
                                serviceAccount = "quo";
                            }};
                            executionTimeout = "consectetur";
                            privatePool = new PrivatePool() {{
                                artifactStorage = "recusandae";
                                serviceAccount = "aspernatur";
                                workerPool = "minima";
                            }};
                            serviceAccount = "eaque";
                            usages = new org.openapis.openapi.models.shared.ExecutionConfigUsagesEnum[]{{
                                add(ExecutionConfigUsagesEnum.DEPLOY),
                                add(ExecutionConfigUsagesEnum.EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED),
                                add(ExecutionConfigUsagesEnum.EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED),
                                add(ExecutionConfigUsagesEnum.DEPLOY),
                            }};
                            workerPool = "impedit";
                        }}),
                    }};
                    gke = new GkeCluster() {{
                        cluster = "aliquam";
                        internalIp = false;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("accusamus", "inventore");
                    }};
                    multiTarget = new MultiTarget() {{
                        targetIds = new String[]{{
                            add("et"),
                            add("dolorum"),
                        }};
                    }};;
                    name = "Clark Franecki";
                    requireApproval = false;
                    run = new CloudRunLocation() {{
                        location = "nobis";
                    }};;
                }};;
                accessToken = "quas";
                alt = AltEnum.PROTO;
                callback = "nulla";
                fields = "voluptas";
                key = "libero";
                oauthToken = "quasi";
                prettyPrint = false;
                quotaUser = "tempora";
                requestId = "numquam";
                targetId = "explicabo";
                uploadType = "provident";
                uploadProtocol = "ipsa";
                validateOnly = false;
            }};            

            ClouddeployProjectsLocationsTargetsCreateResponse res = sdk.projects.clouddeployProjectsLocationsTargetsCreate(req, new ClouddeployProjectsLocationsTargetsCreateSecurity("molestiae", "magnam") {{
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

## clouddeployProjectsLocationsTargetsDelete

Deletes a single Target.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsDeleteRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsDeleteResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsDeleteSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsTargetsDeleteRequest req = new ClouddeployProjectsLocationsTargetsDeleteRequest("odio") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "esse";
                allowMissing = false;
                alt = AltEnum.MEDIA;
                callback = "rem";
                etag = "fuga";
                fields = "reprehenderit";
                key = "quidem";
                oauthToken = "fugiat";
                prettyPrint = false;
                quotaUser = "ut";
                requestId = "eum";
                uploadType = "suscipit";
                uploadProtocol = "assumenda";
                validateOnly = false;
            }};            

            ClouddeployProjectsLocationsTargetsDeleteResponse res = sdk.projects.clouddeployProjectsLocationsTargetsDelete(req, new ClouddeployProjectsLocationsTargetsDeleteSecurity("eos", "praesentium") {{
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

## clouddeployProjectsLocationsTargetsGet

Gets details of a single Target.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsGetRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsGetResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsGetSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsTargetsGetRequest req = new ClouddeployProjectsLocationsTargetsGetRequest("quisquam") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "ipsa";
                alt = AltEnum.MEDIA;
                callback = "quidem";
                fields = "neque";
                key = "quo";
                oauthToken = "illum";
                prettyPrint = false;
                quotaUser = "quo";
                uploadType = "fuga";
                uploadProtocol = "eius";
            }};            

            ClouddeployProjectsLocationsTargetsGetResponse res = sdk.projects.clouddeployProjectsLocationsTargetsGet(req, new ClouddeployProjectsLocationsTargetsGetSecurity("eos", "voluptas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.target != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsTargetsGetIamPolicy

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsGetIamPolicyRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsGetIamPolicyResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsGetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsTargetsGetIamPolicyRequest req = new ClouddeployProjectsLocationsTargetsGetIamPolicyRequest("ab") {{
                dollarXgafv = XgafvEnum.TWO;
                accessToken = "consequatur";
                alt = AltEnum.JSON;
                callback = "debitis";
                fields = "ipsam";
                key = "aspernatur";
                oauthToken = "sequi";
                optionsRequestedPolicyVersion = 779192L;
                prettyPrint = false;
                quotaUser = "esse";
                uploadType = "recusandae";
                uploadProtocol = "aperiam";
            }};            

            ClouddeployProjectsLocationsTargetsGetIamPolicyResponse res = sdk.projects.clouddeployProjectsLocationsTargetsGetIamPolicy(req, new ClouddeployProjectsLocationsTargetsGetIamPolicySecurity("distinctio", "quod") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsTargetsList

Lists Targets in a given project and location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsListRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsListResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsListSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsTargetsListRequest req = new ClouddeployProjectsLocationsTargetsListRequest("dignissimos") {{
                dollarXgafv = XgafvEnum.ONE;
                accessToken = "nihil";
                alt = AltEnum.MEDIA;
                callback = "accusamus";
                fields = "aliquam";
                filter = "odio";
                key = "occaecati";
                oauthToken = "commodi";
                orderBy = "sapiente";
                pageSize = 174112L;
                pageToken = "deserunt";
                prettyPrint = false;
                quotaUser = "molestiae";
                uploadType = "accusantium";
                uploadProtocol = "porro";
            }};            

            ClouddeployProjectsLocationsTargetsListResponse res = sdk.projects.clouddeployProjectsLocationsTargetsList(req, new ClouddeployProjectsLocationsTargetsListSecurity("eum", "quas") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.listTargetsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsTargetsPatch

Updates the parameters of a single Target.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsPatchRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsPatchResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsPatchSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AnthosCluster;
import org.openapis.openapi.models.shared.CloudRunLocation;
import org.openapis.openapi.models.shared.DefaultPool;
import org.openapis.openapi.models.shared.ExecutionConfig;
import org.openapis.openapi.models.shared.ExecutionConfigUsagesEnum;
import org.openapis.openapi.models.shared.GkeCluster;
import org.openapis.openapi.models.shared.MultiTarget;
import org.openapis.openapi.models.shared.PrivatePool;
import org.openapis.openapi.models.shared.TargetInput;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsTargetsPatchRequest req = new ClouddeployProjectsLocationsTargetsPatchRequest("praesentium") {{
                dollarXgafv = XgafvEnum.ONE;
                targetInput = new TargetInput() {{
                    annotations = new java.util.HashMap<String, String>() {{
                        put("fugit", "fuga");
                        put("mollitia", "incidunt");
                        put("atque", "explicabo");
                    }};
                    anthosCluster = new AnthosCluster() {{
                        membership = "minima";
                    }};;
                    description = "nisi";
                    etag = "fugit";
                    executionConfigs = new org.openapis.openapi.models.shared.ExecutionConfig[]{{
                        add(new ExecutionConfig() {{
                            artifactStorage = "consequuntur";
                            defaultPool = new DefaultPool() {{
                                artifactStorage = "ratione";
                                serviceAccount = "explicabo";
                            }};
                            executionTimeout = "saepe";
                            privatePool = new PrivatePool() {{
                                artifactStorage = "occaecati";
                                serviceAccount = "atque";
                                workerPool = "et";
                            }};
                            serviceAccount = "esse";
                            usages = new org.openapis.openapi.models.shared.ExecutionConfigUsagesEnum[]{{
                                add(ExecutionConfigUsagesEnum.VERIFY),
                                add(ExecutionConfigUsagesEnum.EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED),
                                add(ExecutionConfigUsagesEnum.RENDER),
                                add(ExecutionConfigUsagesEnum.VERIFY),
                            }};
                            workerPool = "nam";
                        }}),
                        add(new ExecutionConfig() {{
                            artifactStorage = "vero";
                            defaultPool = new DefaultPool() {{
                                artifactStorage = "aliquid";
                                serviceAccount = "quasi";
                            }};
                            executionTimeout = "saepe";
                            privatePool = new PrivatePool() {{
                                artifactStorage = "vel";
                                serviceAccount = "harum";
                                workerPool = "molestiae";
                            }};
                            serviceAccount = "rerum";
                            usages = new org.openapis.openapi.models.shared.ExecutionConfigUsagesEnum[]{{
                                add(ExecutionConfigUsagesEnum.RENDER),
                                add(ExecutionConfigUsagesEnum.DEPLOY),
                                add(ExecutionConfigUsagesEnum.VERIFY),
                            }};
                            workerPool = "sit";
                        }}),
                        add(new ExecutionConfig() {{
                            artifactStorage = "culpa";
                            defaultPool = new DefaultPool() {{
                                artifactStorage = "tempore";
                                serviceAccount = "adipisci";
                            }};
                            executionTimeout = "cumque";
                            privatePool = new PrivatePool() {{
                                artifactStorage = "consequuntur";
                                serviceAccount = "consequatur";
                                workerPool = "minus";
                            }};
                            serviceAccount = "quaerat";
                            usages = new org.openapis.openapi.models.shared.ExecutionConfigUsagesEnum[]{{
                                add(ExecutionConfigUsagesEnum.EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED),
                                add(ExecutionConfigUsagesEnum.RENDER),
                                add(ExecutionConfigUsagesEnum.DEPLOY),
                                add(ExecutionConfigUsagesEnum.DEPLOY),
                            }};
                            workerPool = "a";
                        }}),
                        add(new ExecutionConfig() {{
                            artifactStorage = "nulla";
                            defaultPool = new DefaultPool() {{
                                artifactStorage = "quas";
                                serviceAccount = "esse";
                            }};
                            executionTimeout = "quasi";
                            privatePool = new PrivatePool() {{
                                artifactStorage = "a";
                                serviceAccount = "error";
                                workerPool = "sint";
                            }};
                            serviceAccount = "pariatur";
                            usages = new org.openapis.openapi.models.shared.ExecutionConfigUsagesEnum[]{{
                                add(ExecutionConfigUsagesEnum.EXECUTION_ENVIRONMENT_USAGE_UNSPECIFIED),
                                add(ExecutionConfigUsagesEnum.VERIFY),
                                add(ExecutionConfigUsagesEnum.VERIFY),
                                add(ExecutionConfigUsagesEnum.VERIFY),
                            }};
                            workerPool = "veritatis";
                        }}),
                    }};
                    gke = new GkeCluster() {{
                        cluster = "consequuntur";
                        internalIp = false;
                    }};;
                    labels = new java.util.HashMap<String, String>() {{
                        put("similique", "culpa");
                    }};
                    multiTarget = new MultiTarget() {{
                        targetIds = new String[]{{
                            add("tenetur"),
                            add("quae"),
                        }};
                    }};;
                    name = "Chester King";
                    requireApproval = false;
                    run = new CloudRunLocation() {{
                        location = "illum";
                    }};;
                }};;
                accessToken = "soluta";
                allowMissing = false;
                alt = AltEnum.JSON;
                callback = "aliquam";
                fields = "sapiente";
                key = "dicta";
                oauthToken = "ullam";
                prettyPrint = false;
                quotaUser = "reprehenderit";
                requestId = "ullam";
                updateMask = "nisi";
                uploadType = "aut";
                uploadProtocol = "voluptatum";
                validateOnly = false;
            }};            

            ClouddeployProjectsLocationsTargetsPatchResponse res = sdk.projects.clouddeployProjectsLocationsTargetsPatch(req, new ClouddeployProjectsLocationsTargetsPatchSecurity("qui", "quibusdam") {{
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

## clouddeployProjectsLocationsTargetsSetIamPolicy

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsSetIamPolicyRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsSetIamPolicyResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsSetIamPolicySecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.AuditConfig;
import org.openapis.openapi.models.shared.AuditLogConfig;
import org.openapis.openapi.models.shared.AuditLogConfigLogTypeEnum;
import org.openapis.openapi.models.shared.Binding;
import org.openapis.openapi.models.shared.Expr;
import org.openapis.openapi.models.shared.Policy;
import org.openapis.openapi.models.shared.SetIamPolicyRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsTargetsSetIamPolicyRequest req = new ClouddeployProjectsLocationsTargetsSetIamPolicyRequest("ex") {{
                dollarXgafv = XgafvEnum.TWO;
                setIamPolicyRequest = new SetIamPolicyRequest() {{
                    policy = new Policy() {{
                        auditConfigs = new org.openapis.openapi.models.shared.AuditConfig[]{{
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("omnis"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.DATA_READ;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("at"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ipsa"),
                                            add("minima"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "consectetur";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("temporibus"),
                                            add("accusantium"),
                                            add("rem"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "laudantium";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("ab"),
                                            add("corrupti"),
                                            add("non"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("occaecati"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.ADMIN_READ;
                                    }}),
                                }};
                                service = "impedit";
                            }}),
                            add(new AuditConfig() {{
                                auditLogConfigs = new org.openapis.openapi.models.shared.AuditLogConfig[]{{
                                    add(new AuditLogConfig() {{
                                        exemptedMembers = new String[]{{
                                            add("aut"),
                                            add("dignissimos"),
                                        }};
                                        logType = AuditLogConfigLogTypeEnum.LOG_TYPE_UNSPECIFIED;
                                    }}),
                                }};
                                service = "maiores";
                            }}),
                        }};
                        bindings = new org.openapis.openapi.models.shared.Binding[]{{
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "velit";
                                    expression = "voluptatibus";
                                    location = "voluptas";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("ea"),
                                }};
                                role = "quaerat";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "consequuntur";
                                    expression = "repellendus";
                                    location = "officia";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("officia"),
                                    add("asperiores"),
                                }};
                                role = "nemo";
                            }}),
                            add(new Binding() {{
                                condition = new Expr() {{
                                    description = "quae";
                                    expression = "quaerat";
                                    location = "porro";
                                    title = "Dr.";
                                }};
                                members = new String[]{{
                                    add("ab"),
                                    add("adipisci"),
                                }};
                                role = "fuga";
                            }}),
                        }};
                        etag = "id";
                        version = 380729;
                    }};;
                    updateMask = "velit";
                }};;
                accessToken = "culpa";
                alt = AltEnum.MEDIA;
                callback = "recusandae";
                fields = "totam";
                key = "fugiat";
                oauthToken = "vel";
                prettyPrint = false;
                quotaUser = "ducimus";
                uploadType = "quos";
                uploadProtocol = "vel";
            }};            

            ClouddeployProjectsLocationsTargetsSetIamPolicyResponse res = sdk.projects.clouddeployProjectsLocationsTargetsSetIamPolicy(req, new ClouddeployProjectsLocationsTargetsSetIamPolicySecurity("labore", "possimus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.policy != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clouddeployProjectsLocationsTargetsTestIamPermissions

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse;
import org.openapis.openapi.models.operations.ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity;
import org.openapis.openapi.models.shared.AltEnum;
import org.openapis.openapi.models.shared.TestIamPermissionsRequest;
import org.openapis.openapi.models.shared.XgafvEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest req = new ClouddeployProjectsLocationsTargetsTestIamPermissionsRequest("facilis") {{
                dollarXgafv = XgafvEnum.TWO;
                testIamPermissionsRequest = new TestIamPermissionsRequest() {{
                    permissions = new String[]{{
                        add("in"),
                        add("corporis"),
                    }};
                }};;
                accessToken = "reiciendis";
                alt = AltEnum.PROTO;
                callback = "nemo";
                fields = "recusandae";
                key = "aliquid";
                oauthToken = "aperiam";
                prettyPrint = false;
                quotaUser = "cum";
                uploadType = "consectetur";
                uploadProtocol = "in";
            }};            

            ClouddeployProjectsLocationsTargetsTestIamPermissionsResponse res = sdk.projects.clouddeployProjectsLocationsTargetsTestIamPermissions(req, new ClouddeployProjectsLocationsTargetsTestIamPermissionsSecurity("exercitationem", "earum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                oauth2c = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.testIamPermissionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
