package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VlanGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public VlanGroup withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public VlanGroup withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public VlanGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public NestedSite site;
    public VlanGroup withSite(NestedSite site) {
        this.site = site;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public VlanGroup withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan_count")
    public Long vlanCount;
    public VlanGroup withVlanCount(Long vlanCount) {
        this.vlanCount = vlanCount;
        return this;
    }
}