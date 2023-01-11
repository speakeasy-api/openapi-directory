package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage
 * Holds one or more instances of `ClaimReview` markup for a webpage.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimReviewAuthor")
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor claimReviewAuthor;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage withClaimReviewAuthor(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewAuthor claimReviewAuthor) {
        this.claimReviewAuthor = claimReviewAuthor;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimReviewMarkups")
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[] claimReviewMarkups;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage withClaimReviewMarkups(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkup[] claimReviewMarkups) {
        this.claimReviewMarkups = claimReviewMarkups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageUrl")
    public String pageUrl;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage withPageUrl(String pageUrl) {
        this.pageUrl = pageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("publishDate")
    public String publishDate;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage withPublishDate(String publishDate) {
        this.publishDate = publishDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionId")
    public String versionId;
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}