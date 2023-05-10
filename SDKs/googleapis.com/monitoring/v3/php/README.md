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
    $request->dollarXgafv = XgafvEnum::TWO;
    $request->alertPolicy = new AlertPolicy();
    $request->alertPolicy->alertStrategy = new AlertStrategy();
    $request->alertPolicy->alertStrategy->autoClose = 'provident';
    $request->alertPolicy->alertStrategy->notificationChannelStrategy = [
        new NotificationChannelStrategy(),
        new NotificationChannelStrategy(),
        new NotificationChannelStrategy(),
    ];
    $request->alertPolicy->alertStrategy->notificationRateLimit = new NotificationRateLimit();
    $request->alertPolicy->alertStrategy->notificationRateLimit->period = 'quibusdam';
    $request->alertPolicy->combiner = AlertPolicyCombinerEnum::OR;
    $request->alertPolicy->conditions = [
        new Condition(),
        new Condition(),
        new Condition(),
        new Condition(),
    ];
    $request->alertPolicy->creationRecord = new MutationRecord();
    $request->alertPolicy->creationRecord->mutateTime = 'corrupti';
    $request->alertPolicy->creationRecord->mutatedBy = 'illum';
    $request->alertPolicy->displayName = 'vel';
    $request->alertPolicy->documentation = new Documentation();
    $request->alertPolicy->documentation->content = 'error';
    $request->alertPolicy->documentation->mimeType = 'deserunt';
    $request->alertPolicy->enabled = false;
    $request->alertPolicy->mutationRecord = new MutationRecord();
    $request->alertPolicy->mutationRecord->mutateTime = 'suscipit';
    $request->alertPolicy->mutationRecord->mutatedBy = 'iure';
    $request->alertPolicy->name = 'Raquel Bednar';
    $request->alertPolicy->notificationChannels = [
        'molestiae',
        'minus',
    ];
    $request->alertPolicy->userLabels = [
        'voluptatum' => 'iusto',
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
        'ab' => 'quis',
    ];
    $request->alertPolicy->validity = new Status();
    $request->alertPolicy->validity->code = 87129;
    $request->alertPolicy->validity->details = [
        [
            'ipsam' => 'repellendus',
        ],
        [
            'quo' => 'odit',
            'at' => 'at',
            'maiores' => 'molestiae',
            'quod' => 'quod',
        ],
        [
            'totam' => 'porro',
            'dolorum' => 'dicta',
        ],
    ];
    $request->alertPolicy->validity->message = 'nam';
    $request->accessToken = 'officia';
    $request->alt = AltEnum::MEDIA;
    $request->callback = 'fugit';
    $request->fields = 'deleniti';
    $request->key = 'hic';
    $request->name = 'Everett Breitenberg';
    $request->oauthToken = 'modi';
    $request->prettyPrint = false;
    $request->quotaUser = 'qui';
    $request->uploadType = 'impedit';
    $request->uploadProtocol = 'cum';

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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [projects](docs/projects/README.md)

