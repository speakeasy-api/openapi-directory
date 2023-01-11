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
    
req = operations.RemotebuildexecutionProjectsInstancesCreateRequest(
    security=operations.RemotebuildexecutionProjectsInstancesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RemotebuildexecutionProjectsInstancesCreatePathParams(
        parent="ut",
    ),
    query_params=operations.RemotebuildexecutionProjectsInstancesCreateQueryParams(
        dollar_xgafv="2",
        access_token="est",
        alt="proto",
        callback="veritatis",
        fields="voluptas",
        key="doloribus",
        oauth_token="vel",
        pretty_print=False,
        quota_user="odit",
        upload_type="et",
        upload_protocol="mollitia",
    ),
    request=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaCreateInstanceRequest(
        instance=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaInstance(
            feature_policy=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicy(
                action_hermeticity="ACTION_HERMETICITY_ENFORCED",
                action_isolation="ACTION_ISOLATION_UNSPECIFIED",
                container_image_sources=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature(
                    allowed_values=[
                        "nulla",
                        "repudiandae",
                    ],
                    policy="RESTRICTED",
                ),
                docker_add_capabilities=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature(
                    allowed_values=[
                        "et",
                    ],
                    policy="RESTRICTED",
                ),
                docker_chroot_path=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature(
                    allowed_values=[
                        "dignissimos",
                    ],
                    policy="FORBIDDEN",
                ),
                docker_network=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature(
                    allowed_values=[
                        "id",
                        "sunt",
                    ],
                    policy="ALLOWED",
                ),
                docker_privileged=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature(
                    allowed_values=[
                        "magni",
                        "nihil",
                        "et",
                    ],
                    policy="ALLOWED",
                ),
                docker_run_as_container_provided_user=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature(
                    allowed_values=[
                        "est",
                        "optio",
                        "natus",
                    ],
                    policy="ALLOWED",
                ),
                docker_run_as_root=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature(
                    allowed_values=[
                        "numquam",
                        "aut",
                    ],
                    policy="FORBIDDEN",
                ),
                docker_runtime=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature(
                    allowed_values=[
                        "exercitationem",
                    ],
                    policy="ALLOWED",
                ),
                docker_sibling_containers=shared.GoogleDevtoolsRemotebuildexecutionAdminV1alphaFeaturePolicyFeature(
                    allowed_values=[
                        "quidem",
                        "quibusdam",
                    ],
                    policy="ALLOWED",
                ),
                linux_execution="LINUX_EXECUTION_HARDENED_GVISOR_OR_TERMINAL",
                linux_isolation="GVISOR",
                mac_execution="MAC_EXECUTION_UNSPECIFIED",
                vm_verification="VM_VERIFICATION_OFF",
                windows_execution="WINDOWS_EXECUTION_FORBIDDEN",
            ),
            location="sed",
            logging_enabled=True,
            name="alias",
            state="INACTIVE",
        ),
        instance_id="ut",
        parent="quos",
    ),
)
    
res = s.projects.remotebuildexecution_projects_instances_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `remotebuildexecution_projects_instances_create` - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
* `remotebuildexecution_projects_instances_list` - Lists instances in a project.
* `remotebuildexecution_projects_instances_test_notify` - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
* `remotebuildexecution_projects_instances_workerpools_create` - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
* `remotebuildexecution_projects_instances_workerpools_delete` - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
* `remotebuildexecution_projects_instances_workerpools_list` - Lists worker pools in an instance.
* `remotebuildexecution_projects_instances_workerpools_patch` - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
* `remotebuildexecution_projects_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
