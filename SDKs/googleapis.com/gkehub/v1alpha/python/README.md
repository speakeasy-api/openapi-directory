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
        parent="dignissimos",
    ),
    query_params=operations.GkehubProjectsLocationsFeaturesCreateQueryParams(
        dollar_xgafv="1",
        access_token="nihil",
        alt="json",
        callback="tempore",
        feature_id="exercitationem",
        fields="et",
        key="dolorem",
        oauth_token="quaerat",
        pretty_print=True,
        quota_user="inventore",
        request_id="reiciendis",
        upload_type="quidem",
        upload_protocol="ut",
    ),
    request=shared.FeatureInput(
        labels={
            "quo": "assumenda",
            "quisquam": "ad",
        },
        membership_specs={
            "est": shared.MembershipFeatureSpecInput(
                anthosobservability=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=True,
                    enable_stackdriver_on_applications=False,
                    version="necessitatibus",
                ),
                cloudbuild=shared.CloudBuildMembershipSpec(
                    security_policy="SECURITY_POLICY_UNSPECIFIED",
                    version="corporis",
                ),
                configmanagement=shared.ConfigManagementMembershipSpec(
                    binauthz=shared.ConfigManagementBinauthzConfig(
                        enabled=False,
                    ),
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=True,
                        enabled=False,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="dolorum",
                            https_proxy="praesentium",
                            policy_dir="totam",
                            secret_type="voluptates",
                            sync_branch="et",
                            sync_repo="consectetur",
                            sync_rev="ratione",
                            sync_wait_secs="rerum",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="commodi",
                            policy_dir="enim",
                            secret_type="distinctio",
                            sync_repo="voluptatem",
                            sync_wait_secs="omnis",
                        ),
                        prevent_drift=True,
                        source_format="modi",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=False,
                        enable_pod_tree_labels=True,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="dolor",
                        enabled=True,
                        exemptable_namespaces=[
                            "quisquam",
                            "quo",
                            "deleniti",
                        ],
                        log_denies_enabled=True,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "CLOUD_MONITORING",
                                "MONITORING_BACKEND_UNSPECIFIED",
                                "CLOUD_MONITORING",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=False,
                        template_library_installed=False,
                    ),
                    version="voluptatibus",
                ),
                fleet_inherited=True,
                fleetobservability={
                    "sit": "ut",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="officia",
                                client_secret="aliquam",
                                kubectl_redirect_uri="veniam",
                                tenant="autem",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="impedit",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="et",
                                client_id="sed",
                                client_secret="facere",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=True,
                                extra_params="architecto",
                                group_prefix="nemo",
                                groups_claim="quos",
                                issuer_uri="deserunt",
                                kubectl_redirect_uri="mollitia",
                                scopes="ipsam",
                                user_claim="dolor",
                                user_prefix="rerum",
                            ),
                            proxy="architecto",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="AUTOMATIC",
                    default_channel="REGULAR",
                    management="MANAGEMENT_MANUAL",
                ),
                policycontroller=shared.PolicyControllerMembershipSpec(
                    policy_controller_hub_config=shared.PolicyControllerHubConfig(
                        audit_interval_seconds="dignissimos",
                        exemptable_namespaces=[
                            "voluptates",
                            "libero",
                            "mollitia",
                        ],
                        install_spec="INSTALL_SPEC_SUSPENDED",
                        log_denies_enabled=False,
                        monitoring=shared.PolicyControllerMonitoringConfig(
                            backends=[
                                "CLOUD_MONITORING",
                                "MONITORING_BACKEND_UNSPECIFIED",
                            ],
                        ),
                        mutation_enabled=True,
                        referential_rules_enabled=False,
                        template_library_config=shared.PolicyControllerTemplateLibraryConfig(
                            included=False,
                        ),
                    ),
                    version="delectus",
                ),
                workloadcertificate=shared.MembershipSpec(
                    certificate_management="DISABLED",
                ),
            ),
        },
        resource_state=shared.FeatureResourceState(
            state="DISABLING",
        ),
        scope_specs={
            "qui": {
                "et": "ex",
                "quia": "exercitationem",
            },
            "debitis": {
                "eum": "possimus",
            },
            "enim": {
                "eligendi": "sequi",
                "sit": "vitae",
                "unde": "facilis",
            },
        },
        spec=shared.CommonFeatureSpec(
            anthosobservability=shared.AnthosObservabilityFeatureSpec(
                default_membership_spec=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=True,
                    enable_stackdriver_on_applications=False,
                    version="aut",
                ),
            ),
            appdevexperience={
                "harum": "quo",
                "aut": "consequatur",
                "iste": "aut",
            },
            cloudauditlogging=shared.CloudAuditLoggingFeatureSpec(
                allowlisted_service_accounts=[
                    "facilis",
                    "a",
                    "ut",
                ],
            ),
            fleetobservability={
                "maxime": "odio",
            },
            multiclusteringress=shared.MultiClusterIngressFeatureSpec(
                billing="ANTHOS_LICENSE",
                config_membership="quia",
            ),
            workloadcertificate=shared.FeatureSpec(
                default_config=shared.MembershipSpec(
                    certificate_management="DISABLED",
                ),
                provision_google_ca="GOOGLE_CA_PROVISIONING_UNSPECIFIED",
            ),
        ),
        state=shared.CommonFeatureState1(
            appdevexperience=shared.AppDevExperienceFeatureState(
                networking_install_succeeded=shared.Status(
                    code="CODE_UNSPECIFIED",
                    description="ea",
                ),
            ),
            fleetobservability={
                "nisi": "sint",
                "itaque": "doloremque",
            },
            state=shared.FeatureState(
                code="OK",
                description="cumque",
                update_time="et",
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
* `gkehub_projects_locations_fleets_create` - Creates a fleet.
* `gkehub_projects_locations_fleets_list` - Returns all fleets within an organization or a project that the caller has access to.
* `gkehub_projects_locations_list` - Lists information about the supported locations for this service.
* `gkehub_projects_locations_memberships_create` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehub_projects_locations_memberships_generate_connect_manifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehub_projects_locations_memberships_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehub_projects_locations_memberships_list` - Lists Memberships in a given project and location.
* `gkehub_projects_locations_memberships_list_admin` - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* `gkehub_projects_locations_memberships_patch` - Updates an existing Membership.
* `gkehub_projects_locations_memberships_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehub_projects_locations_memberships_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehub_projects_locations_memberships_validate_create` - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
* `gkehub_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehub_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehub_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehub_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
