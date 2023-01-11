package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AddSlicerResponse
 * The result of adding a slicer to a spreadsheet.
**/
public class AddSlicerResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slicer")
    public Slicer slicer;
    public AddSlicerResponse withSlicer(Slicer slicer) {
        this.slicer = slicer;
        return this;
    }
}