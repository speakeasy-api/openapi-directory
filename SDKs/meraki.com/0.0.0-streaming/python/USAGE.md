<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        meraki_api_key="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetOrganizationAPIRequestsRequest(
    admin_id="corrupti",
    ending_before="provident",
    method="distinctio",
    organization_id="quibusdam",
    path="unde",
    per_page=857946,
    response_code=544883,
    source_ip="illum",
    starting_after="vel",
    t0="error",
    t1="deserunt",
    timespan=3843.82,
)
    
res = s.api_usage.get_organization_api_requests(req)

if res.get_organization_api_requests_200_application_json_objects is not None:
    # handle response
```
<!-- End SDK Example Usage -->