import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Evaluation metrics for regression and explicit feedback type matrix factorization models.
 */
export declare class RegressionMetrics extends SpeakeasyBase {
    /**
     * Mean absolute error.
     */
    meanAbsoluteError?: number;
    /**
     * Mean squared error.
     */
    meanSquaredError?: number;
    /**
     * Mean squared log error.
     */
    meanSquaredLogError?: number;
    /**
     * Median absolute error.
     */
    medianAbsoluteError?: number;
    /**
     * R^2 score. This corresponds to r2_score in ML.EVALUATE.
     */
    rSquared?: number;
}
