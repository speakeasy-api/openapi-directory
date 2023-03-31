<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.LanguageDocumentsAnalyzeEntitiesRequest(
    dollar_xgafv="2",
    analyze_entities_request=shared.AnalyzeEntitiesRequest(
        document=shared.Document(
            content="provident",
            gcs_content_uri="distinctio",
            language="quibusdam",
            type="PLAIN_TEXT",
        ),
        encoding_type="UTF32",
    ),
    access_token="corrupti",
    alt="proto",
    callback="vel",
    fields_="error",
    key="deserunt",
    oauth_token="suscipit",
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.documents.language_documents_analyze_entities(req, operations.LanguageDocumentsAnalyzeEntitiesSecurity(
    option1=operations.LanguageDocumentsAnalyzeEntitiesSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.analyze_entities_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->