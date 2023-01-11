package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CopyPasteRequest
 * Copies data from the source to the destination.
**/
public class CopyPasteRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destination")
    public GridRange destination;
    public CopyPasteRequest withDestination(GridRange destination) {
        this.destination = destination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pasteOrientation")
    public CopyPasteRequestPasteOrientationEnum pasteOrientation;
    public CopyPasteRequest withPasteOrientation(CopyPasteRequestPasteOrientationEnum pasteOrientation) {
        this.pasteOrientation = pasteOrientation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pasteType")
    public CopyPasteRequestPasteTypeEnum pasteType;
    public CopyPasteRequest withPasteType(CopyPasteRequestPasteTypeEnum pasteType) {
        this.pasteType = pasteType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public GridRange source;
    public CopyPasteRequest withSource(GridRange source) {
        this.source = source;
        return this;
    }
}