<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        bearer=shared.SchemeBearer(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AquiferCodesDemandListRequest(
    query_params=operations.AquiferCodesDemandListQueryParams(
        limit=4105802276156407248,
        offset=7219591670737759335,
    ),
)
    
res = s.aquifer_codes.aquifer_codes_demand_list(req)

if res.aquifer_codes_demand_list_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->