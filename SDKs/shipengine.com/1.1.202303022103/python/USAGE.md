<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
    ),
)


req = shared.ParseAddressRequestBody(
    address=shared.PartialAddress(
        address_line1="1999 Bishop Grandin Blvd.",
        address_line2="Unit 408",
        address_line3="Building #7",
        address_residential_indicator="no",
        city_locality="Winnipeg",
        company_name="The Home Depot",
        country_code="CA",
        email="example@example.com",
        name="John Doe",
        phone="+1 204-253-9411 ext. 123",
        postal_code="78756-3717",
        state_province="Manitoba",
    ),
    text="Margie McMiller at 3800 North Lamar suite 200 in austin, tx.  The zip code there is 78652.",
)
    
res = s.addresses.parse_address(req)

if res.parse_address_response_body is not None:
    # handle response
```
<!-- End SDK Example Usage -->