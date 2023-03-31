<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.FacetsRequest(
    count=548814,
    end_date="2021-07-27",
    facet_filters="quibusdam",
    search_terms="unde",
    sort_keys="updated,,desc",
    source="ADE",
    spatial="illum",
    start_date="2022-05-18",
    start_index=645894,
)
    
res = s.swagger_docs.facets(req)

if res.facets_200_application_nsidcfacets_plus_xml_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->