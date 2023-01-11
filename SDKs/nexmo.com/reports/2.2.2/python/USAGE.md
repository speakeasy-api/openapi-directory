<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CancelReportRequest(
    security=operations.CancelReportSecurity(
        basic_auth=shared.SchemeBasicAuth(
            password="YOUR_PASSWORD_HERE",
            username="YOUR_USERNAME_HERE",
        ),
    ),
    path_params=operations.CancelReportPathParams(
        report_id="est",
    ),
)
    
res = s.cancel_report(req)

if res.cancel_report_200_application_json_one_of is not None:
    # handle response
```
<!-- End SDK Example Usage -->