package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SlugResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productName")
    public String productName;
    public SlugResponse withProductName(String productName) {
        this.productName = productName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slug")
    public String slug;
    public SlugResponse withSlug(String slug) {
        this.slug = slug;
        return this;
    }
}