<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        http_bearer=shared.SchemeHTTPBearer(
            authorization="Bearer YOUR_BEARER_TOKEN_HERE",
        ),
    )
)
    
req = operations.GetPersonasRequest(
    query_params=operations.GetPersonasQueryParams(
        count=2825906764813013527,
        expand=[
            "sit",
        ],
        fields=[
            "dolor",
            "voluptatem",
            "illo",
        ],
        name="et",
        page=39748128132020036,
    ),
)
    
res = s.persona.get_personas(req)

if res.get_personas_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->