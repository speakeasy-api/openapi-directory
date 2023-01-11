package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProtectedBranch
 * Branch protections protect branches
**/
public class ProtectedBranch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_deletions")
    public ProtectedBranchAllowDeletions allowDeletions;
    public ProtectedBranch withAllowDeletions(ProtectedBranchAllowDeletions allowDeletions) {
        this.allowDeletions = allowDeletions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_force_pushes")
    public ProtectedBranchAllowForcePushes allowForcePushes;
    public ProtectedBranch withAllowForcePushes(ProtectedBranchAllowForcePushes allowForcePushes) {
        this.allowForcePushes = allowForcePushes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enforce_admins")
    public ProtectedBranchEnforceAdmins enforceAdmins;
    public ProtectedBranch withEnforceAdmins(ProtectedBranchEnforceAdmins enforceAdmins) {
        this.enforceAdmins = enforceAdmins;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_conversation_resolution")
    public ProtectedBranchRequiredConversationResolution requiredConversationResolution;
    public ProtectedBranch withRequiredConversationResolution(ProtectedBranchRequiredConversationResolution requiredConversationResolution) {
        this.requiredConversationResolution = requiredConversationResolution;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_linear_history")
    public ProtectedBranchRequiredLinearHistory requiredLinearHistory;
    public ProtectedBranch withRequiredLinearHistory(ProtectedBranchRequiredLinearHistory requiredLinearHistory) {
        this.requiredLinearHistory = requiredLinearHistory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_pull_request_reviews")
    public ProtectedBranchRequiredPullRequestReviews requiredPullRequestReviews;
    public ProtectedBranch withRequiredPullRequestReviews(ProtectedBranchRequiredPullRequestReviews requiredPullRequestReviews) {
        this.requiredPullRequestReviews = requiredPullRequestReviews;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_signatures")
    public ProtectedBranchRequiredSignatures requiredSignatures;
    public ProtectedBranch withRequiredSignatures(ProtectedBranchRequiredSignatures requiredSignatures) {
        this.requiredSignatures = requiredSignatures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_status_checks")
    public StatusCheckPolicy requiredStatusChecks;
    public ProtectedBranch withRequiredStatusChecks(StatusCheckPolicy requiredStatusChecks) {
        this.requiredStatusChecks = requiredStatusChecks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("restrictions")
    public BranchRestrictionPolicy restrictions;
    public ProtectedBranch withRestrictions(BranchRestrictionPolicy restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    @JsonProperty("url")
    public String url;
    public ProtectedBranch withUrl(String url) {
        this.url = url;
        return this;
    }
}