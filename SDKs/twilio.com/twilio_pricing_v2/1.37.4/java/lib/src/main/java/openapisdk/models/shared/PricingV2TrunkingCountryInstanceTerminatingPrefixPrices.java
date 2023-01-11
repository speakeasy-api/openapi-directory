package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PricingV2TrunkingCountryInstanceTerminatingPrefixPrices {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("base_price")
    public Double basePrice;
    public PricingV2TrunkingCountryInstanceTerminatingPrefixPrices withBasePrice(Double basePrice) {
        this.basePrice = basePrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_price")
    public Double currentPrice;
    public PricingV2TrunkingCountryInstanceTerminatingPrefixPrices withCurrentPrice(Double currentPrice) {
        this.currentPrice = currentPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination_prefixes")
    public String[] destinationPrefixes;
    public PricingV2TrunkingCountryInstanceTerminatingPrefixPrices withDestinationPrefixes(String[] destinationPrefixes) {
        this.destinationPrefixes = destinationPrefixes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("friendly_name")
    public String friendlyName;
    public PricingV2TrunkingCountryInstanceTerminatingPrefixPrices withFriendlyName(String friendlyName) {
        this.friendlyName = friendlyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("origination_prefixes")
    public String[] originationPrefixes;
    public PricingV2TrunkingCountryInstanceTerminatingPrefixPrices withOriginationPrefixes(String[] originationPrefixes) {
        this.originationPrefixes = originationPrefixes;
        return this;
    }
}