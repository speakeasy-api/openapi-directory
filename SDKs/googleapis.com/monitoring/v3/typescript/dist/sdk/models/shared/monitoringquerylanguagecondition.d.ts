import { SpeakeasyBase } from "../../../internal/utils";
import { Trigger } from "./trigger";
/**
 * A condition control that determines how metric-threshold conditions are evaluated when data stops arriving.
 */
export declare enum MonitoringQueryLanguageConditionEvaluationMissingDataEnum {
    EvaluationMissingDataUnspecified = "EVALUATION_MISSING_DATA_UNSPECIFIED",
    EvaluationMissingDataInactive = "EVALUATION_MISSING_DATA_INACTIVE",
    EvaluationMissingDataActive = "EVALUATION_MISSING_DATA_ACTIVE",
    EvaluationMissingDataNoOp = "EVALUATION_MISSING_DATA_NO_OP"
}
/**
 * A condition type that allows alert policies to be defined using Monitoring Query Language (https://cloud.google.com/monitoring/mql).
 */
export declare class MonitoringQueryLanguageCondition extends SpeakeasyBase {
    /**
     * The amount of time that a time series must violate the threshold to be considered failing. Currently, only values that are a multiple of a minute--e.g., 0, 60, 120, or 300 seconds--are supported. If an invalid value is given, an error will be returned. When choosing a duration, it is useful to keep in mind the frequency of the underlying time series data (which may also be affected by any alignments specified in the aggregations field); a good duration is long enough so that a single outlier does not generate spurious alerts, but short enough that unhealthy states are detected and alerted on quickly.
     */
    duration?: string;
    /**
     * A condition control that determines how metric-threshold conditions are evaluated when data stops arriving.
     */
    evaluationMissingData?: MonitoringQueryLanguageConditionEvaluationMissingDataEnum;
    /**
     * Monitoring Query Language (https://cloud.google.com/monitoring/mql) query that outputs a boolean stream.
     */
    query?: string;
    /**
     * Specifies how many time series must fail a predicate to trigger a condition. If not specified, then a {count: 1} trigger is used.
     */
    trigger?: Trigger;
}
