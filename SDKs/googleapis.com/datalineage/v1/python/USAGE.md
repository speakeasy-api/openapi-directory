<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatalineageProjectsLocationsBatchSearchLinkProcessesRequest(
    dollar_xgafv="2",
    google_cloud_datacatalog_lineage_v1_batch_search_link_processes_request=shared.GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest(
        links=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
        page_size=857946,
        page_token="corrupti",
    ),
    access_token="illum",
    alt="media",
    callback="error",
    fields_="deserunt",
    key="suscipit",
    oauth_token="iure",
    parent="magnam",
    pretty_print=False,
    quota_user="debitis",
    upload_type="ipsa",
    upload_protocol="delectus",
)
    
res = s.projects.datalineage_projects_locations_batch_search_link_processes(req, operations.DatalineageProjectsLocationsBatchSearchLinkProcessesSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.google_cloud_datacatalog_lineage_v1_batch_search_link_processes_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->