# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/workloadmanager/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WorkloadmanagerProjectsLocationsEvaluationsCreateRequest(
    dollar_xgafv="2",
    evaluation_input=shared.EvaluationInput(
        description="provident",
        labels={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
        name="error",
        resource_filter=shared.ResourceFilter(
            gce_instance_filter=shared.GceInstanceFilter(
                service_accounts=[
                    "suscipit",
                    "iure",
                    "magnam",
                ],
            ),
            inclusion_labels={
                "ipsa": "delectus",
                "tempora": "suscipit",
                "molestiae": "minus",
                "placeat": "voluptatum",
            },
            resource_id_patterns=[
                "excepturi",
                "nisi",
            ],
            scopes=[
                "temporibus",
                "ab",
                "quis",
                "veritatis",
            ],
        ),
        resource_status=shared.ResourceStatus(
            rules_newer_versions=[
                "perferendis",
                "ipsam",
                "repellendus",
            ],
            state="DELETING",
        ),
        rule_names=[
            "odit",
            "at",
            "at",
            "maiores",
        ],
    ),
    access_token="molestiae",
    alt="proto",
    callback="quod",
    evaluation_id="esse",
    fields_="totam",
    key="porro",
    oauth_token="dolorum",
    parent="dicta",
    pretty_print=False,
    quota_user="nam",
    request_id="officia",
    upload_type="occaecati",
    upload_protocol="fugit",
)
    
res = s.projects.workloadmanager_projects_locations_evaluations_create(req, operations.WorkloadmanagerProjectsLocationsEvaluationsCreateSecurity(
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

* `workloadmanager_projects_locations_evaluations_create` - Creates a new Evaluation in a given project and location.
* `workloadmanager_projects_locations_evaluations_list` - Lists Evaluations in a given project and location.
* `workloadmanager_projects_locations_insights_write_insight` - Write the data insights to workload manager data warehouse.
* `workloadmanager_projects_locations_list` - Lists information about the supported locations for this service.
* `workloadmanager_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `workloadmanager_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `workloadmanager_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `workloadmanager_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
