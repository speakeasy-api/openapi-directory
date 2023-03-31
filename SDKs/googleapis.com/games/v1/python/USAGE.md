<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GamesAchievementDefinitionsListRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    language="corrupti",
    max_results=847252,
    oauth_token="vel",
    page_token="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.achievement_definitions.games_achievement_definitions_list(req, operations.GamesAchievementDefinitionsListSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.achievement_definitions_list_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->