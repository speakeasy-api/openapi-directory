<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DiscoveryApisGetRestRequest(
    alt="json",
    api="corrupti",
    fields_="provident",
    key="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    quota_user="unde",
    user_ip="nulla",
    version="corrupti",
)
    
res = s.apis.discovery_apis_get_rest(req)

if res.rest_description is not None:
    # handle response
```
<!-- End SDK Example Usage -->