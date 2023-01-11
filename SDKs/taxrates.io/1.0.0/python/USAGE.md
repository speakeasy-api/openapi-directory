<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TaxRatesByCountryCodeRequest(
    query_params=operations.TaxRatesByCountryCodeQueryParams(
        country_code="temporibus",
        date_="blanditiis",
        domain="quam",
        filter="totam",
        product_codes_="commodi",
        province="velit",
        zip="quo",
    ),
)
    
res = s.v1_tax.tax_rates_by_country_code(req)

if res.tax_rates_by_country_code_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->