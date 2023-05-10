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
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchInputMarketingEventSubscriber;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventSubscriber;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest();
    $request->batchInputMarketingEventSubscriber = new BatchInputMarketingEventSubscriber();
    $request->batchInputMarketingEventSubscriber->inputs = [
        new MarketingEventSubscriber(),
        new MarketingEventSubscriber(),
        new MarketingEventSubscriber(),
    ];
    $request->externalAccountId = 'provident';
    $request->externalEventId = 'distinctio';
    $request->subscriberState = 'quibusdam';

    $requestSecurity = new PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->attendanceSubscriberStateChanges->postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate($request, $requestSecurity);

    if ($response->batchResponseSubscriberVidResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [attendanceSubscriberStateChanges](docs/attendancesubscriberstatechanges/README.md)

* [postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreate](docs/attendancesubscriberstatechanges/README.md#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstatecreatecreate) - Record
* [postMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmail](docs/attendancesubscriberstatechanges/README.md#postmarketingv3marketingeventsattendanceexternaleventidsubscriberstateemailcreatecreatebyemail) - Record

### [marketingEventsExternal](docs/marketingeventsexternal/README.md)

* [deleteMarketingV3MarketingEventsEventsExternalEventIdArchive](docs/marketingeventsexternal/README.md#deletemarketingv3marketingeventseventsexternaleventidarchive)
* [getMarketingV3MarketingEventsEventsExternalEventIdGetById](docs/marketingeventsexternal/README.md#getmarketingv3marketingeventseventsexternaleventidgetbyid)
* [patchMarketingV3MarketingEventsEventsExternalEventIdUpdate](docs/marketingeventsexternal/README.md#patchmarketingv3marketingeventseventsexternaleventidupdate)
* [postMarketingV3MarketingEventsEventsDeleteArchiveBatch](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsdeletearchivebatch)
* [postMarketingV3MarketingEventsEventsUpsertDoUpsert](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsupsertdoupsert)
* [postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidcanceldocancel)
* [postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidcompletecomplete)
* [postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidsubscriberstateemailupsertdoemailupsertbyid)
* [postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventsexternaleventidsubscriberstateupsertdoupsertbyid)
* [postMarketingV3MarketingEventsEventsCreate](docs/marketingeventsexternal/README.md#postmarketingv3marketingeventseventscreate)
* [putMarketingV3MarketingEventsEventsExternalEventIdReplace](docs/marketingeventsexternal/README.md#putmarketingv3marketingeventseventsexternaleventidreplace)

### [search](docs/search/README.md)

* [getMarketingV3MarketingEventsEventsSearchDoSearch](docs/search/README.md#getmarketingv3marketingeventseventssearchdosearch) - Search for marketing events

### [settingsExternal](docs/settingsexternal/README.md)

* [getMarketingV3MarketingEventsAppIdSettingsGetAll](docs/settingsexternal/README.md#getmarketingv3marketingeventsappidsettingsgetall)
* [postMarketingV3MarketingEventsAppIdSettingsCreate](docs/settingsexternal/README.md#postmarketingv3marketingeventsappidsettingscreate)
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
