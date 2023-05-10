# rootEvent

## Overview

Events.

### Available Operations

* [getEventsCsvDownloadLink](#geteventscsvdownloadlink) - Download summary of events as a CSV file
* [queryEventV1](#queryeventv1) - Get information for all events
* [queryLatestEventsV1](#querylatesteventsv1) - Get latest events with their associated event series information

## getEventsCsvDownloadLink

Download summary of the related events that match the value specified in the following categories: event type, status, object name or ID, eventSeriesId, object type, and limit events by dates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCsvDownloadLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCsvDownloadLinkEventSeriesStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCsvDownloadLinkEventSeverityEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCsvDownloadLinkEventStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCsvDownloadLinkEventTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCsvDownloadLinkObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetEventsCsvDownloadLinkOrderByTimeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEventsCsvDownloadLinkRequest();
    $request->afterDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-18T11:33:01.022Z');
    $request->afterId = 'provident';
    $request->beforeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-27T03:28:54.764Z');
    $request->eventSeriesStatus = GetEventsCsvDownloadLinkEventSeriesStatusEnum::SUCCESS;
    $request->eventSeverity = GetEventsCsvDownloadLinkEventSeverityEnum::INFORMATIONAL;
    $request->eventStatus = GetEventsCsvDownloadLinkEventStatusEnum::WARNING;
    $request->eventType = GetEventsCsvDownloadLinkEventTypeEnum::STORAGE;
    $request->limit = 711991;
    $request->objectIds = [
        'provident',
        'repudiandae',
        'rerum',
    ];
    $request->objectName = 'dignissimos';
    $request->objectType = GetEventsCsvDownloadLinkObjectTypeEnum::ENVOY;
    $request->orderByTime = GetEventsCsvDownloadLinkOrderByTimeEnum::DESC;

    $response = $sdk->rootEvent->getEventsCsvDownloadLink($request);

    if ($response->eventCsvDownloadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryEventV1

Returns information for all events. Only Global or Read Only Admins and Support users have authorization to use this endpoint. Accepts filters. For similar functionality to the previous /internal/event endpoint, use the /v1/event/latest endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryEventV1Request;
use \OpenAPI\OpenAPI\Models\Operations\QueryEventV1OrderByTimeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryEventV1Request();
    $request->afterDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-02T04:38:29.370Z');
    $request->afterId = 'iure';
    $request->beforeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-02T23:06:10.498Z');
    $request->limit = 771226;
    $request->orderByTime = QueryEventV1OrderByTimeEnum::ASC;
    $request->shouldIncludeEventSeries = false;

    $response = $sdk->rootEvent->queryEventV1($request);

    if ($response->eventsAndSeriesSummariesV1 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## queryLatestEventsV1

Get the latest event, event series status, and the number of warning events for all event series. This endpoint has similar/enhanced functionality to the previously deprecated /internal/event endpoint.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\QueryLatestEventsV1Request;
use \OpenAPI\OpenAPI\Models\Operations\QueryLatestEventsV1EventSeriesStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLatestEventsV1EventSeverityEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLatestEventsV1EventStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLatestEventsV1EventTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLatestEventsV1ObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\QueryLatestEventsV1OrderByTimeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new QueryLatestEventsV1Request();
    $request->afterDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-20T07:11:32.953Z');
    $request->afterId = 'ad';
    $request->beforeDate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-09T04:59:20.428Z');
    $request->eventSeriesStatus = QueryLatestEventsV1EventSeriesStatusEnum::CANCELED;
    $request->eventSeverity = QueryLatestEventsV1EventSeverityEnum::WARNING;
    $request->eventStatus = QueryLatestEventsV1EventStatusEnum::CANCELED;
    $request->eventType = QueryLatestEventsV1EventTypeEnum::STORAGE_ARRAY;
    $request->limit = 230411;
    $request->objectIds = [
        'dicta',
    ];
    $request->objectName = 'laudantium';
    $request->objectType = QueryLatestEventsV1ObjectTypeEnum::AGGREGATE_HYPERV_VM;
    $request->orderByTime = QueryLatestEventsV1OrderByTimeEnum::DESC;
    $request->shouldIncludeEventSeries = false;

    $response = $sdk->rootEvent->queryLatestEventsV1($request);

    if ($response->activityLogSummaryV1ListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
