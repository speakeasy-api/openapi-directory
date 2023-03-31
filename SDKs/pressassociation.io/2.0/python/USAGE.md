<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetAssetRequest(
    aliases=False,
    asset_id="corrupti",
)
    
res = s.asset.get_asset(req, operations.GetAssetSecurity(
    apikey="YOUR_API_KEY_HERE",
))

if res.get_asset_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->