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
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FetchAccountSettingsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FetchAccountSettingsRequest();
    $request->subaccountSid = 'corrupti';

    $requestSecurity = new FetchAccountSettingsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->fetchAccountSettings($request, $requestSecurity);

    if ($response->insightsV1AccountSettings !== null) {
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

* [fetchAccountSettings](docs/sdk/README.md#fetchaccountsettings)
* [fetchAnnotation](docs/sdk/README.md#fetchannotation) - Fetch a specific Annotation.
* [fetchCall](docs/sdk/README.md#fetchcall)
* [fetchConference](docs/sdk/README.md#fetchconference) - Fetch a specific Conference.
* [fetchConferenceParticipant](docs/sdk/README.md#fetchconferenceparticipant) - Fetch a specific Conference Participant Summary.
* [fetchSummary](docs/sdk/README.md#fetchsummary)
* [fetchVideoParticipantSummary](docs/sdk/README.md#fetchvideoparticipantsummary) - Get Video Log Analyzer data for a Room Participant.
* [fetchVideoRoomSummary](docs/sdk/README.md#fetchvideoroomsummary) - Get Video Log Analyzer data for a Room.
* [listCallSummaries](docs/sdk/README.md#listcallsummaries)
* [listConference](docs/sdk/README.md#listconference) - Retrieve a list of Conferences.
* [listConferenceParticipant](docs/sdk/README.md#listconferenceparticipant) - List Conference Participants.
* [listEvent](docs/sdk/README.md#listevent)
* [listMetric](docs/sdk/README.md#listmetric)
* [listVideoParticipantSummary](docs/sdk/README.md#listvideoparticipantsummary) - Get a list of room participants.
* [listVideoRoomSummary](docs/sdk/README.md#listvideoroomsummary) - Get a list of Programmable Video Rooms.
* [updateAccountSettings](docs/sdk/README.md#updateaccountsettings)
* [updateAnnotation](docs/sdk/README.md#updateannotation) - Create/Update the annotation for the call
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
