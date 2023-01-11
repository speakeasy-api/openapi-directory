package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NonBillableWinningBidStatusRow
 * The number of winning bids with the specified dimension values for which the buyer was not billed, as described by the specified status.
**/
public class NonBillableWinningBidStatusRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidCount")
    public MetricValue bidCount;
    public NonBillableWinningBidStatusRow withBidCount(MetricValue bidCount) {
        this.bidCount = bidCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowDimensions")
    public RowDimensions rowDimensions;
    public NonBillableWinningBidStatusRow withRowDimensions(RowDimensions rowDimensions) {
        this.rowDimensions = rowDimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public NonBillableWinningBidStatusRowStatusEnum status;
    public NonBillableWinningBidStatusRow withStatus(NonBillableWinningBidStatusRowStatusEnum status) {
        this.status = status;
        return this;
    }
}