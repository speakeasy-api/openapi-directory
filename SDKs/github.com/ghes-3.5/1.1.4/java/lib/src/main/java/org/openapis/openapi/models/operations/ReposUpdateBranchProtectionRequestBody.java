/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposUpdateBranchProtectionRequestBody {
    /**
     * Allows deletion of the protected branch by anyone with write access to the repository. Set to `false` to prevent deletion of the protected branch. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/enterprise-server@3.5/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_deletions")
    public Boolean allowDeletions;

    public ReposUpdateBranchProtectionRequestBody withAllowDeletions(Boolean allowDeletions) {
        this.allowDeletions = allowDeletions;
        return this;
    }
    
    /**
     * Permits force pushes to the protected branch by anyone with write access to the repository. Set to `true` to allow force pushes. Set to `false` or `null` to block force pushes. Default: `false`. For more information, see "[Enabling force pushes to a protected branch](https://docs.github.com/enterprise-server@3.5/github/administering-a-repository/enabling-force-pushes-to-a-protected-branch)" in the GitHub Help documentation."
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allow_force_pushes")
    public Boolean allowForcePushes;

    public ReposUpdateBranchProtectionRequestBody withAllowForcePushes(Boolean allowForcePushes) {
        this.allowForcePushes = allowForcePushes;
        return this;
    }
    
    /**
     * If set to `true`, the `restrictions` branch protection settings which limits who can push will also block pushes which create new branches, unless the push is initiated by a user, team, or app which has the ability to push. Set to `true` to restrict new branch creation. Default: `false`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("block_creations")
    public Boolean blockCreations;

    public ReposUpdateBranchProtectionRequestBody withBlockCreations(Boolean blockCreations) {
        this.blockCreations = blockCreations;
        return this;
    }
    
    /**
     * Enforce all configured restrictions for administrators. Set to `true` to enforce required status checks for repository administrators. Set to `null` to disable.
     */
    @JsonProperty("enforce_admins")
    public Boolean enforceAdmins;

    public ReposUpdateBranchProtectionRequestBody withEnforceAdmins(Boolean enforceAdmins) {
        this.enforceAdmins = enforceAdmins;
        return this;
    }
    
    /**
     * Requires all conversations on code to be resolved before a pull request can be merged into a branch that matches this rule. Set to `false` to disable. Default: `false`.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_conversation_resolution")
    public Boolean requiredConversationResolution;

    public ReposUpdateBranchProtectionRequestBody withRequiredConversationResolution(Boolean requiredConversationResolution) {
        this.requiredConversationResolution = requiredConversationResolution;
        return this;
    }
    
    /**
     * Enforces a linear commit Git history, which prevents anyone from pushing merge commits to a branch. Set to `true` to enforce a linear commit history. Set to `false` to disable a linear commit Git history. Your repository must allow squash merging or rebase merging before you can enable a linear commit history. Default: `false`. For more information, see "[Requiring a linear commit history](https://docs.github.com/enterprise-server@3.5/github/administering-a-repository/requiring-a-linear-commit-history)" in the GitHub Help documentation.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required_linear_history")
    public Boolean requiredLinearHistory;

    public ReposUpdateBranchProtectionRequestBody withRequiredLinearHistory(Boolean requiredLinearHistory) {
        this.requiredLinearHistory = requiredLinearHistory;
        return this;
    }
    
    /**
     * Require at least one approving review on a pull request, before merging. Set to `null` to disable.
     */
    @JsonProperty("required_pull_request_reviews")
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews requiredPullRequestReviews;

    public ReposUpdateBranchProtectionRequestBody withRequiredPullRequestReviews(ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews requiredPullRequestReviews) {
        this.requiredPullRequestReviews = requiredPullRequestReviews;
        return this;
    }
    
    /**
     * Require status checks to pass before merging. Set to `null` to disable.
     */
    @JsonProperty("required_status_checks")
    public ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks requiredStatusChecks;

    public ReposUpdateBranchProtectionRequestBody withRequiredStatusChecks(ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks requiredStatusChecks) {
        this.requiredStatusChecks = requiredStatusChecks;
        return this;
    }
    
    /**
     * Restrict who can push to the protected branch. User, app, and team `restrictions` are only available for organization-owned repositories. Set to `null` to disable.
     */
    @JsonProperty("restrictions")
    public ReposUpdateBranchProtectionRequestBodyRestrictions restrictions;

    public ReposUpdateBranchProtectionRequestBody withRestrictions(ReposUpdateBranchProtectionRequestBodyRestrictions restrictions) {
        this.restrictions = restrictions;
        return this;
    }
    
    public ReposUpdateBranchProtectionRequestBody(@JsonProperty("enforce_admins") Boolean enforceAdmins, @JsonProperty("required_pull_request_reviews") ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviews requiredPullRequestReviews, @JsonProperty("required_status_checks") ReposUpdateBranchProtectionRequestBodyRequiredStatusChecks requiredStatusChecks, @JsonProperty("restrictions") ReposUpdateBranchProtectionRequestBodyRestrictions restrictions) {
        this.enforceAdmins = enforceAdmins;
        this.requiredPullRequestReviews = requiredPullRequestReviews;
        this.requiredStatusChecks = requiredStatusChecks;
        this.restrictions = restrictions;
  }
}
