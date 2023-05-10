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
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageInteractionCreateMessageInteractionRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateMessageInteractionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateMessageInteractionRequest();
    $request->participantSid = 'corrupti';
    $request->requestBody = new CreateMessageInteractionCreateMessageInteractionRequest();
    $request->requestBody->body = 'provident';
    $request->requestBody->mediaUrl = [
        'https://outstanding-strait.name',
        'https://impressive-ox.name',
        'http://innocent-effect.org',
    ];
    $request->serviceSid = 'ipsa';
    $request->sessionSid = 'delectus';

    $requestSecurity = new CreateMessageInteractionSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->createMessageInteraction($request, $requestSecurity);

    if ($response->proxyV1ServiceSessionParticipantMessageInteraction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createMessageInteraction](docs/sdk/README.md#createmessageinteraction) - Create a new message Interaction to send directly from your system to one [Participant](https://www.twilio.com/docs/proxy/api/participant).  The `inbound` properties for the Interaction will always be empty.
* [createParticipant](docs/sdk/README.md#createparticipant) - Add a new Participant to the Session
* [createPhoneNumber](docs/sdk/README.md#createphonenumber) - Add a Phone Number to a Service's Proxy Number Pool.
* [createService](docs/sdk/README.md#createservice) - Create a new Service for Twilio Proxy
* [createSession](docs/sdk/README.md#createsession) - Create a new Session
* [createShortCode](docs/sdk/README.md#createshortcode) - Add a Short Code to the Proxy Number Pool for the Service.
* [deleteInteraction](docs/sdk/README.md#deleteinteraction) - Delete a specific Interaction.
* [deleteParticipant](docs/sdk/README.md#deleteparticipant) - Delete a specific Participant. This is a soft-delete. The participant remains associated with the session and cannot be re-added. Participants are only permanently deleted when the [Session](https://www.twilio.com/docs/proxy/api/session) is deleted.
* [deletePhoneNumber](docs/sdk/README.md#deletephonenumber) - Delete a specific Phone Number from a Service.
* [deleteService](docs/sdk/README.md#deleteservice) - Delete a specific Service.
* [deleteSession](docs/sdk/README.md#deletesession) - Delete a specific Session.
* [deleteShortCode](docs/sdk/README.md#deleteshortcode) - Delete a specific Short Code from a Service.
* [fetchInteraction](docs/sdk/README.md#fetchinteraction) - Retrieve a list of Interactions for a given [Session](https://www.twilio.com/docs/proxy/api/session).
* [fetchMessageInteraction](docs/sdk/README.md#fetchmessageinteraction)
* [fetchParticipant](docs/sdk/README.md#fetchparticipant) - Fetch a specific Participant.
* [fetchPhoneNumber](docs/sdk/README.md#fetchphonenumber) - Fetch a specific Phone Number.
* [fetchService](docs/sdk/README.md#fetchservice) - Fetch a specific Service.
* [fetchSession](docs/sdk/README.md#fetchsession) - Fetch a specific Session.
* [fetchShortCode](docs/sdk/README.md#fetchshortcode) - Fetch a specific Short Code.
* [listInteraction](docs/sdk/README.md#listinteraction) - Retrieve a list of all Interactions for a Session. A maximum of 100 records will be returned per page.
* [listMessageInteraction](docs/sdk/README.md#listmessageinteraction)
* [listParticipant](docs/sdk/README.md#listparticipant) - Retrieve a list of all Participants in a Session.
* [listPhoneNumber](docs/sdk/README.md#listphonenumber) - Retrieve a list of all Phone Numbers in the Proxy Number Pool for a Service. A maximum of 100 records will be returned per page.
* [listService](docs/sdk/README.md#listservice) - Retrieve a list of all Services for Twilio Proxy. A maximum of 100 records will be returned per page.
* [listSession](docs/sdk/README.md#listsession) - Retrieve a list of all Sessions for the Service. A maximum of 100 records will be returned per page.
* [listShortCode](docs/sdk/README.md#listshortcode) - Retrieve a list of all Short Codes in the Proxy Number Pool for the Service. A maximum of 100 records will be returned per page.
* [updatePhoneNumber](docs/sdk/README.md#updatephonenumber) - Update a specific Proxy Number.
* [updateService](docs/sdk/README.md#updateservice) - Update a specific Service.
* [updateSession](docs/sdk/README.md#updatesession) - Update a specific Session.
* [updateShortCode](docs/sdk/README.md#updateshortcode) - Update a specific Short Code.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
