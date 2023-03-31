<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAPIV2BroadcastservicesRequest(
    order_by_id="desc",
    page_size=592845,
    page_start=715190,
)
    
res = s.broadcast_services.get_api_v2_broadcastservices(req, operations.GetAPIV2BroadcastservicesSecurity(
    cd_oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.episodes is not None:
    # handle response
```
<!-- End SDK Example Usage -->