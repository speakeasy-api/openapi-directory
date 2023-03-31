<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteRequest(
    dollar_xgafv="2",
    google_cloud_dialogflow_v2_batch_delete_entity_types_request=shared.GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest(
        entity_type_names=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
    ),
    access_token="nulla",
    alt="media",
    callback="illum",
    fields_="vel",
    key="error",
    oauth_token="deserunt",
    parent="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.projects.dialogflow_projects_locations_agent_entity_types_batch_delete(req, operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurity(
    option1=operations.DialogflowProjectsLocationsAgentEntityTypesBatchDeleteSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->