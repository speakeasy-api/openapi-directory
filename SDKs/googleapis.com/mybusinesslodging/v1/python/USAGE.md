<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MybusinesslodgingLocationsGetLodgingRequest(
    path_params=operations.MybusinesslodgingLocationsGetLodgingPathParams(
        name="non",
    ),
    query_params=operations.MybusinesslodgingLocationsGetLodgingQueryParams(
        dollar_xgafv="1",
        access_token="corrupti",
        alt="proto",
        callback="et",
        fields="atque",
        key="sed",
        oauth_token="maiores",
        pretty_print=True,
        quota_user="eos",
        read_mask="animi",
        upload_type="iste",
        upload_protocol="reprehenderit",
    ),
)
    
res = s.locations.mybusinesslodging_locations_get_lodging(req)

if res.lodging is not None:
    # handle response
```
<!-- End SDK Example Usage -->