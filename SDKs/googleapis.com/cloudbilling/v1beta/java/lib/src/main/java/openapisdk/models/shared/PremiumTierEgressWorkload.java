package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PremiumTierEgressWorkload
 * Specify Premium Tier Internet egress networking.
**/
public class PremiumTierEgressWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationContinent")
    public PremiumTierEgressWorkloadDestinationContinentEnum destinationContinent;
    public PremiumTierEgressWorkload withDestinationContinent(PremiumTierEgressWorkloadDestinationContinentEnum destinationContinent) {
        this.destinationContinent = destinationContinent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressRate")
    public Usage egressRate;
    public PremiumTierEgressWorkload withEgressRate(Usage egressRate) {
        this.egressRate = egressRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceRegion")
    public String sourceRegion;
    public PremiumTierEgressWorkload withSourceRegion(String sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
}