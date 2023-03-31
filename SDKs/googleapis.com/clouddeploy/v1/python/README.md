# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/clouddeploy/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest(
    dollar_xgafv="2",
    delivery_pipeline_input=shared.DeliveryPipelineInput(
        annotations={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        condition=shared.PipelineCondition(
            pipeline_ready_condition=shared.PipelineReadyCondition(
                status=False,
                update_time="vel",
            ),
            targets_present_condition=shared.TargetsPresentCondition(
                missing_targets=[
                    "deserunt",
                    "suscipit",
                    "iure",
                ],
                status=False,
                update_time="magnam",
            ),
            targets_type_condition=shared.TargetsTypeCondition(
                error_details="debitis",
                status=False,
            ),
        ),
        description="ipsa",
        etag="delectus",
        labels={
            "suscipit": "molestiae",
            "minus": "placeat",
        },
        name="voluptatum",
        serial_pipeline=shared.SerialPipeline(
            stages=[
                shared.Stage(
                    profiles=[
                        "nisi",
                        "recusandae",
                        "temporibus",
                    ],
                    strategy=shared.Strategy(
                        canary=shared.Canary(
                            canary_deployment=shared.CanaryDeployment(
                                percentages=[
                                    337396,
                                ],
                                verify=False,
                            ),
                            custom_canary_deployment=shared.CustomCanaryDeployment(
                                phase_configs=[
                                    shared.PhaseConfig(
                                        percentage=648172,
                                        phase_id="perferendis",
                                        profiles=[
                                            "repellendus",
                                            "sapiente",
                                        ],
                                        verify=False,
                                    ),
                                ],
                            ),
                            runtime_config=shared.RuntimeConfig(
                                cloud_run=shared.CloudRunConfig(
                                    automatic_traffic_control=False,
                                ),
                                kubernetes=shared.KubernetesConfig(
                                    gateway_service_mesh=shared.GatewayServiceMesh(
                                        deployment="quo",
                                        http_route="odit",
                                        service="at",
                                    ),
                                    service_networking=shared.ServiceNetworking(
                                        deployment="at",
                                        service="maiores",
                                    ),
                                ),
                            ),
                        ),
                        standard=shared.Standard(
                            verify=False,
                        ),
                    ),
                    target_id="molestiae",
                ),
                shared.Stage(
                    profiles=[
                        "quod",
                        "esse",
                        "totam",
                        "porro",
                    ],
                    strategy=shared.Strategy(
                        canary=shared.Canary(
                            canary_deployment=shared.CanaryDeployment(
                                percentages=[
                                    118274,
                                    720633,
                                    639921,
                                ],
                                verify=False,
                            ),
                            custom_canary_deployment=shared.CustomCanaryDeployment(
                                phase_configs=[
                                    shared.PhaseConfig(
                                        percentage=143353,
                                        phase_id="deleniti",
                                        profiles=[
                                            "optio",
                                            "totam",
                                            "beatae",
                                            "commodi",
                                        ],
                                        verify=False,
                                    ),
                                    shared.PhaseConfig(
                                        percentage=473600,
                                        phase_id="modi",
                                        profiles=[
                                            "impedit",
                                        ],
                                        verify=False,
                                    ),
                                    shared.PhaseConfig(
                                        percentage=736918,
                                        phase_id="esse",
                                        profiles=[
                                            "excepturi",
                                        ],
                                        verify=False,
                                    ),
                                ],
                            ),
                            runtime_config=shared.RuntimeConfig(
                                cloud_run=shared.CloudRunConfig(
                                    automatic_traffic_control=False,
                                ),
                                kubernetes=shared.KubernetesConfig(
                                    gateway_service_mesh=shared.GatewayServiceMesh(
                                        deployment="aspernatur",
                                        http_route="perferendis",
                                        service="ad",
                                    ),
                                    service_networking=shared.ServiceNetworking(
                                        deployment="natus",
                                        service="sed",
                                    ),
                                ),
                            ),
                        ),
                        standard=shared.Standard(
                            verify=False,
                        ),
                    ),
                    target_id="iste",
                ),
            ],
        ),
        suspended=False,
    ),
    access_token="dolor",
    alt="media",
    callback="laboriosam",
    delivery_pipeline_id="hic",
    fields_="saepe",
    key="fuga",
    oauth_token="in",
    parent="corporis",
    pretty_print=False,
    quota_user="iste",
    request_id="iure",
    upload_type="saepe",
    upload_protocol="quidem",
    validate_only=False,
)
    
res = s.projects.clouddeploy_projects_locations_delivery_pipelines_create(req, operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `clouddeploy_projects_locations_delivery_pipelines_create` - Creates a new DeliveryPipeline in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_list` - Lists DeliveryPipelines in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_abandon` - Abandons a Release in the Delivery Pipeline.
* `clouddeploy_projects_locations_delivery_pipelines_releases_create` - Creates a new Release in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_list` - Lists Releases in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_advance` - Advances a Rollout in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_approve` - Approves a Rollout.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_create` - Creates a new Rollout in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_ignore_job` - Ignores the specified Job in a Rollout.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_job_runs_list` - Lists JobRuns in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_job_runs_terminate` - Terminates a Job Run in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_list` - Lists Rollouts in a given project and location.
* `clouddeploy_projects_locations_delivery_pipelines_releases_rollouts_retry_job` - Retries the specified Job in a Rollout.
* `clouddeploy_projects_locations_list` - Lists information about the supported locations for this service.
* `clouddeploy_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `clouddeploy_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `clouddeploy_projects_locations_targets_create` - Creates a new Target in a given project and location.
* `clouddeploy_projects_locations_targets_delete` - Deletes a single Target.
* `clouddeploy_projects_locations_targets_get` - Gets details of a single Target.
* `clouddeploy_projects_locations_targets_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `clouddeploy_projects_locations_targets_list` - Lists Targets in a given project and location.
* `clouddeploy_projects_locations_targets_patch` - Updates the parameters of a single Target.
* `clouddeploy_projects_locations_targets_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `clouddeploy_projects_locations_targets_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
