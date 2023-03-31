<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()

    
res = s.cards.cards()

if res.card_resumes is not None:
    # handle response
```
<!-- End SDK Example Usage -->