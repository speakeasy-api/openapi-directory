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
    
req = operations.RedisProjectsLocationsInstancesCreateRequest(
    security=operations.RedisProjectsLocationsInstancesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RedisProjectsLocationsInstancesCreatePathParams(
        parent="molestiae",
    ),
    query_params=operations.RedisProjectsLocationsInstancesCreateQueryParams(
        dollar_xgafv="1",
        access_token="voluptatem",
        alt="media",
        callback="officia",
        fields="architecto",
        instance_id="labore",
        key="laboriosam",
        oauth_token="in",
        pretty_print=False,
        quota_user="beatae",
        upload_type="blanditiis",
        upload_protocol="beatae",
    ),
    request=shared.InstanceInput(
        alternative_location_id="voluptate",
        auth_enabled=False,
        authorized_network="molestiae",
        connect_mode="DIRECT_PEERING",
        customer_managed_key="ut",
        display_name="ipsam",
        labels={
            "atque": "molestias",
            "ut": "dolores",
            "voluptas": "omnis",
        },
        location_id="id",
        maintenance_policy=shared.MaintenancePolicyInput(
            description="nostrum",
            weekly_maintenance_window=[
                shared.WeeklyMaintenanceWindowInput(
                    day="TUESDAY",
                    start_time=shared.TimeOfDay(
                        hours=7207637891447502103,
                        minutes=8622083641679649735,
                        nanos=6406047390230794463,
                        seconds=8648367394506910482,
                    ),
                ),
                shared.WeeklyMaintenanceWindowInput(
                    day="DAY_OF_WEEK_UNSPECIFIED",
                    start_time=shared.TimeOfDay(
                        hours=102516519619783577,
                        minutes=2317600410149429910,
                        nanos=4401454000593110478,
                        seconds=3498630052342442269,
                    ),
                ),
            ],
        ),
        maintenance_schedule=shared.MaintenanceScheduleInput(
            can_reschedule=False,
        ),
        memory_size_gb=2306973576407439514,
        name="reprehenderit",
        persistence_config=shared.PersistenceConfigInput(
            persistence_mode="PERSISTENCE_MODE_UNSPECIFIED",
            rdb_snapshot_period="TWELVE_HOURS",
            rdb_snapshot_start_time="eveniet",
        ),
        read_replicas_mode="READ_REPLICAS_DISABLED",
        redis_configs={
            "quasi": "voluptates",
        },
        redis_version="eligendi",
        replica_count=4525063102438322793,
        reserved_ip_range="deserunt",
        secondary_ip_range="ea",
        suspension_reasons=[
            "CUSTOMER_MANAGED_KEY_ISSUE",
            "CUSTOMER_MANAGED_KEY_ISSUE",
        ],
        tier="TIER_UNSPECIFIED",
        transit_encryption_mode="TRANSIT_ENCRYPTION_MODE_UNSPECIFIED",
    ),
)
    
res = s.projects.redis_projects_locations_instances_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

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
* `redis_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
