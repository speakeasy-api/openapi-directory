<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TravelimpactmodelFlightsComputeFlightEmissionsRequest(
    query_params=operations.TravelimpactmodelFlightsComputeFlightEmissionsQueryParams(
        dollar_xgafv="1",
        access_token="amet",
        alt="proto",
        callback="velit",
        fields="id",
        key="quos",
        oauth_token="sit",
        pretty_print=True,
        quota_user="ut",
        upload_type="autem",
        upload_protocol="maxime",
    ),
    request=shared.ComputeFlightEmissionsRequest(
        flights=[
            shared.Flight(
                departure_date=shared.Date(
                    day=3414330612766374518,
                    month=7016130896292550698,
                    year=8639846375246871580,
                ),
                destination="et",
                flight_number=6689465552050660190,
                operating_carrier_code="quis",
                origin="dolor",
            ),
            shared.Flight(
                departure_date=shared.Date(
                    day=4465709863325755882,
                    month=150416842709719260,
                    year=7716596964253133653,
                ),
                destination="nihil",
                flight_number=8732707823561012094,
                operating_carrier_code="laborum",
                origin="error",
            ),
        ],
    ),
)
    
res = s.flights.travelimpactmodel_flights_compute_flight_emissions(req)

if res.compute_flight_emissions_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->