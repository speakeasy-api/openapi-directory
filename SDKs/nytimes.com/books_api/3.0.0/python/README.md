# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/nytimes.com/books_api/3.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.GETListsBestSellersHistoryJSONRequest(
    age_group="corrupti",
    author="provident",
    contributor="distinctio",
    isbn="quibusdam",
    price="unde",
    publisher="nulla",
    title="Ms.",
)
    
res = s.get_lists_best_sellers_history_json(req, operations.GETListsBestSellersHistoryJSONSecurity(
    api_key="YOUR_API_KEY_HERE",
))

if res.get_lists_best_sellers_history_json_200_application_json_object is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `get_lists_best_sellers_history_json` - Best Seller History List
* `get_lists_date_list_json` - Best Seller List by Date
* `get_lists_format` - Best Seller List
* `get_lists_names_format` - Best Seller List Names
* `get_lists_overview_format` - Best Seller List Overview
* `get_reviews_format` - Reviews
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
