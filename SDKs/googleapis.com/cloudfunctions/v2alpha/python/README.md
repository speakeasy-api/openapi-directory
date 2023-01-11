# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudfunctionsProjectsLocationsFunctionsCreateRequest(
    security=operations.CloudfunctionsProjectsLocationsFunctionsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudfunctionsProjectsLocationsFunctionsCreatePathParams(
        parent="voluptatem",
    ),
    query_params=operations.CloudfunctionsProjectsLocationsFunctionsCreateQueryParams(
        dollar_xgafv="2",
        access_token="consequatur",
        alt="json",
        callback="vel",
        fields="sequi",
        function_id="repellendus",
        key="non",
        oauth_token="cum",
        pretty_print=True,
        quota_user="earum",
        upload_type="consectetur",
        upload_protocol="vero",
    ),
    request=shared.FunctionInput(
        build_config=shared.BuildConfigInput(
            buildpack_stack="perspiciatis",
            docker_registry="CONTAINER_REGISTRY",
            docker_repository="facilis",
            entry_point="id",
            environment_variables={
                "quam": "odio",
                "excepturi": "aspernatur",
                "ducimus": "ut",
            },
            runtime="expedita",
            source=shared.Source(
                repo_source=shared.RepoSource(
                    branch_name="sequi",
                    commit_sha="enim",
                    dir="explicabo",
                    invert_regex=True,
                    project_id="deleniti",
                    repo_name="consequatur",
                    tag_name="facere",
                ),
                storage_source=shared.StorageSource(
                    bucket="animi",
                    generation="ducimus",
                    object="sapiente",
                ),
            ),
            source_provenance=shared.SourceProvenance(
                resolved_repo_source=shared.RepoSource(
                    branch_name="ipsum",
                    commit_sha="atque",
                    dir="nisi",
                    invert_regex=False,
                    project_id="autem",
                    repo_name="ipsam",
                    tag_name="rerum",
                ),
                resolved_storage_source=shared.StorageSource(
                    bucket="reiciendis",
                    generation="velit",
                    object="et",
                ),
            ),
            worker_pool="ullam",
        ),
        description="impedit",
        environment="GEN_1",
        event_trigger=shared.EventTriggerInput(
            channel="est",
            event_filters=[
                shared.EventFilter(
                    attribute="asperiores",
                    operator="alias",
                    value="necessitatibus",
                ),
            ],
            event_type="et",
            pubsub_topic="perspiciatis",
            retry_policy="RETRY_POLICY_UNSPECIFIED",
            service_account_email="non",
            trigger_region="voluptas",
        ),
        labels={
            "aspernatur": "facilis",
            "et": "doloribus",
        },
        name="excepturi",
        service_config=shared.ServiceConfigInput(
            all_traffic_on_latest_revision=True,
            available_cpu="soluta",
            available_memory="similique",
            environment_variables={
                "animi": "quisquam",
                "enim": "incidunt",
            },
            ingress_settings="ALLOW_ALL",
            max_instance_count=7689307747697478495,
            max_instance_request_concurrency=6614803028872981226,
            min_instance_count=6072307249965416689,
            secret_environment_variables=[
                shared.SecretEnvVar(
                    key="hic",
                    project_id="recusandae",
                    secret="numquam",
                    version="omnis",
                ),
                shared.SecretEnvVar(
                    key="necessitatibus",
                    project_id="culpa",
                    secret="cum",
                    version="fugiat",
                ),
                shared.SecretEnvVar(
                    key="ut",
                    project_id="incidunt",
                    secret="sit",
                    version="sint",
                ),
            ],
            secret_volumes=[
                shared.SecretVolume(
                    mount_path="vero",
                    project_id="voluptatum",
                    secret="quo",
                    versions=[
                        shared.SecretVersion(
                            path="ex",
                            version="similique",
                        ),
                        shared.SecretVersion(
                            path="aut",
                            version="aspernatur",
                        ),
                    ],
                ),
            ],
            security_level="SECURE_OPTIONAL",
            service_account_email="voluptas",
            timeout_seconds=2562921366260505538,
            vpc_connector="molestias",
            vpc_connector_egress_settings="ALL_TRAFFIC",
        ),
    ),
)
    
res = s.projects.cloudfunctions_projects_locations_functions_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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
* `cloudfunctions_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `cloudfunctions_projects_locations_runtimes_list` - Returns a list of runtimes that are supported for the requested project.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
