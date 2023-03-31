<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DeleteJsappsCodeJSONRequest(
    authtoken="corrupti",
    code="provident",
    login="distinctio",
)
    
res = s.apps.delete_jsapps_code_json(req)

if res.delete_jsapps_code_json_200_application_json_string is not None:
    # handle response
```
<!-- End SDK Example Usage -->