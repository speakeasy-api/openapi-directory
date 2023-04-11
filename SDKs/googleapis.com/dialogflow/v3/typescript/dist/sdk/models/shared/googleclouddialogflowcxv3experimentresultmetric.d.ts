import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval } from "./googleclouddialogflowcxv3experimentresultconfidenceinterval";
/**
 * Count-based metric type. Only one of type or count_type is specified in each Metric.
 */
export declare enum GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum {
    CountTypeUnspecified = "COUNT_TYPE_UNSPECIFIED",
    TotalNoMatchCount = "TOTAL_NO_MATCH_COUNT",
    TotalTurnCount = "TOTAL_TURN_COUNT",
    AverageTurnCount = "AVERAGE_TURN_COUNT"
}
/**
 * Ratio-based metric type. Only one of type or count_type is specified in each Metric.
 */
export declare enum GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum {
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
export declare class GoogleCloudDialogflowCxV3ExperimentResultMetric extends SpeakeasyBase {
    /**
     * A confidence interval is a range of possible values for the experiment objective you are trying to measure.
     */
    confidenceInterval?: GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval;
    /**
     * Count value of a metric.
     */
    count?: number;
    /**
     * Count-based metric type. Only one of type or count_type is specified in each Metric.
     */
    countType?: GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum;
    /**
     * Ratio value of a metric.
     */
    ratio?: number;
    /**
     * Ratio-based metric type. Only one of type or count_type is specified in each Metric.
     */
    type?: GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum;
}
