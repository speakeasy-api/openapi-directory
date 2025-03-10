/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions - Specify which users, teams, and apps can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
 */
public class ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions {
    /**
     * The list of app `slug`s with dismissal access
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("apps")
    public String[] apps;

    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions withApps(String[] apps) {
        this.apps = apps;
        return this;
    }
    
    /**
     * The list of team `slug`s with dismissal access
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teams")
    public String[] teams;

    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
    
    /**
     * The list of user `login`s with dismissal access
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public String[] users;

    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions withUsers(String[] users) {
        this.users = users;
        return this;
    }
    
    public ReposUpdateBranchProtectionRequestBodyRequiredPullRequestReviewsDismissalRestrictions(){}
}
