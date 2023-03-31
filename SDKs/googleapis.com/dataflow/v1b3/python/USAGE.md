<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DataflowProjectsDeleteSnapshotsRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    key="nulla",
    location="corrupti",
    oauth_token="illum",
    pretty_print=False,
    project_id="vel",
    quota_user="error",
    snapshot_id="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.dataflow_projects_delete_snapshots(req, operations.DataflowProjectsDeleteSnapshotsSecurity(
    option1=operations.DataflowProjectsDeleteSnapshotsSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.delete_snapshot_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->