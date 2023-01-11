<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.GetglobalnumberinfoRequest(
    query_params=operations.GetglobalnumberinfoQueryParams(
        intlnumber="perferendis",
        license="natus",
    ),
)
    
res = s.global_phone_number_information.getglobalnumberinfo(req)

if res.getglobalnumberinfo_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->