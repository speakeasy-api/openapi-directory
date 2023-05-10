# rootJobMonitoring

## Overview

Job monitoring.

### Available Operations

* [createMonitoringSubscription](#createmonitoringsubscription) - Create an email subscription to the job monitoring page
* [deleteMonitoringSubscription](#deletemonitoringsubscription) - Delete a monitoring page email subscription
* [getJobMonitoringInfo](#getjobmonitoringinfo) - Get job monitoring information
* [getJobMonitoringInfoCsvDownloadLink](#getjobmonitoringinfocsvdownloadlink) - Download job monitoring information as a CSV file
* [getMonitoringJobCountByJobState](#getmonitoringjobcountbyjobstate) - Get job monitoring summary information separated by job state
* [getMonitoringJobCountByJobType](#getmonitoringjobcountbyjobtype) - Get job monitoring summary information separated by job type
* [getMonitoringSubscription](#getmonitoringsubscription) - Get a specific monitoring email subscription by id
* [getMonitoringSubscriptions](#getmonitoringsubscriptions) - Returns all email subscriptions for the monitoring page
* [updateMonitoringSubscription](#updatemonitoringsubscription) - Update a monitoring email subscription

## createMonitoringSubscription

Creates an email subscription to the job monitoring page, which provides information on jobs based on their type (active, in progress, canceled, scheduled, or succeeded). Users can choose which job states to include in the subscription. The email summarizes the job counts by type in the body, and includes the option to include CSV attachments for every job state selected.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringEmailSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionAttachmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobMonitoringStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionScheduleTimeAttributes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringEmailSubscriptionRequest();
    $request->attachments = [
        SubscriptionAttachmentTypeEnum::CSV,
        SubscriptionAttachmentTypeEnum::CSV,
    ];
    $request->emailAddresses = [
        'explicabo',
        'ullam',
        'non',
        'delectus',
    ];
    $request->jobStates = [
        JobMonitoringStateEnum::ACTIVE,
        JobMonitoringStateEnum::FAILURE,
    ];
    $request->timeAttributes = new SubscriptionScheduleTimeAttributes();
    $request->timeAttributes->dailyScheduleHour = 353493;
    $request->timeAttributes->dayOfMonth = 463044;
    $request->timeAttributes->daysOfWeek = [
        916051,
        641006,
        668783,
        446484,
    ];
    $request->timeAttributes->monthlyScheduleHour = 72473;
    $request->timeAttributes->weeklyScheduleHour = 451926;

    $response = $sdk->rootJobMonitoring->createMonitoringSubscription($request);

    if ($response->monitoringSubscriptionSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteMonitoringSubscription

Deletes the specified monitoring page email subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\DeleteMonitoringSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteMonitoringSubscriptionRequest();
    $request->subscriptionId = 'consequatur';

    $response = $sdk->rootJobMonitoring->deleteMonitoringSubscription($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobMonitoringInfo

Get the job summary for protection and recovery jobs that are currently running, scheduled to run, or completed in the past 24 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoObjectTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoSortByEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoSortOrderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobMonitoringInfoRequest();
    $request->afterId = 'delectus';
    $request->effectiveSlaDomainId = 'incidunt';
    $request->isFirstFull = false;
    $request->isOnDemand = false;
    $request->jobEventStatus = [
        'nemo',
        'est',
    ];
    $request->jobType = GetJobMonitoringInfoJobTypeEnum::LOG_ARCHIVAL;
    $request->lastUpdateTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-07T03:05:41.608Z');
    $request->limit = 385383;
    $request->nodeName = 'laboriosam';
    $request->objectName = 'quam';
    $request->objectType = GetJobMonitoringInfoObjectTypeEnum::SHARE_FILESET;
    $request->shouldIncludeLogRelatedJob = false;
    $request->sortBy = GetJobMonitoringInfoSortByEnum::OBJECT_LOGICAL_SIZE;
    $request->sortOrder = GetJobMonitoringInfoSortOrderEnum::DESC;

    $response = $sdk->rootJobMonitoring->getJobMonitoringInfo($request);

    if ($response->jobMonitoringResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJobMonitoringInfoCsvDownloadLink

Download the job summary for protection and recovery jobs that are currently running, scheduled to run, or completed in the past 24 hours as a CSV file. This is a synchronous operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoCsvDownloadLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoCsvDownloadLinkJobEventStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoCsvDownloadLinkJobMonitoringStateEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoCsvDownloadLinkJobTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetJobMonitoringInfoCsvDownloadLinkObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobMonitoringInfoCsvDownloadLinkRequest();
    $request->jobEventStatus = GetJobMonitoringInfoCsvDownloadLinkJobEventStatusEnum::CANCELING;
    $request->jobMonitoringState = GetJobMonitoringInfoCsvDownloadLinkJobMonitoringStateEnum::ACTIVE;
    $request->jobType = GetJobMonitoringInfoCsvDownloadLinkJobTypeEnum::LOG_ARCHIVAL;
    $request->objectName = 'culpa';
    $request->objectType = GetJobMonitoringInfoCsvDownloadLinkObjectTypeEnum::VMWARE_VIRTUAL_MACHINE;
    $request->shouldIncludeLogRelatedJob = false;

    $response = $sdk->rootJobMonitoring->getJobMonitoringInfoCsvDownloadLink($request);

    if ($response->jobMonitoringCsvDownloadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMonitoringJobCountByJobState

Get job summary separated by job state for all running jobs, jobs that have been scheduled and jobs that are complete, for protection and recovery jobs in the past 24 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMonitoringJobCountByJobStateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMonitoringJobCountByJobStateRequest();
    $request->jobTypes = [
        'atque',
    ];

    $response = $sdk->rootJobMonitoring->getMonitoringJobCountByJobState($request);

    if ($response->jobMonitoringSummaryByState !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMonitoringJobCountByJobType

Get job summaries for protection and recovery jobs, separated by job type, that have been scheduled, are currently running, or completed in the past 24 hours.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMonitoringJobCountByJobTypeRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMonitoringJobCountByJobTypeJobMonitoringStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMonitoringJobCountByJobTypeRequest();
    $request->jobMonitoringState = GetMonitoringJobCountByJobTypeJobMonitoringStateEnum::SCHEDULED;

    $response = $sdk->rootJobMonitoring->getMonitoringJobCountByJobType($request);

    if ($response->jobMonitoringSummaryByType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMonitoringSubscription

Returns a summary of the provided monitoring subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\GetMonitoringSubscriptionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMonitoringSubscriptionRequest();
    $request->subscriptionId = 'sapiente';

    $response = $sdk->rootJobMonitoring->getMonitoringSubscription($request);

    if ($response->monitoringSubscriptionSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMonitoringSubscriptions

Return all unarchived email subscriptions for monitoring page in a list of summaries sorted by creation time (earliest created first). Each summary contains information for each subscription -- Time attributes - when to send the email -- Email addresses - who to send the email -- Attachments - what attachments should the email include -- Job states - which job states to include in the email (Failure, Scheduled, Success, Active, Canceled). -- Id - the tring that identifies the subscription -- Status - the status of the subscription (Active, Suspended, or Unknown) -- Owner - information about the owner of the subscription -- user id - unique id used to identify the owner -- user name - human-readable name of user the time schedule to send the subscription.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->rootJobMonitoring->getMonitoringSubscriptions();

    if ($response->monitoringSubscriptionSummaries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMonitoringSubscription

Updates the monitoring email subscription with the subscription ID provided.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMonitoringSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringEmailSubscriptionUpdate;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionAttachmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\JobMonitoringStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionScheduleTimeAttributes;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMonitoringSubscriptionRequest();
    $request->monitoringEmailSubscriptionUpdate = new MonitoringEmailSubscriptionUpdate();
    $request->monitoringEmailSubscriptionUpdate->assumeOwnership = false;
    $request->monitoringEmailSubscriptionUpdate->attachments = [
        SubscriptionAttachmentTypeEnum::CSV,
        SubscriptionAttachmentTypeEnum::CSV,
        SubscriptionAttachmentTypeEnum::CSV,
        SubscriptionAttachmentTypeEnum::CSV,
    ];
    $request->monitoringEmailSubscriptionUpdate->emailAddresses = [
        'nesciunt',
        'ab',
    ];
    $request->monitoringEmailSubscriptionUpdate->id = 'd6bf5c83-8fbb-48c2-8cb6-7fc4b425e99e';
    $request->monitoringEmailSubscriptionUpdate->jobStates = [
        JobMonitoringStateEnum::FAILURE,
        JobMonitoringStateEnum::SCHEDULED,
    ];
    $request->monitoringEmailSubscriptionUpdate->timeAttributes = new SubscriptionScheduleTimeAttributes();
    $request->monitoringEmailSubscriptionUpdate->timeAttributes->dailyScheduleHour = 279679;
    $request->monitoringEmailSubscriptionUpdate->timeAttributes->dayOfMonth = 783539;
    $request->monitoringEmailSubscriptionUpdate->timeAttributes->daysOfWeek = [
        970703,
        454334,
        735521,
    ];
    $request->monitoringEmailSubscriptionUpdate->timeAttributes->monthlyScheduleHour = 447323;
    $request->monitoringEmailSubscriptionUpdate->timeAttributes->weeklyScheduleHour = 609864;
    $request->subscriptionId = 'possimus';

    $response = $sdk->rootJobMonitoring->updateMonitoringSubscription($request);

    if ($response->monitoringSubscriptionSummary !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
