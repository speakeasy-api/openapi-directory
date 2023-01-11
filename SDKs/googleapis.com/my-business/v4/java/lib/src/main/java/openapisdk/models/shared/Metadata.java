package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metadata
 * Additional non-user-editable information about the location.
**/
public class Metadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("duplicate")
    public Duplicate duplicate;
    public Metadata withDuplicate(Duplicate duplicate) {
        this.duplicate = duplicate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mapsUrl")
    public String mapsUrl;
    public Metadata withMapsUrl(String mapsUrl) {
        this.mapsUrl = mapsUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newReviewUrl")
    public String newReviewUrl;
    public Metadata withNewReviewUrl(String newReviewUrl) {
        this.newReviewUrl = newReviewUrl;
        return this;
    }
}