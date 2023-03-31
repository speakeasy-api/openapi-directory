# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/cloudfunctions/v2alpha/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest(
    dollar_xgafv="2",
    function_input=shared.FunctionInput(
        build_config=shared.BuildConfigInput(
            buildpack_stack="provident",
            docker_registry="ARTIFACT_REGISTRY",
            docker_repository="quibusdam",
            entry_point="unde",
            environment_variables={
                "corrupti": "illum",
                "vel": "error",
                "deserunt": "suscipit",
                "iure": "magnam",
            },
            runtime="debitis",
            source=shared.Source(
                repo_source=shared.RepoSource(
                    branch_name="ipsa",
                    commit_sha="delectus",
                    dir="tempora",
                    invert_regex=False,
                    project_id="suscipit",
                    repo_name="molestiae",
                    tag_name="minus",
                ),
                storage_source=shared.StorageSource(
                    bucket="placeat",
                    generation="voluptatum",
                    object="iusto",
                ),
            ),
            source_provenance=shared.SourceProvenance(
                resolved_repo_source=shared.RepoSource(
                    branch_name="excepturi",
                    commit_sha="nisi",
                    dir="recusandae",
                    invert_regex=False,
                    project_id="temporibus",
                    repo_name="ab",
                    tag_name="quis",
                ),
                resolved_storage_source=shared.StorageSource(
                    bucket="veritatis",
                    generation="deserunt",
                    object="perferendis",
                ),
            ),
            worker_pool="ipsam",
        ),
        description="repellendus",
        environment="GEN_2",
        event_trigger=shared.EventTriggerInput(
            channel="quo",
            event_filters=[
                shared.EventFilter(
                    attribute="at",
                    operator="at",
                    value="maiores",
                ),
            ],
            event_type="molestiae",
            pubsub_topic="quod",
            retry_policy="RETRY_POLICY_RETRY",
            service_account_email="esse",
            trigger_region="totam",
        ),
        kms_key_name="porro",
        labels={
            "dicta": "nam",
            "officia": "occaecati",
            "fugit": "deleniti",
        },
        name="hic",
        service_config=shared.ServiceConfigInput(
            all_traffic_on_latest_revision=False,
            available_cpu="optio",
            available_memory="totam",
            environment_variables={
                "commodi": "molestiae",
            },
            ingress_settings="ALLOW_ALL",
            max_instance_count=186332,
            max_instance_request_concurrency=774234,
            min_instance_count=736918,
            secret_environment_variables=[
                shared.SecretEnvVar(
                    key="ipsum",
                    project_id="excepturi",
                    secret="aspernatur",
                    version="perferendis",
                ),
                shared.SecretEnvVar(
                    key="ad",
                    project_id="natus",
                    secret="sed",
                    version="iste",
                ),
            ],
            secret_volumes=[
                shared.SecretVolume(
                    mount_path="natus",
                    project_id="laboriosam",
                    secret="hic",
                    versions=[
                        shared.SecretVersion(
                            path="fuga",
                            version="in",
                        ),
                        shared.SecretVersion(
                            path="corporis",
                            version="iste",
                        ),
                        shared.SecretVersion(
                            path="iure",
                            version="saepe",
                        ),
                        shared.SecretVersion(
                            path="quidem",
                            version="architecto",
                        ),
                    ],
                ),
            ],
            security_level="SECURITY_LEVEL_UNSPECIFIED",
            service_account_email="reiciendis",
            timeout_seconds=666767,
            vpc_connector="mollitia",
            vpc_connector_egress_settings="ALL_TRAFFIC",
        ),
    ),
    access_token="dolores",
    alt="json",
    callback="corporis",
    fields_="explicabo",
    function_id="nobis",
    key="enim",
    oauth_token="omnis",
    parent="nemo",
    pretty_print=False,
    quota_user="minima",
    upload_type="excepturi",
    upload_protocol="accusantium",
)
    
res = s.projects.cloudfunctions_projects_locations_functions_create(req, operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity(
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

* `cloudfunctions_projects_locations_functions_create` - Creates a new function. If a function with the given name already exists in the specified project, the long running operation will return `ALREADY_EXISTS` error.
* `cloudfunctions_projects_locations_functions_delete` - Deletes a function with the given name from the specified project. If the given function is used by some trigger, the trigger will be updated to remove this function.
* `cloudfunctions_projects_locations_functions_generate_download_url` - Returns a signed URL for downloading deployed function source code. The URL is only valid for a limited period and should be used within 30 minutes of generation. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls
* `cloudfunctions_projects_locations_functions_generate_upload_url` - Returns a signed URL for uploading a function source code. For more information about the signed URL usage see: https://cloud.google.com/storage/docs/access-control/signed-urls. Once the function source code upload is complete, the used signed URL should be provided in CreateFunction or UpdateFunction request as a reference to the function source code. When uploading source code to the generated signed URL, please follow these restrictions: * Source file type should be a zip file. * No credentials should be attached - the signed URLs provide access to the target bucket using internal service identity; if credentials were attached, the identity from the credentials would be used, but that identity does not have permissions to upload files to the URL. When making a HTTP PUT request, these two headers need to be specified: * `content-type: application/zip` And this header SHOULD NOT be specified: * `Authorization: Bearer YOUR_TOKEN`
* `cloudfunctions_projects_locations_functions_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudfunctions_projects_locations_functions_list` - Returns a list of functions that belong to the requested project.
* `cloudfunctions_projects_locations_functions_patch` - Updates existing function.
* `cloudfunctions_projects_locations_functions_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `cloudfunctions_projects_locations_functions_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `cloudfunctions_projects_locations_list` - Lists information about the supported locations for this service.
* `cloudfunctions_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `cloudfunctions_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `cloudfunctions_projects_locations_runtimes_list` - Returns a list of runtimes that are supported for the requested project.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
