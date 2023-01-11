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
        dollar_xgafv="2",
        access_token="cum",
        alt="proto",
        callback="aut",
        fields="pariatur",
        key="voluptas",
        oauth_token="inventore",
        pretty_print=False,
        quota_user="est",
        upload_type="rerum",
        upload_protocol="rerum",
    ),
    request=shared.AnalyzeEntitiesRequest(
        document=shared.Document(
            boilerplate_handling="BOILERPLATE_HANDLING_UNSPECIFIED",
            content="soluta",
            gcs_content_uri="enim",
            language="dolores",
            reference_web_uri="eos",
            type="TYPE_UNSPECIFIED",
        ),
        encoding_type="UTF16",
    ),
)
    
res = s.documents.language_documents_analyze_entities(req)

if res.analyze_entities_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->