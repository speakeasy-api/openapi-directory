# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/readerrevenuesubscriptionlinking/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.ReaderrevenuesubscriptionlinkingPublicationsReadersDeleteRequest(
    dollar_xgafv="2",
    access_token="provident",
    alt="proto",
    callback="quibusdam",
    fields_="unde",
    force=False,
    key="nulla",
    name="corrupti",
    oauth_token="illum",
    pretty_print=False,
    quota_user="vel",
    upload_type="error",
    upload_protocol="deserunt",
)
    
res = s.publications.readerrevenuesubscriptionlinking_publications_readers_delete(req)

if res.delete_reader_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### publications

* `readerrevenuesubscriptionlinking_publications_readers_delete` - Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.
* `readerrevenuesubscriptionlinking_publications_readers_get_entitlements` - Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
* `readerrevenuesubscriptionlinking_publications_readers_update_entitlements` - Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
