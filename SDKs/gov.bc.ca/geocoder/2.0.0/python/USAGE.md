<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetAddressesOutputFormatRequest(
    address_string="corrupti",
    auto_complete=False,
    bbox="provident",
    brief=False,
    centre="distinctio",
    civic_number="quibusdam",
    civic_number_suffix="unde",
    echo=False,
    extrapolate=False,
    interpolation="none",
    localities="corrupti",
    locality_name="illum",
    location_descriptor="frontDoorPoint",
    match_precision="error",
    match_precision_not="deserunt",
    max_distance=3843.82,
    max_results=437587,
    min_score=297534,
    not_localities="debitis",
    output_format="json",
    output_srs="26911",
    parcel_point="tempora",
    province_code="suscipit",
    set_back=477665,
    site_name="minus",
    street_direction="SE",
    street_name="voluptatum",
    street_qualifier="iusto",
    street_type="excepturi",
    unit_designator="PAD",
    unit_number="recusandae",
    unit_number_suffix="temporibus",
)
    
res = s.intersections.get_addresses_output_format_(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->