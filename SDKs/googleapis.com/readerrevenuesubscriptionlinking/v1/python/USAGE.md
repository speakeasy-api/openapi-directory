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