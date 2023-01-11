package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedVirtualChassis {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedVirtualChassis withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("master")
    public NestedDevice master;
    public NestedVirtualChassis withMaster(NestedDevice master) {
        this.master = master;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member_count")
    public Long memberCount;
    public NestedVirtualChassis withMemberCount(Long memberCount) {
        this.memberCount = memberCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedVirtualChassis withUrl(String url) {
        this.url = url;
        return this;
    }
}