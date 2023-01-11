package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TagInput {
    @JsonProperty("name")
    public String name;
    public TagInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public TagInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}