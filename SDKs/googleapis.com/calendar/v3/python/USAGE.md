<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CalendarACLDeleteRequest(
    alt="json",
    calendar_id="corrupti",
    fields_="provident",
    key="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    quota_user="unde",
    rule_id="nulla",
    user_ip="corrupti",
)
    
res = s.acl.calendar_acl_delete(req, operations.CalendarACLDeleteSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->