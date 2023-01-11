package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewAuthor
 * Author of this review.
**/
public class ReviewAuthor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public ReviewAuthor withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
}