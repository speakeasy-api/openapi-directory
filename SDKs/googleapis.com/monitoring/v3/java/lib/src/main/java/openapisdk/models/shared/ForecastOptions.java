package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ForecastOptions
 * Options used when forecasting the time series and testing the predicted value against the threshold.
**/
public class ForecastOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forecastHorizon")
    public String forecastHorizon;
    public ForecastOptions withForecastHorizon(String forecastHorizon) {
        this.forecastHorizon = forecastHorizon;
        return this;
    }
}