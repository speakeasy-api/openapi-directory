<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        api_key=shared.SchemeAPIKey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.ParseAddressRequest(
    request=shared.ParseAddressRequestBody(
        address=shared.PartialAddress(
            address_line1="rerum",
            address_line2="ducimus",
            address_line3="quidem",
            address_residential_indicator={
                "a": "eveniet",
                "similique": "est",
            },
            city_locality="et",
            company_name="ea",
            country_code="ipsum",
            name="vel",
            phone="quia",
            postal_code="voluptas",
            state_province="commodi",
        ),
        text="non",
    ),
)
    
res = s.addresses.parse_address(req)

if res.parse_address_response_body is not None:
    # handle response
```
<!-- End SDK Example Usage -->