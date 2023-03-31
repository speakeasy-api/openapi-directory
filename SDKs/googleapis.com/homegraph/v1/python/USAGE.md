<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.HomegraphAgentUsersDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    agent_user_id="distinctio",
    alt="proto",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    request_id="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.agent_users.homegraph_agent_users_delete(req, operations.HomegraphAgentUsersDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.empty is not None:
    # handle response
```
<!-- End SDK Example Usage -->