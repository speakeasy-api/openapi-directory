package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddSheetRequest
 * Adds a new sheet. When a sheet is added at a given index, all subsequent sheets' indexes are incremented. To add an object sheet, use AddChartRequest instead and specify EmbeddedObjectPosition.sheetId or EmbeddedObjectPosition.newSheet.
**/
public class AddSheetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public SheetProperties properties;
    public AddSheetRequest withProperties(SheetProperties properties) {
        this.properties = properties;
        return this;
    }
}