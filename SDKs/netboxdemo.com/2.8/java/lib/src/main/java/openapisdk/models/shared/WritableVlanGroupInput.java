package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WritableVlanGroupInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public WritableVlanGroupInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public WritableVlanGroupInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public Long site;
    public WritableVlanGroupInput withSite(Long site) {
        this.site = site;
        return this;
    }
    @JsonProperty("slug")
    public String slug;
    public WritableVlanGroupInput withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}