package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SearchEngineOptimization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metaDescription")
    public String metaDescription;
    public SearchEngineOptimization withMetaDescription(String metaDescription) {
        this.metaDescription = metaDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public SearchEngineOptimization withSlug(String slug) {
        this.slug = slug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public SearchEngineOptimization withTitle(String title) {
        this.title = title;
        return this;
    }
}