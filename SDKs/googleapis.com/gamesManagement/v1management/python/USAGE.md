<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GamesManagementAchievementsResetRequest(
    dollar_xgafv="2",
    access_token="provident",
    achievement_id="distinctio",
    alt="proto",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.achievements.games_management_achievements_reset(req, operations.GamesManagementAchievementsResetSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.achievement_reset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->