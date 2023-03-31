<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DriveactivityActivityQueryRequest(
    dollar_xgafv="2",
    query_drive_activity_request=shared.QueryDriveActivityRequest(
        ancestor_name="provident",
        consolidation_strategy=shared.ConsolidationStrategy(
            legacy={
                "quibusdam": "unde",
                "nulla": "corrupti",
                "illum": "vel",
            },
            none={
                "deserunt": "suscipit",
                "iure": "magnam",
                "debitis": "ipsa",
            },
        ),
        filter="delectus",
        item_name="tempora",
        page_size=383441,
        page_token="molestiae",
    ),
    access_token="minus",
    alt="proto",
    callback="voluptatum",
    fields_="iusto",
    key="excepturi",
    oauth_token="nisi",
    pretty_print=False,
    quota_user="recusandae",
    upload_type="temporibus",
    upload_protocol="ab",
)
    
res = s.activity.driveactivity_activity_query(req, operations.DriveactivityActivityQuerySecurity(
    option1=operations.DriveactivityActivityQuerySecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.query_drive_activity_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->