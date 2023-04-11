import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options used when forecasting the time series and testing the predicted value against the threshold.
 */
export declare class ForecastOptions extends SpeakeasyBase {
    /**
     * Required. The length of time into the future to forecast whether a time series will violate the threshold. If the predicted value is found to violate the threshold, and the violation is observed in all forecasts made for the configured duration, then the time series is considered to be failing.
     */
    forecastHorizon?: string;
}
