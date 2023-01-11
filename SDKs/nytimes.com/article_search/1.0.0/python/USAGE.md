<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        apikey=shared.SchemeApikey(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.GetArticlesearchJSONRequest(
    query_params=operations.GetArticlesearchJSONQueryParams(
        begin_date="distinctio",
        end_date="tempora",
        facet_field="accusamus",
        facet_filter=True,
        fl="magni",
        fq="dolorem",
        hl=False,
        page=5846039825160295552,
        q="nesciunt",
        sort="newest",
    ),
)
    
res = s.stories.get_articlesearch_json(req)

if res.get_articlesearch_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->