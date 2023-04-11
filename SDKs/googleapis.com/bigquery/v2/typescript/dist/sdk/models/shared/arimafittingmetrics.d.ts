import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ARIMA model fitting metrics.
 */
export declare class ArimaFittingMetrics extends SpeakeasyBase {
    /**
     * AIC.
     */
    aic?: number;
    /**
     * Log-likelihood.
     */
    logLikelihood?: number;
    /**
     * Variance.
     */
    variance?: number;
}
