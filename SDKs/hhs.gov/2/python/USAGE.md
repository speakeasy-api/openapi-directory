<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetResourcesCampaignsJSONRequest(
    max=548814,
    offset=592845,
    sort="distinctio",
)
    
res = s.campaigns.get_resources_campaigns_json(req)

if res.campaign_wrapped is not None:
    # handle response
```
<!-- End SDK Example Usage -->