<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetRequest(
    query_params=operations.GetQueryParams(
        addon=[
            "country",
        ],
        format="json",
        ip="exercitationem",
        key="tempora",
        lang="ru",
        package="WS4",
    ),
)
    
res = s.get_(req)

if res.get_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->