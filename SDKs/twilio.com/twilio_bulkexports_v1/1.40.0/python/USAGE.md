<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateExportCustomJobRequest(
    request_body=operations.CreateExportCustomJobCreateExportCustomJobRequest(
        email="Larue_Rau85@yahoo.com",
        end_day="corrupti",
        friendly_name="illum",
        start_day="vel",
        webhook_method="error",
        webhook_url="deserunt",
    ),
    resource_type="suscipit",
)
    
res = s.create_export_custom_job(req, operations.CreateExportCustomJobSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.bulkexports_v1_export_export_custom_job is not None:
    # handle response
```
<!-- End SDK Example Usage -->