# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/admin/datatransfer_v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.DatatransferApplicationsGetRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    application_id="quibusdam",
    callback="unde",
    fields_="nulla",
    key="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.applications.datatransfer_applications_get(req, operations.DatatransferApplicationsGetSecurity(
    option1=operations.DatatransferApplicationsGetSecurityOption1(
        oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
        oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
    ),
))

if res.application is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### applications

* `datatransfer_applications_get` - Retrieves information about an application for the given application ID.
* `datatransfer_applications_list` - Lists the applications available for data transfer for a customer.

### transfers

* `datatransfer_transfers_get` - Retrieves a data transfer request by its resource ID.
* `datatransfer_transfers_insert` - Inserts a data transfer request. See the [Transfer parameters](/admin-sdk/data-transfer/v1/parameters) reference for specific application requirements.
* `datatransfer_transfers_list` - Lists the transfers for a customer by source user, destination user, or status.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
