package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BillingRateTieredRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highValue")
    public String highValue;
    public BillingRateTieredRate withHighValue(String highValue) {
        this.highValue = highValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lowValue")
    public String lowValue;
    public BillingRateTieredRate withLowValue(String lowValue) {
        this.lowValue = lowValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rateInMicros")
    public String rateInMicros;
    public BillingRateTieredRate withRateInMicros(String rateInMicros) {
        this.rateInMicros = rateInMicros;
        return this;
    }
}