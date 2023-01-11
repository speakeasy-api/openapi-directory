package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class NestedClusterGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster_count")
    public Long clusterCount;
    public NestedClusterGroup withClusterCount(Long clusterCount) {
        this.clusterCount = clusterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public NestedClusterGroup withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public NestedClusterGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public NestedClusterGroup withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public NestedClusterGroup withUrl(String url) {
        this.url = url;
        return this;
    }
}