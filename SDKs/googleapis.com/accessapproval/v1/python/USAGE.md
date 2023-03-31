<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.AccessapprovalProjectsApprovalRequestsApproveRequest(
    dollar_xgafv="2",
    approve_approval_request_message=shared.ApproveApprovalRequestMessage(
        expire_time="provident",
    ),
    access_token="distinctio",
    alt="proto",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    name="illum",
    oauth_token="vel",
    pretty_print=False,
    quota_user="error",
    upload_type="deserunt",
    upload_protocol="suscipit",
)
    
res = s.projects.accessapproval_projects_approval_requests_approve(req, operations.AccessapprovalProjectsApprovalRequestsApproveSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.approval_request is not None:
    # handle response
```
<!-- End SDK Example Usage -->