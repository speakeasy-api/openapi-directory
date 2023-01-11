package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClusterGroup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster_count")
    public Long clusterCount;
    public ClusterGroup withClusterCount(Long clusterCount) {
        this.clusterCount = clusterCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ClusterGroup withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ClusterGroup withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ClusterGroup withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public ClusterGroup withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}