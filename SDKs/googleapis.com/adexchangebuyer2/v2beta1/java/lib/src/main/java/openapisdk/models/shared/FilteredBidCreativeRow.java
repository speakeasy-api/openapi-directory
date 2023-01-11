package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FilteredBidCreativeRow
 * The number of filtered bids with the specified dimension values that have the specified creative.
**/
public class FilteredBidCreativeRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidCount")
    public MetricValue bidCount;
    public FilteredBidCreativeRow withBidCount(MetricValue bidCount) {
        this.bidCount = bidCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeId")
    public String creativeId;
    public FilteredBidCreativeRow withCreativeId(String creativeId) {
        this.creativeId = creativeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowDimensions")
    public RowDimensions rowDimensions;
    public FilteredBidCreativeRow withRowDimensions(RowDimensions rowDimensions) {
        this.rowDimensions = rowDimensions;
        return this;
    }
}