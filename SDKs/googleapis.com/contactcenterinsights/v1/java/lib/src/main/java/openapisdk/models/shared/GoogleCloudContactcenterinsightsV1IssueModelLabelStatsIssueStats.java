package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issue")
    public String issue;
    public GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats withIssue(String issue) {
        this.issue = issue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("labeledConversationsCount")
    public String labeledConversationsCount;
    public GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats withLabeledConversationsCount(String labeledConversationsCount) {
        this.labeledConversationsCount = labeledConversationsCount;
        return this;
    }
}