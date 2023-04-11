import { SpeakeasyBase } from "../../../internal/utils";
import { ArimaForecastingMetrics } from "./arimaforecastingmetrics";
import { BinaryClassificationMetrics } from "./binaryclassificationmetrics";
import { ClusteringMetrics } from "./clusteringmetrics";
import { DimensionalityReductionMetrics } from "./dimensionalityreductionmetrics";
import { MultiClassClassificationMetrics } from "./multiclassclassificationmetrics";
import { RankingMetrics } from "./rankingmetrics";
import { RegressionMetrics } from "./regressionmetrics";
/**
 * Evaluation metrics of a model. These are either computed on all training data or just the eval data based on whether eval data was used during training. These are not present for imported models.
 */
export declare class EvaluationMetrics extends SpeakeasyBase {
    /**
     * Model evaluation metrics for ARIMA forecasting models.
     */
    arimaForecastingMetrics?: ArimaForecastingMetrics;
    /**
     * Evaluation metrics for binary classification/classifier models.
     */
    binaryClassificationMetrics?: BinaryClassificationMetrics;
    /**
     * Evaluation metrics for clustering models.
     */
    clusteringMetrics?: ClusteringMetrics;
    /**
     * Model evaluation metrics for dimensionality reduction models.
     */
    dimensionalityReductionMetrics?: DimensionalityReductionMetrics;
    /**
     * Evaluation metrics for multi-class classification/classifier models.
     */
    multiClassClassificationMetrics?: MultiClassClassificationMetrics;
    /**
     * Evaluation metrics used by weighted-ALS models specified by feedback_type=implicit.
     */
    rankingMetrics?: RankingMetrics;
    /**
     * Evaluation metrics for regression and explicit feedback type matrix factorization models.
     */
    regressionMetrics?: RegressionMetrics;
}
