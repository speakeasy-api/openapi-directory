package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV1VoiceVoiceCountryInstanceInboundCallPrices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base_price")
    public Double basePrice;
    public PricingV1VoiceVoiceCountryInstanceInboundCallPrices withBasePrice(Double basePrice) {
        this.basePrice = basePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_price")
    public Double currentPrice;
    public PricingV1VoiceVoiceCountryInstanceInboundCallPrices withCurrentPrice(Double currentPrice) {
        this.currentPrice = currentPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number_type")
    public String numberType;
    public PricingV1VoiceVoiceCountryInstanceInboundCallPrices withNumberType(String numberType) {
        this.numberType = numberType;
        return this;
    }
}