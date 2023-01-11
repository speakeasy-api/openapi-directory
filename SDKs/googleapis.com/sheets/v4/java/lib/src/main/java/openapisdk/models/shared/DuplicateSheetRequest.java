package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DuplicateSheetRequest
 * Duplicates the contents of a sheet.
**/
public class DuplicateSheetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insertSheetIndex")
    public Integer insertSheetIndex;
    public DuplicateSheetRequest withInsertSheetIndex(Integer insertSheetIndex) {
        this.insertSheetIndex = insertSheetIndex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSheetId")
    public Integer newSheetId;
    public DuplicateSheetRequest withNewSheetId(Integer newSheetId) {
        this.newSheetId = newSheetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSheetName")
    public String newSheetName;
    public DuplicateSheetRequest withNewSheetName(String newSheetName) {
        this.newSheetName = newSheetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceSheetId")
    public Integer sourceSheetId;
    public DuplicateSheetRequest withSourceSheetId(Integer sourceSheetId) {
        this.sourceSheetId = sourceSheetId;
        return this;
    }
}