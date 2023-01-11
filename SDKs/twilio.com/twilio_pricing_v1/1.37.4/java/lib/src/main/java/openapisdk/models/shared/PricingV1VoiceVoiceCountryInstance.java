package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV1VoiceVoiceCountryInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PricingV1VoiceVoiceCountryInstance withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_call_prices")
    public PricingV1VoiceVoiceCountryInstanceInboundCallPrices[] inboundCallPrices;
    public PricingV1VoiceVoiceCountryInstance withInboundCallPrices(PricingV1VoiceVoiceCountryInstanceInboundCallPrices[] inboundCallPrices) {
        this.inboundCallPrices = inboundCallPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public PricingV1VoiceVoiceCountryInstance withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_prefix_prices")
    public PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices[] outboundPrefixPrices;
    public PricingV1VoiceVoiceCountryInstance withOutboundPrefixPrices(PricingV1VoiceVoiceCountryInstanceOutboundPrefixPrices[] outboundPrefixPrices) {
        this.outboundPrefixPrices = outboundPrefixPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public PricingV1VoiceVoiceCountryInstance withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PricingV1VoiceVoiceCountryInstance withUrl(String url) {
        this.url = url;
        return this;
    }
}