<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ComposerProjectsLocationsEnvironmentsCreateRequest(
    dollar_xgafv="2",
    environment_input=shared.EnvironmentInput(
        config=shared.EnvironmentConfigInput(
            airflow_uri="provident",
            dag_gcs_prefix="distinctio",
            database_config=shared.DatabaseConfig(
                machine_type="quibusdam",
            ),
            encryption_config=shared.EncryptionConfig(
                kms_key_name="unde",
            ),
            environment_size="ENVIRONMENT_SIZE_LARGE",
            gke_cluster="corrupti",
            maintenance_window=shared.MaintenanceWindow(
                end_time="illum",
                recurrence="vel",
                start_time="error",
            ),
            master_authorized_networks_config=shared.MasterAuthorizedNetworksConfig(
                cidr_blocks=[
                    shared.CidrBlock(
                        cidr_block="suscipit",
                        display_name="iure",
                    ),
                    shared.CidrBlock(
                        cidr_block="magnam",
                        display_name="debitis",
                    ),
                    shared.CidrBlock(
                        cidr_block="ipsa",
                        display_name="delectus",
                    ),
                ],
                enabled=False,
            ),
            node_config=shared.NodeConfig(
                disk_size_gb=272656,
                enable_ip_masq_agent=False,
                ip_allocation_policy=shared.IPAllocationPolicy(
                    cluster_ipv4_cidr_block="suscipit",
                    cluster_secondary_range_name="molestiae",
                    services_ipv4_cidr_block="minus",
                    services_secondary_range_name="placeat",
                    use_ip_aliases=False,
                ),
                location="voluptatum",
                machine_type="iusto",
                network="excepturi",
                oauth_scopes=[
                    "recusandae",
                    "temporibus",
                ],
                service_account="ab",
                subnetwork="quis",
                tags=[
                    "deserunt",
                ],
            ),
            node_count=20218,
            private_environment_config=shared.PrivateEnvironmentConfigInput(
                cloud_composer_connection_subnetwork="ipsam",
                cloud_composer_network_ipv4_cidr_block="repellendus",
                cloud_sql_ipv4_cidr_block="sapiente",
                enable_private_environment=False,
                enable_privately_used_public_ips=False,
                networking_config=shared.NetworkingConfig(
                    connection_type="PRIVATE_SERVICE_CONNECT",
                ),
                private_cluster_config=shared.PrivateClusterConfigInput(
                    enable_private_endpoint=False,
                    master_ipv4_cidr_block="odit",
                ),
                web_server_ipv4_cidr_block="at",
            ),
            recovery_config=shared.RecoveryConfig(
                scheduled_snapshots_config=shared.ScheduledSnapshotsConfig(
                    enabled=False,
                    snapshot_creation_schedule="at",
                    snapshot_location="maiores",
                    time_zone="molestiae",
                ),
            ),
            software_config=shared.SoftwareConfig(
                airflow_config_overrides={
                    "quod": "esse",
                    "totam": "porro",
                    "dolorum": "dicta",
                    "nam": "officia",
                },
                env_variables={
                    "fugit": "deleniti",
                    "hic": "optio",
                    "totam": "beatae",
                },
                image_version="commodi",
                pypi_packages={
                    "modi": "qui",
                    "impedit": "cum",
                },
                python_version="esse",
                scheduler_count=216550,
            ),
            web_server_config=shared.WebServerConfig(
                machine_type="excepturi",
            ),
            web_server_network_access_control=shared.WebServerNetworkAccessControl(
                allowed_ip_ranges=[
                    shared.AllowedIPRange(
                        description="perferendis",
                        value="ad",
                    ),
                ],
            ),
            workloads_config=shared.WorkloadsConfig(
                scheduler=shared.SchedulerResource(
                    count=617636,
                    cpu=1496.75,
                    memory_gb=6120.96,
                    storage_gb=2223.21,
                ),
                web_server=shared.WebServerResource(
                    cpu=6169.34,
                    memory_gb=3864.89,
                    storage_gb=9437.49,
                ),
                worker=shared.WorkerResource(
                    cpu=9025.99,
                    max_count=681820,
                    memory_gb=4499.5,
                    min_count=359508,
                    storage_gb=6130.64,
                ),
            ),
        ),
        create_time="iure",
        labels={
            "quidem": "architecto",
            "ipsa": "reiciendis",
            "est": "mollitia",
            "laborum": "dolores",
        },
        name="dolorem",
        state="RUNNING",
        update_time="explicabo",
        uuid="c5955907-aff1-4a3a-afa9-467739251aa5",
    ),
    access_token="odit",
    alt="proto",
    callback="sequi",
    fields_="tenetur",
    key="ipsam",
    oauth_token="id",
    parent="possimus",
    pretty_print=False,
    quota_user="aut",
    upload_type="quasi",
    upload_protocol="error",
)
    
res = s.projects.composer_projects_locations_environments_create(req, operations.ComposerProjectsLocationsEnvironmentsCreateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->