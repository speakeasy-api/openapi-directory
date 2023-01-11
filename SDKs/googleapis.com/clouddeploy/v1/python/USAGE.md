<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateRequest(
    security=operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ClouddeployProjectsLocationsDeliveryPipelinesCreatePathParams(
        parent="in",
    ),
    query_params=operations.ClouddeployProjectsLocationsDeliveryPipelinesCreateQueryParams(
        dollar_xgafv="2",
        access_token="rerum",
        alt="proto",
        callback="vero",
        delivery_pipeline_id="et",
        fields="dolor",
        key="quibusdam",
        oauth_token="sit",
        pretty_print=True,
        quota_user="eum",
        request_id="natus",
        upload_type="ipsa",
        upload_protocol="et",
        validate_only=False,
    ),
    request=shared.DeliveryPipelineInput(
        annotations={
            "sapiente": "iure",
        },
        condition=shared.PipelineCondition(
            pipeline_ready_condition=shared.PipelineReadyCondition(
                status=True,
                update_time="omnis",
            ),
            targets_present_condition=shared.TargetsPresentCondition(
                missing_targets=[
                    "fugit",
                ],
                status=True,
                update_time="inventore",
            ),
        ),
        description="a",
        etag="laboriosam",
        labels={
            "voluptates": "laborum",
            "eligendi": "est",
        },
        name="inventore",
        serial_pipeline=shared.SerialPipeline(
            stages=[
                shared.Stage(
                    profiles=[
                        "sapiente",
                    ],
                    strategy=shared.Strategy(
                        standard=shared.Standard(
                            verify=False,
                        ),
                    ),
                    target_id="aliquam",
                ),
                shared.Stage(
                    profiles=[
                        "dolores",
                        "vel",
                        "cumque",
                    ],
                    strategy=shared.Strategy(
                        standard=shared.Standard(
                            verify=True,
                        ),
                    ),
                    target_id="nihil",
                ),
            ],
        ),
        suspended=True,
    ),
)
    
res = s.projects.clouddeploy_projects_locations_delivery_pipelines_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->