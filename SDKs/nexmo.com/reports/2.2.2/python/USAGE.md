<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CancelReportRequest(
    report_id="aaaaaaaa-bbbb-cccc-dddd-0123456789ab",
)
    
res = s.cancel_report(req, operations.CancelReportSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.cancel_report_200_application_json_one_of is not None:
    # handle response
```
<!-- End SDK Example Usage -->