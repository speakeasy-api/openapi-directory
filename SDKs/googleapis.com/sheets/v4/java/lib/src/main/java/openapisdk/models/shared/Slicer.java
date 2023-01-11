package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Slicer
 * A slicer in a sheet.
**/
public class Slicer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public EmbeddedObjectPosition position;
    public Slicer withPosition(EmbeddedObjectPosition position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("slicerId")
    public Integer slicerId;
    public Slicer withSlicerId(Integer slicerId) {
        this.slicerId = slicerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public SlicerSpec spec;
    public Slicer withSpec(SlicerSpec spec) {
        this.spec = spec;
        return this;
    }
}