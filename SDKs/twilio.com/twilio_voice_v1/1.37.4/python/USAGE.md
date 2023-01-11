<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateByocTrunkRequest(
    security=operations.CreateByocTrunkSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    request=operations.CreateByocTrunkCreateByocTrunkRequest(
        cnam_lookup_enabled=True,
        connection_policy_sid="doloribus",
        friendly_name="distinctio",
        from_domain_sid="tempora",
        status_callback_method="DELETE",
        status_callback_url="in",
        voice_fallback_method="HEAD",
        voice_fallback_url="assumenda",
        voice_method="GET",
        voice_url="quos",
    ),
)
    
res = s.create_byoc_trunk(req)

if res.voice_v1_byoc_trunk is not None:
    # handle response
```
<!-- End SDK Example Usage -->