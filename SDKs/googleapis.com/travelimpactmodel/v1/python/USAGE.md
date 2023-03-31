<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TravelimpactmodelFlightsComputeFlightEmissionsRequest(
    dollar_xgafv="2",
    compute_flight_emissions_request=shared.ComputeFlightEmissionsRequest(
        flights=[
            shared.Flight(
                departure_date=shared.Date(
                    day=715190,
                    month=844266,
                    year=602763,
                ),
                destination="nulla",
                flight_number=544883,
                operating_carrier_code="illum",
                origin="vel",
            ),
            shared.Flight(
                departure_date=shared.Date(
                    day=623564,
                    month=645894,
                    year=384382,
                ),
                destination="iure",
                flight_number=297534,
                operating_carrier_code="debitis",
                origin="ipsa",
            ),
            shared.Flight(
                departure_date=shared.Date(
                    day=963663,
                    month=272656,
                    year=383441,
                ),
                destination="molestiae",
                flight_number=791725,
                operating_carrier_code="placeat",
                origin="voluptatum",
            ),
        ],
    ),
    access_token="iusto",
    alt="media",
    callback="nisi",
    fields_="recusandae",
    key="temporibus",
    oauth_token="ab",
    pretty_print=False,
    quota_user="quis",
    upload_type="veritatis",
    upload_protocol="deserunt",
)
    
res = s.flights.travelimpactmodel_flights_compute_flight_emissions(req)

if res.compute_flight_emissions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->