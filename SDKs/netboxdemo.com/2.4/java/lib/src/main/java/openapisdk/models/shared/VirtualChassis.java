package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VirtualChassis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domain")
    public String domain;
    public VirtualChassis withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public VirtualChassis withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("master")
    public NestedDevice master;
    public VirtualChassis withMaster(NestedDevice master) {
        this.master = master;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public String[] tags;
    public VirtualChassis withTags(String[] tags) {
        this.tags = tags;
        return this;
    }
}