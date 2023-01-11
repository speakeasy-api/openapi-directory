<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CreateExportCustomJobRequest(
    security=operations.CreateExportCustomJobSecurity(
        account_sid_auth_token=shared.SchemeAccountSidAuthToken(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CreateExportCustomJobPathParams(
        resource_type="ab",
    ),
    request=operations.CreateExportCustomJobCreateExportCustomJobRequest(
        email="deleniti",
        end_day="quod",
        friendly_name="assumenda",
        start_day="blanditiis",
        webhook_method="dignissimos",
        webhook_url="ex",
    ),
)
    
res = s.create_export_custom_job(req)

if res.bulkexports_v1_export_export_custom_job is not None:
    # handle response
```
<!-- End SDK Example Usage -->