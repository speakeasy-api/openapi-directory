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
    
req = operations.ComposerProjectsLocationsEnvironmentsCreateRequest(
    security=operations.ComposerProjectsLocationsEnvironmentsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ComposerProjectsLocationsEnvironmentsCreatePathParams(
        parent="libero",
    ),
    query_params=operations.ComposerProjectsLocationsEnvironmentsCreateQueryParams(
        dollar_xgafv="2",
        access_token="et",
        alt="proto",
        callback="vitae",
        fields="ut",
        key="debitis",
        oauth_token="ea",
        pretty_print=False,
        quota_user="quia",
        upload_type="deserunt",
        upload_protocol="aliquid",
    ),
    request=shared.EnvironmentInput(
        config=shared.EnvironmentConfigInput(
            airflow_uri="nihil",
            dag_gcs_prefix="repellendus",
            database_config=shared.DatabaseConfig(
                machine_type="aut",
            ),
            encryption_config=shared.EncryptionConfig(
                kms_key_name="omnis",
            ),
            environment_size="ENVIRONMENT_SIZE_UNSPECIFIED",
            gke_cluster="ut",
            maintenance_window=shared.MaintenanceWindow(
                end_time="voluptatem",
                recurrence="illum",
                start_time="porro",
            ),
            master_authorized_networks_config=shared.MasterAuthorizedNetworksConfig(
                cidr_blocks=[
                    shared.CidrBlock(
                        cidr_block="quis",
                        display_name="ipsum",
                    ),
                    shared.CidrBlock(
                        cidr_block="qui",
                        display_name="et",
                    ),
                    shared.CidrBlock(
                        cidr_block="blanditiis",
                        display_name="quia",
                    ),
                ],
                enabled=False,
            ),
            node_config=shared.NodeConfig(
                disk_size_gb=311637717214665668,
                enable_ip_masq_agent=True,
                ip_allocation_policy=shared.IPAllocationPolicy(
                    cluster_ipv4_cidr_block="cupiditate",
                    cluster_secondary_range_name="laborum",
                    services_ipv4_cidr_block="deserunt",
                    services_secondary_range_name="dicta",
                    use_ip_aliases=True,
                ),
                location="officiis",
                machine_type="et",
                network="enim",
                oauth_scopes=[
                    "consequatur",
                    "rerum",
                    "quis",
                ],
                service_account="ut",
                subnetwork="porro",
                tags=[
                    "quis",
                    "vitae",
                    "deserunt",
                ],
            ),
            node_count=6099216200680606768,
            private_environment_config=shared.PrivateEnvironmentConfigInput(
                cloud_composer_connection_subnetwork="consequuntur",
                cloud_composer_network_ipv4_cidr_block="aspernatur",
                cloud_sql_ipv4_cidr_block="temporibus",
                enable_private_environment=True,
                enable_privately_used_public_ips=False,
                networking_config=shared.NetworkingConfig(
                    connection_type="PRIVATE_SERVICE_CONNECT",
                ),
                private_cluster_config=shared.PrivateClusterConfigInput(
                    enable_private_endpoint=True,
                    master_ipv4_cidr_block="in",
                ),
                web_server_ipv4_cidr_block="facilis",
            ),
            recovery_config=shared.RecoveryConfig(
                scheduled_snapshots_config=shared.ScheduledSnapshotsConfig(
                    enabled=False,
                    snapshot_creation_schedule="sequi",
                    snapshot_location="reprehenderit",
                    time_zone="consectetur",
                ),
            ),
            software_config=shared.SoftwareConfig(
                airflow_config_overrides={
                    "fugit": "quisquam",
                    "in": "iure",
                },
                env_variables={
                    "sunt": "repellendus",
                    "accusantium": "est",
                    "esse": "maiores",
                },
                image_version="voluptatem",
                pypi_packages={
                    "laudantium": "quas",
                    "dicta": "magnam",
                },
                python_version="id",
                scheduler_count=1908515449089205551,
            ),
            web_server_config=shared.WebServerConfig(
                machine_type="necessitatibus",
            ),
            web_server_network_access_control=shared.WebServerNetworkAccessControl(
                allowed_ip_ranges=[
                    shared.AllowedIPRange(
                        description="in",
                        value="quibusdam",
                    ),
                ],
            ),
            workloads_config=shared.WorkloadsConfig(
                scheduler=shared.SchedulerResource(
                    count=9121031162648800012,
                    cpu=84.099998,
                    memory_gb=63.099998,
                    storage_gb=17.100000,
                ),
                web_server=shared.WebServerResource(
                    cpu=38.099998,
                    memory_gb=89.199997,
                    storage_gb=30.200001,
                ),
                worker=shared.WorkerResource(
                    cpu=55.099998,
                    max_count=852588688461658516,
                    memory_gb=55.099998,
                    min_count=2104855243105749723,
                    storage_gb=75.099998,
                ),
            ),
        ),
        create_time="deserunt",
        labels={
            "ea": "id",
            "omnis": "ut",
        },
        name="blanditiis",
        state="DELETING",
        update_time="et",
        uuid="voluptas",
    ),
)
    
res = s.projects.composer_projects_locations_environments_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `composer_projects_locations_environments_create` - Create a new environment.
* `composer_projects_locations_environments_list` - List environments.
* `composer_projects_locations_environments_load_snapshot` - Loads a snapshot of a Cloud Composer environment. As a result of this operation, a snapshot of environment's specified in LoadSnapshotRequest is loaded into the environment.
* `composer_projects_locations_environments_patch` - Update an environment.
* `composer_projects_locations_environments_save_snapshot` - Creates a snapshots of a Cloud Composer environment. As a result of this operation, snapshot of environment's state is stored in a location specified in the SaveSnapshotRequest.
* `composer_projects_locations_image_versions_list` - List ImageVersions for provided location.
* `composer_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `composer_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `composer_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
