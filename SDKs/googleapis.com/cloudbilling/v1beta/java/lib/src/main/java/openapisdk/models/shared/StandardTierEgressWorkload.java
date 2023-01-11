package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StandardTierEgressWorkload
 * Specify Standard Tier Internet egress networking.
**/
public class StandardTierEgressWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("egressRate")
    public Usage egressRate;
    public StandardTierEgressWorkload withEgressRate(Usage egressRate) {
        this.egressRate = egressRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceRegion")
    public String sourceRegion;
    public StandardTierEgressWorkload withSourceRegion(String sourceRegion) {
        this.sourceRegion = sourceRegion;
        return this;
    }
}