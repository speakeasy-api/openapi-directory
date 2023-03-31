<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        apikey="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetArticlesearchJSONRequest(
    begin_date="corrupti",
    end_date="provident",
    facet_field="distinctio",
    facet_filter=False,
    fl="quibusdam",
    fq="unde",
    hl=False,
    page=857946,
    q="corrupti",
    sort="oldest",
)
    
res = s.stories.get_articlesearch_json(req)

if res.get_articlesearch_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->