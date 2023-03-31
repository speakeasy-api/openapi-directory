# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/gkehub/v1beta/python
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
        fleet_default_member_config=shared.CommonFleetDefaultMemberConfigSpecInput(
            identityservice=shared.IdentityServiceMembershipSpecInput(
                auth_methods=[
                    shared.IdentityServiceAuthMethodInput(
                        azuread_config=shared.IdentityServiceAzureADConfigInput(
                            client_id="distinctio",
                            client_secret="quibusdam",
                            kubectl_redirect_uri="unde",
                            tenant="nulla",
                        ),
                        google_config=shared.IdentityServiceGoogleConfig(
                            disable=False,
                        ),
                        name="corrupti",
                        oidc_config=shared.IdentityServiceOidcConfigInput(
                            certificate_authority_data="illum",
                            client_id="vel",
                            client_secret="error",
                            deploy_cloud_console_proxy=False,
                            enable_access_token=False,
                            extra_params="deserunt",
                            group_prefix="suscipit",
                            groups_claim="iure",
                            issuer_uri="magnam",
                            kubectl_redirect_uri="debitis",
                            scopes="ipsa",
                            user_claim="delectus",
                            user_prefix="tempora",
                        ),
                        proxy="suscipit",
                    ),
                    shared.IdentityServiceAuthMethodInput(
                        azuread_config=shared.IdentityServiceAzureADConfigInput(
                            client_id="molestiae",
                            client_secret="minus",
                            kubectl_redirect_uri="placeat",
                            tenant="voluptatum",
                        ),
                        google_config=shared.IdentityServiceGoogleConfig(
                            disable=False,
                        ),
                        name="iusto",
                        oidc_config=shared.IdentityServiceOidcConfigInput(
                            certificate_authority_data="excepturi",
                            client_id="nisi",
                            client_secret="recusandae",
                            deploy_cloud_console_proxy=False,
                            enable_access_token=False,
                            extra_params="temporibus",
                            group_prefix="ab",
                            groups_claim="quis",
                            issuer_uri="veritatis",
                            kubectl_redirect_uri="deserunt",
                            scopes="perferendis",
                            user_claim="ipsam",
                            user_prefix="repellendus",
                        ),
                        proxy="sapiente",
                    ),
                    shared.IdentityServiceAuthMethodInput(
                        azuread_config=shared.IdentityServiceAzureADConfigInput(
                            client_id="quo",
                            client_secret="odit",
                            kubectl_redirect_uri="at",
                            tenant="at",
                        ),
                        google_config=shared.IdentityServiceGoogleConfig(
                            disable=False,
                        ),
                        name="maiores",
                        oidc_config=shared.IdentityServiceOidcConfigInput(
                            certificate_authority_data="molestiae",
                            client_id="quod",
                            client_secret="quod",
                            deploy_cloud_console_proxy=False,
                            enable_access_token=False,
                            extra_params="esse",
                            group_prefix="totam",
                            groups_claim="porro",
                            issuer_uri="dolorum",
                            kubectl_redirect_uri="dicta",
                            scopes="nam",
                            user_claim="officia",
                            user_prefix="occaecati",
                        ),
                        proxy="fugit",
                    ),
                ],
            ),
        ),
        labels={
            "hic": "optio",
            "totam": "beatae",
            "commodi": "molestiae",
        },
        membership_specs={
            "qui": shared.MembershipFeatureSpecInput(
                anthosobservability=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=False,
                    enable_stackdriver_on_applications=False,
                    version="impedit",
                ),
                cloudbuild=shared.MembershipSpec(
                    security_policy="PRIVILEGED",
                    version="esse",
                ),
                configmanagement=shared.ConfigManagementMembershipSpec(
                    binauthz=shared.ConfigManagementBinauthzConfig(
                        enabled=False,
                    ),
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=False,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="ipsum",
                            https_proxy="excepturi",
                            policy_dir="aspernatur",
                            secret_type="perferendis",
                            sync_branch="ad",
                            sync_repo="natus",
                            sync_rev="sed",
                            sync_wait_secs="iste",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="dolor",
                            policy_dir="natus",
                            secret_type="laboriosam",
                            sync_repo="hic",
                            sync_wait_secs="saepe",
                        ),
                        prevent_drift=False,
                        source_format="fuga",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=False,
                        enable_pod_tree_labels=False,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="in",
                        enabled=False,
                        exemptable_namespaces=[
                            "iste",
                            "iure",
                        ],
                        log_denies_enabled=False,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "CLOUD_MONITORING",
                                "MONITORING_BACKEND_UNSPECIFIED",
                                "MONITORING_BACKEND_UNSPECIFIED",
                                "CLOUD_MONITORING",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=False,
                        template_library_installed=False,
                    ),
                    version="est",
                ),
                fleet_inherited=False,
                fleetobservability={
                    "laborum": "dolores",
                    "dolorem": "corporis",
                    "explicabo": "nobis",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureADConfigInput(
                                client_id="omnis",
                                client_secret="nemo",
                                kubectl_redirect_uri="minima",
                                tenant="excepturi",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="accusantium",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="iure",
                                client_id="culpa",
                                client_secret="doloribus",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="sapiente",
                                group_prefix="architecto",
                                groups_claim="mollitia",
                                issuer_uri="dolorem",
                                kubectl_redirect_uri="culpa",
                                scopes="consequuntur",
                                user_claim="repellat",
                                user_prefix="mollitia",
                            ),
                            proxy="occaecati",
                        ),
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
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="AUTOMATIC",
                    management="MANAGEMENT_MANUAL",
                ),
                policycontroller=shared.PolicyControllerMembershipSpec(
                    policy_controller_hub_config=shared.PolicyControllerHubConfig(
                        audit_interval_seconds="aut",
                        constraint_violation_limit="quasi",
                        deployment_configs={
                            "temporibus": shared.PolicyControllerPolicyControllerDeploymentConfig(
                                container_resources=shared.PolicyControllerResourceRequirements(
                                    limits=shared.PolicyControllerResourceList(
                                        cpu="laborum",
                                        memory="quasi",
                                    ),
                                    requests=shared.PolicyControllerResourceList(
                                        cpu="reiciendis",
                                        memory="voluptatibus",
                                    ),
                                ),
                                pod_anti_affinity=False,
                                pod_tolerations=[
                                    shared.PolicyControllerToleration(
                                        effect="nihil",
                                        key="praesentium",
                                        operator="voluptatibus",
                                        value="ipsa",
                                    ),
                                    shared.PolicyControllerToleration(
                                        effect="omnis",
                                        key="voluptate",
                                        operator="cum",
                                        value="perferendis",
                                    ),
                                    shared.PolicyControllerToleration(
                                        effect="doloremque",
                                        key="reprehenderit",
                                        operator="ut",
                                        value="maiores",
                                    ),
                                    shared.PolicyControllerToleration(
                                        effect="dicta",
                                        key="corporis",
                                        operator="dolore",
                                        value="iusto",
                                    ),
                                ],
                                replica_count="dicta",
                            ),
                            "harum": shared.PolicyControllerPolicyControllerDeploymentConfig(
                                container_resources=shared.PolicyControllerResourceRequirements(
                                    limits=shared.PolicyControllerResourceList(
                                        cpu="enim",
                                        memory="accusamus",
                                    ),
                                    requests=shared.PolicyControllerResourceList(
                                        cpu="commodi",
                                        memory="repudiandae",
                                    ),
                                ),
                                pod_anti_affinity=False,
                                pod_tolerations=[
                                    shared.PolicyControllerToleration(
                                        effect="ipsum",
                                        key="quidem",
                                        operator="molestias",
                                        value="excepturi",
                                    ),
                                ],
                                replica_count="pariatur",
                            ),
                            "modi": shared.PolicyControllerPolicyControllerDeploymentConfig(
                                container_resources=shared.PolicyControllerResourceRequirements(
                                    limits=shared.PolicyControllerResourceList(
                                        cpu="praesentium",
                                        memory="rem",
                                    ),
                                    requests=shared.PolicyControllerResourceList(
                                        cpu="voluptates",
                                        memory="quasi",
                                    ),
                                ),
                                pod_anti_affinity=False,
                                pod_tolerations=[
                                    shared.PolicyControllerToleration(
                                        effect="sint",
                                        key="veritatis",
                                        operator="itaque",
                                        value="incidunt",
                                    ),
                                    shared.PolicyControllerToleration(
                                        effect="enim",
                                        key="consequatur",
                                        operator="est",
                                        value="quibusdam",
                                    ),
                                    shared.PolicyControllerToleration(
                                        effect="explicabo",
                                        key="deserunt",
                                        operator="distinctio",
                                        value="quibusdam",
                                    ),
                                    shared.PolicyControllerToleration(
                                        effect="labore",
                                        key="modi",
                                        operator="qui",
                                        value="aliquid",
                                    ),
                                ],
                                replica_count="cupiditate",
                            ),
                        },
                        exemptable_namespaces=[
                            "perferendis",
                            "magni",
                            "assumenda",
                        ],
                        install_spec="INSTALL_SPEC_NOT_INSTALLED",
                        log_denies_enabled=False,
                        monitoring=shared.PolicyControllerMonitoringConfig(
                            backends=[
                                "MONITORING_BACKEND_UNSPECIFIED",
                            ],
                        ),
                        mutation_enabled=False,
                        policy_content=shared.PolicyControllerPolicyContentSpec(
                            bundles={
                                "excepturi": shared.PolicyControllerBundleInstallSpec(
                                    exempted_namespaces=[
                                        "facilis",
                                        "tempore",
                                    ],
                                    management="MANAGEMENT_UNSPECIFIED",
                                ),
                                "delectus": shared.PolicyControllerBundleInstallSpec(
                                    exempted_namespaces=[
                                        "non",
                                        "eligendi",
                                    ],
                                    management="INSTALLED",
                                ),
                                "aliquid": shared.PolicyControllerBundleInstallSpec(
                                    exempted_namespaces=[
                                        "necessitatibus",
                                        "sint",
                                        "officia",
                                    ],
                                    management="MANAGEMENT_UNSPECIFIED",
                                ),
                            },
                            template_library=shared.PolicyControllerTemplateLibraryConfig(
                                included=False,
                                installation="ALL",
                            ),
                        ),
                        referential_rules_enabled=False,
                        template_library_config=shared.PolicyControllerTemplateLibraryConfig(
                            included=False,
                            installation="ALL",
                        ),
                    ),
                    version="dolorum",
                ),
            ),
            "in": shared.MembershipFeatureSpecInput(
                anthosobservability=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=False,
                    enable_stackdriver_on_applications=False,
                    version="in",
                ),
                cloudbuild=shared.MembershipSpec(
                    security_policy="PRIVILEGED",
                    version="maiores",
                ),
                configmanagement=shared.ConfigManagementMembershipSpec(
                    binauthz=shared.ConfigManagementBinauthzConfig(
                        enabled=False,
                    ),
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=False,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="rerum",
                            https_proxy="dicta",
                            policy_dir="magnam",
                            secret_type="cumque",
                            sync_branch="facere",
                            sync_repo="ea",
                            sync_rev="aliquid",
                            sync_wait_secs="laborum",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="accusamus",
                            policy_dir="non",
                            secret_type="occaecati",
                            sync_repo="enim",
                            sync_wait_secs="accusamus",
                        ),
                        prevent_drift=False,
                        source_format="delectus",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=False,
                        enable_pod_tree_labels=False,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="quidem",
                        enabled=False,
                        exemptable_namespaces=[
                            "nam",
                            "id",
                            "blanditiis",
                        ],
                        log_denies_enabled=False,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "CLOUD_MONITORING",
                                "MONITORING_BACKEND_UNSPECIFIED",
                                "PROMETHEUS",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=False,
                        template_library_installed=False,
                    ),
                    version="nisi",
                ),
                fleet_inherited=False,
                fleetobservability={
                    "natus": "omnis",
                    "molestiae": "perferendis",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureADConfigInput(
                                client_id="magnam",
                                client_secret="distinctio",
                                kubectl_redirect_uri="id",
                                tenant="labore",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="labore",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="suscipit",
                                client_id="natus",
                                client_secret="nobis",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="eum",
                                group_prefix="vero",
                                groups_claim="aspernatur",
                                issuer_uri="architecto",
                                kubectl_redirect_uri="magnam",
                                scopes="et",
                                user_claim="excepturi",
                                user_prefix="ullam",
                            ),
                            proxy="provident",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureADConfigInput(
                                client_id="quos",
                                client_secret="sint",
                                kubectl_redirect_uri="accusantium",
                                tenant="mollitia",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="reiciendis",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="mollitia",
                                client_id="ad",
                                client_secret="eum",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="dolor",
                                group_prefix="necessitatibus",
                                groups_claim="odit",
                                issuer_uri="nemo",
                                kubectl_redirect_uri="quasi",
                                scopes="iure",
                                user_claim="doloribus",
                                user_prefix="debitis",
                            ),
                            proxy="eius",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="MANUAL",
                    management="MANAGEMENT_AUTOMATIC",
                ),
                policycontroller=shared.PolicyControllerMembershipSpec(
                    policy_controller_hub_config=shared.PolicyControllerHubConfig(
                        audit_interval_seconds="facilis",
                        constraint_violation_limit="in",
                        deployment_configs={
                            "architecto": shared.PolicyControllerPolicyControllerDeploymentConfig(
                                container_resources=shared.PolicyControllerResourceRequirements(
                                    limits=shared.PolicyControllerResourceList(
                                        cpu="repudiandae",
                                        memory="ullam",
                                    ),
                                    requests=shared.PolicyControllerResourceList(
                                        cpu="expedita",
                                        memory="nihil",
                                    ),
                                ),
                                pod_anti_affinity=False,
                                pod_tolerations=[
                                    shared.PolicyControllerToleration(
                                        effect="quibusdam",
                                        key="sed",
                                        operator="saepe",
                                        value="pariatur",
                                    ),
                                    shared.PolicyControllerToleration(
                                        effect="accusantium",
                                        key="consequuntur",
                                        operator="praesentium",
                                        value="natus",
                                    ),
                                    shared.PolicyControllerToleration(
                                        effect="magni",
                                        key="sunt",
                                        operator="quo",
                                        value="illum",
                                    ),
                                    shared.PolicyControllerToleration(
                                        effect="pariatur",
                                        key="maxime",
                                        operator="ea",
                                        value="excepturi",
                                    ),
                                ],
                                replica_count="odit",
                            ),
                        },
                        exemptable_namespaces=[
                            "accusantium",
                            "ab",
                        ],
                        install_spec="INSTALL_SPEC_SUSPENDED",
                        log_denies_enabled=False,
                        monitoring=shared.PolicyControllerMonitoringConfig(
                            backends=[
                                "PROMETHEUS",
                                "PROMETHEUS",
                                "PROMETHEUS",
                            ],
                        ),
                        mutation_enabled=False,
                        policy_content=shared.PolicyControllerPolicyContentSpec(
                            bundles={
                                "eaque": shared.PolicyControllerBundleInstallSpec(
                                    exempted_namespaces=[
                                        "nemo",
                                        "voluptatibus",
                                        "perferendis",
                                        "fugiat",
                                    ],
                                    management="MANAGEMENT_UNSPECIFIED",
                                ),
                                "aut": shared.PolicyControllerBundleInstallSpec(
                                    exempted_namespaces=[
                                        "corporis",
                                        "hic",
                                        "libero",
                                        "nobis",
                                    ],
                                    management="MANAGEMENT_UNSPECIFIED",
                                ),
                                "quis": shared.PolicyControllerBundleInstallSpec(
                                    exempted_namespaces=[
                                        "dignissimos",
                                        "eaque",
                                        "quis",
                                    ],
                                    management="MANAGEMENT_UNSPECIFIED",
                                ),
                            },
                            template_library=shared.PolicyControllerTemplateLibraryConfig(
                                included=False,
                                installation="INSTALLATION_UNSPECIFIED",
                            ),
                        ),
                        referential_rules_enabled=False,
                        template_library_config=shared.PolicyControllerTemplateLibraryConfig(
                            included=False,
                            installation="INSTALLATION_UNSPECIFIED",
                        ),
                    ),
                    version="dolores",
                ),
            ),
        },
        resource_state=shared.FeatureResourceState(
            state="UPDATING",
        ),
        scope_specs={
            "dolor": {
                "nostrum": "hic",
                "recusandae": "omnis",
                "facilis": "perspiciatis",
                "voluptatem": "porro",
            },
            "consequuntur": {
                "error": "eaque",
                "occaecati": "rerum",
                "adipisci": "asperiores",
            },
        },
        spec=shared.CommonFeatureSpec(
            anthosobservability=shared.AnthosObservabilityFeatureSpec(
                default_membership_spec=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=False,
                    enable_stackdriver_on_applications=False,
                    version="earum",
                ),
            ),
            appdevexperience={
                "iste": "dolorum",
                "deleniti": "pariatur",
            },
            fleetobservability={
                "nobis": "libero",
                "delectus": "quaerat",
                "quos": "aliquid",
            },
            multiclusteringress=shared.MultiClusterIngressFeatureSpec(
                billing="BILLING_UNSPECIFIED",
                config_membership="dolorem",
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
                "hic": "excepturi",
            },
            state=shared.FeatureState(
                code="WARNING",
                description="voluptate",
                update_time="dignissimos",
            ),
        ),
    ),
    access_token="reiciendis",
    alt="json",
    callback="dolorum",
    feature_id="numquam",
    fields_="veritatis",
    key="ipsa",
    oauth_token="ipsa",
    parent="iure",
    pretty_print=False,
    quota_user="odio",
    request_id="quaerat",
    upload_type="accusamus",
    upload_protocol="quidem",
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
* `gkehub_projects_locations_memberships_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehub_projects_locations_memberships_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehub_projects_locations_memberships_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehub_projects_locations_namespaces_create` - Creates a fleet namespace.
* `gkehub_projects_locations_namespaces_list` - Lists fleet namespaces.
* `gkehub_projects_locations_namespaces_rbacrolebindings_create` - Creates a RBACRoleBinding.
* `gkehub_projects_locations_namespaces_rbacrolebindings_list` - Lists RBACRoleBinding.
* `gkehub_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehub_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
* `gkehub_projects_locations_scopes_create` - Creates a Scope.
* `gkehub_projects_locations_scopes_delete` - Deletes a Scope.
* `gkehub_projects_locations_scopes_get` - Returns the details of a Scope.
* `gkehub_projects_locations_scopes_list` - Lists Scopes.
* `gkehub_projects_locations_scopes_patch` - Updates a scopes.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
