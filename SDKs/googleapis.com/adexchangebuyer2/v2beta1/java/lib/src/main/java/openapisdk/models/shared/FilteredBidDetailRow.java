package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilteredBidDetailRow
 * The number of filtered bids with the specified dimension values, among those filtered due to the requested filtering reason (for example, creative status), that have the specified detail.
**/
public class FilteredBidDetailRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidCount")
    public MetricValue bidCount;
    public FilteredBidDetailRow withBidCount(MetricValue bidCount) {
        this.bidCount = bidCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detail")
    public String detail;
    public FilteredBidDetailRow withDetail(String detail) {
        this.detail = detail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("detailId")
    public Integer detailId;
    public FilteredBidDetailRow withDetailId(Integer detailId) {
        this.detailId = detailId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowDimensions")
    public RowDimensions rowDimensions;
    public FilteredBidDetailRow withRowDimensions(RowDimensions rowDimensions) {
        this.rowDimensions = rowDimensions;
        return this;
    }
}