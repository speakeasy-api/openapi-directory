<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.TranslateProjectsLocationsBatchTranslateDocumentRequest(
    security=operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.TranslateProjectsLocationsBatchTranslateDocumentPathParams(
        parent="et",
    ),
    query_params=operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams(
        dollar_xgafv="1",
        access_token="deserunt",
        alt="media",
        callback="sit",
        fields="recusandae",
        key="et",
        oauth_token="quia",
        pretty_print=True,
        quota_user="aut",
        upload_type="ut",
        upload_protocol="sed",
    ),
    request=shared.BatchTranslateDocumentRequest(
        format_conversions={
            "iure": "ad",
        },
        glossaries={
            "omnis": shared.TranslateTextGlossaryConfig(
                glossary="nam",
                ignore_case=True,
            ),
        },
        input_configs=[
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="deleniti",
                ),
            ),
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="et",
                ),
            ),
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="placeat",
                ),
            ),
        ],
        models={
            "ut": "beatae",
            "perferendis": "ipsa",
        },
        output_config=shared.BatchDocumentOutputConfig(
            gcs_destination=shared.GcsDestination(
                output_uri_prefix="et",
            ),
        ),
        source_language_code="soluta",
        target_language_codes=[
            "mollitia",
            "qui",
            "quasi",
        ],
    ),
)
    
res = s.projects.translate_projects_locations_batch_translate_document(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->