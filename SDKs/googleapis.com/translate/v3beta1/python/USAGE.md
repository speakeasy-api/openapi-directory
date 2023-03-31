<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.TranslateProjectsLocationsBatchTranslateDocumentRequest(
    dollar_xgafv="2",
    batch_translate_document_request=shared.BatchTranslateDocumentRequest(
        customized_attribution="provident",
        enable_shadow_removal_native_pdf=False,
        format_conversions={
            "quibusdam": "unde",
            "nulla": "corrupti",
            "illum": "vel",
        },
        glossaries={
            "deserunt": shared.TranslateTextGlossaryConfig(
                glossary="suscipit",
                ignore_case=False,
            ),
            "iure": shared.TranslateTextGlossaryConfig(
                glossary="magnam",
                ignore_case=False,
            ),
            "debitis": shared.TranslateTextGlossaryConfig(
                glossary="ipsa",
                ignore_case=False,
            ),
        },
        input_configs=[
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="tempora",
                ),
            ),
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="suscipit",
                ),
            ),
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="molestiae",
                ),
            ),
            shared.BatchDocumentInputConfig(
                gcs_source=shared.GcsSource(
                    input_uri="minus",
                ),
            ),
        ],
        models={
            "voluptatum": "iusto",
            "excepturi": "nisi",
            "recusandae": "temporibus",
            "ab": "quis",
        },
        output_config=shared.BatchDocumentOutputConfig(
            gcs_destination=shared.GcsDestination(
                output_uri_prefix="veritatis",
            ),
        ),
        source_language_code="deserunt",
        target_language_codes=[
            "ipsam",
        ],
    ),
    access_token="repellendus",
    alt="proto",
    callback="quo",
    fields_="odit",
    key="at",
    oauth_token="at",
    parent="maiores",
    pretty_print=False,
    quota_user="molestiae",
    upload_type="quod",
    upload_protocol="quod",
)
    
res = s.projects.translate_projects_locations_batch_translate_document(req, operations.TranslateProjectsLocationsBatchTranslateDocumentSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->