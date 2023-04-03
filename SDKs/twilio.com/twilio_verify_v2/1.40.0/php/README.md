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

### SDK SDK

* `createAccessToken` - Create a new enrollment Access Token for the Entity
* `createBucket` - Create a new Bucket for a Rate Limit
* `createChallenge` - Create a new Challenge for the Factor
* `createEntity` - Create a new Entity for the Service
* `createMessagingConfiguration` - Create a new MessagingConfiguration for a service.
* `createNewFactor` - Create a new Factor for the Entity
* `createNotification` - Create a new Notification for the corresponding Challenge
* `createRateLimit` - Create a new Rate Limit for a Service
* `createSafelist` - Add a new phone number to SafeList.
* `createService` - Create a new Verification Service.
* `createVerification` - Create a new Verification using a Service
* `createVerificationCheck` - challenge a specific Verification Check.
* `createWebhook` - Create a new Webhook for the Service
* `deleteBucket` - Delete a specific Bucket.
* `deleteEntity` - Delete a specific Entity.
* `deleteFactor` - Delete a specific Factor.
* `deleteMessagingConfiguration` - Delete a specific MessagingConfiguration.
* `deleteRateLimit` - Delete a specific Rate Limit.
* `deleteSafelist` - Remove a phone number from SafeList.
* `deleteService` - Delete a specific Verification Service Instance.
* `deleteWebhook` - Delete a specific Webhook.
* `fetchAccessToken` - Fetch an Access Token for the Entity
* `fetchBucket` - Fetch a specific Bucket.
* `fetchChallenge` - Fetch a specific Challenge.
* `fetchEntity` - Fetch a specific Entity.
* `fetchFactor` - Fetch a specific Factor.
* `fetchForm` - Fetch the forms for a specific Form Type.
* `fetchMessagingConfiguration` - Fetch a specific MessagingConfiguration.
* `fetchRateLimit` - Fetch a specific Rate Limit.
* `fetchSafelist` - Check if a phone number exists in SafeList.
* `fetchService` - Fetch specific Verification Service Instance.
* `fetchVerification` - Fetch a specific Verification
* `fetchVerificationAttempt` - Fetch a specific verification attempt.
* `fetchVerificationAttemptsSummary` - Get a summary of how many attempts were made and how many were converted.
* `fetchWebhook` - Fetch a specific Webhook.
* `listBucket` - Retrieve a list of all Buckets for a Rate Limit.
* `listChallenge` - Retrieve a list of all Challenges for a Factor.
* `listEntity` - Retrieve a list of all Entities for a Service.
* `listFactor` - Retrieve a list of all Factors for an Entity.
* `listMessagingConfiguration` - Retrieve a list of all Messaging Configurations for a Service.
* `listRateLimit` - Retrieve a list of all Rate Limits for a service.
* `listService` - Retrieve a list of all Verification Services for an account.
* `listVerificationAttempt` - List all the verification attempts for a given Account.
* `listVerificationTemplate` - List all the available templates for a given Account.
* `listWebhook` - Retrieve a list of all Webhooks for a Service.
* `updateBucket` - Update a specific Bucket.
* `updateChallenge` - Verify a specific Challenge.
* `updateFactor` - Update a specific Factor. This endpoint can be used to Verify a Factor if passed an `AuthPayload` param.
* `updateMessagingConfiguration` - Update a specific MessagingConfiguration
* `updateRateLimit` - Update a specific Rate Limit.
* `updateService` - Update a specific Verification Service.
* `updateVerification` - Update a Verification status
* `updateWebhook`
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
