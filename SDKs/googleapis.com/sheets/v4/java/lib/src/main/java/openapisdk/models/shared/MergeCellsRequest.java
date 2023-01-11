package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MergeCellsRequest
 * Merges all cells in the range.
**/
public class MergeCellsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mergeType")
    public MergeCellsRequestMergeTypeEnum mergeType;
    public MergeCellsRequest withMergeType(MergeCellsRequestMergeTypeEnum mergeType) {
        this.mergeType = mergeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("range")
    public GridRange range;
    public MergeCellsRequest withRange(GridRange range) {
        this.range = range;
        return this;
    }
}