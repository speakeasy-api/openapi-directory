package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableVirtualChassisInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public WritableVirtualChassisInput withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonProperty("master")
    public Long master;
    public WritableVirtualChassisInput withMaster(Long master) {
        this.master = master;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public WritableVirtualChassisInput withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}