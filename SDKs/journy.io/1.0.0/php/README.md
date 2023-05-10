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
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBodyAccount;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBodyUsers;
use \OpenAPI\OpenAPI\Models\Operations\AddUserToAccountRequestBodyUsersIdentification;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddUserToAccountRequestBody();
    $request->account = new AddUserToAccountRequestBodyAccount();
    $request->account->accountId = 'corrupti';
    $request->account->domain = 'provident';
    $request->users = [
        new AddUserToAccountRequestBodyUsers(),
        new AddUserToAccountRequestBodyUsers(),
        new AddUserToAccountRequestBodyUsers(),
    ];

    $response = $sdk->accounts->addUserToAccount($request);

    if ($response->addUserToAccount201ApplicationJSONObject !== null) {
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

* [addUserToAccount](docs/accounts/README.md#addusertoaccount) - Add users to an account
* [deleteAccount](docs/accounts/README.md#deleteaccount) - Delete account
* [removeUserFromAccount](docs/accounts/README.md#removeuserfromaccount) - Remove user from account
* [upsertAccount](docs/accounts/README.md#upsertaccount) - Create or update account

### [events](docs/events/README.md)

* [getEvents](docs/events/README.md#getevents) - Get events
* [~~trackJourneyEvent~~](docs/events/README.md#trackjourneyevent) - Track event :warning: **Deprecated**

### [properties](docs/properties/README.md)

* [getAccountProperties](docs/properties/README.md#getaccountproperties) - Get account properties
* [getUserProperties](docs/properties/README.md#getuserproperties) - Get user properties

### [segments](docs/segments/README.md)

* [getAccountSegments](docs/segments/README.md#getaccountsegments) - Get account segments
* [getUserSegments](docs/segments/README.md#getusersegments) - Get user segments

### [track](docs/track/README.md)

* [trackEvent](docs/track/README.md#trackevent) - Track event

### [users](docs/users/README.md)

* [deleteUser](docs/users/README.md#deleteuser) - Delete user
* [link](docs/users/README.md#link) - Link web activity to user
* [upsertUser](docs/users/README.md#upsertuser) - Create or update user

### [validation](docs/validation/README.md)

* [getValidity](docs/validation/README.md#getvalidity) - Validate API key

### [websites](docs/websites/README.md)

* [getTrackingSnippet](docs/websites/README.md#gettrackingsnippet) - Get snippet for a website
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
