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