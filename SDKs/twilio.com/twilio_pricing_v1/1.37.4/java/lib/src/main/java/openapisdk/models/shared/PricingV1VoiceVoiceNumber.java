package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV1VoiceVoiceNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PricingV1VoiceVoiceNumber withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_call_price")
    public PricingV1VoiceVoiceNumberInboundCallPrice inboundCallPrice;
    public PricingV1VoiceVoiceNumber withInboundCallPrice(PricingV1VoiceVoiceNumberInboundCallPrice inboundCallPrice) {
        this.inboundCallPrice = inboundCallPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public PricingV1VoiceVoiceNumber withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("number")
    public String number;
    public PricingV1VoiceVoiceNumber withNumber(String number) {
        this.number = number;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_call_price")
    public PricingV1VoiceVoiceNumberOutboundCallPrice outboundCallPrice;
    public PricingV1VoiceVoiceNumber withOutboundCallPrice(PricingV1VoiceVoiceNumberOutboundCallPrice outboundCallPrice) {
        this.outboundCallPrice = outboundCallPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public PricingV1VoiceVoiceNumber withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PricingV1VoiceVoiceNumber withUrl(String url) {
        this.url = url;
        return this;
    }
}