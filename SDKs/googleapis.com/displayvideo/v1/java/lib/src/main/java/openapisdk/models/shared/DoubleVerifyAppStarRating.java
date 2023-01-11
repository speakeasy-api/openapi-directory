package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DoubleVerifyAppStarRating
 * Details of DoubleVerify star ratings settings.
**/
public class DoubleVerifyAppStarRating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidInsufficientStarRating")
    public Boolean avoidInsufficientStarRating;
    public DoubleVerifyAppStarRating withAvoidInsufficientStarRating(Boolean avoidInsufficientStarRating) {
        this.avoidInsufficientStarRating = avoidInsufficientStarRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("avoidedStarRating")
    public DoubleVerifyAppStarRatingAvoidedStarRatingEnum avoidedStarRating;
    public DoubleVerifyAppStarRating withAvoidedStarRating(DoubleVerifyAppStarRatingAvoidedStarRatingEnum avoidedStarRating) {
        this.avoidedStarRating = avoidedStarRating;
        return this;
    }
}