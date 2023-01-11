<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.AccessapprovalProjectsApprovalRequestsApproveRequest(
    security=operations.AccessapprovalProjectsApprovalRequestsApproveSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.AccessapprovalProjectsApprovalRequestsApprovePathParams(
        name="qui",
    ),
    query_params=operations.AccessapprovalProjectsApprovalRequestsApproveQueryParams(
        dollar_xgafv="2",
        access_token="sequi",
        alt="media",
        callback="alias",
        fields="velit",
        key="sit",
        oauth_token="rerum",
        pretty_print=False,
        quota_user="reprehenderit",
        upload_type="laborum",
        upload_protocol="voluptatibus",
    ),
    request=shared.ApproveApprovalRequestMessage(
        expire_time="ipsum",
    ),
)
    
res = s.projects.accessapproval_projects_approval_requests_approve(req)

if res.approval_request is not None:
    # handle response
```
<!-- End SDK Example Usage -->