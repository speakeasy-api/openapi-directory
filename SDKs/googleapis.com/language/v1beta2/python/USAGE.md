<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.LanguageDocumentsAnalyzeEntitiesRequest(
    dollar_xgafv="2",
    analyze_entities_request=shared.AnalyzeEntitiesRequest(
        document=shared.Document(
            boilerplate_handling="SKIP_BOILERPLATE",
            content="distinctio",
            gcs_content_uri="quibusdam",
            language="unde",
            reference_web_uri="nulla",
            type="PLAIN_TEXT",
        ),
        encoding_type="UTF32",
    ),
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    oauth_token="magnam",
    pretty_print=False,
    quota_user="debitis",
    upload_type="ipsa",
    upload_protocol="delectus",
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