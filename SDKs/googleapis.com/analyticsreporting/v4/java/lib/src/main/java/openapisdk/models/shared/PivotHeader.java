package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PivotHeader
 * The headers for each of the pivot sections defined in the request.
**/
public class PivotHeader {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pivotHeaderEntries")
    public PivotHeaderEntry[] pivotHeaderEntries;
    public PivotHeader withPivotHeaderEntries(PivotHeaderEntry[] pivotHeaderEntries) {
        this.pivotHeaderEntries = pivotHeaderEntries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("totalPivotGroupsCount")
    public Integer totalPivotGroupsCount;
    public PivotHeader withTotalPivotGroupsCount(Integer totalPivotGroupsCount) {
        this.totalPivotGroupsCount = totalPivotGroupsCount;
        return this;
    }
}