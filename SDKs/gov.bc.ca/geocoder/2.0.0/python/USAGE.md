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
    
req = operations.GetAddressesOutputFormatRequest(
    path_params=operations.GetAddressesOutputFormatPathParams(
        output_format="gml",
    ),
    query_params=operations.GetAddressesOutputFormatQueryParams(
        address_string="quia",
        auto_complete=True,
        bbox="sapiente",
        brief=False,
        centre="voluptatem",
        civic_number="quia",
        civic_number_suffix="inventore",
        echo=False,
        extrapolate=True,
        interpolation="none",
        localities="officia",
        locality_name="ut",
        location_descriptor="routingPoint",
        match_precision="officiis",
        match_precision_not="qui",
        max_distance=47.200001,
        max_results=5879687173104419379,
        min_score=3085065235994805466,
        not_localities="aut",
        output_srs=2188229587528031884,
        parcel_point="autem",
        province_code="suscipit",
        set_back=6312999475177175595,
        site_name="saepe",
        street_direction="NO",
        street_name="labore",
        street_qualifier="possimus",
        street_type="qui",
        unit_designator="UNIT",
        unit_number="repudiandae",
        unit_number_suffix="alias",
    ),
)
    
res = s.intersections.get_addresses_output_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->