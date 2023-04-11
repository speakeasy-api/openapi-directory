import { SpeakeasyBase } from "../../../internal/utils";
import { ArimaFittingMetrics } from "./arimafittingmetrics";
import { ArimaOrder } from "./arimaorder";
import { ArimaSingleModelForecastingMetrics } from "./arimasinglemodelforecastingmetrics";
export declare enum ArimaForecastingMetricsSeasonalPeriodsEnum {
    SeasonalPeriodTypeUnspecified = "SEASONAL_PERIOD_TYPE_UNSPECIFIED",
    NoSeasonality = "NO_SEASONALITY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}
/**
 * Model evaluation metrics for ARIMA forecasting models.
 */
export declare class ArimaForecastingMetrics extends SpeakeasyBase {
    /**
     * Arima model fitting metrics.
     */
    arimaFittingMetrics?: ArimaFittingMetrics[];
    /**
     * Repeated as there can be many metric sets (one for each model) in auto-arima and the large-scale case.
     */
    arimaSingleModelForecastingMetrics?: ArimaSingleModelForecastingMetrics[];
    /**
     * Whether Arima model fitted with drift or not. It is always false when d is not 1.
     */
    hasDrift?: boolean[];
    /**
     * Non-seasonal order.
     */
    nonSeasonalOrder?: ArimaOrder[];
    /**
     * Seasonal periods. Repeated because multiple periods are supported for one time series.
     */
    seasonalPeriods?: ArimaForecastingMetricsSeasonalPeriodsEnum[];
    /**
     * Id to differentiate different time series for the large-scale case.
     */
    timeSeriesId?: string[];
}
