<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListRequest(
    path_params=operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListPathParams(
        parent="alias",
    ),
    query_params=operations.MybusinessbusinesscallsLocationsBusinesscallsinsightsListQueryParams(
        dollar_xgafv="2",
        access_token="ratione",
        alt="media",
        callback="non",
        fields="corrupti",
        filter="rerum",
        key="assumenda",
        oauth_token="veritatis",
        page_size=464811253189919483,
        page_token="recusandae",
        pretty_print=True,
        quota_user="odit",
        upload_type="voluptatum",
        upload_protocol="neque",
    ),
)
    
res = s.locations.mybusinessbusinesscalls_locations_businesscallsinsights_list(req)

if res.list_business_calls_insights_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->