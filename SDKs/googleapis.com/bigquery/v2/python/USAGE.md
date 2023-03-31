<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.BigqueryDatasetsDeleteRequest(
    alt="json",
    dataset_id="corrupti",
    delete_contents=False,
    fields_="provident",
    key="distinctio",
    oauth_token="quibusdam",
    pretty_print=False,
    project_id="unde",
    quota_user="nulla",
    user_ip="corrupti",
)
    
res = s.datasets.bigquery_datasets_delete(req, operations.BigqueryDatasetsDeleteSecurity(
    option1=operations.BigqueryDatasetsDeleteSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->