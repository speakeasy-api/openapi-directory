package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImpressionMetricsRow
 * The set of metrics that are measured in numbers of impressions, representing how many impressions with the specified dimension values were considered eligible at each stage of the bidding funnel.
**/
public class ImpressionMetricsRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availableImpressions")
    public MetricValue availableImpressions;
    public ImpressionMetricsRow withAvailableImpressions(MetricValue availableImpressions) {
        this.availableImpressions = availableImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidRequests")
    public MetricValue bidRequests;
    public ImpressionMetricsRow withBidRequests(MetricValue bidRequests) {
        this.bidRequests = bidRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inventoryMatches")
    public MetricValue inventoryMatches;
    public ImpressionMetricsRow withInventoryMatches(MetricValue inventoryMatches) {
        this.inventoryMatches = inventoryMatches;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responsesWithBids")
    public MetricValue responsesWithBids;
    public ImpressionMetricsRow withResponsesWithBids(MetricValue responsesWithBids) {
        this.responsesWithBids = responsesWithBids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowDimensions")
    public RowDimensions rowDimensions;
    public ImpressionMetricsRow withRowDimensions(RowDimensions rowDimensions) {
        this.rowDimensions = rowDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successfulResponses")
    public MetricValue successfulResponses;
    public ImpressionMetricsRow withSuccessfulResponses(MetricValue successfulResponses) {
        this.successfulResponses = successfulResponses;
        return this;
    }
}