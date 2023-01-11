package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AppendDimensionRequest
 * Appends rows or columns to the end of a sheet.
**/
public class AppendDimensionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimension")
    public AppendDimensionRequestDimensionEnum dimension;
    public AppendDimensionRequest withDimension(AppendDimensionRequestDimensionEnum dimension) {
        this.dimension = dimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("length")
    public Integer length;
    public AppendDimensionRequest withLength(Integer length) {
        this.length = length;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public AppendDimensionRequest withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}