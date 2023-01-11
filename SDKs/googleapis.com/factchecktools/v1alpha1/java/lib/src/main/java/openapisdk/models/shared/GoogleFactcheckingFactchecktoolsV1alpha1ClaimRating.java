package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating
 * Information about the claim rating.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bestRating")
    public Integer bestRating;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating withBestRating(Integer bestRating) {
        this.bestRating = bestRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("imageUrl")
    public String imageUrl;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating withImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingExplanation")
    public String ratingExplanation;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating withRatingExplanation(String ratingExplanation) {
        this.ratingExplanation = ratingExplanation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ratingValue")
    public Integer ratingValue;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating withRatingValue(Integer ratingValue) {
        this.ratingValue = ratingValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textualRating")
    public String textualRating;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating withTextualRating(String textualRating) {
        this.textualRating = textualRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("worstRating")
    public Integer worstRating;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating withWorstRating(Integer worstRating) {
        this.worstRating = worstRating;
        return this;
    }
}