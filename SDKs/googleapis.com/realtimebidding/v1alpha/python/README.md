# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/realtimebidding/v1alpha/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest(
    dollar_xgafv="2",
    request_body={
        "distinctio": "quibusdam",
        "unde": "nulla",
        "corrupti": "illum",
    },
    access_token="vel",
    alt="media",
    callback="deserunt",
    fields_="suscipit",
    key="iure",
    name="magnam",
    oauth_token="debitis",
    pretty_print=False,
    quota_user="ipsa",
    upload_type="delectus",
    upload_protocol="tempora",
)
    
res = s.bidders.realtimebidding_bidders_bidding_functions_activate(req, operations.RealtimebiddingBiddersBiddingFunctionsActivateSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.bidding_function is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### bidders

* `realtimebidding_bidders_bidding_functions_activate` - Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
* `realtimebidding_bidders_bidding_functions_archive` - Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
* `realtimebidding_bidders_bidding_functions_create` - Creates a new bidding function.
* `realtimebidding_bidders_bidding_functions_list` - Lists the bidding functions that a bidder currently has registered.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
