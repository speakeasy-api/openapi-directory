package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClusterGroupInput {
    @JsonProperty("name")
    public String name;
    public ClusterGroupInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public ClusterGroupInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}