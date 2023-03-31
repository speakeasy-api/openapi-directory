<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GetBusinessUnitsV3BusinessUnitsUserUserIDRequest(
    name=[
        "provident",
        "distinctio",
        "quibusdam",
    ],
    properties=[
        "nulla",
        "corrupti",
        "illum",
    ],
    user_id="vel",
)
    
res = s.business_unit.get_business_units_v3_business_units_user_user_id_(req, operations.GetBusinessUnitsV3BusinessUnitsUserUserIDSecurity(
    oauth2_legacy="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.collection_response_public_business_unit_no_paging is not None:
    # handle response
```
<!-- End SDK Example Usage -->