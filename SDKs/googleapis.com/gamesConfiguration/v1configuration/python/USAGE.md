<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GamesConfigurationAchievementConfigurationsDeleteRequest(
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
    
res = s.achievement_configurations.games_configuration_achievement_configurations_delete(req, operations.GamesConfigurationAchievementConfigurationsDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->