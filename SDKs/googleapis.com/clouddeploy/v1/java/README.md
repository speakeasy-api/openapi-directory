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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [clouddeployProjectsLocationsDeliveryPipelinesCreate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinescreate) - Creates a new DeliveryPipeline in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelineslist) - Lists DeliveryPipelines in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesAbandon](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesabandon) - Abandons a Release in the Delivery Pipeline.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesCreate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasescreate) - Creates a new Release in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleaseslist) - Lists Releases in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsAdvance](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsadvance) - Advances a Rollout in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsApprove](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsapprove) - Approves a Rollout.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsCreate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutscreate) - Creates a new Rollout in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsIgnoreJob](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsignorejob) - Ignores the specified Job in a Rollout.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunslist) - Lists JobRuns in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsJobRunsTerminate](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsjobrunsterminate) - Terminates a Job Run in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsList](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutslist) - Lists Rollouts in a given project and location.
* [clouddeployProjectsLocationsDeliveryPipelinesReleasesRolloutsRetryJob](docs/projects/README.md#clouddeployprojectslocationsdeliverypipelinesreleasesrolloutsretryjob) - Retries the specified Job in a Rollout.
* [clouddeployProjectsLocationsList](docs/projects/README.md#clouddeployprojectslocationslist) - Lists information about the supported locations for this service.
* [clouddeployProjectsLocationsOperationsCancel](docs/projects/README.md#clouddeployprojectslocationsoperationscancel) - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* [clouddeployProjectsLocationsOperationsList](docs/projects/README.md#clouddeployprojectslocationsoperationslist) - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* [clouddeployProjectsLocationsTargetsCreate](docs/projects/README.md#clouddeployprojectslocationstargetscreate) - Creates a new Target in a given project and location.
* [clouddeployProjectsLocationsTargetsDelete](docs/projects/README.md#clouddeployprojectslocationstargetsdelete) - Deletes a single Target.
* [clouddeployProjectsLocationsTargetsGet](docs/projects/README.md#clouddeployprojectslocationstargetsget) - Gets details of a single Target.
* [clouddeployProjectsLocationsTargetsGetIamPolicy](docs/projects/README.md#clouddeployprojectslocationstargetsgetiampolicy) - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* [clouddeployProjectsLocationsTargetsList](docs/projects/README.md#clouddeployprojectslocationstargetslist) - Lists Targets in a given project and location.
* [clouddeployProjectsLocationsTargetsPatch](docs/projects/README.md#clouddeployprojectslocationstargetspatch) - Updates the parameters of a single Target.
* [clouddeployProjectsLocationsTargetsSetIamPolicy](docs/projects/README.md#clouddeployprojectslocationstargetssetiampolicy) - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* [clouddeployProjectsLocationsTargetsTestIamPermissions](docs/projects/README.md#clouddeployprojectslocationstargetstestiampermissions) - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
