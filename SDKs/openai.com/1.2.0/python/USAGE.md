<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CancelFineTuneRequest(
    fine_tune_id="ft-AF1WoRqd3aJAHsqc9NY7iL8F",
)
    
res = s.open_ai.cancel_fine_tune(req)

if res.fine_tune is not None:
    # handle response
```
<!-- End SDK Example Usage -->