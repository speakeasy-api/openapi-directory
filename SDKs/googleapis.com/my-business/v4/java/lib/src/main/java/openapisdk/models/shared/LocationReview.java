package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LocationReview
 * Represents a review with location information.
**/
public class LocationReview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public LocationReview withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review")
    public Review review;
    public LocationReview withReview(Review review) {
        this.review = review;
        return this;
    }
}