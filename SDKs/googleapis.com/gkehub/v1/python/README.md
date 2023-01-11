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
    
req = operations.GkehubProjectsLocationsFeaturesCreateRequest(
    security=operations.GkehubProjectsLocationsFeaturesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GkehubProjectsLocationsFeaturesCreatePathParams(
        parent="rerum",
    ),
    query_params=operations.GkehubProjectsLocationsFeaturesCreateQueryParams(
        dollar_xgafv="1",
        access_token="ut",
        alt="media",
        callback="distinctio",
        feature_id="fugiat",
        fields="aperiam",
        key="est",
        oauth_token="aut",
        pretty_print=True,
        quota_user="sit",
        request_id="quisquam",
        upload_type="placeat",
        upload_protocol="et",
    ),
    request=shared.FeatureInput(
        labels={
            "et": "est",
            "ex": "similique",
            "corporis": "ea",
        },
        membership_specs={
            "dolor": shared.MembershipFeatureSpecInput(
                configmanagement=shared.ConfigManagementMembershipSpec(
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=True,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="nostrum",
                            https_proxy="laboriosam",
                            policy_dir="exercitationem",
                            secret_type="libero",
                            sync_branch="laborum",
                            sync_repo="corrupti",
                            sync_rev="nisi",
                            sync_wait_secs="sunt",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="et",
                            policy_dir="sed",
                            secret_type="ut",
                            sync_repo="veniam",
                            sync_wait_secs="velit",
                        ),
                        prevent_drift=True,
                        source_format="qui",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=False,
                        enable_pod_tree_labels=False,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="voluptas",
                        enabled=True,
                        exemptable_namespaces=[
                            "vitae",
                            "pariatur",
                        ],
                        log_denies_enabled=True,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "CLOUD_MONITORING",
                                "CLOUD_MONITORING",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=True,
                        template_library_installed=True,
                    ),
                    version="fugit",
                ),
                fleet_inherited=True,
                fleetobservability={
                    "impedit": "officiis",
                    "labore": "veniam",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="aspernatur",
                                client_secret="qui",
                                kubectl_redirect_uri="magnam",
                                tenant="voluptates",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="accusantium",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="qui",
                                client_id="animi",
                                client_secret="adipisci",
                                deploy_cloud_console_proxy=True,
                                enable_access_token=True,
                                extra_params="cupiditate",
                                group_prefix="eum",
                                groups_claim="est",
                                issuer_uri="explicabo",
                                kubectl_redirect_uri="recusandae",
                                scopes="eius",
                                user_claim="incidunt",
                                user_prefix="et",
                            ),
                            proxy="eum",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="fugiat",
                                client_secret="iusto",
                                kubectl_redirect_uri="repellendus",
                                tenant="voluptatem",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="rem",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="adipisci",
                                client_id="necessitatibus",
                                client_secret="in",
                                deploy_cloud_console_proxy=True,
                                enable_access_token=False,
                                extra_params="placeat",
                                group_prefix="omnis",
                                groups_claim="aut",
                                issuer_uri="vitae",
                                kubectl_redirect_uri="hic",
                                scopes="cupiditate",
                                user_claim="est",
                                user_prefix="quia",
                            ),
                            proxy="ut",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="omnis",
                                client_secret="dolores",
                                kubectl_redirect_uri="iusto",
                                tenant="ratione",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="libero",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="eius",
                                client_id="illo",
                                client_secret="sapiente",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="dolore",
                                group_prefix="quod",
                                groups_claim="similique",
                                issuer_uri="tempore",
                                kubectl_redirect_uri="sit",
                                scopes="dolore",
                                user_claim="libero",
                                user_prefix="et",
                            ),
                            proxy="distinctio",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="AUTOMATIC",
                    management="MANAGEMENT_MANUAL",
                ),
            ),
        },
        resource_state=shared.FeatureResourceState(
            state="ACTIVE",
        ),
        scope_specs={
            "corrupti": {
                "id": "ut",
            },
        },
        spec=shared.CommonFeatureSpec(
            appdevexperience={
                "quaerat": "quas",
                "quaerat": "aut",
                "hic": "rerum",
            },
            fleetobservability={
                "iure": "voluptatem",
            },
            multiclusteringress=shared.MultiClusterIngressFeatureSpec(
                config_membership="voluptas",
            ),
        ),
        state=shared.CommonFeatureState(
            appdevexperience=shared.AppDevExperienceFeatureState(
                networking_install_succeeded=shared.Status(
                    code="CODE_UNSPECIFIED",
                    description="qui",
                ),
            ),
            fleetobservability={
                "maxime": "molestias",
            },
            state=shared.FeatureState(
                code="ERROR",
                description="amet",
                update_time="non",
            ),
        ),
    ),
)
    
res = s.projects.gkehub_projects_locations_features_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `gkehub_projects_locations_features_create` - Adds a new Feature.
* `gkehub_projects_locations_features_list` - Lists Features in a given project and location.
* `gkehub_projects_locations_list` - Lists information about the supported locations for this service.
* `gkehub_projects_locations_memberships_create` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehub_projects_locations_memberships_generate_connect_manifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehub_projects_locations_memberships_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehub_projects_locations_memberships_list` - Lists Memberships in a given project and location.
* `gkehub_projects_locations_memberships_patch` - Updates an existing Membership.
* `gkehub_projects_locations_memberships_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehub_projects_locations_memberships_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehub_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehub_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehub_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehub_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
