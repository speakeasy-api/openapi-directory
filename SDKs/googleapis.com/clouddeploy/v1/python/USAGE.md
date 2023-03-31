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