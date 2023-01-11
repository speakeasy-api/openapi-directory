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
    
req = operations.ConnectorsProjectsLocationsConnectionsCreateRequest(
    security=operations.ConnectorsProjectsLocationsConnectionsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ConnectorsProjectsLocationsConnectionsCreatePathParams(
        parent="laborum",
    ),
    query_params=operations.ConnectorsProjectsLocationsConnectionsCreateQueryParams(
        dollar_xgafv="2",
        access_token="et",
        alt="media",
        callback="voluptatibus",
        connection_id="debitis",
        fields="voluptates",
        key="et",
        oauth_token="iure",
        pretty_print=False,
        quota_user="asperiores",
        upload_type="ea",
        upload_protocol="consectetur",
    ),
    request=shared.ConnectionInput(
        auth_config=shared.AuthConfig(
            additional_variables=[
                shared.ConfigVariable(
                    bool_value=False,
                    int_value="suscipit",
                    key="maiores",
                    secret_value=shared.Secret(
                        secret_version="iusto",
                    ),
                    string_value="eos",
                ),
                shared.ConfigVariable(
                    bool_value=False,
                    int_value="repellat",
                    key="eligendi",
                    secret_value=shared.Secret(
                        secret_version="ut",
                    ),
                    string_value="et",
                ),
            ],
            auth_type="OAUTH2_CLIENT_CREDENTIALS",
            oauth2_client_credentials=shared.Oauth2ClientCredentials(
                client_id="odit",
                client_secret=shared.Secret(
                    secret_version="aut",
                ),
            ),
            oauth2_jwt_bearer=shared.Oauth2JwtBearer(
                client_key=shared.Secret(
                    secret_version="rerum",
                ),
                jwt_claims=shared.JwtClaims(
                    audience="repudiandae",
                    issuer="quos",
                    subject="consequatur",
                ),
            ),
            ssh_public_key=shared.SSHPublicKey(
                cert_type="accusamus",
                ssh_client_cert=shared.Secret(
                    secret_version="rerum",
                ),
                ssh_client_cert_pass=shared.Secret(
                    secret_version="eos",
                ),
                username="est",
            ),
            user_password=shared.UserPassword(
                password=shared.Secret(
                    secret_version="qui",
                ),
                username="enim",
            ),
        ),
        config_variables=[
            shared.ConfigVariable(
                bool_value=True,
                int_value="nobis",
                key="reiciendis",
                secret_value=shared.Secret(
                    secret_version="minus",
                ),
                string_value="doloremque",
            ),
            shared.ConfigVariable(
                bool_value=True,
                int_value="voluptas",
                key="autem",
                secret_value=shared.Secret(
                    secret_version="ut",
                ),
                string_value="dicta",
            ),
            shared.ConfigVariable(
                bool_value=False,
                int_value="culpa",
                key="et",
                secret_value=shared.Secret(
                    secret_version="provident",
                ),
                string_value="id",
            ),
        ],
        connector_version="dolorem",
        description="rerum",
        destination_configs=[
            shared.DestinationConfig(
                destinations=[
                    shared.Destination(
                        host="dolor",
                        port=6236403914782054328,
                        service_attachment="ab",
                    ),
                    shared.Destination(
                        host="vel",
                        port=4094679320341630421,
                        service_attachment="et",
                    ),
                    shared.Destination(
                        host="enim",
                        port=8623464447008361335,
                        service_attachment="corporis",
                    ),
                ],
                key="facere",
            ),
            shared.DestinationConfig(
                destinations=[
                    shared.Destination(
                        host="assumenda",
                        port=4352521914877300365,
                        service_attachment="et",
                    ),
                    shared.Destination(
                        host="minus",
                        port=6512242709642800696,
                        service_attachment="similique",
                    ),
                ],
                key="omnis",
            ),
            shared.DestinationConfig(
                destinations=[
                    shared.Destination(
                        host="sunt",
                        port=1624115472900005299,
                        service_attachment="qui",
                    ),
                    shared.Destination(
                        host="occaecati",
                        port=6185666323245807780,
                        service_attachment="alias",
                    ),
                ],
                key="eum",
            ),
        ],
        labels={
            "quod": "quis",
            "accusantium": "magni",
        },
        lock_config=shared.LockConfig(
            locked=False,
            reason="est",
        ),
        node_config=shared.NodeConfig(
            max_node_count=8456589800173565241,
            min_node_count=3490050072483158353,
        ),
        service_account="id",
        status=shared.ConnectionStatus(
            description="excepturi",
            state="ERROR",
            status="labore",
        ),
        suspended=False,
    ),
)
    
res = s.projects.connectors_projects_locations_connections_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `connectors_projects_locations_connections_create` - Creates a new Connection in a given project and location.
* `connectors_projects_locations_connections_list` - Lists Connections in a given project and location.
* `connectors_projects_locations_connections_patch` - Updates the parameters of a single Connection.
* `connectors_projects_locations_connections_runtime_action_schemas_list` - List schema of a runtime actions filtered by action name.
* `connectors_projects_locations_connections_runtime_entity_schemas_list` - List schema of a runtime entities filtered by entity name.
* `connectors_projects_locations_list` - Lists information about the supported locations for this service.
* `connectors_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `connectors_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `connectors_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `connectors_projects_locations_providers_connectors_list` - Lists Connectors in a given project and location.
* `connectors_projects_locations_providers_connectors_versions_get` - Gets details of a single connector version.
* `connectors_projects_locations_providers_connectors_versions_list` - Lists Connector Versions in a given project and location.
* `connectors_projects_locations_providers_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `connectors_projects_locations_providers_list` - Lists Providers in a given project and location.
* `connectors_projects_locations_providers_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `connectors_projects_locations_providers_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
