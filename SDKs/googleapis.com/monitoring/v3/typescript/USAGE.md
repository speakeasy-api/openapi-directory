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