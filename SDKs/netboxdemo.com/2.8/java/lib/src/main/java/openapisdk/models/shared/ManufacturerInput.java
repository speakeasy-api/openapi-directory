package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ManufacturerInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ManufacturerInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ManufacturerInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public ManufacturerInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}