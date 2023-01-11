package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview
 * Information about a claim review.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languageCode")
    public String languageCode;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview withLanguageCode(String languageCode) {
        this.languageCode = languageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publisher")
    public GoogleFactcheckingFactchecktoolsV1alpha1Publisher publisher;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview withPublisher(GoogleFactcheckingFactchecktoolsV1alpha1Publisher publisher) {
        this.publisher = publisher;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewDate")
    public String reviewDate;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview withReviewDate(String reviewDate) {
        this.reviewDate = reviewDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("textualRating")
    public String textualRating;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview withTextualRating(String textualRating) {
        this.textualRating = textualRating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReview withUrl(String url) {
        this.url = url;
        return this;
    }
}