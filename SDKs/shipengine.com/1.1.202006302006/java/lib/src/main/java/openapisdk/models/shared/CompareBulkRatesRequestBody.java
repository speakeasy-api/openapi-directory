package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CompareBulkRatesRequestBody
 * A rate shipments request body
**/
public class CompareBulkRatesRequestBody {
    @JsonProperty("rate_options")
    public RateRequestBody rateOptions;
    public CompareBulkRatesRequestBody withRateOptions(RateRequestBody rateOptions) {
        this.rateOptions = rateOptions;
        return this;
    }
}