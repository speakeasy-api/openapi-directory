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
        parent="ut",
    ),
    query_params=operations.RedisProjectsLocationsInstancesCreateQueryParams(
        dollar_xgafv="1",
        access_token="sit",
        alt="json",
        callback="architecto",
        fields="rerum",
        instance_id="et",
        key="reprehenderit",
        oauth_token="ratione",
        pretty_print=True,
        quota_user="et",
        upload_type="consequatur",
        upload_protocol="molestiae",
    ),
    request=shared.InstanceInput(
        alternative_location_id="corrupti",
        auth_enabled=False,
        authorized_network="dolorem",
        available_maintenance_versions=[
            "est",
        ],
        connect_mode="PRIVATE_SERVICE_ACCESS",
        customer_managed_key="facilis",
        display_name="sunt",
        labels={
            "dolorem": "velit",
            "et": "quam",
            "quas": "id",
        },
        location_id="consectetur",
        maintenance_policy=shared.MaintenancePolicyInput(
            description="in",
            weekly_maintenance_window=[
                shared.WeeklyMaintenanceWindowInput(
                    day="WEDNESDAY",
                    start_time=shared.TimeOfDay(
                        hours=1629836068589765182,
                        minutes=8485403568222127893,
                        nanos=2012812200617784303,
                        seconds=1973067278396642689,
                    ),
                ),
                shared.WeeklyMaintenanceWindowInput(
                    day="FRIDAY",
                    start_time=shared.TimeOfDay(
                        hours=4942470392494298544,
                        minutes=5117665322106138623,
                        nanos=4053305184930719950,
                        seconds=2694493903399201115,
                    ),
                ),
            ],
        ),
        maintenance_schedule=shared.MaintenanceScheduleInput(
            can_reschedule=False,
        ),
        maintenance_version="repellat",
        memory_size_gb=2779198128664217717,
        name="est",
        persistence_config=shared.PersistenceConfigInput(
            persistence_mode="RDB",
            rdb_snapshot_period="TWELVE_HOURS",
            rdb_snapshot_start_time="nam",
        ),
        read_replicas_mode="READ_REPLICAS_ENABLED",
        redis_configs={
            "minus": "molestiae",
            "tempora": "sed",
            "architecto": "nam",
        },
        redis_version="ut",
        replica_count=7465651500649602327,
        reserved_ip_range="commodi",
        secondary_ip_range="doloremque",
        suspension_reasons=[
            "SUSPENSION_REASON_UNSPECIFIED",
            "CUSTOMER_MANAGED_KEY_ISSUE",
        ],
        tier="BASIC",
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

* `redis_projects_locations_instances_create` - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. The completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
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
