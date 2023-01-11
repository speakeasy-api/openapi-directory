package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionRange
 * A range along a single dimension on a sheet. All indexes are zero-based. Indexes are half open: the start index is inclusive and the end index is exclusive. Missing indexes indicate the range is unbounded on that side.
**/
public class DimensionRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public DimensionRangeDimensionEnum dimension;
    public DimensionRange withDimension(DimensionRangeDimensionEnum dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endIndex")
    public Integer endIndex;
    public DimensionRange withEndIndex(Integer endIndex) {
        this.endIndex = endIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public DimensionRange withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startIndex")
    public Integer startIndex;
    public DimensionRange withStartIndex(Integer startIndex) {
        this.startIndex = startIndex;
        return this;
    }
}