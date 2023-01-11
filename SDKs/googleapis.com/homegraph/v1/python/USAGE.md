<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.HomegraphAgentUsersDeleteRequest(
    security=operations.HomegraphAgentUsersDeleteSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.HomegraphAgentUsersDeletePathParams(
        agent_user_id="voluptatem",
    ),
    query_params=operations.HomegraphAgentUsersDeleteQueryParams(
        dollar_xgafv="1",
        access_token="voluptatum",
        alt="json",
        callback="ut",
        fields="consectetur",
        key="minima",
        oauth_token="laudantium",
        pretty_print=False,
        quota_user="aut",
        request_id="amet",
        upload_type="rerum",
        upload_protocol="reprehenderit",
    ),
)
    
res = s.agent_users.homegraph_agent_users_delete(req)

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->