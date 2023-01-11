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
        access_token="eligendi",
        alt="json",
        callback="sed",
        fields="maiores",
        key="non",
        oauth_token="expedita",
        pretty_print=False,
        quota_user="sint",
        upload_type="quia",
        upload_protocol="ea",
    ),
    request=shared.AnalyzeEntitiesRequest(
        document=shared.Document(
            content="quia",
            gcs_content_uri="pariatur",
            language="aliquam",
            type="HTML",
        ),
        encoding_type="UTF32",
    ),
)
    
res = s.documents.language_documents_analyze_entities(req)

if res.analyze_entities_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->