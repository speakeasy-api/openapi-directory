<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AddressAutocompleteRequest(
    api_key="ak_test",
    bias_country="corrupti",
    bias_ip="true",
    bias_lonlat="-2.095,57.15,100",
    bias_post_town="provident",
    bias_postcode="/addresses?postcode=SW1A2AA&q=10",
    bias_postcode_area="The postcode area of SW1A 2AA and N1 6RT are SW and N respectively",
    bias_postcode_outward="distinctio",
    bias_postcode_sector="SW1A 2AA is SW1A 2",
    bias_thoroughfare="quibusdam",
    box="2.095,57.15,-2.096,57.14",
    context="unde",
    country="England",
    limit=5,
    post_town="London",
    postcode="SW1A 2AA",
    postcode_area="SW",
    postcode_outward="1AA",
    postcode_sector="SW1A 2",
    postcode_type="L",
    query="nulla",
    su_organisation_indicator="Y",
    uprn=100023336956,
)
    
res = s.address_search.address_autocomplete(req)

if res.autocomplete_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->