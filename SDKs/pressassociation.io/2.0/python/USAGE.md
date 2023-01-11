<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAssetRequest(
    security=operations.GetAssetSecurity(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    ),
    path_params=operations.GetAssetPathParams(
        asset_id="ut",
    ),
    query_params=operations.GetAssetQueryParams(
        aliases=False,
    ),
)
    
res = s.asset.get_asset(req)

if res.get_asset_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->