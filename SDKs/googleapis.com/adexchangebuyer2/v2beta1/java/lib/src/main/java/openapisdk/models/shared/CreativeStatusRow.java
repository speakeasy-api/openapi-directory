package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreativeStatusRow
 * The number of bids with the specified dimension values that did not win the auction (either were filtered pre-auction or lost the auction), as described by the specified creative status.
**/
public class CreativeStatusRow {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bidCount")
    public MetricValue bidCount;
    public CreativeStatusRow withBidCount(MetricValue bidCount) {
        this.bidCount = bidCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("creativeStatusId")
    public Integer creativeStatusId;
    public CreativeStatusRow withCreativeStatusId(Integer creativeStatusId) {
        this.creativeStatusId = creativeStatusId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowDimensions")
    public RowDimensions rowDimensions;
    public CreativeStatusRow withRowDimensions(RowDimensions rowDimensions) {
        this.rowDimensions = rowDimensions;
        return this;
    }
}