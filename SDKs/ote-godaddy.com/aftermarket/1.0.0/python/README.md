# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/ote-godaddy.com/aftermarket/1.0.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = [
    shared.AftermarketListingExpiryCreate(
        domain="provident",
        expires_at="distinctio",
        losing_registrar_id=844266,
        page_views_monthly=602763,
        revenue_monthly=857946,
    ),
    shared.AftermarketListingExpiryCreate(
        domain="corrupti",
        expires_at="illum",
        losing_registrar_id=423655,
        page_views_monthly=623564,
        revenue_monthly=645894,
    ),
    shared.AftermarketListingExpiryCreate(
        domain="suscipit",
        expires_at="iure",
        losing_registrar_id=297534,
        page_views_monthly=891773,
        revenue_monthly=56713,
    ),
]
    
res = s.v1.add_expiry_listings_json(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1

* `add_expiry_listings_json` - Add expiry listings into GoDaddy Auction
* `add_expiry_listings_raw` - Add expiry listings into GoDaddy Auction
* `delete_listings` - Remove listings from GoDaddy Auction
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
