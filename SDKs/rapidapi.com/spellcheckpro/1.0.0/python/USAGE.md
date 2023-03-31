<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CheckSpellingRussianRequest(
    request_body=operations.CheckSpellingRussianRequestBody(
        lang_code="ru",
        text="Добрый вее!",
    ),
    x_rapid_api_key="corrupti",
)
    
res = s.check_spelling_russian(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->