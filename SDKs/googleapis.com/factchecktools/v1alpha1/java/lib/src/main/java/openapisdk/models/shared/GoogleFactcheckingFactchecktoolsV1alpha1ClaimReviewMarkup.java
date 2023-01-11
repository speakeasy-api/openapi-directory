package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup
 * Fields for an individual `ClaimReview` element. Except for sub-messages that group fields together, each of these fields correspond those in https://schema.org/ClaimReview. We list the precise mapping for each field.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimAppearances")
    public String[] claimAppearances;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup withClaimAppearances(String[] claimAppearances) {
        this.claimAppearances = claimAppearances;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimAuthor")
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor claimAuthor;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup withClaimAuthor(GoogleFactcheckingFactchecktoolsV1alpha1ClaimAuthor claimAuthor) {
        this.claimAuthor = claimAuthor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimDate")
    public String claimDate;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup withClaimDate(String claimDate) {
        this.claimDate = claimDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimFirstAppearance")
    public String claimFirstAppearance;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup withClaimFirstAppearance(String claimFirstAppearance) {
        this.claimFirstAppearance = claimFirstAppearance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimLocation")
    public String claimLocation;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup withClaimLocation(String claimLocation) {
        this.claimLocation = claimLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimReviewed")
    public String claimReviewed;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup withClaimReviewed(String claimReviewed) {
        this.claimReviewed = claimReviewed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating rating;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup withRating(GoogleFactcheckingFactchecktoolsV1alpha1ClaimRating rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup withUrl(String url) {
        this.url = url;
        return this;
    }
}