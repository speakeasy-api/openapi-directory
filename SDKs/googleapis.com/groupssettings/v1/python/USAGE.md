<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GroupsSettingsGroupsGetRequest(
    security=operations.GroupsSettingsGroupsGetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GroupsSettingsGroupsGetPathParams(
        group_unique_id="sunt",
    ),
    query_params=operations.GroupsSettingsGroupsGetQueryParams(
        alt="json",
        fields="aut",
        key="vel",
        oauth_token="et",
        pretty_print=False,
        quota_user="maiores",
        user_ip="et",
    ),
)
    
res = s.groups.groups_settings_groups_get(req)

if res.groups is not None:
    # handle response
```
<!-- End SDK Example Usage -->