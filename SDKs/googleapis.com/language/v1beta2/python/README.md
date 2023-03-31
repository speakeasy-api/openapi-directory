# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/language/v1beta2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### documents

* `language_documents_analyze_entities` - Finds named entities (currently proper names and common nouns) in the text along with entity types, salience, mentions for each entity, and other properties.
* `language_documents_analyze_entity_sentiment` - Finds entities, similar to AnalyzeEntities in the text and analyzes sentiment associated with each entity and its mentions.
* `language_documents_analyze_sentiment` - Analyzes the sentiment of the provided text.
* `language_documents_analyze_syntax` - Analyzes the syntax of the text and provides sentence boundaries and tokenization along with part of speech tags, dependency trees, and other properties.
* `language_documents_annotate_text` - A convenience method that provides all syntax, sentiment, entity, and classification features in one call.
* `language_documents_classify_text` - Classifies a document into categories.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
