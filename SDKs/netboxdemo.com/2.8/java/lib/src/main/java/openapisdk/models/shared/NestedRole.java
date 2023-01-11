package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedRole {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedRole withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedRole withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix_count")
    public Long prefixCount;
    public NestedRole withPrefixCount(Long prefixCount) {
        this.prefixCount = prefixCount;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public NestedRole withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedRole withUrl(String url) {
        this.url = url;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vlan_count")
    public Long vlanCount;
    public NestedRole withVlanCount(Long vlanCount) {
        this.vlanCount = vlanCount;
        return this;
    }
}