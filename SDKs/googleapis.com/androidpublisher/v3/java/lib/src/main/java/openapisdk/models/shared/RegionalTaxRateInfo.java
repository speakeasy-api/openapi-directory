package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RegionalTaxRateInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligibleForStreamingServiceTaxRate")
    public Boolean eligibleForStreamingServiceTaxRate;
    public RegionalTaxRateInfo withEligibleForStreamingServiceTaxRate(Boolean eligibleForStreamingServiceTaxRate) {
        this.eligibleForStreamingServiceTaxRate = eligibleForStreamingServiceTaxRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamingTaxType")
    public RegionalTaxRateInfoStreamingTaxTypeEnum streamingTaxType;
    public RegionalTaxRateInfo withStreamingTaxType(RegionalTaxRateInfoStreamingTaxTypeEnum streamingTaxType) {
        this.streamingTaxType = streamingTaxType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxTier")
    public RegionalTaxRateInfoTaxTierEnum taxTier;
    public RegionalTaxRateInfo withTaxTier(RegionalTaxRateInfoTaxTierEnum taxTier) {
        this.taxTier = taxTier;
        return this;
    }
}