<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TaxRatesByCountryCodeRequest(
    country_code="US",
    date_="2020-09-02",
    domain="api.taxrates.io",
    filter="corrupti",
    product_codes="C010",
    province="provident",
    zip="71642",
)
    
res = s.v1_tax.tax_rates_by_country_code(req)

if res.tax_rates_by_country_code_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->