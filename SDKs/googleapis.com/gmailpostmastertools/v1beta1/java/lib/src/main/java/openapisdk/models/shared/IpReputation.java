package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IpReputation
 * IP Reputation information for a set of IPs in a specific reputation category.
**/
public class IpReputation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipCount")
    public String ipCount;
    public IpReputation withIpCount(String ipCount) {
        this.ipCount = ipCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numIps")
    public String numIps;
    public IpReputation withNumIps(String numIps) {
        this.numIps = numIps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reputation")
    public IpReputationReputationEnum reputation;
    public IpReputation withReputation(IpReputationReputationEnum reputation) {
        this.reputation = reputation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sampleIps")
    public String[] sampleIps;
    public IpReputation withSampleIps(String[] sampleIps) {
        this.sampleIps = sampleIps;
        return this;
    }
}