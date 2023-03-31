# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/qualtrics.com/0.2/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.CreateContactInMailinglistRequest(
    create_contact_in_mailing_list=shared.CreateContactInMailingList(
        email="Larue_Rau85@yahoo.com",
        first_name="Karley",
        last_name="Stamm",
        unsubscribed=False,
    ),
    directory_id="vel",
    mailing_list_id="error",
)
    
res = s.create_contact_in_mailinglist(req)

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### SDK SDK

* `create_contact_in_mailinglist` - Create contact in mailing list
* `generate_distribution_links` - Generate distribution links
* `get_distributions` - Get distributions for survey
* `get_event_subscriptions` - Get event subscriptions
* `get_survey` - Get survey
* `retrievedistributionlinks` - Retrieve distribution links
* `webhook_delete` - Remove subscription to response event
* `when_a_response_is_received` - Triggers when a response is submitted to a qualtrics survey
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
