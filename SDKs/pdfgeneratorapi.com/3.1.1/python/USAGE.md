<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        json_web_token_auth="Bearer YOUR_BEARER_TOKEN_HERE",
    ),
)


req = operations.MergeTemplateRequest(
    data=shared.Data(
        id=12312,
        name="Sample Data",
    ),
    format="pdf",
    name="My document",
    output="base64",
    template_id=19375,
)
    
res = s.documents.merge_template(req)

if res.merge_template_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->