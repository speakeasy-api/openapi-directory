package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GoogleCloudContactcenterinsightsV1CalculateStatsResponse
 * The response for calculating conversation statistics.
**/
public class GoogleCloudContactcenterinsightsV1CalculateStatsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageDuration")
    public String averageDuration;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponse withAverageDuration(String averageDuration) {
        this.averageDuration = averageDuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("averageTurnCount")
    public Integer averageTurnCount;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponse withAverageTurnCount(Integer averageTurnCount) {
        this.averageTurnCount = averageTurnCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationCount")
    public Integer conversationCount;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponse withConversationCount(Integer conversationCount) {
        this.conversationCount = conversationCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversationCountTimeSeries")
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries conversationCountTimeSeries;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponse withConversationCountTimeSeries(GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries conversationCountTimeSeries) {
        this.conversationCountTimeSeries = conversationCountTimeSeries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customHighlighterMatches")
    public java.util.Map<String, Integer> customHighlighterMatches;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponse withCustomHighlighterMatches(java.util.Map<String, Integer> customHighlighterMatches) {
        this.customHighlighterMatches = customHighlighterMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueMatches")
    public java.util.Map<String, Integer> issueMatches;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponse withIssueMatches(java.util.Map<String, Integer> issueMatches) {
        this.issueMatches = issueMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issueMatchesStats")
    public java.util.Map<String, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats> issueMatchesStats;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponse withIssueMatchesStats(java.util.Map<String, GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats> issueMatchesStats) {
        this.issueMatchesStats = issueMatchesStats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("smartHighlighterMatches")
    public java.util.Map<String, Integer> smartHighlighterMatches;
    public GoogleCloudContactcenterinsightsV1CalculateStatsResponse withSmartHighlighterMatches(java.util.Map<String, Integer> smartHighlighterMatches) {
        this.smartHighlighterMatches = smartHighlighterMatches;
        return this;
    }
}