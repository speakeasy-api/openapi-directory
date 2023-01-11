package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CircuitTypeInput {
    @JsonProperty("name")
    public String name;
    public CircuitTypeInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public CircuitTypeInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}