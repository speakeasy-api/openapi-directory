import { SpeakeasyBase } from "../../../internal/utils";
import { ArimaFittingMetrics } from "./arimafittingmetrics";
import { ArimaOrder } from "./arimaorder";
export declare enum ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum {
    SeasonalPeriodTypeUnspecified = "SEASONAL_PERIOD_TYPE_UNSPECIFIED",
    NoSeasonality = "NO_SEASONALITY",
    Daily = "DAILY",
    Weekly = "WEEKLY",
    Monthly = "MONTHLY",
    Quarterly = "QUARTERLY",
    Yearly = "YEARLY"
}
/**
 * Model evaluation metrics for a single ARIMA forecasting model.
 */
export declare class ArimaSingleModelForecastingMetrics extends SpeakeasyBase {
    /**
     * ARIMA model fitting metrics.
     */
    arimaFittingMetrics?: ArimaFittingMetrics;
    /**
     * Is arima model fitted with drift or not. It is always false when d is not 1.
     */
    hasDrift?: boolean;
    /**
     * If true, holiday_effect is a part of time series decomposition result.
     */
    hasHolidayEffect?: boolean;
    /**
     * If true, spikes_and_dips is a part of time series decomposition result.
     */
    hasSpikesAndDips?: boolean;
    /**
     * If true, step_changes is a part of time series decomposition result.
     */
    hasStepChanges?: boolean;
    /**
     * Arima order, can be used for both non-seasonal and seasonal parts.
     */
    nonSeasonalOrder?: ArimaOrder;
    /**
     * Seasonal periods. Repeated because multiple periods are supported for one time series.
     */
    seasonalPeriods?: ArimaSingleModelForecastingMetricsSeasonalPeriodsEnum[];
    /**
     * The time_series_id value for this time series. It will be one of the unique values from the time_series_id_column specified during ARIMA model training. Only present when time_series_id_column training option was used.
     */
    timeSeriesId?: string;
    /**
     * The tuple of time_series_ids identifying this time series. It will be one of the unique tuples of values present in the time_series_id_columns specified during ARIMA model training. Only present when time_series_id_columns training option was used and the order of values here are same as the order of time_series_id_columns.
     */
    timeSeriesIds?: string[];
}
