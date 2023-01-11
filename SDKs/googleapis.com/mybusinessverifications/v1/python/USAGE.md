<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest(
    path_params=operations.MybusinessverificationsLocationsFetchVerificationOptionsPathParams(
        location="ex",
    ),
    query_params=operations.MybusinessverificationsLocationsFetchVerificationOptionsQueryParams(
        dollar_xgafv="2",
        access_token="quis",
        alt="json",
        callback="qui",
        fields="voluptates",
        key="odio",
        oauth_token="pariatur",
        pretty_print=False,
        quota_user="rerum",
        upload_type="omnis",
        upload_protocol="veritatis",
    ),
    request=shared.FetchVerificationOptionsRequest(
        context=shared.ServiceBusinessContext(
            address=shared.PostalAddress(
                address_lines=[
                    "vero",
                ],
                administrative_area="autem",
                language_code="vel",
                locality="quos",
                organization="dolore",
                postal_code="sequi",
                recipients=[
                    "minus",
                    "harum",
                ],
                region_code="dolores",
                revision=5694222714762395261,
                sorting_code="iure",
                sublocality="beatae",
            ),
        ),
        language_code="ut",
    ),
)
    
res = s.locations.mybusinessverifications_locations_fetch_verification_options(req)

if res.fetch_verification_options_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->