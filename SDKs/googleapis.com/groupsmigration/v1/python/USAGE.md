<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GroupsmigrationArchiveInsertRequest(
    security=operations.GroupsmigrationArchiveInsertSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GroupsmigrationArchiveInsertPathParams(
        group_id="quasi",
    ),
    query_params=operations.GroupsmigrationArchiveInsertQueryParams(
        dollar_xgafv="1",
        access_token="minima",
        alt="proto",
        callback="praesentium",
        fields="dignissimos",
        key="quo",
        oauth_token="omnis",
        pretty_print=True,
        quota_user="quibusdam",
        upload_type="corrupti",
        upload_protocol="voluptates",
    ),
)
    
res = s.archive.groupsmigration_archive_insert(req)

if res.groups is not None:
    # handle response
```
<!-- End SDK Example Usage -->