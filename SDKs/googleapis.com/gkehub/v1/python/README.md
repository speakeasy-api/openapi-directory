# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/gkehub/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GkehubProjectsLocationsFeaturesCreateRequest(
    dollar_xgafv="2",
    feature_input=shared.FeatureInput(
        fleet_default_member_config={
            "distinctio": "quibusdam",
            "unde": "nulla",
            "corrupti": "illum",
        },
        labels={
            "error": "deserunt",
            "suscipit": "iure",
        },
        membership_specs={
            "debitis": shared.MembershipFeatureSpecInput(
                configmanagement=shared.ConfigManagementMembershipSpec(
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=False,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="ipsa",
                            https_proxy="delectus",
                            policy_dir="tempora",
                            secret_type="suscipit",
                            sync_branch="molestiae",
                            sync_repo="minus",
                            sync_rev="placeat",
                            sync_wait_secs="voluptatum",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="iusto",
                            policy_dir="excepturi",
                            secret_type="nisi",
                            sync_repo="recusandae",
                            sync_wait_secs="temporibus",
                        ),
                        prevent_drift=False,
                        source_format="ab",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=False,
                        enable_pod_tree_labels=False,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="quis",
                        enabled=False,
                        exemptable_namespaces=[
                            "deserunt",
                        ],
                        log_denies_enabled=False,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "PROMETHEUS",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=False,
                        template_library_installed=False,
                    ),
                    version="repellendus",
                ),
                fleet_inherited=False,
                fleetobservability={
                    "quo": "odit",
                    "at": "at",
                    "maiores": "molestiae",
                    "quod": "quod",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureADConfigInput(
                                client_id="totam",
                                client_secret="porro",
                                kubectl_redirect_uri="dolorum",
                                tenant="dicta",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="nam",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="officia",
                                client_id="occaecati",
                                client_secret="fugit",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="deleniti",
                                group_prefix="hic",
                                groups_claim="optio",
                                issuer_uri="totam",
                                kubectl_redirect_uri="beatae",
                                scopes="commodi",
                                user_claim="molestiae",
                                user_prefix="modi",
                            ),
                            proxy="qui",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureADConfigInput(
                                client_id="impedit",
                                client_secret="cum",
                                kubectl_redirect_uri="esse",
                                tenant="ipsum",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="excepturi",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="aspernatur",
                                client_id="perferendis",
                                client_secret="ad",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="natus",
                                group_prefix="sed",
                                groups_claim="iste",
                                issuer_uri="dolor",
                                kubectl_redirect_uri="natus",
                                scopes="laboriosam",
                                user_claim="hic",
                                user_prefix="saepe",
                            ),
                            proxy="fuga",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="AUTOMATIC",
                    management="MANAGEMENT_AUTOMATIC",
                ),
            ),
            "iste": shared.MembershipFeatureSpecInput(
                configmanagement=shared.ConfigManagementMembershipSpec(
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=False,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="iure",
                            https_proxy="saepe",
                            policy_dir="quidem",
                            secret_type="architecto",
                            sync_branch="ipsa",
                            sync_repo="reiciendis",
                            sync_rev="est",
                            sync_wait_secs="mollitia",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="laborum",
                            policy_dir="dolores",
                            secret_type="dolorem",
                            sync_repo="corporis",
                            sync_wait_secs="explicabo",
                        ),
                        prevent_drift=False,
                        source_format="nobis",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=False,
                        enable_pod_tree_labels=False,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="enim",
                        enabled=False,
                        exemptable_namespaces=[
                            "nemo",
                            "minima",
                            "excepturi",
                        ],
                        log_denies_enabled=False,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "PROMETHEUS",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=False,
                        template_library_installed=False,
                    ),
                    version="culpa",
                ),
                fleet_inherited=False,
                fleetobservability={
                    "sapiente": "architecto",
                    "mollitia": "dolorem",
                    "culpa": "consequuntur",
                    "repellat": "mollitia",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureADConfigInput(
                                client_id="numquam",
                                client_secret="commodi",
                                kubectl_redirect_uri="quam",
                                tenant="molestiae",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="velit",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="error",
                                client_id="quia",
                                client_secret="quis",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="vitae",
                                group_prefix="laborum",
                                groups_claim="animi",
                                issuer_uri="enim",
                                kubectl_redirect_uri="odit",
                                scopes="quo",
                                user_claim="sequi",
                                user_prefix="tenetur",
                            ),
                            proxy="ipsam",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureADConfigInput(
                                client_id="id",
                                client_secret="possimus",
                                kubectl_redirect_uri="aut",
                                tenant="quasi",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="error",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="temporibus",
                                client_id="laborum",
                                client_secret="quasi",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="reiciendis",
                                group_prefix="voluptatibus",
                                groups_claim="vero",
                                issuer_uri="nihil",
                                kubectl_redirect_uri="praesentium",
                                scopes="voluptatibus",
                                user_claim="ipsa",
                                user_prefix="omnis",
                            ),
                            proxy="voluptate",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureADConfigInput(
                                client_id="cum",
                                client_secret="perferendis",
                                kubectl_redirect_uri="doloremque",
                                tenant="reprehenderit",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="ut",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="maiores",
                                client_id="dicta",
                                client_secret="corporis",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="dolore",
                                group_prefix="iusto",
                                groups_claim="dicta",
                                issuer_uri="harum",
                                kubectl_redirect_uri="enim",
                                scopes="accusamus",
                                user_claim="commodi",
                                user_prefix="repudiandae",
                            ),
                            proxy="quae",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
                    management="MANAGEMENT_MANUAL",
                ),
            ),
        },
        resource_state=shared.FeatureResourceState(
            state="DISABLING",
        ),
        scope_specs={
            "pariatur": {
                "praesentium": "rem",
                "voluptates": "quasi",
            },
            "repudiandae": {
                "veritatis": "itaque",
                "incidunt": "enim",
                "consequatur": "est",
            },
            "quibusdam": {
                "deserunt": "distinctio",
            },
        },
        spec=shared.CommonFeatureSpec(
            appdevexperience={
                "labore": "modi",
                "qui": "aliquid",
                "cupiditate": "quos",
                "perferendis": "magni",
            },
            fleetobservability={
                "ipsam": "alias",
                "fugit": "dolorum",
                "excepturi": "tempora",
                "facilis": "tempore",
            },
            multiclusteringress=shared.MultiClusterIngressFeatureSpec(
                config_membership="labore",
            ),
        ),
        state=shared.CommonFeatureState(
            appdevexperience=shared.AppDevExperienceFeatureState(
                networking_install_succeeded=shared.Status(
                    code="UNKNOWN",
                    description="eum",
                ),
            ),
            fleetobservability={
                "eligendi": "sint",
            },
            state=shared.FeatureState(
                code="OK",
                description="provident",
                update_time="necessitatibus",
            ),
        ),
    ),
    access_token="sint",
    alt="media",
    callback="dolor",
    feature_id="debitis",
    fields_="a",
    key="dolorum",
    oauth_token="in",
    parent="in",
    pretty_print=False,
    quota_user="illum",
    request_id="maiores",
    upload_type="rerum",
    upload_protocol="dicta",
)
    
res = s.projects.gkehub_projects_locations_features_create(req, operations.GkehubProjectsLocationsFeaturesCreateSecurity(
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

* `gkehub_projects_locations_features_create` - Adds a new Feature.
* `gkehub_projects_locations_features_list` - Lists Features in a given project and location.
* `gkehub_projects_locations_list` - Lists information about the supported locations for this service.
* `gkehub_projects_locations_memberships_bindings_create` - Creates a MembershipBinding.
* `gkehub_projects_locations_memberships_bindings_list` - Lists MembershipBindings.
* `gkehub_projects_locations_memberships_bindings_patch` - Updates a MembershipBinding.
* `gkehub_projects_locations_memberships_create` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehub_projects_locations_memberships_generate_connect_manifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehub_projects_locations_memberships_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehub_projects_locations_memberships_list` - Lists Memberships in a given project and location.
* `gkehub_projects_locations_memberships_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehub_projects_locations_memberships_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehub_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehub_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `gkehub_projects_locations_scopes_create` - Creates a Scope.
* `gkehub_projects_locations_scopes_delete` - Deletes a Scope.
* `gkehub_projects_locations_scopes_get` - Returns the details of a Scope.
* `gkehub_projects_locations_scopes_list` - Lists Scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
