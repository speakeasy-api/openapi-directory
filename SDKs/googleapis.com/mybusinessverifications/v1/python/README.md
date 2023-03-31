# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/mybusinessverifications/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### locations

* `mybusinessverifications_locations_fetch_verification_options` - Reports all eligible verification options for a location in a specific language.
* `mybusinessverifications_locations_get_voice_of_merchant_state` - Gets the VoiceOfMerchant state.
* `mybusinessverifications_locations_verifications_complete` - Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
* `mybusinessverifications_locations_verifications_list` - List verifications of a location, ordered by create time.
* `mybusinessverifications_locations_verify` - Starts the verification process for a location.

### verification_tokens

* `mybusinessverifications_verification_tokens_generate` - Generates a token for the provided location data as a vetted [partner](https://support.google.com/business/answer/7674102). Throws PERMISSION_DENIED if the caller is not a vetted partner account. Throws FAILED_PRECONDITION if the caller's VettedStatus is INVALID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
