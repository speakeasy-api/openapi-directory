<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetAtmsRequest(
    headers=operations.GetAtmsHeaders(
        if_modified_since="nemo",
        if_none_match="voluptatem",
    ),
)
    
res = s.atm.get_atms(req)

if res.get_atms_200_application_prs_openbanking_opendata_v1_3_plus_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->