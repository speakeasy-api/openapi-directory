<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetRequest(
    accept="corrupti",
    destination="provident",
    from_date="distinctio",
    origin="quibusdam",
    product_code="YNB",
)
    
res = s.cargo.cargo_get_route_from_date_product_code_by_origin_and_destination_get(req, operations.CargoGetRouteFromDateProductCodeByOriginAndDestinationGetSecurity(
    auth="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.cargo_get_route_from_date_product_code_by_origin_and_destination_get_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->