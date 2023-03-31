<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GroupsSettingsGroupsGetRequest(
    alt="json",
    fields_="provident",
    group_unique_id="distinctio",
    key="quibusdam",
    oauth_token="unde",
    pretty_print=False,
    quota_user="nulla",
    user_ip="corrupti",
)
    
res = s.groups.groups_settings_groups_get(req, operations.GroupsSettingsGroupsGetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.groups is not None:
    # handle response
```
<!-- End SDK Example Usage -->