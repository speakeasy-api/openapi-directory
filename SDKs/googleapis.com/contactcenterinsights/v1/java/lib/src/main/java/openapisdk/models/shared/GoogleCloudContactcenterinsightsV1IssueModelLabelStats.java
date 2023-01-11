package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1IssueModelLabelStats
 * Aggregated statistics about an issue model.
**/
public class GoogleCloudContactcenterinsightsV1IssueModelLabelStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("analyzedConversationsCount")
    public String analyzedConversationsCount;
    public GoogleCloudContactcenterinsightsV1IssueModelLabelStats withAnalyzedConversationsCount(String analyzedConversationsCount) {
        this.analyzedConversationsCount = analyzedConversationsCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueStats")
    public java.util.Map<String, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats> issueStats;
    public GoogleCloudContactcenterinsightsV1IssueModelLabelStats withIssueStats(java.util.Map<String, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats> issueStats) {
        this.issueStats = issueStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unclassifiedConversationsCount")
    public String unclassifiedConversationsCount;
    public GoogleCloudContactcenterinsightsV1IssueModelLabelStats withUnclassifiedConversationsCount(String unclassifiedConversationsCount) {
        this.unclassifiedConversationsCount = unclassifiedConversationsCount;
        return this;
    }
}