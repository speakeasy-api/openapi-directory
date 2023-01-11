package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Tier
 * A Google Cloud SQL service tier resource.
**/
public class Tier {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DiskQuota")
    public String diskQuota;
    public Tier withDiskQuota(String diskQuota) {
        this.diskQuota = diskQuota;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RAM")
    public String ram;
    public Tier withRam(String ram) {
        this.ram = ram;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kind")
    public String kind;
    public Tier withKind(String kind) {
        this.kind = kind;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public String[] region;
    public Tier withRegion(String[] region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier")
    public String tier;
    public Tier withTier(String tier) {
        this.tier = tier;
        return this;
    }
}