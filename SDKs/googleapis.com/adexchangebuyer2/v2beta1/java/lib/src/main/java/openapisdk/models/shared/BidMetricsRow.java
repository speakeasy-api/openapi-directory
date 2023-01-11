package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BidMetricsRow
 * The set of metrics that are measured in numbers of bids, representing how many bids with the specified dimension values were considered eligible at each stage of the bidding funnel;
**/
public class BidMetricsRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bids")
    public MetricValue bids;
    public BidMetricsRow withBids(MetricValue bids) {
        this.bids = bids;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidsInAuction")
    public MetricValue bidsInAuction;
    public BidMetricsRow withBidsInAuction(MetricValue bidsInAuction) {
        this.bidsInAuction = bidsInAuction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billedImpressions")
    public MetricValue billedImpressions;
    public BidMetricsRow withBilledImpressions(MetricValue billedImpressions) {
        this.billedImpressions = billedImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionsWon")
    public MetricValue impressionsWon;
    public BidMetricsRow withImpressionsWon(MetricValue impressionsWon) {
        this.impressionsWon = impressionsWon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("measurableImpressions")
    public MetricValue measurableImpressions;
    public BidMetricsRow withMeasurableImpressions(MetricValue measurableImpressions) {
        this.measurableImpressions = measurableImpressions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reachedQueries")
    public MetricValue reachedQueries;
    public BidMetricsRow withReachedQueries(MetricValue reachedQueries) {
        this.reachedQueries = reachedQueries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowDimensions")
    public RowDimensions rowDimensions;
    public BidMetricsRow withRowDimensions(RowDimensions rowDimensions) {
        this.rowDimensions = rowDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("viewableImpressions")
    public MetricValue viewableImpressions;
    public BidMetricsRow withViewableImpressions(MetricValue viewableImpressions) {
        this.viewableImpressions = viewableImpressions;
        return this;
    }
}