# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MirrorAccountsInsertRequest;
use \OpenAPI\OpenAPI\Models\Shared\Account;
use \OpenAPI\OpenAPI\Models\Shared\AuthToken;
use \OpenAPI\OpenAPI\Models\Shared\UserData;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MirrorAccountsInsertRequest();
    $request->account = new Account();
    $request->account->authTokens = [
        new AuthToken(),
        new AuthToken(),
        new AuthToken(),
    ];
    $request->account->features = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->account->password = 'nulla';
    $request->account->userData = [
        new UserData(),
        new UserData(),
        new UserData(),
    ];
    $request->accountName = 'illum';
    $request->accountType = 'vel';
    $request->alt = AltEnum::JSON;
    $request->fields = 'error';
    $request->key = 'deserunt';
    $request->oauthToken = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'iure';
    $request->userIp = 'magnam';
    $request->userToken = 'debitis';

    $response = $sdk->accounts->mirrorAccountsInsert($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [accounts](docs/accounts/README.md)

* [mirrorAccountsInsert](docs/accounts/README.md#mirroraccountsinsert) - Inserts a new account for a user

### [contacts](docs/contacts/README.md)

* [mirrorContactsDelete](docs/contacts/README.md#mirrorcontactsdelete) - Deletes a contact.
* [mirrorContactsGet](docs/contacts/README.md#mirrorcontactsget) - Gets a single contact by ID.
* [mirrorContactsInsert](docs/contacts/README.md#mirrorcontactsinsert) - Inserts a new contact.
* [mirrorContactsList](docs/contacts/README.md#mirrorcontactslist) - Retrieves a list of contacts for the authenticated user.
* [mirrorContactsPatch](docs/contacts/README.md#mirrorcontactspatch) - Updates a contact in place. This method supports patch semantics.
* [mirrorContactsUpdate](docs/contacts/README.md#mirrorcontactsupdate) - Updates a contact in place.

### [locations](docs/locations/README.md)

* [mirrorLocationsGet](docs/locations/README.md#mirrorlocationsget) - Gets a single location by ID.
* [mirrorLocationsList](docs/locations/README.md#mirrorlocationslist) - Retrieves a list of locations for the user.

### [settings](docs/settings/README.md)

* [mirrorSettingsGet](docs/settings/README.md#mirrorsettingsget) - Gets a single setting by ID.

### [subscriptions](docs/subscriptions/README.md)

* [mirrorSubscriptionsDelete](docs/subscriptions/README.md#mirrorsubscriptionsdelete) - Deletes a subscription.
* [mirrorSubscriptionsInsert](docs/subscriptions/README.md#mirrorsubscriptionsinsert) - Creates a new subscription.
* [mirrorSubscriptionsList](docs/subscriptions/README.md#mirrorsubscriptionslist) - Retrieves a list of subscriptions for the authenticated user and service.
* [mirrorSubscriptionsUpdate](docs/subscriptions/README.md#mirrorsubscriptionsupdate) - Updates an existing subscription in place.

### [timeline](docs/timeline/README.md)

* [mirrorTimelineAttachmentsDelete](docs/timeline/README.md#mirrortimelineattachmentsdelete) - Deletes an attachment from a timeline item.
* [mirrorTimelineAttachmentsGet](docs/timeline/README.md#mirrortimelineattachmentsget) - Retrieves an attachment on a timeline item by item ID and attachment ID.
* [mirrorTimelineAttachmentsInsert](docs/timeline/README.md#mirrortimelineattachmentsinsert) - Adds a new attachment to a timeline item.
* [mirrorTimelineAttachmentsList](docs/timeline/README.md#mirrortimelineattachmentslist) - Returns a list of attachments for a timeline item.
* [mirrorTimelineDelete](docs/timeline/README.md#mirrortimelinedelete) - Deletes a timeline item.
* [mirrorTimelineGet](docs/timeline/README.md#mirrortimelineget) - Gets a single timeline item by ID.
* [mirrorTimelineInsert](docs/timeline/README.md#mirrortimelineinsert) - Inserts a new item into the timeline.
* [mirrorTimelineList](docs/timeline/README.md#mirrortimelinelist) - Retrieves a list of timeline items for the authenticated user.
* [mirrorTimelinePatch](docs/timeline/README.md#mirrortimelinepatch) - Updates a timeline item in place. This method supports patch semantics.
* [mirrorTimelineUpdate](docs/timeline/README.md#mirrortimelineupdate) - Updates a timeline item in place.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
