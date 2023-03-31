<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetRequest(
    addon=[
        "geotargeting",
        "country_groupings",
        "country_groupings",
    ],
    format="xml",
    ip="8.8.8.8",
    key="nulla",
    lang="ja",
    package="WS22",
)
    
res = s.get_(req)

if res.get_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->