# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/twilio.com/twilio_voice_v1/1.40.0/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateByocTrunkCreateByocTrunkRequest(
    cnam_lookup_enabled=False,
    connection_policy_sid="corrupti",
    friendly_name="provident",
    from_domain_sid="distinctio",
    status_callback_method="DELETE",
    status_callback_url="https://tidy-mascara.org",
    voice_fallback_method="POST",
    voice_fallback_url="https://present-giggle.info",
    voice_method="GET",
    voice_url="https://awesome-voter.biz",
)
    
res = s.create_byoc_trunk(req, operations.CreateByocTrunkSecurity(
    password="YOUR_PASSWORD_HERE",
    username="YOUR_USERNAME_HERE",
))

if res.voice_v1_byoc_trunk is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_byoc_trunk`
* `create_connection_policy`
* `create_connection_policy_target`
* `create_dialing_permissions_country_bulk_update` - Create a bulk update request to change voice dialing country permissions of one or more countries identified by the corresponding [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `create_ip_record`
* `create_source_ip_mapping`
* `delete_archived_call` - Delete an archived call record from Bulk Export. Note: this does not also delete the record from the Voice API.
* `delete_byoc_trunk`
* `delete_connection_policy`
* `delete_connection_policy_target`
* `delete_ip_record`
* `delete_source_ip_mapping`
* `fetch_byoc_trunk`
* `fetch_connection_policy`
* `fetch_connection_policy_target`
* `fetch_dialing_permissions_country` - Retrieve voice dialing country permissions identified by the given ISO country code
* `fetch_dialing_permissions_settings` - Retrieve voice dialing permissions inheritance for the sub-account
* `fetch_ip_record`
* `fetch_source_ip_mapping`
* `list_byoc_trunk`
* `list_connection_policy`
* `list_connection_policy_target`
* `list_dialing_permissions_country` - Retrieve all voice dialing country permissions for this account
* `list_dialing_permissions_hrs_prefixes` - Fetch the high-risk special services prefixes from the country resource corresponding to the [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* `list_ip_record`
* `list_source_ip_mapping`
* `update_byoc_trunk`
* `update_connection_policy`
* `update_connection_policy_target`
* `update_dialing_permissions_settings` - Update voice dialing permissions inheritance for the sub-account
* `update_ip_record`
* `update_source_ip_mapping`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
