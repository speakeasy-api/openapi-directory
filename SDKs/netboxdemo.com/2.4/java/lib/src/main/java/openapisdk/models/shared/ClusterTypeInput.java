package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ClusterTypeInput {
    @JsonProperty("name")
    public String name;
    public ClusterTypeInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public ClusterTypeInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}