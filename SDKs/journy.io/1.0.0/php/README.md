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

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### accounts

* `addUserToAccount` - Add users to an account
* `deleteAccount` - Delete account
* `removeUserFromAccount` - Remove user from account
* `upsertAccount` - Create or update account

### events

* `getEvents` - Get events
* `trackJourneyEvent` - Track event

### properties

* `getAccountProperties` - Get account properties
* `getUserProperties` - Get user properties

### segments

* `getAccountSegments` - Get account segments
* `getUserSegments` - Get user segments

### track

* `trackEvent` - Track event

### users

* `deleteUser` - Delete user
* `link` - Link web activity to user
* `upsertUser` - Create or update user

### validation

* `getValidity` - Validate API key

### websites

* `getTrackingSnippet` - Get snippet for a website
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
