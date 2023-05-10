# marketingEventsExternal

### Available Operations

* [deleteMarketingV3MarketingEventsEventsExternalEventIdArchive](#deletemarketingv3marketingeventseventsexternaleventidarchive)
* [getMarketingV3MarketingEventsEventsExternalEventIdGetById](#getmarketingv3marketingeventseventsexternaleventidgetbyid)
* [patchMarketingV3MarketingEventsEventsExternalEventIdUpdate](#patchmarketingv3marketingeventseventsexternaleventidupdate)
* [postMarketingV3MarketingEventsEventsDeleteArchiveBatch](#postmarketingv3marketingeventseventsdeletearchivebatch)
* [postMarketingV3MarketingEventsEventsUpsertDoUpsert](#postmarketingv3marketingeventseventsupsertdoupsert)
* [postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel](#postmarketingv3marketingeventseventsexternaleventidcanceldocancel)
* [postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete](#postmarketingv3marketingeventseventsexternaleventidcompletecomplete)
* [postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById](#postmarketingv3marketingeventseventsexternaleventidsubscriberstateemailupsertdoemailupsertbyid)
* [postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById](#postmarketingv3marketingeventseventsexternaleventidsubscriberstateupsertdoupsertbyid)
* [postMarketingV3MarketingEventsEventsCreate](#postmarketingv3marketingeventseventscreate)
* [putMarketingV3MarketingEventsEventsExternalEventIdReplace](#putmarketingv3marketingeventseventsexternaleventidreplace)

## deleteMarketingV3MarketingEventsEventsExternalEventIdArchive

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest();
    $request->externalAccountId = 'iure';
    $request->externalEventId = 'magnam';

    $requestSecurity = new DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->deleteMarketingV3MarketingEventsEventsExternalEventIdArchive($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMarketingV3MarketingEventsEventsExternalEventIdGetById

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest();
    $request->externalAccountId = 'debitis';
    $request->externalEventId = 'ipsa';

    $requestSecurity = new GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->getMarketingV3MarketingEventsEventsExternalEventIdGetById($request, $requestSecurity);

    if ($response->marketingEventPublicReadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMarketingV3MarketingEventsEventsExternalEventIdUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventUpdateRequestParams;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValueSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest();
    $request->marketingEventUpdateRequestParams = new MarketingEventUpdateRequestParams();
    $request->marketingEventUpdateRequestParams->customProperties = [
        new PropertyValue(),
        new PropertyValue(),
        new PropertyValue(),
        new PropertyValue(),
    ];
    $request->marketingEventUpdateRequestParams->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-14T01:03:07.567Z');
    $request->marketingEventUpdateRequestParams->eventCancelled = false;
    $request->marketingEventUpdateRequestParams->eventDescription = 'molestiae';
    $request->marketingEventUpdateRequestParams->eventName = 'minus';
    $request->marketingEventUpdateRequestParams->eventOrganizer = 'placeat';
    $request->marketingEventUpdateRequestParams->eventType = 'voluptatum';
    $request->marketingEventUpdateRequestParams->eventUrl = 'iusto';
    $request->marketingEventUpdateRequestParams->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-20T06:24:36.919Z');
    $request->externalAccountId = 'recusandae';
    $request->externalEventId = 'temporibus';

    $requestSecurity = new PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->patchMarketingV3MarketingEventsEventsExternalEventIdUpdate($request, $requestSecurity);

    if ($response->marketingEventPublicDefaultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMarketingV3MarketingEventsEventsDeleteArchiveBatch

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchInputMarketingEventExternalUniqueIdentifier;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventExternalUniqueIdentifier;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchInputMarketingEventExternalUniqueIdentifier();
    $request->inputs = [
        new MarketingEventExternalUniqueIdentifier(),
    ];

    $requestSecurity = new PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->postMarketingV3MarketingEventsEventsDeleteArchiveBatch($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMarketingV3MarketingEventsEventsUpsertDoUpsert

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchInputMarketingEventCreateRequestParams;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventCreateRequestParams;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValueSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchInputMarketingEventCreateRequestParams();
    $request->inputs = [
        new MarketingEventCreateRequestParams(),
        new MarketingEventCreateRequestParams(),
    ];

    $requestSecurity = new PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->postMarketingV3MarketingEventsEventsUpsertDoUpsert($request, $requestSecurity);

    if ($response->batchResponseMarketingEventPublicDefaultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest();
    $request->externalAccountId = 'veritatis';
    $request->externalEventId = 'deserunt';

    $requestSecurity = new PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->postMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancel($request, $requestSecurity);

    if ($response->marketingEventDefaultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventCompleteRequestParams;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest();
    $request->marketingEventCompleteRequestParams = new MarketingEventCompleteRequestParams();
    $request->marketingEventCompleteRequestParams->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-19T14:12:14.246Z');
    $request->marketingEventCompleteRequestParams->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-17T21:57:45.117Z');
    $request->externalAccountId = 'quo';
    $request->externalEventId = 'odit';

    $requestSecurity = new PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->postMarketingV3MarketingEventsEventsExternalEventIdCompleteComplete($request, $requestSecurity);

    if ($response->marketingEventDefaultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchInputMarketingEventEmailSubscriber;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventEmailSubscriber;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest();
    $request->batchInputMarketingEventEmailSubscriber = new BatchInputMarketingEventEmailSubscriber();
    $request->batchInputMarketingEventEmailSubscriber->inputs = [
        new MarketingEventEmailSubscriber(),
        new MarketingEventEmailSubscriber(),
        new MarketingEventEmailSubscriber(),
        new MarketingEventEmailSubscriber(),
    ];
    $request->externalAccountId = 'at';
    $request->externalEventId = 'maiores';
    $request->subscriberState = 'molestiae';

    $requestSecurity = new PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertById($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchInputMarketingEventSubscriber;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventSubscriber;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest();
    $request->batchInputMarketingEventSubscriber = new BatchInputMarketingEventSubscriber();
    $request->batchInputMarketingEventSubscriber->inputs = [
        new MarketingEventSubscriber(),
        new MarketingEventSubscriber(),
        new MarketingEventSubscriber(),
        new MarketingEventSubscriber(),
    ];
    $request->externalAccountId = 'quod';
    $request->externalEventId = 'esse';
    $request->subscriberState = 'totam';

    $requestSecurity = new PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->postMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertById($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMarketingV3MarketingEventsEventsCreate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventCreateRequestParams;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValueSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostMarketingV3MarketingEventsEventsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MarketingEventCreateRequestParams();
    $request->customProperties = [
        new PropertyValue(),
        new PropertyValue(),
        new PropertyValue(),
        new PropertyValue(),
    ];
    $request->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-06T15:49:54.663Z');
    $request->eventCancelled = false;
    $request->eventDescription = 'nam';
    $request->eventName = 'officia';
    $request->eventOrganizer = 'occaecati';
    $request->eventType = 'fugit';
    $request->eventUrl = 'deleniti';
    $request->externalAccountId = 'hic';
    $request->externalEventId = 'optio';
    $request->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-15T16:29:54.554Z');

    $requestSecurity = new PostMarketingV3MarketingEventsEventsCreateSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->postMarketingV3MarketingEventsEventsCreate($request, $requestSecurity);

    if ($response->marketingEventDefaultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMarketingV3MarketingEventsEventsExternalEventIdReplace

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest;
use \OpenAPI\OpenAPI\Models\Shared\MarketingEventCreateRequestParams;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValue;
use \OpenAPI\OpenAPI\Models\Shared\PropertyValueSourceEnum;
use \OpenAPI\OpenAPI\Models\Operations\PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest();
    $request->marketingEventCreateRequestParams = new MarketingEventCreateRequestParams();
    $request->marketingEventCreateRequestParams->customProperties = [
        new PropertyValue(),
        new PropertyValue(),
    ];
    $request->marketingEventCreateRequestParams->endDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-26T10:29:33.503Z');
    $request->marketingEventCreateRequestParams->eventCancelled = false;
    $request->marketingEventCreateRequestParams->eventDescription = 'qui';
    $request->marketingEventCreateRequestParams->eventName = 'impedit';
    $request->marketingEventCreateRequestParams->eventOrganizer = 'cum';
    $request->marketingEventCreateRequestParams->eventType = 'esse';
    $request->marketingEventCreateRequestParams->eventUrl = 'ipsum';
    $request->marketingEventCreateRequestParams->externalAccountId = 'excepturi';
    $request->marketingEventCreateRequestParams->externalEventId = 'aspernatur';
    $request->marketingEventCreateRequestParams->startDateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-04T16:31:28.618Z');
    $request->externalEventId = 'natus';

    $requestSecurity = new PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity();
    $requestSecurity->oauth2Legacy = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->marketingEventsExternal->putMarketingV3MarketingEventsEventsExternalEventIdReplace($request, $requestSecurity);

    if ($response->marketingEventPublicDefaultResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
