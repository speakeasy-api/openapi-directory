package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VolumeVolumeInfoDimensions
 * Physical dimensions of this volume.
**/
public class VolumeVolumeInfoDimensions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("height")
    public String height;
    public VolumeVolumeInfoDimensions withHeight(String height) {
        this.height = height;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thickness")
    public String thickness;
    public VolumeVolumeInfoDimensions withThickness(String thickness) {
        this.thickness = thickness;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("width")
    public String width;
    public VolumeVolumeInfoDimensions withWidth(String width) {
        this.width = width;
        return this;
    }
}