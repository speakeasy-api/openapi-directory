<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.VerifyCheckRequest(
    path_params=operations.VerifyCheckPathParams(
        format="json",
    ),
    request=shared.CheckRequest(
        api_key="et",
        api_secret="et",
        code="quasi",
        ip_address="nam",
        request_id="ut",
    ),
)
    
res = s.verify_check(req)

if res.verify_check_200_application_json_one_of is not None:
    # handle response
```
<!-- End SDK Example Usage -->