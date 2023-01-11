<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.FacetsRequest(
    query_params=operations.FacetsQueryParams(
        count=1284135809095201652,
        end_date="1980-04-14",
        facet_filters="sed",
        search_terms="cupiditate",
        sort_keys="temporal_duration,,desc",
        source="ADE",
        spatial="repellendus",
        start_date="2004-02-29",
        start_index=2871197063775501498,
    ),
)
    
res = s.swagger_docs.facets(req)

if res.facets_200_application_nsidcfacets_plus_xml_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->