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
    
req = operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest(
    security=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreatePathParams(
        parent="et",
    ),
    query_params=operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateQueryParams(
        dollar_xgafv="1",
        access_token="minima",
        alt="media",
        authorization_policy_id="dolor",
        callback="explicabo",
        fields="voluptates",
        key="dolor",
        oauth_token="iure",
        pretty_print=False,
        quota_user="at",
        upload_type="nostrum",
        upload_protocol="quo",
    ),
    request=shared.AuthorizationPolicyInput(
        action="ALLOW",
        description="qui",
        labels={
            "odio": "beatae",
            "nobis": "totam",
            "sunt": "adipisci",
        },
        name="ullam",
        rules=[
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "eum",
                            "sed",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="eveniet",
                            regex_match="est",
                        ),
                        methods=[
                            "et",
                            "ipsa",
                            "assumenda",
                        ],
                        ports=[
                            4943689285477287669,
                            3160307118056465289,
                        ],
                    ),
                    shared.Destination(
                        hosts=[
                            "id",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="cupiditate",
                            regex_match="dolorem",
                        ),
                        methods=[
                            "esse",
                            "ratione",
                            "soluta",
                        ],
                        ports=[
                            3231685339067003690,
                            5512569230175251860,
                            8584494059737821751,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "omnis",
                        ],
                        principals=[
                            "accusamus",
                            "atque",
                            "et",
                        ],
                    ),
                ],
            ),
            shared.Rule(
                destinations=[
                    shared.Destination(
                        hosts=[
                            "ratione",
                            "occaecati",
                        ],
                        http_header_match=shared.HTTPHeaderMatch(
                            header_name="et",
                            regex_match="neque",
                        ),
                        methods=[
                            "ea",
                        ],
                        ports=[
                            4607326647308611294,
                            6100199300792176061,
                            3576388956540400177,
                        ],
                    ),
                ],
                sources=[
                    shared.Source(
                        ip_blocks=[
                            "asperiores",
                            "non",
                        ],
                        principals=[
                            "ab",
                        ],
                    ),
                    shared.Source(
                        ip_blocks=[
                            "aut",
                            "unde",
                        ],
                        principals=[
                            "repellat",
                            "sed",
                        ],
                    ),
                ],
            ),
        ],
    ),
)
    
res = s.projects.networksecurity_projects_locations_authorization_policies_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `networksecurity_projects_locations_authorization_policies_create` - Creates a new AuthorizationPolicy in a given project and location.
* `networksecurity_projects_locations_authorization_policies_list` - Lists AuthorizationPolicies in a given project and location.
* `networksecurity_projects_locations_client_tls_policies_create` - Creates a new ClientTlsPolicy in a given project and location.
* `networksecurity_projects_locations_client_tls_policies_list` - Lists ClientTlsPolicies in a given project and location.
* `networksecurity_projects_locations_list` - Lists information about the supported locations for this service.
* `networksecurity_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `networksecurity_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `networksecurity_projects_locations_server_tls_policies_create` - Creates a new ServerTlsPolicy in a given project and location.
* `networksecurity_projects_locations_server_tls_policies_delete` - Deletes a single ServerTlsPolicy.
* `networksecurity_projects_locations_server_tls_policies_get` - Gets details of a single ServerTlsPolicy.
* `networksecurity_projects_locations_server_tls_policies_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `networksecurity_projects_locations_server_tls_policies_list` - Lists ServerTlsPolicies in a given project and location.
* `networksecurity_projects_locations_server_tls_policies_patch` - Updates the parameters of a single ServerTlsPolicy.
* `networksecurity_projects_locations_server_tls_policies_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `networksecurity_projects_locations_server_tls_policies_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
