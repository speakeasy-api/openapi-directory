package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse
 * Response from listing `ClaimReview` markup.
**/
public class GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("claimReviewMarkupPages")
    public GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage[] claimReviewMarkupPages;
    public GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse withClaimReviewMarkupPages(GoogleFactcheckingFactchecktoolsV1alpha1ClaimReviewMarkupPage[] claimReviewMarkupPages) {
        this.claimReviewMarkupPages = claimReviewMarkupPages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GoogleFactcheckingFactchecktoolsV1alpha1ListClaimReviewMarkupPagesResponse withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}