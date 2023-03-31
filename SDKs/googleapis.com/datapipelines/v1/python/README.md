# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/datapipelines/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatapipelinesProjectsLocationsPipelinesCreateRequest(
    dollar_xgafv="2",
    google_cloud_datapipelines_v1_pipeline_input=shared.GoogleCloudDatapipelinesV1PipelineInput(
        display_name="provident",
        name="distinctio",
        pipeline_sources={
            "unde": "nulla",
            "corrupti": "illum",
            "vel": "error",
            "deserunt": "suscipit",
        },
        schedule_info=shared.GoogleCloudDatapipelinesV1ScheduleSpecInput(
            schedule="iure",
            time_zone="magnam",
        ),
        scheduler_service_account_email="debitis",
        state="STATE_UNSPECIFIED",
        type="PIPELINE_TYPE_STREAMING",
        workload=shared.GoogleCloudDatapipelinesV1Workload(
            dataflow_flex_template_request=shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateRequest(
                launch_parameter=shared.GoogleCloudDatapipelinesV1LaunchFlexTemplateParameter(
                    container_spec_gcs_path="tempora",
                    environment=shared.GoogleCloudDatapipelinesV1FlexTemplateRuntimeEnvironment(
                        additional_experiments=[
                            "molestiae",
                            "minus",
                        ],
                        additional_user_labels={
                            "voluptatum": "iusto",
                            "excepturi": "nisi",
                            "recusandae": "temporibus",
                            "ab": "quis",
                        },
                        enable_streaming_engine=False,
                        flexrs_goal="FLEXRS_UNSPECIFIED",
                        ip_configuration="WORKER_IP_PUBLIC",
                        kms_key_name="perferendis",
                        machine_type="ipsam",
                        max_workers=832620,
                        network="sapiente",
                        num_workers=778157,
                        service_account_email="odit",
                        subnetwork="at",
                        temp_location="at",
                        worker_region="maiores",
                        worker_zone="molestiae",
                        zone="quod",
                    ),
                    job_name="quod",
                    launch_options={
                        "totam": "porro",
                        "dolorum": "dicta",
                    },
                    parameters={
                        "officia": "occaecati",
                        "fugit": "deleniti",
                        "hic": "optio",
                    },
                    transform_name_mappings={
                        "beatae": "commodi",
                        "molestiae": "modi",
                        "qui": "impedit",
                    },
                    update=False,
                ),
                location="cum",
                project_id="esse",
                validate_only=False,
            ),
            dataflow_launch_template_request=shared.GoogleCloudDatapipelinesV1LaunchTemplateRequest(
                gcs_path="ipsum",
                launch_parameters=shared.GoogleCloudDatapipelinesV1LaunchTemplateParameters(
                    environment=shared.GoogleCloudDatapipelinesV1RuntimeEnvironment(
                        additional_experiments=[
                            "aspernatur",
                            "perferendis",
                            "ad",
                        ],
                        additional_user_labels={
                            "sed": "iste",
                            "dolor": "natus",
                            "laboriosam": "hic",
                        },
                        bypass_temp_dir_validation=False,
                        enable_streaming_engine=False,
                        ip_configuration="WORKER_IP_PRIVATE",
                        kms_key_name="fuga",
                        machine_type="in",
                        max_workers=359508,
                        network="iste",
                        num_workers=437032,
                        service_account_email="saepe",
                        subnetwork="quidem",
                        temp_location="architecto",
                        worker_region="ipsa",
                        worker_zone="reiciendis",
                        zone="est",
                    ),
                    job_name="mollitia",
                    parameters={
                        "dolores": "dolorem",
                        "corporis": "explicabo",
                        "nobis": "enim",
                    },
                    transform_name_mapping={
                        "nemo": "minima",
                        "excepturi": "accusantium",
                        "iure": "culpa",
                    },
                    update=False,
                ),
                location="doloribus",
                project_id="sapiente",
                validate_only=False,
            ),
        ),
    ),
    access_token="architecto",
    alt="media",
    callback="dolorem",
    fields_="culpa",
    key="consequuntur",
    oauth_token="repellat",
    parent="mollitia",
    pretty_print=False,
    quota_user="occaecati",
    upload_type="numquam",
    upload_protocol="commodi",
)
    
res = s.projects.datapipelines_projects_locations_pipelines_create(req, operations.DatapipelinesProjectsLocationsPipelinesCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_datapipelines_v1_pipeline is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `datapipelines_projects_locations_pipelines_create` - Creates a pipeline. For a batch pipeline, you can pass scheduler information. Data Pipelines uses the scheduler information to create an internal scheduler that runs jobs periodically. If the internal scheduler is not configured, you can use RunPipeline to run jobs.
* `datapipelines_projects_locations_pipelines_delete` - Deletes a pipeline. If a scheduler job is attached to the pipeline, it will be deleted.
* `datapipelines_projects_locations_pipelines_get` - Looks up a single pipeline. Returns a "NOT_FOUND" error if no such pipeline exists. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `datapipelines_projects_locations_pipelines_jobs_list` - Lists jobs for a given pipeline. Throws a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `datapipelines_projects_locations_pipelines_list` - Lists pipelines. Returns a "FORBIDDEN" error if the caller doesn't have permission to access it.
* `datapipelines_projects_locations_pipelines_patch` - Updates a pipeline. If successful, the updated Pipeline is returned. Returns `NOT_FOUND` if the pipeline doesn't exist. If UpdatePipeline does not return successfully, you can retry the UpdatePipeline request until you receive a successful response.
* `datapipelines_projects_locations_pipelines_run` - Creates a job for the specified pipeline directly. You can use this method when the internal scheduler is not configured and you want to trigger the job directly or through an external system. Returns a "NOT_FOUND" error if the pipeline doesn't exist. Returns a "FORBIDDEN" error if the user doesn't have permission to access the pipeline or run jobs for the pipeline.
* `datapipelines_projects_locations_pipelines_stop` - Freezes pipeline execution permanently. If there's a corresponding scheduler entry, it's deleted, and the pipeline state is changed to "ARCHIVED". However, pipeline metadata is retained.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
