package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmbeddedObjectPosition
 * The position of an embedded object such as a chart.
**/
public class EmbeddedObjectPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("newSheet")
    public Boolean newSheet;
    public EmbeddedObjectPosition withNewSheet(Boolean newSheet) {
        this.newSheet = newSheet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overlayPosition")
    public OverlayPosition overlayPosition;
    public EmbeddedObjectPosition withOverlayPosition(OverlayPosition overlayPosition) {
        this.overlayPosition = overlayPosition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sheetId")
    public Integer sheetId;
    public EmbeddedObjectPosition withSheetId(Integer sheetId) {
        this.sheetId = sheetId;
        return this;
    }
}