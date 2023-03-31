# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/redis/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RedisProjectsLocationsInstancesCreateRequest(
    dollar_xgafv="2",
    instance_input=shared.InstanceInput(
        alternative_location_id="provident",
        auth_enabled=False,
        authorized_network="distinctio",
        available_maintenance_versions=[
            "unde",
            "nulla",
            "corrupti",
            "illum",
        ],
        connect_mode="DIRECT_PEERING",
        customer_managed_key="error",
        display_name="deserunt",
        labels={
            "iure": "magnam",
            "debitis": "ipsa",
        },
        location_id="delectus",
        maintenance_policy=shared.MaintenancePolicyInput(
            description="tempora",
            weekly_maintenance_window=[
                shared.WeeklyMaintenanceWindowInput(
                    day="WEDNESDAY",
                    start_time=shared.TimeOfDay(
                        hours=791725,
                        minutes=812169,
                        nanos=528895,
                        seconds=479977,
                    ),
                ),
                shared.WeeklyMaintenanceWindowInput(
                    day="THURSDAY",
                    start_time=shared.TimeOfDay(
                        hours=392785,
                        minutes=925597,
                        nanos=836079,
                        seconds=71036,
                    ),
                ),
            ],
        ),
        maintenance_schedule=shared.MaintenanceScheduleInput(
            can_reschedule=False,
        ),
        maintenance_version="quis",
        memory_size_gb=87129,
        name="deserunt",
        persistence_config=shared.PersistenceConfigInput(
            persistence_mode="PERSISTENCE_MODE_UNSPECIFIED",
            rdb_snapshot_period="ONE_HOUR",
            rdb_snapshot_start_time="repellendus",
        ),
        read_replicas_mode="READ_REPLICAS_ENABLED",
        redis_configs={
            "odit": "at",
            "at": "maiores",
            "molestiae": "quod",
            "quod": "esse",
        },
        redis_version="totam",
        replica_count=780529,
        reserved_ip_range="dolorum",
        secondary_ip_range="dicta",
        suspension_reasons=[
            "CUSTOMER_MANAGED_KEY_ISSUE",
            "CUSTOMER_MANAGED_KEY_ISSUE",
            "SUSPENSION_REASON_UNSPECIFIED",
        ],
        tier="BASIC",
        transit_encryption_mode="DISABLED",
    ),
    access_token="optio",
    alt="media",
    callback="beatae",
    fields_="commodi",
    instance_id="molestiae",
    key="modi",
    oauth_token="qui",
    parent="impedit",
    pretty_print=False,
    quota_user="cum",
    upload_type="esse",
    upload_protocol="ipsum",
)
    
res = s.projects.redis_projects_locations_instances_create(req, operations.RedisProjectsLocationsInstancesCreateSecurity(
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

* `redis_projects_locations_instances_create` - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redis_projects_locations_instances_export` - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redis_projects_locations_instances_failover` - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
* `redis_projects_locations_instances_get_auth_string` - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
* `redis_projects_locations_instances_import` - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redis_projects_locations_instances_list` - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
* `redis_projects_locations_instances_patch` - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
* `redis_projects_locations_instances_reschedule_maintenance` - Reschedule maintenance for a given instance in a given project and location.
* `redis_projects_locations_instances_upgrade` - Upgrades Redis instance to the newer Redis version specified in the request.
* `redis_projects_locations_list` - Lists information about the supported locations for this service.
* `redis_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `redis_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `redis_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `redis_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
