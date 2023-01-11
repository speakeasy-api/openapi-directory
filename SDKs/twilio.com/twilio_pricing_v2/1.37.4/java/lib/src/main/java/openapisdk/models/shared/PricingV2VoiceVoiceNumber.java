package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV2VoiceVoiceNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PricingV2VoiceVoiceNumber withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_number")
    public String destinationNumber;
    public PricingV2VoiceVoiceNumber withDestinationNumber(String destinationNumber) {
        this.destinationNumber = destinationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_call_price")
    public PricingV2VoiceVoiceNumberInboundCallPrice inboundCallPrice;
    public PricingV2VoiceVoiceNumber withInboundCallPrice(PricingV2VoiceVoiceNumberInboundCallPrice inboundCallPrice) {
        this.inboundCallPrice = inboundCallPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public PricingV2VoiceVoiceNumber withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origination_number")
    public String originationNumber;
    public PricingV2VoiceVoiceNumber withOriginationNumber(String originationNumber) {
        this.originationNumber = originationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_call_prices")
    public PricingV2VoiceVoiceNumberOutboundCallPrices[] outboundCallPrices;
    public PricingV2VoiceVoiceNumber withOutboundCallPrices(PricingV2VoiceVoiceNumberOutboundCallPrices[] outboundCallPrices) {
        this.outboundCallPrices = outboundCallPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public PricingV2VoiceVoiceNumber withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PricingV2VoiceVoiceNumber withUrl(String url) {
        this.url = url;
        return this;
    }
}