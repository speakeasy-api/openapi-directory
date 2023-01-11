package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions
 * Specify which users and teams can dismiss pull request reviews. Pass an empty `dismissal_restrictions` object to disable. User and team `dismissal_restrictions` are only available for organization-owned repositories. Omit this parameter for personal repositories.
**/
public class ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("teams")
    public String[] teams;
    public ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions withTeams(String[] teams) {
        this.teams = teams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("users")
    public String[] users;
    public ReposUpdatePullRequestReviewProtectionRequestBodyDismissalRestrictions withUsers(String[] users) {
        this.users = users;
        return this;
    }
}