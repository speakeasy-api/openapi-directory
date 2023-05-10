# projects

### Available Operations

* [monitoringProjectsAlertPoliciesCreate](#monitoringprojectsalertpoliciescreate) - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* [monitoringProjectsAlertPoliciesList](#monitoringprojectsalertpolicieslist) - Lists the existing alerting policies for the workspace.
* [monitoringProjectsCollectdTimeSeriesCreate](#monitoringprojectscollectdtimeseriescreate) - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* [monitoringProjectsGroupsCreate](#monitoringprojectsgroupscreate) - Creates a new group.
* [monitoringProjectsGroupsList](#monitoringprojectsgroupslist) - Lists the existing groups.
* [monitoringProjectsGroupsMembersList](#monitoringprojectsgroupsmemberslist) - Lists the monitored resources that are members of a group.
* [monitoringProjectsGroupsUpdate](#monitoringprojectsgroupsupdate) - Updates an existing group. You can change any group attributes except name.
* [monitoringProjectsMetricDescriptorsCreate](#monitoringprojectsmetricdescriptorscreate) - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* [monitoringProjectsMetricDescriptorsList](#monitoringprojectsmetricdescriptorslist) - Lists metric descriptors that match a filter.
* [monitoringProjectsMonitoredResourceDescriptorsList](#monitoringprojectsmonitoredresourcedescriptorslist) - Lists monitored resource descriptors that match a filter.
* [monitoringProjectsNotificationChannelDescriptorsList](#monitoringprojectsnotificationchanneldescriptorslist) - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* [monitoringProjectsNotificationChannelsCreate](#monitoringprojectsnotificationchannelscreate) - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* [monitoringProjectsNotificationChannelsGetVerificationCode](#monitoringprojectsnotificationchannelsgetverificationcode) - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* [monitoringProjectsNotificationChannelsList](#monitoringprojectsnotificationchannelslist) - Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.
* [monitoringProjectsNotificationChannelsSendVerificationCode](#monitoringprojectsnotificationchannelssendverificationcode) - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* [monitoringProjectsNotificationChannelsVerify](#monitoringprojectsnotificationchannelsverify) - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* [monitoringProjectsSnoozesCreate](#monitoringprojectssnoozescreate) - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* [monitoringProjectsSnoozesList](#monitoringprojectssnoozeslist) - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* [monitoringProjectsTimeSeriesCreate](#monitoringprojectstimeseriescreate) - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* [monitoringProjectsTimeSeriesCreateService](#monitoringprojectstimeseriescreateservice) - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* [monitoringProjectsTimeSeriesList](#monitoringprojectstimeserieslist) - Lists time series that match a filter.
* [monitoringProjectsTimeSeriesQuery](#monitoringprojectstimeseriesquery) - Queries time series using Monitoring Query Language.
* [monitoringProjectsUptimeCheckConfigsCreate](#monitoringprojectsuptimecheckconfigscreate) - Creates a new Uptime check configuration.
* [monitoringProjectsUptimeCheckConfigsList](#monitoringprojectsuptimecheckconfigslist) - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

## monitoringProjectsAlertPoliciesCreate

Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AlertPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AlertStrategy;
use \OpenAPI\OpenAPI\Models\Shared\NotificationChannelStrategy;
use \OpenAPI\OpenAPI\Models\Shared\NotificationRateLimit;
use \OpenAPI\OpenAPI\Models\Shared\AlertPolicyCombinerEnum;
use \OpenAPI\OpenAPI\Models\Shared\Condition;
use \OpenAPI\OpenAPI\Models\Shared\MetricAbsence;
use \OpenAPI\OpenAPI\Models\Shared\Aggregation;
use \OpenAPI\OpenAPI\Models\Shared\AggregationCrossSeriesReducerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AggregationPerSeriesAlignerEnum;
use \OpenAPI\OpenAPI\Models\Shared\Trigger;
use \OpenAPI\OpenAPI\Models\Shared\LogMatch;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringQueryLanguageCondition;
use \OpenAPI\OpenAPI\Models\Shared\MonitoringQueryLanguageConditionEvaluationMissingDataEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricThreshold;
use \OpenAPI\OpenAPI\Models\Shared\MetricThresholdComparisonEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricThresholdEvaluationMissingDataEnum;
use \OpenAPI\OpenAPI\Models\Shared\ForecastOptions;
use \OpenAPI\OpenAPI\Models\Shared\MutationRecord;
use \OpenAPI\OpenAPI\Models\Shared\Documentation;
use \OpenAPI\OpenAPI\Models\Shared\Status;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsAlertPoliciesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->alertPolicy = new AlertPolicy();
    $request->alertPolicy->alertStrategy = new AlertStrategy();
    $request->alertPolicy->alertStrategy->autoClose = 'ipsum';
    $request->alertPolicy->alertStrategy->notificationChannelStrategy = [
        new NotificationChannelStrategy(),
        new NotificationChannelStrategy(),
        new NotificationChannelStrategy(),
    ];
    $request->alertPolicy->alertStrategy->notificationRateLimit = new NotificationRateLimit();
    $request->alertPolicy->alertStrategy->notificationRateLimit->period = 'aspernatur';
    $request->alertPolicy->combiner = AlertPolicyCombinerEnum::COMBINE_UNSPECIFIED;
    $request->alertPolicy->conditions = [
        new Condition(),
        new Condition(),
    ];
    $request->alertPolicy->creationRecord = new MutationRecord();
    $request->alertPolicy->creationRecord->mutateTime = 'natus';
    $request->alertPolicy->creationRecord->mutatedBy = 'sed';
    $request->alertPolicy->displayName = 'iste';
    $request->alertPolicy->documentation = new Documentation();
    $request->alertPolicy->documentation->content = 'dolor';
    $request->alertPolicy->documentation->mimeType = 'natus';
    $request->alertPolicy->enabled = false;
    $request->alertPolicy->mutationRecord = new MutationRecord();
    $request->alertPolicy->mutationRecord->mutateTime = 'laboriosam';
    $request->alertPolicy->mutationRecord->mutatedBy = 'hic';
    $request->alertPolicy->name = 'Wilbur Kirlin';
    $request->alertPolicy->notificationChannels = [
        'saepe',
        'quidem',
    ];
    $request->alertPolicy->userLabels = [
        'ipsa' => 'reiciendis',
    ];
    $request->alertPolicy->validity = new Status();
    $request->alertPolicy->validity->code = 666767;
    $request->alertPolicy->validity->details = [
        [
            'dolores' => 'dolorem',
            'corporis' => 'explicabo',
            'nobis' => 'enim',
        ],
        [
            'nemo' => 'minima',
            'excepturi' => 'accusantium',
            'iure' => 'culpa',
        ],
        [
            'sapiente' => 'architecto',
            'mollitia' => 'dolorem',
            'culpa' => 'consequuntur',
            'repellat' => 'mollitia',
        ],
    ];
    $request->alertPolicy->validity->message = 'occaecati';
    $request->accessToken = 'numquam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'molestiae';
    $request->key = 'velit';
    $request->name = 'Miss Eugene Hauck';
    $request->oauthToken = 'enim';
    $request->prettyPrint = false;
    $request->quotaUser = 'odit';
    $request->uploadType = 'quo';
    $request->uploadProtocol = 'sequi';

    $requestSecurity = new MonitoringProjectsAlertPoliciesCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsAlertPoliciesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsAlertPoliciesCreate($request, $requestSecurity);

    if ($response->alertPolicy !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsAlertPoliciesList

Lists the existing alerting policies for the workspace.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsAlertPoliciesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsAlertPoliciesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ipsam';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'possimus';
    $request->fields = 'aut';
    $request->filter = 'quasi';
    $request->key = 'error';
    $request->name = 'Neal Boyer';
    $request->oauthToken = 'vero';
    $request->orderBy = 'nihil';
    $request->pageSize = 509624;
    $request->pageToken = 'voluptatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'ipsa';
    $request->uploadType = 'omnis';
    $request->uploadProtocol = 'voluptate';

    $requestSecurity = new MonitoringProjectsAlertPoliciesListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsAlertPoliciesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsAlertPoliciesList($request, $requestSecurity);

    if ($response->listAlertPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsCollectdTimeSeriesCreate

Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsCollectdTimeSeriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateCollectdTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\CollectdPayload;
use \OpenAPI\OpenAPI\Models\Shared\TypedValue;
use \OpenAPI\OpenAPI\Models\Shared\Distribution;
use \OpenAPI\OpenAPI\Models\Shared\BucketOptions;
use \OpenAPI\OpenAPI\Models\Shared\Explicit;
use \OpenAPI\OpenAPI\Models\Shared\Exponential;
use \OpenAPI\OpenAPI\Models\Shared\Linear;
use \OpenAPI\OpenAPI\Models\Shared\Exemplar;
use \OpenAPI\OpenAPI\Models\Shared\Range;
use \OpenAPI\OpenAPI\Models\Shared\CollectdValue;
use \OpenAPI\OpenAPI\Models\Shared\CollectdValueDataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResource;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsCollectdTimeSeriesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsCollectdTimeSeriesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsCollectdTimeSeriesCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsCollectdTimeSeriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createCollectdTimeSeriesRequest = new CreateCollectdTimeSeriesRequest();
    $request->createCollectdTimeSeriesRequest->collectdPayloads = [
        new CollectdPayload(),
    ];
    $request->createCollectdTimeSeriesRequest->collectdVersion = 'doloremque';
    $request->createCollectdTimeSeriesRequest->resource = new MonitoredResource();
    $request->createCollectdTimeSeriesRequest->resource->labels = [
        'ut' => 'maiores',
        'dicta' => 'corporis',
    ];
    $request->createCollectdTimeSeriesRequest->resource->type = 'dolore';
    $request->accessToken = 'iusto';
    $request->alt = AltEnum::JSON;
    $request->callback = 'harum';
    $request->fields = 'enim';
    $request->key = 'accusamus';
    $request->name = 'Elvira Bergnaum';
    $request->oauthToken = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'excepturi';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'modi';

    $requestSecurity = new MonitoringProjectsCollectdTimeSeriesCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsCollectdTimeSeriesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsCollectdTimeSeriesCreate($request, $requestSecurity);

    if ($response->createCollectdTimeSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsGroupsCreate

Creates a new group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsGroupsCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->group = new Group();
    $request->group->displayName = 'rem';
    $request->group->filter = 'voluptates';
    $request->group->isCluster = false;
    $request->group->name = 'Dr. Casey Mayer';
    $request->group->parentName = 'enim';
    $request->accessToken = 'consequatur';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'quibusdam';
    $request->fields = 'explicabo';
    $request->key = 'deserunt';
    $request->name = 'Marty Green';
    $request->oauthToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'cupiditate';
    $request->uploadType = 'quos';
    $request->uploadProtocol = 'perferendis';
    $request->validateOnly = false;

    $requestSecurity = new MonitoringProjectsGroupsCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsGroupsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsGroupsCreate($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsGroupsList

Lists the existing groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsGroupsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'assumenda';
    $request->alt = AltEnum::MEDIA;
    $request->ancestorsOfGroup = 'alias';
    $request->callback = 'fugit';
    $request->childrenOfGroup = 'dolorum';
    $request->descendantsOfGroup = 'excepturi';
    $request->fields = 'tempora';
    $request->key = 'facilis';
    $request->name = 'Francisco Windler';
    $request->oauthToken = 'eligendi';
    $request->pageSize = 576157;
    $request->pageToken = 'aliquid';
    $request->prettyPrint = false;
    $request->quotaUser = 'provident';
    $request->uploadType = 'necessitatibus';
    $request->uploadProtocol = 'sint';

    $requestSecurity = new MonitoringProjectsGroupsListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsGroupsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsGroupsList($request, $requestSecurity);

    if ($response->listGroupsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsGroupsMembersList

Lists the monitored resources that are members of a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsMembersListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsMembersListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsMembersListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsMembersListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsMembersListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsGroupsMembersListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'dolor';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'a';
    $request->fields = 'dolorum';
    $request->filter = 'in';
    $request->intervalEndTime = 'in';
    $request->intervalStartTime = 'illum';
    $request->key = 'maiores';
    $request->name = 'Keith Gulgowski';
    $request->oauthToken = 'ea';
    $request->pageSize = 396506;
    $request->pageToken = 'laborum';
    $request->prettyPrint = false;
    $request->quotaUser = 'accusamus';
    $request->uploadType = 'non';
    $request->uploadProtocol = 'occaecati';

    $requestSecurity = new MonitoringProjectsGroupsMembersListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsGroupsMembersListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsGroupsMembersList($request, $requestSecurity);

    if ($response->listGroupMembersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsGroupsUpdate

Updates an existing group. You can change any group attributes except name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Group;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsUpdateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsUpdateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsGroupsUpdateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsGroupsUpdateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->group = new Group();
    $request->group->displayName = 'accusamus';
    $request->group->filter = 'delectus';
    $request->group->isCluster = false;
    $request->group->name = 'Rene Reinger';
    $request->group->parentName = 'deleniti';
    $request->accessToken = 'sapiente';
    $request->alt = AltEnum::JSON;
    $request->callback = 'deserunt';
    $request->fields = 'nisi';
    $request->key = 'vel';
    $request->name = 'Ms. Arturo Krajcik';
    $request->oauthToken = 'distinctio';
    $request->prettyPrint = false;
    $request->quotaUser = 'id';
    $request->uploadType = 'labore';
    $request->uploadProtocol = 'labore';
    $request->validateOnly = false;

    $requestSecurity = new MonitoringProjectsGroupsUpdateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsGroupsUpdateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsGroupsUpdate($request, $requestSecurity);

    if ($response->group !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsMetricDescriptorsCreate

Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\LabelDescriptor;
use \OpenAPI\OpenAPI\Models\Shared\LabelDescriptorValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorMetadata;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorMetadataLaunchStageEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorMetricKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\MetricDescriptorValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsMetricDescriptorsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->metricDescriptor = new MetricDescriptor();
    $request->metricDescriptor->description = 'natus';
    $request->metricDescriptor->displayName = 'nobis';
    $request->metricDescriptor->labels = [
        new LabelDescriptor(),
        new LabelDescriptor(),
    ];
    $request->metricDescriptor->launchStage = MetricDescriptorLaunchStageEnum::DEPRECATED;
    $request->metricDescriptor->metadata = new MetricDescriptorMetadata();
    $request->metricDescriptor->metadata->ingestDelay = 'aspernatur';
    $request->metricDescriptor->metadata->launchStage = MetricDescriptorMetadataLaunchStageEnum::LAUNCH_STAGE_UNSPECIFIED;
    $request->metricDescriptor->metadata->samplePeriod = 'magnam';
    $request->metricDescriptor->metricKind = MetricDescriptorMetricKindEnum::METRIC_KIND_UNSPECIFIED;
    $request->metricDescriptor->monitoredResourceTypes = [
        'ullam',
        'provident',
        'quos',
    ];
    $request->metricDescriptor->name = 'Kenneth O'Hara';
    $request->metricDescriptor->type = 'ad';
    $request->metricDescriptor->unit = 'eum';
    $request->metricDescriptor->valueType = MetricDescriptorValueTypeEnum::BOOL;
    $request->accessToken = 'necessitatibus';
    $request->alt = AltEnum::JSON;
    $request->callback = 'nemo';
    $request->fields = 'quasi';
    $request->key = 'iure';
    $request->name = 'Doyle Gibson';
    $request->oauthToken = 'facilis';
    $request->prettyPrint = false;
    $request->quotaUser = 'in';
    $request->uploadType = 'architecto';
    $request->uploadProtocol = 'architecto';

    $requestSecurity = new MonitoringProjectsMetricDescriptorsCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsMetricDescriptorsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsMetricDescriptorsCreate($request, $requestSecurity);

    if ($response->metricDescriptor !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsMetricDescriptorsList

Lists metric descriptors that match a filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMetricDescriptorsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsMetricDescriptorsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ullam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'nihil';
    $request->fields = 'repellat';
    $request->filter = 'quibusdam';
    $request->key = 'sed';
    $request->name = 'Al Bashirian';
    $request->oauthToken = 'natus';
    $request->pageSize = 166847;
    $request->pageToken = 'sunt';
    $request->prettyPrint = false;
    $request->quotaUser = 'quo';
    $request->uploadType = 'illum';
    $request->uploadProtocol = 'pariatur';

    $requestSecurity = new MonitoringProjectsMetricDescriptorsListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsMetricDescriptorsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsMetricDescriptorsList($request, $requestSecurity);

    if ($response->listMetricDescriptorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsMonitoredResourceDescriptorsList

Lists monitored resource descriptors that match a filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMonitoredResourceDescriptorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMonitoredResourceDescriptorsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption3;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption4;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsMonitoredResourceDescriptorsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'ea';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'odit';
    $request->fields = 'ea';
    $request->filter = 'accusantium';
    $request->key = 'ab';
    $request->name = 'Rickey Hintz';
    $request->oauthToken = 'nam';
    $request->pageSize = 50588;
    $request->pageToken = 'pariatur';
    $request->prettyPrint = false;
    $request->quotaUser = 'nemo';
    $request->uploadType = 'voluptatibus';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new MonitoringProjectsMonitoredResourceDescriptorsListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsMonitoredResourceDescriptorsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsMonitoredResourceDescriptorsList($request, $requestSecurity);

    if ($response->listMonitoredResourceDescriptorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsNotificationChannelDescriptorsList

Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelDescriptorsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelDescriptorsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelDescriptorsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelDescriptorsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsNotificationChannelDescriptorsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'amet';
    $request->alt = AltEnum::JSON;
    $request->callback = 'cumque';
    $request->fields = 'corporis';
    $request->key = 'hic';
    $request->name = 'Robin D'Amore';
    $request->oauthToken = 'dignissimos';
    $request->pageSize = 54338;
    $request->pageToken = 'quis';
    $request->prettyPrint = false;
    $request->quotaUser = 'nesciunt';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'perferendis';

    $requestSecurity = new MonitoringProjectsNotificationChannelDescriptorsListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsNotificationChannelDescriptorsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsNotificationChannelDescriptorsList($request, $requestSecurity);

    if ($response->listNotificationChannelDescriptorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsNotificationChannelsCreate

Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\NotificationChannel;
use \OpenAPI\OpenAPI\Models\Shared\MutationRecord;
use \OpenAPI\OpenAPI\Models\Shared\NotificationChannelVerificationStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsNotificationChannelsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->notificationChannel = new NotificationChannel();
    $request->notificationChannel->creationRecord = new MutationRecord();
    $request->notificationChannel->creationRecord->mutateTime = 'minus';
    $request->notificationChannel->creationRecord->mutatedBy = 'quam';
    $request->notificationChannel->description = 'dolor';
    $request->notificationChannel->displayName = 'vero';
    $request->notificationChannel->enabled = false;
    $request->notificationChannel->labels = [
        'hic' => 'recusandae',
        'omnis' => 'facilis',
    ];
    $request->notificationChannel->mutationRecords = [
        new MutationRecord(),
        new MutationRecord(),
        new MutationRecord(),
    ];
    $request->notificationChannel->name = 'Robyn Cruickshank';
    $request->notificationChannel->type = 'eaque';
    $request->notificationChannel->userLabels = [
        'rerum' => 'adipisci',
        'asperiores' => 'earum',
        'modi' => 'iste',
    ];
    $request->notificationChannel->verificationStatus = NotificationChannelVerificationStatusEnum::VERIFIED;
    $request->accessToken = 'deleniti';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'provident';
    $request->fields = 'nobis';
    $request->key = 'libero';
    $request->name = 'Alex Luettgen';
    $request->oauthToken = 'dolorem';
    $request->prettyPrint = false;
    $request->quotaUser = 'dolor';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'ipsum';

    $requestSecurity = new MonitoringProjectsNotificationChannelsCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsNotificationChannelsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsNotificationChannelsCreate($request, $requestSecurity);

    if ($response->notificationChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsNotificationChannelsGetVerificationCode

Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsGetVerificationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\GetNotificationChannelVerificationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsNotificationChannelsGetVerificationCodeRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->getNotificationChannelVerificationCodeRequest = new GetNotificationChannelVerificationCodeRequest();
    $request->getNotificationChannelVerificationCodeRequest->expireTime = 'excepturi';
    $request->accessToken = 'cum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'dignissimos';
    $request->fields = 'reiciendis';
    $request->key = 'amet';
    $request->name = 'Mr. Bradley Bogan';
    $request->oauthToken = 'odio';
    $request->prettyPrint = false;
    $request->quotaUser = 'quaerat';
    $request->uploadType = 'accusamus';
    $request->uploadProtocol = 'quidem';

    $requestSecurity = new MonitoringProjectsNotificationChannelsGetVerificationCodeSecurity();
    $requestSecurity->option1 = new MonitoringProjectsNotificationChannelsGetVerificationCodeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsNotificationChannelsGetVerificationCode($request, $requestSecurity);

    if ($response->getNotificationChannelVerificationCodeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsNotificationChannelsList

Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsNotificationChannelsListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'eos';
    $request->fields = 'atque';
    $request->filter = 'sit';
    $request->key = 'fugiat';
    $request->name = 'Latoya Parisian';
    $request->oauthToken = 'dolorum';
    $request->orderBy = 'deleniti';
    $request->pageSize = 607045;
    $request->pageToken = 'necessitatibus';
    $request->prettyPrint = false;
    $request->quotaUser = 'distinctio';
    $request->uploadType = 'asperiores';
    $request->uploadProtocol = 'nihil';

    $requestSecurity = new MonitoringProjectsNotificationChannelsListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsNotificationChannelsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsNotificationChannelsList($request, $requestSecurity);

    if ($response->listNotificationChannelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsNotificationChannelsSendVerificationCode

Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsSendVerificationCodeRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsNotificationChannelsSendVerificationCodeRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->requestBody = [
        'id' => 'saepe',
        'eius' => 'aspernatur',
    ];
    $request->accessToken = 'perferendis';
    $request->alt = AltEnum::JSON;
    $request->callback = 'optio';
    $request->fields = 'accusamus';
    $request->key = 'ad';
    $request->name = 'Sam Oberbrunner';
    $request->oauthToken = 'repellendus';
    $request->prettyPrint = false;
    $request->quotaUser = 'totam';
    $request->uploadType = 'similique';
    $request->uploadProtocol = 'alias';

    $requestSecurity = new MonitoringProjectsNotificationChannelsSendVerificationCodeSecurity();
    $requestSecurity->option1 = new MonitoringProjectsNotificationChannelsSendVerificationCodeSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsNotificationChannelsSendVerificationCode($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsNotificationChannelsVerify

Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsVerifyRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\VerifyNotificationChannelRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsVerifySecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsVerifySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsNotificationChannelsVerifySecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsNotificationChannelsVerifyRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->verifyNotificationChannelRequest = new VerifyNotificationChannelRequest();
    $request->verifyNotificationChannelRequest->code = 'quaerat';
    $request->accessToken = 'tempora';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quod';
    $request->fields = 'officiis';
    $request->key = 'qui';
    $request->name = 'Randal Klocko';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'quisquam';
    $request->uploadType = 'tenetur';
    $request->uploadProtocol = 'amet';

    $requestSecurity = new MonitoringProjectsNotificationChannelsVerifySecurity();
    $requestSecurity->option1 = new MonitoringProjectsNotificationChannelsVerifySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsNotificationChannelsVerify($request, $requestSecurity);

    if ($response->notificationChannel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsSnoozesCreate

Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsSnoozesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\Snooze;
use \OpenAPI\OpenAPI\Models\Shared\Criteria;
use \OpenAPI\OpenAPI\Models\Shared\TimeInterval;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsSnoozesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsSnoozesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsSnoozesCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsSnoozesCreateRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->snooze = new Snooze();
    $request->snooze->criteria = new Criteria();
    $request->snooze->criteria->policies = [
        'numquam',
        'enim',
        'dolorem',
        'sapiente',
    ];
    $request->snooze->displayName = 'totam';
    $request->snooze->interval = new TimeInterval();
    $request->snooze->interval->endTime = 'nihil';
    $request->snooze->interval->startTime = 'sit';
    $request->snooze->name = 'Luis Cremin';
    $request->accessToken = 'voluptas';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'quam';
    $request->fields = 'ipsum';
    $request->key = 'incidunt';
    $request->oauthToken = 'qui';
    $request->parent = 'cupiditate';
    $request->prettyPrint = false;
    $request->quotaUser = 'maxime';
    $request->uploadType = 'pariatur';
    $request->uploadProtocol = 'soluta';

    $requestSecurity = new MonitoringProjectsSnoozesCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsSnoozesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsSnoozesCreate($request, $requestSecurity);

    if ($response->snooze !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsSnoozesList

Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsSnoozesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsSnoozesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsSnoozesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsSnoozesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsSnoozesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsSnoozesListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'laborum';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'incidunt';
    $request->fields = 'aspernatur';
    $request->filter = 'dolores';
    $request->key = 'distinctio';
    $request->oauthToken = 'facilis';
    $request->pageSize = 396060;
    $request->pageToken = 'quam';
    $request->parent = 'molestias';
    $request->prettyPrint = false;
    $request->quotaUser = 'temporibus';
    $request->uploadType = 'qui';
    $request->uploadProtocol = 'neque';

    $requestSecurity = new MonitoringProjectsSnoozesListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsSnoozesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsSnoozesList($request, $requestSecurity);

    if ($response->listSnoozesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsTimeSeriesCreate

Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeries;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResourceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesMetricKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\Point;
use \OpenAPI\OpenAPI\Models\Shared\TimeInterval;
use \OpenAPI\OpenAPI\Models\Shared\TypedValue;
use \OpenAPI\OpenAPI\Models\Shared\Distribution;
use \OpenAPI\OpenAPI\Models\Shared\BucketOptions;
use \OpenAPI\OpenAPI\Models\Shared\Explicit;
use \OpenAPI\OpenAPI\Models\Shared\Exponential;
use \OpenAPI\OpenAPI\Models\Shared\Linear;
use \OpenAPI\OpenAPI\Models\Shared\Exemplar;
use \OpenAPI\OpenAPI\Models\Shared\Range;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResource;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsTimeSeriesCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->createTimeSeriesRequest = new CreateTimeSeriesRequest();
    $request->createTimeSeriesRequest->timeSeries = [
        new TimeSeries(),
    ];
    $request->accessToken = 'odio';
    $request->alt = AltEnum::JSON;
    $request->callback = 'ullam';
    $request->fields = 'nam';
    $request->key = 'hic';
    $request->name = 'Erma Rogahn PhD';
    $request->oauthToken = 'ipsum';
    $request->prettyPrint = false;
    $request->quotaUser = 'veritatis';
    $request->uploadType = 'nobis';
    $request->uploadProtocol = 'quos';

    $requestSecurity = new MonitoringProjectsTimeSeriesCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsTimeSeriesCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsTimeSeriesCreate($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsTimeSeriesCreateService

Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateServiceRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeries;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResourceMetadata;
use \OpenAPI\OpenAPI\Models\Shared\Metric;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesMetricKindEnum;
use \OpenAPI\OpenAPI\Models\Shared\Point;
use \OpenAPI\OpenAPI\Models\Shared\TimeInterval;
use \OpenAPI\OpenAPI\Models\Shared\TypedValue;
use \OpenAPI\OpenAPI\Models\Shared\Distribution;
use \OpenAPI\OpenAPI\Models\Shared\BucketOptions;
use \OpenAPI\OpenAPI\Models\Shared\Explicit;
use \OpenAPI\OpenAPI\Models\Shared\Exponential;
use \OpenAPI\OpenAPI\Models\Shared\Linear;
use \OpenAPI\OpenAPI\Models\Shared\Exemplar;
use \OpenAPI\OpenAPI\Models\Shared\Range;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResource;
use \OpenAPI\OpenAPI\Models\Shared\TimeSeriesValueTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateServiceSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateServiceSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateServiceSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesCreateServiceSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsTimeSeriesCreateServiceRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->createTimeSeriesRequest = new CreateTimeSeriesRequest();
    $request->createTimeSeriesRequest->timeSeries = [
        new TimeSeries(),
        new TimeSeries(),
        new TimeSeries(),
    ];
    $request->accessToken = 'aperiam';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'dolorem';
    $request->fields = 'dolore';
    $request->key = 'labore';
    $request->name = 'Mr. Sonya Bradtke';
    $request->oauthToken = 'itaque';
    $request->prettyPrint = false;
    $request->quotaUser = 'consequatur';
    $request->uploadType = 'est';
    $request->uploadProtocol = 'repellendus';

    $requestSecurity = new MonitoringProjectsTimeSeriesCreateServiceSecurity();
    $requestSecurity->option1 = new MonitoringProjectsTimeSeriesCreateServiceSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsTimeSeriesCreateService($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsTimeSeriesList

Lists time series that match a filter.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListViewEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsTimeSeriesListRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->accessToken = 'doloribus';
    $request->aggregationAlignmentPeriod = 'ut';
    $request->aggregationCrossSeriesReducer = MonitoringProjectsTimeSeriesListAggregationCrossSeriesReducerEnum::REDUCE_FRACTION_TRUE;
    $request->aggregationGroupByFields = [
        'qui',
        'quae',
        'laudantium',
    ];
    $request->aggregationPerSeriesAligner = MonitoringProjectsTimeSeriesListAggregationPerSeriesAlignerEnum::ALIGN_SUM;
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'voluptatibus';
    $request->fields = 'quisquam';
    $request->filter = 'vero';
    $request->intervalEndTime = 'omnis';
    $request->intervalStartTime = 'quis';
    $request->key = 'ipsum';
    $request->name = 'Karl Feeney';
    $request->oauthToken = 'dignissimos';
    $request->orderBy = 'hic';
    $request->pageSize = 715561;
    $request->pageToken = 'quod';
    $request->prettyPrint = false;
    $request->quotaUser = 'odio';
    $request->secondaryAggregationAlignmentPeriod = 'similique';
    $request->secondaryAggregationCrossSeriesReducer = MonitoringProjectsTimeSeriesListSecondaryAggregationCrossSeriesReducerEnum::REDUCE_FRACTION_TRUE;
    $request->secondaryAggregationGroupByFields = [
        'ducimus',
        'dolore',
        'quibusdam',
        'illum',
    ];
    $request->secondaryAggregationPerSeriesAligner = MonitoringProjectsTimeSeriesListSecondaryAggregationPerSeriesAlignerEnum::ALIGN_INTERPOLATE;
    $request->uploadType = 'natus';
    $request->uploadProtocol = 'impedit';
    $request->view = MonitoringProjectsTimeSeriesListViewEnum::FULL;

    $requestSecurity = new MonitoringProjectsTimeSeriesListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsTimeSeriesListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsTimeSeriesList($request, $requestSecurity);

    if ($response->listTimeSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsTimeSeriesQuery

Queries time series using Monitoring Query Language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesQueryRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\QueryTimeSeriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesQuerySecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesQuerySecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesQuerySecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsTimeSeriesQuerySecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsTimeSeriesQueryRequest();
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->queryTimeSeriesRequest = new QueryTimeSeriesRequest();
    $request->queryTimeSeriesRequest->pageSize = 347233;
    $request->queryTimeSeriesRequest->pageToken = 'nulla';
    $request->queryTimeSeriesRequest->query = 'fugit';
    $request->accessToken = 'porro';
    $request->alt = AltEnum::PROTO;
    $request->callback = 'doloribus';
    $request->fields = 'iusto';
    $request->key = 'eligendi';
    $request->name = 'Linda Nikolaus';
    $request->oauthToken = 'ea';
    $request->prettyPrint = false;
    $request->quotaUser = 'aspernatur';
    $request->uploadType = 'vel';
    $request->uploadProtocol = 'possimus';

    $requestSecurity = new MonitoringProjectsTimeSeriesQuerySecurity();
    $requestSecurity->option1 = new MonitoringProjectsTimeSeriesQuerySecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsTimeSeriesQuery($request, $requestSecurity);

    if ($response->queryTimeSeriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsUptimeCheckConfigsCreate

Creates a new Uptime check configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsUptimeCheckConfigsCreateRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\UptimeCheckConfig;
use \OpenAPI\OpenAPI\Models\Shared\UptimeCheckConfigCheckerTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentMatcher;
use \OpenAPI\OpenAPI\Models\Shared\JsonPathMatcher;
use \OpenAPI\OpenAPI\Models\Shared\JsonPathMatcherJsonMatcherEnum;
use \OpenAPI\OpenAPI\Models\Shared\ContentMatcherMatcherEnum;
use \OpenAPI\OpenAPI\Models\Shared\HttpCheck;
use \OpenAPI\OpenAPI\Models\Shared\ResponseStatusCode;
use \OpenAPI\OpenAPI\Models\Shared\ResponseStatusCodeStatusClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\BasicAuthentication;
use \OpenAPI\OpenAPI\Models\Shared\HttpCheckContentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\PingConfig;
use \OpenAPI\OpenAPI\Models\Shared\HttpCheckRequestMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\InternalChecker;
use \OpenAPI\OpenAPI\Models\Shared\InternalCheckerStateEnum;
use \OpenAPI\OpenAPI\Models\Shared\MonitoredResource;
use \OpenAPI\OpenAPI\Models\Shared\ResourceGroup;
use \OpenAPI\OpenAPI\Models\Shared\ResourceGroupResourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UptimeCheckConfigSelectedRegionsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TcpCheck;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsUptimeCheckConfigsCreateSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsUptimeCheckConfigsCreateSecurityOption2;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsUptimeCheckConfigsCreateRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->uptimeCheckConfig = new UptimeCheckConfig();
    $request->uptimeCheckConfig->checkerType = UptimeCheckConfigCheckerTypeEnum::CHECKER_TYPE_UNSPECIFIED;
    $request->uptimeCheckConfig->contentMatchers = [
        new ContentMatcher(),
        new ContentMatcher(),
    ];
    $request->uptimeCheckConfig->displayName = 'laudantium';
    $request->uptimeCheckConfig->httpCheck = new HttpCheck();
    $request->uptimeCheckConfig->httpCheck->acceptedResponseStatusCodes = [
        new ResponseStatusCode(),
    ];
    $request->uptimeCheckConfig->httpCheck->authInfo = new BasicAuthentication();
    $request->uptimeCheckConfig->httpCheck->authInfo->password = 'dolor';
    $request->uptimeCheckConfig->httpCheck->authInfo->username = 'Willa_Boyle';
    $request->uptimeCheckConfig->httpCheck->body = 'excepturi';
    $request->uptimeCheckConfig->httpCheck->contentType = HttpCheckContentTypeEnum::USER_PROVIDED;
    $request->uptimeCheckConfig->httpCheck->customContentType = 'nostrum';
    $request->uptimeCheckConfig->httpCheck->headers = [
        'quisquam' => 'saepe',
        'ea' => 'impedit',
        'corporis' => 'veniam',
        'aliquid' => 'inventore',
    ];
    $request->uptimeCheckConfig->httpCheck->maskHeaders = false;
    $request->uptimeCheckConfig->httpCheck->path = 'magnam';
    $request->uptimeCheckConfig->httpCheck->pingConfig = new PingConfig();
    $request->uptimeCheckConfig->httpCheck->pingConfig->pingsCount = 407241;
    $request->uptimeCheckConfig->httpCheck->port = 775220;
    $request->uptimeCheckConfig->httpCheck->requestMethod = HttpCheckRequestMethodEnum::METHOD_UNSPECIFIED;
    $request->uptimeCheckConfig->httpCheck->useSsl = false;
    $request->uptimeCheckConfig->httpCheck->validateSsl = false;
    $request->uptimeCheckConfig->internalCheckers = [
        new InternalChecker(),
        new InternalChecker(),
        new InternalChecker(),
        new InternalChecker(),
    ];
    $request->uptimeCheckConfig->isInternal = false;
    $request->uptimeCheckConfig->monitoredResource = new MonitoredResource();
    $request->uptimeCheckConfig->monitoredResource->labels = [
        'minima' => 'eaque',
    ];
    $request->uptimeCheckConfig->monitoredResource->type = 'a';
    $request->uptimeCheckConfig->name = 'Richard Anderson';
    $request->uptimeCheckConfig->period = 'aliquam';
    $request->uptimeCheckConfig->resourceGroup = new ResourceGroup();
    $request->uptimeCheckConfig->resourceGroup->groupId = 'fugit';
    $request->uptimeCheckConfig->resourceGroup->resourceType = ResourceGroupResourceTypeEnum::AWS_ELB_LOAD_BALANCER;
    $request->uptimeCheckConfig->selectedRegions = [
        UptimeCheckConfigSelectedRegionsEnum::EUROPE,
    ];
    $request->uptimeCheckConfig->tcpCheck = new TcpCheck();
    $request->uptimeCheckConfig->tcpCheck->pingConfig = new PingConfig();
    $request->uptimeCheckConfig->tcpCheck->pingConfig->pingsCount = 89603;
    $request->uptimeCheckConfig->tcpCheck->port = 677412;
    $request->uptimeCheckConfig->timeout = 'laborum';
    $request->uptimeCheckConfig->userLabels = [
        'velit' => 'eum',
        'autem' => 'nobis',
        'quas' => 'assumenda',
        'nulla' => 'voluptas',
    ];
    $request->accessToken = 'libero';
    $request->alt = AltEnum::JSON;
    $request->callback = 'tempora';
    $request->fields = 'numquam';
    $request->key = 'explicabo';
    $request->oauthToken = 'provident';
    $request->parent = 'ipsa';
    $request->prettyPrint = false;
    $request->quotaUser = 'molestiae';
    $request->uploadType = 'magnam';
    $request->uploadProtocol = 'odio';

    $requestSecurity = new MonitoringProjectsUptimeCheckConfigsCreateSecurity();
    $requestSecurity->option1 = new MonitoringProjectsUptimeCheckConfigsCreateSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsUptimeCheckConfigsCreate($request, $requestSecurity);

    if ($response->uptimeCheckConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## monitoringProjectsUptimeCheckConfigsList

Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsUptimeCheckConfigsListRequest;
use \OpenAPI\OpenAPI\Models\Shared\XgafvEnum;
use \OpenAPI\OpenAPI\Models\Shared\AltEnum;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsUptimeCheckConfigsListSecurity;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsUptimeCheckConfigsListSecurityOption1;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsUptimeCheckConfigsListSecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\MonitoringProjectsUptimeCheckConfigsListSecurityOption3;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MonitoringProjectsUptimeCheckConfigsListRequest();
    $request->dollarXgafv = XgafvEnum::ONE;
    $request->accessToken = 'esse';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'rem';
    $request->fields = 'fuga';
    $request->filter = 'reprehenderit';
    $request->key = 'quidem';
    $request->oauthToken = 'fugiat';
    $request->pageSize = 283519;
    $request->pageToken = 'eum';
    $request->parent = 'suscipit';
    $request->prettyPrint = false;
    $request->quotaUser = 'assumenda';
    $request->uploadType = 'eos';
    $request->uploadProtocol = 'praesentium';

    $requestSecurity = new MonitoringProjectsUptimeCheckConfigsListSecurity();
    $requestSecurity->option1 = new MonitoringProjectsUptimeCheckConfigsListSecurityOption1();
    $requestSecurity->option1->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';
    $requestSecurity->option1->oauth2c = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->projects->monitoringProjectsUptimeCheckConfigsList($request, $requestSecurity);

    if ($response->listUptimeCheckConfigsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
