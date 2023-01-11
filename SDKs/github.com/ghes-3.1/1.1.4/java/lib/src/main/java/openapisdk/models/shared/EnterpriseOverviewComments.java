package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewComments {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_commit_comments")
    public Long totalCommitComments;
    public EnterpriseOverviewComments withTotalCommitComments(Long totalCommitComments) {
        this.totalCommitComments = totalCommitComments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_gist_comments")
    public Long totalGistComments;
    public EnterpriseOverviewComments withTotalGistComments(Long totalGistComments) {
        this.totalGistComments = totalGistComments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_issue_comments")
    public Long totalIssueComments;
    public EnterpriseOverviewComments withTotalIssueComments(Long totalIssueComments) {
        this.totalIssueComments = totalIssueComments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_pull_request_comments")
    public Long totalPullRequestComments;
    public EnterpriseOverviewComments withTotalPullRequestComments(Long totalPullRequestComments) {
        this.totalPullRequestComments = totalPullRequestComments;
        return this;
    }
}