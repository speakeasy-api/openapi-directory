# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/googleapis.com/mirror/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.MirrorAccountsInsertRequest(
    account=shared.Account(
        auth_tokens=[
            shared.AuthToken(
                auth_token="provident",
                type="distinctio",
            ),
            shared.AuthToken(
                auth_token="quibusdam",
                type="unde",
            ),
            shared.AuthToken(
                auth_token="nulla",
                type="corrupti",
            ),
        ],
        features=[
            "vel",
            "error",
            "deserunt",
            "suscipit",
        ],
        password="iure",
        user_data=[
            shared.UserData(
                key="debitis",
                value="ipsa",
            ),
            shared.UserData(
                key="delectus",
                value="tempora",
            ),
        ],
    ),
    account_name="suscipit",
    account_type="molestiae",
    alt="json",
    fields_="minus",
    key="placeat",
    oauth_token="voluptatum",
    pretty_print=False,
    quota_user="iusto",
    user_ip="excepturi",
    user_token="nisi",
)
    
res = s.accounts.mirror_accounts_insert(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### accounts

* `mirror_accounts_insert` - Inserts a new account for a user

### contacts

* `mirror_contacts_delete` - Deletes a contact.
* `mirror_contacts_get` - Gets a single contact by ID.
* `mirror_contacts_insert` - Inserts a new contact.
* `mirror_contacts_list` - Retrieves a list of contacts for the authenticated user.
* `mirror_contacts_patch` - Updates a contact in place. This method supports patch semantics.
* `mirror_contacts_update` - Updates a contact in place.

### locations

* `mirror_locations_get` - Gets a single location by ID.
* `mirror_locations_list` - Retrieves a list of locations for the user.

### settings

* `mirror_settings_get` - Gets a single setting by ID.

### subscriptions

* `mirror_subscriptions_delete` - Deletes a subscription.
* `mirror_subscriptions_insert` - Creates a new subscription.
* `mirror_subscriptions_list` - Retrieves a list of subscriptions for the authenticated user and service.
* `mirror_subscriptions_update` - Updates an existing subscription in place.

### timeline

* `mirror_timeline_attachments_delete` - Deletes an attachment from a timeline item.
* `mirror_timeline_attachments_get` - Retrieves an attachment on a timeline item by item ID and attachment ID.
* `mirror_timeline_attachments_insert` - Adds a new attachment to a timeline item.
* `mirror_timeline_attachments_list` - Returns a list of attachments for a timeline item.
* `mirror_timeline_delete` - Deletes a timeline item.
* `mirror_timeline_get` - Gets a single timeline item by ID.
* `mirror_timeline_insert` - Inserts a new item into the timeline.
* `mirror_timeline_list` - Retrieves a list of timeline items for the authenticated user.
* `mirror_timeline_patch` - Updates a timeline item in place. This method supports patch semantics.
* `mirror_timeline_update` - Updates a timeline item in place.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
