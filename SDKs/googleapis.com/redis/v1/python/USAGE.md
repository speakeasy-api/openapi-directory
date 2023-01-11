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