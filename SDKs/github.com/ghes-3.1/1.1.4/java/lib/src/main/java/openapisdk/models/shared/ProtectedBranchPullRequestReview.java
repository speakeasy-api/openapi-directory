package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProtectedBranchPullRequestReview
 * Protected Branch Pull Request Review
**/
public class ProtectedBranchPullRequestReview {
    @JsonProperty("dismiss_stale_reviews")
    public Boolean dismissStaleReviews;
    public ProtectedBranchPullRequestReview withDismissStaleReviews(Boolean dismissStaleReviews) {
        this.dismissStaleReviews = dismissStaleReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dismissal_restrictions")
    public ProtectedBranchPullRequestReviewDismissalRestrictions dismissalRestrictions;
    public ProtectedBranchPullRequestReview withDismissalRestrictions(ProtectedBranchPullRequestReviewDismissalRestrictions dismissalRestrictions) {
        this.dismissalRestrictions = dismissalRestrictions;
        return this;
    }
    @JsonProperty("require_code_owner_reviews")
    public Boolean requireCodeOwnerReviews;
    public ProtectedBranchPullRequestReview withRequireCodeOwnerReviews(Boolean requireCodeOwnerReviews) {
        this.requireCodeOwnerReviews = requireCodeOwnerReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_approving_review_count")
    public Long requiredApprovingReviewCount;
    public ProtectedBranchPullRequestReview withRequiredApprovingReviewCount(Long requiredApprovingReviewCount) {
        this.requiredApprovingReviewCount = requiredApprovingReviewCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ProtectedBranchPullRequestReview withUrl(String url) {
        this.url = url;
        return this;
    }
}