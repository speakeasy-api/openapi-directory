import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of the performance goal.
 */
export declare enum PerformanceGoalPerformanceGoalTypeEnum {
    PerformanceGoalTypeUnspecified = "PERFORMANCE_GOAL_TYPE_UNSPECIFIED",
    PerformanceGoalTypeCpm = "PERFORMANCE_GOAL_TYPE_CPM",
    PerformanceGoalTypeCpc = "PERFORMANCE_GOAL_TYPE_CPC",
    PerformanceGoalTypeCpa = "PERFORMANCE_GOAL_TYPE_CPA",
    PerformanceGoalTypeCtr = "PERFORMANCE_GOAL_TYPE_CTR",
    PerformanceGoalTypeViewability = "PERFORMANCE_GOAL_TYPE_VIEWABILITY",
    PerformanceGoalTypeCpiavc = "PERFORMANCE_GOAL_TYPE_CPIAVC",
    PerformanceGoalTypeCpe = "PERFORMANCE_GOAL_TYPE_CPE",
    PerformanceGoalTypeClickCvr = "PERFORMANCE_GOAL_TYPE_CLICK_CVR",
    PerformanceGoalTypeImpressionCvr = "PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR",
    PerformanceGoalTypeVcpm = "PERFORMANCE_GOAL_TYPE_VCPM",
    PerformanceGoalTypeVtr = "PERFORMANCE_GOAL_TYPE_VTR",
    PerformanceGoalTypeAudioCompletionRate = "PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE",
    PerformanceGoalTypeVideoCompletionRate = "PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE",
    PerformanceGoalTypeOther = "PERFORMANCE_GOAL_TYPE_OTHER"
}
/**
 * Settings that control the performance goal of a campaign or insertion order.
 */
export declare class PerformanceGoal extends SpeakeasyBase {
    /**
     * The goal amount, in micros of the advertiser's currency. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CPM` * `PERFORMANCE_GOAL_TYPE_CPC` * `PERFORMANCE_GOAL_TYPE_CPA` * `PERFORMANCE_GOAL_TYPE_CPIAVC` * `PERFORMANCE_GOAL_TYPE_VCPM` For example 1500000 represents 1.5 standard units of the currency.
     */
    performanceGoalAmountMicros?: string;
    /**
     * The decimal representation of the goal percentage in micros. Applicable when performance_goal_type is one of: * `PERFORMANCE_GOAL_TYPE_CTR` * `PERFORMANCE_GOAL_TYPE_VIEWABILITY` * `PERFORMANCE_GOAL_TYPE_CLICK_CVR` * `PERFORMANCE_GOAL_TYPE_IMPRESSION_CVR` * `PERFORMANCE_GOAL_TYPE_VTR` * `PERFORMANCE_GOAL_TYPE_AUDIO_COMPLETION_RATE` * `PERFORMANCE_GOAL_TYPE_VIDEO_COMPLETION_RATE` For example, 70000 represents 7% (decimal 0.07).
     */
    performanceGoalPercentageMicros?: string;
    /**
     * A key performance indicator (KPI) string, which can be empty. Must be UTF-8 encoded with a length of no more than 100 characters. Applicable when performance_goal_type is set to `PERFORMANCE_GOAL_TYPE_OTHER`.
     */
    performanceGoalString?: string;
    /**
     * Required. The type of the performance goal.
     */
    performanceGoalType?: PerformanceGoalPerformanceGoalTypeEnum;
}
