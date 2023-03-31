# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/apigateway/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ApigatewayProjectsLocationsApisConfigsCreateRequest(
    dollar_xgafv="2",
    apigateway_api_config_input=shared.ApigatewayAPIConfigInput(
        display_name="provident",
        gateway_service_account="distinctio",
        grpc_services=[
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="unde",
                    path="nulla",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="illum",
                        path="vel",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="error",
                        path="deserunt",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="suscipit",
                        path="iure",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="magnam",
                    path="debitis",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="delectus",
                        path="tempora",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="suscipit",
                    path="molestiae",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="placeat",
                        path="voluptatum",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="iusto",
                        path="excepturi",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="nisi",
                        path="recusandae",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="temporibus",
                        path="ab",
                    ),
                ],
            ),
            shared.ApigatewayAPIConfigGrpcServiceDefinition(
                file_descriptor_set=shared.ApigatewayAPIConfigFile(
                    contents="quis",
                    path="veritatis",
                ),
                source=[
                    shared.ApigatewayAPIConfigFile(
                        contents="perferendis",
                        path="ipsam",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="repellendus",
                        path="sapiente",
                    ),
                    shared.ApigatewayAPIConfigFile(
                        contents="quo",
                        path="odit",
                    ),
                ],
            ),
        ],
        labels={
            "at": "maiores",
            "molestiae": "quod",
            "quod": "esse",
            "totam": "porro",
        },
        managed_service_configs=[
            shared.ApigatewayAPIConfigFile(
                contents="dicta",
                path="nam",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="officia",
                path="occaecati",
            ),
            shared.ApigatewayAPIConfigFile(
                contents="fugit",
                path="deleniti",
            ),
        ],
        openapi_documents=[
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="optio",
                    path="totam",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="beatae",
                    path="commodi",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="molestiae",
                    path="modi",
                ),
            ),
            shared.ApigatewayAPIConfigOpenAPIDocument(
                document=shared.ApigatewayAPIConfigFile(
                    contents="qui",
                    path="impedit",
                ),
            ),
        ],
    ),
    access_token="cum",
    alt="media",
    api_config_id="ipsum",
    callback="excepturi",
    fields_="aspernatur",
    key="perferendis",
    oauth_token="ad",
    parent="natus",
    pretty_print=False,
    quota_user="sed",
    upload_type="iste",
    upload_protocol="dolor",
)
    
res = s.projects.apigateway_projects_locations_apis_configs_create(req, operations.ApigatewayProjectsLocationsApisConfigsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.apigateway_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `apigateway_projects_locations_apis_configs_create` - Creates a new ApiConfig in a given project and location.
* `apigateway_projects_locations_apis_configs_list` - Lists ApiConfigs in a given project and location.
* `apigateway_projects_locations_apis_create` - Creates a new Api in a given project and location.
* `apigateway_projects_locations_apis_list` - Lists Apis in a given project and location.
* `apigateway_projects_locations_gateways_create` - Creates a new Gateway in a given project and location.
* `apigateway_projects_locations_gateways_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `apigateway_projects_locations_gateways_list` - Lists Gateways in a given project and location.
* `apigateway_projects_locations_gateways_patch` - Updates the parameters of a single Gateway.
* `apigateway_projects_locations_gateways_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `apigateway_projects_locations_gateways_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `apigateway_projects_locations_list` - Lists information about the supported locations for this service.
* `apigateway_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `apigateway_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `apigateway_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `apigateway_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
