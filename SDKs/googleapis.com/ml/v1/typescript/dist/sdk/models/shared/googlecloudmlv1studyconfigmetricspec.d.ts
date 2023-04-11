import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The optimization goal of the metric.
 */
export declare enum GoogleCloudMlV1StudyConfigMetricSpecGoalEnum {
    GoalTypeUnspecified = "GOAL_TYPE_UNSPECIFIED",
    Maximize = "MAXIMIZE",
    Minimize = "MINIMIZE"
}
/**
 * Represents a metric to optimize.
 */
export declare class GoogleCloudMlV1StudyConfigMetricSpec extends SpeakeasyBase {
    /**
     * Required. The optimization goal of the metric.
     */
    goal?: GoogleCloudMlV1StudyConfigMetricSpecGoalEnum;
    /**
     * Required. The name of the metric.
     */
    metric?: string;
}
