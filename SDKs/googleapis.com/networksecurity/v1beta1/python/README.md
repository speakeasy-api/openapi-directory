# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/networksecurity/v1beta1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsRequest(
    dollar_xgafv="2",
    add_address_group_items_request=shared.AddAddressGroupItemsRequest(
        items=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        request_id="nulla",
    ),
    access_token="corrupti",
    address_group="illum",
    alt="media",
    callback="error",
    fields_="deserunt",
    key="suscipit",
    oauth_token="iure",
    pretty_print=False,
    quota_user="magnam",
    upload_type="debitis",
    upload_protocol="ipsa",
)
    
res = s.projects.networksecurity_projects_locations_address_groups_add_items(req, operations.NetworksecurityProjectsLocationsAddressGroupsAddItemsSecurity(
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

* `networksecurity_projects_locations_address_groups_add_items` - Adds items to an address group.
* `networksecurity_projects_locations_address_groups_clone_items` - Clones items from one address group to another.
* `networksecurity_projects_locations_address_groups_create` - Creates a new address group in a given project and location.
* `networksecurity_projects_locations_address_groups_list` - Lists address groups in a given project and location.
* `networksecurity_projects_locations_address_groups_list_references` - Lists references of an address group.
* `networksecurity_projects_locations_address_groups_remove_items` - Removes items from an address group.
* `networksecurity_projects_locations_authorization_policies_create` - Creates a new AuthorizationPolicy in a given project and location.
* `networksecurity_projects_locations_authorization_policies_list` - Lists AuthorizationPolicies in a given project and location.
* `networksecurity_projects_locations_client_tls_policies_create` - Creates a new ClientTlsPolicy in a given project and location.
* `networksecurity_projects_locations_client_tls_policies_list` - Lists ClientTlsPolicies in a given project and location.
* `networksecurity_projects_locations_gateway_security_policies_create` - Creates a new GatewaySecurityPolicy in a given project and location.
* `networksecurity_projects_locations_gateway_security_policies_list` - Lists GatewaySecurityPolicies in a given project and location.
* `networksecurity_projects_locations_gateway_security_policies_rules_create` - Creates a new GatewaySecurityPolicy in a given project and location.
* `networksecurity_projects_locations_gateway_security_policies_rules_list` - Lists GatewaySecurityPolicyRules in a given project and location.
* `networksecurity_projects_locations_list` - Lists information about the supported locations for this service.
* `networksecurity_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networksecurity_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `networksecurity_projects_locations_server_tls_policies_create` - Creates a new ServerTlsPolicy in a given project and location.
* `networksecurity_projects_locations_server_tls_policies_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networksecurity_projects_locations_server_tls_policies_list` - Lists ServerTlsPolicies in a given project and location.
* `networksecurity_projects_locations_server_tls_policies_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networksecurity_projects_locations_server_tls_policies_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `networksecurity_projects_locations_tls_inspection_policies_create` - Creates a new TlsInspectionPolicy in a given project and location.
* `networksecurity_projects_locations_tls_inspection_policies_list` - Lists TlsInspectionPolicies in a given project and location.
* `networksecurity_projects_locations_url_lists_create` - Creates a new UrlList in a given project and location.
* `networksecurity_projects_locations_url_lists_delete` - Deletes a single UrlList.
* `networksecurity_projects_locations_url_lists_get` - Gets details of a single UrlList.
* `networksecurity_projects_locations_url_lists_list` - Lists UrlLists in a given project and location.
* `networksecurity_projects_locations_url_lists_patch` - Updates the parameters of a single UrlList.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
