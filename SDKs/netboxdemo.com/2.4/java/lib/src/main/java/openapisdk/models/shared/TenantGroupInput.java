package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TenantGroupInput {
    @JsonProperty("name")
    public String name;
    public TenantGroupInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public TenantGroupInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}