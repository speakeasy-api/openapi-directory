import { SpeakeasyBase } from "../../../internal/utils";
import { EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList } from "./enterprisecrmeventbusprotobasealertconfigerrorenumlist";
import { EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue } from "./enterprisecrmeventbusprotobasealertconfigthresholdvalue";
export declare enum EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum {
    MetricTypeUnspecified = "METRIC_TYPE_UNSPECIFIED",
    EventErrorRate = "EVENT_ERROR_RATE",
    EventWarningRate = "EVENT_WARNING_RATE",
    TaskErrorRate = "TASK_ERROR_RATE",
    TaskWarningRate = "TASK_WARNING_RATE",
    TaskRate = "TASK_RATE",
    EventRate = "EVENT_RATE",
    EventAverageDuration = "EVENT_AVERAGE_DURATION",
    EventPercentileDuration = "EVENT_PERCENTILE_DURATION",
    TaskAverageDuration = "TASK_AVERAGE_DURATION",
    TaskPercentileDuration = "TASK_PERCENTILE_DURATION"
}
/**
 * The threshold type, whether lower(expected_min) or upper(expected_max), for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired.
 */
export declare enum EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum {
    UnspecifiedThresholdType = "UNSPECIFIED_THRESHOLD_TYPE",
    ExpectedMin = "EXPECTED_MIN",
    ExpectedMax = "EXPECTED_MAX"
}
/**
 * Message to be used to configure custom alerting in the {@code EventConfig} protos for an event.
 */
export declare class EnterpriseCrmEventbusProtoWorkflowAlertConfig extends SpeakeasyBase {
    /**
     * For an EXPECTED_MIN threshold, this aggregation_period must be lesser than 24 hours.
     */
    aggregationPeriod?: string;
    /**
     * Set to false by default. When set to true, the metrics are not aggregated or pushed to Monarch for this workflow alert.
     */
    alertDisabled?: boolean;
    /**
     * A name to identify this alert. This will be displayed in the alert subject. If set, this name should be unique within the scope of the workflow.
     */
    alertName?: string;
    /**
     * Client associated with this alert configuration.
     */
    clientId?: string;
    /**
     * Should be specified only for *AVERAGE_DURATION and *PERCENTILE_DURATION metrics. This member should be used to specify what duration value the metrics should exceed for the alert to trigger.
     */
    durationThresholdMs?: string;
    /**
     * List of error enums for alerts.
     */
    errorEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
    metricType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum;
    /**
     * For how many contiguous aggregation periods should the expected min or max be violated for the alert to be fired.
     */
    numAggregationPeriods?: number;
    /**
     * For either events or tasks, depending on the type of alert, count only final attempts, not retries.
     */
    onlyFinalAttempt?: boolean;
    /**
     * Link to a playbook for resolving the issue that triggered this alert.
     */
    playbookUrl?: string;
    /**
     * The threshold type, whether lower(expected_min) or upper(expected_max), for which this alert is being configured. If value falls below expected_min or exceeds expected_max, an alert will be fired.
     */
    thresholdType?: EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum;
    /**
     * The threshold value of the metric, above or below which the alert should be triggered. See EventAlertConfig or TaskAlertConfig for the different alert metric types in each case. For the *RATE metrics, one or both of these fields may be set. Zero is the default value and can be left at that. For *PERCENTILE_DURATION metrics, one or both of these fields may be set, and also, the duration threshold value should be specified in the threshold_duration_ms member below. For *AVERAGE_DURATION metrics, these fields should not be set at all. A different member, threshold_duration_ms, must be set in the EventAlertConfig or the TaskAlertConfig.
     */
    thresholdValue?: EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue;
    /**
     * List of error enums for alerts.
     */
    warningEnumList?: EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList;
}
