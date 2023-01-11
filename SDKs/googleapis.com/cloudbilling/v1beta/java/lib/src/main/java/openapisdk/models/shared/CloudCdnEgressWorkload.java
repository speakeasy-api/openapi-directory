package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudCdnEgressWorkload
 * Specifies usage for Cloud CDN egress.
**/
public class CloudCdnEgressWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheEgressDestination")
    public CloudCdnEgressWorkloadCacheEgressDestinationEnum cacheEgressDestination;
    public CloudCdnEgressWorkload withCacheEgressDestination(CloudCdnEgressWorkloadCacheEgressDestinationEnum cacheEgressDestination) {
        this.cacheEgressDestination = cacheEgressDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheEgressRate")
    public Usage cacheEgressRate;
    public CloudCdnEgressWorkload withCacheEgressRate(Usage cacheEgressRate) {
        this.cacheEgressRate = cacheEgressRate;
        return this;
    }
}