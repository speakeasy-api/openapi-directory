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
        parent="assumenda",
    ),
    query_params=operations.TranslateProjectsLocationsBatchTranslateDocumentQueryParams(
        dollar_xgafv="2",
        access_token="cumque",
        alt="media",
        callback="assumenda",
        fields="voluptatem",
        key="harum",
        oauth_token="natus",
        pretty_print=True,
        quota_user="corporis",
        upload_type="asperiores",
        upload_protocol="dignissimos",
    ),
    request=shared.BatchTranslateDocumentRequest(
        format_conversions={
            "mollitia": "iste",
        },
        glossaries={
            "a": shared.TranslateTextGlossaryConfig(
                glossary="sed",
                ignore_case=False,
            ),
            "dignissimos": shared.TranslateTextGlossaryConfig(
                glossary="doloremque",
                ignore_case=True,
            ),
            "quia": shared.TranslateTextGlossaryConfig(
                glossary="quia",
                ignore_case=True,
            ),
        },
        input_configs=[
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="occaecati",
                ),
            ),
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="ullam",
                ),
            ),
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="quo",
                ),
            ),
        ],
        models={
            "quia": "et",
            "quos": "quae",
            "est": "necessitatibus",
        },
        output_config=shared.BatchDocumentOutputConfig(
            gcs_destination=shared.GcsDestination(
                output_uri_prefix="velit",
            ),
        ),
        source_language_code="harum",
        target_language_codes=[
            "ipsum",
            "autem",
            "cumque",
        ],
    ),
)
    
res = s.projects.translate_projects_locations_batch_translate_document(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->