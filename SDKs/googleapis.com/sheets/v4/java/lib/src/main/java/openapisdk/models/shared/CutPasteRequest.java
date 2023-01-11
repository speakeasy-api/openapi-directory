package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CutPasteRequest
 * Moves data from the source to the destination.
**/
public class CutPasteRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public GridCoordinate destination;
    public CutPasteRequest withDestination(GridCoordinate destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pasteType")
    public CutPasteRequestPasteTypeEnum pasteType;
    public CutPasteRequest withPasteType(CutPasteRequestPasteTypeEnum pasteType) {
        this.pasteType = pasteType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GridRange source;
    public CutPasteRequest withSource(GridRange source) {
        this.source = source;
        return this;
    }
}