<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetQueryJSONRequest(
    query_params=operations.GetQueryJSONQueryParams(
        date_range="ut",
        elevation=3532929727473047315,
        facets=6728514527585200019,
        filter="laborum",
        latitude="ab",
        limit=8131292705867972818,
        longitude="ex",
        name="est",
        offset=7726756373010514897,
        query="nulla",
        sort="natus",
        sw="commodi",
    ),
)
    
res = s.events.get_query_json(req)

if res.get_query_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->