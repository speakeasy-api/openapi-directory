package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InAppProductListing
 * The language of the localized data, as defined by BCP 47. i.e.: "en-US", "en-GB".
**/
public class InAppProductListing {
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