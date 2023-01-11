package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RirInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_private")
    public Boolean isPrivate;
    public RirInput withIsPrivate(Boolean isPrivate) {
        this.isPrivate = isPrivate;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public RirInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public RirInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}