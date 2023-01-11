package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PricingV1VoiceVoiceNumberOutboundCallPrice
 * The OutboundCallPrice record
**/
public class PricingV1VoiceVoiceNumberOutboundCallPrice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base_price")
    public Double basePrice;
    public PricingV1VoiceVoiceNumberOutboundCallPrice withBasePrice(Double basePrice) {
        this.basePrice = basePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_price")
    public Double currentPrice;
    public PricingV1VoiceVoiceNumberOutboundCallPrice withCurrentPrice(Double currentPrice) {
        this.currentPrice = currentPrice;
        return this;
    }
}