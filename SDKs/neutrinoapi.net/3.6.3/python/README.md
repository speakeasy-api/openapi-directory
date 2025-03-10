# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/neutrinoapi.net/3.6.3/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK(
    security=shared.Security(
        api_key="YOUR_API_KEY_HERE",
        user_id="YOUR_API_KEY_HERE",
    ),
)


req = operations.BadWordFilterRequestBody(
    catalog="corrupti",
    censor_character="provident",
    content="distinctio",
)
    
res = s.data_tools.bad_word_filter(req)

if res.bad_word_filter_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### data_tools

* `bad_word_filter` - Bad Word Filter
* `email_validate` - Email Validate
* `phone_validate` - Phone Validate
* `ua_lookup` - UA Lookup

### e_commerce

* `bin_list_download` - BIN List Download
* `bin_lookup` - BIN Lookup
* `convert` - Convert

### geolocation

* `geocode_address` - Geocode Address
* `geocode_reverse` - Geocode Reverse
* `ip_info` - IP Info

### imaging

* `html_render` - HTML Render
* `image_resize` - Image Resize
* `image_watermark` - Image Watermark
* `qr_code` - QR Code

### security_and_networking

* `email_verify` - Email Verify
* `host_reputation` - Host Reputation
* `ip_blocklist` - IP Blocklist
* `ip_blocklist_download` - IP Blocklist Download
* `ip_probe` - IP Probe

### telephony

* `hlr_lookup` - HLR Lookup
* `phone_playback` - Phone Playback
* `phone_verify` - Phone Verify
* `sms_verify` - SMS Verify
* `verify_security_code` - Verify Security Code

### www

* `browser_bot` - Browser Bot
* `html_clean` - HTML Clean
* `url_info` - URL Info
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
