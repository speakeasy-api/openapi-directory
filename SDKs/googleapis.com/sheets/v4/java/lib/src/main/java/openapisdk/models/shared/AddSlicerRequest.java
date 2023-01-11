package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddSlicerRequest
 * Adds a slicer to a sheet in the spreadsheet.
**/
public class AddSlicerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slicer")
    public Slicer slicer;
    public AddSlicerRequest withSlicer(Slicer slicer) {
        this.slicer = slicer;
        return this;
    }
}