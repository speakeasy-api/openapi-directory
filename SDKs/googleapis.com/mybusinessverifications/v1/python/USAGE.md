<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest(
    dollar_xgafv="2",
    fetch_verification_options_request=shared.FetchVerificationOptionsRequest(
        context=shared.ServiceBusinessContext(
            address=shared.PostalAddress(
                address_lines=[
                    "distinctio",
                    "quibusdam",
                    "unde",
                ],
                administrative_area="nulla",
                language_code="corrupti",
                locality="illum",
                organization="vel",
                postal_code="63428-0923",
                recipients=[
                    "minus",
                    "placeat",
                ],
                region_code="voluptatum",
                revision=479977,
                sorting_code="excepturi",
                sublocality="nisi",
            ),
        ),
        language_code="recusandae",
    ),
    access_token="temporibus",
    alt="json",
    callback="quis",
    fields_="veritatis",
    key="deserunt",
    location="perferendis",
    oauth_token="ipsam",
    pretty_print=False,
    quota_user="repellendus",
    upload_type="sapiente",
    upload_protocol="quo",
)
    
res = s.locations.mybusinessverifications_locations_fetch_verification_options(req)

if res.fetch_verification_options_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->