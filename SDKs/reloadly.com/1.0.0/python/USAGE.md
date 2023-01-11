<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateANewQuestionRequest(
    request=operations.CreateANewQuestionRequestBody(
        choices=[
            "aut",
        ],
        question="beatae",
    ),
)
    
res = s.create_a_new_question(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->