# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/monitoring/v3/typescript
```

### Yarn

```bash
yarn add https://gitpkg.now.sh/speakeasy-api/openapi-directory/SDKs/googleapis.com/monitoring/v3/typescript
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  MonitoringProjectsAlertPoliciesCreateRequest,
  MonitoringProjectsAlertPoliciesCreateResponse
} from "openapi/dist/sdk/models/operations";
import {
  AltEnum,
  AlertPolicyCombinerEnum,
  MetricThresholdComparisonEnum,
  MetricThresholdEvaluationMissingDataEnum,
  AggregationCrossSeriesReducerEnum,
  AggregationPerSeriesAlignerEnum,
  MonitoringQueryLanguageConditionEvaluationMissingDataEnum,
  XgafvEnum,
} from "openapi/dist/sdk/models/shared";

import { AxiosError } from "axios";
import { SDK } from "openapi";
const sdk = new SDK();

const req: MonitoringProjectsAlertPoliciesCreateRequest = {
  dollarXgafv: XgafvEnum.Two,
  alertPolicy: {
    alertStrategy: {
      autoClose: "provident",
      notificationChannelStrategy: [
        {
          notificationChannelNames: [
            "unde",
            "nulla",
            "corrupti",
            "illum",
          ],
          renotifyInterval: "vel",
        },
        {
          notificationChannelNames: [
            "deserunt",
            "suscipit",
            "iure",
          ],
          renotifyInterval: "magnam",
        },
        {
          notificationChannelNames: [
            "ipsa",
            "delectus",
            "tempora",
            "suscipit",
          ],
          renotifyInterval: "molestiae",
        },
      ],
      notificationRateLimit: {
        period: "minus",
      },
    },
    combiner: AlertPolicyCombinerEnum.AndWithMatchingResource,
    conditions: [
      {
        conditionAbsent: {
          aggregations: [
            {
              alignmentPeriod: "excepturi",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceStddev,
              groupByFields: [
                "temporibus",
                "ab",
                "quis",
                "veritatis",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignCountFalse,
            },
            {
              alignmentPeriod: "perferendis",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceStddev,
              groupByFields: [
                "sapiente",
                "quo",
                "odit",
                "at",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignPercentile50,
            },
          ],
          duration: "maiores",
          filter: "molestiae",
          trigger: {
            count: 799159,
            percent: 8009.11,
          },
        },
        conditionMatchedLog: {
          filter: "esse",
          labelExtractors: {
            "porro": "dolorum",
            "dicta": "nam",
            "officia": "occaecati",
          },
        },
        conditionMonitoringQueryLanguage: {
          duration: "fugit",
          evaluationMissingData: MonitoringQueryLanguageConditionEvaluationMissingDataEnum.EvaluationMissingDataActive,
          query: "hic",
          trigger: {
            count: 758616,
            percent: 5218.48,
          },
        },
        conditionThreshold: {
          aggregations: [
            {
              alignmentPeriod: "commodi",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceCount,
              groupByFields: [
                "qui",
                "impedit",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignPercentile99,
            },
          ],
          comparison: MetricThresholdComparisonEnum.ComparisonLt,
          denominatorAggregations: [
            {
              alignmentPeriod: "excepturi",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceMean,
              groupByFields: [
                "ad",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignCountTrue,
            },
          ],
          denominatorFilter: "sed",
          duration: "iste",
          evaluationMissingData: MetricThresholdEvaluationMissingDataEnum.EvaluationMissingDataUnspecified,
          filter: "natus",
          forecastOptions: {
            forecastHorizon: "laboriosam",
          },
          thresholdValue: 9437.49,
          trigger: {
            count: 902599,
            percent: 6818.2,
          },
        },
        displayName: "in",
        name: "corporis",
      },
      {
        conditionAbsent: {
          aggregations: [
            {
              alignmentPeriod: "iure",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReducePercentile50,
              groupByFields: [
                "architecto",
                "ipsa",
                "reiciendis",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignCountFalse,
            },
            {
              alignmentPeriod: "mollitia",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceFractionTrue,
              groupByFields: [
                "dolorem",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignMax,
            },
            {
              alignmentPeriod: "explicabo",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReducePercentile99,
              groupByFields: [
                "omnis",
                "nemo",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignMax,
            },
          ],
          duration: "excepturi",
          filter: "accusantium",
          trigger: {
            count: 438601,
            percent: 6342.74,
          },
        },
        conditionMatchedLog: {
          filter: "doloribus",
          labelExtractors: {
            "architecto": "mollitia",
            "dolorem": "culpa",
            "consequuntur": "repellat",
            "mollitia": "occaecati",
          },
        },
        conditionMonitoringQueryLanguage: {
          duration: "numquam",
          evaluationMissingData: MonitoringQueryLanguageConditionEvaluationMissingDataEnum.EvaluationMissingDataInactive,
          query: "quam",
          trigger: {
            count: 474697,
            percent: 2444.25,
          },
        },
        conditionThreshold: {
          aggregations: [
            {
              alignmentPeriod: "quia",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceSum,
              groupByFields: [
                "laborum",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignCountFalse,
            },
            {
              alignmentPeriod: "enim",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceMean,
              groupByFields: [
                "sequi",
                "tenetur",
                "ipsam",
                "id",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignPercentile95,
            },
            {
              alignmentPeriod: "aut",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceMean,
              groupByFields: [
                "temporibus",
                "laborum",
                "quasi",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignPercentChange,
            },
          ],
          comparison: MetricThresholdComparisonEnum.ComparisonNe,
          denominatorAggregations: [
            {
              alignmentPeriod: "nihil",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceCountTrue,
              groupByFields: [
                "ipsa",
                "omnis",
                "voluptate",
                "cum",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignNone,
            },
            {
              alignmentPeriod: "doloremque",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceCount,
              groupByFields: [
                "maiores",
                "dicta",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignMax,
            },
            {
              alignmentPeriod: "dolore",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceCount,
              groupByFields: [
                "harum",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignMax,
            },
            {
              alignmentPeriod: "accusamus",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceStddev,
              groupByFields: [
                "quae",
                "ipsum",
                "quidem",
                "molestias",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignStddev,
            },
          ],
          denominatorFilter: "pariatur",
          duration: "modi",
          evaluationMissingData: MetricThresholdEvaluationMissingDataEnum.EvaluationMissingDataActive,
          filter: "rem",
          forecastOptions: {
            forecastHorizon: "voluptates",
          },
          thresholdValue: 939.4,
          trigger: {
            count: 921158,
            percent: 5759.47,
          },
        },
        displayName: "veritatis",
        name: "itaque",
      },
      {
        conditionAbsent: {
          aggregations: [
            {
              alignmentPeriod: "enim",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceNone,
              groupByFields: [
                "quibusdam",
                "explicabo",
                "deserunt",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignFractionTrue,
            },
            {
              alignmentPeriod: "quibusdam",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceSum,
              groupByFields: [
                "qui",
                "aliquid",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignCountTrue,
            },
          ],
          duration: "quos",
          filter: "perferendis",
          trigger: {
            count: 164940,
            percent: 8289.4,
          },
        },
        conditionMatchedLog: {
          filter: "ipsam",
          labelExtractors: {
            "fugit": "dolorum",
          },
        },
        conditionMonitoringQueryLanguage: {
          duration: "excepturi",
          evaluationMissingData: MonitoringQueryLanguageConditionEvaluationMissingDataEnum.EvaluationMissingDataInactive,
          query: "facilis",
          trigger: {
            count: 735194,
            percent: 2884.76,
          },
        },
        conditionThreshold: {
          aggregations: [
            {
              alignmentPeriod: "eum",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceMax,
              groupByFields: [
                "sint",
                "aliquid",
                "provident",
                "necessitatibus",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignStddev,
            },
            {
              alignmentPeriod: "officia",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceMax,
              groupByFields: [
                "a",
                "dolorum",
                "in",
                "in",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignPercentile50,
            },
            {
              alignmentPeriod: "maiores",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceFractionTrue,
              groupByFields: [
                "magnam",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignPercentile99,
            },
            {
              alignmentPeriod: "facere",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReduceStddev,
              groupByFields: [
                "laborum",
                "accusamus",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignNextOlder,
            },
          ],
          comparison: MetricThresholdComparisonEnum.ComparisonLe,
          denominatorAggregations: [
            {
              alignmentPeriod: "accusamus",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReducePercentile05,
              groupByFields: [
                "provident",
                "nam",
                "id",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignSum,
            },
            {
              alignmentPeriod: "deleniti",
              crossSeriesReducer: AggregationCrossSeriesReducerEnum.ReducePercentile05,
              groupByFields: [
                "deserunt",
              ],
              perSeriesAligner: AggregationPerSeriesAlignerEnum.AlignMean,
            },
          ],
          denominatorFilter: "vel",
          duration: "natus",
          evaluationMissingData: MetricThresholdEvaluationMissingDataEnum.EvaluationMissingDataActive,
          filter: "molestiae",
          forecastOptions: {
            forecastHorizon: "perferendis",
          },
          thresholdValue: 4701.32,
          trigger: {
            count: 301575,
            percent: 7160.75,
          },
        },
        displayName: "id",
        name: "labore",
      },
    ],
    creationRecord: {
      mutateTime: "labore",
      mutatedBy: "suscipit",
    },
    displayName: "natus",
    documentation: {
      content: "nobis",
      mimeType: "eum",
    },
    enabled: false,
    mutationRecord: {
      mutateTime: "vero",
      mutatedBy: "aspernatur",
    },
    name: "architecto",
    notificationChannels: [
      "et",
      "excepturi",
    ],
    userLabels: {
      "provident": "quos",
      "sint": "accusantium",
    },
    validity: {
      code: 653201,
      details: [
        {
          "ad": "eum",
          "dolor": "necessitatibus",
          "odit": "nemo",
        },
        {
          "iure": "doloribus",
        },
        {
          "eius": "maxime",
          "deleniti": "facilis",
          "in": "architecto",
          "architecto": "repudiandae",
        },
        {
          "expedita": "nihil",
          "repellat": "quibusdam",
        },
      ],
      message: "sed",
    },
  },
  accessToken: "saepe",
  alt: AltEnum.Proto,
  callback: "accusantium",
  fields: "consequuntur",
  key: "praesentium",
  name: "natus",
  oauthToken: "magni",
  prettyPrint: false,
  quotaUser: "sunt",
  uploadType: "quo",
  uploadProtocol: "illum",
};

sdk.projects.monitoringProjectsAlertPoliciesCreate(req).then((res: MonitoringProjectsAlertPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### projects

* `monitoringProjectsAlertPoliciesCreate` - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* `monitoringProjectsAlertPoliciesList` - Lists the existing alerting policies for the workspace.
* `monitoringProjectsCollectdTimeSeriesCreate` - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* `monitoringProjectsGroupsCreate` - Creates a new group.
* `monitoringProjectsGroupsList` - Lists the existing groups.
* `monitoringProjectsGroupsMembersList` - Lists the monitored resources that are members of a group.
* `monitoringProjectsGroupsUpdate` - Updates an existing group. You can change any group attributes except name.
* `monitoringProjectsMetricDescriptorsCreate` - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* `monitoringProjectsMetricDescriptorsList` - Lists metric descriptors that match a filter.
* `monitoringProjectsMonitoredResourceDescriptorsList` - Lists monitored resource descriptors that match a filter.
* `monitoringProjectsNotificationChannelDescriptorsList` - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* `monitoringProjectsNotificationChannelsCreate` - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* `monitoringProjectsNotificationChannelsGetVerificationCode` - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* `monitoringProjectsNotificationChannelsList` - Lists the notification channels that have been created for the project.
* `monitoringProjectsNotificationChannelsSendVerificationCode` - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* `monitoringProjectsNotificationChannelsVerify` - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* `monitoringProjectsSnoozesCreate` - Creates a Snooze that will prevent alerts, which match the provided criteria, from being opened. The Snooze applies for a specific time interval.
* `monitoringProjectsSnoozesList` - Lists the Snoozes associated with a project. Can optionally pass in filter, which specifies predicates to match Snoozes.
* `monitoringProjectsTimeSeriesCreate` - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* `monitoringProjectsTimeSeriesCreateService` - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* `monitoringProjectsTimeSeriesList` - Lists time series that match a filter.
* `monitoringProjectsTimeSeriesQuery` - Queries time series using Monitoring Query Language.
* `monitoringProjectsUptimeCheckConfigsCreate` - Creates a new Uptime check configuration.
* `monitoringProjectsUptimeCheckConfigsList` - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### services

* `monitoringServicesCreate` - Create a Service.
* `monitoringServicesList` - List Services for this Metrics Scope.
* `monitoringServicesServiceLevelObjectivesCreate` - Create a ServiceLevelObjective for the given Service.
* `monitoringServicesServiceLevelObjectivesDelete` - Delete the given ServiceLevelObjective.
* `monitoringServicesServiceLevelObjectivesGet` - Get a ServiceLevelObjective by name.
* `monitoringServicesServiceLevelObjectivesList` - List the ServiceLevelObjectives for the given Service.
* `monitoringServicesServiceLevelObjectivesPatch` - Update the given ServiceLevelObjective.

### uptimeCheckIps

* `monitoringUptimeCheckIpsList` - Returns the list of IP addresses that checkers run from
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)

