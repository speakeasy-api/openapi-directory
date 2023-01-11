package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV2VoiceVoiceCountryInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PricingV2VoiceVoiceCountryInstance withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inbound_call_prices")
    public PricingV2VoiceVoiceCountryInstanceInboundCallPrices[] inboundCallPrices;
    public PricingV2VoiceVoiceCountryInstance withInboundCallPrices(PricingV2VoiceVoiceCountryInstanceInboundCallPrices[] inboundCallPrices) {
        this.inboundCallPrices = inboundCallPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public PricingV2VoiceVoiceCountryInstance withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outbound_prefix_prices")
    public PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices[] outboundPrefixPrices;
    public PricingV2VoiceVoiceCountryInstance withOutboundPrefixPrices(PricingV2VoiceVoiceCountryInstanceOutboundPrefixPrices[] outboundPrefixPrices) {
        this.outboundPrefixPrices = outboundPrefixPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public PricingV2VoiceVoiceCountryInstance withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PricingV2VoiceVoiceCountryInstance withUrl(String url) {
        this.url = url;
        return this;
    }
}