package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeveloperMetadataLocation
 * A location where metadata may be associated in a spreadsheet.
**/
public class DeveloperMetadataLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionRange")
    public DimensionRange dimensionRange;
    public DeveloperMetadataLocation withDimensionRange(DimensionRange dimensionRange) {
        this.dimensionRange = dimensionRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locationType")
    public DeveloperMetadataLocationLocationTypeEnum locationType;
    public DeveloperMetadataLocation withLocationType(DeveloperMetadataLocationLocationTypeEnum locationType) {
        this.locationType = locationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public DeveloperMetadataLocation withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spreadsheet")
    public Boolean spreadsheet;
    public DeveloperMetadataLocation withSpreadsheet(Boolean spreadsheet) {
        this.spreadsheet = spreadsheet;
        return this;
    }
}