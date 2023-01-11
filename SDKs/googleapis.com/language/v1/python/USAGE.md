<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.LanguageDocumentsAnalyzeEntitiesRequest(
    security=operations.LanguageDocumentsAnalyzeEntitiesSecurity(
        option1=operations.LanguageDocumentsAnalyzeEntitiesSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            ),
        ),
    ),
    query_params=operations.LanguageDocumentsAnalyzeEntitiesQueryParams(
        dollar_xgafv="1",
        access_token="impedit",
        alt="json",
        callback="et",
        fields="autem",
        key="quasi",
        oauth_token="sed",
        pretty_print=False,
        quota_user="incidunt",
        upload_type="tenetur",
        upload_protocol="quasi",
    ),
    request=shared.AnalyzeEntitiesRequest(
        document=shared.Document(
            content="animi",
            gcs_content_uri="non",
            language="rerum",
            type="PLAIN_TEXT",
        ),
        encoding_type="UTF16",
    ),
)
    
res = s.documents.language_documents_analyze_entities(req)

if res.analyze_entities_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->