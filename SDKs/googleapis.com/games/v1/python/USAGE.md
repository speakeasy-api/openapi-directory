<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GamesAchievementDefinitionsListRequest(
    security=operations.GamesAchievementDefinitionsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    query_params=operations.GamesAchievementDefinitionsListQueryParams(
        dollar_xgafv="1",
        access_token="quod",
        alt="json",
        callback="sunt",
        fields="nostrum",
        key="et",
        language="sed",
        max_results=1042231653372785846,
        oauth_token="omnis",
        page_token="similique",
        pretty_print=True,
        quota_user="consequatur",
        upload_type="alias",
        upload_protocol="voluptas",
    ),
)
    
res = s.achievement_definitions.games_achievement_definitions_list(req)

if res.achievement_definitions_list_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->