<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.VerifyCheckRequest(
    check_request=shared.CheckRequest(
        api_key="abcd1234",
        api_secret="Sup3rS3cr3t!!",
        code="1234",
        ip_address="123.0.0.255",
        request_id="abcdef0123456789abcdef0123456789",
    ),
    format="xml",
)
    
res = s.verify_check(req)

if res.verify_check_200_application_json_one_of is not None:
    # handle response
```
<!-- End SDK Example Usage -->