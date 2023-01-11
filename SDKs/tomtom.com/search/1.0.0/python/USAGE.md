<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetSearchVersionNumberAdditionalDataExtRequest(
    path_params=operations.GetSearchVersionNumberAdditionalDataExtPathParams(
        ext="json",
        version_number=8970735356862830699,
    ),
    query_params=operations.GetSearchVersionNumberAdditionalDataExtQueryParams(
        geometries="temporibus",
        geometries_zoom=8570098006048428261,
    ),
)
    
res = s.additional_data.get_search_version_number_additional_data_ext_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->