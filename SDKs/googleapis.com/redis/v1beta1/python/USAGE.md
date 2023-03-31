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