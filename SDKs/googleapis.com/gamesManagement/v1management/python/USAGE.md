<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GamesManagementAchievementsResetRequest(
    security=operations.GamesManagementAchievementsResetSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GamesManagementAchievementsResetPathParams(
        achievement_id="ullam",
    ),
    query_params=operations.GamesManagementAchievementsResetQueryParams(
        dollar_xgafv="1",
        access_token="perferendis",
        alt="proto",
        callback="et",
        fields="ea",
        key="rerum",
        oauth_token="et",
        pretty_print=False,
        quota_user="occaecati",
        upload_type="non",
        upload_protocol="sint",
    ),
)
    
res = s.achievements.games_management_achievements_reset(req)

if res.achievement_reset_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->