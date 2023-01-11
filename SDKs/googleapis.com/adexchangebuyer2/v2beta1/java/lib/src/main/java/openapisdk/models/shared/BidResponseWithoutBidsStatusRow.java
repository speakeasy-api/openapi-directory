package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BidResponseWithoutBidsStatusRow
 * The number of impressions with the specified dimension values that were considered to have no applicable bids, as described by the specified status.
**/
public class BidResponseWithoutBidsStatusRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("impressionCount")
    public MetricValue impressionCount;
    public BidResponseWithoutBidsStatusRow withImpressionCount(MetricValue impressionCount) {
        this.impressionCount = impressionCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowDimensions")
    public RowDimensions rowDimensions;
    public BidResponseWithoutBidsStatusRow withRowDimensions(RowDimensions rowDimensions) {
        this.rowDimensions = rowDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public BidResponseWithoutBidsStatusRowStatusEnum status;
    public BidResponseWithoutBidsStatusRow withStatus(BidResponseWithoutBidsStatusRowStatusEnum status) {
        this.status = status;
        return this;
    }
}