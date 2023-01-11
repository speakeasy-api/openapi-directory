package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewSource
 * Information regarding the source of this review, when the review is not from a Google Books user.
**/
public class ReviewSource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ReviewSource withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("extraDescription")
    public String extraDescription;
    public ReviewSource withExtraDescription(String extraDescription) {
        this.extraDescription = extraDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ReviewSource withUrl(String url) {
        this.url = url;
        return this;
    }
}