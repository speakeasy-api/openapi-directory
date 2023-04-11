import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval } from "./googleclouddialogflowcxv3beta1experimentresultconfidenceinterval";
/**
 * Count-based metric type. Only one of type or count_type is specified in each Metric.
 */
export declare enum GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum {
    CountTypeUnspecified = "COUNT_TYPE_UNSPECIFIED",
    TotalNoMatchCount = "TOTAL_NO_MATCH_COUNT",
    TotalTurnCount = "TOTAL_TURN_COUNT",
    AverageTurnCount = "AVERAGE_TURN_COUNT"
}
/**
 * Ratio-based metric type. Only one of type or count_type is specified in each Metric.
 */
export declare enum GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    ContainedSessionNoCallbackRate = "CONTAINED_SESSION_NO_CALLBACK_RATE",
    LiveAgentHandoffRate = "LIVE_AGENT_HANDOFF_RATE",
    CallbackSessionRate = "CALLBACK_SESSION_RATE",
    AbandonedSessionRate = "ABANDONED_SESSION_RATE",
    SessionEndRate = "SESSION_END_RATE"
}
/**
 * Metric and corresponding confidence intervals.
 */
export declare class GoogleCloudDialogflowCxV3beta1ExperimentResultMetric extends SpeakeasyBase {
    /**
     * A confidence interval is a range of possible values for the experiment objective you are trying to measure.
     */
    confidenceInterval?: GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval;
    /**
     * Count value of a metric.
     */
    count?: number;
    /**
     * Count-based metric type. Only one of type or count_type is specified in each Metric.
     */
    countType?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum;
    /**
     * Ratio value of a metric.
     */
    ratio?: number;
    /**
     * Ratio-based metric type. Only one of type or count_type is specified in each Metric.
     */
    type?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum;
}
