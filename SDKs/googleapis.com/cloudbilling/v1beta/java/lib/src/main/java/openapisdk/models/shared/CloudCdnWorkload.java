package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudCdnWorkload
 * Specifies usage for Cloud CDN resources.
**/
public class CloudCdnWorkload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheFillOriginService")
    public CloudCdnWorkloadCacheFillOriginServiceEnum cacheFillOriginService;
    public CloudCdnWorkload withCacheFillOriginService(CloudCdnWorkloadCacheFillOriginServiceEnum cacheFillOriginService) {
        this.cacheFillOriginService = cacheFillOriginService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheFillRate")
    public Usage cacheFillRate;
    public CloudCdnWorkload withCacheFillRate(Usage cacheFillRate) {
        this.cacheFillRate = cacheFillRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheFillRegions")
    public CacheFillRegions cacheFillRegions;
    public CloudCdnWorkload withCacheFillRegions(CacheFillRegions cacheFillRegions) {
        this.cacheFillRegions = cacheFillRegions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cacheLookUpRate")
    public Usage cacheLookUpRate;
    public CloudCdnWorkload withCacheLookUpRate(Usage cacheLookUpRate) {
        this.cacheLookUpRate = cacheLookUpRate;
        return this;
    }
}