* [monitoringProjectsAlertPoliciesCreate](docs/projects/README.md#monitoringprojectsalertpoliciescreate) - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* [monitoringProjectsAlertPoliciesList](docs/projects/README.md#monitoringprojectsalertpolicieslist) - Lists the existing alerting policies for the workspace.
* [monitoringProjectsCollectdTimeSeriesCreate](docs/projects/README.md#monitoringprojectscollectdtimeseriescreate) - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* [monitoringProjectsGroupsCreate](docs/projects/README.md#monitoringprojectsgroupscreate) - Creates a new group.
* [monitoringProjectsGroupsList](docs/projects/README.md#monitoringprojectsgroupslist) - Lists the existing groups.
* [monitoringProjectsGroupsMembersList](docs/projects/README.md#monitoringprojectsgroupsmemberslist) - Lists the monitored resources that are members of a group.
* [monitoringProjectsGroupsUpdate](docs/projects/README.md#monitoringprojectsgroupsupdate) - Updates an existing group. You can change any group attributes except name.
* [monitoringProjectsMetricDescriptorsCreate](docs/projects/README.md#monitoringprojectsmetricdescriptorscreate) - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* [monitoringProjectsMetricDescriptorsList](docs/projects/README.md#monitoringprojectsmetricdescriptorslist) - Lists metric descriptors that match a filter.
* [monitoringProjectsMonitoredResourceDescriptorsList](docs/projects/README.md#monitoringprojectsmonitoredresourcedescriptorslist) - Lists monitored resource descriptors that match a filter.
* [monitoringProjectsNotificationChannelDescriptorsList](docs/projects/README.md#monitoringprojectsnotificationchanneldescriptorslist) - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* [monitoringProjectsNotificationChannelsCreate](docs/projects/README.md#monitoringprojectsnotificationchannelscreate) - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* [monitoringProjectsNotificationChannelsGetVerificationCode](docs/projects/README.md#monitoringprojectsnotificationchannelsgetverificationcode) - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* [monitoringProjectsNotificationChannelsList](docs/projects/README.md#monitoringprojectsnotificationchannelslist) - Lists the notification channels that have been created for the project. To list the types of notification channels that are supported, use the ListNotificationChannelDescriptors method.
* [monitoringProjectsNotificationChannelsSendVerificationCode](docs/projects/README.md#monitoringprojectsnotificationchannelssendverificationcode) - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* [monitoringProjectsNotificationChannelsVerify](docs/projects/README.md#monitoringprojectsnotificationchannelsverify) - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* [monitoringProjectsSnoozesCreate](docs/projects/README.md#monitoringprojectssnoozescreate) - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* [monitoringProjectsSnoozesList](docs/projects/README.md#monitoringprojectssnoozeslist) - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* [monitoringProjectsTimeSeriesCreate](docs/projects/README.md#monitoringprojectstimeseriescreate) - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* [monitoringProjectsTimeSeriesCreateService](docs/projects/README.md#monitoringprojectstimeseriescreateservice) - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* [monitoringProjectsTimeSeriesList](docs/projects/README.md#monitoringprojectstimeserieslist) - Lists time series that match a filter.
* [monitoringProjectsTimeSeriesQuery](docs/projects/README.md#monitoringprojectstimeseriesquery) - Queries time series using Monitoring Query Language.
* [monitoringProjectsUptimeCheckConfigsCreate](docs/projects/README.md#monitoringprojectsuptimecheckconfigscreate) - Creates a new Uptime check configuration.
* [monitoringProjectsUptimeCheckConfigsList](docs/projects/README.md#monitoringprojectsuptimecheckconfigslist) - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### [services](docs/services/README.md)

* [monitoringServicesCreate](docs/services/README.md#monitoringservicescreate) - Create a Service.
* [monitoringServicesList](docs/services/README.md#monitoringserviceslist) - List Services for this Metrics Scope.
* [monitoringServicesServiceLevelObjectivesCreate](docs/services/README.md#monitoringservicesservicelevelobjectivescreate) - Create a ServiceLevelObjective for the given Service.
* [monitoringServicesServiceLevelObjectivesDelete](docs/services/README.md#monitoringservicesservicelevelobjectivesdelete) - Delete the given ServiceLevelObjective.
* [monitoringServicesServiceLevelObjectivesGet](docs/services/README.md#monitoringservicesservicelevelobjectivesget) - Get a ServiceLevelObjective by name.
* [monitoringServicesServiceLevelObjectivesList](docs/services/README.md#monitoringservicesservicelevelobjectiveslist) - List the ServiceLevelObjectives for the given Service.
* [monitoringServicesServiceLevelObjectivesPatch](docs/services/README.md#monitoringservicesservicelevelobjectivespatch) - Update the given ServiceLevelObjective.

### [uptimeCheckIps](docs/uptimecheckips/README.md)

* [monitoringUptimeCheckIpsList](docs/uptimecheckips/README.md#monitoringuptimecheckipslist) - Returns the list of IP addresses that checkers run from
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
