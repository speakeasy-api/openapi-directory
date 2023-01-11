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