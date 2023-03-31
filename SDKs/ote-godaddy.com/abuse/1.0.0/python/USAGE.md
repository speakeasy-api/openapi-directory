<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = shared.AbuseTicketCreate(
    info="corrupti",
    info_url="provident",
    intentional=False,
    proxy="distinctio",
    source="quibusdam",
    target="unde",
    type="PHISHING",
)
    
res = s.v1.create_ticket(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->