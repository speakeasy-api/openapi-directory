<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileRequest(
    dollar_xgafv="2",
    google_cloud_dialogflow_v2beta1_compile_suggestion_request=shared.GoogleCloudDialogflowV2beta1CompileSuggestionRequest(
        context_size=592845,
        latest_message="distinctio",
    ),
    access_token="quibusdam",
    alt="media",
    callback="nulla",
    fields_="corrupti",
    key="illum",
    oauth_token="vel",
    parent="error",
    pretty_print=False,
    quota_user="deserunt",
    upload_type="suscipit",
    upload_protocol="iure",
)
    
res = s.projects.dialogflow_projects_conversations_participants_suggestions_compile(req, operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurity(
    option1=operations.DialogflowProjectsConversationsParticipantsSuggestionsCompileSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.google_cloud_dialogflow_v2beta1_compile_suggestion_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->