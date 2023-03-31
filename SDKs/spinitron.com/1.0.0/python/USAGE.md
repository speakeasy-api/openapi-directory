<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        access_token="YOUR_API_KEY_HERE",
    ),
)


req = operations.GetPersonasRequest(
    count=548814,
    expand=[
        "distinctio",
        "quibusdam",
        "unde",
    ],
    fields_=[
        "corrupti",
        "illum",
        "vel",
        "error",
    ],
    name="deserunt",
    page=384382,
)
    
res = s.persona.get_personas(req)

if res.get_personas_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->