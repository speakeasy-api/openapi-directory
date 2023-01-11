package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ManufacturerInput {
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