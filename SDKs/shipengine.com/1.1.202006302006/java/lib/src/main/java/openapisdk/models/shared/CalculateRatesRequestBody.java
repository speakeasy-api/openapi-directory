package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CalculateRatesRequestBody
 * A rate shipment request body
**/
public class CalculateRatesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rate_options")
    public RateRequestBody rateOptions;
    public CalculateRatesRequestBody withRateOptions(RateRequestBody rateOptions) {
        this.rateOptions = rateOptions;
        return this;
    }
}