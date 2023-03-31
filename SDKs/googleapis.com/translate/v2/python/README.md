# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/translate/v2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.LanguageDetectionsDetectRequest(
    dollar_xgafv="2",
    detect_language_request=shared.DetectLanguageRequest(
        q=[
            "distinctio",
            "quibusdam",
            "unde",
        ],
    ),
    access_token="nulla",
    alt="media",
    bearer_token="illum",
    callback="vel",
    fields_="error",
    key="deserunt",
    oauth_token="suscipit",
    pp=False,
    pretty_print=False,
    quota_user="iure",
    upload_type="magnam",
    upload_protocol="debitis",
)
    
res = s.detections.language_detections_detect(req, operations.LanguageDetectionsDetectSecurity(
    option1=operations.LanguageDetectionsDetectSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.detections_list_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### detections

* `language_detections_detect` - Detects the language of text within a request.
* `language_detections_list` - Detects the language of text within a request.

### languages

* `language_languages_list` - Returns a list of supported languages for translation.

### translations

* `language_translations_list` - Translates input text, returning translated text.
* `language_translations_translate` - Translates input text, returning translated text.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
