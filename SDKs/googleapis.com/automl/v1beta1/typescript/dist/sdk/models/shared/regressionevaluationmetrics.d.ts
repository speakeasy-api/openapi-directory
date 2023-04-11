import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metrics for regression problems.
 */
export declare class RegressionEvaluationMetrics extends SpeakeasyBase {
    /**
     * Output only. Mean Absolute Error (MAE).
     */
    meanAbsoluteError?: number;
    /**
     * Output only. Mean absolute percentage error. Only set if all ground truth values are are positive.
     */
    meanAbsolutePercentageError?: number;
    /**
     * Output only. R squared.
     */
    rSquared?: number;
    /**
     * Output only. Root Mean Squared Error (RMSE).
     */
    rootMeanSquaredError?: number;
    /**
     * Output only. Root mean squared log error.
     */
    rootMeanSquaredLogError?: number;
}
