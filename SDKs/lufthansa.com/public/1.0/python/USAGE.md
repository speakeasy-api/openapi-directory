<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest(
    security=operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity(
        auth=shared.SchemeAuth(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetPathParams(
        destination="optio",
        from_date="aut",
        origin="aut",
        product_code="FCP",
    ),
    headers=operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetHeaders(
        accept="numquam",
    ),
)
    
res = s.cargo.cargo_get_route_from_date_product_code_by_origin_and_destination_get(req)

if res.cargo_get_route_from_date_product_code_by_origin_and_destination_get_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->