<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TransportationIncentivesLawsAllRequest(
    api_key="corrupti",
    expired=False,
    incentive_type="provident",
    jurisdiction="distinctio",
    keyword="quibusdam",
    law_type="unde",
    limit=857946,
    local=False,
    output_format="xml",
    poc=False,
    recent=False,
    regulation_type="illum",
    technology="vel",
    user_type="error",
)
    
res = s.transportation_incentives_laws_all(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->