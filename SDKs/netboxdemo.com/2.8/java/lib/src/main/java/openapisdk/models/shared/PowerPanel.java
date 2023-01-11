package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PowerPanel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public PowerPanel withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PowerPanel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("powerfeed_count")
    public Long powerfeedCount;
    public PowerPanel withPowerfeedCount(Long powerfeedCount) {
        this.powerfeedCount = powerfeedCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rack_group")
    public NestedRackGroup rackGroup;
    public PowerPanel withRackGroup(NestedRackGroup rackGroup) {
        this.rackGroup = rackGroup;
        return this;
    }
    @JsonProperty("site")
    public NestedSite site;
    public PowerPanel withSite(NestedSite site) {
        this.site = site;
        return this;
    }
}