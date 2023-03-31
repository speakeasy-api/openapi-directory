<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateByocTrunkCreateByocTrunkRequest(
    cnam_lookup_enabled=False,
    connection_policy_sid="corrupti",
    friendly_name="provident",
    from_domain_sid="distinctio",
    status_callback_method="DELETE",
    status_callback_url="https://tidy-mascara.org",
    voice_fallback_method="POST",
    voice_fallback_url="https://present-giggle.info",
    voice_method="GET",
    voice_url="https://awesome-voter.biz",
)
    
res = s.create_byoc_trunk(req, operations.CreateByocTrunkSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.voice_v1_byoc_trunk is not None:
    # handle response
```
<!-- End SDK Example Usage -->