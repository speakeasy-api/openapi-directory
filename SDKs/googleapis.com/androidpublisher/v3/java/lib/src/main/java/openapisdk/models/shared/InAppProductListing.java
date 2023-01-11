package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InAppProductListing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("benefits")
    public String[] benefits;
    public InAppProductListing withBenefits(String[] benefits) {
        this.benefits = benefits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public InAppProductListing withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public InAppProductListing withTitle(String title) {
        this.title = title;
        return this;
    }
}