package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV2VoiceVoiceNumberOutboundCallPrices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base_price")
    public Double basePrice;
    public PricingV2VoiceVoiceNumberOutboundCallPrices withBasePrice(Double basePrice) {
        this.basePrice = basePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_price")
    public Double currentPrice;
    public PricingV2VoiceVoiceNumberOutboundCallPrices withCurrentPrice(Double currentPrice) {
        this.currentPrice = currentPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origination_prefixes")
    public String[] originationPrefixes;
    public PricingV2VoiceVoiceNumberOutboundCallPrices withOriginationPrefixes(String[] originationPrefixes) {
        this.originationPrefixes = originationPrefixes;
        return this;
    }
}