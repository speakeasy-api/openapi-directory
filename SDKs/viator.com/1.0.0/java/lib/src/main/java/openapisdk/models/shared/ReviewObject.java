package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReviewObject
 * **object** containing a single user review
**/
public class ReviewObject {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerAvatarURL")
    public String ownerAvatarURL;
    public ReviewObject withOwnerAvatarUrl(String ownerAvatarURL) {
        this.ownerAvatarURL = ownerAvatarURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerCountry")
    public String ownerCountry;
    public ReviewObject withOwnerCountry(String ownerCountry) {
        this.ownerCountry = ownerCountry;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerId")
    public Long ownerId;
    public ReviewObject withOwnerId(Long ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownerName")
    public String ownerName;
    public ReviewObject withOwnerName(String ownerName) {
        this.ownerName = ownerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productCode")
    public String productCode;
    public ReviewObject withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productTitle")
    public String productTitle;
    public ReviewObject withProductTitle(String productTitle) {
        this.productTitle = productTitle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("productUrlName")
    public String productUrlName;
    public ReviewObject withProductUrlName(String productUrlName) {
        this.productUrlName = productUrlName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishedDate")
    public String publishedDate;
    public ReviewObject withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public Long rating;
    public ReviewObject withRating(Long rating) {
        this.rating = rating;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("review")
    public String review;
    public ReviewObject withReview(String review) {
        this.review = review;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewId")
    public Long reviewId;
    public ReviewObject withReviewId(Long reviewId) {
        this.reviewId = reviewId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sortOrder")
    public Long sortOrder;
    public ReviewObject withSortOrder(Long sortOrder) {
        this.sortOrder = sortOrder;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sslSupported")
    public Boolean sslSupported;
    public ReviewObject withSslSupported(Boolean sslSupported) {
        this.sslSupported = sslSupported;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submissionDate")
    public String submissionDate;
    public ReviewObject withSubmissionDate(String submissionDate) {
        this.submissionDate = submissionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viatorFeedback")
    public String viatorFeedback;
    public ReviewObject withViatorFeedback(String viatorFeedback) {
        this.viatorFeedback = viatorFeedback;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viatorNotes")
    public String viatorNotes;
    public ReviewObject withViatorNotes(String viatorNotes) {
        this.viatorNotes = viatorNotes;
        return this;
    }
}