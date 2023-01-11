package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV2TrunkingNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("country")
    public String country;
    public PricingV2TrunkingNumber withCountry(String country) {
        this.country = country;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_number")
    public String destinationNumber;
    public PricingV2TrunkingNumber withDestinationNumber(String destinationNumber) {
        this.destinationNumber = destinationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iso_country")
    public String isoCountry;
    public PricingV2TrunkingNumber withIsoCountry(String isoCountry) {
        this.isoCountry = isoCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originating_call_price")
    public PricingV2TrunkingNumberOriginatingCallPrice originatingCallPrice;
    public PricingV2TrunkingNumber withOriginatingCallPrice(PricingV2TrunkingNumberOriginatingCallPrice originatingCallPrice) {
        this.originatingCallPrice = originatingCallPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origination_number")
    public String originationNumber;
    public PricingV2TrunkingNumber withOriginationNumber(String originationNumber) {
        this.originationNumber = originationNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price_unit")
    public String priceUnit;
    public PricingV2TrunkingNumber withPriceUnit(String priceUnit) {
        this.priceUnit = priceUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("terminating_prefix_prices")
    public PricingV2TrunkingNumberTerminatingPrefixPrices[] terminatingPrefixPrices;
    public PricingV2TrunkingNumber withTerminatingPrefixPrices(PricingV2TrunkingNumberTerminatingPrefixPrices[] terminatingPrefixPrices) {
        this.terminatingPrefixPrices = terminatingPrefixPrices;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public PricingV2TrunkingNumber withUrl(String url) {
        this.url = url;
        return this;
    }
}