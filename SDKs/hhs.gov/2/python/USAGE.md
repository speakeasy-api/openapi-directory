<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetResourcesCampaignsJSONRequest(
    query_params=operations.GetResourcesCampaignsJSONQueryParams(
        max=2660338303249884092,
        offset=6293786694293878591,
        sort="qui",
    ),
)
    
res = s.campaigns.get_resources_campaigns_json(req)

if res.campaign_wrapped is not None:
    # handle response
```
<!-- End SDK Example Usage -->