package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateSlicerSpecRequest
 * Updates a slicer's specifications. (This does not move or resize a slicer. To move or resize a slicer use UpdateEmbeddedObjectPositionRequest.
**/
public class UpdateSlicerSpecRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public String fields;
    public UpdateSlicerSpecRequest withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slicerId")
    public Integer slicerId;
    public UpdateSlicerSpecRequest withSlicerId(Integer slicerId) {
        this.slicerId = slicerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public SlicerSpec spec;
    public UpdateSlicerSpecRequest withSpec(SlicerSpec spec) {
        this.spec = spec;
        return this;
    }
}