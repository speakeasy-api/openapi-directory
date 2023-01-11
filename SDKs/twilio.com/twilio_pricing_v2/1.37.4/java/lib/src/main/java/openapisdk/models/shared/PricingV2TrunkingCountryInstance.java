package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV2TrunkingCountryInstance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PricingV2TrunkingCountryInstance withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public PricingV2TrunkingCountryInstance withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originating_call_prices")
    public PricingV2TrunkingCountryInstanceOriginatingCallPrices[] originatingCallPrices;
    public PricingV2TrunkingCountryInstance withOriginatingCallPrices(PricingV2TrunkingCountryInstanceOriginatingCallPrices[] originatingCallPrices) {
        this.originatingCallPrices = originatingCallPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public PricingV2TrunkingCountryInstance withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminating_prefix_prices")
    public PricingV2TrunkingCountryInstanceTerminatingPrefixPrices[] terminatingPrefixPrices;
    public PricingV2TrunkingCountryInstance withTerminatingPrefixPrices(PricingV2TrunkingCountryInstanceTerminatingPrefixPrices[] terminatingPrefixPrices) {
        this.terminatingPrefixPrices = terminatingPrefixPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PricingV2TrunkingCountryInstance withUrl(String url) {
        this.url = url;
        return this;
    }
}